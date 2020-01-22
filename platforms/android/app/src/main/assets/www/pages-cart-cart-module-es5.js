(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n      Cart List\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <button ion-button small>\n        <ion-icon name=\"cart\" class=\"cart-number\"><ion-badge color=\"danger\">3</ion-badge></ion-icon>\n      </button>\n      <button ion-button (click)=\"openFilters()\">\n        <ion-icon name=\"funnel\">\n        </ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div class=\"ion-padding\" *ngIf=\"cartList\">\n\n    <ion-list>\n      <ion-item *ngFor=\"let p of cartList\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click) = \"quantityDecreased(p.id,p.qty)\">\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              {{p.qty}}\n            </ion-col>\n\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click) = \"quantityIncreased(p.id,p.qty)\">\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n\n            <ion-col size=\"2\" offset=\"4\">\n              <ion-button color=\"medium\" fill=\"clear\" (click) = \"removeCart(p.id)\">\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"9\">\n              <b>{{ p.name }}</b>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              Rs. {{p.sale_price }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              Total :\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-end\">\n             Rs. {{ getTotal() }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <ion-button expand=\"full\" (click)=\"placeOrder('cartId')\">\n      Checkout\n    </ion-button>\n  </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cart/cart-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");




var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
var CartPageRoutingModule = /** @class */ (function () {
    function CartPageRoutingModule() {
    }
    CartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CartPageRoutingModule);
    return CartPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/pages/cart/cart-routing.module.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");







var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxuICBcbiAgLmNhcnQtaWNvbiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIFxuICAuY2FydC1sZW5ndGgge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMThweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gICIsImlvbi1mYWItYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmNhcnQtbGVuZ3RoIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cart/cart.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");







var CartPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartPage, _super);
    function CartPage(navCtrl, loadingCtrl, alertCtrl, platform, events, menuCtrl, toastCtrl, route, loading, injector) {
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
        _this.cartList = [];
        _this.customerId = 0;
        _this.initBaseComponent();
        return _this;
    }
    CartPage.prototype.ngOnInit = function () {
        var _this = this;
        this.base.shared.Lstorage.fetchData('customerId').then(function (data) {
            if (data) {
                _this.customerId = data;
                _this.loading.present();
                _this.getCartList();
            }
        });
    };
    CartPage.prototype.getCartList = function () {
        this.base.api.cartList({ ip_address: '192.168.0.1', customer_id: this.customerId });
    };
    CartPage.prototype.handleApiResponse = function (data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["cartList"]) {
            this.loading.dismiss();
            this.cartList = data.result && data.result.data ? data.result.data : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["removeCartItem"]) {
            this.getCartList();
            var successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Success', successMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["updateCartItem"]) {
            this.getCartList();
            var successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Success', successMessage);
        }
    };
    CartPage.prototype.handleApiResponseError = function (data) {
        this.loading.dismiss();
        console.log('data', data);
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["cartList"]) {
            this.cartList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["removeCartItem"]) {
            var errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["updateCartItem"]) {
            var errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
    };
    CartPage.prototype.quantityDecreased = function (id, qty) {
        this.loading.present();
        var qtys = ((Number(qty) - 1) > 0) ? (Number(qty) - 1) : 0;
        this.base.api.updateCartItem({
            customer_id: this.customerId,
            cart_item_id: id,
            ip_address: '192.168.0.1',
            qty: qtys
        });
    };
    CartPage.prototype.quantityIncreased = function (id, qty) {
        this.loading.present();
        this.base.api.updateCartItem({
            customer_id: this.customerId,
            cart_item_id: id,
            ip_address: '192.168.0.1',
            qty: Number(qty) + 1
        });
    };
    CartPage.prototype.removeCart = function (id) {
        this.loading.present();
        this.base.api.removeCartItem({
            customer_id: this.customerId,
            cart_item_id: id,
            ip_address: '192.168.0.1'
        });
    };
    CartPage.prototype.placeOrder = function (id) {
        this.base.shared.Alert.show_alert('Success', 'Work in progress');
    };
    CartPage.prototype.getTotal = function () {
        return this.cartList.reduce(function (i, j) { return i + j.sale_price * j.qty; }, 0);
    };
    CartPage.ctorParameters = function () { return [
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
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/pages/cart/cart.page.scss")]
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
    ], CartPage);
    return CartPage;
}(_shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module-es5.js.map