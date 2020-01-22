(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n      Register\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <button ion-button small>\n        <ion-icon name=\"cart\" class=\"cart-number\"><ion-badge color=\"danger\">3</ion-badge></ion-icon>\n      </button>\n      <button ion-button (click)=\"openFilters()\">\n        <ion-icon name=\"funnel\">\n        </ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"ion-justify-content-center animated fadeIn login auth-page\">\n  <div class=\"theme-bg\"></div>\n  <div class=\"auth-content ion-justify-content-center ion-align-items-center\">\n\n    <!-- <div padding-horizontal text-center class=\"animated fadeInDown\">\n      <h4 no-margin>\n        <ion-text color=\"dark\" class=\"fw700\">\n          \n        </ion-text>\n      </h4>\n    </div> -->\n\n    <!-- Login form -->\n    <form [formGroup]=\"signupForm\" class=\"list-form\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Full name</ion-label>\n        <ion-input type=\"text\" formControlName=\"name\" [class.invalid]=\"!signupForm.controls.name.valid && signupForm.controls.name.dirty\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('name').touched && signupForm.get('name').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n      \n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('email').touched && signupForm.get('email').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Gender</ion-label>\n        <ion-select formControlName=\"gender\" placeholder=\"Select Gender\">\n          <ion-select-option value=\"female\">Female</ion-select-option>\n          <ion-select-option value=\"male\">Male</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('gender').touched && signupForm.get('gender').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">DOB</ion-label>\n        <ion-input type=\"date\" formControlName=\"dob\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('dob').touched && signupForm.get('dob').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Address 1</ion-label>\n        <ion-input type=\"text\" formControlName=\"address1\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('address1').touched && signupForm.get('address1').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Address 2</ion-label>\n        <ion-input type=\"number\" formControlName=\"address2\"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">State</ion-label>\n        <ion-select formControlName=\"state\" placeholder=\"Select State\" (ionChange)=\"selectState($event)\">\n          <ion-select-option *ngFor=\"let v of stateList\"  value=\"{{v.id}}\">{{v.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('state').touched && signupForm.get('state').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">City</ion-label>\n        <ion-select formControlName=\"city\" placeholder=\"Select city\">\n          <ion-select-option *ngFor=\"let v of cityList\" value=\"{{v.id}}\">{{v.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('city').touched && signupForm.get('city').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Pin Code</ion-label>\n        <ion-input type=\"number\" formControlName=\"pincode\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('pincode').touched && signupForm.get('pincode').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Profession</ion-label>\n        <ion-input type=\"text\" formControlName=\"profession\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('profession').touched && signupForm.get('profession').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Mobile Number</ion-label>\n        <ion-input formControlName=\"phoneNumber\" type=\"number\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"signupForm.get('phoneNumber').touched && signupForm.get('phoneNumber').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n      \n\n      <ion-item no-padding class=\"animated fadeInUp\" *ngIf=\"otpSend=='1'\">\n        <ion-label position=\"floating\">OTP</ion-label>\n        <ion-input formControlName=\"otp\" type=\"number\"></ion-input>\n      </ion-item>\n\n      <p text-right tappable class=\"paz\">\n        <ion-text color=\"dark\" (click)=\"getOtp()\">\n          <strong>({{otpSendName}})</strong>\n        </ion-text>\n      </p>\n  \n      <ion-row>\n        \n        <ion-col siz=\"6\">\n          <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"login()\">\n            <ion-icon name=\"log-in\"></ion-icon>\n            Login\n          </ion-button>\n        </ion-col>\n        <ion-col siz=\"6\">\n          <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"doRegister()\" [disabled]=\"!signupForm.valid\" tappable>\n            \n            SignUp\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");




var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
var RegisterPageRoutingModule = /** @class */ (function () {
    function RegisterPageRoutingModule() {
    }
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterPageRoutingModule);
    return RegisterPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");








var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-login-v6 {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.wrap-login-v6 .wrap-interval {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 100;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.wrap-login-v6 .wrap-interval .brand {\n  -webkit-box-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.wrap-login-v6 .wrap-interval .brand img {\n  margin: 0px auto 15px auto;\n  height: 70px;\n}\n.wrap-login-v6 .wrap-interval .main-form {\n  -webkit-box-flex: 3.5;\n          flex: 3.5;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.wrap-login-v6 .wrap-interval .main-form form {\n  -webkit-box-flex: 3;\n          flex: 3;\n}\n.wrap-login-v6 .wrap-interval .main-form .bottom-form {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.wrap-login-v6 .bg-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n}\n.wrap-login-v6 .bg-img img {\n  height: 100%;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNERDtBREdDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0RGO0FERUU7RUFDQyxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FIO0FEQ0c7RUFDQywwQkFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0MscUJBQUE7VUFBQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQUg7QURDRztFQUNDLG1CQUFBO1VBQUEsT0FBQTtBQ0NKO0FEQ0c7RUFDQyxtQkFBQTtVQUFBLE9BQUE7QUNDSjtBRElDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FER0U7RUFDQyxZQUFBO0VBQ0EsZUFBQTtBQ0RIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi53cmFwLWxvZ2luLXY2e1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFxuXHQud3JhcC1pbnRlcnZhbHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHotaW5kZXg6IDEwMDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHQuYnJhbmR7XG5cdFx0XHRmbGV4OiAzO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGltZ3tcblx0XHRcdFx0bWFyZ2luOiAwcHggYXV0byAxNXB4IGF1dG87XG5cdFx0XHRcdGhlaWdodDogNzBweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Lm1haW4tZm9ybXtcblx0XHRcdGZsZXg6IDMuNTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRmb3Jte1xuXHRcdFx0XHRmbGV4OiAzO1xuXHRcdFx0fVxuXHRcdFx0LmJvdHRvbS1mb3Jte1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LmJnLWltZ3tcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHotaW5kZXg6IDEwO1xuXHRcdGltZ3tcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cbn0iLCIud3JhcC1sb2dpbi12NiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi53cmFwLWxvZ2luLXY2IC53cmFwLWludGVydmFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndyYXAtbG9naW4tdjYgLndyYXAtaW50ZXJ2YWwgLmJyYW5kIHtcbiAgZmxleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud3JhcC1sb2dpbi12NiAud3JhcC1pbnRlcnZhbCAuYnJhbmQgaW1nIHtcbiAgbWFyZ2luOiAwcHggYXV0byAxNXB4IGF1dG87XG4gIGhlaWdodDogNzBweDtcbn1cbi53cmFwLWxvZ2luLXY2IC53cmFwLWludGVydmFsIC5tYWluLWZvcm0ge1xuICBmbGV4OiAzLjU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi53cmFwLWxvZ2luLXY2IC53cmFwLWludGVydmFsIC5tYWluLWZvcm0gZm9ybSB7XG4gIGZsZXg6IDM7XG59XG4ud3JhcC1sb2dpbi12NiAud3JhcC1pbnRlcnZhbCAubWFpbi1mb3JtIC5ib3R0b20tZm9ybSB7XG4gIGZsZXg6IDE7XG59XG4ud3JhcC1sb2dpbi12NiAuYmctaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuLndyYXAtbG9naW4tdjYgLmJnLWltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");








var RegisterPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterPage, _super);
    function RegisterPage(navCtrl, loadingCtrl, alertCtrl, platform, events, menuCtrl, toastCtrl, route, formBuilder, loading, injector) {
        var _this = _super.call(this, injector) || this;
        _this.navCtrl = navCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.events = events;
        _this.menuCtrl = menuCtrl;
        _this.toastCtrl = toastCtrl;
        _this.route = route;
        _this.formBuilder = formBuilder;
        _this.loading = loading;
        _this.phoneNumber = '';
        _this.tagHide = true;
        _this.otpSend = '0';
        _this.otpSendName = 'Send OTP';
        _this.countryList = [];
        _this.stateList = [];
        _this.cityList = [];
        _this.initBaseComponent();
        _this.signupForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            profession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
        return _this;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.base.api.stateList(101);
    };
    RegisterPage.prototype.handleApiResponse = function (data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["sendOTP"]) {
            this.loading.dismiss();
            var successMessage = data.result && data.result.message ? data.result.message : 'OTP send successully';
            if (data.result.status === true) {
                this.signupForm = this.formBuilder.group({
                    email: [this.signupForm.value.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
                    name: [this.signupForm.value.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    phoneNumber: [this.signupForm.value.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    gender: [this.signupForm.value.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    dob: [this.signupForm.value.dob, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    address1: [this.signupForm.value.address1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    address2: [this.signupForm.value.address2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])],
                    state: [this.signupForm.value.state, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    city: [this.signupForm.value.city, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    pincode: [this.signupForm.value.pincode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    profession: [this.signupForm.value.profession, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
                    otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
                });
                this.otpSend = '1';
            }
            this.base.shared.Alert.show_alert('Success', successMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["register"]) {
            this.loading.dismiss();
            var successMessage = data.result && data.result.message ? data.result.message : 'Registration Successfully';
            this.base.shared.Alert.show_alert('Success', successMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["countryList"]) {
            this.countryList = data.result && data.result.data ? data.result.data : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["stateList"]) {
            this.stateList = data.result && data.result.data ? data.result.data : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["cityList"]) {
            this.cityList = data.result && data.result.data ? data.result.data : [];
        }
    };
    RegisterPage.prototype.handleApiResponseError = function (data) {
        console.log('data', data);
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["sendOTP"]) {
            this.loading.dismiss();
            var errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["register"]) {
            this.loading.dismiss();
            var errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["countryList"]) {
            this.countryList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["stateList"]) {
            this.stateList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["cityList"]) {
            this.cityList = [];
        }
    };
    RegisterPage.prototype.getOtp = function () {
        this.phoneNumber = this.signupForm.value.phoneNumber;
        if (this.phoneNumber !== null && this.phoneNumber !== '') {
            if (this.phoneNumber.toString().length === 10) {
                this.loading.present();
                this.base.api.otpSend({ phone_number: this.phoneNumber });
            }
            else {
                this.base.shared.Alert.show_alert('Failed!', ' Please enter 10 digit mobile number');
            }
        }
        else {
            this.base.shared.Alert.show_alert('Failed!', ' Please enter mobile number first ');
        }
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.navigateRoot('/login');
    };
    RegisterPage.prototype.doRegister = function () {
        if (this.otpSend === '1') {
            if (!this.signupForm.valid) {
                this.base.shared.Alert.show_alert('Failed!', 'Please enter a valid details');
            }
            else {
                this.loading.present();
                this.base.api.register(this.signupForm.value);
            }
        }
        else {
            this.base.shared.Alert.show_alert('Failed!', 'Mobile Number is not verified yet');
        }
    };
    RegisterPage.prototype.selectState = function (event) {
        if (event.target.value) {
            this.base.api.cityList(event.target.value);
        }
    };
    RegisterPage.ctorParameters = function () { return [
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
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
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
    ], RegisterPage);
    return RegisterPage;
}(_shared_classes_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map