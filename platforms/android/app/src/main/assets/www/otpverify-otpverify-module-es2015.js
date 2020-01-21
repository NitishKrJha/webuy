(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otpverify-otpverify-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/otpverify/otpverify.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/otpverify/otpverify.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content fullscreen common-parallax [scrollEvents]=\"true\">\n    <div class=\"wrap-login-v6 offset-top-obj\">\n        <div class=\"wrap-interval\">\n            <div text-center class=\"brand\">\n                <div class=\"pdt-50\">\n                    <img class=\"parallax-obj parallax-down-obj\" src=\"assets/images/webuy.jpeg\">\n                    <h2 no-margin class=\"txt-light fs-24 fw-700 uppercase\">WeBuy</h2>\n                    <h2 no-margin class=\"txt-light fs-46 fw-800\"></h2>\n                </div>\n            </div>\n            <div text-center class=\"main-form\">\n                \n                <ion-item lines=\"none\" class=\"bg-white bdra-30 shadow-1 bg-light\">\n                    <ion-input type=\"number\" [(ngModel)]=\"otp\" maxlength=\"10\" placeholder=\"Enter OTP\"></ion-input>\n                </ion-item>\n                <br/>\n                <ion-button expand=\"block\" shape=\"round\" color=\"primary\" class=\"txt1 mgt-10 spacing2 fw-600\" type=\"button\" (click)=\"verifyOtp()\">\n                    Submit\n                </ion-button>\n                <hr/>\n                <ion-button  mode=\"ios\"size=\"small\" fill=\"clear\" class=\"txt-light fs-12\" type=\"button\">\n                    Login\n                </ion-button>\n                \n                \n            </div>\n        </div>\n        <div class=\"bg-img\">\n            <img src=\"assets/images/lemon25.jpg\">\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/otpverify/otpverify-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/login/otpverify/otpverify-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OtpverifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpverifyPageRoutingModule", function() { return OtpverifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _otpverify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otpverify.page */ "./src/app/pages/login/otpverify/otpverify.page.ts");




const routes = [
    {
        path: '',
        component: _otpverify_page__WEBPACK_IMPORTED_MODULE_3__["OtpverifyPage"]
    }
];
let OtpverifyPageRoutingModule = class OtpverifyPageRoutingModule {
};
OtpverifyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtpverifyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/otpverify/otpverify.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/login/otpverify/otpverify.module.ts ***!
  \***********************************************************/
/*! exports provided: OtpverifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpverifyPageModule", function() { return OtpverifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otpverify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otpverify-routing.module */ "./src/app/pages/login/otpverify/otpverify-routing.module.ts");
/* harmony import */ var _otpverify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otpverify.page */ "./src/app/pages/login/otpverify/otpverify.page.ts");







let OtpverifyPageModule = class OtpverifyPageModule {
};
OtpverifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _otpverify_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpverifyPageRoutingModule"]
        ],
        declarations: [_otpverify_page__WEBPACK_IMPORTED_MODULE_6__["OtpverifyPage"]]
    })
], OtpverifyPageModule);



/***/ }),

/***/ "./src/app/pages/login/otpverify/otpverify.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/login/otpverify/otpverify.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-login-v6 {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.wrap-login-v6 .wrap-interval {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 100;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.wrap-login-v6 .wrap-interval .brand {\n  -webkit-box-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.wrap-login-v6 .wrap-interval .brand img {\n  margin: 0px auto 15px auto;\n  height: 70px;\n}\n.wrap-login-v6 .wrap-interval .main-form {\n  -webkit-box-flex: 3.5;\n          flex: 3.5;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.wrap-login-v6 .wrap-interval .main-form form {\n  -webkit-box-flex: 3;\n          flex: 3;\n}\n.wrap-login-v6 .wrap-interval .main-form .bottom-form {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.wrap-login-v6 .bg-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n}\n.wrap-login-v6 .bg-img img {\n  height: 100%;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9sb2dpbi9vdHB2ZXJpZnkvb3RwdmVyaWZ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vb3RwdmVyaWZ5L290cHZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREQ7QURHQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNERjtBREVFO0VBQ0MsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBSDtBRENHO0VBQ0MsMEJBQUE7RUFDQSxZQUFBO0FDQ0o7QURFRTtFQUNDLHFCQUFBO1VBQUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FIO0FEQ0c7RUFDQyxtQkFBQTtVQUFBLE9BQUE7QUNDSjtBRENHO0VBQ0MsbUJBQUE7VUFBQSxPQUFBO0FDQ0o7QURJQztFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNGRjtBREdFO0VBQ0MsWUFBQTtFQUNBLGVBQUE7QUNESCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL290cHZlcmlmeS9vdHB2ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi53cmFwLWxvZ2luLXY2e1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFxuXHQud3JhcC1pbnRlcnZhbHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHotaW5kZXg6IDEwMDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHQuYnJhbmR7XG5cdFx0XHRmbGV4OiAzO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGltZ3tcblx0XHRcdFx0bWFyZ2luOiAwcHggYXV0byAxNXB4IGF1dG87XG5cdFx0XHRcdGhlaWdodDogNzBweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Lm1haW4tZm9ybXtcblx0XHRcdGZsZXg6IDMuNTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRmb3Jte1xuXHRcdFx0XHRmbGV4OiAzO1xuXHRcdFx0fVxuXHRcdFx0LmJvdHRvbS1mb3Jte1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LmJnLWltZ3tcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHotaW5kZXg6IDEwO1xuXHRcdGltZ3tcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cbn0iLCIud3JhcC1sb2dpbi12NiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi53cmFwLWxvZ2luLXY2IC53cmFwLWludGVydmFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndyYXAtbG9naW4tdjYgLndyYXAtaW50ZXJ2YWwgLmJyYW5kIHtcbiAgZmxleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud3JhcC1sb2dpbi12NiAud3JhcC1pbnRlcnZhbCAuYnJhbmQgaW1nIHtcbiAgbWFyZ2luOiAwcHggYXV0byAxNXB4IGF1dG87XG4gIGhlaWdodDogNzBweDtcbn1cbi53cmFwLWxvZ2luLXY2IC53cmFwLWludGVydmFsIC5tYWluLWZvcm0ge1xuICBmbGV4OiAzLjU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi53cmFwLWxvZ2luLXY2IC53cmFwLWludGVydmFsIC5tYWluLWZvcm0gZm9ybSB7XG4gIGZsZXg6IDM7XG59XG4ud3JhcC1sb2dpbi12NiAud3JhcC1pbnRlcnZhbCAubWFpbi1mb3JtIC5ib3R0b20tZm9ybSB7XG4gIGZsZXg6IDE7XG59XG4ud3JhcC1sb2dpbi12NiAuYmctaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuLndyYXAtbG9naW4tdjYgLmJnLWltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/otpverify/otpverify.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/otpverify/otpverify.page.ts ***!
  \*********************************************************/
/*! exports provided: OtpverifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpverifyPage", function() { return OtpverifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");








let OtpverifyPage = class OtpverifyPage extends _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(navCtrl, loadingCtrl, alertCtrl, platform, events, menuCtrl, toastCtrl, route, formBuilder, loading, injector) {
        super(injector);
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.formBuilder = formBuilder;
        this.loading = loading;
        this.phoneNumber = '';
        this.otp = '';
        this.tagHide = true;
        this.initBaseComponent();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log('Params', this.router.getCurrentNavigation().extras.queryParams);
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.qParams = this.router.getCurrentNavigation().extras.queryParams;
                this.phoneNumber = this.qParams.phoneNumber;
            }
            else {
                this.base.shared.Alert.show_alert('Failed!', 'Data Not Found');
                this.router.navigate(['/login']);
            }
        });
    }
    handleApiResponse(data) {
        this.loading.dismiss();
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["login"]) {
            const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Lstorage.setData('isLogged', 1);
            this.base.shared.Lstorage.setData('phoneNumber', data.result.data.phone);
            this.base.shared.Lstorage.setData('customerId', data.result.data.customer_id);
            this.base.shared.Lstorage.fetchData('cartLogin').then(cartLogin => {
                if (cartLogin) {
                    this.cartLogin = cartLogin;
                }
            });
            this.base.shared.Lstorage.fetchData('cartItemId').then(cartItemId => {
                if (cartItemId) {
                    this.cartItemId = cartItemId;
                }
            });
            this.base.shared.Lstorage.fetchData('cartItemTitle').then(cartItemTitle => {
                if (cartItemTitle) {
                    this.cartItemTitle = cartItemTitle;
                }
            });
            this.base.shared.Lstorage.fetchData('cartItemPrice').then(cartItemPrice => {
                if (cartItemPrice) {
                    this.cartItemPrice = cartItemPrice;
                }
            });
            if (this.cartLogin === 1) {
                this.base.shared.Lstorage.delData('cartLogin');
                this.base.shared.Lstorage.delData('cartItemId');
                this.base.shared.Lstorage.delData('cartItemTitle');
                this.base.shared.Lstorage.delData('cartItemPrice');
                this.base.api.addToCart({
                    customer_id: data.result.data.customer_id,
                    product_id: this.cartItemId,
                    product_price: this.cartItemPrice,
                    product_title: this.cartItemTitle,
                    ip_address: '192.168.0.1'
                });
            }
            else {
                this.router.navigateByUrl('/home', { replaceUrl: true });
            }
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["addToCart"]) {
            const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Success', successMessage);
            this.router.navigateByUrl('/home', { replaceUrl: true });
        }
    }
    handleApiResponseError(data) {
        console.log('data', data);
        this.loading.dismiss();
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["login"]) {
            const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["addToCart"]) {
            const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
            this.router.navigateByUrl('/home', { replaceUrl: true });
        }
    }
    verifyOtp() {
        if (this.phoneNumber !== null && this.phoneNumber !== '') {
            if (this.phoneNumber.length === 10) {
                this.loading.present();
                this.base.api.login({ phone_number: this.phoneNumber, otp: this.otp });
            }
            else {
                this.base.shared.Alert.show_alert('Failed!', ' Please enter 10 digit mobile number');
            }
        }
        else {
            this.base.shared.Alert.show_alert('Failed!', ' Please enter mobile number first ');
        }
    }
};
OtpverifyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
OtpverifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otpverify',
        template: __webpack_require__(/*! raw-loader!./otpverify.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/otpverify/otpverify.page.html"),
        styles: [__webpack_require__(/*! ./otpverify.page.scss */ "./src/app/pages/login/otpverify/otpverify.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], OtpverifyPage);



/***/ })

}]);
//# sourceMappingURL=otpverify-otpverify-module-es2015.js.map