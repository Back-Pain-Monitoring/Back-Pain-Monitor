(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cat/back-pain-monitor/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PBIg":
/*!********************************************************!*\
  !*** ./src/app/services/datetime-authguard.service.ts ***!
  \********************************************************/
/*! exports provided: DatetimeAuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimeAuthguardService", function() { return DatetimeAuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _log_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log-data.service */ "YKFw");





let DatetimeAuthguardService = class DatetimeAuthguardService {
    constructor(router, dataService, alertCtrl) {
        this.router = router;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
    }
    canDeactivate(component) {
        console.log(`date: ${this.dataService.currentLogDatetime}, type ${typeof (this.dataService.currentLogDatetime)}`);
        if (!this.dataService.currentLogDatetime) {
            this.alertCtrl.create({
                message: 'Please provide a value for date',
                buttons: ['OK']
            }).then((prompt) => {
                prompt.present();
            });
            return false;
        }
        return true;
    }
};
DatetimeAuthguardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _log_data_service__WEBPACK_IMPORTED_MODULE_4__["LogDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
DatetimeAuthguardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatetimeAuthguardService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");







let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "YKFw":
/*!**********************************************!*\
  !*** ./src/app/services/log-data.service.ts ***!
  \**********************************************/
/*! exports provided: LogDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDataService", function() { return LogDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let LogDataService = class LogDataService {
    constructor() {
        this.loaded = false;
        this.editing = false; // to track whether the dataservice is currently editing a log
        this.redflags = ["Unexplained weight loss", "Pain that is increased or unrelieved by rest",
            "Bladder or bowel incontinence", "Limited spinal range of motion"];
        this.activities = ["bending", "sitting", "standing", "walking", "lying",
            "am", "as the day progresses", "pm", "still", "moving"];
        this.isEnteredSubj = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.logEntries = [
            {
                id: 0,
                datetime: new Date("2020-10-23"),
                body_part: "right shoulder",
                intensity: 8,
                type: "burning",
                timesBefore: 0,
                nightPain: true,
                worse: ["bending", "walking"],
                better: ["sitting", "lying", "am"],
                cause: "unknown",
                mobility: ["moving"],
                is_constant: false,
                redflag_symptoms: ["Bladder or bowel incontinence", "Limited spinal range of motion"],
                comment: "we might need to store where on the body the pain is... like an x/y position?",
            },
            {
                id: 1,
                datetime: new Date("2020-10-24"),
                body_part: "middle back",
                intensity: 3,
                type: "aching",
                timesBefore: 2,
                nightPain: false,
                worse: ["bending", "sitting"],
                better: ["pm", "moving"],
                cause: "unknown",
                mobility: ["resting"],
                is_constant: false,
                redflag_symptoms: [],
                comment: "we might need to store where on the body the pain is... like an x/y position?",
            },
            {
                id: 2,
                datetime: new Date("2020-10-25"),
                body_part: "lower back",
                intensity: 8,
                type: "numbness",
                timesBefore: 3,
                nightPain: true,
                worse: ["still", "as the day progresses"],
                better: ["bending", "standing"],
                cause: "unknown",
                mobility: ["moving", "resting"],
                is_constant: false,
                redflag_symptoms: ["Limited spinal range of motion", "Pain that is increased or unrelieved by rest"],
                comment: "we might need to store where on the body the pain is... like an x/y position?",
            },
            {
                id: 3,
                datetime: new Date("2020-10-27"),
                body_part: "upper back",
                intensity: 2,
                type: "shooting",
                timesBefore: 4,
                nightPain: true,
                worse: ["walking", "lying", "moving"],
                better: ["sitting", "still"],
                cause: "unknown",
                mobility: ["resting"],
                is_constant: false,
                redflag_symptoms: ["Unexplained weight loss"],
                comment: "we might need to store where on the body the pain is... like an x/y position?",
            },
            {
                id: 4,
                datetime: new Date("2020-10-28"),
                body_part: "upper back",
                intensity: 2,
                type: "shooting",
                timesBefore: 2,
                nightPain: false,
                worse: ["bending", "am"],
                better: ["walking", "moving"],
                cause: "unknown",
                mobility: ["resting"],
                is_constant: false,
                redflag_symptoms: [],
                comment: "we might need to store where on the body the pain is... like an x/y position?",
            },
            {
                id: 5,
                datetime: new Date("2020-10-30"),
                body_part: "middle back",
                intensity: 3,
                type: "stabbing",
                timesBefore: 1,
                nightPain: false,
                worse: ["sitting", "pm"],
                better: ["lying", "walking"],
                cause: "unknown",
                mobility: ["resting"],
                is_constant: true,
                redflag_symptoms: ["Bladder or bowel incontinence"],
                comment: "we might need to store where on the body the pain is... like an x/y position?",
            },
            {
                id: 6,
                datetime: new Date(),
                body_part: "back",
                intensity: 7,
                type: "shooting",
                timesBefore: 10,
                nightPain: true,
                worse: ["sitting", "standing"],
                better: ["moving", "am"],
                cause: "lifting",
                mobility: ["moving"],
                is_constant: true,
                redflag_symptoms: [],
                comment: "we might need to store where on the body the pain is... like an x/y position?",
            },
            {
                id: 7,
                datetime: new Date(),
                body_part: "left shoulder",
                intensity: 4,
                type: "numbness",
                timesBefore: 23,
                nightPain: true,
                worse: ["bending", "standing"],
                better: ["walking", "moving"],
                cause: "lifting",
                mobility: ["moving"],
                is_constant: true,
                redflag_symptoms: ["Bladder or bowel incontinence"],
                comment: "we might need to store where on the body the pain is... like an x/y position?",
            },
        ];
        this.currentLog = this.createEmptyLog();
    }
    load() {
        return Promise.resolve(true);
    }
    createEmptyLog() {
        return {
            id: -1,
            datetime: undefined,
            body_part: undefined,
            intensity: undefined,
            type: undefined,
            timesBefore: undefined,
            nightPain: undefined,
            worse: [],
            better: [],
            cause: undefined,
            mobility: undefined,
            is_constant: undefined,
            redflag_symptoms: [],
            comment: undefined
        };
    }
    // getters and setters based on this: https://wizardforcel.gitbooks.io/tsbook/content/chapter09_ClassesInDepth.html#reffn_1
    set currentLogDatetime(datetime) { this.currentLog.datetime = datetime; }
    get currentLogDatetime() { return this.currentLog.datetime; }
    set currentLogBody_part(body_part) { this.currentLog.body_part = body_part; }
    get currentLogBody_part() { return this.currentLog.body_part; }
    set currentLogIntensity(intensity) { this.currentLog.intensity = intensity; }
    get currentLogIntensity() { return this.currentLog.intensity; }
    set currentLogType(type) { this.currentLog.type = type; }
    get currentLogType() { return this.currentLog.type; }
    set currentLogTimesBefore(times) { this.currentLog.timesBefore = times; }
    get currentLogTimesBefore() { return this.currentLog.timesBefore; }
    set currentLogNightPain(pain) { this.currentLog.nightPain = pain; }
    get currentLogNightPain() { return this.currentLog.nightPain; }
    set currentLogWorse(worse) { this.currentLog.worse = worse; }
    get currentLogWorse() { return this.currentLog.worse; }
    set currentLogBetter(better) { this.currentLog.better = better; }
    get currentLogBetter() { return this.currentLog.better; }
    set currentLogCause(cause) { this.currentLog.cause = cause; }
    get currentLogCause() { return this.currentLog.cause; }
    set currentLogMobility(mobility) { this.currentLog.mobility = mobility; }
    get currentLogMobility() { return this.currentLog.mobility; }
    set currentLogIs_constant(is_constant) { this.currentLog.is_constant = is_constant; }
    get currentLogIs_constant() { return this.currentLog.is_constant; }
    set currentLogRedflag_symptoms(redflag_symptoms) { this.currentLog.redflag_symptoms = redflag_symptoms; }
    get currentLogRedflag_symptoms() { return this.currentLog.redflag_symptoms; }
    set currentLogComment(comment) { this.currentLog.comment = comment; }
    get currentLogComment() { return this.currentLog.comment; }
    // submit the current log entry
    submitLogEntry() {
        if (this.editing) {
            this.editLogEntry();
            return;
        }
        this.currentLog.id = this.logEntries.length;
        this.logEntries.push(this.currentLog);
        this.logEntries.sort((a, b) => a.datetime.getTime() - b.datetime.getTime());
        // TODO: send the log to the database
        this.currentLog = this.createEmptyLog();
    }
    startEditLog(log) {
        this.currentLog = log;
        this.editing = true;
    }
    editLogEntry() {
        // TODO: change this
        this.logEntries[this.currentLog.id] = this.currentLog;
        this.currentLog = this.createEmptyLog();
    }
    deleteLog(log) {
        for (let i = 0; i < this.logEntries.length; i++) {
            if (this.logEntries[i].id === log.id) {
                this.logEntries.splice(i, 1);
                break;
            }
        }
    }
    printLogEntry(entry) {
        if (typeof (entry) === "undefined") {
            entry = this.currentLog;
        }
        console.log("printing log entry:");
        console.log(`id: ${entry.id}`);
        console.log(`datetime: ${entry.datetime}`);
        console.log(`body_part: ${entry.body_part}`);
        console.log(`intensity: ${entry.intensity}`);
        console.log(`type: ${entry.type}`);
        console.log(`times before: ${entry.timesBefore}`);
        console.log(`pain at night: ${entry.nightPain}`);
        console.log(`cause: ${entry.cause}`);
        console.log(`mobility: ${entry.mobility}`);
        console.log(`is_constant: ${entry.is_constant}`);
        console.log(`redflag_symptoms: ${entry.redflag_symptoms}`);
        console.log(`comment: ${entry.comment}`);
    }
    printLogEntries() {
        this.logEntries.forEach((entry) => this.printLogEntry(entry));
    }
    getLogs() {
        return this.logEntries;
    }
    /*
    lastIndex: the index 1 after the last retrieved log
    i.e., let's say last time we called this we did n=2 so we'd have slice(0, 2), then when we call this again we would do lastIndex=2
    */
    getNextLogs(n, lastIndex) {
        if (lastIndex === undefined) {
            lastIndex = 0;
        }
        if (lastIndex >= this.logEntries.length) {
            // we've returned all the data already, so just return an empty list
            return [];
        }
        return this.logEntries.slice(lastIndex, lastIndex + n);
    }
    isEditing() {
        return this.editing;
    }
    createEmptyFilter() {
        return {
            datetime_min: undefined,
            datetime_max: undefined,
            intensity_min: undefined,
            intensity_max: undefined,
            body_part: undefined,
            type: undefined,
            timesBefore_lower: undefined,
            timesBefore_upper: undefined
        };
    }
    getLogsWithFilter(f) {
        return this.logEntries.filter((log) => {
            return (f.datetime_min === undefined || log.datetime >= f.datetime_min) &&
                (f.datetime_max === undefined || log.datetime <= f.datetime_max) &&
                (f.intensity_min === undefined || log.intensity >= f.intensity_min) &&
                (f.intensity_max === undefined || log.intensity <= f.intensity_max) &&
                (f.body_part === undefined || log.body_part === f.body_part) &&
                (f.type === undefined || log.type === f.type) &&
                (f.timesBefore_lower === undefined || log.timesBefore >= f.timesBefore_lower) &&
                (f.timesBefore_upper === undefined || log.timesBefore <= f.timesBefore_upper);
        });
    }
    updateIsEntered(value) {
        this.isEnteredSubj.next(value);
    }
};
LogDataService.ctorParameters = () => [];
LogDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LogDataService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"]],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_datetime_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/datetime-authguard.service */ "PBIg");
/* harmony import */ var _services_symptoms_authguard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/symptoms-authguard.service */ "y1hg");





const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'datetime',
        loadChildren: () => Promise.all(/*! import() | datetime-page-datetime-page-module */[__webpack_require__.e("common"), __webpack_require__.e("datetime-page-datetime-page-module")]).then(__webpack_require__.bind(null, /*! ./datetime-page/datetime-page.module */ "EtE7")).then(m => m.DatetimePagePageModule),
        canDeactivate: [_services_datetime_authguard_service__WEBPACK_IMPORTED_MODULE_3__["DatetimeAuthguardService"]],
    },
    {
        path: 'viewlogs-page',
        loadChildren: () => Promise.all(/*! import() | view-logs-view-logs-module */[__webpack_require__.e("common"), __webpack_require__.e("view-logs-view-logs-module")]).then(__webpack_require__.bind(null, /*! ./view-logs/view-logs.module */ "pKcb")).then(m => m.ViewLogsPageModule)
    },
    {
        path: 'bodymap',
        loadChildren: () => __webpack_require__.e(/*! import() | bodymap-page-bodymap-page-module */ "bodymap-page-bodymap-page-module").then(__webpack_require__.bind(null, /*! ./bodymap-page/bodymap-page.module */ "SL9C")).then(m => m.BodymapPagePageModule)
    },
    {
        path: 'symptoms',
        loadChildren: () => Promise.all(/*! import() | symptoms-page-symptoms-page-module */[__webpack_require__.e("common"), __webpack_require__.e("symptoms-page-symptoms-page-module")]).then(__webpack_require__.bind(null, /*! ./symptoms-page/symptoms-page.module */ "Mifg")).then(m => m.SymptomsPagePageModule),
        canDeactivate: [_services_symptoms_authguard_service__WEBPACK_IMPORTED_MODULE_4__["SymptomsAuthguardService"]]
    },
    {
        path: 'comments',
        loadChildren: () => __webpack_require__.e(/*! import() | comments-page-comments-page-module */ "comments-page-comments-page-module").then(__webpack_require__.bind(null, /*! ./comments-page/comments-page.module */ "Z713")).then(m => m.CommentsPagePageModule)
    },
    {
        path: 'redflags',
        loadChildren: () => Promise.all(/*! import() | redflags-page-redflags-page-module */[__webpack_require__.e("common"), __webpack_require__.e("redflags-page-redflags-page-module")]).then(__webpack_require__.bind(null, /*! ./redflags-page/redflags-page.module */ "n05n")).then(m => m.RedflagsPagePageModule)
    },
    {
        path: 'view-logs',
        loadChildren: () => Promise.all(/*! import() | view-logs-view-logs-module */[__webpack_require__.e("common"), __webpack_require__.e("view-logs-view-logs-module")]).then(__webpack_require__.bind(null, /*! ./view-logs/view-logs.module */ "pKcb")).then(m => m.ViewLogsPageModule)
    },
    {
        path: 'log',
        loadChildren: () => __webpack_require__.e(/*! import() | log-page-log-page-module */ "log-page-log-page-module").then(__webpack_require__.bind(null, /*! ./log-page/log-page.module */ "7mqV")).then(m => m.LogPagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "y1hg":
/*!********************************************************!*\
  !*** ./src/app/services/symptoms-authguard.service.ts ***!
  \********************************************************/
/*! exports provided: SymptomsAuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsAuthguardService", function() { return SymptomsAuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _log_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log-data.service */ "YKFw");





let SymptomsAuthguardService = class SymptomsAuthguardService {
    constructor(router, dataService, alertCtrl) {
        this.router = router;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
    }
    canDeactivate(component) {
        console.log("checking candeactivate");
        const missingFields = [];
        if (this.dataService.currentLogIntensity === undefined) {
            missingFields.push("Intensity");
        }
        if (this.dataService.currentLogType === undefined) {
            missingFields.push("Pain type");
        }
        console.log(`times before: ${this.dataService.currentLogTimesBefore}`);
        if (!this.dataService.currentLogTimesBefore && this.dataService.currentLogTimesBefore !== 0) {
            missingFields.push("How many times have you experienced this pain before");
        }
        if (this.dataService.currentLogMobility === undefined || this.dataService.currentLogMobility.length === 0) {
            missingFields.push("When do you feel pain");
        }
        if (this.dataService.currentLogIs_constant === undefined) {
            missingFields.push("Constant or intermittent");
        }
        if (missingFields.length > 0) {
            this.alertCtrl.create({
                message: `Please provide values for the following fields:<br>
                  <ul>
                    ${missingFields.map(item => `<li>${item}</li>`).join('')}
                  </ul>`,
                buttons: ['OK']
            }).then((prompt) => {
                prompt.present();
            });
            return false;
        }
        return true;
    }
};
SymptomsAuthguardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _log_data_service__WEBPACK_IMPORTED_MODULE_4__["LogDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
SymptomsAuthguardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SymptomsAuthguardService);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map