(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-productlist-productlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/productlist/productlist.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/productlist/productlist.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"parallax-obj parallax-translate-obj header-transparent\">\n\t<ion-toolbar>\n\t  <ion-buttons slot=\"start\">\n\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t<ion-back-button text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n\t  </ion-buttons>\n\t  <ion-title>Product List</ion-title>\n\t</ion-toolbar>\n  </ion-header>\n  \n  <ion-content fullscreen common-parallax [scrollEvents]=\"true\">\n\t\t\n\t\n\t<div class=\"wrap-gallery-info pd-10\">\n\t   <ion-searchbar show-cancel-button cancel-button-text=\"Really Long Cancel\" color=\"danger\">\n\t\t</ion-searchbar>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon1.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/1.jpg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\" text-center>Rs. 8500</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\" text-center>Shirt</p>\n\t\t</div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon2.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/2.jpg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 15800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon3.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/3.jpg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 17800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon4.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/8.jpg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 1800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon5.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/9.jpg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 11800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon6.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/4.jpeg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 15800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon7.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/5.jpeg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 15800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon8.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/6.jpeg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 15800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon9.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/9.jpg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 15800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t</div>\n\t  </div>\n\t  <div class=\"element-gallery pd-5\">\n\t\t<div (click)=\"viewImg('lemon10.png')\" class=\"wrap-element shadow-2\">\n\t\t  <div class=\"thumb-view\">\n\t\t\t<img src=\"assets/images/groce/9.jpg\">\n\t\t  </div>\n\t\t  <div class=\"pd-10 txt-info txt-danger\">\n\t\t\t<h4 no-margin class=\"ellipsis fs-12 fw-600 spacing1 pdb-2 uppercase\">Rs. 15800</h4>\n\t\t\t<p no-margin class=\"ellipsis fs-12\">Contrary to popular belief, Lorem Ipsum is not simply random text</p>\n\t\t  </div>\n\t\t</div>\n\t\t<div  class=\"wrap-element shadow-2\">\n\t\t\t\t<ion-button expand=\"block\" color=\"danger\">Buy Now</ion-button>\n\t\t\t</div>\n\t  </div>\n\t</div>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/productlist/productlist-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/productlist/productlist-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageRoutingModule", function() { return ProductlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _productlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productlist.page */ "./src/app/pages/productlist/productlist.page.ts");




const routes = [
    {
        path: '',
        component: _productlist_page__WEBPACK_IMPORTED_MODULE_3__["ProductlistPage"]
    }
];
let ProductlistPageRoutingModule = class ProductlistPageRoutingModule {
};
ProductlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductlistPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/productlist/productlist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/productlist/productlist.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageModule", function() { return ProductlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productlist-routing.module */ "./src/app/pages/productlist/productlist-routing.module.ts");
/* harmony import */ var _productlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productlist.page */ "./src/app/pages/productlist/productlist.page.ts");







let ProductlistPageModule = class ProductlistPageModule {
};
ProductlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _productlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductlistPageRoutingModule"]
        ],
        declarations: [_productlist_page__WEBPACK_IMPORTED_MODULE_6__["ProductlistPage"]]
    })
], ProductlistPageModule);



/***/ }),

/***/ "./src/app/pages/productlist/productlist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/productlist/productlist.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-gallery-info .element-gallery {\n  display: inline-block;\n  width: 50%;\n  height: 40vw;\n}\n.wrap-gallery-info .element-gallery .wrap-element {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.wrap-gallery-info .element-gallery .wrap-element .thumb-view {\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.wrap-gallery-info .element-gallery .wrap-element .txt-info {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background-image: linear-gradient(-230deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvaW9uaWMvd2VidXkvc3JjL2FwcC9wYWdlcy9wcm9kdWN0bGlzdC9wcm9kdWN0bGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RsaXN0L3Byb2R1Y3RsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjtBRENFO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7QUNBSDtBRENHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdGxpc3QvcHJvZHVjdGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAtZ2FsbGVyeS1pbmZve1xuXHQuZWxlbWVudC1nYWxsZXJ5e1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR3aWR0aDogNTAlO1xuXHRcdGhlaWdodDogNDB2dztcblx0XHQud3JhcC1lbGVtZW50e1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdC8vIGhlaWdodDogMTAwJTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0LnRodW1iLXZpZXd7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDUwJTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHR9XG5cdFx0XHQudHh0LWluZm97XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsIHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC4yKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiLndyYXAtZ2FsbGVyeS1pbmZvIC5lbGVtZW50LWdhbGxlcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDB2dztcbn1cbi53cmFwLWdhbGxlcnktaW5mbyAuZWxlbWVudC1nYWxsZXJ5IC53cmFwLWVsZW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXAtZ2FsbGVyeS1pbmZvIC5lbGVtZW50LWdhbGxlcnkgLndyYXAtZWxlbWVudCAudGh1bWItdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud3JhcC1nYWxsZXJ5LWluZm8gLmVsZW1lbnQtZ2FsbGVyeSAud3JhcC1lbGVtZW50IC50eHQtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/productlist/productlist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/productlist/productlist.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPage", function() { return ProductlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductlistPage = class ProductlistPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productlist',
        template: __webpack_require__(/*! raw-loader!./productlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/productlist/productlist.page.html"),
        styles: [__webpack_require__(/*! ./productlist.page.scss */ "./src/app/pages/productlist/productlist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductlistPage);



/***/ })

}]);
//# sourceMappingURL=pages-productlist-productlist-module-es2015.js.map