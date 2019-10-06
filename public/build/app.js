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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4__);





/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");

var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.setRoutingData(routes); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
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

      $("#add_bgame_form_image_bgg").val(image).hide();
      var imgView = "<figure> <figcaption> Image from BGG </figcaption><img src=".concat(image, " alt=\"image boardgame\" width=100 id=\"imageBgame\"></figure>");
      $("#add_bgame_form_name").after(imgView); //Duration

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

      var _loop = function _loop(label) {
        mechanisms.forEach(function (mechanism) {
          if (mechanism == label) {
            var id = MechanismLabelsName[label];
            $("#".concat(id)).prop("checked", true);
          }
        });
      };

      for (var label in MechanismLabelsName) {
        _loop(label);
      } // Category


      var CategoryLabelsName = new Object();
      $("#add_bgame_form_category .form-check-label").each(function () {
        var labelName = $(this).text();
        var labelFor = $(this)[0].htmlFor;
        CategoryLabelsName[labelName] = labelFor;
      });

      var _loop2 = function _loop2(label) {
        categories.forEach(function (category) {
          if (category == label) {
            var id = CategoryLabelsName[label];
            $("#".concat(id)).prop("checked", true);
          }
        });
      };

      for (var label in CategoryLabelsName) {
        _loop2(label);
      }
    }
  });
});
$("#deleteImage").on("click", function () {
  var id = $(this).data("id");
  $.post(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.generate("delete_image_bgame", {
    id: id
  })).done(function () {
    $("#image").remove();
    $("#deleteImage").hide();
    alert("Image is deleted");
  }).fail(function () {
    alert("Image deletion failed");
  });
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"delete_bgame\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/delete\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"delete_image_bgame\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/delete/image\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  var n = t();
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }

    return e;
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      i = function () {
    function i(t, n) {
      e(this, i), this.context_ = t || {
        base_url: "",
        prefix: "",
        host: "",
        port: "",
        scheme: "",
        locale: ""
      }, this.setRoutes(n || {});
    }

    return o(i, [{
      key: "setRoutingData",
      value: function value(e) {
        this.setBaseUrl(e.base_url), this.setRoutes(e.routes), "prefix" in e && this.setPrefix(e.prefix), "port" in e && this.setPort(e.port), "locale" in e && this.setLocale(e.locale), this.setHost(e.host), this.setScheme(e.scheme);
      }
    }, {
      key: "setRoutes",
      value: function value(e) {
        this.routes_ = Object.freeze(e);
      }
    }, {
      key: "getRoutes",
      value: function value() {
        return this.routes_;
      }
    }, {
      key: "setBaseUrl",
      value: function value(e) {
        this.context_.base_url = e;
      }
    }, {
      key: "getBaseUrl",
      value: function value() {
        return this.context_.base_url;
      }
    }, {
      key: "setPrefix",
      value: function value(e) {
        this.context_.prefix = e;
      }
    }, {
      key: "setScheme",
      value: function value(e) {
        this.context_.scheme = e;
      }
    }, {
      key: "getScheme",
      value: function value() {
        return this.context_.scheme;
      }
    }, {
      key: "setHost",
      value: function value(e) {
        this.context_.host = e;
      }
    }, {
      key: "getHost",
      value: function value() {
        return this.context_.host;
      }
    }, {
      key: "setPort",
      value: function value(e) {
        this.context_.port = e;
      }
    }, {
      key: "getPort",
      value: function value() {
        return this.context_.port;
      }
    }, {
      key: "setLocale",
      value: function value(e) {
        this.context_.locale = e;
      }
    }, {
      key: "getLocale",
      value: function value() {
        return this.context_.locale;
      }
    }, {
      key: "buildQueryParams",
      value: function value(e, t, o) {
        var i = this,
            r = void 0,
            s = new RegExp(/\[\]$/);
        if (t instanceof Array) t.forEach(function (t, r) {
          s.test(e) ? o(e, t) : i.buildQueryParams(e + "[" + ("object" === ("undefined" == typeof t ? "undefined" : n(t)) ? r : "") + "]", t, o);
        });else if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (r in t) {
          this.buildQueryParams(e + "[" + r + "]", t[r], o);
        } else o(e, t);
      }
    }, {
      key: "getRoute",
      value: function value(e) {
        var t = this.context_.prefix + e,
            n = e + "." + this.context_.locale,
            o = this.context_.prefix + e + "." + this.context_.locale,
            i = [t, n, o, e];

        for (var r in i) {
          if (i[r] in this.routes_) return this.routes_[i[r]];
        }

        throw new Error('The route "' + e + '" does not exist.');
      }
    }, {
      key: "generate",
      value: function value(e, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.getRoute(e),
            r = n || {},
            s = t({}, r),
            u = "",
            c = !0,
            a = "",
            f = "undefined" == typeof this.getPort() || null === this.getPort() ? "" : this.getPort();

        if (i.tokens.forEach(function (t) {
          if ("text" === t[0]) return u = t[1] + u, void (c = !1);
          {
            if ("variable" !== t[0]) throw new Error('The token type "' + t[0] + '" is not supported.');
            var n = i.defaults && t[3] in i.defaults;

            if (!1 === c || !n || t[3] in r && r[t[3]] != i.defaults[t[3]]) {
              var o = void 0;
              if (t[3] in r) o = r[t[3]], delete s[t[3]];else {
                if (!n) {
                  if (c) return;
                  throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".');
                }

                o = i.defaults[t[3]];
              }
              var a = !0 === o || !1 === o || "" === o;

              if (!a || !c) {
                var f = encodeURIComponent(o).replace(/%2F/g, "/");
                "null" === f && null === o && (f = ""), u = t[1] + f + u;
              }

              c = !1;
            } else n && t[3] in s && delete s[t[3]];
          }
        }), "" === u && (u = "/"), i.hosttokens.forEach(function (e) {
          var t = void 0;
          return "text" === e[0] ? void (a = e[1] + a) : void ("variable" === e[0] && (e[3] in r ? (t = r[e[3]], delete s[e[3]]) : i.defaults && e[3] in i.defaults && (t = i.defaults[e[3]]), a = e[1] + t + a));
        }), u = this.context_.base_url + u, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme ? u = i.requirements._scheme + "://" + (a || this.getHost()) + u : "undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0] ? u = i.schemes[0] + "://" + (a || this.getHost()) + u : a && this.getHost() !== a + ("" === f ? "" : ":" + f) ? u = this.getScheme() + "://" + a + ("" === f ? "" : ":" + f) + u : o === !0 && (u = this.getScheme() + "://" + this.getHost() + u), Object.keys(s).length > 0) {
          var l = void 0,
              h = [],
              y = function y(e, t) {
            t = "function" == typeof t ? t() : t, t = null === t ? "" : t, h.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };

          for (l in s) {
            this.buildQueryParams(l, s[l], y);
          }

          u = u + "?" + h.join("&").replace(/%20/g, "+");
        }

        return u;
      }
    }], [{
      key: "getInstance",
      value: function value() {
        return r;
      }
    }, {
      key: "setData",
      value: function value(e) {
        var t = i.getInstance();
        t.setRoutingData(e);
      }
    }]), i;
  }();

  i.Route, i.Context;
  var r = new i();
  return {
    Router: i,
    Routing: r
  };
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~myludo"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInJvdXRlcyIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsInByb3h5IiwiJCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJnYW1lQkdHIiwidmFsIiwiZWFjaCIsInJlbW92ZSIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImZpbmQiLCJhdHRyIiwib3B0aW9uIiwiT3B0aW9uIiwiYXBwZW5kIiwiaWQiLCJuYW1lIiwic2VsZWN0ZWRHYW1lIiwiY2hpbGRyZW4iLCJ4bWwiLCJ0ZXh0IiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImR1cmF0aW9uIiwibWlucGxheWVycyIsIm1heHBsYXllcnMiLCJkaWZmaWN1bHR5IiwibWVjaGFuaXNtcyIsIm1lY2hhbmljIiwicHVzaCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsInJlZ2V4IiwiZGVzY3JpcHRpb25XaXRob3V0YnIiLCJyZXBsYWNlIiwiaW5zdGFuY2VfbmFtZSIsIkNLRURJVE9SIiwiaW5zdGFuY2VzIiwiaW5zZXJ0SHRtbCIsImhpZGUiLCJpbWdWaWV3IiwiYWZ0ZXIiLCJwcm9wIiwiTWVjaGFuaXNtTGFiZWxzTmFtZSIsIk9iamVjdCIsImxhYmVsTmFtZSIsImxhYmVsRm9yIiwiaHRtbEZvciIsImxhYmVsIiwiZm9yRWFjaCIsIm1lY2hhbmlzbSIsIkNhdGVnb3J5TGFiZWxzTmFtZSIsIm9uIiwicG9zdCIsImdlbmVyYXRlIiwiZG9uZSIsImFsZXJ0IiwiZmFpbCIsInQiLCJuIiwiZGVmaW5lIiwiVHlwZUVycm9yIiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImkiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJ2YWx1ZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRQb3J0Iiwic2V0TG9jYWxlIiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJmcmVlemUiLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwidSIsImMiLCJhIiwiZiIsImdldFBvcnQiLCJ0b2tlbnMiLCJkZWZhdWx0cyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJnZXRTY2hlbWUiLCJfc2NoZW1lIiwiZ2V0SG9zdCIsInNjaGVtZXMiLCJrZXlzIiwibCIsImgiLCJ5Iiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVA7O0FBRUEsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDBFQUFELENBQXRCOztBQUNBO0FBRUFFLGtIQUFPLENBQUNDLGNBQVIsQ0FBdUJGLE1BQXZCLEUsQ0FFQTtBQUNBOztBQUVBLElBQU1HLEtBQUssR0FBRyx3QkFBZDtBQUVB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aW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKFwiLi4vY3NzL2FwcC5jc3NcIik7XHJcblxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblxyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXHJcbi8vIGNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuY29uc3QgcHJveHkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcclxuXHJcbiQoXCIjc2VhcmNoQkdHXCIpLnN1Ym1pdChlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGJnYW1lQkdHID0gJChcIiNiZ2FtZUJHR1wiKS52YWwoKTtcclxuXHJcbiAgLy8gVE9ETyA6IHJlZmFjdG8gYXZlYyBmdW5jdGlvbiBjbGVhclNlbGVjdCgpXHJcbiAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogcHJveHkgKyBcImh0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3NlYXJjaFwiLFxyXG4gICAgZGF0YTogXCJxdWVyeT1cIiArIGJnYW1lQkdHLFxyXG4gICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAkKGRhdGEpXHJcbiAgICAgICAgICAuZmluZChcIml0ZW1zXCIpXHJcbiAgICAgICAgICAuYXR0cihcInRvdGFsXCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24oXCJBdWN1biByw6lzdWx0YXRcIik7XHJcbiAgICAgICAgJChcIiNiZ2dhbWVcIikuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChkYXRhKVxyXG4gICAgICAgICAgLmZpbmQoXCJpdGVtXCIpXHJcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwibmFtZVwiKVxyXG4gICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKG5hbWUsIGlkKTtcclxuICAgICAgICAgICAgJChcIiNiZ2dhbWVcIikuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIjYmdnY2hvaWNlXCIpLnN1Ym1pdChlID0+IHtcclxuICBjb25zdCBzZWxlY3RlZEdhbWUgPSAkKFwiI2JnZ2FtZVwiKVxyXG4gICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAudmFsKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBwcm94eSArIFwiaHR0cHM6Ly93d3cuYm9hcmRnYW1lZ2Vlay5jb20veG1sYXBpMi90aGluZ1wiLFxyXG4gICAgZGF0YTogXCJpZD1cIiArIHNlbGVjdGVkR2FtZSArIFwiJnR5cGU9Ym9hcmRnYW1lXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbih4bWwpIHtcclxuICAgICAgLy9wYXJzZXIgZHUgeG1sIHJlY3VcclxuXHJcbiAgICAgIC8vIHJlY3VwIE5hbWVcclxuICAgICAgY29uc3QgbmFtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIC8vLy8gVE9ETyA6IHJlZmFjdG8gYXZlYyBmdW5jdGlvbiBjbGVhclNlbGVjdCgpXHJcbiAgICAgICQoXCIjYmdnYW1lIG9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiI2ltYWdlQmdhbWVcIikucmVtb3ZlKCk7XHJcblxyXG4gICAgICBjb25zdCBpbWFnZSA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiaW1hZ2VcIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcImRlc2NyaXB0aW9uXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJwbGF5aW5ndGltZVwiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBtaW5wbGF5ZXJzID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5wbGF5ZXJzXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1heHBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1heHBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgZGlmZmljdWx0eSA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWluYWdlXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1lY2hhbmlzbXMgPSBbXTtcclxuICAgICAgJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJsaW5rXCIpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCB0eXBlID0gJCh0aGlzKS5hdHRyKFwidHlwZVwiKTtcclxuICAgICAgICAgIGlmICh0eXBlID09IFwiYm9hcmRnYW1lbWVjaGFuaWNcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtZWNoYW5pYyA9ICQodGhpcykuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICBtZWNoYW5pc21zLnB1c2gobWVjaGFuaWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgICAkKHhtbClcclxuICAgICAgICAuZmluZChcImxpbmtcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJib2FyZGdhbWVjYXRlZ29yeVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBwcmUgcmVtcGxpc3NhZ2UgZGVzIGRvbm5lZXMgZGFucyBmb3JtdWxhaXJlXHJcblxyXG4gICAgICAvL0Rlc2NyaXB0aW9uXHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gLzxiclxccypbXFwvXT8+L2dpO1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb25XaXRob3V0YnIgPSBkZXNjcmlwdGlvbi5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuXHJcbiAgICAgIC8vTmFtZVxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX25hbWVcIikudmFsKG5hbWUpO1xyXG4gICAgICBjb25zdCBpbnN0YW5jZV9uYW1lID0gXCJhZGRfYmdhbWVfZm9ybV9kZXNjcmlwdGlvblwiO1xyXG4gICAgICBDS0VESVRPUi5pbnN0YW5jZXNbaW5zdGFuY2VfbmFtZV0uaW5zZXJ0SHRtbChcclxuICAgICAgICBgPHA+JHtkZXNjcmlwdGlvbldpdGhvdXRicn08L3A+YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy9pbWFnZVxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2ltYWdlX2JnZ1wiKVxyXG4gICAgICAgIC52YWwoaW1hZ2UpXHJcbiAgICAgICAgLmhpZGUoKTtcclxuICAgICAgY29uc3QgaW1nVmlldyA9IGA8ZmlndXJlPiA8ZmlnY2FwdGlvbj4gSW1hZ2UgZnJvbSBCR0cgPC9maWdjYXB0aW9uPjxpbWcgc3JjPSR7aW1hZ2V9IGFsdD1cImltYWdlIGJvYXJkZ2FtZVwiIHdpZHRoPTEwMCBpZD1cImltYWdlQmdhbWVcIj48L2ZpZ3VyZT5gO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX25hbWVcIikuYWZ0ZXIoaW1nVmlldyk7XHJcblxyXG4gICAgICAvL0R1cmF0aW9uXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZHVyYXRpb25cIikudmFsKGR1cmF0aW9uKTtcclxuXHJcbiAgICAgIC8vIE1pbiBldCBNYXggUGxheWVyc1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21pbk5iUGxheWVyc1wiKS52YWwobWlucGxheWVycyk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWF4TmJQbGF5ZXJzXCIpLnZhbChtYXhwbGF5ZXJzKTtcclxuXHJcbiAgICAgIC8vIERpZmZpY3VsdHlcclxuICAgICAgaWYgKGRpZmZpY3VsdHkgPCA3KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9MV1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA+PSA3ICYmIGRpZmZpY3VsdHkgPCAxMikge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTJdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPj0gMTIgJiYgZGlmZmljdWx0eSA8IDE0KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9M11cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9NF1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1lY2hhbmlzbVxyXG4gICAgICBjb25zdCBNZWNoYW5pc21MYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG5cclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9tZWNoYW5pc20gLmZvcm0tY2hlY2stbGFiZWxcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICBjb25zdCBsYWJlbEZvciA9ICQodGhpcylbMF0uaHRtbEZvcjtcclxuICAgICAgICBNZWNoYW5pc21MYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBsYWJlbCBpbiBNZWNoYW5pc21MYWJlbHNOYW1lKSB7XHJcbiAgICAgICAgbWVjaGFuaXNtcy5mb3JFYWNoKG1lY2hhbmlzbSA9PiB7XHJcbiAgICAgICAgICBpZiAobWVjaGFuaXNtID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IE1lY2hhbmlzbUxhYmVsc05hbWVbbGFiZWxdO1xyXG4gICAgICAgICAgICAkKGAjJHtpZH1gKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2F0ZWdvcnlcclxuICAgICAgY29uc3QgQ2F0ZWdvcnlMYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2NhdGVnb3J5IC5mb3JtLWNoZWNrLWxhYmVsXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWxGb3IgPSAkKHRoaXMpWzBdLmh0bWxGb3I7XHJcbiAgICAgICAgQ2F0ZWdvcnlMYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBsYWJlbCBpbiBDYXRlZ29yeUxhYmVsc05hbWUpIHtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5ID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbF07XHJcbiAgICAgICAgICAgICQoYCMke2lkfWApLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNkZWxldGVJbWFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gIGxldCBpZCA9ICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICQucG9zdChSb3V0aW5nLmdlbmVyYXRlKFwiZGVsZXRlX2ltYWdlX2JnYW1lXCIsIHsgaWQ6IGlkIH0pKVxyXG4gICAgLmRvbmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIjaW1hZ2VcIikucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjZGVsZXRlSW1hZ2VcIikuaGlkZSgpXHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgaXMgZGVsZXRlZFwiKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbChmdW5jdGlvbigpIHtcclxuICAgICAgYWxlcnQoXCJJbWFnZSBkZWxldGlvbiBmYWlsZWRcIik7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtlKHRoaXMsaSksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyhufHx7fSl9cmV0dXJuIG8oaSxbe2tleTpcInNldFJvdXRpbmdEYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSxcInByZWZpeFwiaW4gZSYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLFwicG9ydFwiaW4gZSYmdGhpcy5zZXRQb3J0KGUucG9ydCksXCJsb2NhbGVcImluIGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcInNldFBvcnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX19LHtrZXk6XCJnZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0fX0se2tleTpcInNldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9fSx7a2V5OlwiZ2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9fSx7a2V5OlwiYnVpbGRRdWVyeVBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgaT10aGlzLHI9dm9pZCAwLHM9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKHQgaW5zdGFuY2VvZiBBcnJheSl0LmZvckVhY2goZnVuY3Rpb24odCxyKXtzLnRlc3QoZSk/byhlLHQpOmkuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiKyhcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSk/cjpcIlwiKStcIl1cIix0LG8pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSkpZm9yKHIgaW4gdCl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIityK1wiXVwiLHRbcl0sbyk7ZWxzZSBvKGUsdCl9fSx7a2V5OlwiZ2V0Um91dGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnRleHRfLnByZWZpeCtlLG49ZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxvPXRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsaT1bdCxuLG8sZV07Zm9yKHZhciByIGluIGkpaWYoaVtyXWluIHRoaXMucm91dGVzXylyZXR1cm4gdGhpcy5yb3V0ZXNfW2lbcl1dO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxpPXRoaXMuZ2V0Um91dGUoZSkscj1ufHx7fSxzPXQoe30sciksdT1cIlwiLGM9ITAsYT1cIlwiLGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gdT10WzFdK3Usdm9pZChjPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09Y3x8IW58fHRbM11pbiByJiZyW3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHIpbz1yW3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGMpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGE9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFhfHwhYyl7dmFyIGY9ZW5jb2RlVVJJQ29tcG9uZW50KG8pLnJlcGxhY2UoLyUyRi9nLFwiL1wiKTtcIm51bGxcIj09PWYmJm51bGw9PT1vJiYoZj1cIlwiKSx1PXRbMV0rZit1fWM9ITF9ZWxzZSBuJiZ0WzNdaW4gcyYmZGVsZXRlIHNbdFszXV19fSksXCJcIj09PXUmJih1PVwiL1wiKSxpLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12b2lkIDA7cmV0dXJuXCJ0ZXh0XCI9PT1lWzBdP3ZvaWQoYT1lWzFdK2EpOnZvaWQoXCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiByPyh0PXJbZVszXV0sZGVsZXRlIHNbZVszXV0pOmkuZGVmYXVsdHMmJmVbM11pbiBpLmRlZmF1bHRzJiYodD1pLmRlZmF1bHRzW2VbM11dKSxhPWVbMV0rdCthKSl9KSx1PXRoaXMuY29udGV4dF8uYmFzZV91cmwrdSxpLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBpLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9aS5yZXF1aXJlbWVudHMuX3NjaGVtZT91PWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXT91PWkuc2NoZW1lc1swXStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTphJiZ0aGlzLmdldEhvc3QoKSE9PWErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZik/dT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrYSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKSt1Om89PT0hMCYmKHU9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpK3UpLE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgbD12b2lkIDAsaD1bXSx5PWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LGgucHVzaChlbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpKX07Zm9yKGwgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMobCxzW2xdLHkpO3U9dStcIj9cIitoLmpvaW4oXCImXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX1yZXR1cm4gdX19XSxbe2tleTpcImdldEluc3RhbmNlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gcn19LHtrZXk6XCJzZXREYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5nZXRJbnN0YW5jZSgpO3Quc2V0Um91dGluZ0RhdGEoZSl9fV0pLGl9KCk7aS5Sb3V0ZSxpLkNvbnRleHQ7dmFyIHI9bmV3IGk7cmV0dXJue1JvdXRlcjppLFJvdXRpbmc6cn19KTsiXSwic291cmNlUm9vdCI6IiJ9