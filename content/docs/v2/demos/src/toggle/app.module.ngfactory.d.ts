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
import * as import108 from '../components/toggle/toggle';
import * as import109 from '../components/toggle/toggle.ngfactory';
import * as import110 from '../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import111 from '../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
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
    compView_18: import83.AppView<import108.Toggle>;
    _Toggle_18_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_18_4: any[];
    _NgModel_18_5: import110.Wrapper_NgModel;
    _NgControl_18_6: any;
    _NgControlStatus_18_7: import111.Wrapper_NgControlStatus;
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
    compView_26: import83.AppView<import108.Toggle>;
    _Toggle_26_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_26_4: any[];
    _NgModel_26_5: import110.Wrapper_NgModel;
    _NgControl_26_6: any;
    _NgControlStatus_26_7: import111.Wrapper_NgControlStatus;
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
    _Label_31_3: import107.Wrapper_Label;
    _text_32: any;
    _text_33: any;
    _el_34: any;
    compView_34: import83.AppView<import108.Toggle>;
    _Toggle_34_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_34_4: any[];
    _NgModel_34_5: import110.Wrapper_NgModel;
    _NgControl_34_6: any;
    _NgControlStatus_34_7: import111.Wrapper_NgControlStatus;
    _text_35: any;
    _text_36: any;
    _el_37: any;
    compView_37: import83.AppView<import104.Item>;
    _Item_37_3: import105.Wrapper_Item;
    _ItemContent_37_4: import105.Wrapper_ItemContent;
    _query_Label_37_0: import106.QueryList<any>;
    _query_Button_37_1: import106.QueryList<any>;
    _query_Icon_37_2: import106.QueryList<any>;
    _text_38: any;
    _el_39: any;
    _Label_39_3: import107.Wrapper_Label;
    _text_40: any;
    _text_41: any;
    _el_42: any;
    compView_42: import83.AppView<import108.Toggle>;
    _Toggle_42_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_42_4: any[];
    _NgModel_42_5: import110.Wrapper_NgModel;
    _NgControl_42_6: any;
    _NgControlStatus_42_7: import111.Wrapper_NgControlStatus;
    _text_43: any;
    _text_44: any;
    _el_45: any;
    compView_45: import83.AppView<import104.Item>;
    _Item_45_3: import105.Wrapper_Item;
    _ItemContent_45_4: import105.Wrapper_ItemContent;
    _query_Label_45_0: import106.QueryList<any>;
    _query_Button_45_1: import106.QueryList<any>;
    _query_Icon_45_2: import106.QueryList<any>;
    _text_46: any;
    _el_47: any;
    _Label_47_3: import107.Wrapper_Label;
    _text_48: any;
    _text_49: any;
    _el_50: any;
    compView_50: import83.AppView<import108.Toggle>;
    _Toggle_50_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_50_4: any[];
    _NgModel_50_5: import110.Wrapper_NgModel;
    _NgControl_50_6: any;
    _NgControlStatus_50_7: import111.Wrapper_NgControlStatus;
    _text_51: any;
    _text_52: any;
    _el_53: any;
    compView_53: import83.AppView<import104.Item>;
    _Item_53_3: import105.Wrapper_Item;
    _ItemContent_53_4: import105.Wrapper_ItemContent;
    _query_Label_53_0: import106.QueryList<any>;
    _query_Button_53_1: import106.QueryList<any>;
    _query_Icon_53_2: import106.QueryList<any>;
    _text_54: any;
    _el_55: any;
    _Label_55_3: import107.Wrapper_Label;
    _text_56: any;
    _text_57: any;
    _el_58: any;
    compView_58: import83.AppView<import108.Toggle>;
    _Toggle_58_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_58_4: any[];
    _NgModel_58_5: import110.Wrapper_NgModel;
    _NgControl_58_6: any;
    _NgControlStatus_58_7: import111.Wrapper_NgControlStatus;
    _text_59: any;
    _text_60: any;
    _el_61: any;
    compView_61: import83.AppView<import104.Item>;
    _Item_61_3: import105.Wrapper_Item;
    _ItemContent_61_4: import105.Wrapper_ItemContent;
    _query_Label_61_0: import106.QueryList<any>;
    _query_Button_61_1: import106.QueryList<any>;
    _query_Icon_61_2: import106.QueryList<any>;
    _text_62: any;
    _el_63: any;
    _Label_63_3: import107.Wrapper_Label;
    _text_64: any;
    _text_65: any;
    _el_66: any;
    compView_66: import83.AppView<import108.Toggle>;
    _Toggle_66_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_66_4: any[];
    _NgModel_66_5: import110.Wrapper_NgModel;
    _NgControl_66_6: any;
    _NgControlStatus_66_7: import111.Wrapper_NgControlStatus;
    _text_67: any;
    _text_68: any;
    _el_69: any;
    compView_69: import83.AppView<import104.Item>;
    _Item_69_3: import105.Wrapper_Item;
    _ItemContent_69_4: import105.Wrapper_ItemContent;
    _query_Label_69_0: import106.QueryList<any>;
    _query_Button_69_1: import106.QueryList<any>;
    _query_Icon_69_2: import106.QueryList<any>;
    _text_70: any;
    _el_71: any;
    _Label_71_3: import107.Wrapper_Label;
    _text_72: any;
    _text_73: any;
    _el_74: any;
    compView_74: import83.AppView<import108.Toggle>;
    _Toggle_74_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_74_4: any[];
    _NgModel_74_5: import110.Wrapper_NgModel;
    _NgControl_74_6: any;
    _NgControlStatus_74_7: import111.Wrapper_NgControlStatus;
    _text_75: any;
    _text_76: any;
    _el_77: any;
    compView_77: import83.AppView<import104.Item>;
    _Item_77_3: import105.Wrapper_Item;
    _ItemContent_77_4: import105.Wrapper_ItemContent;
    _query_Label_77_0: import106.QueryList<any>;
    _query_Button_77_1: import106.QueryList<any>;
    _query_Icon_77_2: import106.QueryList<any>;
    _text_78: any;
    _el_79: any;
    _Label_79_3: import107.Wrapper_Label;
    _text_80: any;
    _text_81: any;
    _el_82: any;
    compView_82: import83.AppView<import108.Toggle>;
    _Toggle_82_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_82_4: any[];
    _NgModel_82_5: import110.Wrapper_NgModel;
    _NgControl_82_6: any;
    _NgControlStatus_82_7: import111.Wrapper_NgControlStatus;
    _text_83: any;
    _text_84: any;
    _el_85: any;
    compView_85: import83.AppView<import104.Item>;
    _Item_85_3: import105.Wrapper_Item;
    _ItemContent_85_4: import105.Wrapper_ItemContent;
    _query_Label_85_0: import106.QueryList<any>;
    _query_Button_85_1: import106.QueryList<any>;
    _query_Icon_85_2: import106.QueryList<any>;
    _text_86: any;
    _el_87: any;
    _Label_87_3: import107.Wrapper_Label;
    _text_88: any;
    _text_89: any;
    _el_90: any;
    compView_90: import83.AppView<import108.Toggle>;
    _Toggle_90_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_90_4: any[];
    _NgModel_90_5: import110.Wrapper_NgModel;
    _NgControl_90_6: any;
    _NgControlStatus_90_7: import111.Wrapper_NgControlStatus;
    _text_91: any;
    _text_92: any;
    _el_93: any;
    compView_93: import83.AppView<import104.Item>;
    _Item_93_3: import105.Wrapper_Item;
    _ItemContent_93_4: import105.Wrapper_ItemContent;
    _query_Label_93_0: import106.QueryList<any>;
    _query_Button_93_1: import106.QueryList<any>;
    _query_Icon_93_2: import106.QueryList<any>;
    _text_94: any;
    _el_95: any;
    _Label_95_3: import107.Wrapper_Label;
    _text_96: any;
    _text_97: any;
    _el_98: any;
    compView_98: import83.AppView<import108.Toggle>;
    _Toggle_98_3: import109.Wrapper_Toggle;
    _NG_VALUE_ACCESSOR_98_4: any[];
    _NgModel_98_5: import110.Wrapper_NgModel;
    _NgControl_98_6: any;
    _NgControlStatus_98_7: import111.Wrapper_NgControlStatus;
    _text_99: any;
    _text_100: any;
    _text_101: any;
    _text_102: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    handleEvent_18(eventName: string, $event: any): boolean;
    handleEvent_26(eventName: string, $event: any): boolean;
    handleEvent_34(eventName: string, $event: any): boolean;
    handleEvent_42(eventName: string, $event: any): boolean;
    handleEvent_50(eventName: string, $event: any): boolean;
    handleEvent_58(eventName: string, $event: any): boolean;
    handleEvent_66(eventName: string, $event: any): boolean;
    handleEvent_74(eventName: string, $event: any): boolean;
    handleEvent_82(eventName: string, $event: any): boolean;
    handleEvent_90(eventName: string, $event: any): boolean;
    handleEvent_98(eventName: string, $event: any): boolean;
}
