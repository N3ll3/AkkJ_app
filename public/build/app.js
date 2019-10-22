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


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.setRoutingData(routes); // document.url

var proxy = "http://localhost:8080/";
$("#searchBGG").submit(function (e) {
  e.preventDefault();
  var bgameBGG = $("#bgameBGG").val();
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
      $("#add_bgame_form_description").val("".concat(descriptionWithoutbr)); //image

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


      var MechanismOptionName = new Object();
      $("#add_bgame_form_mechanism option").each(function () {
        var optionName = $(this).text();
        var id = $(this).val();
        MechanismOptionName[optionName] = id;
      });

      var _loop = function _loop(option) {
        mechanisms.forEach(function (mechanism) {
          if (mechanism == option) {
            var id = MechanismOptionName[option];
            $("#add_bgame_form_mechanism option[value=".concat(id, "]")).attr("selected", true);
          }
        });
      };

      for (var option in MechanismOptionName) {
        _loop(option);
      } // Category


      var CategoryOptionName = new Object();
      $("#add_bgame_form_category option").each(function () {
        var optionName = $(this).text();
        var id = $(this).val();
        CategoryOptionName[optionName] = id;
      });

      var _loop2 = function _loop2(option) {
        categories.forEach(function (category) {
          if (category == option) {
            var id = CategoryOptionName[option];
            $("#add_bgame_form_category option[value=".concat(id, "]")).attr("selected", true);
          }
        });
      };

      for (var option in CategoryOptionName) {
        _loop2(option);
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

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"delete_bgame\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/delete\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"delete_image_bgame\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/delete/image\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"delete_user\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/delete/user\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

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

},[["./assets/js/app.js","runtime","vendors~app~myAccount~myludo"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJwcm94eSIsIiQiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJiZ2FtZUJHRyIsInZhbCIsImVhY2giLCJyZW1vdmUiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmaW5kIiwiYXR0ciIsIm9wdGlvbiIsIk9wdGlvbiIsImFwcGVuZCIsImlkIiwibmFtZSIsInNlbGVjdGVkR2FtZSIsImNoaWxkcmVuIiwieG1sIiwidGV4dCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsIm1pbnBsYXllcnMiLCJtYXhwbGF5ZXJzIiwiZGlmZmljdWx0eSIsIm1lY2hhbmlzbXMiLCJtZWNoYW5pYyIsInB1c2giLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJyZWdleCIsImRlc2NyaXB0aW9uV2l0aG91dGJyIiwicmVwbGFjZSIsImhpZGUiLCJpbWdWaWV3IiwiYWZ0ZXIiLCJwcm9wIiwiTWVjaGFuaXNtT3B0aW9uTmFtZSIsIk9iamVjdCIsIm9wdGlvbk5hbWUiLCJmb3JFYWNoIiwibWVjaGFuaXNtIiwiQ2F0ZWdvcnlPcHRpb25OYW1lIiwib24iLCJwb3N0IiwiZ2VuZXJhdGUiLCJkb25lIiwiYWxlcnQiLCJmYWlsIiwiZXZlbnQiLCJpbnB1dEZpbGUiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50IiwiaHRtbCIsImZpbGVzIiwidCIsIm4iLCJkZWZpbmUiLCJUeXBlRXJyb3IiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiaSIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0IiwicG9ydCIsInNjaGVtZSIsImxvY2FsZSIsInNldFJvdXRlcyIsInZhbHVlIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiYnVpbGRRdWVyeVBhcmFtcyIsIkVycm9yIiwiZ2V0Um91dGUiLCJ1IiwiYyIsImEiLCJmIiwiZ2V0UG9ydCIsInRva2VucyIsImRlZmF1bHRzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJnZXRIb3N0Iiwic2NoZW1lcyIsImtleXMiLCJsIiwiaCIsInkiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJSb3V0ZSIsIkNvbnRleHQiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsNENBQUQsQ0FBUDs7QUFFQSxJQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsMEVBQUQsQ0FBdEI7O0FBQ0E7QUFFQUUsa0hBQU8sQ0FBQ0MsY0FBUixDQUF1QkYsTUFB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QUFULEVBQVc7QUFBQyxZQUFJMkQsQ0FBQyxHQUFDbUIsQ0FBQyxDQUFDNkMsV0FBRixFQUFOO0FBQXNCaEUsU0FBQyxDQUFDL0QsY0FBRixDQUFpQkksQ0FBakI7QUFBb0I7QUFBM0UsS0FBaEQsQ0FBdjJHLENBQUQsRUFBdStHOEUsQ0FBOStHO0FBQWcvRyxHQUF4bkgsRUFBM21COztBQUFzdUlBLEdBQUMsQ0FBQzhDLEtBQUYsRUFBUTlDLENBQUMsQ0FBQytDLE9BQVY7QUFBa0IsTUFBSTdCLENBQUMsR0FBQyxJQUFJbEIsQ0FBSixFQUFOO0FBQVksU0FBTTtBQUFDZ0QsVUFBTSxFQUFDaEQsQ0FBUjtBQUFVbkYsV0FBTyxFQUFDcUc7QUFBbEIsR0FBTjtBQUEyQixDQUE3bEosQ0FBRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoXCIuLi9jc3MvYXBwLmNzc1wiKTtcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbi8vIGRvY3VtZW50LnVybFxyXG5jb25zdCBwcm94eSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xyXG5cclxuJChcIiNzZWFyY2hCR0dcIikuc3VibWl0KGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgYmdhbWVCR0cgPSAkKFwiI2JnYW1lQkdHXCIpLnZhbCgpO1xyXG5cclxuICAkKFwiI2JnZ2FtZSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBwcm94eSArIFwiaHR0cDovL2JvYXJkZ2FtZWdlZWsuY29tL3htbGFwaTIvc2VhcmNoXCIsXHJcbiAgICBkYXRhOiBcInF1ZXJ5PVwiICsgYmdhbWVCR0csXHJcbiAgICBkYXRhVHlwZTogXCJ4bWxcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICQoZGF0YSlcclxuICAgICAgICAgIC5maW5kKFwiaXRlbXNcIilcclxuICAgICAgICAgIC5hdHRyKFwidG90YWxcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihcIkF1Y3VuIHLDqXN1bHRhdFwiKTtcclxuICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEpXHJcbiAgICAgICAgICAuZmluZChcIml0ZW1cIilcclxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24obmFtZSwgaWQpO1xyXG4gICAgICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNiZ2djaG9pY2VcIikuc3VibWl0KGUgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkR2FtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgIC52YWwoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwczovL3d3dy5ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3RoaW5nXCIsXHJcbiAgICBkYXRhOiBcImlkPVwiICsgc2VsZWN0ZWRHYW1lICsgXCImdHlwZT1ib2FyZGdhbWVcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHhtbCkge1xyXG4gICAgICAvL3BhcnNlciBkdSB4bWwgcmVjdVxyXG5cclxuICAgICAgLy8gcmVjdXAgTmFtZVxyXG4gICAgICBjb25zdCBuYW1lID0gJChcIiNiZ2dhbWVcIilcclxuICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgLy8vLyBUT0RPIDogcmVmYWN0byBhdmVjIGZ1bmN0aW9uIGNsZWFyU2VsZWN0KClcclxuICAgICAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIjaW1hZ2VCZ2FtZVwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IGltYWdlID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJpbWFnZVwiKVxyXG4gICAgICAgIC50ZXh0KCk7XHJcblxyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiZGVzY3JpcHRpb25cIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgY29uc3QgZHVyYXRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcInBsYXlpbmd0aW1lXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1pbnBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1pbnBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWF4cGxheWVycyA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWF4cGxheWVyc1wiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBkaWZmaWN1bHR5ID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5hZ2VcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWVjaGFuaXNtcyA9IFtdO1xyXG4gICAgICAkKHhtbClcclxuICAgICAgICAuZmluZChcImxpbmtcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJib2FyZGdhbWVtZWNoYW5pY1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lY2hhbmljID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIG1lY2hhbmlzbXMucHVzaChtZWNoYW5pYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XHJcbiAgICAgICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibGlua1wiKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImJvYXJkZ2FtZWNhdGVnb3J5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHByZSByZW1wbGlzc2FnZSBkZXMgZG9ubmVlcyBkYW5zIGZvcm11bGFpcmVcclxuXHJcbiAgICAgIC8vRGVzY3JpcHRpb25cclxuICAgICAgY29uc3QgcmVnZXggPSAvPGJyXFxzKltcXC9dPz4vZ2k7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbldpdGhvdXRiciA9IGRlc2NyaXB0aW9uLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG5cclxuICAgICAgLy9OYW1lXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbmFtZVwiKS52YWwobmFtZSk7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGVzY3JpcHRpb25cIikudmFsKFxyXG4gICAgICAgIGAke2Rlc2NyaXB0aW9uV2l0aG91dGJyfWBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vaW1hZ2VcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9pbWFnZV9iZ2dcIilcclxuICAgICAgICAudmFsKGltYWdlKVxyXG4gICAgICAgIC5oaWRlKCk7XHJcbiAgICAgIGNvbnN0IGltZ1ZpZXcgPSBgPGZpZ3VyZT4gPGZpZ2NhcHRpb24+IEltYWdlIGZyb20gQkdHIDwvZmlnY2FwdGlvbj48aW1nIHNyYz0ke2ltYWdlfSBhbHQ9XCJpbWFnZSBib2FyZGdhbWVcIiB3aWR0aD0xMDAgaWQ9XCJpbWFnZUJnYW1lXCI+PC9maWd1cmU+YDtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9uYW1lXCIpLmFmdGVyKGltZ1ZpZXcpO1xyXG5cclxuICAgICAgLy9EdXJhdGlvblxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2R1cmF0aW9uXCIpLnZhbChkdXJhdGlvbik7XHJcblxyXG4gICAgICAvLyBNaW4gZXQgTWF4IFBsYXllcnNcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9taW5OYlBsYXllcnNcIikudmFsKG1pbnBsYXllcnMpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21heE5iUGxheWVyc1wiKS52YWwobWF4cGxheWVycyk7XHJcblxyXG4gICAgICAvLyBEaWZmaWN1bHR5XHJcbiAgICAgIGlmIChkaWZmaWN1bHR5IDwgNykge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTFdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPj0gNyAmJiBkaWZmaWN1bHR5IDwgMTIpIHtcclxuICAgICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2RpZmZpY3VsdHlcIilcclxuICAgICAgICAgIC5jaGlsZHJlbihcIm9wdGlvblt2YWx1ZT0yXVwiKVxyXG4gICAgICAgICAgLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChkaWZmaWN1bHR5ID49IDEyICYmIGRpZmZpY3VsdHkgPCAxNCkge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTNdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fZGlmZmljdWx0eVwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwib3B0aW9uW3ZhbHVlPTRdXCIpXHJcbiAgICAgICAgICAucHJvcChcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNZWNoYW5pc21cclxuICAgICAgY29uc3QgTWVjaGFuaXNtT3B0aW9uTmFtZSA9IG5ldyBPYmplY3QoKTtcclxuXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWVjaGFuaXNtIG9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICBjb25zdCBpZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgTWVjaGFuaXNtT3B0aW9uTmFtZVtvcHRpb25OYW1lXSA9IGlkO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAobGV0IG9wdGlvbiBpbiBNZWNoYW5pc21PcHRpb25OYW1lKSB7XHJcbiAgICAgICAgbWVjaGFuaXNtcy5mb3JFYWNoKG1lY2hhbmlzbSA9PiB7XHJcbiAgICAgICAgICBpZiAobWVjaGFuaXNtID09IG9wdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBNZWNoYW5pc21PcHRpb25OYW1lW29wdGlvbl07XHJcbiAgICAgICAgICAgICQoYCNhZGRfYmdhbWVfZm9ybV9tZWNoYW5pc20gb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmF0dHIoXHJcbiAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiLFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2F0ZWdvcnlcclxuICAgICAgY29uc3QgQ2F0ZWdvcnlPcHRpb25OYW1lID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2NhdGVnb3J5IG9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICBjb25zdCBpZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgQ2F0ZWdvcnlPcHRpb25OYW1lW29wdGlvbk5hbWVdID0gaWQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZm9yIChsZXQgb3B0aW9uIGluIENhdGVnb3J5T3B0aW9uTmFtZSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IENhdGVnb3J5T3B0aW9uTmFtZVtvcHRpb25dO1xyXG4gICAgICAgICAgICAkKGAjYWRkX2JnYW1lX2Zvcm1fY2F0ZWdvcnkgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmF0dHIoXHJcbiAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiLFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIjZGVsZXRlSW1hZ2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAkLnBvc3QoUm91dGluZy5nZW5lcmF0ZShcImRlbGV0ZV9pbWFnZV9iZ2FtZVwiLCB7IGlkOiBpZCB9KSlcclxuICAgIC5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiI2ltYWdlXCIpLnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI2RlbGV0ZUltYWdlXCIpLmhpZGUoKTtcclxuICAgICAgYWxlcnQoXCJJbWFnZSBpcyBkZWxldGVkXCIpO1xyXG4gICAgfSlcclxuICAgIC5mYWlsKGZ1bmN0aW9uKCkge1xyXG4gICAgICBhbGVydChcIkltYWdlIGRlbGV0aW9uIGZhaWxlZFwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoXCIuY3VzdG9tLWZpbGUtaW5wdXRcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICB2YXIgaW5wdXRGaWxlID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAkKGlucHV0RmlsZSlcclxuICAgIC5wYXJlbnQoKVxyXG4gICAgLmZpbmQoXCIuY3VzdG9tLWZpbGUtbGFiZWxcIilcclxuICAgIC5odG1sKGlucHV0RmlsZS5maWxlc1swXS5uYW1lKTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsIiFmdW5jdGlvbihlLHQpe3ZhciBuPXQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bi5Sb3V0aW5nOihlLlJvdXRpbmc9bi5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6bi5Sb3V0ZXJ9KX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKHQsbil7ZSh0aGlzLGkpLHRoaXMuY29udGV4dF89dHx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHBvcnQ6XCJcIixzY2hlbWU6XCJcIixsb2NhbGU6XCJcIn0sdGhpcy5zZXRSb3V0ZXMobnx8e30pfXJldHVybiBvKGksW3trZXk6XCJzZXRSb3V0aW5nRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksXCJwcmVmaXhcImluIGUmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSxcInBvcnRcImluIGUmJnRoaXMuc2V0UG9ydChlLnBvcnQpLFwibG9jYWxlXCJpbiBlJiZ0aGlzLnNldExvY2FsZShlLmxvY2FsZSksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJzZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wb3J0PWV9fSx7a2V5OlwiZ2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydH19LHtrZXk6XCJzZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmxvY2FsZT1lfX0se2tleTpcImdldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlfX0se2tleTpcImJ1aWxkUXVlcnlQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbihlLHQsbyl7dmFyIGk9dGhpcyxyPXZvaWQgMCxzPW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpdC5mb3JFYWNoKGZ1bmN0aW9uKHQscil7cy50ZXN0KGUpP28oZSx0KTppLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIisoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpP3I6XCJcIikrXCJdXCIsdCxvKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpKWZvcihyIGluIHQpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrcitcIl1cIix0W3JdLG8pO2Vsc2UgbyhlLHQpfX0se2tleTpcImdldFJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb250ZXh0Xy5wcmVmaXgrZSxuPWUrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsbz10aGlzLmNvbnRleHRfLnByZWZpeCtlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLGk9W3QsbixvLGVdO2Zvcih2YXIgciBpbiBpKWlmKGlbcl1pbiB0aGlzLnJvdXRlc18pcmV0dXJuIHRoaXMucm91dGVzX1tpW3JdXTt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyl9fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4pe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0saT10aGlzLmdldFJvdXRlKGUpLHI9bnx8e30scz10KHt9LHIpLHU9XCJcIixjPSEwLGE9XCJcIixmPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0aGlzLmdldFBvcnQoKXx8bnVsbD09PXRoaXMuZ2V0UG9ydCgpP1wiXCI6dGhpcy5nZXRQb3J0KCk7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIHU9dFsxXSt1LHZvaWQoYz0hMSk7e2lmKFwidmFyaWFibGVcIiE9PXRbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrdFswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTt2YXIgbj1pLmRlZmF1bHRzJiZ0WzNdaW4gaS5kZWZhdWx0cztpZighMT09PWN8fCFufHx0WzNdaW4gciYmclt0WzNdXSE9aS5kZWZhdWx0c1t0WzNdXSl7dmFyIG89dm9pZCAwO2lmKHRbM11pbiByKW89clt0WzNdXSxkZWxldGUgc1t0WzNdXTtlbHNle2lmKCFuKXtpZihjKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrdFszXSsnXCIuJyl9bz1pLmRlZmF1bHRzW3RbM11dfXZhciBhPSEwPT09b3x8ITE9PT1vfHxcIlwiPT09bztpZighYXx8IWMpe3ZhciBmPWVuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lMkYvZyxcIi9cIik7XCJudWxsXCI9PT1mJiZudWxsPT09byYmKGY9XCJcIiksdT10WzFdK2YrdX1jPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT11JiYodT1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGE9ZVsxXSthKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gcj8odD1yW2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksYT1lWzFdK3QrYSkpfSksdT10aGlzLmNvbnRleHRfLmJhc2VfdXJsK3UsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWU/dT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0/dT1pLnNjaGVtZXNbMF0rXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6YSYmdGhpcy5nZXRIb3N0KCkhPT1hKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpP3U9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2ErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrdTpvPT09ITAmJih1PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSt1KSxPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGw9dm9pZCAwLGg9W10seT1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCxoLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KSl9O2ZvcihsIGluIHMpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGwsc1tsXSx5KTt1PXUrXCI/XCIraC5qb2luKFwiJlwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9cmV0dXJuIHV9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX1dKSxpfSgpO2kuUm91dGUsaS5Db250ZXh0O3ZhciByPW5ldyBpO3JldHVybntSb3V0ZXI6aSxSb3V0aW5nOnJ9fSk7Il0sInNvdXJjZVJvb3QiOiIifQ==