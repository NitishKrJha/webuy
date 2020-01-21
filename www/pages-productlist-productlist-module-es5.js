(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-productlist-productlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/productlist/productlist.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/productlist/productlist.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n\t<ion-toolbar>\n\t  <ion-buttons slot=\"start\">\n\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t<ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n\t  </ion-buttons>\n\t  <ion-title>Product List</ion-title>\n\t</ion-toolbar>\n  </ion-header>\n  \n  <ion-content fullscreen common-parallax [scrollEvents]=\"true\">\n\t\t\n\t\n\t<div class=\"wrap-gallery-info pd-10\">\n\t  <ion-searchbar show-cancel-button cancel-button-text=\"Really Long Cancel\" color=\"danger\">\n\t\t</ion-searchbar>\n\t\t<div *ngIf=\"productList.length > 0\">\n\t\t<div class=\"element-gallery pd-5\" *ngFor=\"let item of productList | keyvalue; let i = index;\">\n\t\t\t<div (click)=\"viewImg('lemon1.png')\" class=\"wrap-element shadow-2\">\n\t\t\t\t<div class=\"thumb-view\">\n\t\t\t\t\t<img src=\"{{item.value.image_path + item.value.img_list[0].path_sm}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pd-10 txt-info txt-danger\">\n\t\t\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\" text-center>Rs. {{item.value.sale_price}}</h4>\n\t\t\t\t\t<p no-margin class=\"ellipsis fs-12\" text-center>{{item.value.title}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t\t<ion-button expand=\"block\" color=\"danger\" (click)=\"addToCart(item.value.product_id,item.value.title,item.value.sale_price)\">Add Cart</ion-button>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t</div>\n  \n  </ion-content>\n  "

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

/***/ "./src/app/pages/productlist/productlist-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/productlist/productlist-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageRoutingModule", function() { return ProductlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _productlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productlist.page */ "./src/app/pages/productlist/productlist.page.ts");




var routes = [
    {
        path: '',
        component: _productlist_page__WEBPACK_IMPORTED_MODULE_3__["ProductlistPage"]
    }
];
var ProductlistPageRoutingModule = /** @class */ (function () {
    function ProductlistPageRoutingModule() {
    }
    ProductlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProductlistPageRoutingModule);
    return ProductlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/productlist/productlist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/productlist/productlist.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageModule", function() { return ProductlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productlist-routing.module */ "./src/app/pages/productlist/productlist-routing.module.ts");
/* harmony import */ var _productlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productlist.page */ "./src/app/pages/productlist/productlist.page.ts");







var ProductlistPageModule = /** @class */ (function () {
    function ProductlistPageModule() {
    }
    ProductlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _productlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductlistPageRoutingModule"]
            ],
            declarations: [_productlist_page__WEBPACK_IMPORTED_MODULE_6__["ProductlistPage"]]
        })
    ], ProductlistPageModule);
    return ProductlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/productlist/productlist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/productlist/productlist.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-gallery-info .element-gallery {\n  display: inline-block;\n  width: 50%;\n  height: 40vw;\n}\n.wrap-gallery-info .element-gallery .wrap-element {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.wrap-gallery-info .element-gallery .wrap-element .thumb-view {\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.wrap-gallery-info .element-gallery .wrap-element .txt-info {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background-image: linear-gradient(-230deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9wcm9kdWN0bGlzdC9wcm9kdWN0bGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RsaXN0L3Byb2R1Y3RsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjtBRENFO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7QUNBSDtBRENHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdGxpc3QvcHJvZHVjdGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAtZ2FsbGVyeS1pbmZve1xuXHQuZWxlbWVudC1nYWxsZXJ5e1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR3aWR0aDogNTAlO1xuXHRcdGhlaWdodDogNDB2dztcblx0XHQud3JhcC1lbGVtZW50e1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdC8vIGhlaWdodDogMTAwJTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0LnRodW1iLXZpZXd7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDUwJTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHR9XG5cdFx0XHQudHh0LWluZm97XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsIHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC4yKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiLndyYXAtZ2FsbGVyeS1pbmZvIC5lbGVtZW50LWdhbGxlcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDB2dztcbn1cbi53cmFwLWdhbGxlcnktaW5mbyAuZWxlbWVudC1nYWxsZXJ5IC53cmFwLWVsZW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXAtZ2FsbGVyeS1pbmZvIC5lbGVtZW50LWdhbGxlcnkgLndyYXAtZWxlbWVudCAudGh1bWItdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud3JhcC1nYWxsZXJ5LWluZm8gLmVsZW1lbnQtZ2FsbGVyeSAud3JhcC1lbGVtZW50IC50eHQtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/productlist/productlist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/productlist/productlist.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPage", function() { return ProductlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");







var ProductlistPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductlistPage, _super);
    function ProductlistPage(navCtrl, loadingCtrl, alertCtrl, platform, events, menuCtrl, toastCtrl, route, loading, injector) {
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
        _this.productList = [];
        _this.pageType = '';
        _this.initBaseComponent();
        return _this;
    }
    ProductlistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log('Params', _this.router.getCurrentNavigation().extras.queryParams);
            if (_this.router.getCurrentNavigation().extras.queryParams) {
                _this.qParams = _this.router.getCurrentNavigation().extras.queryParams;
                _this.pageType = _this.qParams.pageType;
                if (_this.pageType === 'recentViewProductList') {
                    _this.base.api.recentViewProductList({});
                }
                else if (_this.pageType === 'trendsProductList') {
                    _this.base.api.trendsProductList({});
                }
                else if (_this.pageType === 'featureProductList') {
                    _this.base.api.featureProductList({});
                }
                else if (_this.pageType === 'productList') {
                    _this.base.api.productList({});
                }
                else {
                    _this.base.api.productList({});
                }
            }
            else {
                _this.base.api.productList({});
            }
        });
    };
    ProductlistPage.prototype.handleApiResponse = function (data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["recentViewProductList"]) {
            this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["trendsProductList"]) {
            this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["featureProductList"]) {
            this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productList"]) {
            this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addToCart"]) {
            var successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Success', successMessage);
        }
    };
    ProductlistPage.prototype.handleApiResponseError = function (data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["recentViewProductList"]) {
            this.productList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["trendsProductList"]) {
            this.productList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["featureProductList"]) {
            this.productList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productList"]) {
            this.productList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addToCart"]) {
            var errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
    };
    ProductlistPage.prototype.addToCart = function (id, title, price) {
        var _this = this;
        if (id === void 0) { id = 0; }
        if (title === void 0) { title = ''; }
        if (price === void 0) { price = ''; }
        this.base.shared.Lstorage.fetchData('customerId').then(function (data) {
            if (data) {
                _this.base.shared.Lstorage.delData('cartLogin');
                _this.base.shared.Lstorage.delData('cartItemId');
                _this.base.shared.Lstorage.delData('cartItemTitle');
                _this.base.shared.Lstorage.delData('cartItemPrice');
                _this.base.api.addToCart({
                    customer_id: data,
                    product_id: id,
                    product_price: price,
                    product_title: title,
                    ip_address: '192.168.0.1'
                });
            }
            else {
                _this.base.shared.Lstorage.setData('cartLogin', 1);
                _this.base.shared.Lstorage.setData('cartItemId', id);
                _this.base.shared.Lstorage.setData('cartItemTitle', title);
                _this.base.shared.Lstorage.setData('cartItemPrice', price);
                _this.navCtrl.navigateRoot('/login');
            }
        });
    };
    ProductlistPage.ctorParameters = function () { return [
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
    ProductlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productlist',
            template: __webpack_require__(/*! raw-loader!./productlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/productlist/productlist.page.html"),
            styles: [__webpack_require__(/*! ./productlist.page.scss */ "./src/app/pages/productlist/productlist.page.scss")]
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
    ], ProductlistPage);
    return ProductlistPage;
}(_shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=pages-productlist-productlist-module-es5.js.map