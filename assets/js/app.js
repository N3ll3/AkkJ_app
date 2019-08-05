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
      $boardGames = xmlDoc.find("boardgame");
      $.each($boardGames, function(i, boardgame) {
        let name = boardgame.firstElementChild.textContent;
        let objectId = boardgame.attributes[0].value;
        let option = new Option(name, objectId);
        $("#bggame").append(option);
      });
    }
  });
});

$("#fillForm").submit(function(e) {
  e.preventDefault();
});
