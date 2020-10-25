(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-page-comments-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comments-page/comments-page.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments-page/comments-page.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommentsPageCommentsPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>comments-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--Back button to redflags page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerDirection=\"back\" routerLink=\"/redflags\">\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"dark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/comments-page/comments-page-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/comments-page/comments-page-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CommentsPagePageRoutingModule */

    /***/
    function srcAppCommentsPageCommentsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPagePageRoutingModule", function () {
        return CommentsPagePageRoutingModule;
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


      var _comments_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./comments-page.page */
      "./src/app/comments-page/comments-page.page.ts");

      var routes = [{
        path: '',
        component: _comments_page_page__WEBPACK_IMPORTED_MODULE_3__["CommentsPagePage"]
      }];

      var CommentsPagePageRoutingModule = function CommentsPagePageRoutingModule() {
        _classCallCheck(this, CommentsPagePageRoutingModule);
      };

      CommentsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CommentsPagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/comments-page/comments-page.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/comments-page/comments-page.module.ts ***!
      \*******************************************************/

    /*! exports provided: CommentsPagePageModule */

    /***/
    function srcAppCommentsPageCommentsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPagePageModule", function () {
        return CommentsPagePageModule;
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


      var _comments_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./comments-page-routing.module */
      "./src/app/comments-page/comments-page-routing.module.ts");
      /* harmony import */


      var _comments_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comments-page.page */
      "./src/app/comments-page/comments-page.page.ts");

      var CommentsPagePageModule = function CommentsPagePageModule() {
        _classCallCheck(this, CommentsPagePageModule);
      };

      CommentsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comments_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentsPagePageRoutingModule"]],
        declarations: [_comments_page_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPagePage"]]
      })], CommentsPagePageModule);
      /***/
    },

    /***/
    "./src/app/comments-page/comments-page.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/comments-page/comments-page.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommentsPageCommentsPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzLXBhZ2UvY29tbWVudHMtcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/comments-page/comments-page.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/comments-page/comments-page.page.ts ***!
      \*****************************************************/

    /*! exports provided: CommentsPagePage */

    /***/
    function srcAppCommentsPageCommentsPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPagePage", function () {
        return CommentsPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CommentsPagePage = /*#__PURE__*/function () {
        function CommentsPagePage() {
          _classCallCheck(this, CommentsPagePage);
        }

        _createClass(CommentsPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CommentsPagePage;
      }();

      CommentsPagePage.ctorParameters = function () {
        return [];
      };

      CommentsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comments-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comments-page/comments-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comments-page.page.scss */
        "./src/app/comments-page/comments-page.page.scss"))["default"]]
      })], CommentsPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=comments-page-comments-page-module-es5.js.map