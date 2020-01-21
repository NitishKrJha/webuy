(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footers/footers.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footers/footers.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-tabs>\n      <ion-tab-bar slot=\"bottom\" color=\"matte\">\n        <ion-tab-button>\n          <ion-icon name=\"ios-home\" color=\"medium\" (click)=\"goHome()\"></ion-icon>\n        </ion-tab-button>\n    \n        <ion-tab-button>\n          <ion-icon name=\"ios-power\" color=\"medium\" (click)=\"logout()\"></ion-icon>\n        </ion-tab-button>\n    \n        <ion-tab-button>\n          <ion-icon name=\"ios-contact\" color=\"medium\" (click)=\"goProfile()\"></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    \n    </ion-tabs>\n</ion-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/headers/headers.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/headers/headers.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar color=\"giftapp\">\n  <ion-buttons slot=\"start\" *ngIf=\"text !== 'home' && text !== 'login' && text !== 'otp_verify'\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">\n          <img class=\"parallax-obj parallax-down-obj\" [ngClass]=\"(text !== 'home' && text !== 'login' && text !== 'otp_verify') ? 'headImage1' : 'headImage2'\" src=\"{{iconUrl}}\">\n        </ion-text>\n      </ion-text>\n  </ion-title>\n</ion-toolbar>"

/***/ }),

/***/ "./src/app/_shared/_classes/base.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_shared/_classes/base.component.ts ***!
  \****************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/base.service */ "./src/app/_shared/_services/base.service.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _pages_app_update_app_update_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/app-update/app-update.page */ "./src/app/pages/app-update/app-update.page.ts");
/* harmony import */ var _services_router_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/router-storage.service */ "./src/app/_shared/_services/router-storage.service.ts");










let BaseComponent = class BaseComponent {
    constructor(injector) {
        this.isUpdateNotofication = 0;
        this.base = injector.get(_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]);
        this.actRoute = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]);
        this.mNetwork = injector.get(_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]);
        this.storage = injector.get(_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]);
        this.routStorage = injector.get(_services_router_storage_service__WEBPACK_IMPORTED_MODULE_9__["RouterStorageService"]);
        this.platform = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]);
    }
    initBaseComponent() {
        this.platform.backButton.subscribe(() => {
            console.log('this.constructor.name', this.constructor.name);
            if (this.constructor.name === 'HomePage') {
                this.platform.exitApp();
            }
        });
        this.apiSubscription = this.base.api.result.subscribe((data) => {
            if (data.length !== 0) {
                if (data.resultType === _constant__WEBPACK_IMPORTED_MODULE_2__["errorResult"]) {
                    // If any issue produce due to network or unavailibility of host
                    // const errorMessage = data.result.message ? data.result.message : 'something went wrong';
                    const errorMessage = 'Something went wrong please contact with support team';
                    this.base.shared.Alert.show_alert('Error!', errorMessage);
                    return true;
                }
                else if (data.result === undefined || data.result === null) {
                    // const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
                    const errorMessage = 'Something went wrong please contact with support team';
                    this.base.shared.Alert.show_alert('Error!', errorMessage);
                    return true;
                }
                else {
                    if (data.result.app_version_details !== undefined && Object.keys(data.result.app_version_details).length > 0) {
                        if (this.handleAppUpdate(data)) {
                            return false;
                        }
                    }
                    if ((data.result !== undefined && data.result.status !== true)) {
                        // If any internal issue or error occour at API which return blank or non JSON value
                        console.log('Msg Code', data.result);
                        // if ( data.result.msg_code === 'msg_1008') {
                        //   this.storage.clear();
                        //   this.router.navigate(['/login']);
                        // }
                        this.handleApiResponseError(data);
                    }
                    else {
                        // if ( data.result.msg_code === 'msg_1008') {
                        //   this.storage.clear();
                        //   this.router.navigate(['/login']);
                        // }
                        this.handleApiResponse(data);
                    }
                }
            }
        });
    }
    /**
     * this will handel all api response, must be override on child component
     *
     * @param data any
     */
    handleApiResponse(data) {
        console.log('Change Password Response333333333333333', data);
    }
    /**
     * this will handel all api response error, must be override on child component
     *
     * @param data any
     */
    handleApiResponseError(data) { }
    /**
     * this will handel all app update notification
     *
     * @param data any
     */
    handleAppUpdate(data) {
        this.routStorage.storage = {
            app_version_details: data.result.app_version_details
        };
        if (data.result.app_version_details.is_force_update === '0') {
            if (this.isUpdateNotofication === 0) {
                this.routStorage.storage.is_modal = 1;
                this.base.shared.Modal.showModal(_pages_app_update_app_update_page__WEBPACK_IMPORTED_MODULE_8__["AppUpdatePage"]);
                // this.base.shared.Alert.show_alert('Warning!', data.result.app_version_details.update_message);
                // this.isUpdateNotofication = 1;
                return false;
            }
        }
        else if (data.result.app_version_details.is_force_update === '1') {
            this.router.navigate(['/app-update']);
            return true;
        }
    }
    handleValidationError(data) { }
    /**
     * unsubscribe api response subscriber on component destroy
     */
    ngOnDestroy() {
        if (this.apiSubscription !== undefined) {
            this.apiSubscription.unsubscribe();
        }
    }
};
BaseComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }
];
BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]])
], BaseComponent);



/***/ }),

/***/ "./src/app/_shared/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/_shared/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_headers_headers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/headers/headers.component */ "./src/app/components/headers/headers.component.ts");
/* harmony import */ var _components_footers_footers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/footers/footers.component */ "./src/app/components/footers/footers.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_footers_footers_component__WEBPACK_IMPORTED_MODULE_5__["FootersComponent"], _components_headers_headers_component__WEBPACK_IMPORTED_MODULE_4__["HeadersComponent"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _components_footers_footers_component__WEBPACK_IMPORTED_MODULE_5__["FootersComponent"],
            _components_headers_headers_component__WEBPACK_IMPORTED_MODULE_4__["HeadersComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/components/footers/footers.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/footers/footers.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVycy9mb290ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footers/footers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/footers/footers.component.ts ***!
  \*********************************************************/
/*! exports provided: FootersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootersComponent", function() { return FootersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");






let FootersComponent = class FootersComponent extends _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(navCtrl, router, loading, injector) {
        super(injector);
        this.navCtrl = navCtrl;
        this.router = router;
        this.loading = loading;
        this.title = 'Footer';
        this.text = '';
    }
    ngAfterViewInit() {
        this.text = this.textToUse;
    }
    goProfile() {
        this.router.navigate(['/myprofile']);
    }
    goHome() {
        this.router.navigate(['/home']);
    }
    logout() {
        this.loading.present();
        this.base.shared.Lstorage.fetchData('token').then(data => {
            this.base.api.logout({ token: data });
        });
    }
    goLogin() {
        this.router.navigate(['/login']);
    }
};
FootersComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('myText'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FootersComponent.prototype, "textToUse", void 0);
FootersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footers',
        template: __webpack_require__(/*! raw-loader!./footers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footers/footers.component.html"),
        styles: [__webpack_require__(/*! ./footers.component.scss */ "./src/app/components/footers/footers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], FootersComponent);



/***/ }),

/***/ "./src/app/components/headers/headers.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/headers/headers.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerimg {\n  margin: 0px auto 15px auto;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlcnMvaGVhZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXJzL2hlYWRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVycy9oZWFkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmltZ3tcbiAgICBtYXJnaW46IDBweCBhdXRvIDE1cHggYXV0bztcbiAgICBoZWlnaHQ6IDcwcHg7XG59IiwiLmhlYWRlcmltZyB7XG4gIG1hcmdpbjogMHB4IGF1dG8gMTVweCBhdXRvO1xuICBoZWlnaHQ6IDcwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/headers/headers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/headers/headers.component.ts ***!
  \*********************************************************/
/*! exports provided: HeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersComponent", function() { return HeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HeadersComponent = class HeadersComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.headerName = 'Home1';
        this.iconUrl = '';
        this.text = '';
        this.iconUrl = 'assets/images/header-logo.png';
    }
    ngAfterViewInit() {
        this.text = this.textToUse;
        if (this.text === 'giftList') {
            this.iconUrl = 'assets/images/gift2.png';
        }
        else if (this.text === 'voucherList') {
            this.iconUrl = 'assets/images/voucher3.png';
        }
    }
};
HeadersComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('myText'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeadersComponent.prototype, "textToUse", void 0);
HeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'headers',
        template: __webpack_require__(/*! raw-loader!./headers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/headers/headers.component.html"),
        styles: [__webpack_require__(/*! ./headers.component.scss */ "./src/app/components/headers/headers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], HeadersComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-register-register-module-es2015.js.map