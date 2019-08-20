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
$("#bggame").change(function () {
  var selectedGame = $(this).children("option:selected").val();
  console.log(selectedGame);
  $.ajax({
    type: "GET",
    url: proxy + "https://www.boardgamegeek.com/xmlapi/boardgame/" + selectedGame,
    success: function success(data) {
      var xmlDoc = $("boardgame", data);
      console.log(xmlDoc.childNodes);
      var boardGame = xmlDoc.find("boardgame");
      var name = xmlDoc.find("name");
      var description = xmlDoc.find("description");
      var maxplaytime = xmlDoc.find("maxplaytime");
      var minplayers = xmlDoc.find("minplayers");
      var maxplayers = xmlDoc.find("maxplayers");
      var categories = xmlDoc.find("boardgamecategory");
      var mechanisms = xmlDoc.find("boardgamemechanic");
      console.log(data);
      console.log(xmlDoc);
      var infos = {
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

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsInByb3h5Iiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJ4bWxEb2MiLCJib2FyZEdhbWVzIiwiZmluZCIsImVhY2giLCJpIiwiYm9hcmRnYW1lIiwibmFtZSIsImZpcnN0RWxlbWVudENoaWxkIiwidGV4dENvbnRlbnQiLCJvYmplY3RJZCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsIm9wdGlvbiIsIk9wdGlvbiIsImFwcGVuZCIsImNoYW5nZSIsInNlbGVjdGVkR2FtZSIsImNoaWxkcmVuIiwiY29uc29sZSIsImxvZyIsImNoaWxkTm9kZXMiLCJib2FyZEdhbWUiLCJkZXNjcmlwdGlvbiIsIm1heHBsYXl0aW1lIiwibWlucGxheWVycyIsIm1heHBsYXllcnMiLCJjYXRlZ29yaWVzIiwibWVjaGFuaXNtcyIsImluZm9zIiwiZHVyYXRpb24iLCJtaW5OYlBsYXllcnMiLCJtYXhOYlBsYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsNENBQUQsQ0FBUCxDLENBRUE7OztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNRSxLQUFLLEdBQUcsc0NBQWQ7QUFFQUQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2pDQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxRQUFRLEdBQUdMLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZU0sR0FBZixFQUFmO0FBQ0FOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0xDLFFBQUksRUFBRSxLQUREO0FBRUxDLE9BQUcsRUFBRVIsS0FBSyxHQUFHLHdDQUZSO0FBR0xTLFFBQUksRUFBRSxZQUFZTCxRQUhiO0FBSUxNLFlBQVEsRUFBRSxLQUpMO0FBS0xDLFdBQU8sRUFBRSxpQkFBU0YsSUFBVCxFQUFlO0FBQ3RCLFVBQUlHLE1BQU0sR0FBR2IsQ0FBQyxDQUFDLFlBQUQsRUFBZVUsSUFBZixDQUFkO0FBQ0EsVUFBTUksVUFBVSxHQUFHRCxNQUFNLENBQUNFLElBQVAsQ0FBWSxXQUFaLENBQW5CO0FBQ0FmLE9BQUMsQ0FBQ2dCLElBQUYsQ0FBT0YsVUFBUCxFQUFtQixVQUFTRyxDQUFULEVBQVlDLFNBQVosRUFBdUI7QUFDeEMsWUFBSUMsSUFBSSxHQUFHRCxTQUFTLENBQUNFLGlCQUFWLENBQTRCQyxXQUF2QztBQUNBLFlBQUlDLFFBQVEsR0FBR0osU0FBUyxDQUFDSyxVQUFWLENBQXFCLENBQXJCLEVBQXdCQyxLQUF2QztBQUNBLFlBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVdQLElBQVgsRUFBaUJHLFFBQWpCLENBQWI7QUFDQXRCLFNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYTJCLE1BQWIsQ0FBb0JGLE1BQXBCO0FBQ0QsT0FMRDtBQU1EO0FBZEksR0FBUDtBQWdCRCxDQW5CRDtBQXFCQXpCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYTRCLE1BQWIsQ0FBb0IsWUFBVztBQUM3QixNQUFNQyxZQUFZLEdBQUc3QixDQUFDLENBQUMsSUFBRCxDQUFELENBQ2xCOEIsUUFEa0IsQ0FDVCxpQkFEUyxFQUVsQnhCLEdBRmtCLEVBQXJCO0FBR0F5QixTQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWjtBQUNBN0IsR0FBQyxDQUFDTyxJQUFGLENBQU87QUFDTEMsUUFBSSxFQUFFLEtBREQ7QUFFTEMsT0FBRyxFQUNEUixLQUFLLEdBQUcsaURBQVIsR0FBNEQ0QixZQUh6RDtBQUlMakIsV0FBTyxFQUFFLGlCQUFTRixJQUFULEVBQWU7QUFDdEIsVUFBSUcsTUFBTSxHQUFHYixDQUFDLENBQUMsV0FBRCxFQUFjVSxJQUFkLENBQWQ7QUFDQXFCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsTUFBTSxDQUFDb0IsVUFBbkI7QUFDQSxVQUFNQyxTQUFTLEdBQUdyQixNQUFNLENBQUNFLElBQVAsQ0FBWSxXQUFaLENBQWxCO0FBQ0EsVUFBTUksSUFBSSxHQUFHTixNQUFNLENBQUNFLElBQVAsQ0FBWSxNQUFaLENBQWI7QUFDQSxVQUFNb0IsV0FBVyxHQUFHdEIsTUFBTSxDQUFDRSxJQUFQLENBQVksYUFBWixDQUFwQjtBQUNBLFVBQU1xQixXQUFXLEdBQUd2QixNQUFNLENBQUNFLElBQVAsQ0FBWSxhQUFaLENBQXBCO0FBQ0EsVUFBTXNCLFVBQVUsR0FBR3hCLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFlBQVosQ0FBbkI7QUFDQSxVQUFNdUIsVUFBVSxHQUFHekIsTUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixDQUFuQjtBQUNBLFVBQU13QixVQUFVLEdBQUcxQixNQUFNLENBQUNFLElBQVAsQ0FBWSxtQkFBWixDQUFuQjtBQUNBLFVBQU15QixVQUFVLEdBQUczQixNQUFNLENBQUNFLElBQVAsQ0FBWSxtQkFBWixDQUFuQjtBQUVBZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVl0QixJQUFaO0FBQ0FxQixhQUFPLENBQUNDLEdBQVIsQ0FBWW5CLE1BQVo7QUFFQSxVQUFJNEIsS0FBSyxHQUFHO0FBQ1Z0QixZQUFJLEVBQUVBLElBQUksQ0FBQ0UsV0FERDtBQUVWYyxtQkFBVyxFQUFFQSxXQUFXLENBQUNkLFdBRmY7QUFHVnFCLGdCQUFRLEVBQUVOLFdBQVcsQ0FBQ2YsV0FIWjtBQUlWc0Isb0JBQVksRUFBRU4sVUFBVSxDQUFDaEIsV0FKZjtBQUtWdUIsb0JBQVksRUFBRU4sVUFBVSxDQUFDakIsV0FMZjtBQU1Wa0Isa0JBQVUsRUFBRSxDQUFDQSxVQUFVLENBQUNsQixXQUFaLENBTkY7QUFPVm1CLGtCQUFVLEVBQUUsQ0FBQ0EsVUFBVSxDQUFDbkIsV0FBWjtBQVBGLE9BQVo7QUFTQVUsYUFBTyxDQUFDQyxHQUFSLENBQVlTLEtBQVo7QUFDRDtBQTdCSSxHQUFQO0FBK0JELENBcENELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZShcIi4uL2Nzcy9hcHAuY3NzXCIpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuY29uc3QgcHJveHkgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xyXG5cclxuJChcIiNzZWFyY2hCR0dcIikuc3VibWl0KGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGJnYW1lQkdHID0gJChcIiNiZ2FtZUJHR1wiKS52YWwoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogcHJveHkgKyBcImh0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkvc2VhcmNoXCIsXHJcbiAgICBkYXRhOiBcInNlYXJjaD1cIiArIGJnYW1lQkdHLFxyXG4gICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGxldCB4bWxEb2MgPSAkKFwiYm9hcmRnYW1lc1wiLCBkYXRhKTtcclxuICAgICAgY29uc3QgYm9hcmRHYW1lcyA9IHhtbERvYy5maW5kKFwiYm9hcmRnYW1lXCIpO1xyXG4gICAgICAkLmVhY2goYm9hcmRHYW1lcywgZnVuY3Rpb24oaSwgYm9hcmRnYW1lKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBib2FyZGdhbWUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgbGV0IG9iamVjdElkID0gYm9hcmRnYW1lLmF0dHJpYnV0ZXNbMF0udmFsdWU7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24obmFtZSwgb2JqZWN0SWQpO1xyXG4gICAgICAgICQoXCIjYmdnYW1lXCIpLmFwcGVuZChvcHRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4kKFwiI2JnZ2FtZVwiKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRHYW1lID0gJCh0aGlzKVxyXG4gICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAudmFsKCk7XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRHYW1lKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDpcclxuICAgICAgcHJveHkgKyBcImh0dHBzOi8vd3d3LmJvYXJkZ2FtZWdlZWsuY29tL3htbGFwaS9ib2FyZGdhbWUvXCIgKyBzZWxlY3RlZEdhbWUsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGxldCB4bWxEb2MgPSAkKFwiYm9hcmRnYW1lXCIsIGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyh4bWxEb2MuY2hpbGROb2Rlcyk7XHJcbiAgICAgIGNvbnN0IGJvYXJkR2FtZSA9IHhtbERvYy5maW5kKFwiYm9hcmRnYW1lXCIpO1xyXG4gICAgICBjb25zdCBuYW1lID0geG1sRG9jLmZpbmQoXCJuYW1lXCIpO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHhtbERvYy5maW5kKFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICAgIGNvbnN0IG1heHBsYXl0aW1lID0geG1sRG9jLmZpbmQoXCJtYXhwbGF5dGltZVwiKTtcclxuICAgICAgY29uc3QgbWlucGxheWVycyA9IHhtbERvYy5maW5kKFwibWlucGxheWVyc1wiKTtcclxuICAgICAgY29uc3QgbWF4cGxheWVycyA9IHhtbERvYy5maW5kKFwibWF4cGxheWVyc1wiKTtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHhtbERvYy5maW5kKFwiYm9hcmRnYW1lY2F0ZWdvcnlcIik7XHJcbiAgICAgIGNvbnN0IG1lY2hhbmlzbXMgPSB4bWxEb2MuZmluZChcImJvYXJkZ2FtZW1lY2hhbmljXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHhtbERvYyk7XHJcblxyXG4gICAgICBsZXQgaW5mb3MgPSB7XHJcbiAgICAgICAgbmFtZTogbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udGV4dENvbnRlbnQsXHJcbiAgICAgICAgZHVyYXRpb246IG1heHBsYXl0aW1lLnRleHRDb250ZW50LFxyXG4gICAgICAgIG1pbk5iUGxheWVyczogbWlucGxheWVycy50ZXh0Q29udGVudCxcclxuICAgICAgICBtYXhOYlBsYXllcnM6IG1heHBsYXllcnMudGV4dENvbnRlbnQsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMudGV4dENvbnRlbnRdLFxyXG4gICAgICAgIG1lY2hhbmlzbXM6IFttZWNoYW5pc21zLnRleHRDb250ZW50XVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9