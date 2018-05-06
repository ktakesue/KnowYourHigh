webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");

var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
        this.data = {};
    }
    APIService.prototype.getbyCat = function (something) {
        return this.http.get("https://kushy.net/api/v3/" + something);
    };
    APIService.prototype.filterSearch = function (something, something2) {
        return this.http.get("https://kushy.net/api/v3/" + something + "/?filters[name][contains]=" + something2);
    };
    return APIService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz_quiz_component__ = __webpack_require__("./src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info_component__ = __webpack_require__("./src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_default_component__ = __webpack_require__("./src/app/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_questions_questions_component__ = __webpack_require__("./src/app/quiz/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quiz_result_result_component__ = __webpack_require__("./src/app/quiz/result/result.component.ts");






var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_3__default_default_component__["a" /* DefaultComponent */],
        pathMatch: "full"
    },
    {
        path: "quiz/question/:questionId",
        component: __WEBPACK_IMPORTED_MODULE_4__quiz_questions_questions_component__["a" /* QuestionsComponent */]
    },
    {
        path: "quiz/question",
        redirectTo: "quiz/question/1"
    },
    {
        path: "quiz/result",
        component: __WEBPACK_IMPORTED_MODULE_5__quiz_result_result_component__["a" /* ResultComponent */]
    },
    {
        path: "quiz",
        component: __WEBPACK_IMPORTED_MODULE_1__quiz_quiz_component__["a" /* QuizComponent */]
    },
    {
        path: "gallery",
        component: __WEBPACK_IMPORTED_MODULE_0__gallery_gallery_component__["a" /* GalleryComponent */]
    },
    {
        path: "info",
        component: __WEBPACK_IMPORTED_MODULE_2__info_info_component__["a" /* InfoComponent */]
    },
    {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_3__default_default_component__["a" /* DefaultComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* unused harmony export View_AppComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_toolbar_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_0__app_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 20, "mat-toolbar", [["class", "mat-toolbar"], ["id", "toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_toolbar_typings_index_ngfactory__["b" /* View_MatToolbar_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_toolbar_typings_index_ngfactory__["a" /* RenderType_MatToolbar */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 4243456, null, 1, __WEBPACK_IMPORTED_MODULE_3__angular_material_toolbar__["a" /* MatToolbar */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["DOCUMENT"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, 0, 7, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 4, "a", [["routerLink", ""], ["style", " text-decoration:none"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_router__["l" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 0, "img", [["alt", "logo"], ["id", "logo"], ["src", "./assets/logo.jpg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, 0, 0, "span", [["class", "fill-space-toolbar"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, 0, 4, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Know Your High"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](23, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](24, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_router__["n" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var currVal_4 = ""; _ck(_v, 8, 0, currVal_4); _ck(_v, 24, 0); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2)._toolbarRows.length; var currVal_1 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2)._toolbarRows.length; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).target; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).href; _ck(_v, 7, 0, currVal_2, currVal_3); }); }
function View_AppComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "kt-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], [], null, null)], null, null); }
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("kt-root", __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:400,700\");\nimg[_ngcontent-%COMP%] {\n  padding-top: 8px; }\nh1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: \"Poppins\", sans-serif; }\n#toolbar[_ngcontent-%COMP%] {\n  background-color: #212121; }"];



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KNOW YOUR HIGH';
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_default_component_ngfactory__ = __webpack_require__("./src/app/default/default.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_questions_questions_component_ngfactory__ = __webpack_require__("./src/app/quiz/questions/questions.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quiz_result_result_component_ngfactory__ = __webpack_require__("./src/app/quiz/result/result.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quiz_quiz_component_ngfactory__ = __webpack_require__("./src/app/quiz/quiz.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component_ngfactory__ = __webpack_require__("./src/app/gallery/gallery.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_info_component_ngfactory__ = __webpack_require__("./src/app/info/info.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_material_tooltip_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component_ngfactory__ = __webpack_require__("./src/app/app.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__ = __webpack_require__("./node_modules/@angular/animations/esm5/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__ = __webpack_require__("./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_embed_video_src_embed_video_service__ = __webpack_require__("./node_modules/ngx-embed-video/src/embed-video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__quiz_quiz_service__ = __webpack_require__("./src/app/quiz/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__quiz_answers_service__ = __webpack_require__("./src/app/quiz/answers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__default_default_component__ = __webpack_require__("./src/app/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__quiz_questions_questions_component__ = __webpack_require__("./src/app/quiz/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__quiz_result_result_component__ = __webpack_require__("./src/app/quiz/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__quiz_quiz_component__ = __webpack_require__("./src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__info_info_component__ = __webpack_require__("./src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_cdk_accordion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ngx_embed_video_index__ = __webpack_require__("./node_modules/ngx-embed-video/index.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_3__default_default_component_ngfactory__["a" /* DefaultComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_4__quiz_questions_questions_component_ngfactory__["a" /* QuestionsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__quiz_result_result_component_ngfactory__["a" /* ResultComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__quiz_quiz_component_ngfactory__["a" /* QuizComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component_ngfactory__["a" /* GalleryComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_8__info_info_component_ngfactory__["a" /* InfoComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_material_tooltip_typings_index_ngfactory__["a" /* TooltipComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_10__app_component_ngfactory__["a" /* AppComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵq"], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_11__angular_common__["NgLocalization"], __WEBPACK_IMPORTED_MODULE_11__angular_common__["NgLocaleLocalization"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_11__angular_common__["ɵa"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵi"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵn"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵo"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵe"], [__WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Sanitizer"], null, [__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DomSanitizer"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["HAMMER_GESTURE_CONFIG"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["HammerGestureConfig"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵDomEventsPlugin"](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵKeyEventsPlugin"](p1_0), new __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵHammerGesturesPlugin"](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["HAMMER_GESTURE_CONFIG"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["EventManager"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["EventManager"], [__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["EVENT_MANAGER_PLUGINS"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵDomSharedStylesHost"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵDomSharedStylesHost"], [__WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵDomRendererFactory2"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵDomRendererFactory2"], [__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["EventManager"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵDomSharedStylesHost"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["d" /* ɵc */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["e" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["f" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵDomRendererFactory2"], __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵSharedStylesHost"], null, [__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵDomSharedStylesHost"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["Meta"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["Meta"], [__WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["Title"], [__WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["i" /* ɵi */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["i" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_16__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["w" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__angular_router__["d" /* NoPreloading */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["d" /* NoPreloading */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_16__angular_router__["f" /* PreloadingStrategy */], null, [__WEBPACK_IMPORTED_MODULE_16__angular_router__["d" /* NoPreloading */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_16__angular_router__["o" /* RouterPreloader */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["o" /* RouterPreloader */], [__WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_16__angular_router__["f" /* PreloadingStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__angular_router__["e" /* PreloadAllModules */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["e" /* PreloadAllModules */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_16__angular_router__["h" /* ROUTER_INITIALIZER */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["z" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_16__angular_router__["x" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_16__angular_router__["h" /* ROUTER_INITIALIZER */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__angular_animations__["b" /* AnimationBuilder */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["b" /* ɵBrowserAnimationBuilder */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["j" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["j" /* InteractivityChecker */], [__WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["i" /* FocusTrapFactory */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["i" /* FocusTrapFactory */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["j" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](136192, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["e" /* AriaDescriber */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["c" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["e" /* AriaDescriber */]], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["m" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["l" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["m" /* LiveAnnouncer */]], [2, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["k" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["f" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["h" /* FocusMonitor */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_bidi__["b" /* DIR_DOCUMENT */], null, [__WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_bidi__["c" /* Directionality */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_bidi__["c" /* Directionality */], [[2, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_bidi__["b" /* DIR_DOCUMENT */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["c" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["c" /* ScrollDispatcher */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["f" /* ViewportRuler */]], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["i" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["i" /* ScrollStrategyOptions */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["c" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["e" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["k" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["e" /* OverlayContainer */]], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["h" /* OverlayPositionBuilder */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["h" /* OverlayPositionBuilder */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["f" /* OverlayKeyboardDispatcher */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["n" /* ɵf */], [[3, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["f" /* OverlayKeyboardDispatcher */]], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["c" /* Overlay */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["c" /* Overlay */], [__WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["i" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["e" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["h" /* OverlayPositionBuilder */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["f" /* OverlayKeyboardDispatcher */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["l" /* ɵc */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["m" /* ɵd */], [__WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_23__angular_material_menu__["b" /* MAT_MENU_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_23__angular_material_menu__["d" /* ɵc20 */], [__WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_collections__["d" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_25__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_25__angular_cdk_layout__["d" /* MediaMatcher */], [__WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_25__angular_cdk_layout__["a" /* BreakpointObserver */], __WEBPACK_IMPORTED_MODULE_25__angular_cdk_layout__["a" /* BreakpointObserver */], [__WEBPACK_IMPORTED_MODULE_25__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_26__angular_material_tooltip__["b" /* MAT_TOOLTIP_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_26__angular_material_tooltip__["c" /* MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_27__angular_material_select__["a" /* MAT_SELECT_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_27__angular_material_select__["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["b" /* ErrorStateMatcher */], __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["b" /* ErrorStateMatcher */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["k" /* ɵe */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["k" /* ɵe */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["i" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_29__angular_common_http__["k" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["g" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["g" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_29__angular_common_http__["i" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_29__angular_common_http__["g" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["f" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["j" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_29__angular_common_http__["b" /* HttpBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_29__angular_common_http__["f" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_30__angular_material_icon__["c" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_30__angular_material_icon__["a" /* ICON_REGISTRY_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_30__angular_material_icon__["c" /* MatIconRegistry */]], [2, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["c" /* HttpClient */]], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DomSanitizer"], [2, __WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_31__angular_http__["BrowserXhr"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["BrowserXhr"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_31__angular_http__["ResponseOptions"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["BaseResponseOptions"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_31__angular_http__["XSRFStrategy"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["ɵa"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_31__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["XHRBackend"], [__WEBPACK_IMPORTED_MODULE_31__angular_http__["BrowserXhr"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["ResponseOptions"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["XSRFStrategy"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_31__angular_http__["RequestOptions"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["BaseRequestOptions"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_31__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["ɵb"], [__WEBPACK_IMPORTED_MODULE_31__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["RequestOptions"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["n" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["l" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["o" /* ɵi */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["o" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_29__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["m" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_29__angular_common_http__["o" /* ɵi */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_32_ngx_embed_video_src_embed_video_service__["a" /* EmbedVideoService */], __WEBPACK_IMPORTED_MODULE_32_ngx_embed_video_src_embed_video_service__["a" /* EmbedVideoService */], [__WEBPACK_IMPORTED_MODULE_31__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DomSanitizer"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_33__quiz_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_33__quiz_quiz_service__["a" /* QuizService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_34__quiz_answers_service__["a" /* AnswersService */], __WEBPACK_IMPORTED_MODULE_34__quiz_answers_service__["a" /* AnswersService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_35__api_service__["a" /* APIService */], __WEBPACK_IMPORTED_MODULE_35__api_service__["a" /* APIService */], [__WEBPACK_IMPORTED_MODULE_29__angular_common_http__["c" /* HttpClient */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵa"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"], function () { return [__WEBPACK_IMPORTED_MODULE_16__angular_router__["s" /* ɵb */]()]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_router__["x" /* ɵg */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["x" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"], function (p0_0, p1_0) { return [__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["ɵh"](p0_0), __WEBPACK_IMPORTED_MODULE_16__angular_router__["y" /* ɵh */](p1_0)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"]], __WEBPACK_IMPORTED_MODULE_16__angular_router__["x" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵConsole"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["BrowserModule"], [[3, __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["BrowserModule"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["h" /* ɵba */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["h" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["g" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__angular_router__["r" /* ɵa */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["u" /* ɵd */], [[3, __WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_router__["q" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["c" /* DefaultUrlSerializer */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* ChildrenOutletContexts */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_16__angular_router__["g" /* ROUTER_CONFIGURATION */], {}, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_11__angular_common__["LocationStrategy"], __WEBPACK_IMPORTED_MODULE_16__angular_router__["t" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_11__angular_common__["PlatformLocation"], [2, __WEBPACK_IMPORTED_MODULE_11__angular_common__["APP_BASE_HREF"]], __WEBPACK_IMPORTED_MODULE_16__angular_router__["g" /* ROUTER_CONFIGURATION */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_11__angular_common__["Location"], [__WEBPACK_IMPORTED_MODULE_11__angular_common__["LocationStrategy"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoader"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoaderConfig"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__angular_router__["i" /* ROUTES */], function () { return [[{ path: "", component: __WEBPACK_IMPORTED_MODULE_36__default_default_component__["a" /* DefaultComponent */], pathMatch: "full" }, { path: "quiz/question/:questionId", component: __WEBPACK_IMPORTED_MODULE_37__quiz_questions_questions_component__["a" /* QuestionsComponent */] }, { path: "quiz/question", redirectTo: "quiz/question/1" }, { path: "quiz/result", component: __WEBPACK_IMPORTED_MODULE_38__quiz_result_result_component__["a" /* ResultComponent */] }, { path: "quiz", component: __WEBPACK_IMPORTED_MODULE_39__quiz_quiz_component__["a" /* QuizComponent */] }, { path: "gallery", component: __WEBPACK_IMPORTED_MODULE_40__gallery_gallery_component__["a" /* GalleryComponent */] }, { path: "info", component: __WEBPACK_IMPORTED_MODULE_41__info_info_component__["a" /* InfoComponent */] }, { path: "**", component: __WEBPACK_IMPORTED_MODULE_36__default_default_component__["a" /* DefaultComponent */] }]]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["v" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_16__angular_router__["q" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_11__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_16__angular_router__["i" /* ROUTES */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["g" /* ROUTER_CONFIGURATION */], [2, __WEBPACK_IMPORTED_MODULE_16__angular_router__["p" /* UrlHandlingStrategy */]], [2, __WEBPACK_IMPORTED_MODULE_16__angular_router__["j" /* RouteReuseStrategy */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_router__["m" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["m" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_16__angular_router__["r" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_42__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_42__app_routing_module__["a" /* AppRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["b" /* PlatformModule */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["b" /* PlatformModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["a" /* A11yModule */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["a" /* A11yModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_bidi__["a" /* BidiModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["c" /* MATERIAL_SANITY_CHECKS */], true, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["j" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["j" /* MatCommonModule */], [[2, __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["c" /* MATERIAL_SANITY_CHECKS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["u" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["u" /* MatRippleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_43__angular_cdk_portal__["d" /* PortalModule */], __WEBPACK_IMPORTED_MODULE_43__angular_cdk_portal__["d" /* PortalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["b" /* ScrollDispatchModule */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_scrolling__["b" /* ScrollDispatchModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["g" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_overlay__["g" /* OverlayModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23__angular_material_menu__["c" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_23__angular_material_menu__["c" /* MatMenuModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_44__angular_material_card__["f" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_44__angular_material_card__["f" /* MatCardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_45__angular_material_radio__["c" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_45__angular_material_radio__["c" /* MatRadioModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_46__angular_material_button__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_46__angular_material_button__["c" /* MatButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_47__angular_material_divider__["b" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_47__angular_material_divider__["b" /* MatDividerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_25__angular_cdk_layout__["c" /* LayoutModule */], __WEBPACK_IMPORTED_MODULE_25__angular_cdk_layout__["c" /* LayoutModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_26__angular_material_tooltip__["d" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_26__angular_material_tooltip__["d" /* MatTooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["l" /* MatLineModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["l" /* MatLineModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["s" /* MatPseudoCheckboxModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["s" /* MatPseudoCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_48__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_48__angular_material_list__["a" /* MatListModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["q" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_core__["q" /* MatOptionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_49__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_49__angular_material_form_field__["c" /* MatFormFieldModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_27__angular_material_select__["d" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_27__angular_material_select__["d" /* MatSelectModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_50__angular_cdk_accordion__["c" /* CdkAccordionModule */], __WEBPACK_IMPORTED_MODULE_50__angular_cdk_accordion__["c" /* CdkAccordionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_51__angular_material_expansion__["b" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_51__angular_material_expansion__["b" /* MatExpansionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_52__angular_material_toolbar__["b" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_52__angular_material_toolbar__["b" /* MatToolbarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_30__angular_material_icon__["b" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_30__angular_material_icon__["b" /* MatIconModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_31__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_31__angular_http__["HttpModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_53__angular_material_input__["a" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_53__angular_material_input__["a" /* MatInputModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_54_ngx_embed_video_index__["a" /* EmbedVideo */], __WEBPACK_IMPORTED_MODULE_54_ngx_embed_video_index__["a" /* EmbedVideo */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_23__angular_material_menu__["a" /* MAT_MENU_DEFAULT_OPTIONS */], { overlapTrigger: true, xPosition: "after", yPosition: "below" }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_26__angular_material_tooltip__["a" /* MAT_TOOLTIP_DEFAULT_OPTIONS */], { showDelay: 0, hideDelay: 0, touchendHideDelay: 1500 }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["l" /* ɵf */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["m" /* ɵg */], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/default/default.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DefaultComponent */
/* unused harmony export View_DefaultComponent_0 */
/* unused harmony export View_DefaultComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/default/default.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/expansion/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_divider_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/divider/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__default_component__ = __webpack_require__("./src/app/default/default.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_DefaultComponent = [__WEBPACK_IMPORTED_MODULE_0__default_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_DefaultComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_DefaultComponent, data: {} });

function View_DefaultComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 98, "html", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 95, "body", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 4, "div", [["class", "title"], ["style", "text-align:center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](8, null, ["\n      Welcome to the ", " App!\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 86, "div", [["id", "wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 4, "div", [["class", "holder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Here are some links to help you start: "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 77, "div", [["id", "list"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 74, "mat-accordion", [["class", "mat-accordion"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["a" /* MatAccordion */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 16777216, null, null, 20, "mat-expansion-panel", [["class", "header mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "mat-expansion-panel-spacing", null]], null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 1753088, null, 1, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["c" /* MatExpansionPanel */], [[2, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["a" /* MatAccordion */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { _lazyContent: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, 0, 12, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["d" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["c" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](30, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](31, { value: 0, params: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](33, 0, null, 0, 6, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](34, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["e" /* MatExpansionPanelTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, null, 2, "a", [["class", "header-text"], ["routerLink", "/quiz"], ["style", " text-decoration:none"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](37, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_router__["l" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Are You High?"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](42, 0, null, 1, 1, "p", [["color", "accent"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Are you sure? Take the quiz"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](46, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-inset", null]], null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_divider_typings_index_ngfactory__["b" /* View_MatDivider_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_divider_typings_index_ngfactory__["a" /* RenderType_MatDivider */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](47, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__["a" /* MatDivider */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](49, 16777216, null, null, 20, "mat-expansion-panel", [["class", "header mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "mat-expansion-panel-spacing", null]], null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](50, 1753088, null, 1, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["c" /* MatExpansionPanel */], [[2, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["a" /* MatAccordion */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { _lazyContent: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](53, 0, null, 0, 12, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54)._keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](54, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["d" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["c" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](55, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](56, { value: 0, params: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](58, 0, null, 0, 6, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](59, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["e" /* MatExpansionPanelTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](61, 0, null, null, 2, "a", [["class", "header-text"], ["routerLink", "/gallery"], ["style", " text-decoration:none"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 62).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](62, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_router__["l" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["You Know You're High"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](67, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["WHOAA PICTURES"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](71, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-inset", null]], null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_divider_typings_index_ngfactory__["b" /* View_MatDivider_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_divider_typings_index_ngfactory__["a" /* RenderType_MatDivider */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](72, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__["a" /* MatDivider */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](74, 16777216, null, null, 20, "mat-expansion-panel", [["class", "header mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "mat-expansion-panel-spacing", null]], null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](75, 1753088, null, 1, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["c" /* MatExpansionPanel */], [[2, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["a" /* MatAccordion */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { _lazyContent: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](78, 0, null, 0, 12, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79)._keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](79, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["d" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["c" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](80, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](81, { value: 0, params: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](83, 0, null, 0, 6, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](84, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["e" /* MatExpansionPanelTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](86, 0, null, null, 2, "a", [["class", "header-text"], ["routerLink", "/info"], ["style", " text-decoration:none"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 87).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](87, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_router__["l" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Know Your High"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](92, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Get to know your friendly plants"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"]))], function (_ck, _v) { var currVal_12 = "/quiz"; _ck(_v, 37, 0, currVal_12); var currVal_27 = "/gallery"; _ck(_v, 62, 0, currVal_27); var currVal_42 = "/info"; _ck(_v, 87, 0, currVal_42); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 8, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).expanded; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._hasSpacing(); _ck(_v, 24, 0, currVal_1, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).panel._headerId; var currVal_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).panel.disabled ? (0 - 1) : 0); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._getPanelId(); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._isExpanded(); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).panel.disabled; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._isExpanded(); var currVal_9 = _ck(_v, 31, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._getExpandedState(), _ck(_v, 30, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).collapsedHeight, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).expandedHeight)); _ck(_v, 28, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).target; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).href; _ck(_v, 36, 0, currVal_10, currVal_11); var currVal_13 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).vertical ? "vertical" : "horizontal"); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).vertical; var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).inset; _ck(_v, 46, 0, currVal_13, currVal_14, currVal_15); var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 50).expanded; var currVal_17 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 50)._hasSpacing(); _ck(_v, 49, 0, currVal_16, currVal_17); var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54).panel._headerId; var currVal_19 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54).panel.disabled ? (0 - 1) : 0); var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54)._getPanelId(); var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54)._isExpanded(); var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54).panel.disabled; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54)._isExpanded(); var currVal_24 = _ck(_v, 56, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54)._getExpandedState(), _ck(_v, 55, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54).collapsedHeight, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54).expandedHeight)); _ck(_v, 53, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 62).target; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 62).href; _ck(_v, 61, 0, currVal_25, currVal_26); var currVal_28 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 72).vertical ? "vertical" : "horizontal"); var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 72).vertical; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 72).inset; _ck(_v, 71, 0, currVal_28, currVal_29, currVal_30); var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 75).expanded; var currVal_32 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 75)._hasSpacing(); _ck(_v, 74, 0, currVal_31, currVal_32); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).panel._headerId; var currVal_34 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).panel.disabled ? (0 - 1) : 0); var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79)._getPanelId(); var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79)._isExpanded(); var currVal_37 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).panel.disabled; var currVal_38 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79)._isExpanded(); var currVal_39 = _ck(_v, 81, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79)._getExpandedState(), _ck(_v, 80, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).collapsedHeight, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).expandedHeight)); _ck(_v, 78, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 87).target; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 87).href; _ck(_v, 86, 0, currVal_40, currVal_41); }); }
function View_DefaultComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "kt-default", [], null, null, null, View_DefaultComponent_0, RenderType_DefaultComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_10__default_component__["a" /* DefaultComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DefaultComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("kt-default", __WEBPACK_IMPORTED_MODULE_10__default_component__["a" /* DefaultComponent */], View_DefaultComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/default/default.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:400,700\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  justify-items: center; }\n#wrapper[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%; }\nh2[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  color: white;\n  width: 100%;\n  margin-left: 10px; }\n.title[_ngcontent-%COMP%] {\n  display: inline; }\np[_ngcontent-%COMP%] {\n  color: #008023;\n  font-size: 24px; }\n#mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: white; }\n.header[_ngcontent-%COMP%] {\n  background-color: #212121; }\n.header-text[_ngcontent-%COMP%] {\n  font-size: 27px;\n  color: white; }\nbutton[_ngcontent-%COMP%] {\n  color: black;\n  background-color: black; }"];



/***/ }),

/***/ "./src/app/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        this.title = 'KNOW YOUR HIGH';
    }
    DefaultComponent.prototype.ngOnInit = function () { };
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_GalleryComponent */
/* unused harmony export View_GalleryComponent_0 */
/* unused harmony export View_GalleryComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gallery_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/gallery/gallery.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_expansion_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/expansion/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video_src_embed_video_service__ = __webpack_require__("./node_modules/ngx-embed-video/src/embed-video.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_GalleryComponent = [__WEBPACK_IMPORTED_MODULE_0__gallery_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_GalleryComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_GalleryComponent, data: {} });

function View_GalleryComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 48, "div", [["id", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "img", [["id", "image"]], [[8, "src", 4]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__angular_common__["AsyncPipe"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 4, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Dis is Image"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "button", [["id", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.button$.next((0 - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Previous\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 1, "button", [["id", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.button$.next(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Next"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 22, "mat-accordion", [["class", "mat-accordion"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["a" /* MatAccordion */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 16777216, null, null, 18, "mat-expansion-panel", [["class", "header mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "mat-expansion-panel-spacing", null]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 1753088, null, 1, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["c" /* MatExpansionPanel */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["a" /* MatAccordion */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { _lazyContent: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, 0, 11, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["d" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["c" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](30, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](31, { value: 0, params: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](33, 0, null, 0, 5, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](34, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["e" /* MatExpansionPanelTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Click for Bob Ross "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](41, 0, null, 1, 0, "iframe", [["allow", "autoplay; encrypted-media"], ["allowfullscreen", ""], ["frameborder", "0"], ["height", "315"], ["src", "https://www.youtube.com/embed/lLWEXRAnQd0?rel=0"], ["width", "560"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](45, 0, null, null, 2, "a", [["class", "nav-text"], ["routerLink", ""], ["style", " text-decoration:none"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](46, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_router__["l" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_7__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Let's Go Back"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"]))], function (_ck, _v) { var currVal_12 = ""; _ck(_v, 46, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", _co.photos[__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 2, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).transform(_co.counter$))], ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).expanded; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._hasSpacing(); _ck(_v, 24, 0, currVal_1, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).panel._headerId; var currVal_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).panel.disabled ? (0 - 1) : 0); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._getPanelId(); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._isExpanded(); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).panel.disabled; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._isExpanded(); var currVal_9 = _ck(_v, 31, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._getExpandedState(), _ck(_v, 30, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).collapsedHeight, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).expandedHeight)); _ck(_v, 28, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).target; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).href; _ck(_v, 45, 0, currVal_10, currVal_11); }); }
function View_GalleryComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "kt-gallery", [], null, null, null, View_GalleryComponent_0, RenderType_GalleryComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_8__gallery_component__["a" /* GalleryComponent */], [__WEBPACK_IMPORTED_MODULE_9_ngx_embed_video_src_embed_video_service__["a" /* EmbedVideoService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GalleryComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("kt-gallery", __WEBPACK_IMPORTED_MODULE_8__gallery_component__["a" /* GalleryComponent */], View_GalleryComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/gallery/gallery.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\nh1[_ngcontent-%COMP%] {\n  color: white;\n  -ms-grid-column: 1;\n  grid-column: 1;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  padding: 10px; }\n#container[_ngcontent-%COMP%] {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 700px;\n      grid-template-columns: 700px;\n  -ms-grid-rows: 100px 1fr;\n      grid-template-rows: 100px 1fr;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.wrapper[_ngcontent-%COMP%] {\n  justify-items: self;\n  width: 100%;\n  display: block; }\n#image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  -ms-grid-column: 1;\n  grid-column: 1;\n  -ms-grid-row: 2;\n  grid-row: 2;\n  -ms-grid-column-align: center;\n      justify-self: center; }\n#button[_ngcontent-%COMP%] {\n  -ms-grid-column: 1;\n  grid-column: 1;\n  grid-row: 3 4;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  border: 0.2em solid;\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  opacity: 0.6;\n  color: #212121;\n  text-transform: uppercase;\n  font-size: 25px; }\n#button__text[_ngcontent-%COMP%] {\n    display: block;\n    padding: 1em 2em;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: #212121; }\n#button__text[_ngcontent-%COMP%]:before {\n      content: attr(title); }\n#button__text--bis[_ngcontent-%COMP%] {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      -webkit-transform: translateX(-1em);\n              transform: translateX(-1em);\n      color: #212121;\n      opacity: 100%; }\n#button--mask[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: white;\n    -webkit-transform: translateX(-100%) rotate(45deg);\n            transform: translateX(-100%) rotate(45deg);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n#button[_ngcontent-%COMP%]:hover {\n  opacity: 1; }\n#button[_ngcontent-%COMP%]:hover   .button__text[_ngcontent-%COMP%] {\n    -webkit-animation: fx-text 0.3s ease-out;\n            animation: fx-text 0.3s ease-out; }\n#button[_ngcontent-%COMP%]:hover   .button__text--bis[_ngcontent-%COMP%] {\n      -webkit-animation: fx-text-bis 0.3s ease-out;\n              animation: fx-text-bis 0.3s ease-out; }\n#button[_ngcontent-%COMP%]:hover   .button__mask[_ngcontent-%COMP%] {\n    -webkit-animation: fx-mask 0.3s ease-out;\n            animation: fx-mask 0.3s ease-out; }\n#button[_ngcontent-%COMP%]:active {\n  opacity: 1;\n  background: white;\n  color: inherit; }\n@-webkit-keyframes fx-mask {\n  0% {\n    -webkit-transform: translateX(-100%) rotate(45deg);\n            transform: translateX(-100%) rotate(45deg); }\n  100% {\n    -webkit-transform: translateX(100%) rotate(45deg);\n            transform: translateX(100%) rotate(45deg); } }\n@keyframes fx-mask {\n  0% {\n    -webkit-transform: translateX(-100%) rotate(45deg);\n            transform: translateX(-100%) rotate(45deg); }\n  100% {\n    -webkit-transform: translateX(100%) rotate(45deg);\n            transform: translateX(100%) rotate(45deg); } }\n@-webkit-keyframes fx-text {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(1em);\n            transform: translateX(1em);\n    opacity: 0; } }\n@keyframes fx-text {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(1em);\n            transform: translateX(1em);\n    opacity: 0; } }\n@-webkit-keyframes fx-text-bis {\n  0% {\n    -webkit-transform: translateX(-1em);\n            transform: translateX(-1em);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n@keyframes fx-text-bis {\n  0% {\n    -webkit-transform: translateX(-1em);\n            transform: translateX(-1em);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n.nav-text[_ngcontent-%COMP%] {\n  color: white;\n  -ms-grid-column-align: center;\n      justify-self: center; }"];



/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_galleryphotos__ = __webpack_require__("./src/assets/galleryphotos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__ = __webpack_require__("./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__);


// import { DomSanitizer } from '@angular/platform-browser';
// @Pipe({ name: 'safe' })
// export class SafePipe implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer) {}
//   transform(url) {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }
// }

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(embedService // private http: Http, private ProgressSpinnerService: ProgressSpinnerService
    ) {
        var _this = this;
        this.embedService = embedService; // private http: Http, private ProgressSpinnerService: ProgressSpinnerService
        this.photos = __WEBPACK_IMPORTED_MODULE_1_assets_galleryphotos__["a" /* PHOTOS */];
        this.START = 0;
        this.TOTAL = __WEBPACK_IMPORTED_MODULE_1_assets_galleryphotos__["a" /* PHOTOS */].length;
        this.button$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.videoUrl = 'https://www.youtube.com/watch?v=lLWEXRAnQd0&t=0s&index=1&list=PLAEQD0ULngi67rwmhrkNjMZKvyCReqDV4';
        //     this.ProgressSpinnerService.spinnerActive.subscribe(active =>
        //       this.toggleSpinner(active))
        //     }
        //     toggleSpinner(active) {
        //     console.log('inside toggle spinner')
        //     this.spinnerActive = active
        // }
        this.iframe_html = this.embedService.embed(this.videoUrl);
        this.counter$ = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].merge(this.button$, __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].interval(10000).mapTo(1))
            .startWith(this.START)
            .scan(function (acc, curr) {
            //if next && last image
            if (curr === 1 && acc === _this.TOTAL - 1)
                return 0;
            //if prev && first image
            if (curr === -1 && acc === 0)
                return _this.TOTAL - 1;
            //else
            return acc + curr;
        });
    }
    GalleryComponent.prototype.ngOnInit = function () { };
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_InfoComponent */
/* unused harmony export View_InfoComponent_0 */
/* unused harmony export View_InfoComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/info/info.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_select_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/select/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_scrolling__ = __webpack_require__("./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/core/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__info_component__ = __webpack_require__("./src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_InfoComponent = [__WEBPACK_IMPORTED_MODULE_0__info_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_InfoComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_InfoComponent, data: {} });

function View_InfoComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, null, [" ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_0); }); }
function View_InfoComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 4, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Let's get Educated!! "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 6, "div", [["id", "searchBox"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, [["searchTerm", 1]], null, 0, "input", [["name", "title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "button", [["class", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.searchAPI(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Search"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 34, "mat-form-field", [["class", "form-field mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["f" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 5, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, 1, 23, "mat-select", [["class", "mat-select"], ["placeholder", "Category"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null]], [[null, "change"], [null, "valueChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._onBlur() !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = (_co.onSelectChange() !== false);
        ad = (pd_3 && ad);
    } if (("valueChange" === en)) {
        var pd_4 = ((_co.selected = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_select_typings_index_ngfactory__["b" /* View_MatSelect_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_select_typings_index_ngfactory__["a" /* RenderType_MatSelect */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 2080768, null, 3, __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["c" /* MatSelect */], [__WEBPACK_IMPORTED_MODULE_7__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["b" /* ErrorStateMatcher */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_8__angular_cdk_bidi__["c" /* Directionality */]], [2, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormGroupDirective */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["a" /* MatFormField */]], [8, null], [8, null], __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MAT_SELECT_SCROLL_STRATEGY */]], { placeholder: [0, "placeholder"], value: [1, "value"] }, { change: "change", valueChange: "valueChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 8, { options: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 9, { optionGroups: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 10, { customTrigger: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[1, 4]], __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_material_select__["c" /* MatSelect */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["h" /* MAT_OPTION_PARENT_COMPONENT */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_material_select__["c" /* MatSelect */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](32, 0, null, 1, 2, "mat-option", [["class", "mat-option"], ["role", "option"], ["value", "strains"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__["b" /* View_MatOption_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__["a" /* RenderType_MatOption */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](33, 8437760, [[8, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["p" /* MatOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["h" /* MAT_OPTION_PARENT_COMPONENT */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["o" /* MatOptgroup */]]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Strains"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, 1, 2, "mat-option", [["class", "mat-option"], ["role", "option"], ["value", "products"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__["b" /* View_MatOption_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__["a" /* RenderType_MatOption */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](37, 8437760, [[8, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["p" /* MatOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["h" /* MAT_OPTION_PARENT_COMPONENT */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["o" /* MatOptgroup */]]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Products"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](40, 0, null, 1, 2, "mat-option", [["class", "mat-option"], ["role", "option"], ["value", "shops"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__["b" /* View_MatOption_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__["a" /* RenderType_MatOption */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](41, 8437760, [[8, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["p" /* MatOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["h" /* MAT_OPTION_PARENT_COMPONENT */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["o" /* MatOptgroup */]]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Shops"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](44, 0, null, 1, 2, "mat-option", [["class", "mat-option"], ["role", "option"], ["value", "brands"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__["b" /* View_MatOption_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_core_typings_index_ngfactory__["a" /* RenderType_MatOption */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](45, 8437760, [[8, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["p" /* MatOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["h" /* MAT_OPTION_PARENT_COMPONENT */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["o" /* MatOptgroup */]]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Brands"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](52, 0, null, null, 4, "div", [["class", " card "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_InfoComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](55, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](58, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  There are 3 types of Cannabis:\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](61, 0, null, null, 97, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](63, 0, null, null, 30, "mat-card", [["class", "indica mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["d" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](64, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](66, 0, null, 0, 13, "mat-card-header", [["class", "mat-card-header"]], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["c" /* View_MatCardHeader_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["b" /* RenderType_MatCardHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](67, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["d" /* MatCardHeader */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](69, 0, null, 0, 1, "div", [["class", "indica-header-image mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](70, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["b" /* MatCardAvatar */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](72, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](73, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["h" /* MatCardTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Indica"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](76, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](77, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["g" /* MatCardSubtitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Body High"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](81, 0, null, 0, 4, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](83, 0, null, null, 1, "img", [["alt", ""], ["class", "mat-card-image"], ["mat-card-image", ""], ["src", "indica.9af9943b29d88e716c16.jpg"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](84, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["e" /* MatCardImage */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](87, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](88, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](90, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        The effects produced by Indica strains are very relaxing and narcotic-like, typically providing a full-body, or \u201Ccouch-locked\u201D\n        effect. Indica are perfect for those days spent curled up on the couch watching TV, or surfing the web. However,\n        most people seek Cannabis Indica after a long day at work to relieve stress, provide full-body pain relief, and help\n        them fall asleep at night.\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](95, 0, null, null, 30, "mat-card", [["class", "sativa mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["d" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](96, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](98, 0, null, 0, 13, "mat-card-header", [["class", "mat-card-header"]], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["c" /* View_MatCardHeader_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["b" /* RenderType_MatCardHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](99, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["d" /* MatCardHeader */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](101, 0, null, 0, 1, "div", [["class", "sativa-header-image mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](102, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["b" /* MatCardAvatar */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](104, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](105, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["h" /* MatCardTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Sativa"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](108, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](109, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["g" /* MatCardSubtitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Mind High"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](113, 0, null, 0, 4, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](115, 0, null, null, 1, "img", [["alt", ""], ["class", "mat-card-image"], ["mat-card-image", ""], ["src", "sativa.65779a22bee2f711893d.jpg"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](116, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["e" /* MatCardImage */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](119, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](120, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](122, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        Sativa strains are known to produce an uplifting and cerebral high that is typically very energizing and stimulating. Sativa\n        are known to make you laugh uncontrollably or engage in in-depth conversations about the meaning of life. These strains\n        typically cause you to analyze the human experience and think creatively, which makes Cannabis Sativa very popular\n        among philosophers, artists and musicians. Some Sativa even have been found to enhance lights and sounds, making\n        music, movies, and the rest of your surroundings more vibrant than ever before.\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](127, 0, null, null, 30, "mat-card", [["class", "hybrid mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["d" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](128, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](130, 0, null, 0, 13, "mat-card-header", [["class", "mat-card-header"]], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["c" /* View_MatCardHeader_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["b" /* RenderType_MatCardHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](131, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["d" /* MatCardHeader */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](133, 0, null, 0, 1, "div", [["class", "hybrid-header-image mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](134, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["b" /* MatCardAvatar */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](136, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](137, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["h" /* MatCardTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Hybrid"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](140, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](141, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["g" /* MatCardSubtitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["EVERYTHING"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](145, 0, null, 0, 4, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](147, 0, null, null, 1, "img", [["alt", ""], ["class", "mat-card-image"], ["mat-card-image", ""], ["src", "hybrid.b4ce3925e2cb55cb1600.jpg"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](148, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["e" /* MatCardImage */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](151, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](152, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](154, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        EEEEEEEEeEEEEeEEEE\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](160, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](162, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](164, 0, null, null, 5, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](166, 0, null, null, 2, "a", [["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 167).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](167, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_router__["l" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_14__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_11__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Let's Go Back"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_28 = "Category"; var currVal_29 = _co.selected; _ck(_v, 25, 0, currVal_28, currVal_29); var currVal_38 = "strains"; _ck(_v, 33, 0, currVal_38); var currVal_47 = "products"; _ck(_v, 37, 0, currVal_47); var currVal_56 = "shops"; _ck(_v, 41, 0, currVal_56); var currVal_65 = "brands"; _ck(_v, 45, 0, currVal_65); var currVal_66 = _co.data.data; _ck(_v, 55, 0, currVal_66); var currVal_69 = ""; _ck(_v, 167, 0, currVal_69); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._control.errorState; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._control.errorState; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._canLabelFloat; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldLabelFloat(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._hideControlPlaceholder(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._control.disabled; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._control.focused; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("untouched"); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("touched"); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("pristine"); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("dirty"); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("valid"); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("invalid"); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("pending"); _ck(_v, 14, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).id; var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).tabIndex; var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._ariaLabel; var currVal_17 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).ariaLabelledby; var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).required.toString(); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).disabled.toString(); var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).errorState; var currVal_21 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).panelOpen ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._optionIds : null); var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).multiple; var currVal_23 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._ariaDescribedby || null); var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._getAriaActiveDescendant(); var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).disabled; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).errorState; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).required; _ck(_v, 24, 1, [currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27]); var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33)._getTabIndex(); var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).selected; var currVal_32 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).multiple; var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).active; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).id; var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).selected.toString(); var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).disabled.toString(); var currVal_37 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).disabled; _ck(_v, 32, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37)._getTabIndex(); var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).selected; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).multiple; var currVal_42 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).active; var currVal_43 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).id; var currVal_44 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).selected.toString(); var currVal_45 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).disabled.toString(); var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).disabled; _ck(_v, 36, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46); var currVal_48 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41)._getTabIndex(); var currVal_49 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).selected; var currVal_50 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).multiple; var currVal_51 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).active; var currVal_52 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).id; var currVal_53 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).selected.toString(); var currVal_54 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).disabled.toString(); var currVal_55 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).disabled; _ck(_v, 40, 0, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55); var currVal_57 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45)._getTabIndex(); var currVal_58 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).selected; var currVal_59 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).multiple; var currVal_60 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).active; var currVal_61 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).id; var currVal_62 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).selected.toString(); var currVal_63 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).disabled.toString(); var currVal_64 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).disabled; _ck(_v, 44, 0, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64); var currVal_67 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 167).target; var currVal_68 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 167).href; _ck(_v, 166, 0, currVal_67, currVal_68); }); }
function View_InfoComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "kt-info", [], null, null, null, View_InfoComponent_0, RenderType_InfoComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_15__info_component__["a" /* InfoComponent */], [__WEBPACK_IMPORTED_MODULE_16__api_service__["a" /* APIService */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClient */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var InfoComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("kt-info", __WEBPACK_IMPORTED_MODULE_15__info_component__["a" /* InfoComponent */], View_InfoComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/info/info.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:400,700\");\nh1[_ngcontent-%COMP%] {\n  color: white; }\nh2[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  margin: 5px;\n  padding: 5px; }\n.form-field[_ngcontent-%COMP%] {\n  background-color: black;\n  margin: 5px;\n  display: block; }\n.mat-input-wrapper[_ngcontent-%COMP%] {\n  padding: 2px 2px 2px 2px;\n  margin: 10px;\n  background-color: #212121; }\n.mat-select-value[_ngcontent-%COMP%] {\n  margin: 5px; }\n.wrapper[_ngcontent-%COMP%] {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  justify-items: center;\n  background-color: black; }\n.indica-header-image[_ngcontent-%COMP%] {\n  background-image: url('indica.9af9943b29d88e716c16.jpg');\n  background-size: cover; }\n.sativa-header-image[_ngcontent-%COMP%] {\n  background-image: url('sativa.65779a22bee2f711893d.jpg');\n  background-size: cover; }\n.hybrid-header-image[_ngcontent-%COMP%] {\n  background-image: url('hybrid.b4ce3925e2cb55cb1600.jpg');\n  background-size: cover; }\n.mat-card-image[_ngcontent-%COMP%] {\n  max-width: 200px;\n  -ms-grid-column-align: center;\n      justify-self: center; }\n.indica[_ngcontent-%COMP%], .sativa[_ngcontent-%COMP%], .hybrid[_ngcontent-%COMP%] {\n  -ms-grid-column-align: center;\n      justify-self: center;\n  background-color: black; }\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr; }\n.image[_ngcontent-%COMP%] {\n  padding: 10px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 10px; }\n.button[_ngcontent-%COMP%] {\n  -ms-grid-column: 1;\n  grid-column: 1;\n  grid-row: 1 2;\n  text-align: center;\n  margin: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  border: 0.2em solid;\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  opacity: 0.6;\n  color: #212121;\n  text-transform: uppercase;\n  font-size: 25px; }\n.button__text[_ngcontent-%COMP%] {\n    display: block;\n    padding: 1em 2em;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: #212121; }\n.button__text[_ngcontent-%COMP%]:before {\n      content: attr(title); }\n.button__text--bis[_ngcontent-%COMP%] {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      -webkit-transform: translateX(-1em);\n              transform: translateX(-1em);\n      color: #212121;\n      opacity: 100%; }\n.button--mask[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: white;\n    -webkit-transform: translateX(-100%) rotate(45deg);\n            transform: translateX(-100%) rotate(45deg);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n.button[_ngcontent-%COMP%]:hover {\n  opacity: 1; }\n.button[_ngcontent-%COMP%]:hover   .button__text[_ngcontent-%COMP%] {\n    -webkit-animation: fx-text 0.3s ease-out;\n            animation: fx-text 0.3s ease-out; }\n.button[_ngcontent-%COMP%]:hover   .button__text--bis[_ngcontent-%COMP%] {\n      -webkit-animation: fx-text-bis 0.3s ease-out;\n              animation: fx-text-bis 0.3s ease-out; }\n.button[_ngcontent-%COMP%]:hover   .button__mask[_ngcontent-%COMP%] {\n    -webkit-animation: fx-mask 0.3s ease-out;\n            animation: fx-mask 0.3s ease-out; }\n.button[_ngcontent-%COMP%]:active {\n  opacity: 1;\n  background: white;\n  color: inherit; }"];



/***/ }),

/***/ "./src/app/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");



var InfoComponent = /** @class */ (function () {
    function InfoComponent(APIService, http) {
        this.APIService = APIService;
        this.http = http;
        this.data = {};
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    InfoComponent.prototype.onSelectChange = function () {
        var _this = this;
        // if (searchTerm.value) {
        //   console.log('onSelectChange', this.selected);
        // } else {
        this.subscription = this.APIService.getbyCat(this.selected).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    InfoComponent.prototype.searchAPI = function (searchTerm) {
        var _this = this;
        console.log("Yous entered: " + searchTerm.value);
        // var apiLink = `https://kushy.net/api/v3/${
        //   this.selected
        // }/?filters[name][contains]=${searchTerm.value}`;
        // console.log(apiLink);
        if (!searchTerm.value) {
            console.log('You must select a category to search');
            return;
        }
        else {
            this.subscription = this.APIService.filterSearch(this.selected, searchTerm.value).subscribe(function (data) {
                console.log(data);
                _this.data = data;
            });
        }
    };
    // }
    InfoComponent.prototype.ngOnInit = function () { };
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/quiz/answers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersService; });
var AnswersService = /** @class */ (function () {
    function AnswersService() {
    }
    return AnswersService;
}());



/***/ }),

/***/ "./src/app/quiz/questions/questions.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_QuestionsComponent */
/* unused harmony export View_QuestionsComponent_0 */
/* unused harmony export View_QuestionsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questions_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/quiz/questions/questions.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_radio_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/radio/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quiz_service__ = __webpack_require__("./src/app/quiz/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__answers_service__ = __webpack_require__("./src/app/quiz/answers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questions_component__ = __webpack_require__("./src/app/quiz/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_QuestionsComponent = [__WEBPACK_IMPORTED_MODULE_0__questions_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_QuestionsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_QuestionsComponent, data: {} });

function View_QuestionsComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", _co.question.image, ""); _ck(_v, 2, 0, currVal_0); }); }
function View_QuestionsComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "mat-radio-button", [["class", "mat-radio-button"], ["color", "warn"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [1, "id", 0]], [[null, "change"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_co.handleChange(_v.context.$implicit.points) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_radio_typings_index_ngfactory__["b" /* View_MatRadioButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_radio_typings_index_ngfactory__["a" /* RenderType_MatRadioButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 4440064, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["a" /* MatRadioButton */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["b" /* MatRadioGroup */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]], { color: [0, "color"], value: [1, "value"] }, { change: "change" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](2, 0, ["\n      ", "\n    "]))], function (_ck, _v) { var currVal_3 = "warn"; var currVal_4 = _v.context.$implicit; _ck(_v, 1, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).checked; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).disabled; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _v.context.$implicit.answer; _ck(_v, 2, 0, currVal_5); }); }
function View_QuestionsComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "button", [["color", "accent"], ["mat-raised-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Go Back Home"]))], function (_ck, _v) { var currVal_1 = "accent"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); }); }
function View_QuestionsComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "button", [["color", "accent"], ["mat-raised-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.prevQuestion();
        var pd_0 = (_co.undoAnswer() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Previous Question"]))], function (_ck, _v) { var currVal_1 = "accent"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); }); }
function View_QuestionsComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "button", [["color", "accent"], ["mat-raised-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.nextQuestion();
        var pd_0 = (_co.submitAnswer() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Next Question"]))], function (_ck, _v) { var currVal_1 = "accent"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); }); }
function View_QuestionsComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "button", [["color", "accent"], ["mat-raised-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.calculateResult() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Calculate Results!"]))], function (_ck, _v) { var currVal_1 = "accent"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); }); }
function View_QuestionsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 32, "div", [["class", "quiz"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "question"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_QuestionsComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 7, "mat-radio-group", [["class", "mat-radio-group"], ["role", "radiogroup"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](5120, null, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["b" /* MatRadioGroup */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](10, 1064960, null, 1, __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["b" /* MatRadioGroup */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { _radios: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_QuestionsComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_QuestionsComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_QuestionsComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_QuestionsComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_QuestionsComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](31, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.question.image; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.question.answers; _ck(_v, 14, 0, currVal_2); var currVal_3 = (_co.question.questionId === 1); _ck(_v, 22, 0, currVal_3); var currVal_4 = (_co.question.questionId !== 1); _ck(_v, 25, 0, currVal_4); var currVal_5 = (_co.question.questionId < 10); _ck(_v, 28, 0, currVal_5); var currVal_6 = (_co.question.questionId === 10); _ck(_v, 31, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.question.question; _ck(_v, 3, 0, currVal_0); }); }
function View_QuestionsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "kt-questions", [], null, null, null, View_QuestionsComponent_0, RenderType_QuestionsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](512, null, __WEBPACK_IMPORTED_MODULE_11__quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_11__quiz_service__["a" /* QuizService */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](512, null, __WEBPACK_IMPORTED_MODULE_12__answers_service__["a" /* AnswersService */], __WEBPACK_IMPORTED_MODULE_12__answers_service__["a" /* AnswersService */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_13__questions_component__["a" /* QuestionsComponent */], [__WEBPACK_IMPORTED_MODULE_11__quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_12__answers_service__["a" /* AnswersService */], __WEBPACK_IMPORTED_MODULE_14__angular_router__["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var QuestionsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("kt-questions", __WEBPACK_IMPORTED_MODULE_13__questions_component__["a" /* QuestionsComponent */], View_QuestionsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/quiz/questions/questions.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".quiz[_ngcontent-%COMP%] {\n  margin-left: 10px; }\n\n.question[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 0px; }\n\nimg[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 25%; }\n\nmat-radio-group[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\nmat-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 30px; }\n\nmat-radio-button[_ngcontent-%COMP%]:hover {\n    color: lime; }"];



/***/ }),

/***/ "./src/app/quiz/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz_service__ = __webpack_require__("./src/app/quiz/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answers_service__ = __webpack_require__("./src/app/quiz/answers.service.ts");



var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(quizService, activatedRoute, answersService, router) {
        var _this = this;
        this.quizService = quizService;
        this.activatedRoute = activatedRoute;
        this.answersService = answersService;
        this.router = router;
        this.selectedAnswers = [];
        this.activatedRoute.params.subscribe(function (value) {
            _this.question = _this.quizService.getQuestion(parseInt(value.questionId));
        });
    }
    QuestionsComponent.prototype.handleChange = function (points) {
        this.points = points;
        // console.log("points", points);
    };
    QuestionsComponent.prototype.nextQuestion = function () {
        console.log("your answer's points: ", this.points);
        var nextQuestionId = this.question.questionId + 1;
        this.router.navigateByUrl("quiz/question/" + nextQuestionId);
    };
    QuestionsComponent.prototype.submitAnswer = function () {
        this.selectedAnswers.push(this.points);
        console.log("SUBMITTED ANSWERS :", this.selectedAnswers);
    };
    QuestionsComponent.prototype.prevQuestion = function () {
        console.log("go back bruh", this.points);
        var prevQuestionId = this.question.questionId - 1;
        this.router.navigateByUrl("quiz/question/" + prevQuestionId);
    };
    QuestionsComponent.prototype.undoAnswer = function () {
        var index = this.selectedAnswers.indexOf(this.points);
        this.selectedAnswers.splice(index, 1);
        console.log("UNDO ANSWERS :", this.selectedAnswers);
    };
    QuestionsComponent.prototype.goBack = function () {
        this.router.navigateByUrl("quiz");
    };
    QuestionsComponent.prototype.ngOnInit = function () { };
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_QuizComponent */
/* unused harmony export View_QuizComponent_0 */
/* unused harmony export View_QuizComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/quiz/quiz.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quiz_component__ = __webpack_require__("./src/app/quiz/quiz.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_QuizComponent = [__WEBPACK_IMPORTED_MODULE_0__quiz_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_QuizComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_QuizComponent, data: {} });

function View_QuizComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 30, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" take this quiz to see if you're too high to either see your mother or your boss! "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 9, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 6, "a", [["routerLink", "/quiz/question"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 2, "button", [["color", "primary"], ["mat-raised-button", ""]], [[8, "disabled", 0]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Press to Start"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 9, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 6, "a", [["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](25, 0, null, null, 2, "button", [["color", "primary"], ["mat-raised-button", ""]], [[8, "disabled", 0]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](26, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Let's Go Back"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_2 = "/quiz/question"; _ck(_v, 8, 0, currVal_2); var currVal_4 = "primary"; _ck(_v, 11, 0, currVal_4); var currVal_7 = ""; _ck(_v, 23, 0, currVal_7); var currVal_9 = "primary"; _ck(_v, 26, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).href; _ck(_v, 7, 0, currVal_0, currVal_1); var currVal_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).disabled || null); _ck(_v, 10, 0, currVal_3); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).target; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).href; _ck(_v, 22, 0, currVal_5, currVal_6); var currVal_8 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).disabled || null); _ck(_v, 25, 0, currVal_8); }); }
function View_QuizComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "kt-quiz", [], null, null, null, View_QuizComponent_0, RenderType_QuizComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_8__quiz_component__["a" /* QuizComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuizComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("kt-quiz", __WEBPACK_IMPORTED_MODULE_8__quiz_component__["a" /* QuizComponent */], View_QuizComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/quiz/quiz.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h1[_ngcontent-%COMP%] {\n  color: #1b5e20;\n  background-color: lightgrey; }"];



/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
var QuizService = /** @class */ (function () {
    function QuizService() {
        this.QandA = [
            {
                questionId: 1,
                question: "Can you open your eyes all the way?",
                answers: [
                    {
                        answer: "yes",
                        points: 0
                    },
                    {
                        answer: "no",
                        points: 3
                    }
                ]
            },
            {
                questionId: 2,
                question: "Can you remember why you are taking this quiz?",
                answers: [
                    {
                        answer: "yes",
                        points: 0
                    },
                    {
                        answer: "no",
                        points: 3
                    }
                ]
            },
            {
                questionId: 3,
                question: "Did you smoke a bowl, bong, or blunt?",
                answers: [
                    {
                        answer: "bowl",
                        points: 2
                    },
                    {
                        answer: "bong",
                        points: 4
                    },
                    {
                        answer: "blunt",
                        points: 6
                    }
                ]
            },
            {
                questionId: 4,
                question: "Are you thinking of munchie concoctions right now?",
                answers: [
                    {
                        answer: "yes",
                        points: 5
                    },
                    {
                        answer: "no",
                        points: 0
                    }
                ]
            },
            {
                questionId: 5,
                question: "How does cleaning your whole house sound?",
                answers: [
                    {
                        answer: "HELL YES!",
                        points: 5
                    },
                    {
                        answer: "HELL NO!",
                        points: 0
                    }
                ]
            },
            {
                questionId: 6,
                question: "Who is Bob Ross?",
                image: "https://www.readjunk.com/wp-content/uploads/2015/11/article-thejoyofbobross.jpg",
                answers: [
                    {
                        answer: "an artistic genius who needs more recognition",
                        points: 3
                    },
                    {
                        answer: "my spirit animal",
                        points: 6
                    },
                    {
                        answer: "my dad",
                        points: 9
                    }
                ]
            },
            {
                questionId: 7,
                question: "How long ago did you smoke?",
                answers: [
                    {
                        answer: "whenever this quiz started",
                        points: 4
                    },
                    {
                        answer: "2+ hours ago bruh",
                        points: 2
                    },
                    {
                        answer: "i don't know the conception of time",
                        points: 6
                    }
                ]
            },
            {
                questionId: 8,
                question: "How does this picture make you feel?",
                image: "https://www.rd.com/wp-content/uploads/2018/02/16_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_507959740_Utekhina-Anna-760x506.jpg",
                answers: [
                    {
                        answer: "SOO CUTE!!! OMG I WANNA DIE!!",
                        points: 8
                    },
                    {
                        answer: "i'm literally crying",
                        points: 6
                    },
                    {
                        answer: "they're cute... i guess?",
                        points: 2
                    },
                    {
                        answer: "*heart eyes* *hearts everywhere*",
                        points: 4
                    }
                ]
            }
        ];
    }
    QuizService.prototype.getQuestion = function (questionId) {
        return this.QandA.filter(function (q) { return q.questionId === questionId; })[0];
    };
    return QuizService;
}());



/***/ }),

/***/ "./src/app/quiz/result/result.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ResultComponent */
/* unused harmony export View_ResultComponent_0 */
/* unused harmony export View_ResultComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/quiz/result/result.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_component__ = __webpack_require__("./src/app/quiz/result/result.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ResultComponent = [__WEBPACK_IMPORTED_MODULE_0__result_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ResultComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ResultComponent, data: {} });

function View_ResultComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  result works!\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_ResultComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "kt-result", [], null, null, null, View_ResultComponent_0, RenderType_ResultComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__result_component__["a" /* ResultComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ResultComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("kt-result", __WEBPACK_IMPORTED_MODULE_2__result_component__["a" /* ResultComponent */], View_ResultComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/quiz/result/result.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/quiz/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    return ResultComponent;
}());



/***/ }),

/***/ "./src/assets/galleryphotos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PHOTOS; });
var PHOTOS = [
    'https://coopervision.com/sites/coopervision.com/files/styles/cv_blog_large/public/blog-post-images/3794845.jpg?itok=zzE-YISP&timestamp=1414590345',
    'http://cdn.playbuzz.com/cdn/21fefeec-71ee-4325-8aa4-e22bfe6d2f0a/da28c0b7-ba32-4126-8e7f-c25d2fc65075_560_420.jpg',
    'https://img.playbuzz.com/image/upload/c_crop,h_479,w_639,x_1,y_0/f_auto,fl_lossy,q_auto/c_limit,w_640/v1484183052/g3awxaoruvlvbnqqrlg7.jpg',
    'http://brainden.com/images/static1-big.jpg',
    'https://i.ytimg.com/vi/7hrofj5te88/maxresdefault.jpg',
    'https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmbopwPG1xrCge8PLEPUuZvsU8hqdwajfmdP92D3jxWHjs',
    'https://images.fatherly.com/wp-content/uploads/2016/09/optical-illusion-scintillating-grid-illusion.jpg',
    'http://www.illusionspoint.com/wp-content/uploads/2015/06/Cube-Background.jpg'
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module_ngfactory__ = __webpack_require__("./src/app/app.module.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");





if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["platformBrowser"]()
    .bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__app_app_module_ngfactory__["a" /* AppModuleNgFactory */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map