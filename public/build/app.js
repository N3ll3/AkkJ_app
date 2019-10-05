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
      console.log(xml, description);
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

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"delete_bgame\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/delete\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInJvdXRlcyIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsInByb3h5IiwiJCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJnYW1lQkdHIiwidmFsIiwiZWFjaCIsInJlbW92ZSIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImZpbmQiLCJhdHRyIiwib3B0aW9uIiwiT3B0aW9uIiwiYXBwZW5kIiwiaWQiLCJuYW1lIiwic2VsZWN0ZWRHYW1lIiwiY2hpbGRyZW4iLCJ4bWwiLCJ0ZXh0IiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkdXJhdGlvbiIsIm1pbnBsYXllcnMiLCJtYXhwbGF5ZXJzIiwiZGlmZmljdWx0eSIsIm1lY2hhbmlzbXMiLCJtZWNoYW5pYyIsInB1c2giLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJyZWdleCIsImRlc2NyaXB0aW9uV2l0aG91dGJyIiwicmVwbGFjZSIsImluc3RhbmNlX25hbWUiLCJDS0VESVRPUiIsImluc3RhbmNlcyIsImluc2VydEh0bWwiLCJpbWdWaWV3IiwicHJvcCIsIk1lY2hhbmlzbUxhYmVsc05hbWUiLCJPYmplY3QiLCJsYWJlbE5hbWUiLCJsYWJlbEZvciIsImh0bWxGb3IiLCJsYWJlbCIsImZvckVhY2giLCJtZWNoYW5pc20iLCJDYXRlZ29yeUxhYmVsc05hbWUiLCJ0IiwibiIsImRlZmluZSIsIlR5cGVFcnJvciIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwidmFsdWUiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiciIsInMiLCJSZWdFeHAiLCJBcnJheSIsInRlc3QiLCJidWlsZFF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJnZXRSb3V0ZSIsInUiLCJjIiwiYSIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZGVmYXVsdHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiZ2V0U2NoZW1lIiwiX3NjaGVtZSIsImdldEhvc3QiLCJzY2hlbWVzIiwia2V5cyIsImwiLCJoIiwieSIsImpvaW4iLCJnZXRJbnN0YW5jZSIsIlJvdXRlIiwiQ29udGV4dCIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFQOztBQUVBLElBQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQywwRUFBRCxDQUF0Qjs7QUFDQTtBQUVBRSxrSEFBTyxDQUFDQyxjQUFSLENBQXVCRixNQUF2QixFLENBRUE7QUFDQTs7QUFFQSxJQUFNRyxLQUFLLEdBQUcsd0JBQWQ7QUFFQUMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsTUFBaEIsQ0FBdUIsVUFB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bkIsU0FBRyxFQUFDLFNBQUw7QUFBZVUsV0FBSyxFQUFDLGVBQVNsRixDQUFULEVBQVc7QUFBQyxZQUFJc0QsQ0FBQyxHQUFDbUIsQ0FBQyxDQUFDNkMsV0FBRixFQUFOO0FBQXNCaEUsU0FBQyxDQUFDMUQsY0FBRixDQUFpQkksQ0FBakI7QUFBb0I7QUFBM0UsS0FBaEQsQ0FBdjJHLENBQUQsRUFBdStHeUUsQ0FBOStHO0FBQWcvRyxHQUF4bkgsRUFBM21COztBQUFzdUlBLEdBQUMsQ0FBQzhDLEtBQUYsRUFBUTlDLENBQUMsQ0FBQytDLE9BQVY7QUFBa0IsTUFBSTdCLENBQUMsR0FBQyxJQUFJbEIsQ0FBSixFQUFOO0FBQVksU0FBTTtBQUFDZ0QsVUFBTSxFQUFDaEQsQ0FBUjtBQUFVOUUsV0FBTyxFQUFDZ0c7QUFBbEIsR0FBTjtBQUEyQixDQUE3bEosQ0FBRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoXCIuLi9jc3MvYXBwLmNzc1wiKTtcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5jb25zdCBwcm94eSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xyXG5cclxuJChcIiNzZWFyY2hCR0dcIikuc3VibWl0KGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgYmdhbWVCR0cgPSAkKFwiI2JnYW1lQkdHXCIpLnZhbCgpO1xyXG5cclxuICAvLyBUT0RPIDogcmVmYWN0byBhdmVjIGZ1bmN0aW9uIGNsZWFyU2VsZWN0KClcclxuICAkKFwiI2JnZ2FtZSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBwcm94eSArIFwiaHR0cDovL2JvYXJkZ2FtZWdlZWsuY29tL3htbGFwaTIvc2VhcmNoXCIsXHJcbiAgICBkYXRhOiBcInF1ZXJ5PVwiICsgYmdhbWVCR0csXHJcbiAgICBkYXRhVHlwZTogXCJ4bWxcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICQoZGF0YSlcclxuICAgICAgICAgIC5maW5kKFwiaXRlbXNcIilcclxuICAgICAgICAgIC5hdHRyKFwidG90YWxcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihcIkF1Y3VuIHLDqXN1bHRhdFwiKTtcclxuICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEpXHJcbiAgICAgICAgICAuZmluZChcIml0ZW1cIilcclxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24obmFtZSwgaWQpO1xyXG4gICAgICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNiZ2djaG9pY2VcIikuc3VibWl0KGUgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkR2FtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgIC52YWwoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwczovL3d3dy5ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3RoaW5nXCIsXHJcbiAgICBkYXRhOiBcImlkPVwiICsgc2VsZWN0ZWRHYW1lICsgXCImdHlwZT1ib2FyZGdhbWVcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHhtbCkge1xyXG4gICAgICAvL3BhcnNlciBkdSB4bWwgcmVjdVxyXG5cclxuICAgICAgLy8gcmVjdXAgTmFtZVxyXG4gICAgICBjb25zdCBuYW1lID0gJChcIiNiZ2dhbWVcIilcclxuICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgLy8vLyBUT0RPIDogcmVmYWN0byBhdmVjIGZ1bmN0aW9uIGNsZWFyU2VsZWN0KClcclxuICAgICAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIjaW1hZ2VCZ2FtZVwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IGltYWdlID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJpbWFnZVwiKVxyXG4gICAgICAgIC50ZXh0KCk7XHJcblxyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiZGVzY3JpcHRpb25cIilcclxuICAgICAgICAudGV4dCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyh4bWwsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgY29uc3QgZHVyYXRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcInBsYXlpbmd0aW1lXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1pbnBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1pbnBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWF4cGxheWVycyA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWF4cGxheWVyc1wiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBkaWZmaWN1bHR5ID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5hZ2VcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWVjaGFuaXNtcyA9IFtdO1xyXG4gICAgICAkKHhtbClcclxuICAgICAgICAuZmluZChcImxpbmtcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJib2FyZGdhbWVtZWNoYW5pY1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lY2hhbmljID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIG1lY2hhbmlzbXMucHVzaChtZWNoYW5pYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XHJcbiAgICAgICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibGlua1wiKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImJvYXJkZ2FtZWNhdGVnb3J5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHByZSByZW1wbGlzc2FnZSBkZXMgZG9ubmVlcyBkYW5zIGZvcm11bGFpcmVcclxuXHJcbiAgICAgIC8vRGVzY3JpcHRpb25cclxuICAgICAgY29uc3QgcmVnZXggPSAvPGJyXFxzKltcXC9dPz4vZ2k7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbldpdGhvdXRiciA9IGRlc2NyaXB0aW9uLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG5cclxuICAgICAgLy9OYW1lXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbmFtZVwiKS52YWwobmFtZSk7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlX25hbWUgPSBcImFkZF9iZ2FtZV9mb3JtX2Rlc2NyaXB0aW9uXCI7XHJcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1tpbnN0YW5jZV9uYW1lXS5pbnNlcnRIdG1sKFxyXG4gICAgICAgIGA8cD4ke2Rlc2NyaXB0aW9uV2l0aG91dGJyfTwvcD5gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvL2ltYWdlXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fSW1hZ2VcIikudmFsKGltYWdlKTtcclxuICAgICAgY29uc3QgaW1nVmlldyA9IGA8aW1nIHNyYz0ke2ltYWdlfSBhbHQ9XCJpbWFnZSBib2FyZGdhbWVcIiB3aWR0aD01MCBpZD1cImltYWdlQmdhbWVcIj5gO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtIC5mb3JtLWdyb3VwOm50aC1jaGlsZCgyKVwiKS5hcHBlbmQoaW1nVmlldyk7XHJcblxyXG4gICAgICAvL0R1cmF0aW9uXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZHVyYXRpb25cIikudmFsKGR1cmF0aW9uKTtcclxuXHJcbiAgICAgIC8vIE1pbiBldCBNYXggUGxheWVyc1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21pbk5iUGxheWVyc1wiKS52YWwobWlucGxheWVycyk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWF4TmJQbGF5ZXJzXCIpLnZhbChtYXhwbGF5ZXJzKTtcclxuXHJcbiAgICAgIC8vIERpZmZpY3VsdHlcclxuICAgICAgaWYgKGRpZmZpY3VsdHkgPCA3KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9MV1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA+PSA3ICYmIGRpZmZpY3VsdHkgPCAxMikge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTJdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPj0gMTIgJiYgZGlmZmljdWx0eSA8IDE0KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9M11cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9NF1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1lY2hhbmlzbVxyXG4gICAgICBjb25zdCBNZWNoYW5pc21MYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG5cclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9tZWNoYW5pc20gLmZvcm0tY2hlY2stbGFiZWxcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICBjb25zdCBsYWJlbEZvciA9ICQodGhpcylbMF0uaHRtbEZvcjtcclxuICAgICAgICBNZWNoYW5pc21MYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBsYWJlbCBpbiBNZWNoYW5pc21MYWJlbHNOYW1lKSB7XHJcbiAgICAgICAgbWVjaGFuaXNtcy5mb3JFYWNoKG1lY2hhbmlzbSA9PiB7XHJcbiAgICAgICAgICBpZiAobWVjaGFuaXNtID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IE1lY2hhbmlzbUxhYmVsc05hbWVbbGFiZWxdO1xyXG4gICAgICAgICAgICAkKGAjJHtpZH1gKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2F0ZWdvcnlcclxuICAgICAgY29uc3QgQ2F0ZWdvcnlMYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2NhdGVnb3J5IC5mb3JtLWNoZWNrLWxhYmVsXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWxGb3IgPSAkKHRoaXMpWzBdLmh0bWxGb3I7XHJcbiAgICAgICAgQ2F0ZWdvcnlMYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBsYWJlbCBpbiBDYXRlZ29yeUxhYmVsc05hbWUpIHtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5ID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbF07XHJcbiAgICAgICAgICAgICQoYCMke2lkfWApLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIiFmdW5jdGlvbihlLHQpe3ZhciBuPXQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bi5Sb3V0aW5nOihlLlJvdXRpbmc9bi5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6bi5Sb3V0ZXJ9KX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKHQsbil7ZSh0aGlzLGkpLHRoaXMuY29udGV4dF89dHx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHBvcnQ6XCJcIixzY2hlbWU6XCJcIixsb2NhbGU6XCJcIn0sdGhpcy5zZXRSb3V0ZXMobnx8e30pfXJldHVybiBvKGksW3trZXk6XCJzZXRSb3V0aW5nRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksXCJwcmVmaXhcImluIGUmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSxcInBvcnRcImluIGUmJnRoaXMuc2V0UG9ydChlLnBvcnQpLFwibG9jYWxlXCJpbiBlJiZ0aGlzLnNldExvY2FsZShlLmxvY2FsZSksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJzZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wb3J0PWV9fSx7a2V5OlwiZ2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydH19LHtrZXk6XCJzZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmxvY2FsZT1lfX0se2tleTpcImdldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlfX0se2tleTpcImJ1aWxkUXVlcnlQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbihlLHQsbyl7dmFyIGk9dGhpcyxyPXZvaWQgMCxzPW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpdC5mb3JFYWNoKGZ1bmN0aW9uKHQscil7cy50ZXN0KGUpP28oZSx0KTppLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIisoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpP3I6XCJcIikrXCJdXCIsdCxvKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpKWZvcihyIGluIHQpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrcitcIl1cIix0W3JdLG8pO2Vsc2UgbyhlLHQpfX0se2tleTpcImdldFJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb250ZXh0Xy5wcmVmaXgrZSxuPWUrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsbz10aGlzLmNvbnRleHRfLnByZWZpeCtlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLGk9W3QsbixvLGVdO2Zvcih2YXIgciBpbiBpKWlmKGlbcl1pbiB0aGlzLnJvdXRlc18pcmV0dXJuIHRoaXMucm91dGVzX1tpW3JdXTt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyl9fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4pe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0saT10aGlzLmdldFJvdXRlKGUpLHI9bnx8e30scz10KHt9LHIpLHU9XCJcIixjPSEwLGE9XCJcIixmPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0aGlzLmdldFBvcnQoKXx8bnVsbD09PXRoaXMuZ2V0UG9ydCgpP1wiXCI6dGhpcy5nZXRQb3J0KCk7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIHU9dFsxXSt1LHZvaWQoYz0hMSk7e2lmKFwidmFyaWFibGVcIiE9PXRbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrdFswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTt2YXIgbj1pLmRlZmF1bHRzJiZ0WzNdaW4gaS5kZWZhdWx0cztpZighMT09PWN8fCFufHx0WzNdaW4gciYmclt0WzNdXSE9aS5kZWZhdWx0c1t0WzNdXSl7dmFyIG89dm9pZCAwO2lmKHRbM11pbiByKW89clt0WzNdXSxkZWxldGUgc1t0WzNdXTtlbHNle2lmKCFuKXtpZihjKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrdFszXSsnXCIuJyl9bz1pLmRlZmF1bHRzW3RbM11dfXZhciBhPSEwPT09b3x8ITE9PT1vfHxcIlwiPT09bztpZighYXx8IWMpe3ZhciBmPWVuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lMkYvZyxcIi9cIik7XCJudWxsXCI9PT1mJiZudWxsPT09byYmKGY9XCJcIiksdT10WzFdK2YrdX1jPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT11JiYodT1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGE9ZVsxXSthKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gcj8odD1yW2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksYT1lWzFdK3QrYSkpfSksdT10aGlzLmNvbnRleHRfLmJhc2VfdXJsK3UsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWU/dT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0/dT1pLnNjaGVtZXNbMF0rXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6YSYmdGhpcy5nZXRIb3N0KCkhPT1hKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpP3U9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2ErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrdTpvPT09ITAmJih1PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSt1KSxPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGw9dm9pZCAwLGg9W10seT1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCxoLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KSl9O2ZvcihsIGluIHMpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGwsc1tsXSx5KTt1PXUrXCI/XCIraC5qb2luKFwiJlwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9cmV0dXJuIHV9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX1dKSxpfSgpO2kuUm91dGUsaS5Db250ZXh0O3ZhciByPW5ldyBpO3JldHVybntSb3V0ZXI6aSxSb3V0aW5nOnJ9fSk7Il0sInNvdXJjZVJvb3QiOiIifQ==