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

$("#searchBGG").submit(function(e) {
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

$("#bggame").change(function() {
  const selectedGame = $(this)
    .children("option:selected")
    .val();
  console.log(selectedGame);
  $.ajax({
    type: "GET",
    url:
      proxy + "https://www.boardgamegeek.com/xmlapi/boardgame/" + selectedGame,
    success: function(data) {
      let xmlDoc = $("boardgame", data);
      console.log(xmlDoc.childNodes);
      const boardGame = xmlDoc.find("boardgame");
      const name = xmlDoc.find("name");
      const description = xmlDoc.find("description");
      const maxplaytime = xmlDoc.find("maxplaytime");
      const minplayers = xmlDoc.find("minplayers");
      const maxplayers = xmlDoc.find("maxplayers");
      const categories = xmlDoc.find("boardgamecategory");
      const mechanisms = xmlDoc.find("boardgamemechanic");

      console.log(data);
      console.log(xmlDoc);

      let infos = {
        name: name.textContent,
        description: description.textContent,
        duration: maxplaytime.textContent,
        minNbPlayers: minplayers.textContent,
        maxNbPlayers: maxplayers.textContent,
        categories: [categories.textContent],
        mechanisms: [mechanisms.textContent]
      };
      console.log(infos);
    }
  });
});
