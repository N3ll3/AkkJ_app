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

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css"); // const routes = require("../../public/js/fos_js_routes.json");
// import Routing from "../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
// Routing.setRoutingData(routes);
// Routing.generate("rep_log_list");
// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require("jquery");


var proxy = "http://localhost:8080/";
$("#searchBGG").submit(function (e) {
  e.preventDefault();
  var bgameBGG = $("#bgameBGG").val();
  $.ajax({
    type: "GET",
    url: proxy + "http://boardgamegeek.com/xmlapi2/search",
    data: "query=" + bgameBGG,
    dataType: "xml",
    success: function success(data) {
      $(data).find("item").each(function () {
        var id = $(this).attr("id");
        var name = $(this).find("name").attr("value");
        var option = new Option(name, id);
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
    url: proxy + "https://www.boardgamegeek.com/xmlapi2/thing",
    data: "id=" + selectedGame + "&type=boardgame",
    success: function success(xml) {
      // recup du nom
      var name = $("#bggame").children("option:selected").text(); //vide le select

      $("#bggame option").each(function () {
        $(this).remove();
      }); //parser du xml recu

      $(xml).find("item");
      var description = $(xml).find("description").text();
      var duration = $(xml).find("playingtime").attr("value");
      var minplayers = $(xml).find("minplayers").attr("value");
      var maxplayers = $(xml).find("maxplayers").attr("value");
      var categories = [];
      $(xml).find("link").each(function () {
        var type = $(this).attr("type");

        if (type == "boardgamecategory") {
          var category = $(this).attr("value");
          categories.push(category);
        }
      });
      var labelsName = new Object();
      $("#add_bgame_form_category .form-check-label").each(function () {
        var labelName = $(this).text();
        var labelFor = $(this)[0].htmlFor;
        labelsName[labelName] = labelFor;
      });

      for (label in labelsName) {
        categories.forEach(function (category) {
          if (category == label) {
            var id = labelsName[label];
            $("#".concat(id)).prop("checked", true);
          }
        });
      } // pre remplissage des donnees dans formulaire


      var regex = /<br\s*[\/]?>/gi;
      var descriptionWithoutbr = description.replace(regex, "");
      $("#add_bgame_form_name").val(name);
      var instance_name = "add_bgame_form_description";
      CKEDITOR.instances[instance_name].insertHtml("<p>".concat(descriptionWithoutbr, "</p>"));
      $("#add_bgame_form_duration").val(duration);
      $("#add_bgame_form_minNbPlayers").val(minplayers);
      $("#add_bgame_form_maxNbPlayers").val(maxplayers); // categories.each(function (category) {
      // });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicHJveHkiLCIkIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmaW5kIiwiZWFjaCIsImlkIiwiYXR0ciIsIm5hbWUiLCJvcHRpb24iLCJPcHRpb24iLCJhcHBlbmQiLCJzZWxlY3RlZEdhbWUiLCJjaGlsZHJlbiIsInhtbCIsInRleHQiLCJyZW1vdmUiLCJkZXNjcmlwdGlvbiIsImR1cmF0aW9uIiwibWlucGxheWVycyIsIm1heHBsYXllcnMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJwdXNoIiwibGFiZWxzTmFtZSIsIk9iamVjdCIsImxhYmVsTmFtZSIsImxhYmVsRm9yIiwiaHRtbEZvciIsImxhYmVsIiwiZm9yRWFjaCIsInByb3AiLCJyZWdleCIsImRlc2NyaXB0aW9uV2l0aG91dGJyIiwicmVwbGFjZSIsImluc3RhbmNlX25hbWUiLCJDS0VESVRPUiIsImluc3RhbmNlcyIsImluc2VydEh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsNENBQUQsQ0FBUCxDLENBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsd0JBQWQ7QUFFQUMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQUMsQ0FBQyxFQUFJO0FBQzFCQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxRQUFRLEdBQUdKLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUssR0FBZixFQUFmO0FBQ0FMLEdBQUMsQ0FBQ00sSUFBRixDQUFP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LENBQUQsQ0FBa0NLLEdBQWxDLENBQXNDdUIsVUFBdEMsRUEvRHFCLENBaUVyQjtBQUVBO0FBQ0Q7QUF4RUksR0FBUDtBQTBFRCxDQS9FRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoXCIuLi9jc3MvYXBwLmNzc1wiKTtcclxuLy8gY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb25cIik7XHJcbi8vIGltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qc1wiO1xyXG5cclxuLy8gUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG4vLyBSb3V0aW5nLmdlbmVyYXRlKFwicmVwX2xvZ19saXN0XCIpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG4vLyBjb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuXHJcbmNvbnN0IHByb3h5ID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcblxyXG4kKFwiI3NlYXJjaEJHR1wiKS5zdWJtaXQoZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBiZ2FtZUJHRyA9ICQoXCIjYmdhbWVCR0dcIikudmFsKCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwOi8vYm9hcmRnYW1lZ2Vlay5jb20veG1sYXBpMi9zZWFyY2hcIixcclxuICAgIGRhdGE6IFwicXVlcnk9XCIgKyBiZ2FtZUJHRyxcclxuICAgIGRhdGFUeXBlOiBcInhtbFwiLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAkKGRhdGEpXHJcbiAgICAgICAgLmZpbmQoXCJpdGVtXCIpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgIGxldCBuYW1lID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAuZmluZChcIm5hbWVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgIGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKG5hbWUsIGlkKTtcclxuICAgICAgICAgICQoXCIjYmdnYW1lXCIpLmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIjYmdnY2hvaWNlXCIpLnN1Ym1pdChlID0+IHtcclxuICBjb25zdCBzZWxlY3RlZEdhbWUgPSAkKFwiI2JnZ2FtZVwiKVxyXG4gICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAudmFsKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBwcm94eSArIFwiaHR0cHM6Ly93d3cuYm9hcmRnYW1lZ2Vlay5jb20veG1sYXBpMi90aGluZ1wiLFxyXG4gICAgZGF0YTogXCJpZD1cIiArIHNlbGVjdGVkR2FtZSArIFwiJnR5cGU9Ym9hcmRnYW1lXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbih4bWwpIHtcclxuICAgICAgLy8gcmVjdXAgZHUgbm9tXHJcbiAgICAgIGxldCBuYW1lID0gJChcIiNiZ2dhbWVcIilcclxuICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgLy92aWRlIGxlIHNlbGVjdFxyXG4gICAgICAkKFwiI2JnZ2FtZSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vcGFyc2VyIGR1IHhtbCByZWN1XHJcbiAgICAgICQoeG1sKS5maW5kKFwiaXRlbVwiKTtcclxuXHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiZGVzY3JpcHRpb25cIilcclxuICAgICAgICAudGV4dCgpO1xyXG4gICAgICBsZXQgZHVyYXRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcInBsYXlpbmd0aW1lXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgbGV0IG1pbnBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1pbnBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICBsZXQgbWF4cGxheWVycyA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWF4cGxheWVyc1wiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XHJcbiAgICAgICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibGlua1wiKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImJvYXJkZ2FtZWNhdGVnb3J5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGxhYmVsc05hbWUgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fY2F0ZWdvcnkgLmZvcm0tY2hlY2stbGFiZWxcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICBjb25zdCBsYWJlbEZvciA9ICQodGhpcylbMF0uaHRtbEZvcjtcclxuICAgICAgICBsYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGFiZWwgaW4gbGFiZWxzTmFtZSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gbGFiZWwpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gbGFiZWxzTmFtZVtsYWJlbF07XHJcbiAgICAgICAgICAgICQoYCMke2lkfWApLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBwcmUgcmVtcGxpc3NhZ2UgZGVzIGRvbm5lZXMgZGFucyBmb3JtdWxhaXJlXHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gLzxiclxccypbXFwvXT8+L2dpO1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb25XaXRob3V0YnIgPSBkZXNjcmlwdGlvbi5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9uYW1lXCIpLnZhbChuYW1lKTtcclxuICAgICAgY29uc3QgaW5zdGFuY2VfbmFtZSA9IFwiYWRkX2JnYW1lX2Zvcm1fZGVzY3JpcHRpb25cIjtcclxuICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW2luc3RhbmNlX25hbWVdLmluc2VydEh0bWwoXHJcbiAgICAgICAgYDxwPiR7ZGVzY3JpcHRpb25XaXRob3V0YnJ9PC9wPmBcclxuICAgICAgKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kdXJhdGlvblwiKS52YWwoZHVyYXRpb24pO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21pbk5iUGxheWVyc1wiKS52YWwobWlucGxheWVycyk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWF4TmJQbGF5ZXJzXCIpLnZhbChtYXhwbGF5ZXJzKTtcclxuXHJcbiAgICAgIC8vIGNhdGVnb3JpZXMuZWFjaChmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==