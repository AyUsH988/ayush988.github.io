(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-status-component></app-status-component>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'covid-status';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _status_component_status_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status-component/status-component.component */ "./src/app/status-component/status-component.component.ts");
/* harmony import */ var _status_component_status_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-component/status-service.service */ "./src/app/status-component/status-service.service.ts");
/* harmony import */ var _customhttp_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customhttp-service.service */ "./src/app/customhttp-service.service.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./piechart/piechart.component */ "./src/app/piechart/piechart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { ChartsModule } from 'ng2-charts';
// import 'chartjs-plugin-labels';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _status_component_status_component_component__WEBPACK_IMPORTED_MODULE_4__["StatusComponentComponent"],
                _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_9__["PiechartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
            ],
            providers: [_status_component_status_service_service__WEBPACK_IMPORTED_MODULE_5__["StatusService"], _customhttp_service_service__WEBPACK_IMPORTED_MODULE_6__["CustomHttpService"]],
            // exports: [ ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customhttp-service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/customhttp-service.service.ts ***!
  \***********************************************/
/*! exports provided: CustomHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpService", function() { return CustomHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_status_component_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/status-component/api-config */ "./src/app/status-component/api-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomHttpService = /** @class */ (function () {
    function CustomHttpService(http) {
        this.http = http;
        this.covidurl = _app_status_component_api_config__WEBPACK_IMPORTED_MODULE_2__["CovidUrl"];
        this.countryUrl = _app_status_component_api_config__WEBPACK_IMPORTED_MODULE_2__["countries"];
        this.getStatusByCountryUrl = _app_status_component_api_config__WEBPACK_IMPORTED_MODULE_2__["getStatusByCountry"];
        this.stateUrl = _app_status_component_api_config__WEBPACK_IMPORTED_MODULE_2__["stateUrl"];
        this.cityUrl = _app_status_component_api_config__WEBPACK_IMPORTED_MODULE_2__["cityUrl"];
    }
    CustomHttpService.prototype.getCountrtList = function () {
        return this.http.get(this.countryUrl);
    };
    CustomHttpService.prototype.getStatusOfCountry = function () {
        return this.http.get(this.getStatusByCountryUrl);
    };
    CustomHttpService.prototype.getStatusOfState = function () {
        return this.http.get(this.stateUrl);
    };
    CustomHttpService.prototype.getStatusOfCity = function () {
        return this.http.get(this.cityUrl);
    };
    CustomHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomHttpService);
    return CustomHttpService;
}());



/***/ }),

/***/ "./src/app/piechart/piechart.component.html":
/*!**************************************************!*\
  !*** ./src/app/piechart/piechart.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n  <canvas baseChart style=\"cursor: pointer;\"\r\n      [chartType]=\"chartType\"\r\n      [datasets]=\"chartDatasets\"\r\n      [labels]=\"chartLabels\"\r\n      [options]=\"chartOptions\"\r\n      [legend]=\"true\"\r\n      (chartClick)=\"chartClicked($event)\">\r\n  </canvas>\r\n</div> -->"

/***/ }),

/***/ "./src/app/piechart/piechart.component.scss":
/*!**************************************************!*\
  !*** ./src/app/piechart/piechart.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/piechart/piechart.component.ts":
/*!************************************************!*\
  !*** ./src/app/piechart/piechart.component.ts ***!
  \************************************************/
/*! exports provided: PiechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiechartComponent", function() { return PiechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PiechartComponent = /** @class */ (function () {
    function PiechartComponent() {
    }
    // @Input() chartData;
    // @Input() chartLabel;
    // chartType: string = 'pie';
    // chartDatasets: any;
    // chartLabels: [];
    // @Output() onClick = new EventEmitter();
    PiechartComponent.prototype.ngOnInit = function () {
        // this.renderChart()
    };
    // renderChart() {
    //   this.chartDatasets = [{
    //     data: this.chartData,
    //     borderWidth: 0, //this will hide border
    //   }];
    //   this.chartLabels = this.chartLabel;
    // }
    // public chartOptions: any = {
    //   responsive: true,
    //   // maintainAspectRatio: true,
    //   borderWidth: 0,
    //   legend: {
    //     segmentShowStroke: false,
    //     display: true,
    //     position: "bottom",
    //     labels: {
    //       // fontColor: '#FF3333',
    //       boxWidth: 12,
    //       fontSize: 10,
    //       // usePointStyle: true,
    //       cursor: "pointer",
    //     }
    //   },
    //   plugins: {
    //     labels: {
    //       render: 'value',
    //     }
    //   },
    // }
    // chartClicked(event) {
    //   this.onClick.emit(event);
    // }
    PiechartComponent.prototype.ngOnChanges = function (changes) {
        // if (changes && changes.chartData && changes.chartData.currentValue) {
        //   this.chartData = changes.chartData.currentValue;
        // this.chartLabel = changes.chartLabel.currentValue;
        // this.renderChart();
    };
    PiechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-piechart',
            template: __webpack_require__(/*! ./piechart.component.html */ "./src/app/piechart/piechart.component.html"),
            styles: [__webpack_require__(/*! ./piechart.component.scss */ "./src/app/piechart/piechart.component.scss")],
        })
    ], PiechartComponent);
    return PiechartComponent;
}());



/***/ }),

/***/ "./src/app/status-component/api-config.ts":
/*!************************************************!*\
  !*** ./src/app/status-component/api-config.ts ***!
  \************************************************/
/*! exports provided: CovidUrl, countries, getStatusByCountry, stateUrl, cityUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidUrl", function() { return CovidUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatusByCountry", function() { return getStatusByCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateUrl", function() { return stateUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityUrl", function() { return cityUrl; });
var CovidUrl = 'https://api.covid19api.com/country/south-africa';
var countries = 'https://api.covid19api.com/summary';
var getStatusByCountry = 'https://api.covid19api.com/live/country/south-africa';
// const stateUrl='https://api.covid19india.org/data.json'
var cityUrl = 'https://api.covid19india.org/state_district_wise.json';
var stateUrl = 'https://covid-india-cases.herokuapp.com/states';



/***/ }),

/***/ "./src/app/status-component/status-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/status-component/status-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-width {\r\n    width: 300px;\r\n}\r\n\r\n.cursor {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/status-component/status-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/status-component/status-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"form-container my-3 mx-2 position-relative\">\r\n    <div class=\"d-flex justify-content-center ticket-options-container text-center\">\r\n      <div class=\"col cursor col-md-2 text-center p-2 cursor-pointer badge badge-pill\" (click)=\"showByType('country')\"\r\n        [ngClass]=\"{'badge-primary' : selectedType == 'country',\r\n                      'badge-light' : selectedType != 'country' }\">\r\n        By Country\r\n      </div>\r\n\r\n      <div class=\"col col-md-2 cursor text-center p-2 cursor-pointer badge badge-pill\" (click)=\"showByType('state')\"\r\n        [ngClass]=\"{'badge-primary' : selectedType == 'state',\r\n                      'badge-light' : selectedType != 'state'}\">\r\n        By State\r\n      </div>\r\n\r\n      <div class=\"col col-md-2 cursor text-center p-2 cursor-pointer badge badge-pill\" (click)=\"showByType('city')\"\r\n        [ngClass]=\"{'badge-primary' : selectedType == 'city',\r\n                      'badge-light' : selectedType != 'city'}\">\r\n        By City\r\n      </div>\r\n    </div>\r\n    <section *ngIf=\"selectedType == 'country'\">\r\n      <div class=\"h5 text-center text-primary my-4\">Get report By Country</div>\r\n      <div class=\"row my-5\">\r\n        <div class=\"col-4 text-white\">\r\n          Country\r\n        </div>\r\n        <div class=\"col-8\" *ngIf=\"countriesList\">\r\n          <ng-autocomplete [data]=\"countriesList.Countries\" [searchKeyword]=\"keyword\"\r\n            (selected)='selectCustomer($event)' placeholder=\"Enter the country\" [itemTemplate]=\"itemTemplate\" name=\"\"\r\n            [notFoundTemplate]=\"notFoundTemplate\">\r\n          </ng-autocomplete>\r\n          <ng-template #itemTemplate let-item>\r\n            <a [innerHTML]=\"item.Country\"></a>\r\n          </ng-template>\r\n\r\n          <ng-template #notFoundTemplate let-notFound>\r\n            <div [innerHTML]=\"notFound\"></div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"activeCountryStatus\" class=\"h5 text-center text-primary my-4\">Total Count of Covid-19 in\r\n        {{activeCountryStatus.Country}}</div>\r\n      <div class=\"row my-2\" *ngIf=\"activeCountryStatus\">\r\n        <div class=\"col text-center card bg-primary text-white p-2 mx-1\">\r\n          <span>Confirmed : {{activeCountryStatus.TotalConfirmed}}</span>\r\n          <span>Number of active cases of Covid-19</span>\r\n          <span>Last Updated On {{activeCountryStatus.Date | date: 'fullDate'}}</span>\r\n        </div>\r\n\r\n        <div class=\"col text-center card bg-success text-white p-2 mx-1\">\r\n          <span>Recoverd : {{activeCountryStatus.TotalRecovered}}</span>\r\n          <span>Number of Recoveries from Covid-19</span>\r\n          <span>Last Updated On {{activeCountryStatus.Date | date: 'fullDate'}}</span>\r\n        </div>\r\n        <div class=\"col text-center card bg-danger text-white p-2 mx-1\">\r\n\r\n          <span>Death : {{activeCountryStatus.TotalDeaths}}</span>\r\n          <span>Number of Deaths caused by Covid-19</span>\r\n          <span>Last Updated On {{activeCountryStatus.Date | date: 'fullDate'}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"activeCountryStatus\" class=\"h5 text-center text-primary my-4\">Total Count of Covid-19 in\r\n        {{activeCountryStatus.Country}} on {{activeCountryStatus.Date | date: 'fullDate'}}</div>\r\n      <div class=\"row my-2\" *ngIf=\"activeCountryStatus\">\r\n        <div class=\"col text-center card bg-primary text-white p-2 mx-1\">\r\n          <span>Confirmed : {{activeCountryStatus.NewConfirmed}}</span>\r\n          <span>Number of active cases of Covid-19</span>\r\n          <span>Last Updated On {{activeCountryStatus.Date | date: 'fullDate'}}</span>\r\n        </div>\r\n\r\n        <div class=\"col text-center card bg-success text-white p-2 mx-1\">\r\n          <span>Recoverd : {{activeCountryStatus.NewRecovered}}</span>\r\n          <span>Number of Recoveries from Covid-19</span>\r\n          <span>Last Updated On {{activeCountryStatus.Date | date: 'fullDate'}}</span>\r\n        </div>\r\n        <div class=\"col text-center card bg-danger text-white p-2 mx-1\">\r\n\r\n          <span>Death : {{activeCountryStatus.NewDeaths}}</span>\r\n          <span>Number of Deaths caused by Covid-19</span>\r\n          <span>Last Updated On {{activeCountryStatus.Date | date: 'fullDate'}}</span>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"selectedType == 'state'\">\r\n      <div class=\"h5 text-center text-primary my-4\">Get report By Indian States</div>\r\n      <div class=\"row my-5\">\r\n        <div class=\"col-4 text-white\">\r\n          State:\r\n        </div>\r\n        <div class=\"col-8\" *ngIf=\"stateList\">\r\n          <ng-autocomplete [data]=\"stateList\" [searchKeyword]=\"'state'\" (selected)='selectedState($event)'\r\n            [itemTemplate]=\"itemTemplate1\" name=\"\" [notFoundTemplate]=\"notFoundTemplate1\">\r\n          </ng-autocomplete>\r\n          <ng-template #itemTemplate1 let-item>\r\n            <a [innerHTML]=\"item.state\"></a>\r\n          </ng-template>\r\n\r\n          <ng-template #notFoundTemplate1 let-notFound>\r\n            <div [innerHTML]=\"notFound\"></div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"activeStateStatus\" class=\"h5 text-center text-primary my-4\">Total Count of Covid-19 in\r\n        {{activeStateStatus.state}}</div>\r\n\r\n      <div class=\"row my-2\" *ngIf=\"activeStateStatus\">\r\n        <div class=\"col text-center card bg-primary text-white p-2 mx-1\">\r\n          <span>Confirmed : {{activeStateStatus.noOfCases}}</span>\r\n          <span>Number of active cases of Covid-19</span>\r\n        </div>\r\n\r\n        <div class=\"col text-center card bg-success text-white p-2 mx-1\">\r\n          <span>Recoverd : {{activeStateStatus.cured}}</span>\r\n          <span>Number of Recoveries from Covid-19</span>\r\n        </div>\r\n        <div class=\"col text-center card bg-danger text-white p-2 mx-1\">\r\n\r\n          <span>Death : {{activeStateStatus.deaths}}</span>\r\n          <span>Number of Deaths caused by Covid-19</span>\r\n\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n\r\n    <!-- By City -->\r\n\r\n    <section *ngIf=\"selectedType == 'city'\">\r\n      <div class=\"h5 text-center text-primary my-4\">Get report By Indian City</div>\r\n      <div class=\"row my-5\">\r\n        <div class=\"col-4 text-white\">\r\n          Select the state:\r\n        </div>\r\n        <div class=\"col-8\" *ngIf=\"statesInDistrict\">\r\n          <ng-autocomplete [data]=\"statesInDistrict\" [searchKeyword]=\"'state'\" (selected)='getCityList($event)'\r\n            [itemTemplate]=\"itemTemplate1\" name=\"\" [notFoundTemplate]=\"notFoundTemplate1\">\r\n          </ng-autocomplete>\r\n          <ng-template #itemTemplate1 let-item>\r\n            <a [innerHTML]=\"item\"></a>\r\n          </ng-template>\r\n\r\n          <ng-template #notFoundTemplate1 let-notFound>\r\n            <div [innerHTML]=\"notFound\"></div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row my-5\">\r\n        <div class=\"col-4 text-white\">\r\n          Select the City:\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <ng-autocomplete [data]=\"citiesList\" [searchKeyword]=\"\" (selected)='getStatusOfCity($event)'\r\n            [itemTemplate]=\"itemTemplate1\" name=\"\" [notFoundTemplate]=\"notFoundTemplate1\">\r\n          </ng-autocomplete>\r\n          <ng-template #itemTemplate1 let-item>\r\n            <a [innerHTML]=\"item\"></a>\r\n          </ng-template>\r\n\r\n          <ng-template #notFoundTemplate1 let-notFound>\r\n            <div [innerHTML]=\"notFound\"></div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"activeCityStatus\" class=\"h5 text-center text-primary my-4\">Total Count of Covid-19 in {{selectedCity}}\r\n      </div>\r\n\r\n      <div class=\"row my-2\" *ngIf=\"activeCityStatus\">\r\n        <div class=\"col text-center card bg-primary text-white p-2 mx-1\">\r\n          <span>Confirmed : {{activeCityStatus.confirmed}}</span>\r\n          <span>Number of confirmed cases of Covid-19</span>\r\n        </div>\r\n\r\n        <div class=\"col text-center card bg-warning text-white p-2 mx-1\">\r\n          <span>Active : {{activeCityStatus.active}}</span>\r\n          <span>Number of active cases of Covid-19</span>\r\n        </div>\r\n\r\n        <div class=\"col text-center card bg-success text-white p-2 mx-1\">\r\n          <span>Recoverd : {{activeCityStatus.recovered}}</span>\r\n          <span>Number of Recoveries from Covid-19</span>\r\n        </div>\r\n        <div class=\"col text-center card bg-danger text-white p-2 mx-1\">\r\n\r\n          <span>Deceased : {{activeCityStatus.deceased}}</span>\r\n          <span>Number of deceased caused by Covid-19</span>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"activeCityStatus\" class=\"h5 text-center text-primary my-4\">Today's Count in {{selectedCity}}</div>\r\n      <div class=\"row my-2\" *ngIf=\"activeCityStatus\">\r\n        <div class=\"col text-center card bg-primary text-white p-2 mx-1\">\r\n          <span>Confirmed : {{activeCityStatus.delta.confirmed}}</span>\r\n          <span>Number of confirmed cases of Covid-19</span>\r\n        </div>\r\n\r\n        <div class=\"col text-center card bg-success text-white p-2 mx-1\">\r\n          <span>Recoverd : {{activeCityStatus.delta.recovered}}</span>\r\n          <span>Number of Recoveries from Covid-19</span>\r\n        </div>\r\n        <div class=\"col text-center card bg-danger text-white p-2 mx-1\">\r\n\r\n          <span>Deceased : {{activeCityStatus.delta.deceased}}</span>\r\n          <span>Number of deceased caused by Covid-19</span>\r\n\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>"

/***/ }),

/***/ "./src/app/status-component/status-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/status-component/status-component.component.ts ***!
  \****************************************************************/
/*! exports provided: StatusComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponentComponent", function() { return StatusComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customhttp_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customhttp-service.service */ "./src/app/customhttp-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponentComponent = /** @class */ (function () {
    function StatusComponentComponent(httpService) {
        this.httpService = httpService;
        this.keyword = 'Country';
        this.backupList = [];
        this.stateList = [];
        this.statesInDistrict = [];
        this.selectedCity = '';
        this.selectedType = 'country';
        this.countriesList = [];
    }
    StatusComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getCountrtList().subscribe(function (res) {
            _this.countriesList = res;
        });
        this.httpService.getStatusOfState().subscribe(function (res) {
            _this.stateList = res;
            console.log(res);
        });
        this.httpService.getStatusOfCity().subscribe(function (res) {
            _this.districtList = res;
            _this.statesInDistrict = Object.keys(_this.districtList);
            console.log(res);
        });
    };
    StatusComponentComponent.prototype.selectCustomer = function (selected) {
        this.activeCountryStatus = selected;
    };
    StatusComponentComponent.prototype.selectedState = function (event) {
        this.activeStateStatus = event;
    };
    StatusComponentComponent.prototype.getCityList = function (state) {
        this.citiesList = Object.keys(this.districtList[state]['districtData']);
        this.selectedStateForCity = state;
    };
    StatusComponentComponent.prototype.getStatusOfCity = function (event) {
        this.selectedCity = event;
        console.log('city', event);
        this.activeCityStatus = this.districtList[this.selectedStateForCity]['districtData'][event];
    };
    StatusComponentComponent.prototype.showByType = function (opt) {
        this.selectedType = opt;
    };
    StatusComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status-component',
            template: __webpack_require__(/*! ./status-component.component.html */ "./src/app/status-component/status-component.component.html"),
            styles: [__webpack_require__(/*! ./status-component.component.css */ "./src/app/status-component/status-component.component.css")]
        }),
        __metadata("design:paramtypes", [_customhttp_service_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]])
    ], StatusComponentComponent);
    return StatusComponentComponent;
}());



/***/ }),

/***/ "./src/app/status-component/status-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/status-component/status-service.service.ts ***!
  \************************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customhttp_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customhttp-service.service */ "./src/app/customhttp-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusService = /** @class */ (function () {
    function StatusService(httpService) {
        this.httpService = httpService;
    }
    StatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_customhttp_service_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git repo\covid-19-status\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map