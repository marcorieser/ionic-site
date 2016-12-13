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
import * as import97 from '../components/toolbar/toolbar';
import * as import98 from '../components/toolbar/toolbar-title';
import * as import99 from '../components/toolbar/toolbar-title.ngfactory';
import * as import100 from '../components/content/content';
import * as import101 from '../components/content/content.ngfactory';
import * as import102 from '@angular/core/src/linker/view_container';
import * as import103 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import104 from '../components/fab/fab';
import * as import105 from '../components/fab/fab.ngfactory';
import * as import106 from '@angular/core/src/linker/query_list';
import * as import107 from '../components/icon/icon.ngfactory';
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
    compView_2: import83.AppView<import97.Toolbar>;
    _Toolbar_2_3: import96.Wrapper_Toolbar;
    _text_3: any;
    _el_4: any;
    compView_4: import83.AppView<import98.ToolbarTitle>;
    _ToolbarTitle_4_3: import99.Wrapper_ToolbarTitle;
    _text_5: any;
    _text_6: any;
    _text_7: any;
    _text_8: any;
    _el_9: any;
    compView_9: import83.AppView<import100.Content>;
    _Content_9_3: import101.Wrapper_Content;
    _text_10: any;
    _el_11: any;
    _text_12: any;
    _el_13: any;
    _text_14: any;
    _anchor_15: any;
    _vc_15: import102.ViewContainer;
    _TemplateRef_15_5: any;
    _NgFor_15_6: import103.Wrapper_NgFor;
    _text_16: any;
    _el_17: any;
    compView_17: import83.AppView<import104.FabContainer>;
    _FabContainer_17_3: import105.Wrapper_FabContainer;
    _query_FabButton_17_0: import106.QueryList<any>;
    _query_FabList_17_1: import106.QueryList<any>;
    _text_18: any;
    _el_19: any;
    compView_19: import83.AppView<import104.FabButton>;
    _FabButton_19_3: import105.Wrapper_FabButton;
    _el_20: any;
    _Icon_20_3: import107.Wrapper_Icon;
    _text_21: any;
    _el_22: any;
    _FabList_22_3: import105.Wrapper_FabList;
    _query_FabButton_22_0: import106.QueryList<any>;
    _text_23: any;
    _el_24: any;
    compView_24: import83.AppView<import104.FabButton>;
    _FabButton_24_3: import105.Wrapper_FabButton;
    _el_25: any;
    _Icon_25_3: import107.Wrapper_Icon;
    _text_26: any;
    _el_27: any;
    compView_27: import83.AppView<import104.FabButton>;
    _FabButton_27_3: import105.Wrapper_FabButton;
    _el_28: any;
    _Icon_28_3: import107.Wrapper_Icon;
    _text_29: any;
    _el_30: any;
    compView_30: import83.AppView<import104.FabButton>;
    _FabButton_30_3: import105.Wrapper_FabButton;
    _el_31: any;
    _Icon_31_3: import107.Wrapper_Icon;
    _text_32: any;
    _el_33: any;
    compView_33: import83.AppView<import104.FabButton>;
    _FabButton_33_3: import105.Wrapper_FabButton;
    _el_34: any;
    _Icon_34_3: import107.Wrapper_Icon;
    _text_35: any;
    _text_36: any;
    _text_37: any;
    _el_38: any;
    compView_38: import83.AppView<import104.FabContainer>;
    _FabContainer_38_3: import105.Wrapper_FabContainer;
    _query_FabButton_38_0: import106.QueryList<any>;
    _query_FabList_38_1: import106.QueryList<any>;
    _text_39: any;
    _el_40: any;
    compView_40: import83.AppView<import104.FabButton>;
    _FabButton_40_3: import105.Wrapper_FabButton;
    _el_41: any;
    _Icon_41_3: import107.Wrapper_Icon;
    _text_42: any;
    _el_43: any;
    _FabList_43_3: import105.Wrapper_FabList;
    _query_FabButton_43_0: import106.QueryList<any>;
    _text_44: any;
    _el_45: any;
    compView_45: import83.AppView<import104.FabButton>;
    _FabButton_45_3: import105.Wrapper_FabButton;
    _el_46: any;
    _Icon_46_3: import107.Wrapper_Icon;
    _text_47: any;
    _el_48: any;
    compView_48: import83.AppView<import104.FabButton>;
    _FabButton_48_3: import105.Wrapper_FabButton;
    _el_49: any;
    _Icon_49_3: import107.Wrapper_Icon;
    _text_50: any;
    _el_51: any;
    compView_51: import83.AppView<import104.FabButton>;
    _FabButton_51_3: import105.Wrapper_FabButton;
    _el_52: any;
    _Icon_52_3: import107.Wrapper_Icon;
    _text_53: any;
    _el_54: any;
    compView_54: import83.AppView<import104.FabButton>;
    _FabButton_54_3: import105.Wrapper_FabButton;
    _el_55: any;
    _Icon_55_3: import107.Wrapper_Icon;
    _text_56: any;
    _text_57: any;
    _text_58: any;
    _el_59: any;
    compView_59: import83.AppView<import104.FabContainer>;
    _FabContainer_59_3: import105.Wrapper_FabContainer;
    _query_FabButton_59_0: import106.QueryList<any>;
    _query_FabList_59_1: import106.QueryList<any>;
    _text_60: any;
    _el_61: any;
    compView_61: import83.AppView<import104.FabButton>;
    _FabButton_61_3: import105.Wrapper_FabButton;
    _el_62: any;
    _Icon_62_3: import107.Wrapper_Icon;
    _text_63: any;
    _el_64: any;
    _FabList_64_3: import105.Wrapper_FabList;
    _query_FabButton_64_0: import106.QueryList<any>;
    _text_65: any;
    _el_66: any;
    compView_66: import83.AppView<import104.FabButton>;
    _FabButton_66_3: import105.Wrapper_FabButton;
    _el_67: any;
    _Icon_67_3: import107.Wrapper_Icon;
    _text_68: any;
    _el_69: any;
    compView_69: import83.AppView<import104.FabButton>;
    _FabButton_69_3: import105.Wrapper_FabButton;
    _el_70: any;
    _Icon_70_3: import107.Wrapper_Icon;
    _text_71: any;
    _el_72: any;
    compView_72: import83.AppView<import104.FabButton>;
    _FabButton_72_3: import105.Wrapper_FabButton;
    _el_73: any;
    _Icon_73_3: import107.Wrapper_Icon;
    _text_74: any;
    _el_75: any;
    compView_75: import83.AppView<import104.FabButton>;
    _FabButton_75_3: import105.Wrapper_FabButton;
    _el_76: any;
    _Icon_76_3: import107.Wrapper_Icon;
    _text_77: any;
    _text_78: any;
    _text_79: any;
    _el_80: any;
    compView_80: import83.AppView<import104.FabContainer>;
    _FabContainer_80_3: import105.Wrapper_FabContainer;
    _query_FabButton_80_0: import106.QueryList<any>;
    _query_FabList_80_1: import106.QueryList<any>;
    _text_81: any;
    _el_82: any;
    compView_82: import83.AppView<import104.FabButton>;
    _FabButton_82_3: import105.Wrapper_FabButton;
    _el_83: any;
    _Icon_83_3: import107.Wrapper_Icon;
    _text_84: any;
    _el_85: any;
    _FabList_85_3: import105.Wrapper_FabList;
    _query_FabButton_85_0: import106.QueryList<any>;
    _text_86: any;
    _el_87: any;
    compView_87: import83.AppView<import104.FabButton>;
    _FabButton_87_3: import105.Wrapper_FabButton;
    _el_88: any;
    _Icon_88_3: import107.Wrapper_Icon;
    _text_89: any;
    _el_90: any;
    compView_90: import83.AppView<import104.FabButton>;
    _FabButton_90_3: import105.Wrapper_FabButton;
    _el_91: any;
    _Icon_91_3: import107.Wrapper_Icon;
    _text_92: any;
    _el_93: any;
    compView_93: import83.AppView<import104.FabButton>;
    _FabButton_93_3: import105.Wrapper_FabButton;
    _el_94: any;
    _Icon_94_3: import107.Wrapper_Icon;
    _text_95: any;
    _el_96: any;
    compView_96: import83.AppView<import104.FabButton>;
    _FabButton_96_3: import105.Wrapper_FabButton;
    _el_97: any;
    _Icon_97_3: import107.Wrapper_Icon;
    _text_98: any;
    _text_99: any;
    _text_100: any;
    _el_101: any;
    compView_101: import83.AppView<import104.FabContainer>;
    _FabContainer_101_3: import105.Wrapper_FabContainer;
    _query_FabButton_101_0: import106.QueryList<any>;
    _query_FabList_101_1: import106.QueryList<any>;
    _text_102: any;
    _el_103: any;
    compView_103: import83.AppView<import104.FabButton>;
    _FabButton_103_3: import105.Wrapper_FabButton;
    _el_104: any;
    _Icon_104_3: import107.Wrapper_Icon;
    _text_105: any;
    _el_106: any;
    _FabList_106_3: import105.Wrapper_FabList;
    _query_FabButton_106_0: import106.QueryList<any>;
    _text_107: any;
    _el_108: any;
    compView_108: import83.AppView<import104.FabButton>;
    _FabButton_108_3: import105.Wrapper_FabButton;
    _el_109: any;
    _Icon_109_3: import107.Wrapper_Icon;
    _text_110: any;
    _text_111: any;
    _el_112: any;
    _FabList_112_3: import105.Wrapper_FabList;
    _query_FabButton_112_0: import106.QueryList<any>;
    _text_113: any;
    _el_114: any;
    compView_114: import83.AppView<import104.FabButton>;
    _FabButton_114_3: import105.Wrapper_FabButton;
    _el_115: any;
    _Icon_115_3: import107.Wrapper_Icon;
    _text_116: any;
    _text_117: any;
    _el_118: any;
    _FabList_118_3: import105.Wrapper_FabList;
    _query_FabButton_118_0: import106.QueryList<any>;
    _text_119: any;
    _el_120: any;
    compView_120: import83.AppView<import104.FabButton>;
    _FabButton_120_3: import105.Wrapper_FabButton;
    _el_121: any;
    _Icon_121_3: import107.Wrapper_Icon;
    _text_122: any;
    _text_123: any;
    _el_124: any;
    _FabList_124_3: import105.Wrapper_FabList;
    _query_FabButton_124_0: import106.QueryList<any>;
    _text_125: any;
    _el_126: any;
    compView_126: import83.AppView<import104.FabButton>;
    _FabButton_126_3: import105.Wrapper_FabButton;
    _el_127: any;
    _Icon_127_3: import107.Wrapper_Icon;
    _text_128: any;
    _text_129: any;
    _text_130: any;
    _el_131: any;
    compView_131: import83.AppView<import104.FabContainer>;
    _FabContainer_131_3: import105.Wrapper_FabContainer;
    _query_FabButton_131_0: import106.QueryList<any>;
    _query_FabList_131_1: import106.QueryList<any>;
    _text_132: any;
    _el_133: any;
    compView_133: import83.AppView<import104.FabButton>;
    _FabButton_133_3: import105.Wrapper_FabButton;
    _el_134: any;
    _Icon_134_3: import107.Wrapper_Icon;
    _text_135: any;
    _text_136: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    createEmbeddedViewInternal(nodeIndex: number): import83.AppView<any>;
    handleEvent_19(eventName: string, $event: any): boolean;
    handleEvent_24(eventName: string, $event: any): boolean;
    handleEvent_27(eventName: string, $event: any): boolean;
    handleEvent_30(eventName: string, $event: any): boolean;
    handleEvent_33(eventName: string, $event: any): boolean;
    handleEvent_45(eventName: string, $event: any): boolean;
    handleEvent_48(eventName: string, $event: any): boolean;
    handleEvent_51(eventName: string, $event: any): boolean;
    handleEvent_54(eventName: string, $event: any): boolean;
    handleEvent_66(eventName: string, $event: any): boolean;
    handleEvent_69(eventName: string, $event: any): boolean;
    handleEvent_72(eventName: string, $event: any): boolean;
    handleEvent_75(eventName: string, $event: any): boolean;
    handleEvent_87(eventName: string, $event: any): boolean;
    handleEvent_90(eventName: string, $event: any): boolean;
    handleEvent_93(eventName: string, $event: any): boolean;
    handleEvent_96(eventName: string, $event: any): boolean;
    handleEvent_103(eventName: string, $event: any): boolean;
    handleEvent_108(eventName: string, $event: any): boolean;
    handleEvent_114(eventName: string, $event: any): boolean;
    handleEvent_120(eventName: string, $event: any): boolean;
    handleEvent_126(eventName: string, $event: any): boolean;
    handleEvent_133(eventName: string, $event: any): boolean;
}
