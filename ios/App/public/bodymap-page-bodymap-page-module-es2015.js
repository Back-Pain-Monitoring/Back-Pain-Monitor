(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bodymap-page-bodymap-page-module"],{

/***/ "ClSC":
/*!*****************************************************!*\
  !*** ./src/app/bodymap-page/bodymap-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#backMap {\n  height: auto;\n  width: auto;\n  max-width: 40%;\n  align-items: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keW1hcC1wYWdlL2JvZHltYXAtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHltYXAtcGFnZS9ib2R5bWFwLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tNYXAge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDQwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "SL9C":
/*!*****************************************************!*\
  !*** ./src/app/bodymap-page/bodymap-page.module.ts ***!
  \*****************************************************/
/*! exports provided: BodymapPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodymapPagePageModule", function() { return BodymapPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bodymap_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bodymap-page-routing.module */ "wPG8");
/* harmony import */ var _bodymap_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bodymap-page.page */ "x0lV");







let BodymapPagePageModule = class BodymapPagePageModule {
};
BodymapPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bodymap_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["BodymapPagePageRoutingModule"]
        ],
        declarations: [_bodymap_page_page__WEBPACK_IMPORTED_MODULE_6__["BodymapPagePage"]]
    })
], BodymapPagePageModule);



/***/ }),

/***/ "u29j":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bodymap-page/bodymap-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>bodymap-page</ion-title>\n  </ion-toolbar></ion-header>\n\n\n  \n<ion-content>\n\n  <ion-grid>\n    <ion-row class=\"selection\">\n      <ion-col class=\"selection\">\n        <ion-item>\n          <ion-label>Pain Area</ion-label>\n          <ion-select cancelText=\"Cancel\" okText=\"Ok\" [(ngModel)]=\"painType\" multiple={true} placeholder=\"Select Pain Area(s)\">\n            <ion-select-option value=\"rShoulder\">Right Shoulder</ion-select-option>\n            <ion-select-option value=\"lShoulder\">Left Shoulder</ion-select-option>\n            <ion-select-option value=\"neck\">Neck</ion-select-option>\n            <ion-select-option value=\"uBack\">Upper Back</ion-select-option>\n            <ion-select-option value=\"lBack\">Lower Back</ion-select-option>\n            <ion-select-option value=\"mBack\">Middle Back</ion-select-option>\n            <ion-select-option value=\"glutes\">Glutes</ion-select-option>\n          </ion-select> \n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img src=\"./assets/bodyMap.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n\n  <!--Back button to datetime page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"back\" routerLink=\"/datetime\">\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!--Forward Button to symptoms page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"forward\" routerLink=\"/symptoms\">\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n\n</ion-content>");

/***/ }),

/***/ "wPG8":
/*!*************************************************************!*\
  !*** ./src/app/bodymap-page/bodymap-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BodymapPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodymapPagePageRoutingModule", function() { return BodymapPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bodymap_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bodymap-page.page */ "x0lV");




const routes = [
    {
        path: '',
        component: _bodymap_page_page__WEBPACK_IMPORTED_MODULE_3__["BodymapPagePage"]
    }
];
let BodymapPagePageRoutingModule = class BodymapPagePageRoutingModule {
};
BodymapPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BodymapPagePageRoutingModule);



/***/ }),

/***/ "x0lV":
/*!***************************************************!*\
  !*** ./src/app/bodymap-page/bodymap-page.page.ts ***!
  \***************************************************/
/*! exports provided: BodymapPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodymapPagePage", function() { return BodymapPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bodymap_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bodymap-page.page.html */ "u29j");
/* harmony import */ var _bodymap_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bodymap-page.page.scss */ "ClSC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BodymapPagePage = class BodymapPagePage {
    constructor() { }
    ngOnInit() {
    }
};
BodymapPagePage.ctorParameters = () => [];
BodymapPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bodymap-page',
        template: _raw_loader_bodymap_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bodymap_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BodymapPagePage);



/***/ })

}]);
//# sourceMappingURL=bodymap-page-bodymap-page-module-es2015.js.map