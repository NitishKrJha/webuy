(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-productdetail-productdetail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/productdetail/productdetail.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/productdetail/productdetail.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>productdetail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/productdetail/productdetail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPageRoutingModule", function() { return ProductdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _productdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productdetail.page */ "./src/app/pages/productdetail/productdetail.page.ts");




var routes = [
    {
        path: '',
        component: _productdetail_page__WEBPACK_IMPORTED_MODULE_3__["ProductdetailPage"]
    }
];
var ProductdetailPageRoutingModule = /** @class */ (function () {
    function ProductdetailPageRoutingModule() {
    }
    ProductdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProductdetailPageRoutingModule);
    return ProductdetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/productdetail/productdetail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPageModule", function() { return ProductdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productdetail-routing.module */ "./src/app/pages/productdetail/productdetail-routing.module.ts");
/* harmony import */ var _productdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productdetail.page */ "./src/app/pages/productdetail/productdetail.page.ts");







var ProductdetailPageModule = /** @class */ (function () {
    function ProductdetailPageModule() {
    }
    ProductdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _productdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductdetailPageRoutingModule"]
            ],
            declarations: [_productdetail_page__WEBPACK_IMPORTED_MODULE_6__["ProductdetailPage"]]
        })
    ], ProductdetailPageModule);
    return ProductdetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/productdetail/productdetail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RkZXRhaWwvcHJvZHVjdGRldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/productdetail/productdetail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.page.ts ***!
  \***********************************************************/
/*! exports provided: ProductdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPage", function() { return ProductdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");







var ProductdetailPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductdetailPage, _super);
    function ProductdetailPage(navCtrl, loadingCtrl, alertCtrl, platform, events, menuCtrl, toastCtrl, route, loading, injector) {
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
        _this.productDetail = [];
        _this.productId = '';
        _this.initBaseComponent();
        return _this;
    }
    ProductdetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log('Params', _this.router.getCurrentNavigation().extras.queryParams);
            if (_this.router.getCurrentNavigation().extras.queryParams) {
                _this.qParams = _this.router.getCurrentNavigation().extras.queryParams;
                _this.productId = _this.qParams.productId;
                _this.base.api.productDetail({ product_id: _this.productId });
            }
        });
    };
    ProductdetailPage.prototype.handleApiResponse = function (data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productDetail"]) {
            this.productDetail = data.result && data.result.data.detail ? data.result.data.detail : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addToCart"]) {
            this.navCtrl.navigateRoot('/cart');
        }
    };
    ProductdetailPage.prototype.handleApiResponseError = function (data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productDetail"]) {
            this.productDetail = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addToCart"]) {
            var errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
    };
    ProductdetailPage.prototype.addToCart = function (id, title, price) {
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
    ProductdetailPage.ctorParameters = function () { return [
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
    ProductdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetail',
            template: __webpack_require__(/*! raw-loader!./productdetail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/productdetail/productdetail.page.html"),
            styles: [__webpack_require__(/*! ./productdetail.page.scss */ "./src/app/pages/productdetail/productdetail.page.scss")]
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
    ], ProductdetailPage);
    return ProductdetailPage;
}(_shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=pages-productdetail-productdetail-module-es5.js.map