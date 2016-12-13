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
import * as import106 from '../components/list/list-header.ngfactory';
import * as import107 from '@angular/core/src/linker/query_list';
import * as import108 from '../components/icon/icon.ngfactory';
import * as import109 from '../components/label/label.ngfactory';
import * as import110 from '../components/toggle/toggle';
import * as import111 from '../components/toggle/toggle.ngfactory';
import * as import112 from '../components/note/note.ngfactory';
import * as import113 from '../components/radio/radio-group.ngfactory';
import * as import114 from '../components/radio/radio-button';
import * as import115 from '../components/radio/radio-button.ngfactory';
import * as import116 from '../components/button/button';
import * as import117 from '../components/button/button.ngfactory';
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
    _ListHeader_13_4: import106.Wrapper_ListHeader;
    _query_Label_13_0: import107.QueryList<any>;
    _query_Button_13_1: import107.QueryList<any>;
    _query_Icon_13_2: import107.QueryList<any>;
    _text_14: any;
    _text_15: any;
    _el_16: any;
    compView_16: import83.AppView<import104.Item>;
    _Item_16_3: import105.Wrapper_Item;
    _ItemContent_16_4: import105.Wrapper_ItemContent;
    _query_Label_16_0: import107.QueryList<any>;
    _query_Button_16_1: import107.QueryList<any>;
    _query_Icon_16_2: import107.QueryList<any>;
    _text_17: any;
    _el_18: any;
    _Icon_18_3: import108.Wrapper_Icon;
    _text_19: any;
    _el_20: any;
    _Label_20_3: import109.Wrapper_Label;
    _text_21: any;
    _text_22: any;
    _el_23: any;
    compView_23: import83.AppView<import110.Toggle>;
    _Toggle_23_3: import111.Wrapper_Toggle;
    __NG_VALUE_ACCESSOR_23_4: any[];
    _text_24: any;
    _text_25: any;
    _el_26: any;
    compView_26: import83.AppView<import104.Item>;
    _Item_26_3: import105.Wrapper_Item;
    _ItemContent_26_4: import105.Wrapper_ItemContent;
    _query_Label_26_0: import107.QueryList<any>;
    _query_Button_26_1: import107.QueryList<any>;
    _query_Icon_26_2: import107.QueryList<any>;
    _text_27: any;
    _el_28: any;
    _Icon_28_3: import108.Wrapper_Icon;
    _text_29: any;
    _el_30: any;
    _Label_30_3: import109.Wrapper_Label;
    _text_31: any;
    _text_32: any;
    _el_33: any;
    _Note_33_3: import112.Wrapper_Note;
    _text_34: any;
    _text_35: any;
    _text_36: any;
    _el_37: any;
    compView_37: import83.AppView<import104.Item>;
    _Item_37_3: import105.Wrapper_Item;
    _ItemContent_37_4: import105.Wrapper_ItemContent;
    _query_Label_37_0: import107.QueryList<any>;
    _query_Button_37_1: import107.QueryList<any>;
    _query_Icon_37_2: import107.QueryList<any>;
    _text_38: any;
    _el_39: any;
    _Icon_39_3: import108.Wrapper_Icon;
    _text_40: any;
    _el_41: any;
    _Label_41_3: import109.Wrapper_Label;
    _text_42: any;
    _text_43: any;
    _el_44: any;
    _Note_44_3: import112.Wrapper_Note;
    _text_45: any;
    _text_46: any;
    _text_47: any;
    _el_48: any;
    compView_48: import83.AppView<import104.Item>;
    _Item_48_3: import105.Wrapper_Item;
    _ItemContent_48_4: import105.Wrapper_ItemContent;
    _query_Label_48_0: import107.QueryList<any>;
    _query_Button_48_1: import107.QueryList<any>;
    _query_Icon_48_2: import107.QueryList<any>;
    _text_49: any;
    _el_50: any;
    _Icon_50_3: import108.Wrapper_Icon;
    _text_51: any;
    _el_52: any;
    _Label_52_3: import109.Wrapper_Label;
    _text_53: any;
    _text_54: any;
    _text_55: any;
    _el_56: any;
    compView_56: import83.AppView<import104.Item>;
    _Item_56_3: import105.Wrapper_Item;
    _ItemContent_56_4: import105.Wrapper_ItemContent;
    _query_Label_56_0: import107.QueryList<any>;
    _query_Button_56_1: import107.QueryList<any>;
    _query_Icon_56_2: import107.QueryList<any>;
    _text_57: any;
    _el_58: any;
    _Icon_58_3: import108.Wrapper_Icon;
    _text_59: any;
    _el_60: any;
    _Label_60_3: import109.Wrapper_Label;
    _text_61: any;
    _text_62: any;
    _el_63: any;
    _Note_63_3: import112.Wrapper_Note;
    _text_64: any;
    _text_65: any;
    _text_66: any;
    _text_67: any;
    _el_68: any;
    _List_68_3: import103.Wrapper_List;
    _RadioGroup_68_4: import113.Wrapper_RadioGroup;
    __NG_VALUE_ACCESSOR_68_5: any[];
    _query_ListHeader_68_0: import107.QueryList<any>;
    _text_69: any;
    _el_70: any;
    compView_70: import83.AppView<import104.Item>;
    _Item_70_3: import105.Wrapper_Item;
    _ListHeader_70_4: import106.Wrapper_ListHeader;
    _query_Label_70_0: import107.QueryList<any>;
    _query_Button_70_1: import107.QueryList<any>;
    _query_Icon_70_2: import107.QueryList<any>;
    _text_71: any;
    _text_72: any;
    _el_73: any;
    compView_73: import83.AppView<import104.Item>;
    _Item_73_3: import105.Wrapper_Item;
    _ItemContent_73_4: import105.Wrapper_ItemContent;
    _query_Label_73_0: import107.QueryList<any>;
    _query_Button_73_1: import107.QueryList<any>;
    _query_Icon_73_2: import107.QueryList<any>;
    _text_74: any;
    _el_75: any;
    _Label_75_3: import109.Wrapper_Label;
    _text_76: any;
    _text_77: any;
    _el_78: any;
    compView_78: import83.AppView<import114.RadioButton>;
    _RadioButton_78_3: import115.Wrapper_RadioButton;
    _text_79: any;
    _text_80: any;
    _el_81: any;
    compView_81: import83.AppView<import104.Item>;
    _Item_81_3: import105.Wrapper_Item;
    _ItemContent_81_4: import105.Wrapper_ItemContent;
    _query_Label_81_0: import107.QueryList<any>;
    _query_Button_81_1: import107.QueryList<any>;
    _query_Icon_81_2: import107.QueryList<any>;
    _text_82: any;
    _el_83: any;
    _Label_83_3: import109.Wrapper_Label;
    _text_84: any;
    _text_85: any;
    _el_86: any;
    compView_86: import83.AppView<import114.RadioButton>;
    _RadioButton_86_3: import115.Wrapper_RadioButton;
    _text_87: any;
    _text_88: any;
    _text_89: any;
    _el_90: any;
    _List_90_3: import103.Wrapper_List;
    _text_91: any;
    _el_92: any;
    compView_92: import83.AppView<import104.Item>;
    _Item_92_3: import105.Wrapper_Item;
    _ListHeader_92_4: import106.Wrapper_ListHeader;
    _query_Label_92_0: import107.QueryList<any>;
    _query_Button_92_1: import107.QueryList<any>;
    _query_Icon_92_2: import107.QueryList<any>;
    _text_93: any;
    _text_94: any;
    _el_95: any;
    compView_95: import83.AppView<import104.Item>;
    _Item_95_3: import105.Wrapper_Item;
    _ItemContent_95_4: import105.Wrapper_ItemContent;
    _query_Label_95_0: import107.QueryList<any>;
    _query_Button_95_1: import107.QueryList<any>;
    _query_Icon_95_2: import107.QueryList<any>;
    _text_96: any;
    _el_97: any;
    _Icon_97_3: import108.Wrapper_Icon;
    _text_98: any;
    _el_99: any;
    _Label_99_3: import109.Wrapper_Label;
    _text_100: any;
    _text_101: any;
    _el_102: any;
    compView_102: import83.AppView<import116.Button>;
    _Button_102_3: import117.Wrapper_Button;
    _text_103: any;
    _text_104: any;
    _text_105: any;
    _el_106: any;
    compView_106: import83.AppView<import104.Item>;
    _Item_106_3: import105.Wrapper_Item;
    _ItemContent_106_4: import105.Wrapper_ItemContent;
    _query_Label_106_0: import107.QueryList<any>;
    _query_Button_106_1: import107.QueryList<any>;
    _query_Icon_106_2: import107.QueryList<any>;
    _text_107: any;
    _el_108: any;
    _Icon_108_3: import108.Wrapper_Icon;
    _text_109: any;
    _el_110: any;
    _Label_110_3: import109.Wrapper_Label;
    _text_111: any;
    _text_112: any;
    _el_113: any;
    compView_113: import83.AppView<import116.Button>;
    _Button_113_3: import117.Wrapper_Button;
    _text_114: any;
    _text_115: any;
    _text_116: any;
    _el_117: any;
    compView_117: import83.AppView<import104.Item>;
    _Item_117_3: import105.Wrapper_Item;
    _ItemContent_117_4: import105.Wrapper_ItemContent;
    _query_Label_117_0: import107.QueryList<any>;
    _query_Button_117_1: import107.QueryList<any>;
    _query_Icon_117_2: import107.QueryList<any>;
    _text_118: any;
    _el_119: any;
    _Icon_119_3: import108.Wrapper_Icon;
    _text_120: any;
    _el_121: any;
    _Label_121_3: import109.Wrapper_Label;
    _text_122: any;
    _text_123: any;
    _el_124: any;
    compView_124: import83.AppView<import116.Button>;
    _Button_124_3: import117.Wrapper_Button;
    _text_125: any;
    _text_126: any;
    _text_127: any;
    _el_128: any;
    compView_128: import83.AppView<import104.Item>;
    _Item_128_3: import105.Wrapper_Item;
    _ItemContent_128_4: import105.Wrapper_ItemContent;
    _query_Label_128_0: import107.QueryList<any>;
    _query_Button_128_1: import107.QueryList<any>;
    _query_Icon_128_2: import107.QueryList<any>;
    _text_129: any;
    _el_130: any;
    _Icon_130_3: import108.Wrapper_Icon;
    _text_131: any;
    _el_132: any;
    _Label_132_3: import109.Wrapper_Label;
    _text_133: any;
    _text_134: any;
    _el_135: any;
    compView_135: import83.AppView<import116.Button>;
    _Button_135_3: import117.Wrapper_Button;
    _text_136: any;
    _text_137: any;
    _text_138: any;
    _text_139: any;
    _text_140: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    readonly _NG_VALUE_ACCESSOR_23_4: any[];
    readonly _NG_VALUE_ACCESSOR_68_5: any[];
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    handleEvent_23(eventName: string, $event: any): boolean;
    handleEvent_78(eventName: string, $event: any): boolean;
    handleEvent_86(eventName: string, $event: any): boolean;
}
