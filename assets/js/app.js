/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require("../css/app.css");

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require("jquery");
const proxy = "https://cors-anywhere.herokuapp.com/";

$("#searchBGG").submit(e => {
  e.preventDefault();
  let bgameBGG = $("#bgameBGG").val();
  $.ajax({
    type: "GET",
    url: proxy + "http://boardgamegeek.com/xmlapi/search",
    data: "search=" + bgameBGG,
    dataType: "xml",
    success: function(data) {
      let xmlDoc = $("boardgames", data);
      const boardGames = xmlDoc.find("boardgame");
      $.each(boardGames, function(i, boardgame) {
        let name = boardgame.firstElementChild.textContent;
        let objectId = boardgame.attributes[0].value;
        let option = new Option(name, objectId);
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
    url:
      proxy + "https://www.boardgamegeek.com/xmlapi/boardgame/" + selectedGame,
    success: function(xml) {
      const boardgameInfo = $(xml).find("boardgame");

      let name = $("#bggame")
        .children("option:selected")
        .text();
      let description = boardgameInfo.find("description").text();
      const regex = /<br\s*[\/]?>/gi;
      let descriptionWithoutbr = description.replace(regex, "");
      let duration = boardgameInfo.find("maxplaytime").text();
      let minplayers = boardgameInfo.find("minplayers").text();
      let maxplayers = boardgameInfo.find("maxplayers").text();

      $("#add_bgame_form_name").val(name);
      $("#add_bgame_form_description").val(descriptionWithoutbr);
      $("#add_bgame_form_duration").val(duration);
      $("#add_bgame_form_minNbPlayers").val(minplayers);
      $("#add_bgame_form_maxNbPlayers").val(maxplayers);
    }
  });
});
