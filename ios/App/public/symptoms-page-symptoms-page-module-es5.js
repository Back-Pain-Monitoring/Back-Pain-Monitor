(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["symptoms-page-symptoms-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/symptoms-page/symptoms-page.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/symptoms-page/symptoms-page.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSymptomsPageSymptomsPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Symptoms</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Pain Intensity</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-range min=\"0\" max=\"10\" step=\"1\" snaps=\"true\" pin=\"true\" [(ngModel)]=\"intensity\">\n        <ion-label slot=\"start\">0</ion-label>\n        <ion-label slot=\"end\">10</ion-label>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label id=\"pain-intensity-description\">Mild</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pain type</ion-label>\n      <ion-select cancelText=\"Cancel\" okText=\"Ok\" [(ngModel)]=\"painType\">\n        <ion-select-option value=\"none\">None</ion-select-option>\n        <ion-select-option value=\"aching\">Aching</ion-select-option>\n        <ion-select-option value=\"burning\">Burning</ion-select-option>\n        <ion-select-option value=\"cramping\">Cramping</ion-select-option>\n        <ion-select-option value=\"numbness\">Numbness</ion-select-option>\n        <ion-select-option value=\"radiating\">Radiating</ion-select-option>\n        <ion-select-option value=\"shooting\">Shooting</ion-select-option>\n        <ion-select-option value=\"stabbing\">Stabbing</ion-select-option>\n        <ion-select-option value=\"tingling\">Tingling</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pain duration</ion-label>\n      <ion-input type=\"number\" value=\"30\" [(ngModel)]=\"duration\"></ion-input>\n      <ion-label>minutes</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Cause of pain</ion-label>\n      <ion-input type=\"text\" value=\"unknown\" [(ngModel)]=\"cause\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>When do you feel pain?</ion-label>\n      <ion-select multiple=\"true\" [(ngModel)]=\"mobility\">\n        <ion-select-option value=\"moving\">Moving</ion-select-option>\n        <ion-select-option value=\"resting\">Resting</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Is the pain constant or intermittent?</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-radio-group [(ngModel)]=\"is_constant\">\n        <ion-item>\n          <ion-label>Constant</ion-label>\n          <ion-radio slot=\"start\" value=\"true\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Intermittent</ion-label>\n          <ion-radio slot=\"start\" value=\"false\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-item>\n    <ion-item>\n      <ion-button (click)=\"updateLog()\">Remove this button after testing</ion-button>\n    </ion-item>\n  </ion-list>\n\n  <!--Back button to bodymap page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"back\" routerLink=\"/bodymap\" (click)=\"updateLog()\">\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!--Forward Button to redflags page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"forward\" routerLink=\"/redflags\" (click)=\"updateLog()\">\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/symptoms-page/symptoms-page-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/symptoms-page/symptoms-page-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: SymptomsPagePageRoutingModule */

    /***/
    function srcAppSymptomsPageSymptomsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomsPagePageRoutingModule", function () {
        return SymptomsPagePageRoutingModule;
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


      var _symptoms_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./symptoms-page.page */
      "./src/app/symptoms-page/symptoms-page.page.ts");

      var routes = [{
        path: '',
        component: _symptoms_page_page__WEBPACK_IMPORTED_MODULE_3__["SymptomsPagePage"]
      }];

      var SymptomsPagePageRoutingModule = function SymptomsPagePageRoutingModule() {
        _classCallCheck(this, SymptomsPagePageRoutingModule);
      };

      SymptomsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SymptomsPagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/symptoms-page/symptoms-page.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/symptoms-page/symptoms-page.module.ts ***!
      \*******************************************************/

    /*! exports provided: SymptomsPagePageModule */

    /***/
    function srcAppSymptomsPageSymptomsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomsPagePageModule", function () {
        return SymptomsPagePageModule;
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


      var _symptoms_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./symptoms-page-routing.module */
      "./src/app/symptoms-page/symptoms-page-routing.module.ts");
      /* harmony import */


      var _symptoms_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./symptoms-page.page */
      "./src/app/symptoms-page/symptoms-page.page.ts");

      var SymptomsPagePageModule = function SymptomsPagePageModule() {
        _classCallCheck(this, SymptomsPagePageModule);
      };

      SymptomsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _symptoms_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SymptomsPagePageRoutingModule"]],
        declarations: [_symptoms_page_page__WEBPACK_IMPORTED_MODULE_6__["SymptomsPagePage"]]
      })], SymptomsPagePageModule);
      /***/
    },

    /***/
    "./src/app/symptoms-page/symptoms-page.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/symptoms-page/symptoms-page.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSymptomsPageSymptomsPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5bXB0b21zLXBhZ2Uvc3ltcHRvbXMtcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/symptoms-page/symptoms-page.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/symptoms-page/symptoms-page.page.ts ***!
      \*****************************************************/

    /*! exports provided: SymptomsPagePage */

    /***/
    function srcAppSymptomsPageSymptomsPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomsPagePage", function () {
        return SymptomsPagePage;
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

      var SymptomsPagePage = /*#__PURE__*/function () {
        function SymptomsPagePage(dataService) {
          _classCallCheck(this, SymptomsPagePage);

          this.dataService = dataService;
        }

        _createClass(SymptomsPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateLog",
          value: function updateLog() {
            this.dataService.currentLogIntensity = this.intensity;
            this.dataService.currentLogType = this.painType;
            this.dataService.currentLogDuration = this.duration;
            this.dataService.currentLogMobility = this.mobility;
            this.dataService.currentLogCause = this.cause;
            this.dataService.currentLogIs_constant = this.is_constant === "true";
            this.dataService.printLogEntry();
          }
        }, {
          key: "updateUIFromLog",
          value: function updateUIFromLog() {
            this.intensity = this.dataService.currentLogIntensity;
            this.painType = this.dataService.currentLogType;
            this.duration = this.dataService.currentLogDuration;
            this.mobility = this.dataService.currentLogMobility;
            this.cause = this.dataService.currentLogCause;
            this.is_constant = this.dataService.currentLogIs_constant ? "true" : "false";
          } // look at the UI to see the changes were made appropriately. Can trigger this function by attaching it to a button.

        }, {
          key: "testDataBinding",
          value: function testDataBinding() {
            this.intensity = 10;
            this.painType = "numbness";
            this.duration = 44;
            this.cause = "backpack";
            this.mobility = ["moving", "resting"];
            this.is_constant = "true";
          }
        }]);

        return SymptomsPagePage;
      }();

      SymptomsPagePage.ctorParameters = function () {
        return [{
          type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_2__["LogDataService"]
        }];
      };

      SymptomsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-symptoms-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./symptoms-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/symptoms-page/symptoms-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./symptoms-page.page.scss */
        "./src/app/symptoms-page/symptoms-page.page.scss"))["default"]]
      })], SymptomsPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=symptoms-page-symptoms-page-module-es5.js.map