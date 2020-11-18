(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datetime-page-datetime-page-module"],{

/***/ "DAps":
/*!*****************************************************!*\
  !*** ./src/app/datetime-page/datetime-page.page.ts ***!
  \*****************************************************/
/*! exports provided: DatetimePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePagePage", function() { return DatetimePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datetime_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datetime-page.page.html */ "wTBc");
/* harmony import */ var _datetime_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datetime-page.page.scss */ "N9rw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/log-data.service */ "YKFw");





let DatetimePagePage = class DatetimePagePage {
    constructor(dataService) {
        this.dataService = dataService;
    }
    updateLog() {
        if (this.datetime !== undefined) {
            this.dataService.currentLogDatetime = new Date(this.datetime);
        }
    }
    updateUIFromLog() {
        if (this.dataService.currentLogDatetime !== undefined) {
            this.datetime = this.dataService.currentLogDatetime.toISOString();
        }
    }
    testDataBinding() {
        this.datetime = new Date().toISOString();
    }
    ngOnInit() {
        this.updateUIFromLog();
    }
};
DatetimePagePage.ctorParameters = () => [
    { type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__["LogDataService"] }
];
DatetimePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-datetime-page',
        template: _raw_loader_datetime_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_datetime_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DatetimePagePage);



/***/ }),

/***/ "Dvw7":
/*!***************************************************************!*\
  !*** ./src/app/datetime-page/datetime-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DatetimePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePagePageRoutingModule", function() { return DatetimePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datetime_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datetime-page.page */ "DAps");




const routes = [
    {
        path: '',
        component: _datetime_page_page__WEBPACK_IMPORTED_MODULE_3__["DatetimePagePage"]
    }
];
let DatetimePagePageRoutingModule = class DatetimePagePageRoutingModule {
};
DatetimePagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatetimePagePageRoutingModule);



/***/ }),

/***/ "EtE7":
/*!*******************************************************!*\
  !*** ./src/app/datetime-page/datetime-page.module.ts ***!
  \*******************************************************/
/*! exports provided: DatetimePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePagePageModule", function() { return DatetimePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _datetime_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datetime-page-routing.module */ "Dvw7");
/* harmony import */ var _datetime_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datetime-page.page */ "DAps");







let DatetimePagePageModule = class DatetimePagePageModule {
};
DatetimePagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _datetime_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatetimePagePageRoutingModule"]
        ],
        declarations: [_datetime_page_page__WEBPACK_IMPORTED_MODULE_6__["DatetimePagePage"]]
    })
], DatetimePagePageModule);



/***/ }),

/***/ "N9rw":
/*!*******************************************************!*\
  !*** ./src/app/datetime-page/datetime-page.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGV0aW1lLXBhZ2UvZGF0ZXRpbWUtcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "wTBc":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datetime-page/datetime-page.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Date and time</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center\">\r\n        Start time of pain\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center\">\r\n        <ion-datetime displayFormat=\"D MMM YYYY H:mm\" placeholder=\"When did the pain start?\" [(ngModel)]=\"datetime\">\r\n        </ion-datetime>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!--Back button to home page-->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button color=\"success\" routerDirection=\"back\" routerLink=\"/tabs/home\" (click)=\"updateLog()\">\r\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"dark\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!--Forward Button to bodymap page-->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"success\" routerDirection=\"forward\" routerLink=\"/bodymap\" (click)=\"updateLog()\">\r\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"dark\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=datetime-page-datetime-page-module-es2015.js.map