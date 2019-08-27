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
      // recup Name
      var name = $("#bggame").children("option:selected").text(); //vide le select

      $("#bggame option").each(function () {
        $(this).remove();
      });
      var description = $(xml).find("description").text();
      var duration = $(xml).find("playingtime").attr("value");
      var minplayers = $(xml).find("minplayers").attr("value");
      var maxplayers = $(xml).find("maxplayers").attr("value");
      var difficulty = $(xml).find("minage").attr("value");
      var mechanisms = [];
      $(xml).find("link").each(function () {
        var type = $(this).attr("type");

        if (type == "boardgamemechanic") {
          var mechanic = $(this).attr("value");
          mechanisms.push(mechanic);
        }
      });
      var categories = [];
      $(xml).find("link").each(function () {
        var type = $(this).attr("type");

        if (type == "boardgamecategory") {
          var category = $(this).attr("value");
          categories.push(category);
        }
      }); // pre remplissage des donnees dans formulaire
      //Description

      var regex = /<br\s*[\/]?>/gi;
      var descriptionWithoutbr = description.replace(regex, ""); //Name

      $("#add_bgame_form_name").val(name);
      var instance_name = "add_bgame_form_description";
      CKEDITOR.instances[instance_name].insertHtml("<p>".concat(descriptionWithoutbr, "</p>")); //Duration

      $("#add_bgame_form_duration").val(duration); // Min et Max Players

      $("#add_bgame_form_minNbPlayers").val(minplayers);
      $("#add_bgame_form_maxNbPlayers").val(maxplayers); // Difficulty

      if (difficulty < 7) {
        $("#add_bgame_form_difficulty").children("option[value=1]").prop("selected", true);
      } else if (difficulty >= 7 && difficulty < 12) {
        $("#add_bgame_form_difficulty").children("option[value=2]").prop("selected", true);
      } else if (difficulty >= 12 && difficulty < 14) {
        $("#add_bgame_form_difficulty").children("option[value=3]").prop("selected", true);
      } else {
        $("#add_bgame_form_difficulty").children("option[value=4]").prop("selected", true);
      } // Mechanism


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicHJveHkiLCIkIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmaW5kIiwiZWFjaCIsImlkIiwiYXR0ciIsIm5hbWUiLCJvcHRpb24iLCJPcHRpb24iLCJhcHBlbmQiLCJzZWxlY3RlZEdhbWUiLCJjaGlsZHJlbiIsInhtbCIsInRleHQiLCJyZW1vdmUiLCJkZXNjcmlwdGlvbiIsImR1cmF0aW9uIiwibWlucGxheWVycyIsIm1heHBsYXllcnMiLCJkaWZmaWN1bHR5IiwibWVjaGFuaXNtcyIsIm1lY2hhbmljIiwicHVzaCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsInJlZ2V4IiwiZGVzY3JpcHRpb25XaXRob3V0YnIiLCJyZXBsYWNlIiwiaW5zdGFuY2VfbmFtZSIsIkNLRURJVE9SIiwiaW5zdGFuY2VzIiwiaW5zZXJ0SHRtbCIsInByb3AiLCJNZWNoYW5pc21MYWJlbHNOYW1lIiwiT2JqZWN0IiwibGFiZWxOYW1lIiwibGFiZWxGb3IiLCJodG1sRm9yIiwibGFiZWwiLCJmb3JFYWNoIiwibWVjaGFuaXNtIiwiQ2F0ZWdvcnlMYWJlbHNOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVAsQyxDQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLHdCQUFkO0FBRUFDLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLE1BQWhCLENBQXVCLFVBQUFDLENBQUMsRUFBSTtBQUMxQkEsR0FBQyxDQUFDQyxjQUFGO0FBQ0Es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QUNtQixPQUFYLENBQW1CLFVBQUFDLFNBQVMsRUFBSTtBQUM5QixjQUFJQSxTQUFTLElBQUlGLEtBQWpCLEVBQXdCO0FBQ3RCLGdCQUFJbEMsRUFBRSxHQUFHNkIsbUJBQW1CLENBQUNLLEtBQUQsQ0FBNUI7QUFDQWhELGFBQUMsWUFBS2MsRUFBTCxFQUFELENBQVk0QixJQUFaLENBQWlCLFNBQWpCLEVBQTRCLElBQTVCO0FBQ0Q7QUFDRixTQUxEO0FBTUQsT0E3R29CLENBK0dyQjs7O0FBQ0EsVUFBTVMsa0JBQWtCLEdBQUcsSUFBSVAsTUFBSixFQUEzQjtBQUNBNUMsT0FBQyxDQUFDLDRDQUFELENBQUQsQ0FBZ0RhLElBQWhELENBQXFELFlBQVc7QUFDOUQsWUFBTWdDLFNBQVMsR0FBRzdDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsRUFBbEI7QUFDQSxZQUFNdUIsUUFBUSxHQUFHOUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBVytDLE9BQTVCO0FBQ0FJLDBCQUFrQixDQUFDTixTQUFELENBQWxCLEdBQWdDQyxRQUFoQztBQUNELE9BSkQ7O0FBTUEsV0FBS0UsS0FBTCxJQUFjRyxrQkFBZCxFQUFrQztBQUNoQ2xCLGtCQUFVLENBQUNnQixPQUFYLENBQW1CLFVBQUFmLFFBQVEsRUFBSTtBQUM3QixjQUFJQSxRQUFRLElBQUljLEtBQWhCLEVBQXVCO0FBQ3JCLGdCQUFJbEMsRUFBRSxHQUFHcUMsa0JBQWtCLENBQUNILEtBQUQsQ0FBM0I7QUFDQWhELGFBQUMsWUFBS2MsRUFBTCxFQUFELENBQVk0QixJQUFaLENBQWlCLFNBQWpCLEVBQTRCLElBQTVCO0FBQ0Q7QUFDRixTQUxEO0FBTUQ7QUFDRjtBQW5JSSxHQUFQO0FBcUlELENBMUlELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZShcIi4uL2Nzcy9hcHAuY3NzXCIpO1xyXG4vLyBjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuLy8gaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblxyXG4vLyBSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbi8vIFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBfbG9nX2xpc3RcIik7XHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXHJcbi8vIGNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuY29uc3QgcHJveHkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcclxuXHJcbiQoXCIjc2VhcmNoQkdHXCIpLnN1Ym1pdChlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGJnYW1lQkdHID0gJChcIiNiZ2FtZUJHR1wiKS52YWwoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogcHJveHkgKyBcImh0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3NlYXJjaFwiLFxyXG4gICAgZGF0YTogXCJxdWVyeT1cIiArIGJnYW1lQkdHLFxyXG4gICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICQoZGF0YSlcclxuICAgICAgICAuZmluZChcIml0ZW1cIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGxldCBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5maW5kKFwibmFtZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24obmFtZSwgaWQpO1xyXG4gICAgICAgICAgJChcIiNiZ2dhbWVcIikuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNiZ2djaG9pY2VcIikuc3VibWl0KGUgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkR2FtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgIC52YWwoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwczovL3d3dy5ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3RoaW5nXCIsXHJcbiAgICBkYXRhOiBcImlkPVwiICsgc2VsZWN0ZWRHYW1lICsgXCImdHlwZT1ib2FyZGdhbWVcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHhtbCkge1xyXG4gICAgICAvL3BhcnNlciBkdSB4bWwgcmVjdVxyXG5cclxuICAgICAgLy8gcmVjdXAgTmFtZVxyXG4gICAgICBsZXQgbmFtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIC8vdmlkZSBsZSBzZWxlY3RcclxuICAgICAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiZGVzY3JpcHRpb25cIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgY29uc3QgZHVyYXRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcInBsYXlpbmd0aW1lXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1pbnBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1pbnBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWF4cGxheWVycyA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWF4cGxheWVyc1wiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBkaWZmaWN1bHR5ID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5hZ2VcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWVjaGFuaXNtcyA9IFtdO1xyXG4gICAgICAkKHhtbClcclxuICAgICAgICAuZmluZChcImxpbmtcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJib2FyZGdhbWVtZWNoYW5pY1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lY2hhbmljID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIG1lY2hhbmlzbXMucHVzaChtZWNoYW5pYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XHJcbiAgICAgICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibGlua1wiKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImJvYXJkZ2FtZWNhdGVnb3J5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHByZSByZW1wbGlzc2FnZSBkZXMgZG9ubmVlcyBkYW5zIGZvcm11bGFpcmVcclxuXHJcbiAgICAgIC8vRGVzY3JpcHRpb25cclxuICAgICAgY29uc3QgcmVnZXggPSAvPGJyXFxzKltcXC9dPz4vZ2k7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbldpdGhvdXRiciA9IGRlc2NyaXB0aW9uLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG5cclxuICAgICAgLy9OYW1lXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbmFtZVwiKS52YWwobmFtZSk7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlX25hbWUgPSBcImFkZF9iZ2FtZV9mb3JtX2Rlc2NyaXB0aW9uXCI7XHJcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1tpbnN0YW5jZV9uYW1lXS5pbnNlcnRIdG1sKFxyXG4gICAgICAgIGA8cD4ke2Rlc2NyaXB0aW9uV2l0aG91dGJyfTwvcD5gXHJcbiAgICAgICk7XHJcbiAgICAgIC8vRHVyYXRpb25cclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kdXJhdGlvblwiKS52YWwoZHVyYXRpb24pO1xyXG5cclxuICAgICAgLy8gTWluIGV0IE1heCBQbGF5ZXJzXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWluTmJQbGF5ZXJzXCIpLnZhbChtaW5wbGF5ZXJzKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9tYXhOYlBsYXllcnNcIikudmFsKG1heHBsYXllcnMpO1xyXG5cclxuICAgICAgLy8gRGlmZmljdWx0eVxyXG5cclxuICAgICAgaWYgKGRpZmZpY3VsdHkgPCA3KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9MV1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA+PSA3ICYmIGRpZmZpY3VsdHkgPCAxMikge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTJdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPj0gMTIgJiYgZGlmZmljdWx0eSA8IDE0KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9M11cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9NF1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1lY2hhbmlzbVxyXG4gICAgICBjb25zdCBNZWNoYW5pc21MYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21lY2hhbmlzbSAuZm9ybS1jaGVjay1sYWJlbFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRm9yID0gJCh0aGlzKVswXS5odG1sRm9yO1xyXG4gICAgICAgIE1lY2hhbmlzbUxhYmVsc05hbWVbbGFiZWxOYW1lXSA9IGxhYmVsRm9yO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAobGFiZWwgaW4gTWVjaGFuaXNtTGFiZWxzTmFtZSkge1xyXG4gICAgICAgIG1lY2hhbmlzbXMuZm9yRWFjaChtZWNoYW5pc20gPT4ge1xyXG4gICAgICAgICAgaWYgKG1lY2hhbmlzbSA9PSBsYWJlbCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBNZWNoYW5pc21MYWJlbHNOYW1lW2xhYmVsXTtcclxuICAgICAgICAgICAgJChgIyR7aWR9YCkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENhdGVnb3J5XHJcbiAgICAgIGNvbnN0IENhdGVnb3J5TGFiZWxzTmFtZSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9jYXRlZ29yeSAuZm9ybS1jaGVjay1sYWJlbFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRm9yID0gJCh0aGlzKVswXS5odG1sRm9yO1xyXG4gICAgICAgIENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbE5hbWVdID0gbGFiZWxGb3I7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZm9yIChsYWJlbCBpbiBDYXRlZ29yeUxhYmVsc05hbWUpIHtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5ID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbF07XHJcbiAgICAgICAgICAgICQoYCMke2lkfWApLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9