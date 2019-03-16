/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../../../../node_modules/@angular/material/button/typings/index.ngfactory";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/cdk/a11y";
import * as i5 from "@angular/platform-browser/animations";
import * as i6 from "../../../../node_modules/@angular/material/icon/typings/index.ngfactory";
import * as i7 from "@angular/material/icon";
import * as i8 from "../../../../node_modules/@angular/material/sidenav/typings/index.ngfactory";
import * as i9 from "@angular/material/sidenav";
import * as i10 from "@angular/cdk/bidi";
import * as i11 from "@angular/cdk/scrolling";
import * as i12 from "@angular/common";
import * as i13 from "../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory";
import * as i14 from "@angular/material/toolbar";
import * as i15 from "../../../../node_modules/@angular/material/list/typings/index.ngfactory";
import * as i16 from "@angular/material/list";
import * as i17 from "./main-nav.component";
import * as i18 from "@angular/cdk/layout";
var styles_MainNavComponent = [".sidenav-container[_ngcontent-%COMP%] {\n      height: 100%;\n    }\n\n    .sidenav[_ngcontent-%COMP%] {\n      width: 200px;\n    }\n\n    .sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n      background: inherit;\n    }\n\n    .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n      position: sticky;\n      top: 0;\n      z-index: 1;\n    }"];
var RenderType_MainNavComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_MainNavComponent, data: {} });
export { RenderType_MainNavComponent as RenderType_MainNavComponent };
function View_MainNavComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "button", [["aria-label", "Toggle sidenav"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v.parent, 5).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_MatButton_0, i1.RenderType_MatButton)), i0.ɵdid(1, 180224, null, 0, i2.MatButton, [i0.ElementRef, i3.Platform, i4.FocusMonitor, [2, i5.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i0.ɵeld(2, 0, null, 0, 2, "mat-icon", [["aria-label", "Side nav toggle icon"], ["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, i6.View_MatIcon_0, i6.RenderType_MatIcon)), i0.ɵdid(3, 9158656, null, 0, i7.MatIcon, [i0.ElementRef, i7.MatIconRegistry, [8, null], [2, i7.MAT_ICON_LOCATION]], null, null), (_l()(), i0.ɵted(-1, 0, ["menu"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1).disabled || null); var currVal_1 = (i0.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 3).inline; var currVal_3 = (((i0.ɵnov(_v, 3).color !== "primary") && (i0.ɵnov(_v, 3).color !== "accent")) && (i0.ɵnov(_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_2, currVal_3); }); }
export function View_MainNavComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 42, "mat-sidenav-container", [["class", "sidenav-container mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, i8.View_MatSidenavContainer_0, i8.RenderType_MatSidenavContainer)), i0.ɵdid(1, 1490944, null, 2, i9.MatSidenavContainer, [[2, i10.Directionality], i0.ElementRef, i0.NgZone, i0.ChangeDetectorRef, i9.MAT_DRAWER_DEFAULT_AUTOSIZE, [2, i5.ANIMATION_MODULE_TYPE], [2, i11.ViewportRuler]], null, null), i0.ɵqud(603979776, 1, { _drawers: 1 }), i0.ɵqud(335544320, 2, { _content: 0 }), (_l()(), i0.ɵeld(4, 0, null, 0, 28, "mat-sidenav", [["class", "sidenav mat-drawer mat-sidenav"], ["fixedInViewport", "true"], ["tabIndex", "-1"]], [[1, "role", 0], [40, "@transform", 0], [1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (i0.ɵnov(_v, 5)._animationStarted.next($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (i0.ɵnov(_v, 5)._animationEnd.next($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i8.View_MatSidenav_0, i8.RenderType_MatSidenav)), i0.ɵdid(5, 3325952, [[1, 4], ["drawer", 4]], 0, i9.MatSidenav, [i0.ElementRef, i4.FocusTrapFactory, i4.FocusMonitor, i3.Platform, i0.NgZone, [2, i12.DOCUMENT]], { mode: [0, "mode"], opened: [1, "opened"], fixedInViewport: [2, "fixedInViewport"] }, null), i0.ɵpid(131072, i12.AsyncPipe, [i0.ChangeDetectorRef]), i0.ɵpid(131072, i12.AsyncPipe, [i0.ChangeDetectorRef]), i0.ɵpid(131072, i12.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(9, 0, null, 0, 3, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, i13.View_MatToolbar_0, i13.RenderType_MatToolbar)), i0.ɵdid(10, 4243456, null, 1, i14.MatToolbar, [i0.ElementRef, i3.Platform, i12.DOCUMENT], null, null), i0.ɵqud(603979776, 3, { _toolbarRows: 1 }), (_l()(), i0.ɵted(-1, 0, ["Menu"])), (_l()(), i0.ɵeld(13, 0, null, 0, 19, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, i15.View_MatNavList_0, i15.RenderType_MatNavList)), i0.ɵdid(14, 704512, null, 0, i16.MatNavList, [], null, null), (_l()(), i0.ɵeld(15, 0, null, 0, 5, "a", [["class", "mat-list-item"], ["href", "#"], ["mat-list-item", ""]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, i15.View_MatListItem_0, i15.RenderType_MatListItem)), i0.ɵdid(16, 1228800, null, 3, i16.MatListItem, [i0.ElementRef, [2, i16.MatNavList], [2, i16.MatList], i0.ChangeDetectorRef], null, null), i0.ɵqud(603979776, 4, { _lines: 1 }), i0.ɵqud(335544320, 5, { _avatar: 0 }), i0.ɵqud(335544320, 6, { _icon: 0 }), (_l()(), i0.ɵted(-1, 2, ["Link 1"])), (_l()(), i0.ɵeld(21, 0, null, 0, 5, "a", [["class", "mat-list-item"], ["href", "#"], ["mat-list-item", ""]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, i15.View_MatListItem_0, i15.RenderType_MatListItem)), i0.ɵdid(22, 1228800, null, 3, i16.MatListItem, [i0.ElementRef, [2, i16.MatNavList], [2, i16.MatList], i0.ChangeDetectorRef], null, null), i0.ɵqud(603979776, 7, { _lines: 1 }), i0.ɵqud(335544320, 8, { _avatar: 0 }), i0.ɵqud(335544320, 9, { _icon: 0 }), (_l()(), i0.ɵted(-1, 2, ["Link 2"])), (_l()(), i0.ɵeld(27, 0, null, 0, 5, "a", [["class", "mat-list-item"], ["href", "#"], ["mat-list-item", ""]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, i15.View_MatListItem_0, i15.RenderType_MatListItem)), i0.ɵdid(28, 1228800, null, 3, i16.MatListItem, [i0.ElementRef, [2, i16.MatNavList], [2, i16.MatList], i0.ChangeDetectorRef], null, null), i0.ɵqud(603979776, 10, { _lines: 1 }), i0.ɵqud(335544320, 11, { _avatar: 0 }), i0.ɵqud(335544320, 12, { _icon: 0 }), (_l()(), i0.ɵted(-1, 2, ["Link 3"])), (_l()(), i0.ɵeld(33, 0, null, 1, 9, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, i8.View_MatSidenavContent_0, i8.RenderType_MatSidenavContent)), i0.ɵdid(34, 1294336, [[2, 4]], 0, i9.MatSidenavContent, [i0.ChangeDetectorRef, i9.MatSidenavContainer, i0.ElementRef, i11.ScrollDispatcher, i0.NgZone], null, null), (_l()(), i0.ɵeld(35, 0, null, 0, 7, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, i13.View_MatToolbar_0, i13.RenderType_MatToolbar)), i0.ɵdid(36, 4243456, null, 1, i14.MatToolbar, [i0.ElementRef, i3.Platform, i12.DOCUMENT], { color: [0, "color"] }, null), i0.ɵqud(603979776, 13, { _toolbarRows: 1 }), (_l()(), i0.ɵand(16777216, null, 0, 2, null, View_MainNavComponent_1)), i0.ɵdid(39, 16384, null, 0, i12.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵpid(131072, i12.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(41, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["main-bar"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_11 = (i0.ɵunv(_v, 5, 0, i0.ɵnov(_v, 6).transform(_co.isHandset$)) ? "over" : "side"); var currVal_12 = !i0.ɵunv(_v, 5, 1, i0.ɵnov(_v, 7).transform(_co.isHandset$)); var currVal_13 = "true"; _ck(_v, 5, 0, currVal_11, currVal_12, currVal_13); _ck(_v, 34, 0); var currVal_26 = "primary"; _ck(_v, 36, 0, currVal_26); var currVal_27 = i0.ɵunv(_v, 39, 0, i0.ɵnov(_v, 40).transform(_co.isHandset$)); _ck(_v, 39, 0, currVal_27); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 1)._backdropOverride; _ck(_v, 0, 0, currVal_0); var currVal_1 = (i0.ɵunv(_v, 4, 0, i0.ɵnov(_v, 8).transform(_co.isHandset$)) ? "dialog" : "navigation"); var currVal_2 = i0.ɵnov(_v, 5)._animationState; var currVal_3 = null; var currVal_4 = (i0.ɵnov(_v, 5).position === "end"); var currVal_5 = (i0.ɵnov(_v, 5).mode === "over"); var currVal_6 = (i0.ɵnov(_v, 5).mode === "push"); var currVal_7 = (i0.ɵnov(_v, 5).mode === "side"); var currVal_8 = i0.ɵnov(_v, 5).fixedInViewport; var currVal_9 = (i0.ɵnov(_v, 5).fixedInViewport ? i0.ɵnov(_v, 5).fixedTopGap : null); var currVal_10 = (i0.ɵnov(_v, 5).fixedInViewport ? i0.ɵnov(_v, 5).fixedBottomGap : null); _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_14 = (i0.ɵnov(_v, 10)._toolbarRows.length > 0); var currVal_15 = (i0.ɵnov(_v, 10)._toolbarRows.length === 0); _ck(_v, 9, 0, currVal_14, currVal_15); var currVal_16 = (i0.ɵnov(_v, 16)._avatar || i0.ɵnov(_v, 16)._icon); var currVal_17 = (i0.ɵnov(_v, 16)._avatar || i0.ɵnov(_v, 16)._icon); _ck(_v, 15, 0, currVal_16, currVal_17); var currVal_18 = (i0.ɵnov(_v, 22)._avatar || i0.ɵnov(_v, 22)._icon); var currVal_19 = (i0.ɵnov(_v, 22)._avatar || i0.ɵnov(_v, 22)._icon); _ck(_v, 21, 0, currVal_18, currVal_19); var currVal_20 = (i0.ɵnov(_v, 28)._avatar || i0.ɵnov(_v, 28)._icon); var currVal_21 = (i0.ɵnov(_v, 28)._avatar || i0.ɵnov(_v, 28)._icon); _ck(_v, 27, 0, currVal_20, currVal_21); var currVal_22 = i0.ɵnov(_v, 34)._container._contentMargins.left; var currVal_23 = i0.ɵnov(_v, 34)._container._contentMargins.right; _ck(_v, 33, 0, currVal_22, currVal_23); var currVal_24 = (i0.ɵnov(_v, 36)._toolbarRows.length > 0); var currVal_25 = (i0.ɵnov(_v, 36)._toolbarRows.length === 0); _ck(_v, 35, 0, currVal_24, currVal_25); }); }
export function View_MainNavComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-main-nav", [], null, null, null, View_MainNavComponent_0, RenderType_MainNavComponent)), i0.ɵdid(1, 49152, null, 0, i17.MainNavComponent, [i18.BreakpointObserver], null, null)], null, null); }
var MainNavComponentNgFactory = i0.ɵccf("app-main-nav", i17.MainNavComponent, View_MainNavComponent_Host_0, { message: "message" }, {}, []);
export { MainNavComponentNgFactory as MainNavComponentNgFactory };
