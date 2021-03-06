(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["symptoms-page-symptoms-page-module"],{

/***/ "Mifg":
/*!*******************************************************!*\
  !*** ./src/app/symptoms-page/symptoms-page.module.ts ***!
  \*******************************************************/
/*! exports provided: SymptomsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsPagePageModule", function() { return SymptomsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _symptoms_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symptoms-page-routing.module */ "tyeb");
/* harmony import */ var _symptoms_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symptoms-page.page */ "gx8U");
/* harmony import */ var _components_log_nav_button_log_nav_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/log-nav-button/log-nav-button.component */ "q3LG");








let SymptomsPagePageModule = class SymptomsPagePageModule {
};
SymptomsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _symptoms_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SymptomsPagePageRoutingModule"]
        ],
        declarations: [_symptoms_page_page__WEBPACK_IMPORTED_MODULE_6__["SymptomsPagePage"], _components_log_nav_button_log_nav_button_component__WEBPACK_IMPORTED_MODULE_7__["LogNavButtonComponent"]]
    })
], SymptomsPagePageModule);



/***/ }),

/***/ "RjFf":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/symptoms-page/symptoms-page.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Symptoms</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Pain Intensity</ion-label>\n      <ion-label>{{intensityTitle}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-range min=\"0\" max=\"10\" step=\"1\" snaps=\"true\" pin=\"true\" [ngModel]=\"intensity\"\n        (ngModelChange)=\"onIntensityChange($event)\">\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">{{intensityDescription}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pain type</ion-label>\n      <ion-icon class=\"required-icon\" name=\"alert-circle-outline\" *ngIf=\"painType === undefined\" color=\"danger\">\n      </ion-icon>\n      <ion-select [(ngModel)]=\"painType\">\n        <ion-select-option value=\"none\">None</ion-select-option>\n        <ion-select-option value=\"aching\">Aching</ion-select-option>\n        <ion-select-option value=\"burning\">Burning</ion-select-option>\n        <ion-select-option value=\"cramping\">Cramping</ion-select-option>\n        <ion-select-option value=\"numbness\">Numbness</ion-select-option>\n        <ion-select-option value=\"radiating\">Radiating</ion-select-option>\n        <ion-select-option value=\"shooting\">Shooting</ion-select-option>\n        <ion-select-option value=\"stabbing\">Stabbing</ion-select-option>\n        <ion-select-option value=\"tingling\">Tingling</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Have you had this pain before?</ion-label>\n      <ion-checkbox [(ngModel)]=\"painBefore\"></ion-checkbox>\n    </ion-item>\n    <ion-item *ngIf=\"painBefore\">\n      <ion-label>How many times before?</ion-label>\n      <ion-icon class=\"required-icon\" name=\"alert-circle-outline\" *ngIf=\"timesBefore === undefined || timesBefore < 1\"\n        color=\"danger\">\n      </ion-icon>\n      <ion-input type=\"number\" [(ngModel)]=\"timesBefore\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Does the pain keep you up at night?</ion-label>\n      <ion-checkbox [(ngModel)]=\"nightPain\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>What makes the pain worse?</ion-label>\n      <ion-select multiple=\"true\" [(ngModel)]=\"worse\">\n        <ion-select-option *ngFor=\"let activity of dataService.activities\">{{activity}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>What makes the pain better?</ion-label>\n      <ion-select multiple=\"true\" [(ngModel)]=\"better\">\n        <ion-select-option *ngFor=\"let activity of dataService.activities\">{{activity}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Cause of pain</ion-label>\n      <ion-input type=\"text\" value=\"unknown\" [(ngModel)]=\"cause\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>When do you feel pain?</ion-label>\n      <ion-icon class=\"required-icon\" name=\"alert-circle-outline\"\n        *ngIf=\"mobility === undefined || mobility.length === 0\" color=\"danger\">\n      </ion-icon>\n      <ion-select multiple=\"true\" [(ngModel)]=\"mobility\">\n        <ion-select-option value=\"moving\">Moving</ion-select-option>\n        <ion-select-option value=\"resting\">Resting</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Is the pain constant or intermittent?</ion-label>\n      <ion-icon class=\"required-icon\" name=\"alert-circle-outline\" *ngIf=\"is_constant === undefined\" color=\"danger\">\n      </ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-radio-group [(ngModel)]=\"is_constant\">\n        <ion-item>\n          <ion-label>Constant</ion-label>\n          <ion-radio slot=\"start\" value=\"true\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Intermittent</ion-label>\n          <ion-radio slot=\"start\" value=\"false\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"updateLog()\">\n    <app-log-nav-button direction=\"back\" link=\"/bodymap\"></app-log-nav-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"updateLog()\">\n    <app-log-nav-button direction=\"forward\" link=\"/redflags\">\n    </app-log-nav-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "gx8U":
/*!*****************************************************!*\
  !*** ./src/app/symptoms-page/symptoms-page.page.ts ***!
  \*****************************************************/
/*! exports provided: SymptomsPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsPagePage", function() { return SymptomsPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_symptoms_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./symptoms-page.page.html */ "RjFf");
/* harmony import */ var _symptoms_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symptoms-page.page.scss */ "uX/Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/log-data.service */ "YKFw");





let SymptomsPagePage = class SymptomsPagePage {
    constructor(dataService) {
        this.dataService = dataService;
        // pain scale from https://www.reddit.com/r/ChronicPain/comments/5ouyu4/pain_scale_for_people_in_chronic_pain/
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
            10: ["Unable to move", "I am in bed and can't move due to my pain. I need someone to take me to the emergency room to get help for my pain."],
        };
        this.painBefore = false;
        this.nightPain = false;
        this.worse = [];
        this.better = [];
        this.intensityTitle = this.intensityInfo[0][0];
        this.intensityDescription = this.intensityInfo[0][1];
    }
    ngOnInit() {
        this.updateUIFromLog();
    }
    onIntensityChange(newIntensity) {
        if (!(newIntensity in this.intensityInfo)) {
            newIntensity = 0;
        }
        this.intensity = newIntensity;
        this.intensityTitle = this.intensityInfo[newIntensity][0];
        this.intensityDescription = this.intensityInfo[newIntensity][1];
    }
    updateLog() {
        this.dataService.currentLogIntensity = this.intensity;
        this.dataService.currentLogType = this.painType;
        this.dataService.currentLogTimesBefore = this.painBefore ? this.timesBefore : 0;
        this.dataService.currentLogNightPain = this.nightPain;
        this.dataService.currentLogWorse = this.worse;
        this.dataService.currentLogBetter = this.better;
        this.dataService.currentLogMobility = this.mobility;
        this.dataService.currentLogCause = this.cause;
        this.dataService.currentLogIs_constant = this.is_constant === "true";
        this.dataService.updateIsEntered(true);
    }
    updateUIFromLog() {
        this.dataService.updateIsEntered(false);
        if (this.dataService.currentLogIntensity !== undefined) {
            this.onIntensityChange(this.dataService.currentLogIntensity);
        }
        else {
            this.onIntensityChange(0);
        }
        this.painType = this.dataService.currentLogType;
        this.painBefore = this.dataService.currentLogTimesBefore > 0;
        this.timesBefore = this.dataService.currentLogTimesBefore;
        this.nightPain = this.dataService.currentLogNightPain;
        this.worse = this.dataService.currentLogWorse;
        this.better = this.dataService.currentLogBetter;
        this.mobility = this.dataService.currentLogMobility;
        this.cause = this.dataService.currentLogCause;
        this.is_constant = this.dataService.currentLogIs_constant === false ? "false" : "true";
    }
};
SymptomsPagePage.ctorParameters = () => [
    { type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__["LogDataService"] }
];
SymptomsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-symptoms-page',
        template: _raw_loader_symptoms_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_symptoms_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SymptomsPagePage);



/***/ }),

/***/ "tyeb":
/*!***************************************************************!*\
  !*** ./src/app/symptoms-page/symptoms-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SymptomsPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsPagePageRoutingModule", function() { return SymptomsPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _symptoms_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symptoms-page.page */ "gx8U");




const routes = [
    {
        path: '',
        component: _symptoms_page_page__WEBPACK_IMPORTED_MODULE_3__["SymptomsPagePage"]
    }
];
let SymptomsPagePageRoutingModule = class SymptomsPagePageRoutingModule {
};
SymptomsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SymptomsPagePageRoutingModule);



/***/ }),

/***/ "uX/Q":
/*!*******************************************************!*\
  !*** ./src/app/symptoms-page/symptoms-page.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5bXB0b21zLXBhZ2Uvc3ltcHRvbXMtcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=symptoms-page-symptoms-page-module-es2015.js.map