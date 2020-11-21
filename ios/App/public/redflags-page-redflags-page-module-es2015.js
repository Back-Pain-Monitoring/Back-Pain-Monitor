(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redflags-page-redflags-page-module"],{

/***/ "7NiA":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redflags-page/redflags-page.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title text-wrap>Do you have any of these?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of form | keyvalue\">\n      <ion-label text-wrap>{{item.key}}</ion-label>\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"form[item.key]\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"updateLog()\">\n    <app-log-nav-button direction=\"back\" link=\"/symptoms\"></app-log-nav-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"updateLog()\">\n    <app-log-nav-button direction=\"forward\" link=\"/comments\">\n    </app-log-nav-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "7j3R":
/*!***************************************************************!*\
  !*** ./src/app/redflags-page/redflags-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RedflagsPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedflagsPagePageRoutingModule", function() { return RedflagsPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _redflags_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redflags-page.page */ "Cajt");




const routes = [
    {
        path: '',
        component: _redflags_page_page__WEBPACK_IMPORTED_MODULE_3__["RedflagsPagePage"]
    }
];
let RedflagsPagePageRoutingModule = class RedflagsPagePageRoutingModule {
};
RedflagsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RedflagsPagePageRoutingModule);



/***/ }),

/***/ "Cajt":
/*!*****************************************************!*\
  !*** ./src/app/redflags-page/redflags-page.page.ts ***!
  \*****************************************************/
/*! exports provided: RedflagsPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedflagsPagePage", function() { return RedflagsPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_redflags_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./redflags-page.page.html */ "7NiA");
/* harmony import */ var _redflags_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redflags-page.page.scss */ "KvD0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/log-data.service */ "YKFw");





let RedflagsPagePage = class RedflagsPagePage {
    constructor(dataService) {
        this.dataService = dataService;
        this.form = {};
    }
    ngOnInit() {
        this.updateUIFromLog();
    }
    updateLog() {
        const symptoms = [];
        for (const flag in this.form) {
            if (this.form[flag]) {
                symptoms.push(flag);
            }
        }
        this.dataService.currentLogRedflag_symptoms = symptoms;
        this.dataService.updateIsEntered(true);
    }
    updateUIFromLog() {
        this.dataService.updateIsEntered(false);
        this.dataService.redflags.forEach(flag => {
            this.form[flag] = false;
        });
        this.dataService.currentLogRedflag_symptoms.forEach(flag => {
            this.form[flag] = true;
        });
    }
};
RedflagsPagePage.ctorParameters = () => [
    { type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__["LogDataService"] }
];
RedflagsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-redflags-page',
        template: _raw_loader_redflags_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_redflags_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RedflagsPagePage);



/***/ }),

/***/ "KvD0":
/*!*******************************************************!*\
  !*** ./src/app/redflags-page/redflags-page.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGZsYWdzLXBhZ2UvcmVkZmxhZ3MtcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "n05n":
/*!*******************************************************!*\
  !*** ./src/app/redflags-page/redflags-page.module.ts ***!
  \*******************************************************/
/*! exports provided: RedflagsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedflagsPagePageModule", function() { return RedflagsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _redflags_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redflags-page-routing.module */ "7j3R");
/* harmony import */ var _redflags_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redflags-page.page */ "Cajt");
/* harmony import */ var _components_log_nav_button_log_nav_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/log-nav-button/log-nav-button.component */ "q3LG");








let RedflagsPagePageModule = class RedflagsPagePageModule {
};
RedflagsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _redflags_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedflagsPagePageRoutingModule"]
        ],
        declarations: [_redflags_page_page__WEBPACK_IMPORTED_MODULE_6__["RedflagsPagePage"], _components_log_nav_button_log_nav_button_component__WEBPACK_IMPORTED_MODULE_7__["LogNavButtonComponent"]]
    })
], RedflagsPagePageModule);



/***/ })

}]);
//# sourceMappingURL=redflags-page-redflags-page-module-es2015.js.map