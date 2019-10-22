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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJwcm94eSIsIiQiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJiZ2FtZUJHRyIsInZhbCIsImVhY2giLCJyZW1vdmUiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmaW5kIiwiYXR0ciIsIm9wdGlvbiIsIk9wdGlvbiIsImFwcGVuZCIsImlkIiwibmFtZSIsInNlbGVjdGVkR2FtZSIsImNoaWxkcmVuIiwieG1sIiwidGV4dCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsIm1pbnBsYXllcnMiLCJtYXhwbGF5ZXJzIiwiZGlmZmljdWx0eSIsIm1lY2hhbmlzbXMiLCJtZWNoYW5pYyIsInB1c2giLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJyZWdleCIsImRlc2NyaXB0aW9uV2l0aG91dGJyIiwicmVwbGFjZSIsImhpZGUiLCJpbWdWaWV3IiwiYWZ0ZXIiLCJwcm9wIiwiTWVjaGFuaXNtT3B0aW9uTmFtZSIsIk9iamVjdCIsIm9wdGlvbk5hbWUiLCJmb3JFYWNoIiwibWVjaGFuaXNtIiwiQ2F0ZWdvcnlPcHRpb25OYW1lIiwib24iLCJwb3N0IiwiZ2VuZXJhdGUiLCJkb25lIiwiYWxlcnQiLCJmYWlsIiwiZXZlbnQiLCJpbnB1dEZpbGUiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50IiwiaHRtbCIsImZpbGVzIiwidCIsIm4iLCJkZWZpbmUiLCJUeXBlRXJyb3IiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiaSIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0IiwicG9ydCIsInNjaGVtZSIsImxvY2FsZSIsInNldFJvdXRlcyIsInZhbHVlIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiYnVpbGRRdWVyeVBhcmFtcyIsIkVycm9yIiwiZ2V0Um91dGUiLCJ1IiwiYyIsImEiLCJmIiwiZ2V0UG9ydCIsInRva2VucyIsImRlZmF1bHRzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJnZXRIb3N0Iiwic2NoZW1lcyIsImtleXMiLCJsIiwiaCIsInkiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJSb3V0ZSIsIkNvbnRleHQiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsNENBQUQsQ0FBUDs7QUFFQSxJQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsMEVBQUQsQ0FBdEI7O0FBQ0E7QUFFQUUsa0hBQU8sQ0FBQ0MsY0FBUixDQUF1QkYsTUFBdkIsRSxDQUVBOztBQUNBLElBQU1HLEtBQUssR0FBRyx3QkFBZDtBQUVBQyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCQyxNQUFoQixDQUF1QixVQUFBQyxDQUFDLEVBQUk7QUFDMUJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQUlDLFFBQVEsR0FBR0osQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlSyxHQUFmLEVBQWY7QUFFQUwsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JNLElBQXBCLENBQXlCLFlBQVc7QUFDbENOLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sTUFBUjtBQUNELEdBRkQ7QUFJQVAsR0FBQyxDQUFDUSxJQUFGLENBQU87QUFDTEMsUUFBSSxFQUFFLEtBREQ7QUFFTEMsT0FBRyxFQUFFWCxLQUFLLEdBQUcseUNBRlI7QUFHTFksUUFBSSxFQUFFLFdBQVdQLFFBSFo7QUFJTFEsWUFBUSxFQUFFLEtBSkw7QUFLTEMsV0FBTyxFQUFFLGlCQUFTRixJQUFULEVBQWU7QUFDdEIsVUFDRVgsQ0FBQyxDQUFDVyxJQUFELENBQUQsQ0FDR0csSUFESCxDQUNRLE9BRFIsRUFFR0MsSUFGSCxDQUVRLE9BRlIsS0FFb0IsQ0FIdEIsRUFJRTtBQUNBLFlBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVcsZ0JBQVgsQ0FBYjtBQUNBakIsU0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFha0IsTUFBYixDQUFvQkYsTUFBcEI7QUFDRCxPQVBELE1BT087QUFDTGhCLFNBQUMsQ0FBQ1csSUFBRCxDQUFELENBQ0dHLElBREgsQ0FDUSxNQURSLEVBRUdSLElBRkgsQ0FFUSxZQUFXO0FBQ2YsY0FBSWEsRUFBRSxHQUFHbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxJQUFSLENBQWEsSUFBYixDQUFUO0FBQ0EsY0FBSUssSUFBSSxHQUFHcEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNSYyxJQURRLENBQ0gsTUFERyxFQUVSQyxJQUZRLENBRUgsT0FGRyxDQUFYO0FBR0EsY0FBSUMsTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBV0csSUFBWCxFQUFpQkQsRUFBakIsQ0FBYjtBQUNBbkIsV0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFha0IsTUFBYixDQUFvQkYsTUFBcEI7QUFDRCxTQVRIO0FBVUQ7QUFDRjtBQXpCSSxHQUFQO0FBMkJELENBbkNEO0FBcUNBaEIsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQUMsQ0FBQyxFQUFJO0FBQzFCLE1BQU1tQixZQUFZLEdBQUdyQixDQUFDLENBQUMsU0FBRCxDQUFELENBQ2xCc0IsUUFEa0IsQ0FDVCxpQkFEUyxFQUVsQmpCLEdBRmtCLEVBQXJCO0FBR0FILEdBQUMsQ0FBQ0MsY0FBRjtBQUNBSCxHQUFDLENBQUNRLElBQUYsQ0FBTztBQUNMQyxRQUFJLEVBQUUsS0FERDtBQUVMQyxPQUFHLEVBQUVYLEtBQUssR0FBRyw2Q0FGUjtBQUdMWSxRQUFJLEVBQUUsUUFBUVUsWUFBUixHQUF1QixpQkFIeEI7QUFJTFIsV0FBTyxFQUFFLGlCQUFTVSxHQUFULEVBQWM7QUFDckI7QUFFQTtBQUNBLFVBQU1ILElBQUksR0FBR3BCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FDVnNCLFFBRFUsQ0FDRCxpQkFEQyxFQUVWRSxJQUZVLEVBQWIsQ0FKcUIsQ0FRckI7O0FBQ0F4QixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sSUFBcEIsQ0FBeUIsWUFBVztBQUNsQ04sU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxNQUFSO0FBQ0QsT0FGRDtBQUdBUCxPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCTyxNQUFqQjtBQUVBLFVBQU1rQixLQUFLLEdBQUd6QixDQUFDLENBQUN1QixHQUFELENBQUQsQ0FDWFQsSUFEVyxDQUNOLE9BRE0sRUFFWFUsSUFGVyxFQUFkO0FBSUEsVUFBTUUsV0FBVyxHQUFHMUIsQ0FBQyxDQUFDdUIsR0FBRCxDQUFELENBQ2pCVCxJQURpQixDQUNaLGFBRFksRUFFakJVLElBRmlCLEVBQXBCO0FBSUEsVUFBTUcsUUFBUSxHQUFHM0IsQ0FBQyxDQUFDdUIsR0FBRCxDQUFELENBQ2RULElBRGMsQ0FDVCxhQURTLEVBRWRDLElBRmMsQ0FFVCxPQUZTLENBQWpCO0FBSUEsVUFBTWEsVUFBVSxHQUFHNUIsQ0FBQyxDQUFDdUIsR0FBRCxDQUFELENBQ2hCVCxJQURnQixDQUNYLFlBRFcsRUFFaEJDLElBRmdCLENBRVgsT0FGVyxDQUFuQjtBQUlBLFVBQU1jLFVBQVUsR0FBRzdCLENBQUMsQ0FBQ3VCLEdBQUQsQ0FBRCxDQUNoQlQsSUFEZ0IsQ0FDWCxZQURXLEVBRWhCQyxJQUZnQixDQUVYLE9BRlcsQ0FBbkI7QUFJQSxVQUFNZSxVQUFVLEdBQUc5QixDQUFDLENBQUN1QixHQUFELENBQUQsQ0FDaEJULElBRGdCLENBQ1gsUUFEVyxFQUVoQkMsSUFGZ0IsQ0FFWCxPQUZXLENBQW5CO0FBSUEsVUFBTWdCLFVBQVUsR0FBRyxFQUFuQjtBQUNBL0IsT0FBQyxDQUFDdUIsR0FBRCxDQUFELENBQ0dULElBREgsQ0FDUSxNQURSLEVBRUdSLElBRkgsQ0FFUSxZQUFXO0FBQ2YsWUFBTUcsSUFBSSxHQUFHVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxNQUFiLENBQWI7O0FBQ0EsWUFBSU4sSUFBSSxJQUFJLG1CQUFaLEVBQWlDO0FBQy9CLGNBQU11QixRQUFRLEdBQUdoQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxPQUFiLENBQWpCO0FBQ0FnQixvQkFBVSxDQUFDRSxJQUFYLENBQWdCRCxRQUFoQjtBQUNEO0FBQ0YsT0FSSDtBQVVBLFVBQU1FLFVBQVUsR0FBRyxFQUFuQjtBQUNBbEMsT0FBQyxDQUFDdUIsR0FBRCxDQUFELENBQ0dULElBREgsQ0FDUSxNQURSLEVBRUdSLElBRkgsQ0FFUSxZQUFXO0FBQ2YsWUFBTUcsSUFBSSxHQUFHVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxNQUFiLENBQWI7O0FBQ0EsWUFBSU4sSUFBSSxJQUFJLG1CQUFaLEVBQWlDO0FBQy9CLGNBQU0wQixRQUFRLEdBQUduQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxPQUFiLENBQWpCO0FBQ0FtQixvQkFBVSxDQUFDRCxJQUFYLENBQWdCRSxRQUFoQjtBQUNEO0FBQ0YsT0FSSCxFQWxEcUIsQ0E0RHJCO0FBRUE7O0FBQ0EsVUFBTUMsS0FBSyxHQUFHLGdCQUFkO0FBQ0EsVUFBSUMsb0JBQW9CLEdBQUdYLFdBQVcsQ0FBQ1ksT0FBWixDQUFvQkYsS0FBcEIsRUFBMkIsRUFBM0IsQ0FBM0IsQ0FoRXFCLENBa0VyQjs7QUFDQXBDLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCSyxHQUExQixDQUE4QmUsSUFBOUI7QUFDQXBCLE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDSyxHQUFqQyxXQUF3Q2dDLG9CQUF4QyxHQXBFcUIsQ0FzRXJCOztBQUNBckMsT0FBQyxDQUFDLDJCQUFELENBQUQsQ0FDR0ssR0FESCxDQUNPb0IsS0FEUCxFQUVHYyxJQUZIO0FBR0EsVUFBTUMsT0FBTyx3RUFBaUVmLEtBQWpFLG1FQUFiO0FBQ0F6QixPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQnlDLEtBQTFCLENBQWdDRCxPQUFoQyxFQTNFcUIsQ0E2RXJCOztBQUNBeEMsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJLLEdBQTlCLENBQWtDc0IsUUFBbEMsRUE5RXFCLENBZ0ZyQjs7QUFDQTNCLE9BQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDSyxHQUFsQyxDQUFzQ3VCLFVBQXRDO0FBQ0E1QixPQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0ssR0FBbEMsQ0FBc0N3QixVQUF0QyxFQWxGcUIsQ0FvRnJCOztBQUNBLFVBQUlDLFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNsQjlCLFNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQ0dzQixRQURILENBQ1ksaUJBRFosRUFFR29CLElBRkgsQ0FFUSxVQUZSLEVBRW9CLElBRnBCO0FBR0QsT0FKRCxNQUlPLElBQUlaLFVBQVUsSUFBSSxDQUFkLElBQW1CQSxVQUFVLEdBQUcsRUFBcEMsRUFBd0M7QUFDN0M5QixTQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUNHc0IsUUFESCxDQUNZLGlCQURaLEVBRUdvQixJQUZILENBRVEsVUFGUixFQUVvQixJQUZwQjtBQUdELE9BSk0sTUFJQSxJQUFJWixVQUFVLElBQUksRUFBZCxJQUFvQkEsVUFBVSxHQUFHLEVBQXJDLEVBQXlDO0FBQzlDOUIsU0FBQyxDQUFDLDRCQUFELENBQUQsQ0FDR3NCLFFBREgsQ0FDWSxpQkFEWixFQUVHb0IsSUFGSCxDQUVRLFVBRlIsRUFFb0IsSUFGcEI7QUFHRCxPQUpNLE1BSUE7QUFDTDFDLFNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQ0dzQixRQURILENBQ1ksaUJBRFosRUFFR29CLElBRkgsQ0FFUSxVQUZSLEVBRW9CLElBRnBCO0FBR0QsT0FyR29CLENBdUdyQjs7O0FBQ0EsVUFBTUMsbUJBQW1CLEdBQUcsSUFBSUMsTUFBSixFQUE1QjtBQUVBNUMsT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NNLElBQXRDLENBQTJDLFlBQVc7QUFDcEQsWUFBTXVDLFVBQVUsR0FBRzdDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdCLElBQVIsRUFBbkI7QUFDQSxZQUFNTCxFQUFFLEdBQUduQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLEdBQVIsRUFBWDtBQUNBc0MsMkJBQW1CLENBQUNFLFVBQUQsQ0FBbkIsR0FBa0MxQixFQUFsQztBQUNELE9BSkQ7O0FBMUdxQixpQ0FnSFpILE1BaEhZO0FBaUhuQmUsa0JBQVUsQ0FBQ2UsT0FBWCxDQUFtQixVQUFBQyxTQUFTLEVBQUk7QUFDOUIsY0FBSUEsU0FBUyxJQUFJL0IsTUFBakIsRUFBeUI7QUFDdkIsZ0JBQUlHLEVBQUUsR0FBR3dCLG1CQUFtQixDQUFDM0IsTUFBRCxDQUE1QjtBQUNBaEIsYUFBQyxrREFBMkNtQixFQUEzQyxPQUFELENBQW1ESixJQUFuRCxDQUNFLFVBREYsRUFFRSxJQUZGO0FBSUQ7QUFDRixTQVJEO0FBakhtQjs7QUFnSHJCLFdBQUssSUFBSUMsTUFBVCxJQUFtQjJCLG1CQUFuQixFQUF3QztBQUFBLGNBQS9CM0IsTUFBK0I7QUFVdkMsT0ExSG9CLENBNEhyQjs7O0FBQ0EsVUFBTWdDLGtCQUFrQixHQUFHLElBQUlKLE1BQUosRUFBM0I7QUFDQTVDLE9BQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDTSxJQUFyQyxDQUEwQyxZQUFXO0FBQ25ELFlBQU11QyxVQUFVLEdBQUc3QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF3QixJQUFSLEVBQW5CO0FBQ0EsWUFBTUwsRUFBRSxHQUFHbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxHQUFSLEVBQVg7QUFDQTJDLDBCQUFrQixDQUFDSCxVQUFELENBQWxCLEdBQWlDMUIsRUFBakM7QUFDRCxPQUpEOztBQTlIcUIsbUNBb0laSCxNQXBJWTtBQXFJbkJrQixrQkFBVSxDQUFDWSxPQUFYLENBQW1CLFVBQUFYLFFBQVEsRUFBSTtBQUM3QixjQUFJQSxRQUFRLElBQUluQixNQUFoQixFQUF3QjtBQUN0QixnQkFBSUcsRUFBRSxHQUFHNkIsa0JBQWtCLENBQUNoQyxNQUFELENBQTNCO0FBQ0FoQixhQUFDLGlEQUEwQ21CLEVBQTFDLE9BQUQsQ0FBa0RKLElBQWxELENBQ0UsVUFERixFQUVFLElBRkY7QUFJRDtBQUNGLFNBUkQ7QUFySW1COztBQW9JckIsV0FBSyxJQUFJQyxNQUFULElBQW1CZ0Msa0JBQW5CLEVBQXVDO0FBQUEsZUFBOUJoQyxNQUE4QjtBQVV0QztBQUNGO0FBbkpJLEdBQVA7QUFxSkQsQ0ExSkQ7QUE0SkFoQixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCaUQsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN2QyxNQUFJOUIsRUFBRSxHQUFHbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsSUFBYixDQUFUO0FBQ0FYLEdBQUMsQ0FBQ2tELElBQUYsQ0FBT3JELGtIQUFPLENBQUNzRCxRQUFSLENBQWlCLG9CQUFqQixFQUF1QztBQUFFaEMsTUFBRSxFQUFFQTtBQUFOLEdBQXZDLENBQVAsRUFDR2lDLElBREgsQ0FDUSxZQUFXO0FBQ2ZwRCxLQUFDLENBQUMsUUFBRCxDQUFELENBQVlPLE1BQVo7QUFDQVAsS0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnVDLElBQWxCO0FBQ0FjLFNBQUssQ0FBQyxrQkFBRCxDQUFMO0FBQ0QsR0FMSCxFQU1HQyxJQU5ILENBTVEsWUFBVztBQUNmRCxTQUFLLENBQUMsdUJBQUQsQ0FBTDtBQUNELEdBUkg7QUFTRCxDQVhEO0FBYUFyRCxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmlELEVBQXhCLENBQTJCLFFBQTNCLEVBQXFDLFVBQVNNLEtBQVQsRUFBZ0I7QUFDbkQsTUFBSUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLGFBQXRCO0FBQ0F6RCxHQUFDLENBQUN3RCxTQUFELENBQUQsQ0FDR0UsTUFESCxHQUVHNUMsSUFGSCxDQUVRLG9CQUZSLEVBR0c2QyxJQUhILENBR1FILFNBQVMsQ0FBQ0ksS0FBVixDQUFnQixDQUFoQixFQUFtQnhDLElBSDNCO0FBSUQsQ0FORCxFOzs7Ozs7Ozs7Ozs7QUNoT2E7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQyx5RkFBOEI7QUFDbEQsdUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUVoRTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQixFQUFFOztBQUVuRTtBQUNBO0FBQ0EsR0FBRyxvREFBb0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkEsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELHFCQUFxQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsQ0FBQyxVQUFTbEIsQ0FBVCxFQUFXMkQsQ0FBWCxFQUFhO0FBQUMsTUFBSUMsQ0FBQyxHQUFDRCxDQUFDLEVBQVA7QUFBVSxVQUFzQ0UsaUNBQU8sRUFBRCxvQ0FBSUQsQ0FBQyxDQUFDakUsT0FBTjtBQUFBO0FBQUE7QUFBQSxvR0FBNUMsR0FBMkQsU0FBM0Q7QUFBMEssQ0FBbE0sQ0FBbU0sSUFBbk0sRUFBd00sWUFBVTtBQUFDOztBQUFhLFdBQVNLLENBQVQsQ0FBV0EsQ0FBWCxFQUFhMkQsQ0FBYixFQUFlO0FBQUMsUUFBRyxFQUFFM0QsQ0FBQyxZQUFZMkQsQ0FBZixDQUFILEVBQXFCLE1BQU0sSUFBSUcsU0FBSixDQUFjLG1DQUFkLENBQU47QUFBeUQ7O0FBQUEsTUFBSUgsQ0FBQyxHQUFDakIsTUFBTSxDQUFDcUIsTUFBUCxJQUFlLFVBQVMvRCxDQUFULEVBQVc7QUFBQyxTQUFJLElBQUkyRCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNLLFNBQVMsQ0FBQ0MsTUFBeEIsRUFBK0JOLENBQUMsRUFBaEMsRUFBbUM7QUFBQyxVQUFJQyxDQUFDLEdBQUNJLFNBQVMsQ0FBQ0wsQ0FBRCxDQUFmOztBQUFtQixXQUFJLElBQUlPLENBQVIsSUFBYU4sQ0FBYjtBQUFlbEIsY0FBTSxDQUFDeUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDVCxDQUFyQyxFQUF1Q00sQ0FBdkMsTUFBNENsRSxDQUFDLENBQUNrRSxDQUFELENBQUQsR0FBS04sQ0FBQyxDQUFDTSxDQUFELENBQWxEO0FBQWY7QUFBc0U7O0FBQUEsV0FBT2xFLENBQVA7QUFBUyxHQUF2SztBQUFBLE1BQXdLNEQsQ0FBQyxHQUFDLGNBQVksT0FBT1UsTUFBbkIsSUFBMkIsb0JBQWlCQSxNQUFNLENBQUNDLFFBQXhCLENBQTNCLEdBQTRELFVBQVN2RSxDQUFULEVBQVc7QUFBQyxtQkFBY0EsQ0FBZDtBQUFnQixHQUF4RixHQUF5RixVQUFTQSxDQUFULEVBQVc7QUFBQyxXQUFPQSxDQUFDLElBQUUsY0FBWSxPQUFPc0UsTUFBdEIsSUFBOEJ0RSxDQUFDLENBQUN3RSxXQUFGLEtBQWdCRixNQUE5QyxJQUFzRHRFLENBQUMsS0FBR3NFLE1BQU0sQ0FBQ0gsU0FBakUsR0FBMkUsUUFBM0UsV0FBMkZuRSxDQUEzRixDQUFQO0FBQW9HLEdBQW5YO0FBQUEsTUFBb1hrRSxDQUFDLEdBQUMsWUFBVTtBQUFDLGFBQVNsRSxDQUFULENBQVdBLENBQVgsRUFBYTJELENBQWIsRUFBZTtBQUFDLFdBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRCxDQUFDLENBQUNNLE1BQWhCLEVBQXVCTCxDQUFDLEVBQXhCLEVBQTJCO0FBQUMsWUFBSU0sQ0FBQyxHQUFDUCxDQUFDLENBQUNDLENBQUQsQ0FBUDtBQUFXTSxTQUFDLENBQUNPLFVBQUYsR0FBYVAsQ0FBQyxDQUFDTyxVQUFGLElBQWMsQ0FBQyxDQUE1QixFQUE4QlAsQ0FBQyxDQUFDUSxZQUFGLEdBQWUsQ0FBQyxDQUE5QyxFQUFnRCxXQUFVUixDQUFWLEtBQWNBLENBQUMsQ0FBQ1MsUUFBRixHQUFXLENBQUMsQ0FBMUIsQ0FBaEQsRUFBNkVqQyxNQUFNLENBQUNrQyxjQUFQLENBQXNCNUUsQ0FBdEIsRUFBd0JrRSxDQUFDLENBQUNXLEdBQTFCLEVBQThCWCxDQUE5QixDQUE3RTtBQUE4RztBQUFDOztBQUFBLFdBQU8sVUFBU1AsQ0FBVCxFQUFXQyxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDLGFBQU9OLENBQUMsSUFBRTVELENBQUMsQ0FBQzJELENBQUMsQ0FBQ1EsU0FBSCxFQUFhUCxDQUFiLENBQUosRUFBb0JNLENBQUMsSUFBRWxFLENBQUMsQ0FBQzJELENBQUQsRUFBR08sQ0FBSCxDQUF4QixFQUE4QlAsQ0FBckM7QUFBdUMsS0FBOUQ7QUFBK0QsR0FBaFAsRUFBdFg7QUFBQSxNQUF5bUJtQixDQUFDLEdBQUMsWUFBVTtBQUFDLGFBQVNBLENBQVQsQ0FBV25CLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUM1RCxPQUFDLENBQUMsSUFBRCxFQUFNOEUsQ0FBTixDQUFELEVBQVUsS0FBS0MsUUFBTCxHQUFjcEIsQ0FBQyxJQUFFO0FBQUNxQixnQkFBUSxFQUFDLEVBQVY7QUFBYUMsY0FBTSxFQUFDLEVBQXBCO0FBQXVCQyxZQUFJLEVBQUMsRUFBNUI7QUFBK0JDLFlBQUksRUFBQyxFQUFwQztBQUF1Q0MsY0FBTSxFQUFDLEVBQTlDO0FBQWlEQyxjQUFNLEVBQUM7QUFBeEQsT0FBM0IsRUFBdUYsS0FBS0MsU0FBTCxDQUFlMUIsQ0FBQyxJQUFFLEVBQWxCLENBQXZGO0FBQTZHOztBQUFBLFdBQU9NLENBQUMsQ0FBQ1ksQ0FBRCxFQUFHLENBQUM7QUFBQ0QsU0FBRyxFQUFDLGdCQUFMO0FBQXNCVSxXQUFLLEVBQUMsZUFBU3ZGLENBQVQsRUFBVztBQUFDLGFBQUt3RixVQUFMLENBQWdCeEYsQ0FBQyxDQUFDZ0YsUUFBbEIsR0FBNEIsS0FBS00sU0FBTCxDQUFldEYsQ0FBQyxDQUFDTixNQUFqQixDQUE1QixFQUFxRCxZQUFXTSxDQUFYLElBQWMsS0FBS3lGLFNBQUwsQ0FBZXpGLENBQUMsQ0FBQ2lGLE1BQWpCLENBQW5FLEVBQTRGLFVBQVNqRixDQUFULElBQVksS0FBSzBGLE9BQUwsQ0FBYTFGLENBQUMsQ0FBQ21GLElBQWYsQ0FBeEcsRUFBNkgsWUFBV25GLENBQVgsSUFBYyxLQUFLMkYsU0FBTCxDQUFlM0YsQ0FBQyxDQUFDcUYsTUFBakIsQ0FBM0ksRUFBb0ssS0FBS08sT0FBTCxDQUFhNUYsQ0FBQyxDQUFDa0YsSUFBZixDQUFwSyxFQUF5TCxLQUFLVyxTQUFMLENBQWU3RixDQUFDLENBQUNvRixNQUFqQixDQUF6TDtBQUFrTjtBQUExUCxLQUFELEVBQTZQO0FBQUNQLFNBQUcsRUFBQyxXQUFMO0FBQWlCVSxXQUFLLEVBQUMsZUFBU3ZGLENBQVQsRUFBVztBQUFDLGFBQUs4RixPQUFMLEdBQWFwRCxNQUFNLENBQUNxRCxNQUFQLENBQWMvRixDQUFkLENBQWI7QUFBOEI7QUFBakUsS0FBN1AsRUFBZ1U7QUFBQzZFLFNBQUcsRUFBQyxXQUFMO0FBQWlCVSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPLEtBQUtPLE9BQVo7QUFBb0I7QUFBdEQsS0FBaFUsRUFBd1g7QUFBQ2pCLFNBQUcsRUFBQyxZQUFMO0FBQWtCVSxXQUFLLEVBQUMsZUFBU3ZGLENBQVQsRUFBVztBQUFDLGFBQUsrRSxRQUFMLENBQWNDLFFBQWQsR0FBdUJoRixDQUF2QjtBQUF5QjtBQUE3RCxLQUF4WCxFQUF1YjtBQUFDNkUsU0FBRyxFQUFDLFlBQUw7QUFBa0JVLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU8sS0FBS1IsUUFBTCxDQUFjQyxRQUFyQjtBQUE4QjtBQUFqRSxLQUF2YixFQUEwZjtBQUFDSCxTQUFHLEVBQUMsV0FBTDtBQUFpQlUsV0FBSyxFQUFDLGVBQVN2RixDQUFULEVBQVc7QUFBQyxhQUFLK0UsUUFBTCxDQUFjRSxNQUFkLEdBQXFCakYsQ0FBckI7QUFBdUI7QUFBMUQsS0FBMWYsRUFBc2pCO0FBQUM2RSxTQUFHLEVBQUMsV0FBTDtBQUFpQlUsV0FBSyxFQUFDLGVBQVN2RixDQUFULEVBQVc7QUFBQyxhQUFLK0UsUUFBTCxDQUFjSyxNQUFkLEdBQXFCcEYsQ0FBckI7QUFBdUI7QUFBMUQsS0FBdGpCLEVBQWtuQjtBQUFDNkUsU0FBRyxFQUFDLFdBQUw7QUFBaUJVLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU8sS0FBS1IsUUFBTCxDQUFjSyxNQUFyQjtBQUE0QjtBQUE5RCxLQUFsbkIsRUFBa3JCO0FBQUNQLFNBQUcsRUFBQyxTQUFMO0FBQWVVLFdBQUssRUFBQyxlQUFTdkYsQ0FBVCxFQUFXO0FBQUMsYUFBSytFLFFBQUwsQ0FBY0csSUFBZCxHQUFtQmxGLENBQW5CO0FBQXFCO0FBQXRELEtBQWxyQixFQUEwdUI7QUFBQzZFLFNBQUcsRUFBQyxTQUFMO0FBQWVVLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU8sS0FBS1IsUUFBTCxDQUFjRyxJQUFyQjtBQUEwQjtBQUExRCxLQUExdUIsRUFBc3lCO0FBQUNMLFNBQUcsRUFBQyxTQUFMO0FBQWVVLFdBQUssRUFBQyxlQUFTdkYsQ0FBVCxFQUFXO0FBQUMsYUFBSytFLFFBQUwsQ0FBY0ksSUFBZCxHQUFtQm5GLENBQW5CO0FBQXFCO0FBQXRELEtBQXR5QixFQUE4MUI7QUFBQzZFLFNBQUcsRUFBQyxTQUFMO0FBQWVVLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU8sS0FBS1IsUUFBTCxDQUFjSSxJQUFyQjtBQUEwQjtBQUExRCxLQUE5MUIsRUFBMDVCO0FBQUNOLFNBQUcsRUFBQyxXQUFMO0FBQWlCVSxXQUFLLEVBQUMsZUFBU3ZGLENBQVQsRUFBVztBQUFDLGFBQUsrRSxRQUFMLENBQWNNLE1BQWQsR0FBcUJyRixDQUFyQjtBQUF1QjtBQUExRCxLQUExNUIsRUFBczlCO0FBQUM2RSxTQUFHLEVBQUMsV0FBTDtBQUFpQlUsV0FBSyxFQUFDLGlCQUFVO0FBQUMsZUFBTyxLQUFLUixRQUFMLENBQWNNLE1BQXJCO0FBQTRCO0FBQTlELEtBQXQ5QixFQUFzaEM7QUFBQ1IsU0FBRyxFQUFDLGtCQUFMO0FBQXdCVSxXQUFLLEVBQUMsZUFBU3ZGLENBQVQsRUFBVzJELENBQVgsRUFBYU8sQ0FBYixFQUFlO0FBQUMsWUFBSVksQ0FBQyxHQUFDLElBQU47QUFBQSxZQUFXa0IsQ0FBQyxHQUFDLEtBQUssQ0FBbEI7QUFBQSxZQUFvQkMsQ0FBQyxHQUFDLElBQUlDLE1BQUosQ0FBVyxPQUFYLENBQXRCO0FBQTBDLFlBQUd2QyxDQUFDLFlBQVl3QyxLQUFoQixFQUFzQnhDLENBQUMsQ0FBQ2YsT0FBRixDQUFVLFVBQVNlLENBQVQsRUFBV3FDLENBQVgsRUFBYTtBQUFDQyxXQUFDLENBQUNHLElBQUYsQ0FBT3BHLENBQVAsSUFBVWtFLENBQUMsQ0FBQ2xFLENBQUQsRUFBRzJELENBQUgsQ0FBWCxHQUFpQm1CLENBQUMsQ0FBQ3VCLGdCQUFGLENBQW1CckcsQ0FBQyxHQUFDLEdBQUYsSUFBTyxjQUFZLGVBQWEsT0FBTzJELENBQXBCLEdBQXNCLFdBQXRCLEdBQWtDQyxDQUFDLENBQUNELENBQUQsQ0FBL0MsSUFBb0RxQyxDQUFwRCxHQUFzRCxFQUE3RCxJQUFpRSxHQUFwRixFQUF3RnJDLENBQXhGLEVBQTBGTyxDQUExRixDQUFqQjtBQUE4RyxTQUF0SSxFQUF0QixLQUFtSyxJQUFHLGNBQVksZUFBYSxPQUFPUCxDQUFwQixHQUFzQixXQUF0QixHQUFrQ0MsQ0FBQyxDQUFDRCxDQUFELENBQS9DLENBQUgsRUFBdUQsS0FBSXFDLENBQUosSUFBU3JDLENBQVQ7QUFBVyxlQUFLMEMsZ0JBQUwsQ0FBc0JyRyxDQUFDLEdBQUMsR0FBRixHQUFNZ0csQ0FBTixHQUFRLEdBQTlCLEVBQWtDckMsQ0FBQyxDQUFDcUMsQ0FBRCxDQUFuQyxFQUF1QzlCLENBQXZDO0FBQVgsU0FBdkQsTUFBaUhBLENBQUMsQ0FBQ2xFLENBQUQsRUFBRzJELENBQUgsQ0FBRDtBQUFPO0FBQW5YLEtBQXRoQyxFQUEyNEM7QUFBQ2tCLFNBQUcsRUFBQyxVQUFMO0FBQWdCVSxXQUFLLEVBQUMsZUFBU3ZGLENBQVQsRUFBVztBQUFDLFlBQUkyRCxDQUFDLEdBQUMsS0FBS29CLFFBQUwsQ0FBY0UsTUFBZCxHQUFxQmpGLENBQTNCO0FBQUEsWUFBNkI0RCxDQUFDLEdBQUM1RCxDQUFDLEdBQUMsR0FBRixHQUFNLEtBQUsrRSxRQUFMLENBQWNNLE1BQW5EO0FBQUEsWUFBMERuQixDQUFDLEdBQUMsS0FBS2EsUUFBTCxDQUFjRSxNQUFkLEdBQXFCakYsQ0FBckIsR0FBdUIsR0FBdkIsR0FBMkIsS0FBSytFLFFBQUwsQ0FBY00sTUFBckc7QUFBQSxZQUE0R1AsQ0FBQyxHQUFDLENBQUNuQixDQUFELEVBQUdDLENBQUgsRUFBS00sQ0FBTCxFQUFPbEUsQ0FBUCxDQUE5Rzs7QUFBd0gsYUFBSSxJQUFJZ0csQ0FBUixJQUFhbEIsQ0FBYjtBQUFlLGNBQUdBLENBQUMsQ0FBQ2tCLENBQUQsQ0FBRCxJQUFPLEtBQUtGLE9BQWYsRUFBdUIsT0FBTyxLQUFLQSxPQUFMLENBQWFoQixDQUFDLENBQUNrQixDQUFELENBQWQsQ0FBUDtBQUF0Qzs7QUFBZ0UsY0FBTSxJQUFJTSxLQUFKLENBQVUsZ0JBQWN0RyxDQUFkLEdBQWdCLG1CQUExQixDQUFOO0FBQXFEO0FBQS9RLEtBQTM0QyxFQUE0cEQ7QUFBQzZFLFNBQUcsRUFBQyxVQUFMO0FBQWdCVSxXQUFLLEVBQUMsZUFBU3ZGLENBQVQsRUFBVzRELENBQVgsRUFBYTtBQUFDLFlBQUlNLENBQUMsR0FBQ0YsU0FBUyxDQUFDQyxNQUFWLEdBQWlCLENBQWpCLElBQW9CLEtBQUssQ0FBTCxLQUFTRCxTQUFTLENBQUMsQ0FBRCxDQUF0QyxJQUEyQ0EsU0FBUyxDQUFDLENBQUQsQ0FBMUQ7QUFBQSxZQUE4RGMsQ0FBQyxHQUFDLEtBQUt5QixRQUFMLENBQWN2RyxDQUFkLENBQWhFO0FBQUEsWUFBaUZnRyxDQUFDLEdBQUNwQyxDQUFDLElBQUUsRUFBdEY7QUFBQSxZQUF5RnFDLENBQUMsR0FBQ3RDLENBQUMsQ0FBQyxFQUFELEVBQUlxQyxDQUFKLENBQTVGO0FBQUEsWUFBbUdRLENBQUMsR0FBQyxFQUFyRztBQUFBLFlBQXdHQyxDQUFDLEdBQUMsQ0FBQyxDQUEzRztBQUFBLFlBQTZHQyxDQUFDLEdBQUMsRUFBL0c7QUFBQSxZQUFrSEMsQ0FBQyxHQUFDLGVBQWEsT0FBTyxLQUFLQyxPQUFMLEVBQXBCLElBQW9DLFNBQU8sS0FBS0EsT0FBTCxFQUEzQyxHQUEwRCxFQUExRCxHQUE2RCxLQUFLQSxPQUFMLEVBQWpMOztBQUFnTSxZQUFHOUIsQ0FBQyxDQUFDK0IsTUFBRixDQUFTakUsT0FBVCxDQUFpQixVQUFTZSxDQUFULEVBQVc7QUFBQyxjQUFHLFdBQVNBLENBQUMsQ0FBQyxDQUFELENBQWIsRUFBaUIsT0FBTzZDLENBQUMsR0FBQzdDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSzZDLENBQVAsRUFBUyxNQUFLQyxDQUFDLEdBQUMsQ0FBQyxDQUFSLENBQWhCO0FBQTJCO0FBQUMsZ0JBQUcsZUFBYTlDLENBQUMsQ0FBQyxDQUFELENBQWpCLEVBQXFCLE1BQU0sSUFBSTJDLEtBQUosQ0FBVSxxQkFBbUIzQyxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUF3QixxQkFBbEMsQ0FBTjtBQUErRCxnQkFBSUMsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDZ0MsUUFBRixJQUFZbkQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPbUIsQ0FBQyxDQUFDZ0MsUUFBM0I7O0FBQW9DLGdCQUFHLENBQUMsQ0FBRCxLQUFLTCxDQUFMLElBQVEsQ0FBQzdDLENBQVQsSUFBWUQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPcUMsQ0FBUCxJQUFVQSxDQUFDLENBQUNyQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUQsSUFBU21CLENBQUMsQ0FBQ2dDLFFBQUYsQ0FBV25ELENBQUMsQ0FBQyxDQUFELENBQVosQ0FBbEMsRUFBbUQ7QUFBQyxrQkFBSU8sQ0FBQyxHQUFDLEtBQUssQ0FBWDtBQUFhLGtCQUFHUCxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU9xQyxDQUFWLEVBQVk5QixDQUFDLEdBQUM4QixDQUFDLENBQUNyQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUgsRUFBVSxPQUFPc0MsQ0FBQyxDQUFDdEMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFsQixDQUFaLEtBQXlDO0FBQUMsb0JBQUcsQ0FBQ0MsQ0FBSixFQUFNO0FBQUMsc0JBQUc2QyxDQUFILEVBQUs7QUFBTyx3QkFBTSxJQUFJSCxLQUFKLENBQVUsZ0JBQWN0RyxDQUFkLEdBQWdCLDRCQUFoQixHQUE2QzJELENBQUMsQ0FBQyxDQUFELENBQTlDLEdBQWtELElBQTVELENBQU47QUFBd0U7O0FBQUFPLGlCQUFDLEdBQUNZLENBQUMsQ0FBQ2dDLFFBQUYsQ0FBV25ELENBQUMsQ0FBQyxDQUFELENBQVosQ0FBRjtBQUFtQjtBQUFBLGtCQUFJK0MsQ0FBQyxHQUFDLENBQUMsQ0FBRCxLQUFLeEMsQ0FBTCxJQUFRLENBQUMsQ0FBRCxLQUFLQSxDQUFiLElBQWdCLE9BQUtBLENBQTNCOztBQUE2QixrQkFBRyxDQUFDd0MsQ0FBRCxJQUFJLENBQUNELENBQVIsRUFBVTtBQUFDLG9CQUFJRSxDQUFDLEdBQUNJLGtCQUFrQixDQUFDN0MsQ0FBRCxDQUFsQixDQUFzQjlCLE9BQXRCLENBQThCLE1BQTlCLEVBQXFDLEdBQXJDLENBQU47QUFBZ0QsMkJBQVN1RSxDQUFULElBQVksU0FBT3pDLENBQW5CLEtBQXVCeUMsQ0FBQyxHQUFDLEVBQXpCLEdBQTZCSCxDQUFDLEdBQUM3QyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtnRCxDQUFMLEdBQU9ILENBQXRDO0FBQXdDOztBQUFBQyxlQUFDLEdBQUMsQ0FBQyxDQUFIO0FBQUssYUFBOVYsTUFBbVc3QyxDQUFDLElBQUVELENBQUMsQ0FBQyxDQUFELENBQUQsSUFBT3NDLENBQVYsSUFBYSxPQUFPQSxDQUFDLENBQUN0QyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQXJCO0FBQTRCO0FBQUMsU0FBbGtCLEdBQW9rQixPQUFLNkMsQ0FBTCxLQUFTQSxDQUFDLEdBQUMsR0FBWCxDQUFwa0IsRUFBb2xCMUIsQ0FBQyxDQUFDa0MsVUFBRixDQUFhcEUsT0FBYixDQUFxQixVQUFTNUMsQ0FBVCxFQUFXO0FBQUMsY0FBSTJELENBQUMsR0FBQyxLQUFLLENBQVg7QUFBYSxpQkFBTSxXQUFTM0QsQ0FBQyxDQUFDLENBQUQsQ0FBVixHQUFjLE1BQUswRyxDQUFDLEdBQUMxRyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUswRyxDQUFaLENBQWQsR0FBNkIsTUFBSyxlQUFhMUcsQ0FBQyxDQUFDLENBQUQsQ0FBZCxLQUFvQkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPZ0csQ0FBUCxJQUFVckMsQ0FBQyxHQUFDcUMsQ0FBQyxDQUFDaEcsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFILEVBQVUsT0FBT2lHLENBQUMsQ0FBQ2pHLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBNUIsSUFBb0M4RSxDQUFDLENBQUNnQyxRQUFGLElBQVk5RyxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU84RSxDQUFDLENBQUNnQyxRQUFyQixLQUFnQ25ELENBQUMsR0FBQ21CLENBQUMsQ0FBQ2dDLFFBQUYsQ0FBVzlHLENBQUMsQ0FBQyxDQUFELENBQVosQ0FBbEMsQ0FBcEMsRUFBd0YwRyxDQUFDLEdBQUMxRyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUsyRCxDQUFMLEdBQU8rQyxDQUFySCxDQUFMLENBQW5DO0FBQWlLLFNBQS9NLENBQXBsQixFQUFxeUJGLENBQUMsR0FBQyxLQUFLekIsUUFBTCxDQUFjQyxRQUFkLEdBQXVCd0IsQ0FBOXpCLEVBQWcwQjFCLENBQUMsQ0FBQ21DLFlBQUYsSUFBZ0IsYUFBWW5DLENBQUMsQ0FBQ21DLFlBQTlCLElBQTRDLEtBQUtDLFNBQUwsTUFBa0JwQyxDQUFDLENBQUNtQyxZQUFGLENBQWVFLE9BQTdFLEdBQXFGWCxDQUFDLEdBQUMxQixDQUFDLENBQUNtQyxZQUFGLENBQWVFLE9BQWYsR0FBdUIsS0FBdkIsSUFBOEJULENBQUMsSUFBRSxLQUFLVSxPQUFMLEVBQWpDLElBQWlEWixDQUF4SSxHQUEwSSxlQUFhLE9BQU8xQixDQUFDLENBQUN1QyxPQUF0QixJQUErQixlQUFhLE9BQU92QyxDQUFDLENBQUN1QyxPQUFGLENBQVUsQ0FBVixDQUFuRCxJQUFpRSxLQUFLSCxTQUFMLE9BQW1CcEMsQ0FBQyxDQUFDdUMsT0FBRixDQUFVLENBQVYsQ0FBcEYsR0FBaUdiLENBQUMsR0FBQzFCLENBQUMsQ0FBQ3VDLE9BQUYsQ0FBVSxDQUFWLElBQWEsS0FBYixJQUFvQlgsQ0FBQyxJQUFFLEtBQUtVLE9BQUwsRUFBdkIsSUFBdUNaLENBQTFJLEdBQTRJRSxDQUFDLElBQUUsS0FBS1UsT0FBTCxPQUFpQlYsQ0FBQyxJQUFFLE9BQUtDLENBQUwsR0FBTyxFQUFQLEdBQVUsTUFBSUEsQ0FBaEIsQ0FBckIsR0FBd0NILENBQUMsR0FBQyxLQUFLVSxTQUFMLEtBQWlCLEtBQWpCLEdBQXVCUixDQUF2QixJQUEwQixPQUFLQyxDQUFMLEdBQU8sRUFBUCxHQUFVLE1BQUlBLENBQXhDLElBQTJDSCxDQUFyRixHQUF1RnRDLENBQUMsS0FBRyxDQUFDLENBQUwsS0FBU3NDLENBQUMsR0FBQyxLQUFLVSxTQUFMLEtBQWlCLEtBQWpCLEdBQXVCLEtBQUtFLE9BQUwsRUFBdkIsR0FBc0NaLENBQWpELENBQTdxQyxFQUFpdUM5RCxNQUFNLENBQUM0RSxJQUFQLENBQVlyQixDQUFaLEVBQWVoQyxNQUFmLEdBQXNCLENBQTF2QyxFQUE0dkM7QUFBQyxjQUFJc0QsQ0FBQyxHQUFDLEtBQUssQ0FBWDtBQUFBLGNBQWFDLENBQUMsR0FBQyxFQUFmO0FBQUEsY0FBa0JDLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVN6SCxDQUFULEVBQVcyRCxDQUFYLEVBQWE7QUFBQ0EsYUFBQyxHQUFDLGNBQVksT0FBT0EsQ0FBbkIsR0FBcUJBLENBQUMsRUFBdEIsR0FBeUJBLENBQTNCLEVBQTZCQSxDQUFDLEdBQUMsU0FBT0EsQ0FBUCxHQUFTLEVBQVQsR0FBWUEsQ0FBM0MsRUFBNkM2RCxDQUFDLENBQUN6RixJQUFGLENBQU9nRixrQkFBa0IsQ0FBQy9HLENBQUQsQ0FBbEIsR0FBc0IsR0FBdEIsR0FBMEIrRyxrQkFBa0IsQ0FBQ3BELENBQUQsQ0FBbkQsQ0FBN0M7QUFBcUcsV0FBdkk7O0FBQXdJLGVBQUk0RCxDQUFKLElBQVN0QixDQUFUO0FBQVcsaUJBQUtJLGdCQUFMLENBQXNCa0IsQ0FBdEIsRUFBd0J0QixDQUFDLENBQUNzQixDQUFELENBQXpCLEVBQTZCRSxDQUE3QjtBQUFYOztBQUEyQ2pCLFdBQUMsR0FBQ0EsQ0FBQyxHQUFDLEdBQUYsR0FBTWdCLENBQUMsQ0FBQ0UsSUFBRixDQUFPLEdBQVAsRUFBWXRGLE9BQVosQ0FBb0IsTUFBcEIsRUFBMkIsR0FBM0IsQ0FBUjtBQUF3Qzs7QUFBQSxlQUFPb0UsQ0FBUDtBQUFTO0FBQXJzRCxLQUE1cEQsQ0FBSCxFQUF1MkcsQ0FBQztBQUFDM0IsU0FBRyxFQUFDLGFBQUw7QUFBbUJVLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU9TLENBQVA7QUFBUztBQUE3QyxLQUFELEVBQWdEO0FBQUNuQixTQUFHLEVBQUMsU0FBTDtBQUFlVSxXQUFLLEVBQUMsZUFBU3ZGLENBQVQsRUFBVztBQUFDLFlBQUkyRCxDQUFDLEdBQUNtQixDQUFDLENBQUM2QyxXQUFGLEVBQU47QUFBc0JoRSxTQUFDLENBQUMvRCxjQUFGLENBQWlCSSxDQUFqQjtBQUFvQjtBQUEzRSxLQUFoRCxDQUF2MkcsQ0FBRCxFQUF1K0c4RSxDQUE5K0c7QUFBZy9HLEdBQXhuSCxFQUEzbUI7O0FBQXN1SUEsR0FBQyxDQUFDOEMsS0FBRixFQUFROUMsQ0FBQyxDQUFDK0MsT0FBVjtBQUFrQixNQUFJN0IsQ0FBQyxHQUFDLElBQUlsQixDQUFKLEVBQU47QUFBWSxTQUFNO0FBQUNnRCxVQUFNLEVBQUNoRCxDQUFSO0FBQVVuRixXQUFPLEVBQUNxRztBQUFsQixHQUFOO0FBQTJCLENBQTdsSixDQUFELEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZShcIi4uL2Nzcy9hcHAuY3NzXCIpO1xyXG5cclxuY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb25cIik7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qc1wiO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuLy8gZG9jdW1lbnQudXJsXHJcbmNvbnN0IHByb3h5ID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcblxyXG4kKFwiI3NlYXJjaEJHR1wiKS5zdWJtaXQoZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBiZ2FtZUJHRyA9ICQoXCIjYmdhbWVCR0dcIikudmFsKCk7XHJcblxyXG4gICQoXCIjYmdnYW1lIG9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICB9KTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwOi8vYm9hcmRnYW1lZ2Vlay5jb20veG1sYXBpMi9zZWFyY2hcIixcclxuICAgIGRhdGE6IFwicXVlcnk9XCIgKyBiZ2FtZUJHRyxcclxuICAgIGRhdGFUeXBlOiBcInhtbFwiLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgJChkYXRhKVxyXG4gICAgICAgICAgLmZpbmQoXCJpdGVtc1wiKVxyXG4gICAgICAgICAgLmF0dHIoXCJ0b3RhbFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKFwiQXVjdW4gcsOpc3VsdGF0XCIpO1xyXG4gICAgICAgICQoXCIjYmdnYW1lXCIpLmFwcGVuZChvcHRpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoZGF0YSlcclxuICAgICAgICAgIC5maW5kKFwiaXRlbVwiKVxyXG4gICAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9ICQodGhpcylcclxuICAgICAgICAgICAgICAuZmluZChcIm5hbWVcIilcclxuICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihuYW1lLCBpZCk7XHJcbiAgICAgICAgICAgICQoXCIjYmdnYW1lXCIpLmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4kKFwiI2JnZ2Nob2ljZVwiKS5zdWJtaXQoZSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRHYW1lID0gJChcIiNiZ2dhbWVcIilcclxuICAgIC5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKVxyXG4gICAgLnZhbCgpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogcHJveHkgKyBcImh0dHBzOi8vd3d3LmJvYXJkZ2FtZWdlZWsuY29tL3htbGFwaTIvdGhpbmdcIixcclxuICAgIGRhdGE6IFwiaWQ9XCIgKyBzZWxlY3RlZEdhbWUgKyBcIiZ0eXBlPWJvYXJkZ2FtZVwiLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24oeG1sKSB7XHJcbiAgICAgIC8vcGFyc2VyIGR1IHhtbCByZWN1XHJcblxyXG4gICAgICAvLyByZWN1cCBOYW1lXHJcbiAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI2JnZ2FtZVwiKVxyXG4gICAgICAgIC5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKVxyXG4gICAgICAgIC50ZXh0KCk7XHJcblxyXG4gICAgICAvLy8vIFRPRE8gOiByZWZhY3RvIGF2ZWMgZnVuY3Rpb24gY2xlYXJTZWxlY3QoKVxyXG4gICAgICAkKFwiI2JnZ2FtZSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgJChcIiNpbWFnZUJnYW1lXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgY29uc3QgaW1hZ2UgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcImltYWdlXCIpXHJcbiAgICAgICAgLnRleHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJkZXNjcmlwdGlvblwiKVxyXG4gICAgICAgIC50ZXh0KCk7XHJcblxyXG4gICAgICBjb25zdCBkdXJhdGlvbiA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwicGxheWluZ3RpbWVcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWlucGxheWVycyA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWlucGxheWVyc1wiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBtYXhwbGF5ZXJzID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtYXhwbGF5ZXJzXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGRpZmZpY3VsdHkgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1pbmFnZVwiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBtZWNoYW5pc21zID0gW107XHJcbiAgICAgICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibGlua1wiKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImJvYXJkZ2FtZW1lY2hhbmljXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVjaGFuaWMgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgbWVjaGFuaXNtcy5wdXNoKG1lY2hhbmljKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXTtcclxuICAgICAgJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJsaW5rXCIpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCB0eXBlID0gJCh0aGlzKS5hdHRyKFwidHlwZVwiKTtcclxuICAgICAgICAgIGlmICh0eXBlID09IFwiYm9hcmRnYW1lY2F0ZWdvcnlcIikge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9ICQodGhpcykuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gcHJlIHJlbXBsaXNzYWdlIGRlcyBkb25uZWVzIGRhbnMgZm9ybXVsYWlyZVxyXG5cclxuICAgICAgLy9EZXNjcmlwdGlvblxyXG4gICAgICBjb25zdCByZWdleCA9IC88YnJcXHMqW1xcL10/Pi9naTtcclxuICAgICAgbGV0IGRlc2NyaXB0aW9uV2l0aG91dGJyID0gZGVzY3JpcHRpb24ucmVwbGFjZShyZWdleCwgXCJcIik7XHJcblxyXG4gICAgICAvL05hbWVcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9uYW1lXCIpLnZhbChuYW1lKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kZXNjcmlwdGlvblwiKS52YWwoYCR7ZGVzY3JpcHRpb25XaXRob3V0YnJ9YCk7XHJcblxyXG4gICAgICAvL2ltYWdlXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1faW1hZ2VfYmdnXCIpXHJcbiAgICAgICAgLnZhbChpbWFnZSlcclxuICAgICAgICAuaGlkZSgpO1xyXG4gICAgICBjb25zdCBpbWdWaWV3ID0gYDxmaWd1cmU+IDxmaWdjYXB0aW9uPiBJbWFnZSBmcm9tIEJHRyA8L2ZpZ2NhcHRpb24+PGltZyBzcmM9JHtpbWFnZX0gYWx0PVwiaW1hZ2UgYm9hcmRnYW1lXCIgd2lkdGg9MTAwIGlkPVwiaW1hZ2VCZ2FtZVwiPjwvZmlndXJlPmA7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbmFtZVwiKS5hZnRlcihpbWdWaWV3KTtcclxuXHJcbiAgICAgIC8vRHVyYXRpb25cclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kdXJhdGlvblwiKS52YWwoZHVyYXRpb24pO1xyXG5cclxuICAgICAgLy8gTWluIGV0IE1heCBQbGF5ZXJzXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWluTmJQbGF5ZXJzXCIpLnZhbChtaW5wbGF5ZXJzKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9tYXhOYlBsYXllcnNcIikudmFsKG1heHBsYXllcnMpO1xyXG5cclxuICAgICAgLy8gRGlmZmljdWx0eVxyXG4gICAgICBpZiAoZGlmZmljdWx0eSA8IDcpIHtcclxuICAgICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2RpZmZpY3VsdHlcIilcclxuICAgICAgICAgIC5jaGlsZHJlbihcIm9wdGlvblt2YWx1ZT0xXVwiKVxyXG4gICAgICAgICAgLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChkaWZmaWN1bHR5ID49IDcgJiYgZGlmZmljdWx0eSA8IDEyKSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9Ml1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA+PSAxMiAmJiBkaWZmaWN1bHR5IDwgMTQpIHtcclxuICAgICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2RpZmZpY3VsdHlcIilcclxuICAgICAgICAgIC5jaGlsZHJlbihcIm9wdGlvblt2YWx1ZT0zXVwiKVxyXG4gICAgICAgICAgLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2RpZmZpY3VsdHlcIilcclxuICAgICAgICAgIC5jaGlsZHJlbihcIm9wdGlvblt2YWx1ZT00XVwiKVxyXG4gICAgICAgICAgLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTWVjaGFuaXNtXHJcbiAgICAgIGNvbnN0IE1lY2hhbmlzbU9wdGlvbk5hbWUgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21lY2hhbmlzbSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25OYW1lID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIE1lY2hhbmlzbU9wdGlvbk5hbWVbb3B0aW9uTmFtZV0gPSBpZDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBvcHRpb24gaW4gTWVjaGFuaXNtT3B0aW9uTmFtZSkge1xyXG4gICAgICAgIG1lY2hhbmlzbXMuZm9yRWFjaChtZWNoYW5pc20gPT4ge1xyXG4gICAgICAgICAgaWYgKG1lY2hhbmlzbSA9PSBvcHRpb24pIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gTWVjaGFuaXNtT3B0aW9uTmFtZVtvcHRpb25dO1xyXG4gICAgICAgICAgICAkKGAjYWRkX2JnYW1lX2Zvcm1fbWVjaGFuaXNtIG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5hdHRyKFxyXG4gICAgICAgICAgICAgIFwic2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENhdGVnb3J5XHJcbiAgICAgIGNvbnN0IENhdGVnb3J5T3B0aW9uTmFtZSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9jYXRlZ29yeSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25OYW1lID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIENhdGVnb3J5T3B0aW9uTmFtZVtvcHRpb25OYW1lXSA9IGlkO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAobGV0IG9wdGlvbiBpbiBDYXRlZ29yeU9wdGlvbk5hbWUpIHtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5ID09IG9wdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBDYXRlZ29yeU9wdGlvbk5hbWVbb3B0aW9uXTtcclxuICAgICAgICAgICAgJChgI2FkZF9iZ2FtZV9mb3JtX2NhdGVnb3J5IG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5hdHRyKFxyXG4gICAgICAgICAgICAgIFwic2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4kKFwiI2RlbGV0ZUltYWdlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgJC5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoXCJkZWxldGVfaW1hZ2VfYmdhbWVcIiwgeyBpZDogaWQgfSkpXHJcbiAgICAuZG9uZShmdW5jdGlvbigpIHtcclxuICAgICAgJChcIiNpbWFnZVwiKS5yZW1vdmUoKTtcclxuICAgICAgJChcIiNkZWxldGVJbWFnZVwiKS5oaWRlKCk7XHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgaXMgZGVsZXRlZFwiKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbChmdW5jdGlvbigpIHtcclxuICAgICAgYWxlcnQoXCJJbWFnZSBkZWxldGlvbiBmYWlsZWRcIik7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKFwiLmN1c3RvbS1maWxlLWlucHV0XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgdmFyIGlucHV0RmlsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgJChpbnB1dEZpbGUpXHJcbiAgICAucGFyZW50KClcclxuICAgIC5maW5kKFwiLmN1c3RvbS1maWxlLWxhYmVsXCIpXHJcbiAgICAuaHRtbChpbnB1dEZpbGUuZmlsZXNbMF0ubmFtZSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCIhZnVuY3Rpb24oZSx0KXt2YXIgbj10KCk7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW4uUm91dGluZzooZS5Sb3V0aW5nPW4uUm91dGluZyxlLmZvcz17Um91dGVyOm4uUm91dGVyfSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgdD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0LG4pe2UodGhpcyxpKSx0aGlzLmNvbnRleHRfPXR8fHtiYXNlX3VybDpcIlwiLHByZWZpeDpcIlwiLGhvc3Q6XCJcIixwb3J0OlwiXCIsc2NoZW1lOlwiXCIsbG9jYWxlOlwiXCJ9LHRoaXMuc2V0Um91dGVzKG58fHt9KX1yZXR1cm4gbyhpLFt7a2V5Olwic2V0Um91dGluZ0RhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLFwicHJlZml4XCJpbiBlJiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksXCJwb3J0XCJpbiBlJiZ0aGlzLnNldFBvcnQoZS5wb3J0KSxcImxvY2FsZVwiaW4gZSYmdGhpcy5zZXRMb2NhbGUoZS5sb2NhbGUpLHRoaXMuc2V0SG9zdChlLmhvc3QpLHRoaXMuc2V0U2NoZW1lKGUuc2NoZW1lKX19LHtrZXk6XCJzZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnJvdXRlc189T2JqZWN0LmZyZWV6ZShlKX19LHtrZXk6XCJnZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJvdXRlc199fSx7a2V5Olwic2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uYmFzZV91cmw9ZX19LHtrZXk6XCJnZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybH19LHtrZXk6XCJzZXRQcmVmaXhcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnByZWZpeD1lfX0se2tleTpcInNldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uc2NoZW1lPWV9fSx7a2V5OlwiZ2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWV9fSx7a2V5Olwic2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uaG9zdD1lfX0se2tleTpcImdldEhvc3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmhvc3R9fSx7a2V5Olwic2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucG9ydD1lfX0se2tleTpcImdldFBvcnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnBvcnR9fSx7a2V5Olwic2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5sb2NhbGU9ZX19LHtrZXk6XCJnZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZX19LHtrZXk6XCJidWlsZFF1ZXJ5UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG8pe3ZhciBpPXRoaXMscj12b2lkIDAscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYodCBpbnN0YW5jZW9mIEFycmF5KXQuZm9yRWFjaChmdW5jdGlvbih0LHIpe3MudGVzdChlKT9vKGUsdCk6aS5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKT9yOlwiXCIpK1wiXVwiLHQsbyl9KTtlbHNlIGlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKSlmb3IociBpbiB0KXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiK3IrXCJdXCIsdFtyXSxvKTtlbHNlIG8oZSx0KX19LHtrZXk6XCJnZXRSb3V0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29udGV4dF8ucHJlZml4K2Usbj1lK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLG89dGhpcy5jb250ZXh0Xy5wcmVmaXgrZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxpPVt0LG4sbyxlXTtmb3IodmFyIHIgaW4gaSlpZihpW3JdaW4gdGhpcy5yb3V0ZXNfKXJldHVybiB0aGlzLnJvdXRlc19baVtyXV07dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpfX0se2tleTpcImdlbmVyYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSxuKXt2YXIgbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLGk9dGhpcy5nZXRSb3V0ZShlKSxyPW58fHt9LHM9dCh7fSxyKSx1PVwiXCIsYz0hMCxhPVwiXCIsZj1cInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcy5nZXRQb3J0KCl8fG51bGw9PT10aGlzLmdldFBvcnQoKT9cIlwiOnRoaXMuZ2V0UG9ydCgpO2lmKGkudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odCl7aWYoXCJ0ZXh0XCI9PT10WzBdKXJldHVybiB1PXRbMV0rdSx2b2lkKGM9ITEpO3tpZihcInZhcmlhYmxlXCIhPT10WzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK3RbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7dmFyIG49aS5kZWZhdWx0cyYmdFszXWluIGkuZGVmYXVsdHM7aWYoITE9PT1jfHwhbnx8dFszXWluIHImJnJbdFszXV0hPWkuZGVmYXVsdHNbdFszXV0pe3ZhciBvPXZvaWQgMDtpZih0WzNdaW4gcilvPXJbdFszXV0sZGVsZXRlIHNbdFszXV07ZWxzZXtpZighbil7aWYoYylyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK3RbM10rJ1wiLicpfW89aS5kZWZhdWx0c1t0WzNdXX12YXIgYT0hMD09PW98fCExPT09b3x8XCJcIj09PW87aWYoIWF8fCFjKXt2YXIgZj1lbmNvZGVVUklDb21wb25lbnQobykucmVwbGFjZSgvJTJGL2csXCIvXCIpO1wibnVsbFwiPT09ZiYmbnVsbD09PW8mJihmPVwiXCIpLHU9dFsxXStmK3V9Yz0hMX1lbHNlIG4mJnRbM11pbiBzJiZkZWxldGUgc1t0WzNdXX19KSxcIlwiPT09dSYmKHU9XCIvXCIpLGkuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm5cInRleHRcIj09PWVbMF0/dm9pZChhPWVbMV0rYSk6dm9pZChcInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIHI/KHQ9cltlWzNdXSxkZWxldGUgc1tlWzNdXSk6aS5kZWZhdWx0cyYmZVszXWluIGkuZGVmYXVsdHMmJih0PWkuZGVmYXVsdHNbZVszXV0pLGE9ZVsxXSt0K2EpKX0pLHU9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCt1LGkucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIGkucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lP3U9aS5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzWzBdJiZ0aGlzLmdldFNjaGVtZSgpIT09aS5zY2hlbWVzWzBdP3U9aS5zY2hlbWVzWzBdK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OmEmJnRoaXMuZ2V0SG9zdCgpIT09YSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKT91PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIithKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3U6bz09PSEwJiYodT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrdGhpcy5nZXRIb3N0KCkrdSksT2JqZWN0LmtleXMocykubGVuZ3RoPjApe3ZhciBsPXZvaWQgMCxoPVtdLHk9ZnVuY3Rpb24oZSx0KXt0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQsdD1udWxsPT09dD9cIlwiOnQsaC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodCkpfTtmb3IobCBpbiBzKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhsLHNbbF0seSk7dT11K1wiP1wiK2guam9pbihcIiZcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpfXJldHVybiB1fX1dLFt7a2V5OlwiZ2V0SW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiByfX0se2tleTpcInNldERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1pLmdldEluc3RhbmNlKCk7dC5zZXRSb3V0aW5nRGF0YShlKX19XSksaX0oKTtpLlJvdXRlLGkuQ29udGV4dDt2YXIgcj1uZXcgaTtyZXR1cm57Um91dGVyOmksUm91dGluZzpyfX0pOyJdLCJzb3VyY2VSb290IjoiIn0=