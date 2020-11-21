(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "2c9M":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function c9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "2gYu":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-nav-button/log-nav-button.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gYu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-fab-button color=\"success\" (click)=\"requestNav()\">\n  <ion-icon name=\"arrow-{{direction}}-circle-outline\" color=\"dark\"></ion-icon>\n</ion-fab-button>";
      /***/
    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "DAih":
    /*!********************************************************!*\
      !*** ./src/app/filter-modal/filter-modal.component.ts ***!
      \********************************************************/

    /*! exports provided: FilterModalPageComponent */

    /***/
    function DAih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterModalPageComponent", function () {
        return FilterModalPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./filter-modal.component.html */
      "iXb8");
      /* harmony import */


      var _filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filter-modal.component.scss */
      "aw+1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_log_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/log-data.service */
      "YKFw");

      var FilterModalPageComponent = /*#__PURE__*/function () {
        function FilterModalPageComponent(modalCtrl, dataService, alertCtrl) {
          _classCallCheck(this, FilterModalPageComponent);

          this.modalCtrl = modalCtrl;
          this.dataService = dataService;
          this.alertCtrl = alertCtrl;
          this.intensity = {
            lower: 0,
            upper: 10
          };
        }

        _createClass(FilterModalPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateFilterUI();
            var modalState = {
              modal: true,
              desc: 'fake state for our modal'
            };
            history.pushState(modalState, null);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (window.history.state.modal) {
              history.back();
            }
          } // Method of dismissing

        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss(this.Filter, 'cancel');
          } // Updates UI based on previous filter setting

        }, {
          key: "updateFilterUI",
          value: function updateFilterUI() {
            if (this.Filter.datetime_min != undefined) {
              this.datetime_min = this.Filter.datetime_min.toISOString();
            } else {
              this.datetime_min = new Date("2015-01-02").toISOString();
            }

            if (this.Filter.datetime_max != undefined) {
              this.datetime_max = this.Filter.datetime_max.toISOString();
            } else {
              this.datetime_max = new Date().toISOString();
            }

            if (this.Filter.intensity_min != undefined) {
              this.intensity.lower = this.Filter.intensity_min;
            }

            if (this.Filter.intensity_max != undefined) {
              this.intensity.upper = this.Filter.intensity_max;
            }

            if (this.Filter.type == undefined) {
              this.type = 'nofilter';
            } else {
              this.type = this.Filter.type;
            }

            this.body_part = this.Filter.body_part;
            this.timesBefore_lower = this.Filter.timesBefore_lower;
            this.timesBefore_upper = this.Filter.timesBefore_upper;
          } // Updating Intensity dual knobs

        }, {
          key: "onIntensityChange",
          value: function onIntensityChange(newIntensity) {
            this.intensity.lower = newIntensity.lower;
            this.intensity.upper = newIntensity.upper;
          } // Resets current filter setting

        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.datetime_min = new Date("2015-01-02").toISOString();
            this.datetime_max = new Date().toISOString();
            this.intensity = {
              lower: 0,
              upper: 10
            };
            this.type = 'nofilter';
            this.body_part = undefined;
            this.timesBefore_lower = undefined;
            this.timesBefore_upper = undefined;
          } // Checking min date is before max date

        }, {
          key: "checkDate",
          value: function checkDate() {
            var minDate = new Date(this.datetime_min);
            var maxDate = new Date(this.datetime_max);

            if (minDate < maxDate) {
              return 1;
            } else {
              return 2;
            }
          } // Checking the max duration is bigger than min duration

        }, {
          key: "checkDuration",
          value: function checkDuration() {
            if (this.timesBefore_upper == undefined || this.timesBefore_lower == undefined) {
              return 1;
            } else if (this.timesBefore_lower < this.timesBefore_upper) {
              return 1;
            } else {
              return 2;
            }
          } // function to save filter settings and passing to view-log page

        }, {
          key: "save",
          value: function save() {
            if (this.checkDate() == 1 && this.checkDuration() == 1) {
              this.Filter.datetime_min = new Date(this.datetime_min);
              this.Filter.datetime_max = new Date(this.datetime_max);
              this.Filter.intensity_min = this.intensity.lower;
              this.Filter.intensity_max = this.intensity.upper;

              if (this.type == 'nofilter') {
                this.Filter.type = undefined;
              } else {
                this.Filter.type = this.type;
              }

              this.Filter.body_part = this.body_part;
              this.Filter.timesBefore_lower = this.timesBefore_lower;
              this.Filter.timesBefore_upper = this.timesBefore_upper;
              var newintensity = this.intensity;
              this.modalCtrl.dismiss(this.Filter, "submitted");
            } else if (this.checkDate() == 2) {
              this.alertCtrl.create({
                header: "Warning!",
                message: "'From' date should be before 'To' date!",
                buttons: ['Close']
              }).then(function (prompt) {
                prompt.present();
              });
            } else if (this.checkDuration() == 2) {
              this.alertCtrl.create({
                header: "Warning!",
                message: "Maximum number of occurence should be higher than minimum!",
                buttons: ['Close']
              }).then(function (prompt) {
                prompt.present();
              });
            }
          }
        }]);

        return FilterModalPageComponent;
      }();

      FilterModalPageComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_5__["LogDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      FilterModalPageComponent.propDecorators = {
        Filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dismissModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:popstate', ['$event']]
        }]
      };
      FilterModalPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filter-modal',
        template: _raw_loader_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FilterModalPageComponent);
      /***/
    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "SW+M":
    /*!*****************************************************!*\
      !*** ./src/app/services/medication-data.service.ts ***!
      \*****************************************************/

    /*! exports provided: MedicationDataService */

    /***/
    function SWM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicationDataService", function () {
        return MedicationDataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MedicationDataService = /*#__PURE__*/function () {
        function MedicationDataService() {
          _classCallCheck(this, MedicationDataService);

          this.medicationEntries = [{
            id: 0,
            datetime: new Date("2020-10-23"),
            med_type: ["Acetaminiophen"],
            med_comment: "It is not working",
            intensity: 5
          }, {
            id: 1,
            datetime: new Date("2020-10-28"),
            med_type: ["NSAID"],
            med_comment: "Makes me queezy",
            intensity: 4
          }, {
            id: 2,
            datetime: new Date("2020-11-4"),
            med_type: ["COX-2 Inhibitors"],
            med_comment: "Makes Pain Worse",
            intensity: 8
          }, {
            id: 3,
            datetime: new Date("2020-11-5"),
            med_type: ["NSAID"],
            med_comment: "First Dose",
            intensity: 4
          }, {
            id: 4,
            datetime: new Date("2020-11-6"),
            med_type: ["Antidepressants"],
            med_comment: "Helps A lot",
            intensity: 3
          }];
          this.currentMed = this.createEmptyMed();
        }

        _createClass(MedicationDataService, [{
          key: "load",
          value: function load() {
            return Promise.resolve(true);
          }
        }, {
          key: "createEmptyMed",
          value: function createEmptyMed() {
            return {
              id: -1,
              datetime: undefined,
              med_type: undefined,
              med_comment: undefined,
              intensity: undefined
            };
          } // getters & setters based on this: https://wizardforcel.gitbooks.io/tsbook/content/chapter09_ClassesInDepth.html#reffn_1

        }, {
          key: "submitMedEntry",
          // Submit current Med Entry
          value: function submitMedEntry() {
            this.currentMed.id = this.medicationEntries.length;
            this.medicationEntries.push(this.currentMed); // TODO: Send the log to the database

            this.currentMed = this.createEmptyMed();
          }
        }, {
          key: "getMeds",
          value: function getMeds() {
            return this.medicationEntries;
          }
        }, {
          key: "printMedEntry",
          value: function printMedEntry(entry) {
            if (typeof entry === "undefined") {
              entry = this.currentMed;
            }

            console.log("Printing Med Entry");
            console.log("id: ".concat(entry.id));
            console.log("datetime: ".concat(entry.datetime));
            console.log("med_type: ".concat(entry.med_type));
            console.log("intensity: ".concat(entry.intensity));
            console.log("comment: ".concat(entry.med_comment));
          }
        }, {
          key: "printMedEntries",
          value: function printMedEntries() {
            var _this = this;

            this.medicationEntries.forEach(function (entry) {
              return _this.printMedEntry;
            });
          }
        }, {
          key: "currentMedDateTime",
          set: function set(datetime) {
            this.currentMed.datetime = datetime;
          },
          get: function get() {
            return this.currentMed.datetime;
          }
        }, {
          key: "currentMedMed_type",
          set: function set(med_type) {
            this.currentMed.med_type = med_type;
          },
          get: function get() {
            return this.currentMed.med_type;
          }
        }, {
          key: "currentMedComment",
          set: function set(med_comment) {
            this.currentMed.med_comment = med_comment;
          },
          get: function get() {
            return this.currentMed.med_comment;
          }
        }, {
          key: "currentMedIntensity",
          set: function set(intensity) {
            this.currentMed.intensity = intensity;
          },
          get: function get() {
            return this.currentMed.intensity;
          }
        }, {
          key: "currentMedId",
          set: function set(id) {
            this.currentMed.id = id;
          },
          get: function get() {
            return this.currentMed.id;
          }
        }]);

        return MedicationDataService;
      }();

      MedicationDataService.ctorParameters = function () {
        return [];
      };

      MedicationDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MedicationDataService);
      /***/
    },

    /***/
    "U/uv":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function UUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "sxy2");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "ItpF");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "2c9M");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "UWQ4":
    /*!*************************************************************************!*\
      !*** ./src/app/components/log-nav-button/log-nav-button.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function UWQ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLW5hdi1idXR0b24vbG9nLW5hdi1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "aw+1":
    /*!**********************************************************!*\
      !*** ./src/app/filter-modal/filter-modal.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function aw1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci1tb2RhbC9maWx0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "iXb8":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter-modal/filter-modal.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iXb8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Filter</ion-title>\n    <ion-button slot=\"end\" (click)=\"resetFilter()\">Reset</ion-button>\n    <ion-button slot=\"end\" (click)=\"dismissModal()\">Close</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Time Period</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-item>From</ion-item>\n        <ion-datetime displayFormat=\"D MMM YYYY H:mm\" [(ngModel)]=\"datetime_min\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-item>To</ion-item>\n          <ion-datetime displayFormat=\"D MMM YYYY H:mm\" [(ngModel)]=\"datetime_max\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pain Intensity</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-range dualKnobs=\"true\" min=\"0\" max=\"10\" step=\"1\" snaps=\"true\" pin=\"true\" [ngModel]=\"intensity\"\n          (ngModelChange)=\"onIntensityChange($event)\">\n        <ion-note color=\"primary\" slot=\"start\">{{intensity.lower}}</ion-note>\n        <ion-note color=\"primary\" slot=\"end\">{{intensity.upper}}</ion-note>\n        </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pain Type</ion-label>\n      <ion-select cancelText=\"Cancel\" okText=\"Ok\" [(ngModel)]=\"type\">\n        <ion-select-option value=\"nofilter\">All of Them</ion-select-option>\n        <ion-select-option value=\"none\">None</ion-select-option>\n        <ion-select-option value=\"aching\">Aching</ion-select-option>\n        <ion-select-option value=\"burning\">Burning</ion-select-option>\n        <ion-select-option value=\"cramping\">Cramping</ion-select-option>\n        <ion-select-option value=\"numbness\">Numbness</ion-select-option>\n        <ion-select-option value=\"radiating\">Radiating</ion-select-option>\n        <ion-select-option value=\"shooting\">Shooting</ion-select-option>\n        <ion-select-option value=\"stabbing\">Stabbing</ion-select-option>\n        <ion-select-option value=\"tingling\">Tingling</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Body Part</ion-label>\n      <ion-select cancelText=\"Cancel\" okText=\"Ok\" [(ngModel)]=\"body_part\" multiple={true} placeholder=\"Select Pain Area(s)\">\n        <ion-select-option value=\"rShoulder\">Right Shoulder</ion-select-option>\n        <ion-select-option value=\"lShoulder\">Left Shoulder</ion-select-option>\n        <ion-select-option value=\"neck\">Neck</ion-select-option>\n        <ion-select-option value=\"uBack\">Upper Back</ion-select-option>\n        <ion-select-option value=\"lBack\">Lower Back</ion-select-option>\n        <ion-select-option value=\"mBack\">Middle Back</ion-select-option>\n        <ion-select-option value=\"glutes\">Glutes</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>How many times before?</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>From</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"timesBefore_lower\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Up to</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"timesBefore_upper\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" (click)=\"save()\" class>Submit</ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "q3LG":
    /*!***********************************************************************!*\
      !*** ./src/app/components/log-nav-button/log-nav-button.component.ts ***!
      \***********************************************************************/

    /*! exports provided: LogNavButtonComponent */

    /***/
    function q3LG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogNavButtonComponent", function () {
        return LogNavButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_log_nav_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./log-nav-button.component.html */
      "2gYu");
      /* harmony import */


      var _log_nav_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./log-nav-button.component.scss */
      "UWQ4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_log_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/log-data.service */
      "YKFw");

      var LogNavButtonComponent = /*#__PURE__*/function () {
        function LogNavButtonComponent(navCtrl, dataService) {
          _classCallCheck(this, LogNavButtonComponent);

          this.navCtrl = navCtrl;
          this.dataService = dataService;
          this.navRequested = false;
        }

        _createClass(LogNavButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.dataService.isEnteredSubj.subscribe(function (data) {
              if (data === true) {
                _this2.navigate();
              }
            });
          }
        }, {
          key: "requestNav",
          value: function requestNav() {
            this.navRequested = true;
          }
        }, {
          key: "navigate",
          value: function navigate() {
            if (!this.navRequested) {
              return;
            }

            if (this.direction === "forward") {
              this.navCtrl.navigateForward(this.link);
            } else {
              this.navCtrl.navigateBack(this.link);
            }

            this.navRequested = false;
          }
        }]);

        return LogNavButtonComponent;
      }();

      LogNavButtonComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_log_data_service__WEBPACK_IMPORTED_MODULE_5__["LogDataService"]
        }];
      };

      LogNavButtonComponent.propDecorators = {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LogNavButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-log-nav-button',
        template: _raw_loader_log_nav_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_log_nav_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LogNavButtonComponent);
      /***/
    },

    /***/
    "sPtc":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function sPtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map