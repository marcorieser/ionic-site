/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import83 from '@angular/core/src/linker/view';
import * as import85 from '@angular/core/src/linker/view_utils';
import * as import89 from '@angular/core/src/linker/component_factory';
import * as import90 from '../components/nav/nav';
import * as import91 from '../components/nav/nav.ngfactory';
import * as import96 from '../components/toolbar/toolbar.ngfactory';
import * as import97 from '../components/navbar/navbar';
import * as import98 from '../components/navbar/navbar.ngfactory';
import * as import99 from '../components/toolbar/toolbar-title';
import * as import100 from '../components/toolbar/toolbar-title.ngfactory';
import * as import101 from '../components/content/content';
import * as import102 from '../components/content/content.ngfactory';
import * as import103 from '../components/button/button';
import * as import104 from '../components/button/button.ngfactory';
export declare const AppModuleNgFactory: import0.NgModuleFactory<import1.AppModule>;
export declare class Wrapper_ApiDemoApp {
    _eventHandler: Function;
    context: import1.ApiDemoApp;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import83.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import83.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_ApiDemoPage {
    _eventHandler: Function;
    context: import1.ApiDemoPage;
    _changed: boolean;
    constructor(p0: any, p1: any);
    ngOnDetach(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import83.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import83.AppView<any>, _eventHandler: any): void;
}
export declare const ApiDemoAppNgFactory: import89.ComponentFactory<import1.ApiDemoApp>;
export declare class View_ApiDemoApp0 extends import83.AppView<import1.ApiDemoApp> {
    _el_0: any;
    compView_0: import83.AppView<import90.Nav>;
    _Nav_0_3: import91.Wrapper_Nav;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
}
export declare const ApiDemoPageNgFactory: import89.ComponentFactory<import1.ApiDemoPage>;
export declare class View_ApiDemoPage0 extends import83.AppView<import1.ApiDemoPage> {
    _el_0: any;
    _Header_0_3: import96.Wrapper_Header;
    _text_1: any;
    _el_2: any;
    compView_2: import83.AppView<import97.Navbar>;
    _Navbar_2_3: import98.Wrapper_Navbar;
    _text_3: any;
    _el_4: any;
    compView_4: import83.AppView<import99.ToolbarTitle>;
    _ToolbarTitle_4_3: import100.Wrapper_ToolbarTitle;
    _text_5: any;
    _text_6: any;
    _text_7: any;
    _text_8: any;
    _el_9: any;
    compView_9: import83.AppView<import101.Content>;
    _Content_9_3: import102.Wrapper_Content;
    _text_10: any;
    _el_11: any;
    compView_11: import83.AppView<import103.Button>;
    _Button_11_3: import104.Wrapper_Button;
    _text_12: any;
    _text_13: any;
    _text_14: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    handleEvent_11(eventName: string, $event: any): boolean;
}
