(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n<ion-toolbar>\n\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t<ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n\t</ion-buttons>\n\t<ion-title>Home</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen common-parallax [scrollEvents]=\"true\">\n<ion-searchbar show-cancel-button cancel-button-text=\"Product Name/Code\" color=\"dark\">\n</ion-searchbar>  \t\n\t\n<div class=\"\" padding *ngIf=\"bannerList.length > 0\">\n\t<!-- <h2 class=\"fs-14\">Slide with slogan</h2> -->\n\t\n\t<ion-slides pager=\"false\" class=\"slide-slogan\" [options]=\"slideSloganOpts\">\n\t\t<ion-slide *ngFor=\"let banner of bannerList | keyvalue; let i = index;\">\n\t\t\t<div class=\"elmt-slide\">\n\t\t\t\t<div padding class=\"slogan\">\n\t\t\t\t\t<div padding class=\"main-txt\" text-left>\n\t\t\t\t\t\t<h2 no-margin class=\"fs-30 fw-900\">{{banner.value.title}}</h2>\n\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t<h5 no-margin class=\"txt-light fw-600 fs-20\">{{banner.value.title}}</h5>\n\t\t\t\t\t\t<p no-margin class=\"txt-light fs-12 ellipsis\">Various versions have evolved</p>\n\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t<ion-button expand=\"round\" size=\"small\" fill=\"outline\" color=\"light\" class=\"txt-light\">\n\t\t\t\t\t\t\tDetail\n\t\t\t\t\t\t\t<ion-icon slot=\"end\" name=\"arrow-dropright-circle\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bg-img\">\n\t\t\t\t\t<img src=\"{{banner.value.icon_app_path}}\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-slide>\n\t</ion-slides>\n</div>\n\n\n\n<div class=\"\" padding *ngIf=\"featureProductList.length > 0\">\n\t\n\t<ion-list>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<h2 class=\"fs-20\">Feature Product List</h2>\n\t\t\t</ion-label>\n\t\t\t<ion-label text-right>\n\t\t\t\t\t<a (click)=\"viewAll('featureProductList')\">(View All)</a>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-slides pager=\"false\" class=\"slide-perview\" [options]=\"slidePerViewOpts\">\n\t\t<ion-slide *ngFor=\"let fProduct of featureProductList | keyvalue; let i = index;\">\n\t\t\t<div class=\"elmt-slide\">\n\t\t\t\t<div class=\"thumb-img\">\n\t\t\t\t\t\t<img src=\"{{fProduct.value.image_path + fProduct.value.img_list[0].path_sm}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main-txt\" text-left>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4 no-margin class=\"txt2 fw-600 fs-12 ellipsis uppercase\">{{fProduct.value.title}}</h4>\n\t\t\t\t\t<p no-margin class=\"txt3 fs-12 ellipsis\">Rs. {{fProduct.value.sale_price}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-slide>\n\t</ion-slides>\n</div>\n\n<div class=\"\" padding *ngIf=\"recentViewProductList.length > 0\">\n\t<ion-list>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<h2 class=\"fs-20\">Recent View Product</h2>\n\t\t\t</ion-label>\n\t\t\t<ion-label text-right>\n\t\t\t\t<a (click)=\"viewAll('recentViewProductList')\">(View All)</a>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-slides pager=\"false\" class=\"slide-perview\" [options]=\"slidePerViewOpts\">\n\t\t<ion-slide *ngFor=\"let item of recentViewProductList | keyvalue; let i = index;\">\n\t\t\t<div class=\"elmt-slide\">\n\t\t\t\t<div class=\"thumb-img\">\n\t\t\t\t\t<img src=\"{{item.value.image_path + item.value.img_list[0].path_sm}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main-txt\" text-left>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4 no-margin class=\"txt2 fw-600 fs-12 ellipsis uppercase\">{{item.value.title}}</h4>\n\t\t\t\t\t<p no-margin class=\"txt3 fs-12 ellipsis\">Rs. {{item.value.sale_price}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-slide>\n\t</ion-slides>\n</div>\n\n<div class=\"\" padding *ngIf=\"trendsProductList.length > 0\">\n\t<ion-list>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<h2 class=\"fs-20\">Trend Product</h2>\n\t\t\t</ion-label>\n\t\t\t<ion-label text-right>\n\t\t\t\t\t<a (click)=\"viewAll('trendsProductList')\">(View All)</a>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-slides pager=\"false\" class=\"slide-perview\" [options]=\"slidePerViewOpts\">\n\t\t<ion-slide *ngFor=\"let item of trendsProductList | keyvalue; let i = index;\">\n\t\t\t<div class=\"elmt-slide\">\n\t\t\t\t<div class=\"thumb-img\">\n\t\t\t\t\t<img src=\"{{item.value.image_path + item.value.img_list[0].path_sm}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main-txt\" text-left>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4 no-margin class=\"txt2 fw-600 fs-12 ellipsis uppercase\">{{item.value.title}}</h4>\n\t\t\t\t\t<p no-margin class=\"txt3 fs-12 ellipsis\">Rs. {{item.value.sale_price}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-slide>\n\t</ion-slides>\n</div>\n\n\n<div class=\"\" padding *ngIf=\"productList.length > 0\">\n\t<ion-list>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<h2 class=\"fs-20\">Product List</h2>\n\t\t\t</ion-label>\n\t\t\t<ion-label text-right>\n\t\t\t\t\t<a (click)=\"viewAll('productList')\">(View All)</a>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-slides pager=\"false\" class=\"slide-perview\" [options]=\"slidePerViewOpts\">\n\t\t<ion-slide *ngFor=\"let item of productList | keyvalue; let i = index;\">\n\t\t\t<div class=\"elmt-slide\">\n\t\t\t\t<div class=\"thumb-img\">\n\t\t\t\t\t<img src=\"{{item.value.image_path + item.value.img_list[0].path_sm}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main-txt\" text-left>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4 no-margin class=\"txt2 fw-600 fs-12 ellipsis uppercase\">{{item.value.title}}</h4>\n\t\t\t\t\t<p no-margin class=\"txt3 fs-12 ellipsis\">Rs. {{item.value.sale_price}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-slide>\n\t</ion-slides>\n</div>\n\n\n<br/>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-slogan .elmt-slide {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.slide-slogan .elmt-slide .slogan {\n  position: relative;\n  z-index: 100;\n}\n.slide-slogan .elmt-slide .bg-img {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.slide-slogan .elmt-slide .bg-img img {\n  min-height: 100%;\n}\n.slide-perview {\n  width: 130%;\n}\n.slide-perview .elmt-slide {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.slide-perview .elmt-slide .thumb-img {\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.slide-perview .elmt-slide .thumb-img img {\n  min-height: 100%;\n}\n.slide-thumb {\n  width: 100%;\n}\n.slide-thumb .elmt-slide {\n  position: relative;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.slide-thumb .elmt-slide .thumb-img {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.slide-thumb .elmt-slide .thumb-img img {\n  min-height: 100%;\n}\n.slide-thumb .elmt-slide .main-txt {\n  -webkit-box-flex: 2;\n          flex: 2;\n  overflow: hidden;\n}\n.slide-thin {\n  width: 125%;\n}\n.slide-thin .elmt-slide {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.slide-thin .elmt-slide .thumb-img {\n  height: 260px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.slide-thin .elmt-slide .thumb-img img {\n  height: 100%;\n  max-width: unset !important;\n}\n.slide-freedom {\n  width: 200%;\n  margin-left: -50%;\n}\n.slide-freedom .elmt-slide {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.slide-freedom .elmt-slide .thumb-img {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.slide-freedom .elmt-slide .thumb-img img {\n  min-height: 100%;\n}\n.slide-center {\n  width: 200%;\n  margin-left: 25%;\n}\n.slide-center .swiper-slide-active .elmt-slide .thumb-img {\n  margin-top: -25px;\n  height: 300px;\n}\n.slide-center .elmt-slide {\n  position: relative;\n  width: 100%;\n}\n.slide-center .elmt-slide .thumb-img {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  height: 250px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.slide-center .elmt-slide .thumb-img img {\n  min-height: 100%;\n}\n.slide-side {\n  width: 140%;\n}\n.slide-side .swiper-slide-active .elmt-slide .thumb-img {\n  margin-top: -25px;\n  height: 200px;\n}\n.slide-side .elmt-slide {\n  position: relative;\n  width: 100%;\n}\n.slide-side .elmt-slide .thumb-img {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.slide-side .elmt-slide .thumb-img img {\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RGO0FERUU7RUFDQyxrQkFBQTtFQUNBLFlBQUE7QUNBSDtBREVFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBSDtBRENHO0VBQ0MsZ0JBQUE7QUNDSjtBRE1BO0VBQ0MsV0FBQTtBQ0hEO0FESUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FER0U7RUFDQyxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0RIO0FERUc7RUFDQyxnQkFBQTtBQ0FKO0FET0E7RUFDQyxXQUFBO0FDSkQ7QURLQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0hGO0FESUU7RUFDQyxtQkFBQTtVQUFBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0ZIO0FER0c7RUFDQyxnQkFBQTtBQ0RKO0FESUU7RUFDQyxtQkFBQTtVQUFBLE9BQUE7RUFDQSxnQkFBQTtBQ0ZIO0FEUUE7RUFDQyxXQUFBO0FDTEQ7QURNQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSkY7QURLRTtFQUNDLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDSEg7QURJRztFQUNDLFlBQUE7RUFDQSwyQkFBQTtBQ0ZKO0FEU0E7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUNORDtBRE9DO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRE1FO0VBQ0MsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNKSDtBREtHO0VBQ0MsZ0JBQUE7QUNISjtBRFVBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FDUEQ7QURVRztFQUNDLGlCQUFBO0VBQ0EsYUFBQTtBQ1JKO0FEWUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUNWRjtBRFdFO0VBQ0Msd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDVEg7QURVRztFQUNDLGdCQUFBO0FDUko7QURlQTtFQUNDLFdBQUE7QUNaRDtBRGVHO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0FDYko7QURpQkM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUNmRjtBRGdCRTtFQUNDLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ2RIO0FEZUc7RUFDQyxnQkFBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNsaWRlLXNsb2dhbntcblx0LmVsbXQtc2xpZGV7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMzAwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0LnNsb2dhbntcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6IDEwMDtcblx0XHR9XG5cdFx0LmJnLWltZ3tcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHotaW5kZXg6IDEwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRpbWd7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cblxuLnNsaWRlLXBlcnZpZXd7XG5cdHdpZHRoOiAxMzAlO1xuXHQuZWxtdC1zbGlkZXtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHQudGh1bWItaW1ne1xuXHRcdFx0aGVpZ2h0OiAxMDBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0aW1ne1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5cbi5zbGlkZS10aHVtYntcblx0d2lkdGg6IDEwMCU7XG5cdC5lbG10LXNsaWRle1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHQudGh1bWItaW1ne1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0aW1ne1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQubWFpbi10eHR7XG5cdFx0XHRmbGV4OiAyO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR9XG5cdH1cbn1cblxuXG4uc2xpZGUtdGhpbntcblx0d2lkdGg6IDEyNSU7XG5cdC5lbG10LXNsaWRle1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdC50aHVtYi1pbWd7XG5cdFx0XHRoZWlnaHQ6IDI2MHB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRpbWd7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0bWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5cbi5zbGlkZS1mcmVlZG9te1xuXHR3aWR0aDogMjAwJTtcblx0bWFyZ2luLWxlZnQ6IC01MCU7XG5cdC5lbG10LXNsaWRle1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdC50aHVtYi1pbWd7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdGltZ3tcblx0XHRcdFx0bWluLWhlaWdodDogMTAwJTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG4uc2xpZGUtY2VudGVye1xuXHR3aWR0aDogMjAwJTtcblx0bWFyZ2luLWxlZnQ6IDI1JTtcblx0LnN3aXBlci1zbGlkZS1hY3RpdmV7XG5cdFx0LmVsbXQtc2xpZGV7XG5cdFx0XHQudGh1bWItaW1ne1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMjVweDtcblx0XHRcdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmVsbXQtc2xpZGV7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC50aHVtYi1pbWd7XG5cdFx0XHR0cmFuc2l0aW9uOiAwLjNzO1xuXHRcdFx0aGVpZ2h0OiAyNTBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0aW1ne1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5cbi5zbGlkZS1zaWRle1xuXHR3aWR0aDogMTQwJTtcblx0LnN3aXBlci1zbGlkZS1hY3RpdmV7XG5cdFx0LmVsbXQtc2xpZGV7XG5cdFx0XHQudGh1bWItaW1ne1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMjVweDtcblx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmVsbXQtc2xpZGV7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC50aHVtYi1pbWd7XG5cdFx0XHR0cmFuc2l0aW9uOiAwLjNzO1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0aW1ne1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi5zbGlkZS1zbG9nYW4gLmVsbXQtc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNsaWRlLXNsb2dhbiAuZWxtdC1zbGlkZSAuc2xvZ2FuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG59XG4uc2xpZGUtc2xvZ2FuIC5lbG10LXNsaWRlIC5iZy1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNsaWRlLXNsb2dhbiAuZWxtdC1zbGlkZSAuYmctaW1nIGltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zbGlkZS1wZXJ2aWV3IHtcbiAgd2lkdGg6IDEzMCU7XG59XG4uc2xpZGUtcGVydmlldyAuZWxtdC1zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGUtcGVydmlldyAuZWxtdC1zbGlkZSAudGh1bWItaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGUtcGVydmlldyAuZWxtdC1zbGlkZSAudGh1bWItaW1nIGltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zbGlkZS10aHVtYiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlLXRodW1iIC5lbG10LXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zbGlkZS10aHVtYiAuZWxtdC1zbGlkZSAudGh1bWItaW1nIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZS10aHVtYiAuZWxtdC1zbGlkZSAudGh1bWItaW1nIGltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uc2xpZGUtdGh1bWIgLmVsbXQtc2xpZGUgLm1haW4tdHh0IHtcbiAgZmxleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlLXRoaW4ge1xuICB3aWR0aDogMTI1JTtcbn1cbi5zbGlkZS10aGluIC5lbG10LXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZS10aGluIC5lbG10LXNsaWRlIC50aHVtYi1pbWcge1xuICBoZWlnaHQ6IDI2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZS10aGluIC5lbG10LXNsaWRlIC50aHVtYi1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5zbGlkZS1mcmVlZG9tIHtcbiAgd2lkdGg6IDIwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTAlO1xufVxuLnNsaWRlLWZyZWVkb20gLmVsbXQtc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNsaWRlLWZyZWVkb20gLmVsbXQtc2xpZGUgLnRodW1iLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGUtZnJlZWRvbSAuZWxtdC1zbGlkZSAudGh1bWItaW1nIGltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zbGlkZS1jZW50ZXIge1xuICB3aWR0aDogMjAwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cbi5zbGlkZS1jZW50ZXIgLnN3aXBlci1zbGlkZS1hY3RpdmUgLmVsbXQtc2xpZGUgLnRodW1iLWltZyB7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuLnNsaWRlLWNlbnRlciAuZWxtdC1zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2xpZGUtY2VudGVyIC5lbG10LXNsaWRlIC50aHVtYi1pbWcge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZS1jZW50ZXIgLmVsbXQtc2xpZGUgLnRodW1iLWltZyBpbWcge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uc2xpZGUtc2lkZSB7XG4gIHdpZHRoOiAxNDAlO1xufVxuLnNsaWRlLXNpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLmVsbXQtc2xpZGUgLnRodW1iLWltZyB7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLnNsaWRlLXNpZGUgLmVsbXQtc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlLXNpZGUgLmVsbXQtc2xpZGUgLnRodW1iLWltZyB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNsaWRlLXNpZGUgLmVsbXQtc2xpZGUgLnRodW1iLWltZyBpbWcge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/_classes/base.component */ "./src/app/_shared/_classes/base.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/constant */ "./src/app/_shared/constant.ts");
/* harmony import */ var _shared_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/loading.service */ "./src/app/_shared/loading.service.ts");







let HomePage = class HomePage extends _shared_classes_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
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
        this.bannerList = [];
        this.featureProductList = [];
        this.productList = [];
        this.trendsProductList = [];
        this.recentViewProductList = [];
        this.slideSloganOpts = {
            initialSlide: 1,
        };
        this.slidePerViewOpts = {
            speed: 1000,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 500,
            },
            slidesPerView: 3,
        };
        this.slideThumbOpts = {
            speed: 1000,
            spaceBetween: 16,
        };
        this.slideThinOpts = {
            speed: 1000,
            loop: true,
            slidesPerView: 4,
        };
        this.slideFreedomOpts = {
            speed: 1000,
            spaceBetween: 16,
            loop: true,
            centeredSlides: true,
            slidesPerView: 3,
        };
        this.slideCenterOpts = {
            speed: 1000,
            spaceBetween: 16,
            loop: true,
            slidesPerView: 3,
        };
        this.slideSideOpts = {
            speed: 1000,
            spaceBetween: 16,
            loop: true,
            slidesPerView: 3,
        };
        this.initBaseComponent();
    }
    ngOnInit() {
        this.base.api.banner({});
        this.base.api.recentViewProductList({});
        this.base.api.trendsProductList({});
        this.base.api.featureProductList({});
        this.base.api.productList({});
    }
    handleApiResponse(data) {
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["banner"]) {
            this.bannerList = data.result && data.result.message ? data.result.data : [];
            console.log('bannerList', this.bannerList);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["recentViewProductList"]) {
            this.recentViewProductList = data.result && data.result.data.detail ? data.result.data.detail : [];
            console.log('recentViewProductList', this.recentViewProductList);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["trendsProductList"]) {
            this.trendsProductList = data.result && data.result.data.detail ? data.result.data.detail : [];
            console.log('trendsProductList', this.trendsProductList);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["featureProductList"]) {
            this.featureProductList = data.result && data.result.data.detail ? data.result.data.detail : [];
            console.log('featureProductList', this.featureProductList);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productList"]) {
            this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
            console.log('productList', this.productList);
        }
    }
    handleApiResponseError(data) {
        console.log('data', data);
        if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["banner"]) {
            this.bannerList = [];
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["recentViewProductList"]) {
            this.recentViewProductList = [];
            console.log('recentViewProductList', this.recentViewProductList);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["trendsProductList"]) {
            this.trendsProductList = [];
            console.log('trendsProductList', this.trendsProductList);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["featureProductList"]) {
            this.featureProductList = [];
            console.log('featureProductList', this.featureProductList);
        }
        else if (data.resultType === _shared_constant__WEBPACK_IMPORTED_MODULE_5__["productList"]) {
            this.productList = [];
            console.log('productList', this.productList);
        }
    }
    viewAll(type = '') {
        this.router.navigateByUrl('/productlist');
        const navigationExtras = {
            queryParams: {
                pageType: type
            }
        };
        this.router.navigate(['/productlist'], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
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
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
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
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map