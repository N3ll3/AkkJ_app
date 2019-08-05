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
      $boardGames = xmlDoc.find("boardgame");
      $.each($boardGames, function (i, boardgame) {
        var name = boardgame.firstElementChild.textContent;
        var objectId = boardgame.attributes[0].value;
        var option = new Option(name, objectId);
        $("#bggame").append(option);
      });
    }
  });
});
$("#fillForm").submit(function (e) {
  e.preventDefault();
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsInByb3h5Iiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJ4bWxEb2MiLCIkYm9hcmRHYW1lcyIsImZpbmQiLCJlYWNoIiwiaSIsImJvYXJkZ2FtZSIsIm5hbWUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRleHRDb250ZW50Iiwib2JqZWN0SWQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJvcHRpb24iLCJPcHRpb24iLCJhcHBlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsNENBQUQsQ0FBUCxDLENBRUE7OztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNRSxLQUFLLEdBQUcsc0NBQWQ7QUFFQUQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2pDQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxRQUFRLEdBQUdMLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZU0sR0FBZixFQUFmO0FBQ0FOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0xDLFFBQUksRUFBRSxLQUREO0FBRUxDLE9BQUcsRUFBRVIsS0FBSyxHQUFHLHdDQUZSO0FBR0xTLFFBQUksRUFBRSxZQUFZTCxRQUhiO0FBSUxNLFlBQVEsRUFBRSxLQUpMO0FBS0xDLFdBQU8sRUFBRSxpQkFBU0YsSUFBVCxFQUFlO0FBQ3RCLFVBQUlHLE1BQU0sR0FBR2IsQ0FBQyxDQUFDLFlBQUQsRUFBZVUsSUFBZixDQUFkO0FBQ0FJLGlCQUFXLEdBQUdELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFdBQVosQ0FBZDtBQUNBZixPQUFDLENBQUNnQixJQUFGLENBQU9GLFdBQVAsRUFBb0IsVUFBU0csQ0FBVCxFQUFZQyxTQUFaLEVBQXVCO0FBQ3pDLFlBQUlDLElBQUksR0FBR0QsU0FBUyxDQUFDRSxpQkFBVixDQUE0QkMsV0FBdkM7QUFDQSxZQUFJQyxRQUFRLEdBQUdKLFNBQVMsQ0FBQ0ssVUFBVixDQUFxQixDQUFyQixFQUF3QkMsS0FBdkM7QUFDQSxZQUFJQyxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXUCxJQUFYLEVBQWlCRyxRQUFqQixDQUFiO0FBQ0F0QixTQUFDLENBQUMsU0FBRCxDQUFELENBQWEyQixNQUFiLENBQW9CRixNQUFwQjtBQUNELE9BTEQ7QUFNRDtBQWRJLEdBQVA7QUFnQkQsQ0FuQkQ7QUFxQkF6QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWVFLE1BQWYsQ0FBc0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hDQSxHQUFDLENBQUNDLGNBQUY7QUFDRCxDQUZELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZShcIi4uL2Nzcy9hcHAuY3NzXCIpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuY29uc3QgcHJveHkgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xyXG5cclxuJChcIiNzZWFyY2hCR0dcIikuc3VibWl0KGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGJnYW1lQkdHID0gJChcIiNiZ2FtZUJHR1wiKS52YWwoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogcHJveHkgKyBcImh0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkvc2VhcmNoXCIsXHJcbiAgICBkYXRhOiBcInNlYXJjaD1cIiArIGJnYW1lQkdHLFxyXG4gICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGxldCB4bWxEb2MgPSAkKFwiYm9hcmRnYW1lc1wiLCBkYXRhKTtcclxuICAgICAgJGJvYXJkR2FtZXMgPSB4bWxEb2MuZmluZChcImJvYXJkZ2FtZVwiKTtcclxuICAgICAgJC5lYWNoKCRib2FyZEdhbWVzLCBmdW5jdGlvbihpLCBib2FyZGdhbWUpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGJvYXJkZ2FtZS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgICAgICBsZXQgb2JqZWN0SWQgPSBib2FyZGdhbWUuYXR0cmlidXRlc1swXS52YWx1ZTtcclxuICAgICAgICBsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihuYW1lLCBvYmplY3RJZCk7XHJcbiAgICAgICAgJChcIiNiZ2dhbWVcIikuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIjZmlsbEZvcm1cIikuc3VibWl0KGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9