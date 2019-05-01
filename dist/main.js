(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");






var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'menu', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n font-family: Geneva,Tahoma,Verdana,sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw2Q0FBNkM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gZm9udC1mYW1pbHk6IEdlbmV2YSxUYWhvbWEsVmVyZGFuYSxzYW5zLXNlcmlmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'nicuTacoApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n box-sizing: border-box;\r\n}\r\n\r\n.column {\r\n float: left;\r\n width: 33.3%;\r\n padding: 0px;\r\n}\r\n\r\n/* Clearfix (clear floats) */\r\n\r\n.row::after {\r\n content: \"\";\r\n clear: both;\r\n display: table;\r\n}\r\n\r\nbutton {\r\n width:800px; \r\n height: 200px; line-height: 200px;\r\n position: absolute;\r\n top: 50%; margin-top:-100px; \r\n left: 50%; margin-left:-400px;\r\n font-weight: bold;\r\n font-size: 100px;\r\n text-transform: uppercase;\r\n text-align:center;\r\n box-shadow: 0px 0px 15px 0px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBLDRCQUE0Qjs7QUFDNUI7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhLEVBQUUsa0JBQWtCO0NBQ2pDLGtCQUFrQjtDQUNsQixRQUFRLEVBQUUsaUJBQWlCO0NBQzNCLFNBQVMsRUFBRSxrQkFBa0I7Q0FDN0IsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLGtDQUFrQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gZmxvYXQ6IGxlZnQ7XHJcbiB3aWR0aDogMzMuMyU7XHJcbiBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi8qIENsZWFyZml4IChjbGVhciBmbG9hdHMpICovXHJcbi5yb3c6OmFmdGVyIHtcclxuIGNvbnRlbnQ6IFwiXCI7XHJcbiBjbGVhcjogYm90aDtcclxuIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gd2lkdGg6ODAwcHg7IFxyXG4gaGVpZ2h0OiAyMDBweDsgbGluZS1oZWlnaHQ6IDIwMHB4O1xyXG4gcG9zaXRpb246IGFic29sdXRlO1xyXG4gdG9wOiA1MCU7IG1hcmdpbi10b3A6LTEwMHB4OyBcclxuIGxlZnQ6IDUwJTsgbWFyZ2luLWxlZnQ6LTQwMHB4O1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBmb250LXNpemU6IDEwMHB4O1xyXG4gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n <div class=\"column\">\n   <!-- Photo by Travis Yewell on Unsplash -->\n  <img src=\"/assets/photos/travis-yewell-497435-unsplash.jpg\" style=\"width: 24rem;height:16rem;\">\n </div>\n <div class=\"column\">\n     <!-- Photo by Rosalind Chang on Unsplash -burrito bowl -->\n  <img src=\"/assets/photos/rosalind-chang-769213-unsplash.jpg\" style=\"width: 24rem;height:16rem;\">\n </div>\n <div class=\"column\">\n  <!-- Photo by Krisztian Tabori on Unsplash taco -->\n  <img src=\"/assets/photos/krisztian-tabori-1405309-unsplash.jpg\" style=\"width: 24rem; height:16rem;\">\n </div>\n</div>\n\n<button class=\"btn btn-success btn-lg\" routerLink=\"/menu\">Order Now</button>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.column {\r\n float: left;\r\n width: 33.3%;\r\n padding: 30px;\r\n \r\n}\r\n\r\n.row::after {\r\n content: \"\";\r\n clear: both;\r\n display: table;\r\n}\r\n\r\n#checkout {\r\n width:300px; \r\n height: 75px; line-height: 50px;\r\n position: absolute;\r\n top: 50%; margin-top:-100px; \r\n left: 50%; margin-left:-530px;\r\n text-transform: uppercase;\r\n text-align:center\r\n \r\n}\r\n\r\n#orderLength {\r\n  display:inline;\r\n}\r\n\r\n#receipt {\r\n position: absolute;\r\n height: 100px; line-height: 25px;\r\n top: 50%; margin-top:-100px; \r\n left: 50%; margin-left:-145px;\r\n max-width: 100%;\r\n \r\n \r\n /* background: #F2F2F2; */\r\n \r\n border-right: 0px;\r\n box-shadow: 0px 0px 5px 0px black ;\r\n padding:10px;\r\n\r\n}\r\n\r\n#items {\r\n overflow: scroll;\r\n overflow-x: hidden;\r\n height: 200px;\r\n}\r\n\r\n#subtotal {\r\n padding: 5px;\r\n}\r\n\r\n#foodContents {\r\n  color: #ccc;\r\n  font-size: 15px;\r\n}\r\n\r\n#money {\r\n float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7O0FBRWQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZLEVBQUUsaUJBQWlCO0NBQy9CLGtCQUFrQjtDQUNsQixRQUFRLEVBQUUsaUJBQWlCO0NBQzNCLFNBQVMsRUFBRSxrQkFBa0I7Q0FDN0IseUJBQXlCO0NBQ3pCOztBQUVEOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhLEVBQUUsaUJBQWlCO0NBQ2hDLFFBQVEsRUFBRSxpQkFBaUI7Q0FDM0IsU0FBUyxFQUFFLGtCQUFrQjtDQUM3QixlQUFlOzs7Q0FHZix5QkFBeUI7O0NBRXpCLGlCQUFpQjtDQUNqQixrQ0FBa0M7Q0FDbEMsWUFBWTs7QUFFYjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb2x1bW4ge1xyXG4gZmxvYXQ6IGxlZnQ7XHJcbiB3aWR0aDogMzMuMyU7XHJcbiBwYWRkaW5nOiAzMHB4O1xyXG4gXHJcbn1cclxuXHJcbi5yb3c6OmFmdGVyIHtcclxuIGNvbnRlbnQ6IFwiXCI7XHJcbiBjbGVhcjogYm90aDtcclxuIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4jY2hlY2tvdXQge1xyXG4gd2lkdGg6MzAwcHg7IFxyXG4gaGVpZ2h0OiA3NXB4OyBsaW5lLWhlaWdodDogNTBweDtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogNTAlOyBtYXJnaW4tdG9wOi0xMDBweDsgXHJcbiBsZWZ0OiA1MCU7IG1hcmdpbi1sZWZ0Oi01MzBweDtcclxuIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiB0ZXh0LWFsaWduOmNlbnRlclxyXG4gXHJcbn1cclxuI29yZGVyTGVuZ3RoIHtcclxuICBkaXNwbGF5OmlubGluZTtcclxufVxyXG5cclxuI3JlY2VpcHQge1xyXG4gcG9zaXRpb246IGFic29sdXRlO1xyXG4gaGVpZ2h0OiAxMDBweDsgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiB0b3A6IDUwJTsgbWFyZ2luLXRvcDotMTAwcHg7IFxyXG4gbGVmdDogNTAlOyBtYXJnaW4tbGVmdDotMTQ1cHg7XHJcbiBtYXgtd2lkdGg6IDEwMCU7XHJcbiBcclxuIFxyXG4gLyogYmFja2dyb3VuZDogI0YyRjJGMjsgKi9cclxuIFxyXG4gYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggYmxhY2sgO1xyXG4gcGFkZGluZzoxMHB4O1xyXG5cclxufVxyXG4jaXRlbXMge1xyXG4gb3ZlcmZsb3c6IHNjcm9sbDtcclxuIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbiNzdWJ0b3RhbCB7XHJcbiBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbiNmb29kQ29udGVudHMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuI21vbmV5IHtcclxuIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\n\n<div class=\"row\">\n  <div class=\"column\">\n    <button type=\"button\" (click)=\"this.food.name = 'Taco'; this.food.price = 7.99; this.foodTotal = 7.99;\"\n      style=\"width: 20rem;\" class=\"card\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <div class=\"card-body\">\n        <h3>Taco</h3>\n        <p>Customize your own taco with your choice of meat, and salsa.</p>\n        <p>$7.99</p>\n      </div>\n    </button>\n  </div>\n  <div class=\"column\">\n    <button type=\"button\" (click)=\"this.food.name = 'Burrito'; this.food.price = 8.99; this.foodTotal = 8.99;\"\n      style=\"width: 20rem;\" class=\"card\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <div class=\"card-body\">\n        <h3>Burrito</h3>\n        <p>Customize your own burrito with your choice of meat, and salsa.</p>\n        <p>$8.99</p>\n      </div>\n    </button>\n  </div>\n  <div class=\"column\">\n    <button type=\"button\" (click)=\"this.food.name ='Burrito Bowl'; this.food.price = 6.99; this.foodTotal = 6.99;\"\n      style=\"width: 20rem;\" class=\"card\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <div class=\"card-body\">\n        <h3>Bowl</h3>\n        <p>Customize your own burrito bowl with your choice of meat, and salsa.</p>\n        <p>$6.99</p>\n      </div>\n    </button>\n  </div>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"#myModalTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">{{ food.name }}</h5>\n          <button type=\"button\" (click)=\"onReset()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form class=\"form-horizontal\" (submit)=\"onSubmit()\">\n\n            <div class=\"form-group\">\n              <!-- Frequency Field -->\n              <label class=\"control-label col-sm-2\">Meat</label>\n              <div class=\"col-sm-10\">\n                <div class=\"radio\">\n                  <label class=\"radio\">\n                    <input name=\"meat\" ngModel type=\"radio\" required value=\"beef\" [checked]='true'\n                      (click)=\"setMeat('Beef')\" />\n                    Beef\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label class=\"radio\">\n                    <input name=\"meat\" ngModel type=\"radio\" required value=\"chicken\" [checked]='true'\n                      (click)=\"setMeat('Chicken')\" />\n                    Chicken\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label class=\"radio\">\n                    <input name=\"meat\" ngModel type=\"radio\" required value=\"noMeat\" [checked]='true'\n                      (click)=\"setMeat('No Meat')\" />\n                    No Meat\n                  </label>\n                </div>\n              </div>\n            </div>\n            <hr>\n            <div class=\"form-group\">\n              <!-- Frequency Field -->\n              <label class=\"control-label col-sm-2\">Salsa</label>\n              <div class=\"col-sm-10\">\n                <div class=\"radio\">\n                  <label class=\"radio\">\n                    <input name=\"salsa\" ngModel type=\"radio\" required value=\"picco\" [checked]='true'\n                      (click)=\"setSalsa('Picco de Gallo')\" />\n                    Picco de Gallo\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label class=\"radio\">\n                    <input name=\"salsa\" ngModel type=\"radio\" required value=\"devil\" [checked]='true'\n                      (click)=\"setSalsa('Habanero Devil Sauce')\" />\n                    Harbenero Devil Sauce\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label class=\"radio\">\n                    <input name=\"salsa\" ngModel type=\"radio\" required value=\"verde\" [checked]='true'\n                      (click)=\"setSalsa('Verde Salsa')\" />\n                    Verde Salsa\n                  </label>\n                </div>\n              </div>\n            </div>\n            <hr>\n            <div class=\"form-group\">\n              <!-- Frequency Field -->\n              <label class=\"control-label col-sm-2\">Drink</label>\n              <div class=\"col-sm-10\">\n                <div class=\"radio\">\n                  <label class=\"radio\">\n                    <input (click)=\"addDrink(1)\" name=\"group3\" type=\"radio\" required value=\"drink\" />\n                    Yes +$1.25\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label class=\"radio\">\n                    <input (click)=\"addDrink(0)\" name=\"group3\" type=\"radio\" required value=\"noDrink\" />\n                    No\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <!-- Submit Button -->\n              <div class=\"col-sm-10 col-sm-offset-2\">\n                <button type=\"submit\" class=\"btn btn-primary btn-success\">Add to cart\n                  {{ this.foodTotal | currency }}</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Checkout button -->\n  <div class=\"div\">\n    <button [disabled]=\"!isValidCheckout\" id=\"checkout\" type=\"button\" (click)=\"onCheckout();\"\n      class=\"btn btn-success btn-primary\">\n      <h3>Checkout <div id=\"orderLength\" *ngIf=\"this.order.length!=0\">{{this.order.length}}</div>\n      </h3>\n    </button>\n  </div>\n  <!-- Checkout Receipt -->\n  <div id=\"receipt\" class=\"card mb-5\" style=\"width: 18rem; height: 18rem;\"\n    *ngIf=\"this.checkout === true && total != 0;\">\n    <div id=\"items\">\n      <div *ngFor=\"let x of order\">\n        <div>\n          {{ x.name }} <div id=\"money\">{{ x.price | currency }}</div><br>\n          <div id=\"foodContents\">\n            {{ x.meat }}<br>\n            {{ x.salsa }}<br>\n            <div *ngIf=\"x.drink === true\">Drink <div id=\"money\">+$1.25</div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div id=\"subtotal\">\n      Subtotal: <div id=\"money\">{{ total | currency }}</div> <br>\n      Tax (8.445%): <div id=\"money\">{{ total*0.08445 | currency }}</div> <br>\n      Total: <div id=\"money\">{{ total + total*0.08445 | currency }}</div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        this.food = {
            name: '',
            price: 0,
            meat: '',
            salsa: '',
            drink: false
        };
        this.order = [];
        this.total = 0;
        this.foodTotal = 0;
        this.checkout = false;
        this.isValidCheckout = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        // Resets the form on hide
        $('#myModal').on('hide.bs.modal', function () {
            $(this).find('form')[0].reset();
        });
    };
    MenuComponent.prototype.onReset = function () {
        this.food.price = 0;
        this.food.drink = false;
        this.food.name = '';
        this.food.price = 0;
        this.food.meat = '';
        this.food.salsa = '';
    };
    MenuComponent.prototype.setSalsa = function (value) {
        this.food.salsa = value;
    };
    MenuComponent.prototype.setMeat = function (value) {
        this.food.meat = value;
    };
    MenuComponent.prototype.onSubmit = function (value) {
        $('#myModal').modal('hide');
        this.order.push(Object.assign({}, this.food));
        this.total += this.foodTotal;
        this.isValidCheckout = true;
        this.onReset();
    };
    MenuComponent.prototype.addDrink = function (bool) {
        if (this.food.drink === true && bool == false) {
            this.food.drink = false;
            this.foodTotal -= 1.25;
        }
        if (this.food.drink === false && bool == true) {
            this.food.drink = true;
            this.foodTotal += 1.25;
        }
    };
    MenuComponent.prototype.onCheckout = function () {
        this.checkout = !this.checkout;
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n line-height: 75x;\r\n height: 75px;\r\n padding-top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiBsaW5lLWhlaWdodDogNzV4O1xyXG4gaGVpZ2h0OiA3NXB4O1xyXG4gcGFkZGluZy10b3A6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation bar -->\n<nav class=\"navbar navbar-light bg-light\">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand\" >Nicu's Taco Shack</a>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>404 Page Not Found</h3>\n<p>Sorry, there is nothing to see here...</p>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBUiX4GXSRjg-qBINCp9vg3C_Dadg5jMJ0",
        authDomain: "tacoapp-69830.firebaseapp.com",
        databaseURL: "https://tacoapp-69830.firebaseio.com",
        projectId: "tacoapp-69830",
        storageBucket: "tacoapp-69830.appspot.com",
        messagingSenderId: "939968913576"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\miken\OneDrive\Documents\GitHub\nicuTacoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map