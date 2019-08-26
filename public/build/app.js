(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var proxy = "https://cors-anywhere.herokuapp.com/";
$("#searchBGG").submit(function (e) {
  e.preventDefault();
  var bgameBGG = $("#bgameBGG").val();
  $.ajax({
    type: "GET",
    url: proxy + "http://boardgamegeek.com/xmlapi/search",
    data: "search=" + bgameBGG,
    dataType: "xml",
    success: function success(data) {
      var xmlDoc = $("boardgames", data);
      var boardGames = xmlDoc.find("boardgame");
      $.each(boardGames, function (i, boardgame) {
        var name = boardgame.firstElementChild.textContent;
        var objectId = boardgame.attributes[0].value;
        var option = new Option(name, objectId);
        $("#bggame").append(option);
      });
    }
  });
});
$("#bggchoice").submit(function (e) {
  var selectedGame = $("#bggame").children("option:selected").val();
  e.preventDefault();
  $.ajax({
    type: "GET",
    url: proxy + "https://www.boardgamegeek.com/xmlapi/boardgame/" + selectedGame,
    success: function success(xml) {
      var boardgameInfo = $(xml).find("boardgame");
      var name = $("#bggame").children("option:selected").text();
      var description = boardgameInfo.find("description").text();
      var regex = /<br\s*[\/]?>/gi;
      var descriptionWithoutbr = description.replace(regex, "");
      var duration = boardgameInfo.find("maxplaytime").text();
      var minplayers = boardgameInfo.find("minplayers").text();
      var maxplayers = boardgameInfo.find("maxplayers").text();
      $("#add_bgame_form_name").val(name);
      $("#add_bgame_form_description").val(descriptionWithoutbr);
      $("#add_bgame_form_duration").val(duration);
      $("#add_bgame_form_minNbPlayers").val(minplayers);
      $("#add_bgame_form_maxNbPlayers").val(maxplayers);
    }
  });
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsInByb3h5Iiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJ4bWxEb2MiLCJib2FyZEdhbWVzIiwiZmluZCIsImVhY2giLCJpIiwiYm9hcmRnYW1lIiwibmFtZSIsImZpcnN0RWxlbWVudENoaWxkIiwidGV4dENvbnRlbnQiLCJvYmplY3RJZCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsIm9wdGlvbiIsIk9wdGlvbiIsImFwcGVuZCIsInNlbGVjdGVkR2FtZSIsImNoaWxkcmVuIiwieG1sIiwiYm9hcmRnYW1lSW5mbyIsInRleHQiLCJkZXNjcmlwdGlvbiIsInJlZ2V4IiwiZGVzY3JpcHRpb25XaXRob3V0YnIiLCJyZXBsYWNlIiwiZHVyYXRpb24iLCJtaW5wbGF5ZXJzIiwibWF4cGxheWVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsNENBQUQsQ0FBUCxDLENBRUE7OztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNRSxLQUFLLEdBQUcsc0NBQWQ7QUFFQUQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsTUFBaEIsQ0FBdUIsVUFBQUMsQ0FBQyxFQUFJO0FBQzFCQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxRQUFRLEdBQUdMLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZU0sR0FBZixFQUFmO0FBQ0FOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0xDLFFBQUksRUFBRSxLQUREO0FBRUxDLE9BQUcsRUFBRVIsS0FBSyxHQUFHLHdDQUZSO0FBR0xTLFFBQUksRUFBRSxZQUFZTCxRQUhiO0FBSUxNLFlBQVEsRUFBRSxLQUpMO0FBS0xDLFdBQU8sRUFBRSxpQkFBU0YsSUFBVCxFQUFlO0FBQ3RCLFVBQUlHLE1BQU0sR0FBR2IsQ0FBQyxDQUFDLFlBQUQsRUFBZVUsSUFBZixDQUFkO0FBQ0EsVUFBTUksVUFBVSxHQUFHRCxNQUFNLENBQUNFLElBQVAsQ0FBWSxXQUFaLENBQW5CO0FBQ0FmLE9BQUMsQ0FBQ2dCLElBQUYsQ0FBT0YsVUFBUCxFQUFtQixVQUFTRyxDQUFULEVBQVlDLFNBQVosRUFBdUI7QUFDeEMsWUFBSUMsSUFBSSxHQUFHRCxTQUFTLENBQUNFLGlCQUFWLENBQTRCQyxXQUF2QztBQUNBLFlBQUlDLFFBQVEsR0FBR0osU0FBUyxDQUFDSyxVQUFWLENBQXFCLENBQXJCLEVBQXdCQyxLQUF2QztBQUNBLFlBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVdQLElBQVgsRUFBaUJHLFFBQWpCLENBQWI7QUFDQXRCLFNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYTJCLE1BQWIsQ0FBb0JGLE1BQXBCO0FBQ0QsT0FMRDtBQU1EO0FBZEksR0FBUDtBQWdCRCxDQW5CRDtBQXFCQXpCLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JFLE1BQWhCLENBQXVCLFVBQUFDLENBQUMsRUFBSTtBQUMxQixNQUFNeUIsWUFBWSxHQUFHNUIsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUNsQjZCLFFBRGtCLENBQ1QsaUJBRFMsRUFFbEJ2QixHQUZrQixFQUFyQjtBQUdBSCxHQUFDLENBQUNDLGNBQUY7QUFDQUosR0FBQyxDQUFDTyxJQUFGLENBQU87QUFDTEMsUUFBSSxFQUFFLEtBREQ7QUFFTEMsT0FBRyxFQUNEUixLQUFLLEdBQUcsaURBQVIsR0FBNEQyQixZQUh6RDtBQUlMaEIsV0FBTyxFQUFFLGlCQUFTa0IsR0FBVCxFQUFjO0FBQ3JCLFVBQU1DLGFBQWEsR0FBRy9CLENBQUMsQ0FBQzhCLEdBQUQsQ0FBRCxDQUFPZixJQUFQLENBQVksV0FBWixDQUF0QjtBQUVBLFVBQUlJLElBQUksR0FBR25CLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FDUjZCLFFBRFEsQ0FDQyxpQkFERCxFQUVSRyxJQUZRLEVBQVg7QUFHQSxVQUFJQyxXQUFXLEdBQUdGLGFBQWEsQ0FBQ2hCLElBQWQsQ0FBbUIsYUFBbkIsRUFBa0NpQixJQUFsQyxFQUFsQjtBQUVBLFVBQU1FLEtBQUssR0FBRyxnQkFBZDtBQUNBLFVBQUlDLG9CQUFvQixHQUFHRixXQUFXLENBQUNHLE9BQVosQ0FBb0JGLEtBQXBCLEVBQTJCLEVBQTNCLENBQTNCO0FBQ0ksVUFBSUcsUUFBUSxHQUFHTixhQUFhLENBQUNoQixJQUFkLENBQW1CLGFBQW5CLEVBQWtDaUIsSUFBbEMsRUFBZjtBQUNKLFVBQUlNLFVBQVUsR0FBR1AsYUFBYSxDQUFDaEIsSUFBZCxDQUFtQixZQUFuQixFQUFpQ2lCLElBQWpDLEVBQWpCO0FBQ0EsVUFBSU8sVUFBVSxHQUFHUixhQUFhLENBQUNoQixJQUFkLENBQW1CLFlBQW5CLEVBQWlDaUIsSUFBakMsRUFBakI7QUFFQWhDLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCTSxHQUExQixDQUE4QmEsSUFBOUI7QUFDQW5CLE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDTSxHQUFqQyxDQUFxQzZCLG9CQUFyQztBQUNBbkMsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJNLEdBQTlCLENBQWtDK0IsUUFBbEM7QUFDQXJDLE9BQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDTSxHQUFsQyxDQUFzQ2dDLFVBQXRDO0FBQ0F0QyxPQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ00sR0FBbEMsQ0FBc0NpQyxVQUF0QztBQUNEO0FBdkJJLEdBQVA7QUF5QkQsQ0E5QkQsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKFwiLi4vY3NzL2FwcC5jc3NcIik7XHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXHJcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5jb25zdCBwcm94eSA9IFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXCI7XHJcblxyXG4kKFwiI3NlYXJjaEJHR1wiKS5zdWJtaXQoZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBiZ2FtZUJHRyA9ICQoXCIjYmdhbWVCR0dcIikudmFsKCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwOi8vYm9hcmRnYW1lZ2Vlay5jb20veG1sYXBpL3NlYXJjaFwiLFxyXG4gICAgZGF0YTogXCJzZWFyY2g9XCIgKyBiZ2FtZUJHRyxcclxuICAgIGRhdGFUeXBlOiBcInhtbFwiLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICBsZXQgeG1sRG9jID0gJChcImJvYXJkZ2FtZXNcIiwgZGF0YSk7XHJcbiAgICAgIGNvbnN0IGJvYXJkR2FtZXMgPSB4bWxEb2MuZmluZChcImJvYXJkZ2FtZVwiKTtcclxuICAgICAgJC5lYWNoKGJvYXJkR2FtZXMsIGZ1bmN0aW9uKGksIGJvYXJkZ2FtZSkge1xyXG4gICAgICAgIGxldCBuYW1lID0gYm9hcmRnYW1lLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgICAgIGxldCBvYmplY3RJZCA9IGJvYXJkZ2FtZS5hdHRyaWJ1dGVzWzBdLnZhbHVlO1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKG5hbWUsIG9iamVjdElkKTtcclxuICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNiZ2djaG9pY2VcIikuc3VibWl0KGUgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkR2FtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgIC52YWwoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6XHJcbiAgICAgIHByb3h5ICsgXCJodHRwczovL3d3dy5ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkvYm9hcmRnYW1lL1wiICsgc2VsZWN0ZWRHYW1lLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24oeG1sKSB7XHJcbiAgICAgIGNvbnN0IGJvYXJkZ2FtZUluZm8gPSAkKHhtbCkuZmluZChcImJvYXJkZ2FtZVwiKTtcclxuXHJcbiAgICAgIGxldCBuYW1lID0gJChcIiNiZ2dhbWVcIilcclxuICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgICAgICAudGV4dCgpO1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBib2FyZGdhbWVJbmZvLmZpbmQoXCJkZXNjcmlwdGlvblwiKS50ZXh0KCk7XHJcbiAgIFxyXG4gICAgICBjb25zdCByZWdleCA9IC88YnJcXHMqW1xcL10/Pi9naTtcclxuICAgICAgbGV0IGRlc2NyaXB0aW9uV2l0aG91dGJyID0gZGVzY3JpcHRpb24ucmVwbGFjZShyZWdleCwgXCJcIik7XHJcbiAgICAgICAgICBsZXQgZHVyYXRpb24gPSBib2FyZGdhbWVJbmZvLmZpbmQoXCJtYXhwbGF5dGltZVwiKS50ZXh0KCk7XHJcbiAgICAgIGxldCBtaW5wbGF5ZXJzID0gYm9hcmRnYW1lSW5mby5maW5kKFwibWlucGxheWVyc1wiKS50ZXh0KCk7XHJcbiAgICAgIGxldCBtYXhwbGF5ZXJzID0gYm9hcmRnYW1lSW5mby5maW5kKFwibWF4cGxheWVyc1wiKS50ZXh0KCk7XHJcblxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX25hbWVcIikudmFsKG5hbWUpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2Rlc2NyaXB0aW9uXCIpLnZhbChkZXNjcmlwdGlvbldpdGhvdXRicik7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZHVyYXRpb25cIikudmFsKGR1cmF0aW9uKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9taW5OYlBsYXllcnNcIikudmFsKG1pbnBsYXllcnMpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21heE5iUGxheWVyc1wiKS52YWwobWF4cGxheWVycyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9