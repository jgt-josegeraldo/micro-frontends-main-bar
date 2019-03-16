import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
export declare class MainNavComponent {
    private breakpointObserver;
    _message: string;
    isHandset$: Observable<boolean>;
    constructor(breakpointObserver: BreakpointObserver);
    nav(product: any): void;
    message: string;
}
