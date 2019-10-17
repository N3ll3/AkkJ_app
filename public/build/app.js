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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJwcm94eSIsIiQiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJiZ2FtZUJHRyIsInZhbCIsImVhY2giLCJyZW1vdmUiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmaW5kIiwiYXR0ciIsIm9wdGlvbiIsIk9wdGlvbiIsImFwcGVuZCIsImlkIiwibmFtZSIsInNlbGVjdGVkR2FtZSIsImNoaWxkcmVuIiwieG1sIiwidGV4dCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsIm1pbnBsYXllcnMiLCJtYXhwbGF5ZXJzIiwiZGlmZmljdWx0eSIsIm1lY2hhbmlzbXMiLCJtZWNoYW5pYyIsInB1c2giLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJyZWdleCIsImRlc2NyaXB0aW9uV2l0aG91dGJyIiwicmVwbGFjZSIsImluc3RhbmNlX25hbWUiLCJDS0VESVRPUiIsImluc3RhbmNlcyIsImluc2VydEh0bWwiLCJoaWRlIiwiaW1nVmlldyIsImFmdGVyIiwicHJvcCIsIk1lY2hhbmlzbU9wdGlvbk5hbWUiLCJPYmplY3QiLCJvcHRpb25OYW1lIiwiZm9yRWFjaCIsIm1lY2hhbmlzbSIsIkNhdGVnb3J5T3B0aW9uTmFtZSIsIm9uIiwicG9zdCIsImdlbmVyYXRlIiwiZG9uZSIsImFsZXJ0IiwiZmFpbCIsImV2ZW50IiwiaW5wdXRGaWxlIiwiY3VycmVudFRhcmdldCIsInBhcmVudCIsImh0bWwiLCJmaWxlcyIsInQiLCJuIiwiZGVmaW5lIiwiVHlwZUVycm9yIiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImkiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJ2YWx1ZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRQb3J0Iiwic2V0TG9jYWxlIiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJmcmVlemUiLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwidSIsImMiLCJhIiwiZiIsImdldFBvcnQiLCJ0b2tlbnMiLCJkZWZhdWx0cyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJnZXRTY2hlbWUiLCJfc2NoZW1lIiwiZ2V0SG9zdCIsInNjaGVtZXMiLCJrZXlzIiwibCIsImgiLCJ5Iiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVA7O0FBRUEsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFD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QUMsaUJBQVU7QUFBQyxlQUFPUyxDQUFQO0FBQVM7QUFBN0MsS0FBRCxFQUFnRDtBQUFDbkIsU0FBRyxFQUFDLFNBQUw7QUFBZVUsV0FBSyxFQUFDLGVBQVMzRixDQUFULEVBQVc7QUFBQyxZQUFJK0QsQ0FBQyxHQUFDbUIsQ0FBQyxDQUFDNkMsV0FBRixFQUFOO0FBQXNCaEUsU0FBQyxDQUFDbkUsY0FBRixDQUFpQkksQ0FBakI7QUFBb0I7QUFBM0UsS0FBaEQsQ0FBdjJHLENBQUQsRUFBdStHa0YsQ0FBOStHO0FBQWcvRyxHQUF4bkgsRUFBM21COztBQUFzdUlBLEdBQUMsQ0FBQzhDLEtBQUYsRUFBUTlDLENBQUMsQ0FBQytDLE9BQVY7QUFBa0IsTUFBSTdCLENBQUMsR0FBQyxJQUFJbEIsQ0FBSixFQUFOO0FBQVksU0FBTTtBQUFDZ0QsVUFBTSxFQUFDaEQsQ0FBUjtBQUFVdkYsV0FBTyxFQUFDeUc7QUFBbEIsR0FBTjtBQUEyQixDQUE3bEosQ0FBRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoXCIuLi9jc3MvYXBwLmNzc1wiKTtcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbi8vIGRvY3VtZW50LnVybFxyXG5jb25zdCBwcm94eSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xyXG5cclxuJChcIiNzZWFyY2hCR0dcIikuc3VibWl0KGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgYmdhbWVCR0cgPSAkKFwiI2JnYW1lQkdHXCIpLnZhbCgpO1xyXG5cclxuICAkKFwiI2JnZ2FtZSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBwcm94eSArIFwiaHR0cDovL2JvYXJkZ2FtZWdlZWsuY29tL3htbGFwaTIvc2VhcmNoXCIsXHJcbiAgICBkYXRhOiBcInF1ZXJ5PVwiICsgYmdhbWVCR0csXHJcbiAgICBkYXRhVHlwZTogXCJ4bWxcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICQoZGF0YSlcclxuICAgICAgICAgIC5maW5kKFwiaXRlbXNcIilcclxuICAgICAgICAgIC5hdHRyKFwidG90YWxcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihcIkF1Y3VuIHLDqXN1bHRhdFwiKTtcclxuICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEpXHJcbiAgICAgICAgICAuZmluZChcIml0ZW1cIilcclxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24obmFtZSwgaWQpO1xyXG4gICAgICAgICAgICAkKFwiI2JnZ2FtZVwiKS5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIiNiZ2djaG9pY2VcIikuc3VibWl0KGUgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkR2FtZSA9ICQoXCIjYmdnYW1lXCIpXHJcbiAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgIC52YWwoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IHByb3h5ICsgXCJodHRwczovL3d3dy5ib2FyZGdhbWVnZWVrLmNvbS94bWxhcGkyL3RoaW5nXCIsXHJcbiAgICBkYXRhOiBcImlkPVwiICsgc2VsZWN0ZWRHYW1lICsgXCImdHlwZT1ib2FyZGdhbWVcIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHhtbCkge1xyXG4gICAgICAvL3BhcnNlciBkdSB4bWwgcmVjdVxyXG5cclxuICAgICAgLy8gcmVjdXAgTmFtZVxyXG4gICAgICBjb25zdCBuYW1lID0gJChcIiNiZ2dhbWVcIilcclxuICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgLy8vLyBUT0RPIDogcmVmYWN0byBhdmVjIGZ1bmN0aW9uIGNsZWFyU2VsZWN0KClcclxuICAgICAgJChcIiNiZ2dhbWUgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIjaW1hZ2VCZ2FtZVwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IGltYWdlID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJpbWFnZVwiKVxyXG4gICAgICAgIC50ZXh0KCk7XHJcblxyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwiZGVzY3JpcHRpb25cIilcclxuICAgICAgICAudGV4dCgpO1xyXG5cclxuICAgICAgY29uc3QgZHVyYXRpb24gPSAkKHhtbClcclxuICAgICAgICAuZmluZChcInBsYXlpbmd0aW1lXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG1pbnBsYXllcnMgPSAkKHhtbClcclxuICAgICAgICAuZmluZChcIm1pbnBsYXllcnNcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWF4cGxheWVycyA9ICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibWF4cGxheWVyc1wiKVxyXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBkaWZmaWN1bHR5ID0gJCh4bWwpXHJcbiAgICAgICAgLmZpbmQoXCJtaW5hZ2VcIilcclxuICAgICAgICAuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbWVjaGFuaXNtcyA9IFtdO1xyXG4gICAgICAkKHhtbClcclxuICAgICAgICAuZmluZChcImxpbmtcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJib2FyZGdhbWVtZWNoYW5pY1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lY2hhbmljID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIG1lY2hhbmlzbXMucHVzaChtZWNoYW5pYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XHJcbiAgICAgICQoeG1sKVxyXG4gICAgICAgIC5maW5kKFwibGlua1wiKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImJvYXJkZ2FtZWNhdGVnb3J5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHByZSByZW1wbGlzc2FnZSBkZXMgZG9ubmVlcyBkYW5zIGZvcm11bGFpcmVcclxuXHJcbiAgICAgIC8vRGVzY3JpcHRpb25cclxuICAgICAgY29uc3QgcmVnZXggPSAvPGJyXFxzKltcXC9dPz4vZ2k7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbldpdGhvdXRiciA9IGRlc2NyaXB0aW9uLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG5cclxuICAgICAgLy9OYW1lXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbmFtZVwiKS52YWwobmFtZSk7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlX25hbWUgPSBcImFkZF9iZ2FtZV9mb3JtX2Rlc2NyaXB0aW9uXCI7XHJcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1tpbnN0YW5jZV9uYW1lXS5pbnNlcnRIdG1sKFxyXG4gICAgICAgIGA8cD4ke2Rlc2NyaXB0aW9uV2l0aG91dGJyfTwvcD5gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvL2ltYWdlXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1faW1hZ2VfYmdnXCIpXHJcbiAgICAgICAgLnZhbChpbWFnZSlcclxuICAgICAgICAuaGlkZSgpO1xyXG4gICAgICBjb25zdCBpbWdWaWV3ID0gYDxmaWd1cmU+IDxmaWdjYXB0aW9uPiBJbWFnZSBmcm9tIEJHRyA8L2ZpZ2NhcHRpb24+PGltZyBzcmM9JHtpbWFnZX0gYWx0PVwiaW1hZ2UgYm9hcmRnYW1lXCIgd2lkdGg9MTAwIGlkPVwiaW1hZ2VCZ2FtZVwiPjwvZmlndXJlPmA7XHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbmFtZVwiKS5hZnRlcihpbWdWaWV3KTtcclxuXHJcbiAgICAgIC8vRHVyYXRpb25cclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kdXJhdGlvblwiKS52YWwoZHVyYXRpb24pO1xyXG5cclxuICAgICAgLy8gTWluIGV0IE1heCBQbGF5ZXJzXHJcbiAgICAgICQoXCIjYWRkX2JnYW1lX2Zvcm1fbWluTmJQbGF5ZXJzXCIpLnZhbChtaW5wbGF5ZXJzKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9tYXhOYlBsYXllcnNcIikudmFsKG1heHBsYXllcnMpO1xyXG5cclxuICAgICAgLy8gRGlmZmljdWx0eVxyXG4gICAgICBpZiAoZGlmZmljdWx0eSA8IDcpIHtcclxuICAgICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2RpZmZpY3VsdHlcIilcclxuICAgICAgICAgIC5jaGlsZHJlbihcIm9wdGlvblt2YWx1ZT0xXVwiKVxyXG4gICAgICAgICAgLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChkaWZmaWN1bHR5ID49IDcgJiYgZGlmZmljdWx0eSA8IDEyKSB7XHJcbiAgICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9kaWZmaWN1bHR5XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oXCJvcHRpb25bdmFsdWU9Ml1cIilcclxuICAgICAgICAgIC5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA+PSAxMiAmJiBkaWZmaWN1bHR5IDwgMTQpIHtcclxuICAgICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2RpZmZpY3VsdHlcIilcclxuICAgICAgICAgIC5jaGlsZHJlbihcIm9wdGlvblt2YWx1ZT0zXVwiKVxyXG4gICAgICAgICAgLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX2RpZmZpY3VsdHlcIilcclxuICAgICAgICAgIC5jaGlsZHJlbihcIm9wdGlvblt2YWx1ZT00XVwiKVxyXG4gICAgICAgICAgLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTWVjaGFuaXNtXHJcbiAgICAgIGNvbnN0IE1lY2hhbmlzbU9wdGlvbk5hbWUgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAkKFwiI2FkZF9iZ2FtZV9mb3JtX21lY2hhbmlzbSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25OYW1lID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIE1lY2hhbmlzbU9wdGlvbk5hbWVbb3B0aW9uTmFtZV0gPSBpZDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBvcHRpb24gaW4gTWVjaGFuaXNtT3B0aW9uTmFtZSkge1xyXG4gICAgICAgIG1lY2hhbmlzbXMuZm9yRWFjaChtZWNoYW5pc20gPT4ge1xyXG4gICAgICAgICAgaWYgKG1lY2hhbmlzbSA9PSBvcHRpb24pIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gTWVjaGFuaXNtT3B0aW9uTmFtZVtvcHRpb25dO1xyXG4gICAgICAgICAgICAkKGAjYWRkX2JnYW1lX2Zvcm1fbWVjaGFuaXNtIG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5hdHRyKFxyXG4gICAgICAgICAgICAgIFwic2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENhdGVnb3J5XHJcbiAgICAgIGNvbnN0IENhdGVnb3J5T3B0aW9uTmFtZSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgJChcIiNhZGRfYmdhbWVfZm9ybV9jYXRlZ29yeSBvcHRpb25cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25OYW1lID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIENhdGVnb3J5T3B0aW9uTmFtZVtvcHRpb25OYW1lXSA9IGlkO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAobGV0IG9wdGlvbiBpbiBDYXRlZ29yeU9wdGlvbk5hbWUpIHtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5ID09IG9wdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBDYXRlZ29yeU9wdGlvbk5hbWVbb3B0aW9uXTtcclxuICAgICAgICAgICAgJChgI2FkZF9iZ2FtZV9mb3JtX2NhdGVnb3J5IG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5hdHRyKFxyXG4gICAgICAgICAgICAgIFwic2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4kKFwiI2RlbGV0ZUltYWdlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgJC5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoXCJkZWxldGVfaW1hZ2VfYmdhbWVcIiwgeyBpZDogaWQgfSkpXHJcbiAgICAuZG9uZShmdW5jdGlvbigpIHtcclxuICAgICAgJChcIiNpbWFnZVwiKS5yZW1vdmUoKTtcclxuICAgICAgJChcIiNkZWxldGVJbWFnZVwiKS5oaWRlKCk7XHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgaXMgZGVsZXRlZFwiKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbChmdW5jdGlvbigpIHtcclxuICAgICAgYWxlcnQoXCJJbWFnZSBkZWxldGlvbiBmYWlsZWRcIik7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKFwiLmN1c3RvbS1maWxlLWlucHV0XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgdmFyIGlucHV0RmlsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgJChpbnB1dEZpbGUpXHJcbiAgICAucGFyZW50KClcclxuICAgIC5maW5kKFwiLmN1c3RvbS1maWxlLWxhYmVsXCIpXHJcbiAgICAuaHRtbChpbnB1dEZpbGUuZmlsZXNbMF0ubmFtZSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCIhZnVuY3Rpb24oZSx0KXt2YXIgbj10KCk7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW4uUm91dGluZzooZS5Sb3V0aW5nPW4uUm91dGluZyxlLmZvcz17Um91dGVyOm4uUm91dGVyfSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgdD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0LG4pe2UodGhpcyxpKSx0aGlzLmNvbnRleHRfPXR8fHtiYXNlX3VybDpcIlwiLHByZWZpeDpcIlwiLGhvc3Q6XCJcIixwb3J0OlwiXCIsc2NoZW1lOlwiXCIsbG9jYWxlOlwiXCJ9LHRoaXMuc2V0Um91dGVzKG58fHt9KX1yZXR1cm4gbyhpLFt7a2V5Olwic2V0Um91dGluZ0RhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLFwicHJlZml4XCJpbiBlJiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksXCJwb3J0XCJpbiBlJiZ0aGlzLnNldFBvcnQoZS5wb3J0KSxcImxvY2FsZVwiaW4gZSYmdGhpcy5zZXRMb2NhbGUoZS5sb2NhbGUpLHRoaXMuc2V0SG9zdChlLmhvc3QpLHRoaXMuc2V0U2NoZW1lKGUuc2NoZW1lKX19LHtrZXk6XCJzZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnJvdXRlc189T2JqZWN0LmZyZWV6ZShlKX19LHtrZXk6XCJnZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJvdXRlc199fSx7a2V5Olwic2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uYmFzZV91cmw9ZX19LHtrZXk6XCJnZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybH19LHtrZXk6XCJzZXRQcmVmaXhcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnByZWZpeD1lfX0se2tleTpcInNldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uc2NoZW1lPWV9fSx7a2V5OlwiZ2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWV9fSx7a2V5Olwic2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uaG9zdD1lfX0se2tleTpcImdldEhvc3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmhvc3R9fSx7a2V5Olwic2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucG9ydD1lfX0se2tleTpcImdldFBvcnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnBvcnR9fSx7a2V5Olwic2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5sb2NhbGU9ZX19LHtrZXk6XCJnZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZX19LHtrZXk6XCJidWlsZFF1ZXJ5UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG8pe3ZhciBpPXRoaXMscj12b2lkIDAscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYodCBpbnN0YW5jZW9mIEFycmF5KXQuZm9yRWFjaChmdW5jdGlvbih0LHIpe3MudGVzdChlKT9vKGUsdCk6aS5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKT9yOlwiXCIpK1wiXVwiLHQsbyl9KTtlbHNlIGlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKSlmb3IociBpbiB0KXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiK3IrXCJdXCIsdFtyXSxvKTtlbHNlIG8oZSx0KX19LHtrZXk6XCJnZXRSb3V0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29udGV4dF8ucHJlZml4K2Usbj1lK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLG89dGhpcy5jb250ZXh0Xy5wcmVmaXgrZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxpPVt0LG4sbyxlXTtmb3IodmFyIHIgaW4gaSlpZihpW3JdaW4gdGhpcy5yb3V0ZXNfKXJldHVybiB0aGlzLnJvdXRlc19baVtyXV07dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpfX0se2tleTpcImdlbmVyYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSxuKXt2YXIgbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLGk9dGhpcy5nZXRSb3V0ZShlKSxyPW58fHt9LHM9dCh7fSxyKSx1PVwiXCIsYz0hMCxhPVwiXCIsZj1cInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcy5nZXRQb3J0KCl8fG51bGw9PT10aGlzLmdldFBvcnQoKT9cIlwiOnRoaXMuZ2V0UG9ydCgpO2lmKGkudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odCl7aWYoXCJ0ZXh0XCI9PT10WzBdKXJldHVybiB1PXRbMV0rdSx2b2lkKGM9ITEpO3tpZihcInZhcmlhYmxlXCIhPT10WzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK3RbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7dmFyIG49aS5kZWZhdWx0cyYmdFszXWluIGkuZGVmYXVsdHM7aWYoITE9PT1jfHwhbnx8dFszXWluIHImJnJbdFszXV0hPWkuZGVmYXVsdHNbdFszXV0pe3ZhciBvPXZvaWQgMDtpZih0WzNdaW4gcilvPXJbdFszXV0sZGVsZXRlIHNbdFszXV07ZWxzZXtpZighbil7aWYoYylyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK3RbM10rJ1wiLicpfW89aS5kZWZhdWx0c1t0WzNdXX12YXIgYT0hMD09PW98fCExPT09b3x8XCJcIj09PW87aWYoIWF8fCFjKXt2YXIgZj1lbmNvZGVVUklDb21wb25lbnQobykucmVwbGFjZSgvJTJGL2csXCIvXCIpO1wibnVsbFwiPT09ZiYmbnVsbD09PW8mJihmPVwiXCIpLHU9dFsxXStmK3V9Yz0hMX1lbHNlIG4mJnRbM11pbiBzJiZkZWxldGUgc1t0WzNdXX19KSxcIlwiPT09dSYmKHU9XCIvXCIpLGkuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm5cInRleHRcIj09PWVbMF0/dm9pZChhPWVbMV0rYSk6dm9pZChcInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIHI/KHQ9cltlWzNdXSxkZWxldGUgc1tlWzNdXSk6aS5kZWZhdWx0cyYmZVszXWluIGkuZGVmYXVsdHMmJih0PWkuZGVmYXVsdHNbZVszXV0pLGE9ZVsxXSt0K2EpKX0pLHU9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCt1LGkucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIGkucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lP3U9aS5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzWzBdJiZ0aGlzLmdldFNjaGVtZSgpIT09aS5zY2hlbWVzWzBdP3U9aS5zY2hlbWVzWzBdK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OmEmJnRoaXMuZ2V0SG9zdCgpIT09YSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKT91PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIithKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3U6bz09PSEwJiYodT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrdGhpcy5nZXRIb3N0KCkrdSksT2JqZWN0LmtleXMocykubGVuZ3RoPjApe3ZhciBsPXZvaWQgMCxoPVtdLHk9ZnVuY3Rpb24oZSx0KXt0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQsdD1udWxsPT09dD9cIlwiOnQsaC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodCkpfTtmb3IobCBpbiBzKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhsLHNbbF0seSk7dT11K1wiP1wiK2guam9pbihcIiZcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpfXJldHVybiB1fX1dLFt7a2V5OlwiZ2V0SW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiByfX0se2tleTpcInNldERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1pLmdldEluc3RhbmNlKCk7dC5zZXRSb3V0aW5nRGF0YShlKX19XSksaX0oKTtpLlJvdXRlLGkuQ29udGV4dDt2YXIgcj1uZXcgaTtyZXR1cm57Um91dGVyOmksUm91dGluZzpyfX0pOyJdLCJzb3VyY2VSb290IjoiIn0=