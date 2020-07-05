(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addeditaddress-addeditaddress-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addeditaddress/addeditaddress.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addeditaddress/addeditaddress.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n      Add Address\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <button ion-button small>\n        <ion-icon name=\"cart\" class=\"cart-number\"><ion-badge color=\"danger\">3</ion-badge></ion-icon>\n      </button>\n      <button ion-button (click)=\"openFilters()\">\n        <ion-icon name=\"funnel\">\n        </ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"ion-justify-content-center animated fadeIn login auth-page\">\n  <div class=\"theme-bg\"></div>\n  <div class=\"auth-content ion-justify-content-center ion-align-items-center\">\n\n    <!-- <div padding-horizontal text-center class=\"animated fadeInDown\">\n      <h4 no-margin>\n        <ion-text color=\"dark\" class=\"fw700\">\n          \n        </ion-text>\n      </h4>\n    </div> -->\n\n    <!-- Login form -->\n    <form [formGroup]=\"addForm\" class=\"list-form\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Full name</ion-label>\n        <ion-input type=\"text\" formControlName=\"full_name\" [class.invalid]=\"!addForm.controls.full_name.valid && addForm.controls.full_name.dirty\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"addForm.get('full_name').touched && addForm.get('full_name').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n      \n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Address 1</ion-label>\n        <ion-input type=\"text\" formControlName=\"address1\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"addForm.get('address1').touched && addForm.get('address1').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Address 2</ion-label>\n        <ion-input type=\"number\" formControlName=\"address2\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"customerId\" [(ngModel)]=\"customerId\"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">State</ion-label>\n        <ion-select formControlName=\"state\" placeholder=\"Select State\" (ionChange)=\"selectState($event)\">\n          <ion-select-option *ngFor=\"let v of stateList\"  value=\"{{v.id}}\">{{v.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"addForm.get('state').touched && addForm.get('state').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">City</ion-label>\n        <ion-select formControlName=\"city\" placeholder=\"Select city\">\n          <ion-select-option *ngFor=\"let v of cityList\" value=\"{{v.id}}\">{{v.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"addForm.get('city').touched && addForm.get('city').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Pin Code</ion-label>\n        <ion-input type=\"number\" formControlName=\"zipcode\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"addForm.get('zipcode').touched && addForm.get('zipcode').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Landmark</ion-label>\n        <ion-input type=\"text\" formControlName=\"landmark\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"addForm.get('landmark').touched && addForm.get('landmark').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n  \n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">Alternate Mobile Number</ion-label>\n        <ion-input formControlName=\"phone_number\" type=\"number\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"addForm.get('phone_number').touched && addForm.get('phone_number').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n      \n\n      \n  \n      <ion-row>\n        \n        <ion-col siz=\"12\">\n          <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"doSave()\" [disabled]=\"!addForm.valid\" tappable>\n            \n            Save\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/addeditaddress/addeditaddress-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/addeditaddress/addeditaddress-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddeditaddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditaddressPageRoutingModule", function() { return AddeditaddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addeditaddress_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addeditaddress.page */ "./src/app/pages/addeditaddress/addeditaddress.page.ts");




var routes = [
    {
        path: '',
        component: _addeditaddress_page__WEBPACK_IMPORTED_MODULE_3__["AddeditaddressPage"]
    }
];
var AddeditaddressPageRoutingModule = /** @class */ (function () {
    function AddeditaddressPageRoutingModule() {
    }
    AddeditaddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddeditaddressPageRoutingModule);
    return AddeditaddressPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/addeditaddress/addeditaddress.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/addeditaddress/addeditaddress.module.ts ***!
  \***************************************************************/
/*! exports provided: AddeditaddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditaddressPageModule", function() { return AddeditaddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addeditaddress_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addeditaddress-routing.module */ "./src/app/pages/addeditaddress/addeditaddress-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _addeditaddress_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addeditaddress.page */ "./src/app/pages/addeditaddress/addeditaddress.page.ts");








var AddeditaddressPageModule = /** @class */ (function () {
    function AddeditaddressPageModule() {
    }
    AddeditaddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _addeditaddress_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddeditaddressPageRoutingModule"]
            ],
            declarations: [_addeditaddress_page__WEBPACK_IMPORTED_MODULE_7__["AddeditaddressPage"]]
        })
    ], AddeditaddressPageModule);
    return AddeditaddressPageModule;
}());



/***/ }),

/***/ "./src/app/pages/addeditaddress/addeditaddress.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/addeditaddress/addeditaddress.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGVkaXRhZGRyZXNzL2FkZGVkaXRhZGRyZXNzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/addeditaddress/addeditaddress.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/addeditaddress/addeditaddress.page.ts ***!
  \*************************************************************/
/*! exports provided: AddeditaddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditaddressPage", function() { return AddeditaddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");








var AddeditaddressPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddeditaddressPage, _super);
    function AddeditaddressPage(navCtrl, loadingCtrl, alertCtrl, platform, events, menuCtrl, toastCtrl, route, formBuilder, loading, injector) {
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
        _this.countryList = [];
        _this.stateList = [];
        _this.cityList = [];
        _this.customerId = '';
        _this.addressForCart = 0;
        _this.initBaseComponent();
        _this.base.shared.Lstorage.fetchData('addressForCart').then(function (datas) {
            _this.addressForCart = datas;
        });
        _this.addForm = formBuilder.group({
            full_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            landmark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            zipcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            customerId: [_this.customerId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])]
        });
        return _this;
    }
    AddeditaddressPage.prototype.ngOnInit = function () {
        var _this = this;
        this.base.api.stateList(101);
        this.base.shared.Lstorage.fetchData('customerId').then(function (data) {
            if (data) {
                _this.customerId = data;
            }
        });
    };
    AddeditaddressPage.prototype.handleApiResponse = function (data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["addAddressList"]) {
            this.loading.dismiss();
            if (this.addressForCart === 1) {
                this.base.shared.Lstorage.delData('addressForCart');
                this.navCtrl.navigateRoot('/cart');
            }
            else {
                var successMessage = data.result && data.result.message ? data.result.message : 'Registration Successfully';
                this.base.shared.Alert.show_alert('Success', successMessage);
                this.navCtrl.navigateRoot('/address');
            }
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
    AddeditaddressPage.prototype.handleApiResponseError = function (data) {
        console.log('data', data);
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_6__["addAddressList"]) {
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
    AddeditaddressPage.prototype.doSave = function () {
        this.loading.present();
        this.addForm.value.customerId = this.customerId;
        this.base.api.addAddressList(this.addForm.value);
    };
    AddeditaddressPage.prototype.selectState = function (event) {
        if (event.target.value) {
            this.base.api.cityList(event.target.value);
        }
    };
    AddeditaddressPage.ctorParameters = function () { return [
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
    AddeditaddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addeditaddress',
            template: __webpack_require__(/*! raw-loader!./addeditaddress.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addeditaddress/addeditaddress.page.html"),
            styles: [__webpack_require__(/*! ./addeditaddress.page.scss */ "./src/app/pages/addeditaddress/addeditaddress.page.scss")]
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
    ], AddeditaddressPage);
    return AddeditaddressPage;
}(_shared_classes_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=pages-addeditaddress-addeditaddress-module-es5.js.map