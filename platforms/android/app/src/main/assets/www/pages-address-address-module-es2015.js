(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/address/address.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/address/address.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"addressList.length > 0\">\n    <ion-card *ngFor=\"let list of addressList\">\n      <ion-card-header>\n        <ion-card-subtitle>{{ list.full_name }}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        {{ list.address1 + \" \" + list.address2 + \" \" + list.city + \" , \" + list.state + \" , \" + list.country + \" , Pincode: \" + list.zipcode }}\n      </ion-card-content>\n      <ion-button *ngIf=\"list.status=='0'\" expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"setDefaultAddrees(list.address_id)\">Make Default</ion-button>\n      <ion-button expand=\"block\" *ngIf=\"list.status=='0'\" fill=\"outline\" color=\"danger\" (click)=\"delAddrees(list.address_id)\">Remove</ion-button>\n    </ion-card>\n  </div>\n  <!-- <div *ngIf=\"addressList.length === 0\">\n    No Data Found\n  </div> -->\n  \n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"addAddress()\">Add Address</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/address/address-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/address/address-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function() { return AddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");




const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/address/address.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.module.ts ***!
  \*************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/pages/address/address-routing.module.ts");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");







let AddressPageModule = class AddressPageModule {
};
AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })
], AddressPageModule);



/***/ }),

/***/ "./src/app/pages/address/address.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  width: 60px;\n  height: 40px;\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 4px;\n  text-align: center;\n  margin-right: 10px;\n}\n\nion-avatar {\n  --border-radius: 0;\n}\n\n.remove {\n  position: absolute;\n  color: red;\n  top: 20px;\n  right: 0px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tYXZhdGFye1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbn1cbi5yZW1vdmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSIsIi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ucmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogcmVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/address/address.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/address/address.page.ts ***!
  \***********************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");







let AddressPage = class AddressPage extends _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
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
        this.addressList = [];
        this.customerId = 0;
        this.addressForCart = 0;
        this.initBaseComponent();
        this.base.shared.Lstorage.fetchData('addressForCart').then(datas => {
            this.addressForCart = datas;
        });
    }
    ngOnInit() {
        this.base.shared.Lstorage.fetchData('customerId').then(data => {
            if (data) {
                this.customerId = data;
                this.loading.present();
                this.getaddressList();
            }
        });
    }
    getaddressList() {
        this.base.api.addressList({ ip_address: '192.168.0.1', customer_id: this.customerId });
    }
    handleApiResponse(data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addressList"]) {
            this.loading.dismiss();
            this.addressList = data.result && data.result.data ? data.result.data : [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["removeAddressList"]) {
            this.loading.dismiss();
            this.getaddressList();
            const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Success', successMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["setDefaultAddrees"]) {
            if (this.addressForCart === 1) {
                this.base.shared.Lstorage.delData('addressForCart');
                this.navCtrl.navigateRoot('/cart');
            }
            else {
                this.loading.dismiss();
                this.getaddressList();
                const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
                this.base.shared.Alert.show_alert('Success', successMessage);
            }
        }
    }
    handleApiResponseError(data) {
        this.loading.dismiss();
        console.log('data', data);
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["addressList"]) {
            this.addressList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["removeAddressList"]) {
            const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["setDefaultAddrees"]) {
            const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
            this.base.shared.Alert.show_alert('Failed!', errorMessage);
        }
    }
    delAddrees(id) {
        this.loading.present();
        this.base.api.removeAddressList({
            customer_id: this.customerId,
            address_id: id,
            ip_address: '192.168.0.1'
        });
    }
    setDefaultAddrees(id) {
        this.loading.present();
        this.base.api.setDefaultAddrees({
            customer_id: this.customerId,
            address_id: id,
            ip_address: '192.168.0.1'
        });
    }
    addAddress() {
        this.navCtrl.navigateRoot('/addeditaddress');
    }
};
AddressPage.ctorParameters = () => [
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
AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: __webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/address/address.page.html"),
        styles: [__webpack_require__(/*! ./address.page.scss */ "./src/app/pages/address/address.page.scss")]
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
], AddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-address-address-module-es2015.js.map