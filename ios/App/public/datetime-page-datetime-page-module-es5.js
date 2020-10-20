(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datetime-page-datetime-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/datetime-page/datetime-page.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datetime-page/datetime-page.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDatetimePageDatetimePagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Date and time</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        Start time of pain\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-datetime displayFormat=\"D MMM YYYY H:mm\" placeholder=\"When did the pain start?\" [(ngModel)]=\"datetime\">\n        </ion-datetime>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--Back button to home page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"back\" routerLink=\"/home\" (click)=\"updateLog()\">\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!--Forward Button to bodymap page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"forward\" routerLink=\"/bodymap\" (click)=\"updateLog()\">\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/datetime-page/datetime-page-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/datetime-page/datetime-page-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: DatetimePagePageRoutingModule */

    /***/
    function srcAppDatetimePageDatetimePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatetimePagePageRoutingModule", function () {
        return DatetimePagePageRoutingModule;
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


      var _datetime_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./datetime-page.page */
      "./src/app/datetime-page/datetime-page.page.ts");

      var routes = [{
        path: '',
        component: _datetime_page_page__WEBPACK_IMPORTED_MODULE_3__["DatetimePagePage"]
      }];

      var DatetimePagePageRoutingModule = function DatetimePagePageRoutingModule() {
        _classCallCheck(this, DatetimePagePageRoutingModule);
      };

      DatetimePagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DatetimePagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/datetime-page/datetime-page.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/datetime-page/datetime-page.module.ts ***!
      \*******************************************************/

    /*! exports provided: DatetimePagePageModule */

    /***/
    function srcAppDatetimePageDatetimePageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatetimePagePageModule", function () {
        return DatetimePagePageModule;
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


      var _datetime_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./datetime-page-routing.module */
      "./src/app/datetime-page/datetime-page-routing.module.ts");
      /* harmony import */


      var _datetime_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./datetime-page.page */
      "./src/app/datetime-page/datetime-page.page.ts");

      var DatetimePagePageModule = function DatetimePagePageModule() {
        _classCallCheck(this, DatetimePagePageModule);
      };

      DatetimePagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _datetime_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatetimePagePageRoutingModule"]],
        declarations: [_datetime_page_page__WEBPACK_IMPORTED_MODULE_6__["DatetimePagePage"]]
      })], DatetimePagePageModule);
      /***/
    },

    /***/
    "./src/app/datetime-page/datetime-page.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/datetime-page/datetime-page.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDatetimePageDatetimePagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGV0aW1lLXBhZ2UvZGF0ZXRpbWUtcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/datetime-page/datetime-page.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/datetime-page/datetime-page.page.ts ***!
      \*****************************************************/

    /*! exports provided: DatetimePagePage */

    /***/
    function srcAppDatetimePageDatetimePagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatetimePagePage", function () {
        return DatetimePagePage;
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


      var _services_log_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/log-data.service */
      "./src/app/services/log-data.service.ts");

      var DatetimePagePage = /*#__PURE__*/function () {
        function DatetimePagePage(dataService) {
          _classCallCheck(this, DatetimePagePage);

          this.dataService = dataService;
        }

        _createClass(DatetimePagePage, [{
          key: "updateLog",
          value: function updateLog() {
            this.dataService.currentLogDatetime = this.datetime;
            this.dataService.printLogEntry();
          }
        }, {
          key: "updateUIFromLog",
          value: function updateUIFromLog() {
            this.datetime = this.dataService.currentLogDatetime;
          }
        }, {
          key: "testDataBinding",
          value: function testDataBinding() {
            this.datetime = new Date();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DatetimePagePage;
      }();

      DatetimePagePage.ctorParameters = function () {
        return [{
          type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_2__["LogDataService"]
        }];
      };

      DatetimePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datetime-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./datetime-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/datetime-page/datetime-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./datetime-page.page.scss */
        "./src/app/datetime-page/datetime-page.page.scss"))["default"]]
      })], DatetimePagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=datetime-page-datetime-page-module-es5.js.map