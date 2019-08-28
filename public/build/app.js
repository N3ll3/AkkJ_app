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

      console.log(image);
      $("#add_bgame_form_Image").val(image);
      var imgView = "<img src=".concat(image, " alt=\"image boardgame\" width=50>");
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicHJveHkiLCIkIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmdhbWVCR0ciLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmaW5kIiwiZWFjaCIsImlkIiwiYXR0ciIsIm5hbWUiLCJvcHRpb24iLCJPcHRpb24iLCJhcHBlbmQiLCJzZWxlY3RlZEdhbWUiLCJjaGlsZHJlbiIsInhtbCIsInRleHQiLCJyZW1vdmUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiZHVyYXRpb24iLCJtaW5wbGF5ZXJzIiwibWF4cGxheWVycyIsImRpZmZpY3VsdHkiLCJtZWNoYW5pc21zIiwibWVjaGFuaWMiLCJwdXNoIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwicmVnZXgiLCJkZXNjcmlwdGlvbldpdGhvdXRiciIsInJlcGxhY2UiLCJpbnN0YW5jZV9uYW1lIiwiQ0tFRElUT1IiLCJpbnN0YW5jZXMiLCJpbnNlcnRIdG1sIiwiY29uc29sZSIsImxvZyIsImltZ1ZpZXciLCJwcm9wIiwiTWVjaGFuaXNtTGFiZWxzTmFtZSIsIk9iamVjdCIsImxhYmVsTmFtZSIsImxhYmVsRm9yIiwiaHRtbEZvciIsImxhYmVsIiwiZm9yRWFjaCIsIm1lY2hhbmlzbSIsIkNhdGVnb3J5TGFiZWxzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFQLEMsQ0FDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLElBQU1DLEtBQUssR0FBRyx3QkFBZDtBQUVBQyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCQyxNQUFoQixDQUF1QixVQUFBQyxDQUFDLEVBQUk7QUFDMUJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQUlDLFFBQVEsR0FBR0osQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlSyxHQUFmLEVBQWY7QUFDQUwsR0FBQyxDQUFDTSxJQUFGLENBQU87QUFDTEMsUUFBSSxFQUFFLEtBREQ7QUFFTEMsT0FBRyxFQUFFVCxLQUFLLEdBQUcseUNBRlI7QUFHTFUsUUFBSSxFQUFFLFdBQVdMLFFBSFo7QUFJTE0sWUFBUSxFQUFFLEtBSkw7QUFLTEMsV0FBTyxFQUFFLGlCQUFTRixJQUFULEVBQWU7QUFDdEJULE9BQUMsQ0FBQ1MsSUFBRCxDQUFELENBQ0dHLElBREgsQ0FDUSxNQURSLEVBRUdDLElBRkgsQ0FFUSxZQUFXO0FBQ2YsWUFBSUMsRUFBRSxHQUFHZCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxJQUFiLENBQVQ7QUFDQSxZQUFJQyxJQUFJLEdBQUdoQixDQUFDLENBQUMsSUFBRCxDQUFELENBQ1JZLElBRFEsQ0FDSCxNQURHLEVBRVJHLElBRlEsQ0FFSCxPQUZHLENBQVg7QUFHQSxZQUFJRSxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXRixJQUFYLEVBQWlCRixFQUFqQixDQUFiO0FBQ0FkLFNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYW1CLE1BQWIsQ0FBb0JGLE1BQXBCO0FBQ0QsT0FUSDtBQVVEO0FBaEJJLEdBQVA7QUFrQkQsQ0FyQkQ7QUF1QkFqQixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCQyxNQUFoQixDQUF1QixVQUFBQyxDQUFDLEVBQUk7QUFDMUIsTUFBTWtCLFlBQVksR0FBR3BCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FDbEJxQixRQURrQixDQUNULGlCQURTLEVBRWxCaEIsR0FGa0IsRUFBckI7QUFHQUgsR0FBQyxDQUFDQyxjQUFGO0FBQ0FILEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLFFBQUksRUFBRSxLQUREO0FBRUxDLE9BQUcsRUFBRVQsS0FBSyxHQUFHLDZDQUZSO0FBR0xVLFFBQUksRUFBRSxRQUFRVyxZQUFSLEdBQXVCLGlCQUh4QjtBQUlMVCxXQUFPLEVBQUUsaUJBQVNXLEdBQVQsRUFBYztBQUNyQjtBQUVBO0FBQ0EsVUFBTU4sSUFBSSxHQUFHaEIsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUNWcUIsUUFEVSxDQUNELGlCQURDLEVBRVZFLElBRlUsRUFBYixDQUpxQixDQVFyQjs7QUFDQXZCLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CYSxJQUFwQixDQUF5QixZQUFXO0FBQ2xDYixTQUFDLENBQUMsSUFBRCxDQUFELENBQVF3QixNQUFSO0FBQ0QsT0FGRDtBQUlBLFVBQU1DLEtBQUssR0FBR3pCLENBQUMsQ0FBQ3NCLEdBQUQsQ0FBRCxDQUNYVixJQURXLENBQ04sT0FETSxFQUVYVyxJQUZXLEVBQWQ7QUFJQSxVQUFNRyxXQUFXLEdBQUcxQixDQUFDLENBQUNzQixHQUFELENBQUQsQ0FDakJWLElBRGlCLENBQ1osYUFEWSxFQUVqQlcsSUFGaUIsRUFBcEI7QUFJQSxVQUFNSSxRQUFRLEdBQUczQixDQUFDLENBQUNzQixHQUFELENBQUQsQ0FDZFYsSUFEYyxDQUNULGFBRFMsRUFFZEcsSUFGYyxDQUVULE9BRlMsQ0FBakI7QUFJQSxVQUFNYSxVQUFVLEdBQUc1QixDQUFDLENBQUNzQixHQUFELENBQUQsQ0FDaEJWLElBRGdCLENBQ1gsWUFEVyxFQUVoQkcsSUFGZ0IsQ0FFWCxPQUZXLENBQW5CO0FBSUEsVUFBTWMsVUFBVSxHQUFHN0IsQ0FBQyxDQUFDc0IsR0FBRCxDQUFELENBQ2hCVixJQURnQixDQUNYLFlBRFcsRUFFaEJHLElBRmdCLENBRVgsT0FGVyxDQUFuQjtBQUlBLFVBQU1lLFVBQVUsR0FBRzlCLENBQUMsQ0FBQ3NCLEdBQUQsQ0FBRCxDQUNoQlYsSUFEZ0IsQ0FDWCxRQURXLEVBRWhCRyxJQUZnQixDQUVYLE9BRlcsQ0FBbkI7QUFJQSxVQUFNZ0IsVUFBVSxHQUFHLEVBQW5CO0FBQ0EvQixPQUFDLENBQUNzQixHQUFELENBQUQsQ0FDR1YsSUFESCxDQUNRLE1BRFIsRUFFR0MsSUFGSCxDQUVRLFlBQVc7QUFDZixZQUFNTixJQUFJLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWUsSUFBUixDQUFhLE1BQWIsQ0FBYjs7QUFDQSxZQUFJUixJQUFJLElBQUksbUJBQVosRUFBaUM7QUFDL0IsY0FBTXlCLFFBQVEsR0FBR2hDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWUsSUFBUixDQUFhLE9BQWIsQ0FBakI7QUFDQWdCLG9CQUFVLENBQUNFLElBQVgsQ0FBZ0JELFFBQWhCO0FBQ0Q7QUFDRixPQVJIO0FBVUEsVUFBTUUsVUFBVSxHQUFHLEVBQW5CO0FBQ0FsQyxPQUFDLENBQUNzQixHQUFELENBQUQsQ0FDR1YsSUFESCxDQUNRLE1BRFIsRUFFR0MsSUFGSCxDQUVRLFlBQVc7QUFDZixZQUFNTixJQUFJLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWUsSUFBUixDQUFhLE1BQWIsQ0FBYjs7QUFDQSxZQUFJUixJQUFJLElBQUksbUJBQVosRUFBaUM7QUFDL0IsY0FBTTRCLFFBQVEsR0FBR25DLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWUsSUFBUixDQUFhLE9BQWIsQ0FBakI7QUFDQW1CLG9CQUFVLENBQUNELElBQVgsQ0FBZ0JFLFFBQWhCO0FBQ0Q7QUFDRixPQVJILEVBakRxQixDQTJEckI7QUFFQTs7QUFDQSxVQUFNQyxLQUFLLEdBQUcsZ0JBQWQ7QUFDQSxVQUFJQyxvQkFBb0IsR0FBR1gsV0FBVyxDQUFDWSxPQUFaLENBQW9CRixLQUFwQixFQUEyQixFQUEzQixDQUEzQixDQS9EcUIsQ0FpRXJCOztBQUNBcEMsT0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJLLEdBQTFCLENBQThCVyxJQUE5QjtBQUNBLFVBQU11QixhQUFhLEdBQUcsNEJBQXRCO0FBQ0FDLGNBQVEsQ0FBQ0MsU0FBVCxDQUFtQkYsYUFBbkIsRUFBa0NHLFVBQWxDLGNBQ1FMLG9CQURSLFdBcEVxQixDQXdFckI7O0FBQ0FNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBWjtBQUNBekIsT0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJLLEdBQTNCLENBQStCb0IsS0FBL0I7QUFDQSxVQUFNb0IsT0FBTyxzQkFBZXBCLEtBQWYsdUNBQWI7QUFDQXpCLE9BQUMsQ0FBQywwQ0FBRCxDQUFELENBQThDbUIsTUFBOUMsQ0FBcUQwQixPQUFyRCxFQTVFcUIsQ0E4RXJCOztBQUNBN0MsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJLLEdBQTlCLENBQWtDc0IsUUFBbEMsRUEvRXFCLENBaUZyQjs7QUFDQTNCLE9BQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDSyxHQUFsQyxDQUFzQ3VCLFVBQXRDO0FBQ0E1QixPQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0ssR0FBbEMsQ0FBc0N3QixVQUF0QyxFQW5GcUIsQ0FxRnJCOztBQUNBLFVBQUlDLFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNsQjlCLFNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQ0dxQixRQURILENBQ1ksaUJBRFosRUFFR3lCLElBRkgsQ0FFUSxVQUZSLEVBRW9CLElBRnBCO0FBR0QsT0FKRCxNQUlPLElBQUloQixVQUFVLElBQUksQ0FBZCxJQUFtQkEsVUFBVSxHQUFHLEVBQXBDLEVBQXdDO0FBQzdDOUIsU0FBQyxDQUFDLDRCQUFELENBQUQsQ0FDR3FCLFFBREgsQ0FDWSxpQkFEWixFQUVHeUIsSUFGSCxDQUVRLFVBRlIsRUFFb0IsSUFGcEI7QUFHRCxPQUpNLE1BSUEsSUFBSWhCLFVBQVUsSUFBSSxFQUFkLElBQW9CQSxVQUFVLEdBQUcsRUFBckMsRUFBeUM7QUFDOUM5QixTQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUNHcUIsUUFESCxDQUNZLGlCQURaLEVBRUd5QixJQUZILENBRVEsVUFGUixFQUVvQixJQUZwQjtBQUdELE9BSk0sTUFJQTtBQUNMOUMsU0FBQyxDQUFDLDRCQUFELENBQUQsQ0FDR3FCLFFBREgsQ0FDWSxpQkFEWixFQUVHeUIsSUFGSCxDQUVRLFVBRlIsRUFFb0IsSUFGcEI7QUFHRCxPQXRHb0IsQ0F3R3JCOzs7QUFDQSxVQUFNQyxtQkFBbUIsR0FBRyxJQUFJQyxNQUFKLEVBQTVCO0FBQ0FoRCxPQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRGEsSUFBakQsQ0FBc0QsWUFBVztBQUMvRCxZQUFNb0MsU0FBUyxHQUFHakQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixFQUFsQjtBQUNBLFlBQU0yQixRQUFRLEdBQUdsRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXbUQsT0FBNUI7QUFDQUosMkJBQW1CLENBQUNFLFNBQUQsQ0FBbkIsR0FBaUNDLFFBQWpDO0FBQ0QsT0FKRDs7QUFNQSxXQUFLRSxLQUFMLElBQWNMLG1CQUFkLEVBQW1DO0FBQ2pDaEIsa0JBQVUsQ0FBQ3NCLE9BQVgsQ0FBbUIsVUFBQUMsU0FBUyxFQUFJO0FBQzlCLGNBQUlBLFNBQVMsSUFBSUYsS0FBakIsRUFBd0I7QUFDdEIsZ0JBQUl0QyxFQUFFLEdBQUdpQyxtQkFBbUIsQ0FBQ0ssS0FBRCxDQUE1QjtBQUNBcEQsYUFBQyxZQUFLYyxFQUFMLEVBQUQsQ0FBWWdDLElBQVosQ0FBaUIsU0FBakIsRUFBNEIsSUFBNUI7QUFDRDtBQUNGLFNBTEQ7QUFNRCxPQXZIb0IsQ0F5SHJCOzs7QUFDQSxVQUFNUyxrQkFBa0IsR0FBRyxJQUFJUCxNQUFKLEVBQTNCO0FBQ0FoRCxPQUFDLENBQUMsNENBQUQsQ0FBRCxDQUFnRGEsSUFBaEQsQ0FBcUQsWUFBVztBQUM5RCxZQUFNb0MsU0FBUyxHQUFHakQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixFQUFsQjtBQUNBLFlBQU0yQixRQUFRLEdBQUdsRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXbUQsT0FBNUI7QUFDQUksMEJBQWtCLENBQUNOLFNBQUQsQ0FBbEIsR0FBZ0NDLFFBQWhDO0FBQ0QsT0FKRDs7QUFNQSxXQUFLRSxLQUFMLElBQWNHLGtCQUFkLEVBQWtDO0FBQ2hDckIsa0JBQVUsQ0FBQ21CLE9BQVgsQ0FBbUIsVUFBQWxCLFFBQVEsRUFBSTtBQUM3QixjQUFJQSxRQUFRLElBQUlpQixLQUFoQixFQUF1QjtBQUNyQixnQkFBSXRDLEVBQUUsR0FBR3lDLGtCQUFrQixDQUFDSCxLQUFELENBQTNCO0FBQ0FwRCxhQUFDLFlBQUtjLEVBQUwsRUFBRCxDQUFZZ0MsSUFBWixDQUFpQixTQUFqQixFQUE0QixJQUE1QjtBQUNEO0FBQ0YsU0FMRDtBQU1EO0FBQ0Y7QUE3SUksR0FBUDtBQStJRCxDQXBKRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoXCIuLi9jc3MvYXBwLmNzc1wiKTtcclxuLy8gY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb25cIik7XHJcbi8vIGltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qc1wiO1xyXG5cclxuLy8gUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG4vLyBSb3V0aW5nLmdlbmVyYXRlKFwicmVwX2xvZ19saXN0XCIpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG4vLyBjb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuXHJcbmNvbnN0IHByb3h5ID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcblxyXG4kKFwiI3NlYXJjaEJHR1wiKS5zdWJtaXQoZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBiZ2FtZUJHRyA9ICQoXCIjYmdhbWVCR0dcIikudmFsKCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwOi8vYm9hcmRnYW1lZ2Vlay5jb20veG1sYXBpMi9zZWFyY2hcIixcclxuICAgIGRhdGE6IFwicXVlcnk9XCIgKyBiZ2FtZUJHRyxcclxuICAgIGRhdGFUeXBlOiBcInhtbFwiLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAkKGRhdGEpXHJcbiAgICAgICAgLmZpbmQoXCJpdGVtXCIpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgIGxldCBuYW1lID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAuZmluZChcIm5hbWVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgIGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKG5hbWUsIGlkKTtcclxuICAgICAgICAgICQoXCIjYmdnYW1lXCIpLmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIjYmdnY2hvaWNlXCIpLnN1Ym1pdChlID0+IHtcclxuICBjb25zdCBzZWxlY3RlZEdhbWUgPSAkKFwiI2JnZ2FtZVwiKVxyXG4gICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAudmFsKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBwcm94eSArIFwiaHR0cHM6Ly93d3cuYm9hcmRnYW1lZ2Vlay5jb20veG1sYXBpMi90aGluZ1wiLFxyXG4gICAgZGF0YTogXCJpZD1cIiArIHNlbGVjdGVkR2FtZSArIFwiJnR5cGU9Ym9hcmRnYW1lXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbih4bWwpIHtcclxuICAgICAgLy9wYXJzZXIgZHUgeG1sIHJlY3VcclxuXHJcbiAgICAgIC8vIHJlY3VwIE5hbWVcclxuICAgICAgY29uc3QgbmFtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIC8vdmlkZSBsZSBzZWxlY3RcclxuICAgICAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBpbWFnZSA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiaW1hZ2VcIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcImRlc2NyaXB0aW9uXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJwbGF5aW5ndGltZVwiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBtaW5wbGF5ZXJzID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5wbGF5ZXJzXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1heHBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1heHBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgZGlmZmljdWx0eSA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWluYWdlXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1lY2hhbmlzbXMgPSBbXTtcclxuICAgICAgJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJsaW5rXCIpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCB0eXBlID0gJCh0aGlzKS5hdHRyKFwidHlwZVwiKTtcclxuICAgICAgICAgIGlmICh0eXBlID09IFwiYm9hcmRnYW1lbWVjaGFuaWNcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtZWNoYW5pYyA9ICQodGhpcykuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICBtZWNoYW5pc21zLnB1c2gobWVjaGFuaWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgICAkKHhtbClcclxuICAgICAgICAuZmluZChcImxpbmtcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJib2FyZGdhbWVjYXRlZ29yeVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBwcmUgcmVtcGxpc3NhZ2UgZGVzIGRvbm5lZXMgZGFucyBmb3JtdWxhaXJlXHJcblxyXG4gICAgICAvL0Rlc2NyaXB0aW9uXHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gLzxiclxccypbXFwvXT8+L2dpO1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb25XaXRob3V0YnIgPSBkZXNjcmlwdGlvbi5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuXHJcbiAgICAgIC8vTmFtZVxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX25hbWVcIikudmFsKG5hbWUpO1xyXG4gICAgICBjb25zdCBpbnN0YW5jZV9uYW1lID0gXCJhZGRfYmdhbWVfZm9ybV9kZXNjcmlwdGlvblwiO1xyXG4gICAgICBDS0VESVRPUi5pbnN0YW5jZXNbaW5zdGFuY2VfbmFtZV0uaW5zZXJ0SHRtbChcclxuICAgICAgICBgPHA+JHtkZXNjcmlwdGlvbldpdGhvdXRicn08L3A+YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy9pbWFnZVxyXG4gICAgICBjb25zb2xlLmxvZyhpbWFnZSk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fSW1hZ2VcIikudmFsKGltYWdlKTtcclxuICAgICAgY29uc3QgaW1nVmlldyA9IGA8aW1nIHNyYz0ke2ltYWdlfSBhbHQ9XCJpbWFnZSBib2FyZGdhbWVcIiB3aWR0aD01MD5gO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtIC5mb3JtLWdyb3VwOm50aC1jaGlsZCgyKVwiKS5hcHBlbmQoaW1nVmlldyk7XHJcblxyXG4gICAgICAvL0R1cmF0aW9uXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZHVyYXRpb25cIikudmFsKGR1cmF0aW9uKTtcclxuXHJcbiAgICAgIC8vIE1pbiBldCBNYXggUGxheWVyc1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21pbk5iUGxheWVyc1wiKS52YWwobWlucGxheWVycyk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWF4TmJQbGF5ZXJzXCIpLnZhbChtYXhwbGF5ZXJzKTtcclxuXHJcbiAgICAgIC8vIERpZmZpY3VsdHlcclxuICAgICAgaWYgKGRpZmZpY3VsdHkgPCA3KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9MV1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA+PSA3ICYmIGRpZmZpY3VsdHkgPCAxMikge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTJdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPj0gMTIgJiYgZGlmZmljdWx0eSA8IDE0KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9M11cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9NF1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1lY2hhbmlzbVxyXG4gICAgICBjb25zdCBNZWNoYW5pc21MYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21lY2hhbmlzbSAuZm9ybS1jaGVjay1sYWJlbFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRm9yID0gJCh0aGlzKVswXS5odG1sRm9yO1xyXG4gICAgICAgIE1lY2hhbmlzbUxhYmVsc05hbWVbbGFiZWxOYW1lXSA9IGxhYmVsRm9yO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAobGFiZWwgaW4gTWVjaGFuaXNtTGFiZWxzTmFtZSkge1xyXG4gICAgICAgIG1lY2hhbmlzbXMuZm9yRWFjaChtZWNoYW5pc20gPT4ge1xyXG4gICAgICAgICAgaWYgKG1lY2hhbmlzbSA9PSBsYWJlbCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBNZWNoYW5pc21MYWJlbHNOYW1lW2xhYmVsXTtcclxuICAgICAgICAgICAgJChgIyR7aWR9YCkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENhdGVnb3J5XHJcbiAgICAgIGNvbnN0IENhdGVnb3J5TGFiZWxzTmFtZSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9jYXRlZ29yeSAuZm9ybS1jaGVjay1sYWJlbFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRm9yID0gJCh0aGlzKVswXS5odG1sRm9yO1xyXG4gICAgICAgIENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbE5hbWVdID0gbGFiZWxGb3I7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZm9yIChsYWJlbCBpbiBDYXRlZ29yeUxhYmVsc05hbWUpIHtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5ID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbF07XHJcbiAgICAgICAgICAgICQoYCMke2lkfWApLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9