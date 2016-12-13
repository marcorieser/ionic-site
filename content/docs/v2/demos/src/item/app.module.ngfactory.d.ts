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
import * as import108 from '../components/button/button';
import * as import109 from '../components/button/button.ngfactory';
import * as import110 from '../components/icon/icon.ngfactory';
import * as import111 from '../components/label/label.ngfactory';
import * as import112 from '../components/toggle/toggle';
import * as import113 from '../components/toggle/toggle.ngfactory';
import * as import114 from '../components/note/note.ngfactory';
import * as import115 from '../components/radio/radio-group.ngfactory';
import * as import116 from '../components/radio/radio-button';
import * as import117 from '../components/radio/radio-button.ngfactory';
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
    _el_15: any;
    compView_15: import83.AppView<import108.Button>;
    _Button_15_3: import109.Wrapper_Button;
    _text_16: any;
    _el_17: any;
    _Icon_17_3: import110.Wrapper_Icon;
    _text_18: any;
    _text_19: any;
    _text_20: any;
    _el_21: any;
    _ItemGroup_21_3: import105.Wrapper_ItemGroup;
    _text_22: any;
    _el_23: any;
    compView_23: import83.AppView<import104.Item>;
    _Item_23_3: import105.Wrapper_Item;
    _ItemContent_23_4: import105.Wrapper_ItemContent;
    _query_Label_23_0: import107.QueryList<any>;
    _query_Button_23_1: import107.QueryList<any>;
    _query_Icon_23_2: import107.QueryList<any>;
    _text_24: any;
    _el_25: any;
    _Icon_25_3: import110.Wrapper_Icon;
    _text_26: any;
    _el_27: any;
    _Label_27_3: import111.Wrapper_Label;
    _text_28: any;
    _text_29: any;
    _el_30: any;
    compView_30: import83.AppView<import112.Toggle>;
    _Toggle_30_3: import113.Wrapper_Toggle;
    __NG_VALUE_ACCESSOR_30_4: any[];
    _text_31: any;
    _text_32: any;
    _el_33: any;
    compView_33: import83.AppView<import104.Item>;
    _Item_33_3: import105.Wrapper_Item;
    _ItemContent_33_4: import105.Wrapper_ItemContent;
    _query_Label_33_0: import107.QueryList<any>;
    _query_Button_33_1: import107.QueryList<any>;
    _query_Icon_33_2: import107.QueryList<any>;
    _text_34: any;
    _el_35: any;
    _Icon_35_3: import110.Wrapper_Icon;
    _text_36: any;
    _el_37: any;
    _Label_37_3: import111.Wrapper_Label;
    _text_38: any;
    _text_39: any;
    _el_40: any;
    _Note_40_3: import114.Wrapper_Note;
    _text_41: any;
    _text_42: any;
    _text_43: any;
    _el_44: any;
    compView_44: import83.AppView<import104.Item>;
    _Item_44_3: import105.Wrapper_Item;
    _ItemContent_44_4: import105.Wrapper_ItemContent;
    _query_Label_44_0: import107.QueryList<any>;
    _query_Button_44_1: import107.QueryList<any>;
    _query_Icon_44_2: import107.QueryList<any>;
    _text_45: any;
    _el_46: any;
    _Icon_46_3: import110.Wrapper_Icon;
    _text_47: any;
    _el_48: any;
    _Label_48_3: import111.Wrapper_Label;
    _text_49: any;
    _text_50: any;
    _el_51: any;
    _Note_51_3: import114.Wrapper_Note;
    _text_52: any;
    _text_53: any;
    _text_54: any;
    _text_55: any;
    _el_56: any;
    compView_56: import83.AppView<import104.Item>;
    _Item_56_3: import105.Wrapper_Item;
    _ItemDivider_56_4: import105.Wrapper_ItemDivider;
    _query_Label_56_0: import107.QueryList<any>;
    _query_Button_56_1: import107.QueryList<any>;
    _query_Icon_56_2: import107.QueryList<any>;
    _text_57: any;
    _el_58: any;
    compView_58: import83.AppView<import108.Button>;
    _Button_58_3: import109.Wrapper_Button;
    _text_59: any;
    _text_60: any;
    _text_61: any;
    _el_62: any;
    compView_62: import83.AppView<import104.Item>;
    _Item_62_3: import105.Wrapper_Item;
    _ItemContent_62_4: import105.Wrapper_ItemContent;
    _query_Label_62_0: import107.QueryList<any>;
    _query_Button_62_1: import107.QueryList<any>;
    _query_Icon_62_2: import107.QueryList<any>;
    _text_63: any;
    _el_64: any;
    _Icon_64_3: import110.Wrapper_Icon;
    _text_65: any;
    _el_66: any;
    _Label_66_3: import111.Wrapper_Label;
    _text_67: any;
    _text_68: any;
    _text_69: any;
    _el_70: any;
    compView_70: import83.AppView<import104.Item>;
    _Item_70_3: import105.Wrapper_Item;
    _ItemContent_70_4: import105.Wrapper_ItemContent;
    _query_Label_70_0: import107.QueryList<any>;
    _query_Button_70_1: import107.QueryList<any>;
    _query_Icon_70_2: import107.QueryList<any>;
    _text_71: any;
    _el_72: any;
    _Icon_72_3: import110.Wrapper_Icon;
    _text_73: any;
    _el_74: any;
    _Label_74_3: import111.Wrapper_Label;
    _text_75: any;
    _text_76: any;
    _el_77: any;
    _Note_77_3: import114.Wrapper_Note;
    _text_78: any;
    _text_79: any;
    _text_80: any;
    _text_81: any;
    _el_82: any;
    _List_82_3: import103.Wrapper_List;
    _RadioGroup_82_4: import115.Wrapper_RadioGroup;
    __NG_VALUE_ACCESSOR_82_5: any[];
    _query_ListHeader_82_0: import107.QueryList<any>;
    _text_83: any;
    _el_84: any;
    compView_84: import83.AppView<import104.Item>;
    _Item_84_3: import105.Wrapper_Item;
    _ListHeader_84_4: import106.Wrapper_ListHeader;
    _query_Label_84_0: import107.QueryList<any>;
    _query_Button_84_1: import107.QueryList<any>;
    _query_Icon_84_2: import107.QueryList<any>;
    _text_85: any;
    _el_86: any;
    _Icon_86_3: import110.Wrapper_Icon;
    _text_87: any;
    _text_88: any;
    _el_89: any;
    compView_89: import83.AppView<import104.Item>;
    _Item_89_3: import105.Wrapper_Item;
    _ItemContent_89_4: import105.Wrapper_ItemContent;
    _query_Label_89_0: import107.QueryList<any>;
    _query_Button_89_1: import107.QueryList<any>;
    _query_Icon_89_2: import107.QueryList<any>;
    _text_90: any;
    _el_91: any;
    _Label_91_3: import111.Wrapper_Label;
    _text_92: any;
    _text_93: any;
    _el_94: any;
    compView_94: import83.AppView<import116.RadioButton>;
    _RadioButton_94_3: import117.Wrapper_RadioButton;
    _text_95: any;
    _text_96: any;
    _el_97: any;
    compView_97: import83.AppView<import104.Item>;
    _Item_97_3: import105.Wrapper_Item;
    _ItemContent_97_4: import105.Wrapper_ItemContent;
    _query_Label_97_0: import107.QueryList<any>;
    _query_Button_97_1: import107.QueryList<any>;
    _query_Icon_97_2: import107.QueryList<any>;
    _text_98: any;
    _el_99: any;
    _Label_99_3: import111.Wrapper_Label;
    _text_100: any;
    _text_101: any;
    _el_102: any;
    compView_102: import83.AppView<import116.RadioButton>;
    _RadioButton_102_3: import117.Wrapper_RadioButton;
    _text_103: any;
    _text_104: any;
    _text_105: any;
    _el_106: any;
    _List_106_3: import103.Wrapper_List;
    _text_107: any;
    _el_108: any;
    compView_108: import83.AppView<import104.Item>;
    _Item_108_3: import105.Wrapper_Item;
    _ListHeader_108_4: import106.Wrapper_ListHeader;
    _query_Label_108_0: import107.QueryList<any>;
    _query_Button_108_1: import107.QueryList<any>;
    _query_Icon_108_2: import107.QueryList<any>;
    _text_109: any;
    _text_110: any;
    _el_111: any;
    compView_111: import83.AppView<import104.Item>;
    _Item_111_3: import105.Wrapper_Item;
    _ItemContent_111_4: import105.Wrapper_ItemContent;
    _query_Label_111_0: import107.QueryList<any>;
    _query_Button_111_1: import107.QueryList<any>;
    _query_Icon_111_2: import107.QueryList<any>;
    _text_112: any;
    _el_113: any;
    _Icon_113_3: import110.Wrapper_Icon;
    _text_114: any;
    _el_115: any;
    _Label_115_3: import111.Wrapper_Label;
    _text_116: any;
    _text_117: any;
    _el_118: any;
    compView_118: import83.AppView<import108.Button>;
    _Button_118_3: import109.Wrapper_Button;
    _text_119: any;
    _text_120: any;
    _text_121: any;
    _el_122: any;
    compView_122: import83.AppView<import104.Item>;
    _Item_122_3: import105.Wrapper_Item;
    _ItemContent_122_4: import105.Wrapper_ItemContent;
    _query_Label_122_0: import107.QueryList<any>;
    _query_Button_122_1: import107.QueryList<any>;
    _query_Icon_122_2: import107.QueryList<any>;
    _text_123: any;
    _el_124: any;
    _Icon_124_3: import110.Wrapper_Icon;
    _text_125: any;
    _el_126: any;
    _Label_126_3: import111.Wrapper_Label;
    _text_127: any;
    _text_128: any;
    _el_129: any;
    compView_129: import83.AppView<import108.Button>;
    _Button_129_3: import109.Wrapper_Button;
    _text_130: any;
    _text_131: any;
    _text_132: any;
    _el_133: any;
    compView_133: import83.AppView<import104.Item>;
    _Item_133_3: import105.Wrapper_Item;
    _ItemContent_133_4: import105.Wrapper_ItemContent;
    _query_Label_133_0: import107.QueryList<any>;
    _query_Button_133_1: import107.QueryList<any>;
    _query_Icon_133_2: import107.QueryList<any>;
    _text_134: any;
    _el_135: any;
    _Icon_135_3: import110.Wrapper_Icon;
    _text_136: any;
    _el_137: any;
    _Label_137_3: import111.Wrapper_Label;
    _text_138: any;
    _text_139: any;
    _el_140: any;
    compView_140: import83.AppView<import108.Button>;
    _Button_140_3: import109.Wrapper_Button;
    _text_141: any;
    _text_142: any;
    _text_143: any;
    _el_144: any;
    compView_144: import83.AppView<import104.Item>;
    _Item_144_3: import105.Wrapper_Item;
    _ItemContent_144_4: import105.Wrapper_ItemContent;
    _query_Label_144_0: import107.QueryList<any>;
    _query_Button_144_1: import107.QueryList<any>;
    _query_Icon_144_2: import107.QueryList<any>;
    _text_145: any;
    _el_146: any;
    _Icon_146_3: import110.Wrapper_Icon;
    _text_147: any;
    _el_148: any;
    _Label_148_3: import111.Wrapper_Label;
    _text_149: any;
    _text_150: any;
    _el_151: any;
    compView_151: import83.AppView<import108.Button>;
    _Button_151_3: import109.Wrapper_Button;
    _text_152: any;
    _text_153: any;
    _text_154: any;
    _text_155: any;
    _text_156: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    readonly _NG_VALUE_ACCESSOR_30_4: any[];
    readonly _NG_VALUE_ACCESSOR_82_5: any[];
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    handleEvent_30(eventName: string, $event: any): boolean;
    handleEvent_94(eventName: string, $event: any): boolean;
    handleEvent_102(eventName: string, $event: any): boolean;
}
