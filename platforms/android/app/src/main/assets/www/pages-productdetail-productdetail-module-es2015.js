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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _productdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productdetail.page */ "./src/app/pages/productdetail/productdetail.page.ts");




const routes = [
    {
        path: '',
        component: _productdetail_page__WEBPACK_IMPORTED_MODULE_3__["ProductdetailPage"]
    }
];
let ProductdetailPageRoutingModule = class ProductdetailPageRoutingModule {
};
ProductdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductdetailPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productdetail-routing.module */ "./src/app/pages/productdetail/productdetail-routing.module.ts");
/* harmony import */ var _productdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productdetail.page */ "./src/app/pages/productdetail/productdetail.page.ts");







let ProductdetailPageModule = class ProductdetailPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");







let ProductdetailPage = class ProductdetailPage extends _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(navCtrl, loadingCtrl, alertCtrl, platform, events, menuCtrl, toastCtrl, route, loading, injector) {
        super(injector);
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.loading = loading;
        this.productDetail = [];
        this.productId = '';
        this.initBaseComponent();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log('Params', this.router.getCurrentNavigation().extras.queryParams);
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.qParams = this.router.getCurrentNavigation().extras.queryParams;
                this.productId = this.qParams.productId;
                this.base.api.productDetail({ product_id: this.productId });
            }
        });
    }
    handleApiResponse(data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productDetail"]) {
            this.productDetail = data.result && data.result.data.detail ? data.result.data.detail : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addToCart"]) {
            this.navCtrl.navigateRoot('/cart');
        }
    }
    handleApiResponseError(data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productDetail"]) {
            this.productDetail = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addToCart"]) {
            const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
    }
    addToCart(id = 0, title = '', price = '') {
        this.base.shared.Lstorage.fetchData('customerId').then(data => {
            if (data) {
                this.base.shared.Lstorage.delData('cartLogin');
                this.base.shared.Lstorage.delData('cartItemId');
                this.base.shared.Lstorage.delData('cartItemTitle');
                this.base.shared.Lstorage.delData('cartItemPrice');
                this.base.api.addToCart({
                    customer_id: data,
                    product_id: id,
                    product_price: price,
                    product_title: title,
                    ip_address: '192.168.0.1'
                });
            }
            else {
                this.base.shared.Lstorage.setData('cartLogin', 1);
                this.base.shared.Lstorage.setData('cartItemId', id);
                this.base.shared.Lstorage.setData('cartItemTitle', title);
                this.base.shared.Lstorage.setData('cartItemPrice', price);
                this.navCtrl.navigateRoot('/login');
            }
        });
    }
};
ProductdetailPage.ctorParameters = () => [
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
];
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



/***/ })

}]);
//# sourceMappingURL=pages-productdetail-productdetail-module-es2015.js.map