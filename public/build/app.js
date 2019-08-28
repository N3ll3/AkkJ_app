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
  var bgameBGG = $("#bgameBGG").val(); // TODO : refacto avec function clearSelect()

  $("#bggame option").each(function () {
    $(this).remove();
  });
  $.ajax({
    type: "GET",
    url: proxy + "http://boardgamegeek.com/xmlapi2/search",
    data: "query=" + bgameBGG,
    dataType: "xml",
    success: function success(data) {
      if ($(data).find("items").attr("total") == 0) {
        var option = new Option("Aucun résultat");
        $("#bggame").append(option);
      } else {
        $(data).find("item").each(function () {
          var id = $(this).attr("id");
          var name = $(this).find("name").attr("value");
          var option = new Option(name, id);
          $("#bggame").append(option);
        });
      }
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
      var name = $("#bggame").children("option:selected").text(); //// TODO : refacto avec function clearSelect()

      $("#bggame option").each(function () {
        $(this).remove();
      });
      $("#imageBgame").remove();
      var image = $(xml).find("image").text();
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
      CKEDITOR.instances[instance_name].insertHtml("<p>".concat(descriptionWithoutbr, "</p>")); //image

      $("#add_bgame_form_Image").val(image);
      var imgView = "<img src=".concat(image, " alt=\"image boardgame\" width=50 id=\"imageBgame\">");
      $("#add_bgame_form .form-group:nth-child(2)").append(imgView); //Duration

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

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicHJveHkiLCIkIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJlYWNoIiwicmVtb3ZlIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZmluZCIsImF0dHIiLCJvcHRpb24iLCJPcHRpb24iLCJhcHBlbmQiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZEdhbWUiLCJjaGlsZHJlbiIsInhtbCIsInRleHQiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiZHVyYXRpb24iLCJtaW5wbGF5ZXJzIiwibWF4cGxheWVycyIsImRpZmZpY3VsdHkiLCJtZWNoYW5pc21zIiwibWVjaGFuaWMiLCJwdXNoIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwicmVnZXgiLCJkZXNjcmlwdGlvbldpdGhvdXRiciIsInJlcGxhY2UiLCJpbnN0YW5jZV9uYW1lIiwiQ0tFRElUT1IiLCJpbnN0YW5jZXMiLCJpbnNlcnRIdG1sIiwiaW1nVmlldyIsInByb3AiLCJNZWNoYW5pc21MYWJlbHNOYW1lIiwiT2JqZWN0IiwibGFiZWxOYW1lIiwibGFiZWxGb3IiLCJodG1sRm9yIiwibGFiZWwiLCJmb3JFYWNoIiwibWVjaGFuaXNtIiwiQ2F0ZWdvcnlMYWJlbHNOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVAsQyxDQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLHdCQUFkO0FBRUFDLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLE1BQWhCLENBQXVCLFVBQUFDLENBQUMsRUFBSTtBQUMxQkEsR0FB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QUFDLDRDQUFELENBQUQsQ0FBZ0RNLElBQWhELENBQXFELFlBQVc7QUFDOUQsWUFBTXlDLFNBQVMsR0FBRy9DLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdCLElBQVIsRUFBbEI7QUFDQSxZQUFNd0IsUUFBUSxHQUFHaEQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBV2lELE9BQTVCO0FBQ0FJLDBCQUFrQixDQUFDTixTQUFELENBQWxCLEdBQWdDQyxRQUFoQztBQUNELE9BSkQ7O0FBTUEsV0FBS0UsS0FBTCxJQUFjRyxrQkFBZCxFQUFrQztBQUNoQ25CLGtCQUFVLENBQUNpQixPQUFYLENBQW1CLFVBQUFoQixRQUFRLEVBQUk7QUFDN0IsY0FBSUEsUUFBUSxJQUFJZSxLQUFoQixFQUF1QjtBQUNyQixnQkFBSS9CLEVBQUUsR0FBR2tDLGtCQUFrQixDQUFDSCxLQUFELENBQTNCO0FBQ0FsRCxhQUFDLFlBQUttQixFQUFMLEVBQUQsQ0FBWXlCLElBQVosQ0FBaUIsU0FBakIsRUFBNEIsSUFBNUI7QUFDRDtBQUNGLFNBTEQ7QUFNRDtBQUNGO0FBN0lJLEdBQVA7QUErSUQsQ0FwSkQsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKFwiLi4vY3NzL2FwcC5jc3NcIik7XHJcbi8vIGNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG4vLyBpbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuXHJcbi8vIFJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuLy8gUm91dGluZy5nZW5lcmF0ZShcInJlcF9sb2dfbGlzdFwiKTtcclxuXHJcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5jb25zdCBwcm94eSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xyXG5cclxuJChcIiNzZWFyY2hCR0dcIikuc3VibWl0KGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgYmdhbWVCR0cgPSAkKFwiI2JnYW1lQkdHXCIpLnZhbCgpO1xyXG5cclxuICAvLyBUT0RPIDogcmVmYWN0byBhdmVjIGZ1bmN0aW9uIGNsZWFyU2VsZWN0KClcclxuICAkKFwiI2JnZ2FtZSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBwcm94eSArIFwiaHR0cDovL2JvYXJkZ2FtZWdlZWsuY29tL3htbGFwaTIvc2VhcmNoXCIsXHJcbiAgICBkYXRhOiBcInF1ZXJ5PVwiICsgYmdhbWVCR0csXHJcbiAgICBkYXRhVHlwZTogXCJ4bWxcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICQoZGF0YSlcclxuICAgICAgICAgIC5maW5kKFwiaXRlbXNcIilcclxuICAgICAgICAgIC5hdHRyKFwidG90YWxcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihcIkF1Y3VuIHLDqXN1bHRhdFwiKTtcclxuICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEpXHJcbiAgICAgICAgICAuZmluZChcIml0ZW1cIilcclxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24obmFtZSwgaWQpO1xyXG4gICAgICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNiZ2djaG9pY2VcIikuc3VibWl0KGUgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkR2FtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgIC52YWwoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwczovL3d3dy5ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3RoaW5nXCIsXHJcbiAgICBkYXRhOiBcImlkPVwiICsgc2VsZWN0ZWRHYW1lICsgXCImdHlwZT1ib2FyZGdhbWVcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHhtbCkge1xyXG4gICAgICAvL3BhcnNlciBkdSB4bWwgcmVjdVxyXG5cclxuICAgICAgLy8gcmVjdXAgTmFtZVxyXG4gICAgICBjb25zdCBuYW1lID0gJChcIiNiZ2dhbWVcIilcclxuICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgLy8vLyBUT0RPIDogcmVmYWN0byBhdmVjIGZ1bmN0aW9uIGNsZWFyU2VsZWN0KClcclxuICAgICAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIjaW1hZ2VCZ2FtZVwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IGltYWdlID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJpbWFnZVwiKVxyXG4gICAgICAgIC50ZXh0KCk7XHJcblxyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiZGVzY3JpcHRpb25cIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgY29uc3QgZHVyYXRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcInBsYXlpbmd0aW1lXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1pbnBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1pbnBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWF4cGxheWVycyA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWF4cGxheWVyc1wiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBkaWZmaWN1bHR5ID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5hZ2VcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWVjaGFuaXNtcyA9IFtdO1xyXG4gICAgICAkKHhtbClcclxuICAgICAgICAuZmluZChcImxpbmtcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJib2FyZGdhbWVtZWNoYW5pY1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lY2hhbmljID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIG1lY2hhbmlzbXMucHVzaChtZWNoYW5pYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XHJcbiAgICAgICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibGlua1wiKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImJvYXJkZ2FtZWNhdGVnb3J5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHByZSByZW1wbGlzc2FnZSBkZXMgZG9ubmVlcyBkYW5zIGZvcm11bGFpcmVcclxuXHJcbiAgICAgIC8vRGVzY3JpcHRpb25cclxuICAgICAgY29uc3QgcmVnZXggPSAvPGJyXFxzKltcXC9dPz4vZ2k7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbldpdGhvdXRiciA9IGRlc2NyaXB0aW9uLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG5cclxuICAgICAgLy9OYW1lXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbmFtZVwiKS52YWwobmFtZSk7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlX25hbWUgPSBcImFkZF9iZ2FtZV9mb3JtX2Rlc2NyaXB0aW9uXCI7XHJcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1tpbnN0YW5jZV9uYW1lXS5pbnNlcnRIdG1sKFxyXG4gICAgICAgIGA8cD4ke2Rlc2NyaXB0aW9uV2l0aG91dGJyfTwvcD5gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvL2ltYWdlXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fSW1hZ2VcIikudmFsKGltYWdlKTtcclxuICAgICAgY29uc3QgaW1nVmlldyA9IGA8aW1nIHNyYz0ke2ltYWdlfSBhbHQ9XCJpbWFnZSBib2FyZGdhbWVcIiB3aWR0aD01MCBpZD1cImltYWdlQmdhbWVcIj5gO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtIC5mb3JtLWdyb3VwOm50aC1jaGlsZCgyKVwiKS5hcHBlbmQoaW1nVmlldyk7XHJcblxyXG4gICAgICAvL0R1cmF0aW9uXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZHVyYXRpb25cIikudmFsKGR1cmF0aW9uKTtcclxuXHJcbiAgICAgIC8vIE1pbiBldCBNYXggUGxheWVyc1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21pbk5iUGxheWVyc1wiKS52YWwobWlucGxheWVycyk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWF4TmJQbGF5ZXJzXCIpLnZhbChtYXhwbGF5ZXJzKTtcclxuXHJcbiAgICAgIC8vIERpZmZpY3VsdHlcclxuICAgICAgaWYgKGRpZmZpY3VsdHkgPCA3KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9MV1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA+PSA3ICYmIGRpZmZpY3VsdHkgPCAxMikge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTJdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPj0gMTIgJiYgZGlmZmljdWx0eSA8IDE0KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9M11cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9NF1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1lY2hhbmlzbVxyXG4gICAgICBjb25zdCBNZWNoYW5pc21MYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21lY2hhbmlzbSAuZm9ybS1jaGVjay1sYWJlbFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRm9yID0gJCh0aGlzKVswXS5odG1sRm9yO1xyXG4gICAgICAgIE1lY2hhbmlzbUxhYmVsc05hbWVbbGFiZWxOYW1lXSA9IGxhYmVsRm9yO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAobGFiZWwgaW4gTWVjaGFuaXNtTGFiZWxzTmFtZSkge1xyXG4gICAgICAgIG1lY2hhbmlzbXMuZm9yRWFjaChtZWNoYW5pc20gPT4ge1xyXG4gICAgICAgICAgaWYgKG1lY2hhbmlzbSA9PSBsYWJlbCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBNZWNoYW5pc21MYWJlbHNOYW1lW2xhYmVsXTtcclxuICAgICAgICAgICAgJChgIyR7aWR9YCkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENhdGVnb3J5XHJcbiAgICAgIGNvbnN0IENhdGVnb3J5TGFiZWxzTmFtZSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9jYXRlZ29yeSAuZm9ybS1jaGVjay1sYWJlbFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRm9yID0gJCh0aGlzKVswXS5odG1sRm9yO1xyXG4gICAgICAgIENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbE5hbWVdID0gbGFiZWxGb3I7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZm9yIChsYWJlbCBpbiBDYXRlZ29yeUxhYmVsc05hbWUpIHtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5ID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbF07XHJcbiAgICAgICAgICAgICQoYCMke2lkfWApLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9