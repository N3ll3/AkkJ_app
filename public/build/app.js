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
      //parser du xml recu
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
      var mechanisms = [];
      $(xml).find("link").each(function () {
        var type = $(this).attr("type");

        if (type == "boardgamemechanic") {
          var mechanic = $(this).attr("value");
          mechanisms.push(mechanic);
        }
      }); // pre remplissage des donnees dans formulaire
      // Name

      var name = $("#bggame").children("option:selected").text(); //vide le select

      $("#bggame option").each(function () {
        $(this).remove();
      }); //Description

      var regex = /<br\s*[\/]?>/gi;
      var descriptionWithoutbr = description.replace(regex, "");
      $("#add_bgame_form_name").val(name);
      var instance_name = "add_bgame_form_description";
      CKEDITOR.instances[instance_name].insertHtml("<p>".concat(descriptionWithoutbr, "</p>")); //Duration

      $("#add_bgame_form_duration").val(duration); // Min et Max Players

      $("#add_bgame_form_minNbPlayers").val(minplayers);
      $("#add_bgame_form_maxNbPlayers").val(maxplayers); // Mechanism

      var MechanismLabelsName = new Object();
      $("#add_bgame_form_mechanism .form-check-label").each(function () {
        var labelName = $(this).text();
        var labelFor = $(this)[0].htmlFor;
        MechanismLabelsName[labelName] = labelFor;
      });

      for (label in MechanismLabelsName) {
        mechanisms.forEach(function (mechanism) {
          if (mechanism == label) {
            var id = MechanismLabelsName[label];
            $("#".concat(id)).prop("checked", true);
          }
        });
      } // Category


      var CategoryLabelsName = new Object();
      $("#add_bgame_form_category .form-check-label").each(function () {
        var labelName = $(this).text();
        var labelFor = $(this)[0].htmlFor;
        CategoryLabelsName[labelName] = labelFor;
      });

      for (label in CategoryLabelsName) {
        categories.forEach(function (category) {
          if (category == label) {
            var id = CategoryLabelsName[label];
            $("#".concat(id)).prop("checked", true);
          }
        });
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicHJveHkiLCIkIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmaW5kIiwiZWFjaCIsImlkIiwiYXR0ciIsIm5hbWUiLCJvcHRpb24iLCJPcHRpb24iLCJhcHBlbmQiLCJzZWxlY3RlZEdhbWUiLCJjaGlsZHJlbiIsInhtbCIsImRlc2NyaXB0aW9uIiwidGV4dCIsImR1cmF0aW9uIiwibWlucGxheWVycyIsIm1heHBsYXllcnMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJwdXNoIiwibWVjaGFuaXNtcyIsIm1lY2hhbmljIiwicmVtb3ZlIiwicmVnZXgiLCJkZXNjcmlwdGlvbldpdGhvdXRiciIsInJlcGxhY2UiLCJpbnN0YW5jZV9uYW1lIiwiQ0tFRElUT1IiLCJpbnN0YW5jZXMiLCJpbnNlcnRIdG1sIiwiTWVjaGFuaXNtTGFiZWxzTmFtZSIsIk9iamVjdCIsImxhYmVsTmFtZSIsImxhYmVsRm9yIiwiaHRtbEZvciIsImxhYmVsIiwiZm9yRWFjaCIsIm1lY2hhbmlzbSIsInByb3AiLCJDYXRlZ29yeUxhYmVsc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsNENBQUQsQ0FBUCxDLENBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsd0JBQWQ7QUFFQUMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQUMsQ0FBQyxFQUFJO0FBQzFCQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxRQUFRLEdB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LGdCQUFJaEMsRUFBRSxHQUFHb0Msa0JBQWtCLENBQUNKLEtBQUQsQ0FBM0I7QUFDQTlDLGFBQUMsWUFBS2MsRUFBTCxFQUFELENBQVltQyxJQUFaLENBQWlCLFNBQWpCLEVBQTRCLElBQTVCO0FBQ0Q7QUFDRixTQUxEO0FBTUQ7QUFDRjtBQXZHSSxHQUFQO0FBMEdELENBL0dELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZShcIi4uL2Nzcy9hcHAuY3NzXCIpO1xyXG4vLyBjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuLy8gaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblxyXG4vLyBSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbi8vIFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBfbG9nX2xpc3RcIik7XHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXHJcbi8vIGNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuY29uc3QgcHJveHkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcclxuXHJcbiQoXCIjc2VhcmNoQkdHXCIpLnN1Ym1pdChlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGJnYW1lQkdHID0gJChcIiNiZ2FtZUJHR1wiKS52YWwoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogcHJveHkgKyBcImh0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3NlYXJjaFwiLFxyXG4gICAgZGF0YTogXCJxdWVyeT1cIiArIGJnYW1lQkdHLFxyXG4gICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICQoZGF0YSlcclxuICAgICAgICAuZmluZChcIml0ZW1cIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGxldCBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5maW5kKFwibmFtZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24obmFtZSwgaWQpO1xyXG4gICAgICAgICAgJChcIiNiZ2dhbWVcIikuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNiZ2djaG9pY2VcIikuc3VibWl0KGUgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkR2FtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgIC52YWwoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwczovL3d3dy5ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3RoaW5nXCIsXHJcbiAgICBkYXRhOiBcImlkPVwiICsgc2VsZWN0ZWRHYW1lICsgXCImdHlwZT1ib2FyZGdhbWVcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHhtbCkge1xyXG4gICAgICAvL3BhcnNlciBkdSB4bWwgcmVjdVxyXG4gICAgICAkKHhtbCkuZmluZChcIml0ZW1cIik7XHJcblxyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcImRlc2NyaXB0aW9uXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuICAgICAgbGV0IGR1cmF0aW9uID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJwbGF5aW5ndGltZVwiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgIGxldCBtaW5wbGF5ZXJzID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5wbGF5ZXJzXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgbGV0IG1heHBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1heHBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XHJcbiAgICAgICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibGlua1wiKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImJvYXJkZ2FtZWNhdGVnb3J5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG1lY2hhbmlzbXMgPSBbXTtcclxuICAgICAgJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJsaW5rXCIpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCB0eXBlID0gJCh0aGlzKS5hdHRyKFwidHlwZVwiKTtcclxuICAgICAgICAgIGlmICh0eXBlID09IFwiYm9hcmRnYW1lbWVjaGFuaWNcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtZWNoYW5pYyA9ICQodGhpcykuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICBtZWNoYW5pc21zLnB1c2gobWVjaGFuaWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gcHJlIHJlbXBsaXNzYWdlIGRlcyBkb25uZWVzIGRhbnMgZm9ybXVsYWlyZVxyXG5cclxuICAgICAgLy8gTmFtZVxyXG4gICAgICBsZXQgbmFtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIC8vdmlkZSBsZSBzZWxlY3RcclxuICAgICAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL0Rlc2NyaXB0aW9uXHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gLzxiclxccypbXFwvXT8+L2dpO1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb25XaXRob3V0YnIgPSBkZXNjcmlwdGlvbi5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9uYW1lXCIpLnZhbChuYW1lKTtcclxuICAgICAgY29uc3QgaW5zdGFuY2VfbmFtZSA9IFwiYWRkX2JnYW1lX2Zvcm1fZGVzY3JpcHRpb25cIjtcclxuICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW2luc3RhbmNlX25hbWVdLmluc2VydEh0bWwoXHJcbiAgICAgICAgYDxwPiR7ZGVzY3JpcHRpb25XaXRob3V0YnJ9PC9wPmBcclxuICAgICAgKTtcclxuICAgICAgLy9EdXJhdGlvblxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2R1cmF0aW9uXCIpLnZhbChkdXJhdGlvbik7XHJcblxyXG4gICAgICAvLyBNaW4gZXQgTWF4IFBsYXllcnNcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9taW5OYlBsYXllcnNcIikudmFsKG1pbnBsYXllcnMpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21heE5iUGxheWVyc1wiKS52YWwobWF4cGxheWVycyk7XHJcblxyXG4gICAgICAvLyBNZWNoYW5pc21cclxuICAgICAgY29uc3QgTWVjaGFuaXNtTGFiZWxzTmFtZSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9tZWNoYW5pc20gLmZvcm0tY2hlY2stbGFiZWxcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICBjb25zdCBsYWJlbEZvciA9ICQodGhpcylbMF0uaHRtbEZvcjtcclxuICAgICAgICBNZWNoYW5pc21MYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxhYmVsIGluIE1lY2hhbmlzbUxhYmVsc05hbWUpIHtcclxuICAgICAgICBtZWNoYW5pc21zLmZvckVhY2gobWVjaGFuaXNtID0+IHtcclxuICAgICAgICAgIGlmIChtZWNoYW5pc20gPT0gbGFiZWwpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gTWVjaGFuaXNtTGFiZWxzTmFtZVtsYWJlbF07XHJcbiAgICAgICAgICAgICQoYCMke2lkfWApLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gQ2F0ZWdvcnlcclxuICAgICAgY29uc3QgQ2F0ZWdvcnlMYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2NhdGVnb3J5IC5mb3JtLWNoZWNrLWxhYmVsXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWxGb3IgPSAkKHRoaXMpWzBdLmh0bWxGb3I7XHJcbiAgICAgICAgQ2F0ZWdvcnlMYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxhYmVsIGluIENhdGVnb3J5TGFiZWxzTmFtZSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gbGFiZWwpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gQ2F0ZWdvcnlMYWJlbHNOYW1lW2xhYmVsXTtcclxuICAgICAgICAgICAgJChgIyR7aWR9YCkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9