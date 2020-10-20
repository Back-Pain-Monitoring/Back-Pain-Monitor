(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bodymap-page-bodymap-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bodymap-page/bodymap-page.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bodymap-page/bodymap-page.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBodymapPageBodymapPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>bodymap-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--Back button to datetime page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"back\" routerLink=\"/datetime\">\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!--Forward Button to symptoms page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"forward\" routerLink=\"/symptoms\">\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/bodymap-page/bodymap-page-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/bodymap-page/bodymap-page-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: BodymapPagePageRoutingModule */

    /***/
    function srcAppBodymapPageBodymapPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BodymapPagePageRoutingModule", function () {
        return BodymapPagePageRoutingModule;
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


      var _bodymap_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bodymap-page.page */
      "./src/app/bodymap-page/bodymap-page.page.ts");

      var routes = [{
        path: '',
        component: _bodymap_page_page__WEBPACK_IMPORTED_MODULE_3__["BodymapPagePage"]
      }];

      var BodymapPagePageRoutingModule = function BodymapPagePageRoutingModule() {
        _classCallCheck(this, BodymapPagePageRoutingModule);
      };

      BodymapPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BodymapPagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/bodymap-page/bodymap-page.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/bodymap-page/bodymap-page.module.ts ***!
      \*****************************************************/

    /*! exports provided: BodymapPagePageModule */

    /***/
    function srcAppBodymapPageBodymapPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BodymapPagePageModule", function () {
        return BodymapPagePageModule;
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


      var _bodymap_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bodymap-page-routing.module */
      "./src/app/bodymap-page/bodymap-page-routing.module.ts");
      /* harmony import */


      var _bodymap_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bodymap-page.page */
      "./src/app/bodymap-page/bodymap-page.page.ts");

      var BodymapPagePageModule = function BodymapPagePageModule() {
        _classCallCheck(this, BodymapPagePageModule);
      };

      BodymapPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bodymap_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["BodymapPagePageRoutingModule"]],
        declarations: [_bodymap_page_page__WEBPACK_IMPORTED_MODULE_6__["BodymapPagePage"]]
      })], BodymapPagePageModule);
      /***/
    },

    /***/
    "./src/app/bodymap-page/bodymap-page.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/bodymap-page/bodymap-page.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBodymapPageBodymapPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHltYXAtcGFnZS9ib2R5bWFwLXBhZ2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/bodymap-page/bodymap-page.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/bodymap-page/bodymap-page.page.ts ***!
      \***************************************************/

    /*! exports provided: BodymapPagePage */

    /***/
    function srcAppBodymapPageBodymapPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BodymapPagePage", function () {
        return BodymapPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BodymapPagePage = /*#__PURE__*/function () {
        function BodymapPagePage() {
          _classCallCheck(this, BodymapPagePage);
        }

        _createClass(BodymapPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BodymapPagePage;
      }();

      BodymapPagePage.ctorParameters = function () {
        return [];
      };

      BodymapPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bodymap-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bodymap-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bodymap-page/bodymap-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bodymap-page.page.scss */
        "./src/app/bodymap-page/bodymap-page.page.scss"))["default"]]
      })], BodymapPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bodymap-page-bodymap-page-module-es5.js.map