import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { createCustomElement } from '@angular/elements';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
var MainNavModule = /** @class */ (function () {
    function MainNavModule(injector) {
        this.injector = injector;
        var navView = createCustomElement(MainNavComponent, { injector: injector });
        customElements.define('main-nav', navView);
    }
    MainNavModule.prototype.ngDoBootstrap = function () { };
    MainNavModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MainNavComponent
                    ],
                    imports: [
                        BrowserModule,
                        BrowserAnimationsModule,
                        LayoutModule,
                        MatToolbarModule,
                        MatButtonModule,
                        MatSidenavModule,
                        MatIconModule,
                        MatListModule
                    ],
                    providers: [],
                    bootstrap: [MainNavComponent],
                    entryComponents: [MainNavComponent]
                },] },
    ];
    /** @nocollapse */
    MainNavModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return MainNavModule;
}());
export { MainNavModule };
