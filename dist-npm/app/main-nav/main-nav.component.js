import { Component, ViewEncapsulation, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.nav = function (product) {
        console.log('Product is out of Stock.');
    };
    Object.defineProperty(MainNavComponent.prototype, "message", {
        get: function () { return this._message; },
        set: function (message) {
            console.log('CHEGOU !!!!');
        },
        enumerable: true,
        configurable: true
    });
    MainNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-main-nav',
                    template: "\n    <mat-sidenav-container class=\"sidenav-container\">\n      <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n          [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n          [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n          [opened]=\"!(isHandset$ | async)\">\n        <mat-toolbar>Menu</mat-toolbar>\n        <mat-nav-list>\n          <a mat-list-item href=\"#\">Link 1</a>\n          <a mat-list-item href=\"#\">Link 2</a>\n          <a mat-list-item href=\"#\">Link 3</a>\n        </mat-nav-list>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n          <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n            <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </button>\n          <span>main-bar</span>\n        </mat-toolbar>\n        <!-- Add Content Here -->\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  ",
                    styles: ["\n    .sidenav-container {\n      height: 100%;\n    }\n\n    .sidenav {\n      width: 200px;\n    }\n\n    .sidenav .mat-toolbar {\n      background: inherit;\n    }\n\n    .mat-toolbar.mat-primary {\n      position: sticky;\n      top: 0;\n      z-index: 1;\n    }\n  "],
                    encapsulation: ViewEncapsulation.Emulated
                },] },
    ];
    /** @nocollapse */
    MainNavComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    MainNavComponent.propDecorators = {
        message: [{ type: Input }]
    };
    return MainNavComponent;
}());
export { MainNavComponent };
