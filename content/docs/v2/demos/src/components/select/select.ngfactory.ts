/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './select';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/query_list';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../app/app';
import * as import10 from '../../util/form';
import * as import11 from '../../config/config';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from '../item/item';
import * as import14 from '../../navigation/nav-controller';
import * as import15 from '@angular/forms/src/directives/control_value_accessor';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '../button/button';
import * as import19 from '../button/button.ngfactory';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/common/src/directives/ng_if';
export class Wrapper_Select {
  /*private*/ _eventHandler:Function;
  context:import0.Select;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  subscription0:any;
  subscription1:any;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any,p6:any) {
    this._changed = false;
    this.context = new import0.Select(p0,p1,p2,p3,p4,p5,p6);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
  }
  check_cancelText(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.cancelText = currValue;
      this._expr_0 = currValue;
    }
  }
  check_okText(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.okText = currValue;
      this._expr_1 = currValue;
    }
  }
  check_placeholder(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.placeholder = currValue;
      this._expr_2 = currValue;
    }
  }
  check_selectOptions(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.selectOptions = currValue;
      this._expr_3 = currValue;
    }
  }
  check_interface(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.interface = currValue;
      this._expr_4 = currValue;
    }
  }
  check_selectedText(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.selectedText = currValue;
      this._expr_5 = currValue;
    }
  }
  check_mode(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.mode = currValue;
      this._expr_6 = currValue;
    }
  }
  check_multiple(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.multiple = currValue;
      this._expr_7 = currValue;
    }
  }
  check_disabled(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.disabled = currValue;
      this._expr_8 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_9:any = this.context._disabled;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      view.renderer.setElementClass(el,'select-disabled',currVal_9);
      this._expr_9 = currVal_9;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context._click($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'keyup.space')) {
      const pd_sub_1:any = ((<any>this.context._keyup()) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.ionChange.subscribe(_eventHandler.bind(view,'ionChange'))); }
    if (emit1) { (this.subscription1 = this.context.ionCancel.subscribe(_eventHandler.bind(view,'ionCancel'))); }
  }
}
var renderType_Select_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Select_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Select>;
  _Select_0_3:Wrapper_Select;
  __NG_VALUE_ACCESSOR_0_4:any[];
  _query_Option_0_0:import6.QueryList<any>;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Select_Host0,renderType_Select_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_4():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_4 == null)) { (this.__NG_VALUE_ACCESSOR_0_4 = [this._Select_0_3.context]); }
    return this.__NG_VALUE_ACCESSOR_0_4;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ion-select',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Select0(this.viewUtils,this,0,this._el_0);
    this._Select_0_3 = new Wrapper_Select(this.injectorGet(import9.App,this.parentIndex),this.injectorGet(import10.Form,this.parentIndex),this.injectorGet(import11.Config,this.parentIndex),new import12.ElementRef(this._el_0),this.renderer,this.injectorGet(import13.Item,this.parentIndex,(null as any)),this.injectorGet(import14.NavController,this.parentIndex,(null as any)));
    this._query_Option_0_0 = new import6.QueryList<any>();
    this.compView_0.create(this._Select_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'click',(null as any),'keyup.space',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._Select_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Select) && (0 === requestNodeIndex))) { return this._Select_0_3.context; }
    if (((token === import15.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Select_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) {
      if (this._query_Option_0_0.dirty) {
        this._query_Option_0_0.reset(([] as any[]));
        this._Select_0_3.context.options = this._query_Option_0_0;
        this._query_Option_0_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Select_0_3.context.ngAfterContentInit(); }
    }
    this._Select_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._Select_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._Select_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const SelectNgFactory:import8.ComponentFactory<import0.Select> = new import8.ComponentFactory<import0.Select>('ion-select',View_Select_Host0,import0.Select);
const styles_Select:any[] = ([] as any[]);
var renderType_Select:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_Select,{});
export class View_Select0 extends import2.AppView<import0.Select> {
  _anchor_0:any;
  /*private*/ _vc_0:import16.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import17.Wrapper_NgIf;
  _anchor_1:any;
  /*private*/ _vc_1:import16.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import17.Wrapper_NgIf;
  _el_2:any;
  _el_3:any;
  _el_4:any;
  compView_4:import2.AppView<import18.Button>;
  _Button_4_3:import19.Wrapper_Button;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Select0,renderType_Select,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import16.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import20.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import17.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import16.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import20.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import17.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','select-icon'),(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','select-icon-inner'),(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'button',new import3.InlineArray8(6,'aria-haspopup','true','class','item-cover','ion-button','item-cover'),(null as any));
    this.compView_4 = new import19.View_Button0(this.viewUtils,this,4,this._el_4);
    this._Button_4_3 = new import19.Wrapper_Button('item-cover',this.parentView.injectorGet(import11.Config,this.parentIndex),new import12.ElementRef(this._el_4),this.renderer);
    this.compView_4.create(this._Button_4_3.context);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._anchor_0,
      this._anchor_1,
      this._el_2,
      this._el_3,
      this._el_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import21.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    if (((token === import20.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import21.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    if (((token === import18.Button) && (4 === requestNodeIndex))) { return this._Button_4_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:boolean = !this.context._text;
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    const currVal_1_0_0:any = this.context._text;
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    if (this._Button_4_3.ngDoCheck(this,this._el_4,throwOnChange)) { this.compView_4.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Button_4_3.context.ngAfterContentInit(); } }
    const currVal_13:any = this.context.id;
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementProperty(this._el_4,'id',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this.context._labelId;
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementAttribute(this._el_4,'aria-labelledby',((currVal_14 == null)? (null as any): currVal_14.toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this.context._disabled;
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementAttribute(this._el_4,'aria-disabled',((currVal_15 == null)? (null as any): currVal_15.toString()));
      this._expr_15 = currVal_15;
    }
    this.compView_4.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this._vc_1.destroyNestedViews();
    this.compView_4.destroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 4) && (ngContentIndex == 0))) {  }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 0)) { return new View_Select1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    if ((nodeIndex == 1)) { return new View_Select2(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
class View_Select1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_Select1,renderType_Select,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','select-placeholder select-text'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.context.placeholder,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_Select2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_Select2,renderType_Select,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','select-text'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',(this.parentView.context.selectedText || this.parentView.context._text),'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}