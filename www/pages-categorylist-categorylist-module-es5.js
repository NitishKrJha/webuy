(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categorylist-categorylist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/categorylist/categorylist.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/categorylist/categorylist.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Category List</ion-title>\n    </ion-toolbar>\n    </ion-header>\n\n<ion-content fullscreen common-parallax [scrollEvents]=\"true\">\n  \t\n\n  <div class=\"wrap-gallery-info pd-10\">\n      <ion-searchbar show-cancel-button cancel-button-text=\"Really Long Cancel\" color=\"danger\">\n        </ion-searchbar>\n    <div class=\"element-gallery pd-5\">\n      <div (click)=\"viewImg('lemon1.png')\" class=\"wrap-element shadow-2\">\n        <div class=\"thumb-view\">\n          <img src=\"assets/images/lemon1.png\">\n        </div>\n        <div class=\"pd-10 txt-info txt-light\">\n          <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Lorem Ipsum is simply dummy text</h4>\n          <p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"element-gallery pd-5\">\n      <div (click)=\"viewImg('lemon2.png')\" class=\"wrap-element shadow-2\">\n        <div class=\"thumb-view\">\n          <img src=\"assets/images/lemon2.png\">\n        </div>\n        <div class=\"pd-10 txt-info txt-light\">\n          <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Lorem Ipsum is simply dummy text</h4>\n          <p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"element-gallery pd-5\">\n      <div (click)=\"viewImg('lemon3.png')\" class=\"wrap-element shadow-2\">\n        <div class=\"thumb-view\">\n          <img src=\"assets/images/lemon3.png\">\n        </div>\n        <div class=\"pd-10 txt-info txt-light\">\n          <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Lorem Ipsum is simply dummy text</h4>\n          <p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"element-gallery pd-5\">\n      <div (click)=\"viewImg('lemon4.png')\" class=\"wrap-element shadow-2\">\n        <div class=\"thumb-view\">\n          <img src=\"assets/images/lemon4.png\">\n        </div>\n        <div class=\"pd-10 txt-info txt-light\">\n          <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Lorem Ipsum is simply dummy text</h4>\n          <p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"element-gallery pd-5\">\n      <div (click)=\"viewImg('lemon5.png')\" class=\"wrap-element shadow-2\">\n        <div class=\"thumb-view\">\n          <img src=\"assets/images/lemon5.png\">\n        </div>\n        <div class=\"pd-10 txt-info txt-light\">\n          <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Lorem Ipsum is simply dummy text</h4>\n          <p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"element-gallery pd-5\">\n      <div (click)=\"viewImg('lemon6.png')\" class=\"wrap-element shadow-2\">\n        <div class=\"thumb-view\">\n          <img src=\"assets/images/lemon6.png\">\n        </div>\n        <div class=\"pd-10 txt-info txt-light\">\n          <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Lorem Ipsum is simply dummy text</h4>\n          <p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"element-gallery pd-5\">\n        <div (click)=\"viewImg('lemon5.png')\" class=\"wrap-element shadow-2\">\n          <div class=\"thumb-view\">\n            <img src=\"assets/images/lemon5.png\">\n          </div>\n          <div class=\"pd-10 txt-info txt-light\">\n            <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Lorem Ipsum is simply dummy text</h4>\n            <p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"element-gallery pd-5\">\n        <div (click)=\"viewImg('lemon6.png')\" class=\"wrap-element shadow-2\">\n          <div class=\"thumb-view\">\n            <img src=\"assets/images/lemon6.png\">\n          </div>\n          <div class=\"pd-10 txt-info txt-light\">\n            <h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Lorem Ipsum is simply dummy text</h4>\n            <p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n          </div>\n        </div>\n      </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/categorylist/categorylist-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/categorylist/categorylist-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CategorylistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistPageRoutingModule", function() { return CategorylistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categorylist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorylist.page */ "./src/app/pages/categorylist/categorylist.page.ts");




var routes = [
    {
        path: '',
        component: _categorylist_page__WEBPACK_IMPORTED_MODULE_3__["CategorylistPage"]
    }
];
var CategorylistPageRoutingModule = /** @class */ (function () {
    function CategorylistPageRoutingModule() {
    }
    CategorylistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CategorylistPageRoutingModule);
    return CategorylistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/categorylist/categorylist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/categorylist/categorylist.module.ts ***!
  \***********************************************************/
/*! exports provided: CategorylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistPageModule", function() { return CategorylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categorylist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorylist-routing.module */ "./src/app/pages/categorylist/categorylist-routing.module.ts");
/* harmony import */ var _categorylist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorylist.page */ "./src/app/pages/categorylist/categorylist.page.ts");







var CategorylistPageModule = /** @class */ (function () {
    function CategorylistPageModule() {
    }
    CategorylistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _categorylist_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategorylistPageRoutingModule"]
            ],
            declarations: [_categorylist_page__WEBPACK_IMPORTED_MODULE_6__["CategorylistPage"]]
        })
    ], CategorylistPageModule);
    return CategorylistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/categorylist/categorylist.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/categorylist/categorylist.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-gallery-info .element-gallery {\n  display: inline-block;\n  width: 50%;\n  height: 40vw;\n}\n.wrap-gallery-info .element-gallery .wrap-element {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.wrap-gallery-info .element-gallery .wrap-element .thumb-view {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.wrap-gallery-info .element-gallery .wrap-element .txt-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background-image: linear-gradient(-230deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9jYXRlZ29yeWxpc3QvY2F0ZWdvcnlsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnlsaXN0L2NhdGVnb3J5bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7QURDRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NIO0FEQUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdGQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeWxpc3QvY2F0ZWdvcnlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwLWdhbGxlcnktaW5mb3tcblx0LmVsZW1lbnQtZ2FsbGVyeXtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRoZWlnaHQ6IDQwdnc7XG5cdFx0LndyYXAtZWxlbWVudHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdC50aHVtYi12aWV3e1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdH1cblx0XHRcdC50eHQtaW5mb3tcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIzMGRlZywgcmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwLjIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIud3JhcC1nYWxsZXJ5LWluZm8gLmVsZW1lbnQtZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MHZ3O1xufVxuLndyYXAtZ2FsbGVyeS1pbmZvIC5lbGVtZW50LWdhbGxlcnkgLndyYXAtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwLWdhbGxlcnktaW5mbyAuZWxlbWVudC1nYWxsZXJ5IC53cmFwLWVsZW1lbnQgLnRodW1iLXZpZXcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwLWdhbGxlcnktaW5mbyAuZWxlbWVudC1nYWxsZXJ5IC53cmFwLWVsZW1lbnQgLnR4dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIzMGRlZywgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjIpKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/categorylist/categorylist.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/categorylist/categorylist.page.ts ***!
  \*********************************************************/
/*! exports provided: CategorylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistPage", function() { return CategorylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CategorylistPage = /** @class */ (function () {
    function CategorylistPage(navCtrl, loadingCtrl, alertCtrl, platform, events, router) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.events = events;
        this.router = router;
    }
    CategorylistPage.prototype.ngOnInit = function () {
    };
    CategorylistPage.prototype.viewImg = function (name) {
        this.router.navigateByUrl('/productlist');
    };
    CategorylistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CategorylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categorylist',
            template: __webpack_require__(/*! raw-loader!./categorylist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/categorylist/categorylist.page.html"),
            styles: [__webpack_require__(/*! ./categorylist.page.scss */ "./src/app/pages/categorylist/categorylist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategorylistPage);
    return CategorylistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-categorylist-categorylist-module-es5.js.map