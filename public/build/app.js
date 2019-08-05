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
      $names = xmlDoc.find("name");
      $.each($names, function (i, name) {
        var liGame = document.createElement("li");
        liGame.innerHTML = "<a href=\"#\">".concat(name.textContent, "</a>");
        $("#bggame").append(liGame);
      });
    }
  });
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsInByb3h5Iiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJ4bWxEb2MiLCIkbmFtZXMiLCJmaW5kIiwiZWFjaCIsImkiLCJuYW1lIiwibGlHYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsNENBQUQsQ0FBUCxDLENBRUE7OztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNRSxLQUFLLEdBQUcsc0NBQWQ7QUFFQUQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2pDQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxRQUFRLEdBQUdMLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZU0sR0FBZixFQUFmO0FBQ0FOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0xDLFFBQUksRUFBRSxLQUREO0FBRUxDLE9BQUcsRUFBRVIsS0FBSyxHQUFHLHdDQUZSO0FBR0xTLFFBQUksRUFBRSxZQUFZTCxRQUhiO0FBSUxNLFlBQVEsRUFBRSxLQUpMO0FBS0xDLFdBQU8sRUFBRSxpQkFBU0YsSUFBVCxFQUFlO0FBQ3RCLFVBQUlHLE1BQU0sR0FBR2IsQ0FBQyxDQUFDLFlBQUQsRUFBZVUsSUFBZixDQUFkO0FBQ0FJLFlBQU0sR0FBR0QsTUFBTSxDQUFDRSxJQUFQLENBQVksTUFBWixDQUFUO0FBQ0FmLE9BQUMsQ0FBQ2dCLElBQUYsQ0FBT0YsTUFBUCxFQUFlLFVBQVNHLENBQVQsRUFBWUMsSUFBWixFQUFrQjtBQUMvQixZQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0FGLGNBQU0sQ0FBQ0csU0FBUCwyQkFBa0NKLElBQUksQ0FBQ0ssV0FBdkM7QUFDQXZCLFNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYXdCLE1BQWIsQ0FBb0JMLE1BQXBCO0FBQ0QsT0FKRDtBQUtEO0FBYkksR0FBUDtBQWVELENBbEJELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZShcIi4uL2Nzcy9hcHAuY3NzXCIpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuY29uc3QgcHJveHkgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xyXG5cclxuJChcIiNzZWFyY2hCR0dcIikuc3VibWl0KGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGJnYW1lQkdHID0gJChcIiNiZ2FtZUJHR1wiKS52YWwoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogcHJveHkgKyBcImh0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkvc2VhcmNoXCIsXHJcbiAgICBkYXRhOiBcInNlYXJjaD1cIiArIGJnYW1lQkdHLFxyXG4gICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGxldCB4bWxEb2MgPSAkKFwiYm9hcmRnYW1lc1wiLCBkYXRhKTtcclxuICAgICAgJG5hbWVzID0geG1sRG9jLmZpbmQoXCJuYW1lXCIpO1xyXG4gICAgICAkLmVhY2goJG5hbWVzLCBmdW5jdGlvbihpLCBuYW1lKSB7XHJcbiAgICAgICAgbGV0IGxpR2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaUdhbWUuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+JHtuYW1lLnRleHRDb250ZW50fTwvYT5gO1xyXG4gICAgICAgICQoXCIjYmdnYW1lXCIpLmFwcGVuZChsaUdhbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=