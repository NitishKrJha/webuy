(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categorylist-categorylist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/categorylist/categorylist.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/categorylist/categorylist.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Category List</ion-title>\n    </ion-toolbar>\n    </ion-header>\n\n<ion-content fullscreen common-parallax [scrollEvents]=\"true\">\n  \t\n\n  <div class=\"wrap-gallery-info pd-10\">\n    <ion-searchbar show-cancel-button cancel-button-text=\"Really Long Cancel\" color=\"danger\">\n    </ion-searchbar>\n    <div *ngIf=\"categoryList.length > 0\">\n      <div class=\"element-gallery pd-5\" *ngFor=\"let item of categoryList | keyvalue; let i = index;\">\n        <div (click)=\"viewImg('lemon1.png')\" class=\"wrap-element shadow-2\">\n          <div class=\"thumb-view\">\n            <img src=\"{{imgPath +'level1/'+ item.value.icon}}\">\n          </div>\n          <div class=\"pd-10 txt-info txt-dark\">\n            <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">{{item.value.name}}</h4>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _pages_app_update_app_update_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/app-update/app-update.page */ "./src/app/pages/app-update/app-update.page.ts");
/* harmony import */ var _services_router_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/router-storage.service */ "./src/app/_shared/_services/router-storage.service.ts");










var BaseComponent = /** @class */ (function () {
    function BaseComponent(injector) {
        this.isUpdateNotofication = 0;
        this.base = injector.get(_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]);
        this.actRoute = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]);
        this.mNetwork = injector.get(_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]);
        this.storage = injector.get(_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]);
        this.routStorage = injector.get(_services_router_storage_service__WEBPACK_IMPORTED_MODULE_9__["RouterStorageService"]);
        this.platform = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]);
    }
    BaseComponent.prototype.initBaseComponent = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () {
            console.log('this.constructor.name', _this.constructor.name);
            if (_this.constructor.name === 'HomePage') {
                _this.platform.exitApp();
            }
        });
        this.apiSubscription = this.base.api.result.subscribe(function (data) {
            if (data.length !== 0) {
                if (data.resultType === _constant__WEBPACK_IMPORTED_MODULE_2__["errorResult"]) {
                    // If any issue produce due to network or unavailibility of host
                    // const errorMessage = data.result.message ? data.result.message : 'something went wrong';
                    var errorMessage = 'Something went wrong please contact with support team';
                    _this.base.shared.Alert.show_alert('Error!', errorMessage);
                    return true;
                }
                else if (data.result === undefined || data.result === null) {
                    // const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
                    var errorMessage = 'Something went wrong please contact with support team';
                    _this.base.shared.Alert.show_alert('Error!', errorMessage);
                    return true;
                }
                else {
                    if (data.result.app_version_details !== undefined && Object.keys(data.result.app_version_details).length > 0) {
                        if (_this.handleAppUpdate(data)) {
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
                        _this.handleApiResponseError(data);
                    }
                    else {
                        // if ( data.result.msg_code === 'msg_1008') {
                        //   this.storage.clear();
                        //   this.router.navigate(['/login']);
                        // }
                        _this.handleApiResponse(data);
                    }
                }
            }
        });
    };
    /**
     * this will handel all api response, must be override on child component
     *
     * @param data any
     */
    BaseComponent.prototype.handleApiResponse = function (data) {
        console.log('Change Password Response333333333333333', data);
    };
    /**
     * this will handel all api response error, must be override on child component
     *
     * @param data any
     */
    BaseComponent.prototype.handleApiResponseError = function (data) { };
    /**
     * this will handel all app update notification
     *
     * @param data any
     */
    BaseComponent.prototype.handleAppUpdate = function (data) {
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
    };
    BaseComponent.prototype.handleValidationError = function (data) { };
    /**
     * unsubscribe api response subscriber on component destroy
     */
    BaseComponent.prototype.ngOnDestroy = function () {
        if (this.apiSubscription !== undefined) {
            this.apiSubscription.unsubscribe();
        }
    };
    BaseComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }
    ]; };
    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/pages/categorylist/categorylist-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/categorylist/categorylist-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CategorylistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistPageRoutingModule", function() { return CategorylistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categorylist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorylist.page */ "./src/app/pages/categorylist/categorylist.page.ts");




var routes = [
    {
        path: '',
        component: _categorylist_page__WEBPACK_IMPORTED_MODULE_3__["CategorylistPage"]
    }
];
var CategorylistPageRoutingModule = /** @class */ (function () {
    function CategorylistPageRoutingModule() {
    }
    CategorylistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CategorylistPageRoutingModule);
    return CategorylistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/categorylist/categorylist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/categorylist/categorylist.module.ts ***!
  \***********************************************************/
/*! exports provided: CategorylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistPageModule", function() { return CategorylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categorylist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorylist-routing.module */ "./src/app/pages/categorylist/categorylist-routing.module.ts");
/* harmony import */ var _categorylist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorylist.page */ "./src/app/pages/categorylist/categorylist.page.ts");







var CategorylistPageModule = /** @class */ (function () {
    function CategorylistPageModule() {
    }
    CategorylistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _categorylist_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategorylistPageRoutingModule"]
            ],
            declarations: [_categorylist_page__WEBPACK_IMPORTED_MODULE_6__["CategorylistPage"]]
        })
    ], CategorylistPageModule);
    return CategorylistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/categorylist/categorylist.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/categorylist/categorylist.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-gallery-info .element-gallery {\n  display: inline-block;\n  width: 50%;\n  height: 40vw;\n}\n.wrap-gallery-info .element-gallery .wrap-element {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.wrap-gallery-info .element-gallery .wrap-element .thumb-view {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.wrap-gallery-info .element-gallery .wrap-element .txt-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background-image: linear-gradient(-230deg, #bf7890, rgba(31, 31, 31, 0.2));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9jYXRlZ29yeWxpc3QvY2F0ZWdvcnlsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnlsaXN0L2NhdGVnb3J5bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7QURDRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NIO0FEQUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLDBFQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeWxpc3QvY2F0ZWdvcnlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwLWdhbGxlcnktaW5mb3tcblx0LmVsZW1lbnQtZ2FsbGVyeXtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRoZWlnaHQ6IDQwdnc7XG5cdFx0LndyYXAtZWxlbWVudHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdC50aHVtYi12aWV3e1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdH1cblx0XHRcdC50eHQtaW5mb3tcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIzMGRlZywgcmdiKDE5MSwgMTIwLCAxNDQpLCByZ2JhKDMxLCAzMSwgMzEsIDAuMikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi53cmFwLWdhbGxlcnktaW5mbyAuZWxlbWVudC1nYWxsZXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQwdnc7XG59XG4ud3JhcC1nYWxsZXJ5LWluZm8gLmVsZW1lbnQtZ2FsbGVyeSAud3JhcC1lbGVtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXAtZ2FsbGVyeS1pbmZvIC5lbGVtZW50LWdhbGxlcnkgLndyYXAtZWxlbWVudCAudGh1bWItdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXAtZ2FsbGVyeS1pbmZvIC5lbGVtZW50LWdhbGxlcnkgLndyYXAtZWxlbWVudCAudHh0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjMwZGVnLCAjYmY3ODkwLCByZ2JhKDMxLCAzMSwgMzEsIDAuMikpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/categorylist/categorylist.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/categorylist/categorylist.page.ts ***!
  \*********************************************************/
/*! exports provided: CategorylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistPage", function() { return CategorylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");







var CategorylistPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategorylistPage, _super);
    function CategorylistPage(navCtrl, loadingCtrl, alertCtrl, platform, events, menuCtrl, toastCtrl, route, loading, injector) {
        var _this = _super.call(this, injector) || this;
        _this.navCtrl = navCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.events = events;
        _this.menuCtrl = menuCtrl;
        _this.toastCtrl = toastCtrl;
        _this.route = route;
        _this.loading = loading;
        _this.categoryList = [];
        _this.imgPath = 'http://minisoftsolution.com/webuy/uploads/category/';
        _this.initBaseComponent();
        return _this;
    }
    CategorylistPage.prototype.ngOnInit = function () {
        this.base.api.categoryList({});
    };
    CategorylistPage.prototype.handleApiResponse = function (data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["categoryList"]) {
            this.categoryList = data.result && data.result.data ? data.result.data : [];
        }
    };
    CategorylistPage.prototype.handleApiResponseError = function (data) {
        console.log('data', data);
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["categoryList"]) {
            this.categoryList = [];
        }
    };
    CategorylistPage.prototype.viewImg = function (name) {
        this.router.navigateByUrl('/productlist');
    };
    CategorylistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    CategorylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categorylist',
            template: __webpack_require__(/*! raw-loader!./categorylist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/categorylist/categorylist.page.html"),
            styles: [__webpack_require__(/*! ./categorylist.page.scss */ "./src/app/pages/categorylist/categorylist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], CategorylistPage);
    return CategorylistPage;
}(_shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=pages-categorylist-categorylist-module-es5.js.map