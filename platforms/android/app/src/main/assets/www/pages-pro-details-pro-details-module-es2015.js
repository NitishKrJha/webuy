(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pro-details-pro-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pro-details/pro-details.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pro-details/pro-details.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon class=\"fs-26\" name=\"cart-outline\"></ion-icon><span class=\"qty\">1</span>\n    </ion-buttons>\n    <ion-title>Product details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n  \n  <ion-slides pager=\"true\" class=\"slide-bg\" [options]=\"slidePerViewOpts\" *ngIf=\"imgList.length > 0\">\n    <!-- <ion-slide>\n      <div class=\"slide\">\n        <img src=\"assets/images/pro1.jpg\" />\n      </div>\n    </ion-slide> -->\n\n    <ion-slide *ngFor=\"let img of imgList | keyvalue; let i = index;\">\n      <div class=\"slide\">\n        <img src=\"{{imagePath + img.value.path}}\" />\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <p no-margin class=\"ellipsis fs-16 txt-danger\" text-center>{{ title }}</p>\n        <h4 no-margin class=\"ellipsis fs-20 fw-600 spacing1 pdb-2 uppercase\" text-center>Rs. {{ salePrice }}</h4>\n        <p no-margin class=\"fs-12\" text-center>{{ description }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"addToCart(prId,title,salePrice)\">Add Cart</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"buyNow(prId,title,salePrice)\">Buy Now</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/pro-details/pro-details-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/pro-details/pro-details-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProDetailsPageRoutingModule", function() { return ProDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pro_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pro-details.page */ "./src/app/pages/pro-details/pro-details.page.ts");




const routes = [
    {
        path: '',
        component: _pro_details_page__WEBPACK_IMPORTED_MODULE_3__["ProDetailsPage"]
    }
];
let ProDetailsPageRoutingModule = class ProDetailsPageRoutingModule {
};
ProDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/pro-details/pro-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pro-details/pro-details.module.ts ***!
  \*********************************************************/
/*! exports provided: ProDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProDetailsPageModule", function() { return ProDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pro_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pro-details-routing.module */ "./src/app/pages/pro-details/pro-details-routing.module.ts");
/* harmony import */ var _pro_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pro-details.page */ "./src/app/pages/pro-details/pro-details.page.ts");







let ProDetailsPageModule = class ProDetailsPageModule {
};
ProDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pro_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProDetailsPageRoutingModule"]
        ],
        declarations: [_pro_details_page__WEBPACK_IMPORTED_MODULE_6__["ProDetailsPage"]]
    })
], ProDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/pro-details/pro-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/pro-details/pro-details.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-bg {\n  background: #eee;\n  padding: 2px;\n  overflow: hidden;\n}\n\n.qty {\n  position: absolute;\n  top: -8px;\n  left: 8px;\n  background: red;\n  font-size: 10px;\n  padding: 0 2px;\n  color: #fff;\n  border-radius: 50%;\n  width: 14px;\n  height: 14px;\n  text-align: center;\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9wcm8tZGV0YWlscy9wcm8tZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byby1kZXRhaWxzL3Byby1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm8tZGV0YWlscy9wcm8tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUtYmd7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5xdHl7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLThweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAwIDJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbn0iLCIuc2xpZGUtYmcge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5xdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogOHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMCAycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/pro-details/pro-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pro-details/pro-details.page.ts ***!
  \*******************************************************/
/*! exports provided: ProDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProDetailsPage", function() { return ProDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");







let ProDetailsPage = class ProDetailsPage extends _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
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
        this.slidePerViewOpts = {};
        this.productList = [];
        this.prId = '';
        this.productId = '';
        this.itemId = '';
        this.title = '';
        this.description = '';
        this.specification = '';
        this.salePrice = '';
        this.purchasePrice = '';
        this.gst = '';
        this.shippingCost = '';
        this.imagePath = '';
        this.imgList = [];
        this.initBaseComponent();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log('Params', this.router.getCurrentNavigation().extras.queryParams);
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.qParams = this.router.getCurrentNavigation().extras.queryParams;
                this.prId = this.qParams.prId;
                this.loading.present();
                this.base.api.productDtl({ product_id: this.prId, ip_address: '192.168.0.1' });
            }
            else {
                this.navCtrl.navigateRoot('/productlist');
            }
        });
    }
    handleApiResponse(data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productDetail"]) {
            this.productList = data.result && data.result.data ? data.result.data : [];
            this.itemId = this.productList.item_id;
            this.title = this.productList.title;
            this.description = this.productList.description;
            this.specification = this.productList.specification;
            this.salePrice = this.productList.sale_price;
            this.purchasePrice = this.productList.purchase_price;
            this.gst = this.productList.gst;
            this.shippingCost = this.productList.shipping_cost;
            this.imagePath = this.productList.image_path;
            this.imgList = this.productList.img_list;
            this.loading.dismiss();
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addToCart"]) {
            this.loading.dismiss();
            const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Success', successMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["buyNow"]) {
            this.navCtrl.navigateRoot('/cart');
        }
        else {
            this.loading.dismiss();
            const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
        }
    }
    handleApiResponseError(data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productDetail"]) {
            this.loading.dismiss();
            this.productList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["buyNow"]) {
            const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addToCart"]) {
            this.loading.dismiss();
            const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
        else {
            this.loading.dismiss();
            this.productList = [];
            this.base.shared.Alert.show_alert('Failed!', 'Technicle Issue');
        }
    }
    addToCart(id = 0, title = '', price = '') {
        this.base.shared.Lstorage.fetchData('customerId').then(data => {
            if (data) {
                this.loading.present();
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
    buyNow(id = 0, title = '', price = '') {
        this.base.shared.Lstorage.fetchData('customerId').then(data => {
            if (data) {
                this.base.shared.Lstorage.delData('cartLogin');
                this.base.shared.Lstorage.delData('cartItemId');
                this.base.shared.Lstorage.delData('cartItemTitle');
                this.base.shared.Lstorage.delData('cartItemPrice');
                this.base.api.buyNow({
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
ProDetailsPage.ctorParameters = () => [
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
ProDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pro-details',
        template: __webpack_require__(/*! raw-loader!./pro-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pro-details/pro-details.page.html"),
        styles: [__webpack_require__(/*! ./pro-details.page.scss */ "./src/app/pages/pro-details/pro-details.page.scss")]
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
], ProDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-pro-details-pro-details-module-es2015.js.map