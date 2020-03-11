(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-list-cart-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart-list/cart-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart-list/cart-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cart List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Delivery Address</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      21, Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016\n    </ion-card-content>\n    <ion-button expand=\"block\" fill=\"outline\" color=\"danger\">Change Address</ion-button>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"assets/images/pro1.jpg\" />\n            </ion-avatar>\n            <ion-label>\n              <p class=\"fs-14 ellipsis\">KTM RC 125</p>\n              <h3 class=\"fs-16 txt-danger ellipsis\">Rs. 125000.00</h3>\n            </ion-label>\n            <div>\n              <input class=\"form-control\" type=\"number\" min=\"0\" value=\"1\">\n            </div>\n            <div class=\"remove\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n            </div>\n          </ion-item>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"assets/images/9.jpg\" />\n            </ion-avatar>\n            <ion-label>\n              <p class=\"fs-14 ellipsis\">Samsung A10</p>\n              <h3 class=\"fs-16 txt-danger ellipsis\">Rs. 12000.00</h3>\n            </ion-label>\n            <div>\n              <input class=\"form-control\" type=\"number\" min=\"0\" value=\"1\">\n            </div>\n            <div class=\"remove\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n            </div>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <h4 no-margin class=\"fs-16 fw-600 uppercase mgt-10\" text-center>Rs. 137000.00</h4>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" color=\"danger\">Place Order</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/cart-list/cart-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/cart-list/cart-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CartListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartListPageRoutingModule", function() { return CartListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-list.page */ "./src/app/pages/cart-list/cart-list.page.ts");




var routes = [
    {
        path: '',
        component: _cart_list_page__WEBPACK_IMPORTED_MODULE_3__["CartListPage"]
    }
];
var CartListPageRoutingModule = /** @class */ (function () {
    function CartListPageRoutingModule() {
    }
    CartListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CartListPageRoutingModule);
    return CartListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/cart-list/cart-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-list/cart-list.module.ts ***!
  \*****************************************************/
/*! exports provided: CartListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartListPageModule", function() { return CartListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-list-routing.module */ "./src/app/pages/cart-list/cart-list-routing.module.ts");
/* harmony import */ var _cart_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-list.page */ "./src/app/pages/cart-list/cart-list.page.ts");







var CartListPageModule = /** @class */ (function () {
    function CartListPageModule() {
    }
    CartListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _cart_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartListPageRoutingModule"]
            ],
            declarations: [_cart_list_page__WEBPACK_IMPORTED_MODULE_6__["CartListPage"]]
        })
    ], CartListPageModule);
    return CartListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cart-list/cart-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-list/cart-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  width: 60px;\n  height: 40px;\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 4px;\n  text-align: center;\n  margin-right: 10px;\n}\n\nion-avatar {\n  --border-radius: 0;\n}\n\n.remove {\n  position: absolute;\n  color: red;\n  top: 20px;\n  right: 0px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9jYXJ0LWxpc3QvY2FydC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC1saXN0L2NhcnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC1saXN0L2NhcnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tYXZhdGFye1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbn1cbi5yZW1vdmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSIsIi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ucmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogcmVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cart-list/cart-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart-list/cart-list.page.ts ***!
  \***************************************************/
/*! exports provided: CartListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartListPage", function() { return CartListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartListPage = /** @class */ (function () {
    function CartListPage() {
    }
    CartListPage.prototype.ngOnInit = function () {
    };
    CartListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-list',
            template: __webpack_require__(/*! raw-loader!./cart-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart-list/cart-list.page.html"),
            styles: [__webpack_require__(/*! ./cart-list.page.scss */ "./src/app/pages/cart-list/cart-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartListPage);
    return CartListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cart-list-cart-list-module-es5.js.map