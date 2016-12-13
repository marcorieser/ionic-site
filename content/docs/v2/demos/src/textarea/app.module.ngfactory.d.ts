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
import * as import103 from '../components/list/list.ngfactory';
import * as import104 from '../components/item/item';
import * as import105 from '../components/item/item.ngfactory';
import * as import106 from '@angular/core/src/linker/query_list';
import * as import107 from '../components/label/label.ngfactory';
import * as import108 from '../components/input/input';
import * as import109 from '../components/input/input.ngfactory';
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
    constructor();
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
    _List_11_3: import103.Wrapper_List;
    _text_12: any;
    _el_13: any;
    compView_13: import83.AppView<import104.Item>;
    _Item_13_3: import105.Wrapper_Item;
    _ItemContent_13_4: import105.Wrapper_ItemContent;
    _query_Label_13_0: import106.QueryList<any>;
    _query_Button_13_1: import106.QueryList<any>;
    _query_Icon_13_2: import106.QueryList<any>;
    _text_14: any;
    _el_15: any;
    _Label_15_3: import107.Wrapper_Label;
    _text_16: any;
    _text_17: any;
    _el_18: any;
    compView_18: import83.AppView<import108.TextArea>;
    _TextArea_18_3: import109.Wrapper_TextArea;
    _text_19: any;
    _text_20: any;
    _el_21: any;
    compView_21: import83.AppView<import104.Item>;
    _Item_21_3: import105.Wrapper_Item;
    _ItemContent_21_4: import105.Wrapper_ItemContent;
    _query_Label_21_0: import106.QueryList<any>;
    _query_Button_21_1: import106.QueryList<any>;
    _query_Icon_21_2: import106.QueryList<any>;
    _text_22: any;
    _el_23: any;
    _Label_23_3: import107.Wrapper_Label;
    _text_24: any;
    _text_25: any;
    _el_26: any;
    compView_26: import83.AppView<import108.TextArea>;
    _TextArea_26_3: import109.Wrapper_TextArea;
    _text_27: any;
    _text_28: any;
    _el_29: any;
    compView_29: import83.AppView<import104.Item>;
    _Item_29_3: import105.Wrapper_Item;
    _ItemContent_29_4: import105.Wrapper_ItemContent;
    _query_Label_29_0: import106.QueryList<any>;
    _query_Button_29_1: import106.QueryList<any>;
    _query_Icon_29_2: import106.QueryList<any>;
    _text_30: any;
    _el_31: any;
    compView_31: import83.AppView<import108.TextArea>;
    _TextArea_31_3: import109.Wrapper_TextArea;
    _text_32: any;
    _text_33: any;
    _el_34: any;
    compView_34: import83.AppView<import104.Item>;
    _Item_34_3: import105.Wrapper_Item;
    _ItemContent_34_4: import105.Wrapper_ItemContent;
    _query_Label_34_0: import106.QueryList<any>;
    _query_Button_34_1: import106.QueryList<any>;
    _query_Icon_34_2: import106.QueryList<any>;
    _text_35: any;
    _el_36: any;
    _Label_36_3: import107.Wrapper_Label;
    _text_37: any;
    _text_38: any;
    _el_39: any;
    compView_39: import83.AppView<import108.TextArea>;
    _TextArea_39_3: import109.Wrapper_TextArea;
    _text_40: any;
    _text_41: any;
    _el_42: any;
    compView_42: import83.AppView<import104.Item>;
    _Item_42_3: import105.Wrapper_Item;
    _ItemContent_42_4: import105.Wrapper_ItemContent;
    _query_Label_42_0: import106.QueryList<any>;
    _query_Button_42_1: import106.QueryList<any>;
    _query_Icon_42_2: import106.QueryList<any>;
    _text_43: any;
    _el_44: any;
    _Label_44_3: import107.Wrapper_Label;
    _text_45: any;
    _text_46: any;
    _el_47: any;
    compView_47: import83.AppView<import108.TextArea>;
    _TextArea_47_3: import109.Wrapper_TextArea;
    _text_48: any;
    _text_49: any;
    _text_50: any;
    _text_51: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
}
