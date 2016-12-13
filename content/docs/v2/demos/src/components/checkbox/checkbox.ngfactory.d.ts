/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './checkbox';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import13 from '../button/button';
import * as import14 from '../button/button.ngfactory';
export declare class Wrapper_Checkbox {
    _eventHandler: Function;
    context: import0.Checkbox;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    subscription0: any;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_color(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_mode(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_checked(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_disabled(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean): void;
}
export declare const CheckboxNgFactory: import7.ComponentFactory<import0.Checkbox>;
export declare class View_Checkbox0 extends import2.AppView<import0.Checkbox> {
    _el_0: any;
    _el_1: any;
    _el_2: any;
    compView_2: import2.AppView<import13.Button>;
    _Button_2_3: import14.Wrapper_Button;
    _text_3: any;
    _expr_6: any;
    _expr_7: any;
    _expr_8: any;
    _expr_9: any;
    _expr_10: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
}
