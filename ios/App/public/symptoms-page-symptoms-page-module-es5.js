(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["symptoms-page-symptoms-page-module"], {
    /***/
    "Mifg":
    /*!*******************************************************!*\
      !*** ./src/app/symptoms-page/symptoms-page.module.ts ***!
      \*******************************************************/

    /*! exports provided: SymptomsPagePageModule */

    /***/
    function Mifg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomsPagePageModule", function () {
        return SymptomsPagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _symptoms_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./symptoms-page-routing.module */
      "tyeb");
      /* harmony import */


      var _symptoms_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./symptoms-page.page */
      "gx8U");

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
    "RjFf":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/symptoms-page/symptoms-page.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function RjFf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Symptoms</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Pain Intensity</ion-label>\r\n      <ion-label>{{intensityTitle}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-range min=\"0\" max=\"10\" step=\"1\" snaps=\"true\" pin=\"true\" [ngModel]=\"intensity\"\r\n        (ngModelChange)=\"onIntensityChange($event)\">\r\n      </ion-range>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"ion-text-wrap\">{{intensityDescription}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Pain type</ion-label>\r\n      <ion-select [(ngModel)]=\"painType\">\r\n        <ion-select-option value=\"none\">None</ion-select-option>\r\n        <ion-select-option value=\"aching\">Aching</ion-select-option>\r\n        <ion-select-option value=\"burning\">Burning</ion-select-option>\r\n        <ion-select-option value=\"cramping\">Cramping</ion-select-option>\r\n        <ion-select-option value=\"numbness\">Numbness</ion-select-option>\r\n        <ion-select-option value=\"radiating\">Radiating</ion-select-option>\r\n        <ion-select-option value=\"shooting\">Shooting</ion-select-option>\r\n        <ion-select-option value=\"stabbing\">Stabbing</ion-select-option>\r\n        <ion-select-option value=\"tingling\">Tingling</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Have you had this pain before?</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"painBefore\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"painBefore\">\r\n      <ion-label>How many times before?</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"timesBefore\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Does the pain keep you up at night?</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"nightPain\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>What makes the pain worse?</ion-label>\r\n      <ion-select multiple=\"true\" [(ngModel)]=\"worse\">\r\n        <ion-select-option *ngFor=\"let activity of dataService.activities\">{{activity}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>What makes the pain better?</ion-label>\r\n      <ion-select multiple=\"true\" [(ngModel)]=\"better\">\r\n        <ion-select-option *ngFor=\"let activity of dataService.activities\">{{activity}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Cause of pain</ion-label>\r\n      <ion-input type=\"text\" value=\"unknown\" [(ngModel)]=\"cause\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>When do you feel pain?</ion-label>\r\n      <ion-select multiple=\"true\" [(ngModel)]=\"mobility\">\r\n        <ion-select-option value=\"moving\">Moving</ion-select-option>\r\n        <ion-select-option value=\"resting\">Resting</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Is the pain constant or intermittent?</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-radio-group [(ngModel)]=\"is_constant\">\r\n        <ion-item>\r\n          <ion-label>Constant</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Intermittent</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!--Back button to bodymap page-->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button color=\"success\" routerDirection=\"back\" routerLink=\"/bodymap\" (click)=\"updateLog()\">\r\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"dark\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!--Forward Button to redflags page-->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"success\" routerDirection=\"forward\" routerLink=\"/redflags\" (click)=\"updateLog()\">\r\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"dark\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "gx8U":
    /*!*****************************************************!*\
      !*** ./src/app/symptoms-page/symptoms-page.page.ts ***!
      \*****************************************************/

    /*! exports provided: SymptomsPagePage */

    /***/
    function gx8U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomsPagePage", function () {
        return SymptomsPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_symptoms_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./symptoms-page.page.html */
      "RjFf");
      /* harmony import */


      var _symptoms_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./symptoms-page.page.scss */
      "uX/Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/log-data.service */
      "YKFw");

      var SymptomsPagePage = /*#__PURE__*/function () {
        function SymptomsPagePage(dataService) {
          _classCallCheck(this, SymptomsPagePage);

          this.dataService = dataService; // pain scale from https://www.reddit.com/r/ChronicPain/comments/5ouyu4/pain_scale_for_people_in_chronic_pain/

          this.intensityInfo = {
            0: ["No pain", "I have no pain."],
            1: ["Minimal", "My pain is hardly noticable."],
            2: ["Mild", "I have a low level of pain. I am aware of my pain only when I pay attention to it."],
            3: ["Uncomfortable", "My pain bothers me but I can ignore it most of the time"],
            4: ["Moderate", "I am constantly aware of my pain but I can continue most activities"],
            5: ["Distracting", "I think about my pain most of the time. I cannot do some of the activities I need to do each day because of the pain."],
            6: ["Distressing", "I think about my pain all of the time. I give up many activities because of my pain."],
            7: ["Unmanagable", "I am in pain most of the time. It keeps me from doing most activities."],
            8: ["Intense", "My pain is so severe that it is hard to think of anything else. Talking and listening are difficult."],
            9: ["Severe", "My pain is all that I can think about. I can barely talk or move because of the pain."],
            10: ["Unable to move", "I am in bed and can't move due to my pain. I need someone to take me to the emergency room to get help for my pain."]
          };
          this.painBefore = false;
          this.nightPain = false;
          this.worse = [];
          this.better = [];
          this.intensityTitle = this.intensityInfo[0][0];
          this.intensityDescription = this.intensityInfo[0][1];
        }

        _createClass(SymptomsPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateUIFromLog();
          }
        }, {
          key: "onIntensityChange",
          value: function onIntensityChange(newIntensity) {
            if (!(newIntensity in this.intensityInfo)) {
              newIntensity = 0;
            }

            this.intensity = newIntensity;
            this.intensityTitle = this.intensityInfo[newIntensity][0];
            this.intensityDescription = this.intensityInfo[newIntensity][1];
          }
        }, {
          key: "updateLog",
          value: function updateLog() {
            this.dataService.currentLogIntensity = this.intensity;
            this.dataService.currentLogType = this.painType;
            this.dataService.currentLogTimesBefore = this.painBefore ? this.timesBefore : 0;
            this.dataService.currentLogNightPain = this.nightPain;
            this.dataService.currentLogWorse = this.worse;
            this.dataService.currentLogBetter = this.better;
            this.dataService.currentLogMobility = this.mobility;
            this.dataService.currentLogCause = this.cause;
            this.dataService.currentLogIs_constant = this.is_constant === "true";
            console.log("updated log");
            this.dataService.printLogEntry();
          }
        }, {
          key: "updateUIFromLog",
          value: function updateUIFromLog() {
            console.log("updating UI from dataservice");
            this.dataService.printLogEntry();

            if (this.dataService.currentLogIntensity !== undefined) {
              this.onIntensityChange(this.dataService.currentLogIntensity);
            }

            this.painType = this.dataService.currentLogType;
            this.painBefore = this.dataService.currentLogTimesBefore > 0;
            this.timesBefore = this.dataService.currentLogTimesBefore;
            this.nightPain = this.dataService.currentLogNightPain;
            this.worse = this.dataService.currentLogWorse;
            this.better = this.dataService.currentLogBetter;
            this.mobility = this.dataService.currentLogMobility;
            this.cause = this.dataService.currentLogCause;
            this.is_constant = this.dataService.currentLogIs_constant ? "true" : "false";
          } // look at the UI to see the changes were made appropriately. Can trigger this function by attaching it to a button.

        }, {
          key: "testDataBinding",
          value: function testDataBinding() {
            this.intensity = 10;
            this.painType = "numbness";
            this.cause = "backpack";
            this.mobility = ["moving", "resting"];
            this.is_constant = "true";
          }
        }]);

        return SymptomsPagePage;
      }();

      SymptomsPagePage.ctorParameters = function () {
        return [{
          type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__["LogDataService"]
        }];
      };

      SymptomsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-symptoms-page',
        template: _raw_loader_symptoms_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_symptoms_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SymptomsPagePage);
      /***/
    },

    /***/
    "tyeb":
    /*!***************************************************************!*\
      !*** ./src/app/symptoms-page/symptoms-page-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: SymptomsPagePageRoutingModule */

    /***/
    function tyeb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomsPagePageRoutingModule", function () {
        return SymptomsPagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _symptoms_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./symptoms-page.page */
      "gx8U");

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
    "uX/Q":
    /*!*******************************************************!*\
      !*** ./src/app/symptoms-page/symptoms-page.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function uXQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5bXB0b21zLXBhZ2Uvc3ltcHRvbXMtcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=symptoms-page-symptoms-page-module-es5.js.map