/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require("../css/app.css");
// const routes = require("../../public/js/fos_js_routes.json");
// import Routing from "../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";

// Routing.setRoutingData(routes);
// Routing.generate("rep_log_list");

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require("jquery");

const proxy = "http://localhost:8080/";

$("#searchBGG").submit(e => {
  e.preventDefault();
  let bgameBGG = $("#bgameBGG").val();
  $.ajax({
    type: "GET",
    url: proxy + "http://boardgamegeek.com/xmlapi2/search",
    data: "query=" + bgameBGG,
    dataType: "xml",
    success: function(data) {
      $(data)
        .find("item")
        .each(function() {
          let id = $(this).attr("id");
          let name = $(this)
            .find("name")
            .attr("value");
          let option = new Option(name, id);
          $("#bggame").append(option);
        });
    }
  });
});

$("#bggchoice").submit(e => {
  const selectedGame = $("#bggame")
    .children("option:selected")
    .val();
  e.preventDefault();
  $.ajax({
    type: "GET",
    url: proxy + "https://www.boardgamegeek.com/xmlapi2/thing",
    data: "id=" + selectedGame + "&type=boardgame",
    success: function(xml) {
      // recup du nom
      let name = $("#bggame")
        .children("option:selected")
        .text();

      //vide le select
      $("#bggame option").each(function() {
        $(this).remove();
      });

      //parser du xml recu
      $(xml).find("item");

      let description = $(xml)
        .find("description")
        .text();
      let duration = $(xml)
        .find("playingtime")
        .attr("value");
      let minplayers = $(xml)
        .find("minplayers")
        .attr("value");
      let maxplayers = $(xml)
        .find("maxplayers")
        .attr("value");

      const categories = [];
      $(xml)
        .find("link")
        .each(function() {
          const type = $(this).attr("type");
          if (type == "boardgamecategory") {
            const category = $(this).attr("value");
            categories.push(category);
          }
        });

      const labelsName = new Object();
      $("#add_bgame_form_category .form-check-label").each(function() {
        const labelName = $(this).text();
        const labelFor = $(this)[0].htmlFor;
        labelsName[labelName] = labelFor;
      });
      for (label in labelsName) {
        categories.forEach(category => {
          if (category == label) {
            let id = labelsName[label];
            $(`#${id}`).prop("checked", true);
          }
        });
      }

      // pre remplissage des donnees dans formulaire
      const regex = /<br\s*[\/]?>/gi;
      let descriptionWithoutbr = description.replace(regex, "");
      $("#add_bgame_form_name").val(name);
      const instance_name = "add_bgame_form_description";
      CKEDITOR.instances[instance_name].insertHtml(
        `<p>${descriptionWithoutbr}</p>`
      );
      $("#add_bgame_form_duration").val(duration);
      $("#add_bgame_form_minNbPlayers").val(minplayers);
      $("#add_bgame_form_maxNbPlayers").val(maxplayers);

      // categories.each(function (category) {

      // });
    }
  });
});
