(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-page-log-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-page/log-page.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-page/log-page.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>log-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\">\n    <!-- TODO: can we inject pages? -->\n    <ion-slide id=\"datetime-page\">\n      <ion-item-sliding>\n        <ion-label>Start time of pain:</ion-label>\n        <ion-datetime displayFormat=\"D MMM YYYY H:mm\" placeholder=\"When did the pain start?\">\n        </ion-datetime>\n      </ion-item-sliding>\n    </ion-slide>\n    <ion-slide id=\"bodymap-page\">\n      <ion-item-sliding>\n        Get a body map! Click on it!\n      </ion-item-sliding>\n      <ion-item>\n        <!-- TODO: make the following label a block element (on a newline)-->\n        <ion-label>Lower back</ion-label>\n      </ion-item>\n    </ion-slide>\n    <ion-slide id=\"symptoms-page \">\n      <ion-item-sliding>\n        <ion-label>Intensity</ion-label>\n        <ion-range min=\"0\" max=\"10\" step=\"1\" snaps=\"true\" pin=\"true\"></ion-range>\n        <!--https://stackoverflow.com/questions/36976093/how-to-show-value-while-sliding-the-range-slider-in-ionic-framework-->\n        <ion-label>Mild</ion-label>\n        <!--Tod-->\n      </ion-item-sliding>\n    </ion-slide>\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button>\n\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/log-page/log-page-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/log-page/log-page-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LogPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPagePageRoutingModule", function() { return LogPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _log_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-page.page */ "./src/app/log-page/log-page.page.ts");




const routes = [
    {
        path: '',
        component: _log_page_page__WEBPACK_IMPORTED_MODULE_3__["LogPagePage"]
    }
];
let LogPagePageRoutingModule = class LogPagePageRoutingModule {
};
LogPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogPagePageRoutingModule);



/***/ }),

/***/ "./src/app/log-page/log-page.module.ts":
/*!*********************************************!*\
  !*** ./src/app/log-page/log-page.module.ts ***!
  \*********************************************/
/*! exports provided: LogPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPagePageModule", function() { return LogPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _log_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-page-routing.module */ "./src/app/log-page/log-page-routing.module.ts");
/* harmony import */ var _log_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-page.page */ "./src/app/log-page/log-page.page.ts");







let LogPagePageModule = class LogPagePageModule {
};
LogPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _log_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogPagePageRoutingModule"]
        ],
        declarations: [_log_page_page__WEBPACK_IMPORTED_MODULE_6__["LogPagePage"]]
    })
], LogPagePageModule);



/***/ }),

/***/ "./src/app/log-page/log-page.page.scss":
/*!*********************************************!*\
  !*** ./src/app/log-page/log-page.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1wYWdlL2xvZy1wYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/log-page/log-page.page.ts":
/*!*******************************************!*\
  !*** ./src/app/log-page/log-page.page.ts ***!
  \*******************************************/
/*! exports provided: LogPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPagePage", function() { return LogPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LogPagePage = class LogPagePage {
    constructor() { }
    ngOnInit() {
    }
};
LogPagePage.ctorParameters = () => [];
LogPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./log-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-page/log-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./log-page.page.scss */ "./src/app/log-page/log-page.page.scss")).default]
    })
], LogPagePage);



/***/ })

}]);
//# sourceMappingURL=log-page-log-page-module-es2015.js.map