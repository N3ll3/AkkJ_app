/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require("../css/app.css");

const routes = require("../../public/js/fos_js_routes.json");
import Routing from "../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";

Routing.setRoutingData(routes);

// document.url
const proxy = "http://localhost:8080/";

$("#searchBGG").submit(e => {
  e.preventDefault();
  let bgameBGG = $("#bgameBGG").val();

  $("#bggame option").each(function() {
    $(this).remove();
  });

  $.ajax({
    type: "GET",
    url: proxy + "http://boardgamegeek.com/xmlapi2/search",
    data: "query=" + bgameBGG,
    dataType: "xml",
    success: function(data) {
      if (
        $(data)
          .find("items")
          .attr("total") == 0
      ) {
        let option = new Option("Aucun résultat");
        $("#bggame").append(option);
      } else {
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
      //parser du xml recu

      // recup Name
      const name = $("#bggame")
        .children("option:selected")
        .text();

      //// TODO : refacto avec function clearSelect()
      $("#bggame option").each(function() {
        $(this).remove();
      });
      $("#imageBgame").remove();

      const image = $(xml)
        .find("image")
        .text();

      const description = $(xml)
        .find("description")
        .text();

      const duration = $(xml)
        .find("playingtime")
        .attr("value");

      const minplayers = $(xml)
        .find("minplayers")
        .attr("value");

      const maxplayers = $(xml)
        .find("maxplayers")
        .attr("value");

      const difficulty = $(xml)
        .find("minage")
        .attr("value");

      const mechanisms = [];
      $(xml)
        .find("link")
        .each(function() {
          const type = $(this).attr("type");
          if (type == "boardgamemechanic") {
            const mechanic = $(this).attr("value");
            mechanisms.push(mechanic);
          }
        });

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

      // pre remplissage des donnees dans formulaire

      //Description
      const regex = /<br\s*[\/]?>/gi;
      let descriptionWithoutbr = description.replace(regex, "");

      //Name
      $("#add_bgame_form_name").val(name);
      $("#add_bgame_form_description").val(`${descriptionWithoutbr}`);

      //image
      $("#add_bgame_form_image_bgg")
        .val(image)
        .hide();
      const imgView = `<figure> <figcaption> Image from BGG </figcaption><img src=${image} alt="image boardgame" width=100 id="imageBgame"></figure>`;
      $("#add_bgame_form_name").after(imgView);

      //Duration
      $("#add_bgame_form_duration").val(duration);

      // Min et Max Players
      $("#add_bgame_form_minNbPlayers").val(minplayers);
      $("#add_bgame_form_maxNbPlayers").val(maxplayers);

      // Difficulty
      if (difficulty < 7) {
        $("#add_bgame_form_difficulty")
          .children("option[value=1]")
          .prop("selected", true);
      } else if (difficulty >= 7 && difficulty < 12) {
        $("#add_bgame_form_difficulty")
          .children("option[value=2]")
          .prop("selected", true);
      } else if (difficulty >= 12 && difficulty < 14) {
        $("#add_bgame_form_difficulty")
          .children("option[value=3]")
          .prop("selected", true);
      } else {
        $("#add_bgame_form_difficulty")
          .children("option[value=4]")
          .prop("selected", true);
      }

      // Mechanism
      const MechanismOptionName = new Object();

      $("#add_bgame_form_mechanism option").each(function() {
        const optionName = $(this).text();
        const id = $(this).val();
        MechanismOptionName[optionName] = id;
      });

      for (let option in MechanismOptionName) {
        mechanisms.forEach(mechanism => {
          if (mechanism == option) {
            let id = MechanismOptionName[option];
            $(`#add_bgame_form_mechanism option[value=${id}]`).attr(
              "selected",
              true
            );
          }
        });
      }

      // Category
      const CategoryOptionName = new Object();
      $("#add_bgame_form_category option").each(function() {
        const optionName = $(this).text();
        const id = $(this).val();
        CategoryOptionName[optionName] = id;
      });

      for (let option in CategoryOptionName) {
        categories.forEach(category => {
          if (category == option) {
            let id = CategoryOptionName[option];
            $(`#add_bgame_form_category option[value=${id}]`).attr(
              "selected",
              true
            );
          }
        });
      }
    }
  });
});

$("#deleteImage").on("click", function() {
  let id = $(this).data("id");
  $.post(Routing.generate("delete_image_bgame", { id: id }))
    .done(function() {
      $("#image").remove();
      $("#deleteImage").hide();
      alert("Image is deleted");
    })
    .fail(function() {
      alert("Image deletion failed");
    });
});

$(".custom-file-input").on("change", function(event) {
  var inputFile = event.currentTarget;
  $(inputFile)
    .parent()
    .find(".custom-file-label")
    .html(inputFile.files[0].name);
});
