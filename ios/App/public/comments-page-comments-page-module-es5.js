(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-page-comments-page-module"], {
    /***/
    "3i5R":
    /*!*****************************************************!*\
      !*** ./src/app/comments-page/comments-page.page.ts ***!
      \*****************************************************/

    /*! exports provided: CommentsPagePage */

    /***/
    function i5R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPagePage", function () {
        return CommentsPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_comments_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./comments-page.page.html */
      "fXrD");
      /* harmony import */


      var _comments_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./comments-page.page.scss */
      "yMk+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/log-data.service */
      "YKFw");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CommentsPagePage = /*#__PURE__*/function () {
        function CommentsPagePage(dataService, alertCtrl, navCtrl) {
          _classCallCheck(this, CommentsPagePage);

          this.dataService = dataService;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.submit_button_label = "Submit";
        }

        _createClass(CommentsPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateUIFromLog();

            if (this.dataService.isEditing()) {
              this.submit_button_label = "Update";
            }
          } // Check if there exists redflags symptom or not.

        }, {
          key: "makeAlert",
          value: function makeAlert() {
            if (this.dataService.currentLogRedflag_symptoms.length > 0) {
              this.redflagsCase();
            } else {
              this.nonredflagsCase();
            }
          } // funciton to go back to homepage

        }, {
          key: "backToHome",
          value: function backToHome() {
            this.updateLog();
            this.dataService.submitLogEntry(); // note that submitLogEntry will edit the log entry instead if the dataservice indicates the log is being edited

            this.navCtrl.navigateRoot('/tabs/home');
          } // In case there is no redflag symptoms

        }, {
          key: "nonredflagsCase",
          value: function nonredflagsCase() {
            var _this = this;

            this.alertCtrl.create({
              message: 'Your log has been submitted!',
              buttons: [{
                text: 'Okay',
                handler: function handler() {
                  _this.backToHome();
                }
              }]
            }).then(function (prompt) {
              prompt.present();
            });
          } // In case there exists redflags symptoms

        }, {
          key: "redflagsCase",
          value: function redflagsCase() {
            var _this2 = this;

            this.alertCtrl.create({
              message: 'Your log has been submitted!<br><br>Please be advised!<br>- Numbness<br>- Inability to walk<br>-  Losing weight<br>-  Losing bladder control.<br><br>These are considered as red-flag symptoms which can be highly critical to health issues! <br><br> Seek medical help immediately!',
              buttons: [{
                text: 'Okay',
                handler: function handler() {
                  _this2.backToHome();
                }
              }]
            }).then(function (prompt) {
              prompt.present();
            });
          }
        }, {
          key: "updateLog",
          value: function updateLog() {
            this.dataService.currentLogComment = this.comment;
            this.dataService.updateIsEntered(true);
          }
        }, {
          key: "updateUIFromLog",
          value: function updateUIFromLog() {
            this.dataService.updateIsEntered(false);
            this.comment = this.dataService.currentLogComment;
          }
        }]);

        return CommentsPagePage;
      }();

      CommentsPagePage.ctorParameters = function () {
        return [{
          type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_4__["LogDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      CommentsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-comments-page',
        template: _raw_loader_comments_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comments_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CommentsPagePage);
      /***/
    },

    /***/
    "Z713":
    /*!*******************************************************!*\
      !*** ./src/app/comments-page/comments-page.module.ts ***!
      \*******************************************************/

    /*! exports provided: CommentsPagePageModule */

    /***/
    function Z713(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPagePageModule", function () {
        return CommentsPagePageModule;
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


      var _components_log_nav_button_log_nav_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/log-nav-button/log-nav-button.component */
      "q3LG");
      /* harmony import */


      var _comments_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comments-page-routing.module */
      "e34Q");
      /* harmony import */


      var _comments_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./comments-page.page */
      "3i5R");

      var CommentsPagePageModule = function CommentsPagePageModule() {
        _classCallCheck(this, CommentsPagePageModule);
      };

      CommentsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comments_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["CommentsPagePageRoutingModule"]],
        declarations: [_comments_page_page__WEBPACK_IMPORTED_MODULE_7__["CommentsPagePage"], _components_log_nav_button_log_nav_button_component__WEBPACK_IMPORTED_MODULE_5__["LogNavButtonComponent"]]
      })], CommentsPagePageModule);
      /***/
    },

    /***/
    "e34Q":
    /*!***************************************************************!*\
      !*** ./src/app/comments-page/comments-page-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CommentsPagePageRoutingModule */

    /***/
    function e34Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPagePageRoutingModule", function () {
        return CommentsPagePageRoutingModule;
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


      var _comments_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./comments-page.page */
      "3i5R");

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
    "fXrD":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments-page/comments-page.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fXrD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Comments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-text>\n    <h1>Notes</h1>\n  </ion-text>\n\n  <ion-item>\n    <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"comment\"\n      placeholder=\"e.g. Lifting right arm caused pain on my lower back...\"></ion-textarea>\n  </ion-item>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"updateLog()\">\n    <app-log-nav-button direction=\"back\" link=\"/redflags\"></app-log-nav-button>\n  </ion-fab>\n\n  <!--Submit button that takes you back to home page-->\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-button expand=\"block\" (click)=\"makeAlert()\">{{submit_button_label}}</ion-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "yMk+":
    /*!*******************************************************!*\
      !*** ./src/app/comments-page/comments-page.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function yMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzLXBhZ2UvY29tbWVudHMtcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=comments-page-comments-page-module-es5.js.map