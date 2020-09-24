(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\CHITE\Desktop\w9\src\main.ts */"zUnb");


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../note.service */ "a8fi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







const _c0 = function (a1, a2) { return { "main": true, "main--light": a1, "main--dark": a2 }; };
class ContentComponent {
    constructor(route, notes) {
        this.route = route;
        this.notes = notes;
        this.faLessThan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLessThan"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisH"];
        this.faImage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faImage"];
        this.faFont = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFont"];
        this.faReply = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faReply"];
    }
    writingNode(e, type) {
        const newData = Object.assign({}, this.userData);
        const target = e.target;
        if (type == 'title') {
            newData.title = target.value;
        }
        else if (type == 'content') {
            newData.content = target.value;
        }
        this.notes.editData(this.id, newData);
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.userData = this.notes.noteData[+params.get('id')];
            this.light = this.notes.light;
            this.id = +params.get('id');
        });
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 18, vars: 11, consts: [[3, "ngClass"], [1, "head"], [1, "head__box--8", "head__box--start"], ["routerLink", "/", 1, "head__icon", "head__icon--active"], [3, "icon"], [1, "head__box--4", "head__box--end"], [1, "head__icon"], [1, "content"], [1, "content__title", 3, "value", "keyup"], [1, "content__detail", 3, "keyup"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContentComponent_Template_input_keyup_15_listener($event) { return ctx.writingNode($event, "title"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContentComponent_Template_textarea_keyup_16_listener($event) { return ctx.writingNode($event, "content"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.light, !ctx.light));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLessThan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faReply);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFont);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEllipsisH);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 1rem;\n  box-sizing: border-box;\n}\n.main--dark[_ngcontent-%COMP%] {\n  background: #4a2e0d;\n}\n.main--light[_ngcontent-%COMP%] {\n  background: #D3964E;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  height: 3rem;\n}\n.head__icon[_ngcontent-%COMP%] {\n  border: 1.5px solid #fff;\n  color: #fff;\n  border-radius: 50%;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  width: 2.75rem;\n  height: 2.75rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.5rem;\n  font-size: 1.5rem;\n  outline: none;\n}\n.head__icon--active[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n.head__icon[_ngcontent-%COMP%]:not(.head__icon--active) {\n  opacity: 0.6;\n}\n.head__box--4[_ngcontent-%COMP%] {\n  width: 33.33%;\n}\n.head__box--8[_ngcontent-%COMP%] {\n  width: 66.66%;\n}\n.head__box--start[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.head__box--end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90vw;\n  margin: 3rem auto 0;\n}\n.content__title[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: #FFFDF0;\n  width: 100%;\n  font-size: 3rem;\n  margin: 0 auto;\n  padding: 1rem;\n  display: block;\n  box-sizing: border-box;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.content__detail[_ngcontent-%COMP%] {\n  border-top: 1px solid #d3964e80;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  display: block;\n  font-family: \"Marck Script\", cursive;\n  margin: 0 auto;\n  padding: 1rem;\n  min-height: calc(100vh - 150px);\n  width: 100%;\n  line-height: 50px;\n  font-size: 24px;\n  background-image: -webkit-linear-gradient(top, #fffcef, #fffcef 49px, #d3964e80 0);\n  background-size: 100% 50px;\n  outline: none;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFMRjtBQU1FO0VBQ0UsbUJBQUE7QUFKSjtBQU1FO0VBQ0UsbUJBQUE7QUFKSjtBQVFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFMRjtBQU1FO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBSko7QUFLSTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQUhOO0FBS0k7RUFDRSxZQUFBO0FBSE47QUFRRTtFQUNFLGFBQUE7QUFMSjtBQU9FO0VBQ0UsYUFBQTtBQUxKO0FBT0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBU0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQU5GO0FBUUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFOSjtBQVVBO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrRkFBQTtFQU1BLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWkYiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcGMtd2lkdGgoKXtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgJi0tZGFya3tcclxuICAgIGJhY2tncm91bmQ6ICM0YTJlMGQ7XHJcbiAgfVxyXG4gICYtLWxpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogI0QzOTY0RTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogM3JlbTtcclxuICAmX19pY29uIHtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyLjc1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjc1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJi0tYWN0aXZlOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcclxuICAgIH1cclxuICAgICY6bm90KC5oZWFkX19pY29uLS1hY3RpdmUpIHtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uaGVhZF9fYm94IHtcclxuICAmLS00IHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgfVxyXG4gICYtLTgge1xyXG4gICAgd2lkdGg6IDY2LjY2JTtcclxuICB9XHJcbiAgJi0tc3RhcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICYtLWVuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIG1hcmdpbjogM3JlbSBhdXRvIDA7XHJcbiAgXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZERjA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50X19kZXRhaWwge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDM5NjRlODA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogXCJNYXJjayBTY3JpcHRcIiwgY3Vyc2l2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG9wLFxyXG4gICAgI2ZmZmNlZixcclxuICAgICNmZmZjZWYgNDlweCxcclxuICAgICNkMzk2NGU4MCAwXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "B9wt":
/*!****************************************************!*\
  !*** ./src/app/route-page/route-page.component.ts ***!
  \****************************************************/
/*! exports provided: RoutePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePageComponent", function() { return RoutePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RoutePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoutePageComponent.ɵfac = function RoutePageComponent_Factory(t) { return new (t || RoutePageComponent)(); };
RoutePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoutePageComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function RoutePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlLXBhZ2Uvcm91dGUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './route-page.component.html',
                styleUrls: ['./route-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RdB8":
/*!**************************************************!*\
  !*** ./src/app/note-item/note-item.component.ts ***!
  \**************************************************/
/*! exports provided: NoteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteItemComponent", function() { return NoteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class NoteItemComponent {
    constructor() {
        this.handleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.borderStar = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStar"];
    }
    clickStar(e, id) {
        e.stopPropagation();
        this.handleClick.emit({ event: e, id: id });
    }
    ngOnInit() {
    }
}
NoteItemComponent.ɵfac = function NoteItemComponent_Factory(t) { return new (t || NoteItemComponent)(); };
NoteItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteItemComponent, selectors: [["app-note-item"]], inputs: { data: "data", id: "id" }, outputs: { handleClick: "handleClick" }, decls: 10, vars: 2, consts: [[1, "note"], [1, "note__content"], [1, "note__title"], [1, "note__decoration"], [1, "note__sign", 3, "click"], [3, "icon"]], template: function NoteItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteItemComponent_Template_span_click_8_listener($event) { return ctx.clickStar($event, ctx.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.data.star ? ctx.faStar : ctx.borderStar);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".note[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n.note__content[_ngcontent-%COMP%] {\n  height: 90%;\n  overflow: hidden;\n  color: #963030;\n}\n.note__sign[_ngcontent-%COMP%] {\n  height: 10%;\n}\n.note__title[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 8rem;\n  height: 2rem;\n}\n@media screen and (min-width: 576px) {\n  .note__title[_ngcontent-%COMP%] {\n    width: 20rem;\n  }\n}\n.note__decoration[_ngcontent-%COMP%] {\n  margin: 5vmin 0;\n}\n@media screen and (min-width: 576px) {\n  .note__decoration[_ngcontent-%COMP%] {\n    margin: 3rem 0;\n  }\n}\n.note__sign[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 1.25rem;\n  color: #ffb100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1pdGVtL25vdGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFKRjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhKO0FBS0U7RUFDRSxXQUFBO0FBSEo7QUFLRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7QUFwQkU7RUFrQkE7SUFPSSxZQUFBO0VBREo7QUFDRjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBNUJFO0VBNEJBO0lBR0ksY0FBQTtFQUNKO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbm90ZS1pdGVtL25vdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBwYy13aWR0aCgpIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi5ub3RlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAmX19jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNvbG9yOiAjOTYzMDMwO1xyXG4gIH1cclxuICAmX19zaWduIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gIH1cclxuICAmX190aXRsZSB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBAaW5jbHVkZSBwYy13aWR0aCgpIHtcclxuICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19kZWNvcmF0aW9uIHtcclxuICAgIG1hcmdpbjogNXZtaW4gMDtcclxuICAgIEBpbmNsdWRlIHBjLXdpZHRoKCkge1xyXG4gICAgICBtYXJnaW46IDNyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fc2lnbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGNvbG9yOiAjZmZiMTAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-item',
                templateUrl: './note-item.component.html',
                styleUrls: ['./note-item.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note.service */ "a8fi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "oDk3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _note_item_note_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note-item/note-item.component */ "RdB8");









function AppComponent_li_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faBookmark);
} }
const _c0 = function (a1) { return { note__item: true, "note__item--clicked": a1 }; };
function AppComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clickNote(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_li_8_span_1_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-note-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("handleClick", function AppComponent_li_8_Template_app_note_item_handleClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickStar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r2 == ctx_r0.chosen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 == ctx_r0.chosen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.noteData[i_r2])("id", i_r2);
} }
const _c1 = function (a1, a2) { return { main: true, "main--light": a1, "main--dark": a2 }; };
class AppComponent {
    constructor(router, notes) {
        this.router = router;
        this.notes = notes;
        this.faBookmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBookmark"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.chosen = -1;
        this.filter = false;
    }
    filterStar() {
        this.filter = !this.filter;
        if (this.filter) {
            this.noteData = this.noteData.filter(val => val.star);
        }
        else {
            this.noteData = this.notes.noteData;
        }
    }
    deleteNote() {
        if (~this.chosen) {
            this.notes.remove(this.chosen);
            this.chosen = -1;
        }
    }
    toggleBg() {
        this.notes.turnLight();
    }
    clickStar(data) {
        data.event.stopPropagation();
        this.notes.noteData[data.id].star = !this.notes.noteData[data.id].star;
    }
    clickNote(index) {
        if (this.chosen == index) {
            this.router.navigate(['note/' + index]);
        }
        else {
            this.chosen = index;
        }
    }
    addNote() {
        this.notes.addNote();
    }
    ngOnInit() {
        this.noteData = this.notes.noteData;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 7, consts: [[3, "ngClass"], [3, "light", "setLight", "setTrash", "setFilter"], [1, "note"], [1, "note__item", "note__add", 3, "click"], [1, "text-center"], [3, "icon"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["class", "note__mark", 4, "ngIf"], [3, "data", "id", "handleClick"], [1, "note__mark"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-top-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setLight", function AppComponent_Template_app_top_bar_setLight_1_listener() { return ctx.toggleBg(); })("setTrash", function AppComponent_Template_app_top_bar_setTrash_1_listener() { return ctx.deleteNote(); })("setFilter", function AppComponent_Template_app_top_bar_setFilter_1_listener() { return ctx.filterStar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_3_listener() { return ctx.addNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u65B0\u589E\u7B46\u8A18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_li_8_Template, 3, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, ctx.notes.light, !ctx.notes.light));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("light", ctx.notes.light);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.noteData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__["TopBarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _note_item_note_item_component__WEBPACK_IMPORTED_MODULE_7__["NoteItemComponent"]], styles: [".text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 1rem;\n  box-sizing: border-box;\n}\n\n.main--dark[_ngcontent-%COMP%] {\n  background: #4a2e0d;\n}\n\n.main--light[_ngcontent-%COMP%] {\n  background: #D3964E;\n}\n\n.note[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n  padding: 0;\n}\n\n.note__item[_ngcontent-%COMP%] {\n  flex: 0 1 90%;\n  min-width: 90%;\n  height: 60vmin;\n  background: #FFFCEF;\n  border: 2px solid #FFFCEF;\n  border-radius: 15px;\n  box-sizing: border-box;\n  margin: 1rem;\n  position: relative;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 576px) {\n  .note__item[_ngcontent-%COMP%] {\n    flex-basis: 45%;\n    min-width: 45%;\n    height: 45vmin;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .note__item[_ngcontent-%COMP%] {\n    flex-basis: 30%;\n    min-width: 30%;\n  }\n}\n\n.note__item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n\n.note__item--clicked[_ngcontent-%COMP%] {\n  border: 1px solid #963030;\n}\n\n.note__add[_ngcontent-%COMP%] {\n  background: #E9C99F;\n  color: #963030;\n  border: 2px dashed #FFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  box-sizing: border-box;\n}\n\n.note__add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n\n.note__clicked[_ngcontent-%COMP%] {\n  border: 1.5px solid #963030;\n}\n\n.note__mark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.5rem;\n  right: 0.5rem;\n  font-size: 2.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0Usa0JBQUE7QUFaRjs7QUFlQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWkY7O0FBYUU7RUFDRSxtQkFBQTtBQVhKOztBQWFFO0VBQ0UsbUJBQUE7QUFYSjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBWkY7O0FBYUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWEo7O0FBaENFO0VBaUNBO0lBWUksZUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBVEo7QUFDRjs7QUFsQ0U7RUE0QkE7SUFpQkksZUFBQTtJQUNBLGNBQUE7RUFQSjtBQUNGOztBQVFJO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FBTk47O0FBUUk7RUFDRSx5QkFBQTtBQU5OOztBQVNFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFQSjs7QUFRSTtFQUNFLGdCQUFBO0FBTk47O0FBU0U7RUFDRSwyQkFBQTtBQVBKOztBQVNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtaXhpbiBwYy13aWR0aCgpe1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGctd2lkdGgoKXtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAmLS1kYXJre1xyXG4gICAgYmFja2dyb3VuZDogIzRhMmUwZDtcclxuICB9XHJcbiAgJi0tbGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDM5NjRFO1xyXG4gIH1cclxufVxyXG5cclxuLm5vdGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICAmX19pdGVte1xyXG4gICAgZmxleDogMCAxIDkwJTtcclxuICAgIG1pbi13aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA2MHZtaW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGQ0VGO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkNFRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIEBpbmNsdWRlIHBjLXdpZHRoKCl7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgbWluLXdpZHRoOiA0NSU7XHJcbiAgICAgIGhlaWdodDogNDV2bWluO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbGctd2lkdGgoKXtcclxuICAgICAgZmxleC1iYXNpczogMzAlO1xyXG4gICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIH1cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKC44KTtcclxuICAgIH1cclxuICAgICYtLWNsaWNrZWR7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NjMwMzA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2FkZHtcclxuICAgIGJhY2tncm91bmQ6ICNFOUM5OUY7XHJcbiAgICBjb2xvcjogIzk2MzAzMDtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjRkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHB7XHJcbiAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fY2xpY2tlZHtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgIzk2MzAzMDtcclxuICB9XHJcbiAgJl9fbWFya3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLS41cmVtO1xyXG4gICAgcmlnaHQ6IC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "oDk3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _note_item_note_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note-item/note-item.component */ "RdB8");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _route_page_route_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-page/route-page.component */ "B9wt");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_route_page_route_page_component__WEBPACK_IMPORTED_MODULE_8__["RoutePageComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            // 新增一個路由
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
                { path: 'note/:id', component: _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"] }
            ]),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopBarComponent"],
        _note_item_note_item_component__WEBPACK_IMPORTED_MODULE_6__["NoteItemComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
        _route_page_route_page_component__WEBPACK_IMPORTED_MODULE_8__["RoutePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopBarComponent"],
                    _note_item_note_item_component__WEBPACK_IMPORTED_MODULE_6__["NoteItemComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                    _route_page_route_page_component__WEBPACK_IMPORTED_MODULE_8__["RoutePageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    // 新增一個路由
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
                        { path: 'note/:id', component: _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"] }
                    ]),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_route_page_route_page_component__WEBPACK_IMPORTED_MODULE_8__["RoutePageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a8fi":
/*!*********************************!*\
  !*** ./src/app/note.service.ts ***!
  \*********************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NoteService {
    constructor() {
        this.light = false;
        this.noteData = [
            { title: '0102-UIUX講義', content: 'AVSWDSASA', star: true },
            { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
            { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
            { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
            { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
            { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
        ];
    }
    turnLight() {
        this.light = !this.light;
    }
    addNote() {
        this.noteData.push({
            title: '請輸入筆記名稱',
            content: '',
            star: false,
        });
    }
    remove(index) {
        this.noteData.splice(index, 1);
    }
    handleStar(index) {
        this.noteData[index].star = !this.noteData[index].star;
    }
    editData(index, data) {
        this.noteData[index] = data;
    }
}
NoteService.ɵfac = function NoteService_Factory(t) { return new (t || NoteService)(); };
NoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoteService, factory: NoteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oDk3":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class TopBarComponent {
    constructor() {
        this.setLight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setTrash = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faMoon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMoon"];
        this.faSun = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSun"];
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.faShareAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShareAlt"];
    }
    ngOnInit() { }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], inputs: { light: "light" }, outputs: { setLight: "setLight", setTrash: "setTrash", setFilter: "setFilter" }, decls: 11, vars: 4, consts: [[1, "head"], [1, "head__box--8", "head__box--start"], [1, "head__icon", 3, "click"], [3, "icon"], [1, "head__box--4", "head__box--end"], [1, "head__icon", "disabled"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_span_click_2_listener() { return ctx.setLight.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_span_click_5_listener() { return ctx.setFilter.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_span_click_9_listener() { return ctx.setTrash.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.light ? ctx.faSun : ctx.faMoon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShareAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTrash);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".head[_ngcontent-%COMP%] {\n  display: flex;\n  height: 3rem;\n}\n.head__icon[_ngcontent-%COMP%] {\n  border: 1.5px solid #FFF;\n  color: #FFF;\n  border-radius: 50%;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  width: 2.75rem;\n  height: 2.75rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.5rem;\n  font-size: 1.5rem;\n}\n.head__icon[_ngcontent-%COMP%]:not(.disabled):hover {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n.head[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.head__box--4[_ngcontent-%COMP%] {\n  width: 33.33%;\n}\n.head__box--8[_ngcontent-%COMP%] {\n  width: 66.66%;\n}\n.head__box--start[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.head__box--end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFESjtBQUVJO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FBQ1o7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUlJO0VBQ0ksYUFBQTtBQURSO0FBR0k7RUFDSSxhQUFBO0FBRFI7QUFHSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgICZfX2ljb257XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjRkZGO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHdpZHRoOiAyLjc1cmVtO1xyXG4gICAgICAgIGhlaWdodDogMi43NXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCAuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAmOm5vdCguZGlzYWJsZWQpOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpc2FibGVke1xyXG4gICAgICAgIG9wYWNpdHk6IC42O1xyXG4gICAgfVxyXG59XHJcbi5oZWFkX19ib3h7XHJcbiAgICAmLS00e1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICB9XHJcbiAgICAmLS04e1xyXG4gICAgICAgIHdpZHRoOiA2Ni42NiU7XHJcbiAgICB9XHJcbiAgICAmLS1zdGFydHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJi0tZW5ke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-bar',
                templateUrl: './top-bar.component.html',
                styleUrls: ['./top-bar.component.scss'],
            }]
    }], function () { return []; }, { light: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setLight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setTrash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map