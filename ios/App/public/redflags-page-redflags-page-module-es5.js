(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redflags-page-redflags-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/redflags-page/redflags-page.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redflags-page/redflags-page.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRedflagsPageRedflagsPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>redflags-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--Back button to symptoms page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"back\" routerLink=\"/symptoms\">\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!--Forward Button to comments page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"forward\" routerLink=\"/comments\">\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/redflags-page/redflags-page-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/redflags-page/redflags-page-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: RedflagsPagePageRoutingModule */

    /***/
    function srcAppRedflagsPageRedflagsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedflagsPagePageRoutingModule", function () {
        return RedflagsPagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _redflags_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redflags-page.page */
      "./src/app/redflags-page/redflags-page.page.ts");

      var routes = [{
        path: '',
        component: _redflags_page_page__WEBPACK_IMPORTED_MODULE_3__["RedflagsPagePage"]
      }];

      var RedflagsPagePageRoutingModule = function RedflagsPagePageRoutingModule() {
        _classCallCheck(this, RedflagsPagePageRoutingModule);
      };

      RedflagsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedflagsPagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/redflags-page/redflags-page.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/redflags-page/redflags-page.module.ts ***!
      \*******************************************************/

    /*! exports provided: RedflagsPagePageModule */

    /***/
    function srcAppRedflagsPageRedflagsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedflagsPagePageModule", function () {
        return RedflagsPagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _redflags_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redflags-page-routing.module */
      "./src/app/redflags-page/redflags-page-routing.module.ts");
      /* harmony import */


      var _redflags_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redflags-page.page */
      "./src/app/redflags-page/redflags-page.page.ts");

      var RedflagsPagePageModule = function RedflagsPagePageModule() {
        _classCallCheck(this, RedflagsPagePageModule);
      };

      RedflagsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redflags_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedflagsPagePageRoutingModule"]],
        declarations: [_redflags_page_page__WEBPACK_IMPORTED_MODULE_6__["RedflagsPagePage"]]
      })], RedflagsPagePageModule);
      /***/
    },

    /***/
    "./src/app/redflags-page/redflags-page.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/redflags-page/redflags-page.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRedflagsPageRedflagsPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGZsYWdzLXBhZ2UvcmVkZmxhZ3MtcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/redflags-page/redflags-page.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/redflags-page/redflags-page.page.ts ***!
      \*****************************************************/

    /*! exports provided: RedflagsPagePage */

    /***/
    function srcAppRedflagsPageRedflagsPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedflagsPagePage", function () {
        return RedflagsPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RedflagsPagePage = /*#__PURE__*/function () {
        function RedflagsPagePage() {
          _classCallCheck(this, RedflagsPagePage);
        }

        _createClass(RedflagsPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RedflagsPagePage;
      }();

      RedflagsPagePage.ctorParameters = function () {
        return [];
      };

      RedflagsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redflags-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./redflags-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/redflags-page/redflags-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./redflags-page.page.scss */
        "./src/app/redflags-page/redflags-page.page.scss"))["default"]]
      })], RedflagsPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=redflags-page-redflags-page-module-es5.js.map