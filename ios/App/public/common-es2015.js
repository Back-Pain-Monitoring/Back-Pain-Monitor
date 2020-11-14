(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2c9M":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "6i10":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
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
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "DAih":
/*!********************************************************!*\
  !*** ./src/app/filter-modal/filter-modal.component.ts ***!
  \********************************************************/
/*! exports provided: FilterModalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModalPageComponent", function() { return FilterModalPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filter-modal.component.html */ "iXb8");
/* harmony import */ var _filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-modal.component.scss */ "aw+1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_log_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/log-data.service */ "YKFw");






let FilterModalPageComponent = class FilterModalPageComponent {
    constructor(modalCtrl, dataService, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.intensity = { lower: 0, upper: 10 };
    }
    ngOnInit() {
        this.updateFilterUI();
        const modalState = {
            modal: true,
            desc: 'fake state for our modal'
        };
        history.pushState(modalState, null);
    }
    ngOnDestroy() {
        if (window.history.state.modal) {
            history.back();
        }
    }
    // Method of dismissing
    dismissModal() {
        this.modalCtrl.dismiss(this.Filter, 'cancel');
    }
    // Updates UI based on previous filter setting
    updateFilterUI() {
        if (this.Filter.datetime_min != undefined) {
            this.datetime_min = this.Filter.datetime_min.toISOString();
        }
        else {
            this.datetime_min = new Date("2015-01-02").toISOString();
        }
        if (this.Filter.datetime_max != undefined) {
            this.datetime_max = this.Filter.datetime_max.toISOString();
        }
        else {
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
        }
        else {
            this.type = this.Filter.type;
        }
        this.body_part = this.Filter.body_part;
        this.timesBefore_lower = this.Filter.timesBefore_lower;
        this.timesBefore_upper = this.Filter.timesBefore_upper;
    }
    // Updating Intensity dual knobs
    onIntensityChange(newIntensity) {
        this.intensity.lower = newIntensity.lower;
        this.intensity.upper = newIntensity.upper;
    }
    // Resets current filter setting
    resetFilter() {
        this.datetime_min = new Date("2015-01-02").toISOString();
        this.datetime_max = new Date().toISOString();
        this.intensity = { lower: 0, upper: 10 };
        this.type = 'nofilter';
        this.body_part = undefined;
        this.timesBefore_lower = undefined;
        this.timesBefore_upper = undefined;
    }
    // Checking min date is before max date
    checkDate() {
        let minDate = new Date(this.datetime_min);
        let maxDate = new Date(this.datetime_max);
        if (minDate < maxDate) {
            return 1;
        }
        else {
            return 2;
        }
    }
    // Checking the max duration is bigger than min duration
    checkDuration() {
        if (this.timesBefore_upper == undefined || this.timesBefore_lower == undefined) {
            return 1;
        }
        else if (this.timesBefore_lower < this.timesBefore_upper) {
            return 1;
        }
        else {
            return 2;
        }
    }
    // function to save filter settings and passing to view-log page
    save() {
        if (this.checkDate() == 1 && this.checkDuration() == 1) {
            this.Filter.datetime_min = new Date(this.datetime_min);
            this.Filter.datetime_max = new Date(this.datetime_max);
            this.Filter.intensity_min = this.intensity.lower;
            this.Filter.intensity_max = this.intensity.upper;
            if (this.type == 'nofilter') {
                this.Filter.type = undefined;
            }
            else {
                this.Filter.type = this.type;
            }
            this.Filter.body_part = this.body_part;
            this.Filter.timesBefore_lower = this.timesBefore_lower;
            this.Filter.timesBefore_upper = this.timesBefore_upper;
            const newintensity = this.intensity;
            this.modalCtrl.dismiss(this.Filter, "submitted");
        }
        else if (this.checkDate() == 2) {
            this.alertCtrl.create({ header: "Warning!", message: "'From' date should be before 'To' date!", buttons: ['Close'] }).then((prompt) => {
                prompt.present();
            });
        }
        else if (this.checkDuration() == 2) {
            this.alertCtrl.create({ header: "Warning!", message: "Maximum number of occurence should be higher than minimum!", buttons: ['Close'] }).then((prompt) => {
                prompt.present();
            });
        }
    }
};
FilterModalPageComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_log_data_service__WEBPACK_IMPORTED_MODULE_5__["LogDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
FilterModalPageComponent.propDecorators = {
    Filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dismissModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:popstate', ['$event'],] }]
};
FilterModalPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filter-modal',
        template: _raw_loader_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FilterModalPageComponent);



/***/ }),

/***/ "NqGI":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "SW+M":
/*!*****************************************************!*\
  !*** ./src/app/services/medication-data.service.ts ***!
  \*****************************************************/
/*! exports provided: MedicationDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationDataService", function() { return MedicationDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MedicationDataService = class MedicationDataService {
    constructor() {
        this.medicationEntries = [
            {
                id: 0,
                datetime: new Date("2020-10-23"),
                med_type: ["Acetaminiophen"],
                comment: "It is not working",
                intensity: 5
            },
            {
                id: 1,
                datetime: new Date("2020-10-28"),
                med_type: ["NSAID"],
                comment: "Makes me queezy",
                intensity: 4
            },
            {
                id: 2,
                datetime: new Date("2020-11-4"),
                med_type: ["COX-2 Inhibitors"],
                comment: "Makes Pain Worse",
                intensity: 8
            },
            {
                id: 3,
                datetime: new Date("2020-11-5"),
                med_type: ["NSAID"],
                comment: "First Dose",
                intensity: 4
            },
            {
                id: 4,
                datetime: new Date("2020-11-6"),
                med_type: ["Antidepressants"],
                comment: "Helps A lot",
                intensity: 3
            }
        ];
        this.currentMed = this.createEmptyMed();
    }
    load() {
        return Promise.resolve(true);
    }
    createEmptyMed() {
        return {
            id: undefined,
            datetime: undefined,
            med_type: undefined,
            comment: undefined,
            intensity: undefined
        };
    }
    // getters & setters based on this: https://wizardforcel.gitbooks.io/tsbook/content/chapter09_ClassesInDepth.html#reffn_1
    set currentMedId(id) { this.currentMed.intensity = id; }
    get currentMedId() { return this.currentMed.id; }
    set currentMedDateTime(datetime) { this.currentMed.datetime = datetime; }
    get currentMedDateTime() { return this.currentMed.datetime; }
    set currentMedMed_type(med_type) { this.currentMed.med_type = med_type; }
    get currentMedMed_type() { return this.currentMed.med_type; }
    set currentMedComment(comment) { this.currentMed.comment = comment; }
    get currentMedComment() { return this.currentMed.comment; }
    set currentMedIntensity(intensity) { this.currentMed.intensity = intensity; }
    get currentMedIntensity() { return this.currentMed.intensity; }
    // Submit current Med Entry
    submitMedEntry() {
        this.currentMed.id = this.medicationEntries.length;
        this.medicationEntries.push(this.currentMed);
        this.printMedEntry();
        // TODO: Send the log to the database
        this.currentMed = this.createEmptyMed();
    }
    getMeds() {
        return this.medicationEntries;
    }
    printMedEntry(entry) {
        if (typeof (entry) === "undefined") {
            entry = this.currentMed;
        }
        console.log("Printing Med Entry");
        console.log(`id: ${entry.id}`);
        console.log(`datetime: ${entry.datetime}`);
        console.log(`med_type: ${entry.med_type}`);
        console.log(`intensity: ${entry.intensity}`);
        console.log(`comment: ${entry.comment}`);
    }
    printMedEntries() {
        this.medicationEntries.forEach((entry) => this.printMedEntry);
    }
};
MedicationDataService.ctorParameters = () => [];
MedicationDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MedicationDataService);



/***/ }),

/***/ "U/uv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "ItpF");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "2c9M");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "aw+1":
/*!**********************************************************!*\
  !*** ./src/app/filter-modal/filter-modal.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci1tb2RhbC9maWx0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "iXb8":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter-modal/filter-modal.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Filter</ion-title>\n    <ion-button slot=\"end\" (click)=\"resetFilter()\">Reset</ion-button>\n    <ion-button slot=\"end\" (click)=\"dismissModal()\">Close</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Time Period</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-item>From</ion-item>\n       <ion-input > \n        <ion-datetime displayFormat=\"D MMM YYYY H:mm\" [(ngModel)]=\"datetime_min\"></ion-datetime>\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-item>To</ion-item>\n        <ion-input>\n          <ion-datetime displayFormat=\"D MMM YYYY H:mm\" [(ngModel)]=\"datetime_max\"></ion-datetime>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pain Intensity</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input>\n        <ion-range dualKnobs=\"true\" min=\"0\" max=\"10\" step=\"1\" snaps=\"true\" pin=\"true\" [ngModel]=\"intensity\"\n          (ngModelChange)=\"onIntensityChange($event)\">\n        <ion-note color=\"primary\" slot=\"start\">{{intensity.lower}}</ion-note>\n        <ion-note color=\"primary\" slot=\"end\">{{intensity.upper}}</ion-note>\n        </ion-range>\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pain Type</ion-label>\n      <ion-select cancelText=\"Cancel\" okText=\"Ok\" [(ngModel)]=\"type\">\n        <ion-select-option value=\"nofilter\">All of Them</ion-select-option>\n        <ion-select-option value=\"none\">None</ion-select-option>\n        <ion-select-option value=\"aching\">Aching</ion-select-option>\n        <ion-select-option value=\"burning\">Burning</ion-select-option>\n        <ion-select-option value=\"cramping\">Cramping</ion-select-option>\n        <ion-select-option value=\"numbness\">Numbness</ion-select-option>\n        <ion-select-option value=\"radiating\">Radiating</ion-select-option>\n        <ion-select-option value=\"shooting\">Shooting</ion-select-option>\n        <ion-select-option value=\"stabbing\">Stabbing</ion-select-option>\n        <ion-select-option value=\"tingling\">Tingling</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Body Part</ion-label>\n      <ion-select cancelText=\"Cancel\" okText=\"Ok\" [(ngModel)]=\"body_part\" multiple={true} placeholder=\"Select Pain Area(s)\">\n        <ion-select-option value=\"rShoulder\">Right Shoulder</ion-select-option>\n        <ion-select-option value=\"lShoulder\">Left Shoulder</ion-select-option>\n        <ion-select-option value=\"neck\">Neck</ion-select-option>\n        <ion-select-option value=\"uBack\">Upper Back</ion-select-option>\n        <ion-select-option value=\"lBack\">Lower Back</ion-select-option>\n        <ion-select-option value=\"mBack\">Middle Back</ion-select-option>\n        <ion-select-option value=\"glutes\">Glutes</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>How many times before?</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>From</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"timesBefore_lower\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Up to</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"timesBefore_upper\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" (click)=\"save()\" class>Submit</ion-button>\n</ion-content>");

/***/ }),

/***/ "sPtc":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map