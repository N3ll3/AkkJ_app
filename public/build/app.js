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
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__);






/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");

var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.setRoutingData(routes); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
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
  $.post(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("delete_image_bgame", {
    id: id
  })).done(function () {
    $("#image").remove();
    $("#deleteImage").hide();
    alert("Image is deleted");
  }).fail(function () {
    alert("Image deletion failed");
  });
});
$(".custom-file-input").on("change", function (event) {
  var inputFile = event.currentTarget;
  $(inputFile).parent().find(".custom-file-label").html(inputFile.files[0].name);
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

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJwcm94eSIsIiQiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJiZ2FtZUJHRyIsInZhbCIsImVhY2giLCJyZW1vdmUiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmaW5kIiwiYXR0ciIsIm9wdGlvbiIsIk9wdGlvbiIsImFwcGVuZCIsImlkIiwibmFtZSIsInNlbGVjdGVkR2FtZSIsImNoaWxkcmVuIiwieG1sIiwidGV4dCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsIm1pbnBsYXllcnMiLCJtYXhwbGF5ZXJzIiwiZGlmZmljdWx0eSIsIm1lY2hhbmlzbXMiLCJtZWNoYW5pYyIsInB1c2giLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJyZWdleCIsImRlc2NyaXB0aW9uV2l0aG91dGJyIiwicmVwbGFjZSIsImluc3RhbmNlX25hbWUiLCJDS0VESVRPUiIsImluc3RhbmNlcyIsImluc2VydEh0bWwiLCJoaWRlIiwiaW1nVmlldyIsImFmdGVyIiwicHJvcCIsIk1lY2hhbmlzbUxhYmVsc05hbWUiLCJPYmplY3QiLCJsYWJlbE5hbWUiLCJsYWJlbEZvciIsImh0bWxGb3IiLCJsYWJlbCIsImZvckVhY2giLCJtZWNoYW5pc20iLCJDYXRlZ29yeUxhYmVsc05hbWUiLCJvbiIsInBvc3QiLCJnZW5lcmF0ZSIsImRvbmUiLCJhbGVydCIsImZhaWwiLCJldmVudCIsImlucHV0RmlsZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnQiLCJodG1sIiwiZmlsZXMiLCJ0IiwibiIsImRlZmluZSIsIlR5cGVFcnJvciIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwidmFsdWUiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiciIsInMiLCJSZWdFeHAiLCJBcnJheSIsInRlc3QiLCJidWlsZFF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJnZXRSb3V0ZSIsInUiLCJjIiwiYSIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZGVmYXVsdHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiZ2V0U2NoZW1lIiwiX3NjaGVtZSIsImdldEhvc3QiLCJzY2hlbWVzIiwia2V5cyIsImwiLCJoIiwieSIsImpvaW4iLCJnZXRJbnN0YW5jZSIsIlJvdXRlIiwiQ29udGV4dCIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFQOztBQUVB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RCxDQUFILEVBQXUyRyxDQUFDO0FBQUMzQixTQUFHLEVBQUMsYUFBTDtBQUFtQlUsV0FBSyxFQUFDLGlCQUFVO0FBQUMsZUFBT1MsQ0FBUDtBQUFTO0FBQTdDLEtBQUQsRUFBZ0Q7QUFBQ25CLFNBQUcsRUFBQyxTQUFMO0FBQWVVLFdBQUssRUFBQyxlQUFTOUYsQ0FBVCxFQUFXO0FBQUMsWUFBSWtFLENBQUMsR0FBQ21CLENBQUMsQ0FBQzZDLFdBQUYsRUFBTjtBQUFzQmhFLFNBQUMsQ0FBQ3RFLGNBQUYsQ0FBaUJJLENBQWpCO0FBQW9CO0FBQTNFLEtBQWhELENBQXYyRyxDQUFELEVBQXUrR3FGLENBQTkrRztBQUFnL0csR0FBeG5ILEVBQTNtQjs7QUFBc3VJQSxHQUFDLENBQUM4QyxLQUFGLEVBQVE5QyxDQUFDLENBQUMrQyxPQUFWO0FBQWtCLE1BQUk3QixDQUFDLEdBQUMsSUFBSWxCLENBQUosRUFBTjtBQUFZLFNBQU07QUFBQ2dELFVBQU0sRUFBQ2hELENBQVI7QUFBVTFGLFdBQU8sRUFBQzRHO0FBQWxCLEdBQU47QUFBMkIsQ0FBN2xKLENBQUQsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKFwiLi4vY3NzL2FwcC5jc3NcIik7XHJcblxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblxyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXHJcbi8vIGNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuY29uc3QgcHJveHkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcclxuXHJcbiQoXCIjc2VhcmNoQkdHXCIpLnN1Ym1pdChlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGJnYW1lQkdHID0gJChcIiNiZ2FtZUJHR1wiKS52YWwoKTtcclxuXHJcbiAgLy8gVE9ETyA6IHJlZmFjdG8gYXZlYyBmdW5jdGlvbiBjbGVhclNlbGVjdCgpXHJcbiAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogcHJveHkgKyBcImh0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3NlYXJjaFwiLFxyXG4gICAgZGF0YTogXCJxdWVyeT1cIiArIGJnYW1lQkdHLFxyXG4gICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAkKGRhdGEpXHJcbiAgICAgICAgICAuZmluZChcIml0ZW1zXCIpXHJcbiAgICAgICAgICAuYXR0cihcInRvdGFsXCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24oXCJBdWN1biByw6lzdWx0YXRcIik7XHJcbiAgICAgICAgJChcIiNiZ2dhbWVcIikuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChkYXRhKVxyXG4gICAgICAgICAgLmZpbmQoXCJpdGVtXCIpXHJcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwibmFtZVwiKVxyXG4gICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKG5hbWUsIGlkKTtcclxuICAgICAgICAgICAgJChcIiNiZ2dhbWVcIikuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIjYmdnY2hvaWNlXCIpLnN1Ym1pdChlID0+IHtcclxuICBjb25zdCBzZWxlY3RlZEdhbWUgPSAkKFwiI2JnZ2FtZVwiKVxyXG4gICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAudmFsKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBwcm94eSArIFwiaHR0cHM6Ly93d3cuYm9hcmRnYW1lZ2Vlay5jb20veG1sYXBpMi90aGluZ1wiLFxyXG4gICAgZGF0YTogXCJpZD1cIiArIHNlbGVjdGVkR2FtZSArIFwiJnR5cGU9Ym9hcmRnYW1lXCIsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbih4bWwpIHtcclxuICAgICAgLy9wYXJzZXIgZHUgeG1sIHJlY3VcclxuXHJcbiAgICAgIC8vIHJlY3VwIE5hbWVcclxuICAgICAgY29uc3QgbmFtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIC8vLy8gVE9ETyA6IHJlZmFjdG8gYXZlYyBmdW5jdGlvbiBjbGVhclNlbGVjdCgpXHJcbiAgICAgICQoXCIjYmdnYW1lIG9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiI2ltYWdlQmdhbWVcIikucmVtb3ZlKCk7XHJcblxyXG4gICAgICBjb25zdCBpbWFnZSA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiaW1hZ2VcIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcImRlc2NyaXB0aW9uXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJwbGF5aW5ndGltZVwiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBtaW5wbGF5ZXJzID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5wbGF5ZXJzXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1heHBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1heHBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgZGlmZmljdWx0eSA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWluYWdlXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1lY2hhbmlzbXMgPSBbXTtcclxuICAgICAgJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJsaW5rXCIpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCB0eXBlID0gJCh0aGlzKS5hdHRyKFwidHlwZVwiKTtcclxuICAgICAgICAgIGlmICh0eXBlID09IFwiYm9hcmRnYW1lbWVjaGFuaWNcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtZWNoYW5pYyA9ICQodGhpcykuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICBtZWNoYW5pc21zLnB1c2gobWVjaGFuaWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgICAkKHhtbClcclxuICAgICAgICAuZmluZChcImxpbmtcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJib2FyZGdhbWVjYXRlZ29yeVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBwcmUgcmVtcGxpc3NhZ2UgZGVzIGRvbm5lZXMgZGFucyBmb3JtdWxhaXJlXHJcblxyXG4gICAgICAvL0Rlc2NyaXB0aW9uXHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gLzxiclxccypbXFwvXT8+L2dpO1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb25XaXRob3V0YnIgPSBkZXNjcmlwdGlvbi5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuXHJcbiAgICAgIC8vTmFtZVxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX25hbWVcIikudmFsKG5hbWUpO1xyXG4gICAgICBjb25zdCBpbnN0YW5jZV9uYW1lID0gXCJhZGRfYmdhbWVfZm9ybV9kZXNjcmlwdGlvblwiO1xyXG4gICAgICBDS0VESVRPUi5pbnN0YW5jZXNbaW5zdGFuY2VfbmFtZV0uaW5zZXJ0SHRtbChcclxuICAgICAgICBgPHA+JHtkZXNjcmlwdGlvbldpdGhvdXRicn08L3A+YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy9pbWFnZVxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2ltYWdlX2JnZ1wiKVxyXG4gICAgICAgIC52YWwoaW1hZ2UpXHJcbiAgICAgICAgLmhpZGUoKTtcclxuICAgICAgY29uc3QgaW1nVmlldyA9IGA8ZmlndXJlPiA8ZmlnY2FwdGlvbj4gSW1hZ2UgZnJvbSBCR0cgPC9maWdjYXB0aW9uPjxpbWcgc3JjPSR7aW1hZ2V9IGFsdD1cImltYWdlIGJvYXJkZ2FtZVwiIHdpZHRoPTEwMCBpZD1cImltYWdlQmdhbWVcIj48L2ZpZ3VyZT5gO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX25hbWVcIikuYWZ0ZXIoaW1nVmlldyk7XHJcblxyXG4gICAgICAvL0R1cmF0aW9uXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZHVyYXRpb25cIikudmFsKGR1cmF0aW9uKTtcclxuXHJcbiAgICAgIC8vIE1pbiBldCBNYXggUGxheWVyc1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21pbk5iUGxheWVyc1wiKS52YWwobWlucGxheWVycyk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWF4TmJQbGF5ZXJzXCIpLnZhbChtYXhwbGF5ZXJzKTtcclxuXHJcbiAgICAgIC8vIERpZmZpY3VsdHlcclxuICAgICAgaWYgKGRpZmZpY3VsdHkgPCA3KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9MV1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA+PSA3ICYmIGRpZmZpY3VsdHkgPCAxMikge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTJdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPj0gMTIgJiYgZGlmZmljdWx0eSA8IDE0KSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9M11cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9NF1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1lY2hhbmlzbVxyXG4gICAgICBjb25zdCBNZWNoYW5pc21MYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG5cclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9tZWNoYW5pc20gLmZvcm0tY2hlY2stbGFiZWxcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICBjb25zdCBsYWJlbEZvciA9ICQodGhpcylbMF0uaHRtbEZvcjtcclxuICAgICAgICBNZWNoYW5pc21MYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBsYWJlbCBpbiBNZWNoYW5pc21MYWJlbHNOYW1lKSB7XHJcbiAgICAgICAgbWVjaGFuaXNtcy5mb3JFYWNoKG1lY2hhbmlzbSA9PiB7XHJcbiAgICAgICAgICBpZiAobWVjaGFuaXNtID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IE1lY2hhbmlzbUxhYmVsc05hbWVbbGFiZWxdO1xyXG4gICAgICAgICAgICAkKGAjJHtpZH1gKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2F0ZWdvcnlcclxuICAgICAgY29uc3QgQ2F0ZWdvcnlMYWJlbHNOYW1lID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2NhdGVnb3J5IC5mb3JtLWNoZWNrLWxhYmVsXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWxGb3IgPSAkKHRoaXMpWzBdLmh0bWxGb3I7XHJcbiAgICAgICAgQ2F0ZWdvcnlMYWJlbHNOYW1lW2xhYmVsTmFtZV0gPSBsYWJlbEZvcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBsYWJlbCBpbiBDYXRlZ29yeUxhYmVsc05hbWUpIHtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5ID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IENhdGVnb3J5TGFiZWxzTmFtZVtsYWJlbF07XHJcbiAgICAgICAgICAgICQoYCMke2lkfWApLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNkZWxldGVJbWFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gIGxldCBpZCA9ICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICQucG9zdChSb3V0aW5nLmdlbmVyYXRlKFwiZGVsZXRlX2ltYWdlX2JnYW1lXCIsIHsgaWQ6IGlkIH0pKVxyXG4gICAgLmRvbmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIjaW1hZ2VcIikucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjZGVsZXRlSW1hZ2VcIikuaGlkZSgpO1xyXG4gICAgICBhbGVydChcIkltYWdlIGlzIGRlbGV0ZWRcIik7XHJcbiAgICB9KVxyXG4gICAgLmZhaWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgZGVsZXRpb24gZmFpbGVkXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChcIi5jdXN0b20tZmlsZS1pbnB1dFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gIHZhciBpbnB1dEZpbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICQoaW5wdXRGaWxlKVxyXG4gICAgLnBhcmVudCgpXHJcbiAgICAuZmluZChcIi5jdXN0b20tZmlsZS1sYWJlbFwiKVxyXG4gICAgLmh0bWwoaW5wdXRGaWxlLmZpbGVzWzBdLm5hbWUpO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtlKHRoaXMsaSksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyhufHx7fSl9cmV0dXJuIG8oaSxbe2tleTpcInNldFJvdXRpbmdEYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSxcInByZWZpeFwiaW4gZSYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLFwicG9ydFwiaW4gZSYmdGhpcy5zZXRQb3J0KGUucG9ydCksXCJsb2NhbGVcImluIGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcInNldFBvcnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX19LHtrZXk6XCJnZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0fX0se2tleTpcInNldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9fSx7a2V5OlwiZ2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9fSx7a2V5OlwiYnVpbGRRdWVyeVBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgaT10aGlzLHI9dm9pZCAwLHM9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKHQgaW5zdGFuY2VvZiBBcnJheSl0LmZvckVhY2goZnVuY3Rpb24odCxyKXtzLnRlc3QoZSk/byhlLHQpOmkuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiKyhcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSk/cjpcIlwiKStcIl1cIix0LG8pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSkpZm9yKHIgaW4gdCl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIityK1wiXVwiLHRbcl0sbyk7ZWxzZSBvKGUsdCl9fSx7a2V5OlwiZ2V0Um91dGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnRleHRfLnByZWZpeCtlLG49ZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxvPXRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsaT1bdCxuLG8sZV07Zm9yKHZhciByIGluIGkpaWYoaVtyXWluIHRoaXMucm91dGVzXylyZXR1cm4gdGhpcy5yb3V0ZXNfW2lbcl1dO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxpPXRoaXMuZ2V0Um91dGUoZSkscj1ufHx7fSxzPXQoe30sciksdT1cIlwiLGM9ITAsYT1cIlwiLGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gdT10WzFdK3Usdm9pZChjPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09Y3x8IW58fHRbM11pbiByJiZyW3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHIpbz1yW3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGMpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGE9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFhfHwhYyl7dmFyIGY9ZW5jb2RlVVJJQ29tcG9uZW50KG8pLnJlcGxhY2UoLyUyRi9nLFwiL1wiKTtcIm51bGxcIj09PWYmJm51bGw9PT1vJiYoZj1cIlwiKSx1PXRbMV0rZit1fWM9ITF9ZWxzZSBuJiZ0WzNdaW4gcyYmZGVsZXRlIHNbdFszXV19fSksXCJcIj09PXUmJih1PVwiL1wiKSxpLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12b2lkIDA7cmV0dXJuXCJ0ZXh0XCI9PT1lWzBdP3ZvaWQoYT1lWzFdK2EpOnZvaWQoXCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiByPyh0PXJbZVszXV0sZGVsZXRlIHNbZVszXV0pOmkuZGVmYXVsdHMmJmVbM11pbiBpLmRlZmF1bHRzJiYodD1pLmRlZmF1bHRzW2VbM11dKSxhPWVbMV0rdCthKSl9KSx1PXRoaXMuY29udGV4dF8uYmFzZV91cmwrdSxpLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBpLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9aS5yZXF1aXJlbWVudHMuX3NjaGVtZT91PWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXT91PWkuc2NoZW1lc1swXStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTphJiZ0aGlzLmdldEhvc3QoKSE9PWErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZik/dT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrYSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKSt1Om89PT0hMCYmKHU9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpK3UpLE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgbD12b2lkIDAsaD1bXSx5PWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LGgucHVzaChlbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpKX07Zm9yKGwgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMobCxzW2xdLHkpO3U9dStcIj9cIitoLmpvaW4oXCImXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX1yZXR1cm4gdX19XSxbe2tleTpcImdldEluc3RhbmNlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gcn19LHtrZXk6XCJzZXREYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5nZXRJbnN0YW5jZSgpO3Quc2V0Um91dGluZ0RhdGEoZSl9fV0pLGl9KCk7aS5Sb3V0ZSxpLkNvbnRleHQ7dmFyIHI9bmV3IGk7cmV0dXJue1JvdXRlcjppLFJvdXRpbmc6cn19KTsiXSwic291cmNlUm9vdCI6IiJ9