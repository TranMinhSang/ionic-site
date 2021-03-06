var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import13 from 'ionic-angular/components/content/content';
import * as import14 from 'ionic-angular/components/list/list';
import * as import15 from 'ionic-angular/components/item/item';
import * as import16 from 'ionic-angular/components/list/list-header';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from 'ionic-angular/components/label/label';
import * as import19 from 'ionic-angular/components/select/select';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control_status';
import * as import22 from 'ionic-angular/components/option/option';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/navigation/nav-controller';
import * as import30 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import31 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from 'ionic-angular/gestures/gesture-controller';
import * as import36 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from '../../node_modules/ionic-angular/components/select/select.ngfactory';
import * as import39 from '@angular/core/src/linker/template_ref';
import * as import40 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import41 from '@angular/forms/src/directives/control_value_accessor';
import * as import42 from '@angular/forms/src/directives/ng_control';
import * as import43 from 'ionic-angular/components/nav/nav';
import * as import44 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import45 from 'ionic-angular/navigation/nav-controller-base';
import * as import46 from '@angular/core/src/linker/component_factory_resolver';
import * as import47 from 'ionic-angular/transitions/transition-controller';
import * as import48 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage();
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
var styles_ApiDemoPage = [];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_63_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_63_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_63_5 = [this._Select_63_4]);
            }
            return this.__NG_VALUE_ACCESSOR_63_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_102_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_102_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_102_5 = [this._Select_102_4]);
            }
            return this.__NG_VALUE_ACCESSOR_102_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_200_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_200_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_200_5 = [this._Select_200_4]);
            }
            return this.__NG_VALUE_ACCESSOR_200_5;
        },
        enumerable: true,
        configurable: true
    });
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import27.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import29.NavController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import30.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Select', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'outer-content');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import31.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Content(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import32.Keyboard), this.parentInjector.get(import33.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import34.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import36.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import16.ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import17.QueryList();
        this._query_Button_13_1 = new import17.QueryList();
        this._query_Icon_13_2 = new import17.QueryList();
        this._appEl_13.initComponent(this._Item_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, 'Single Value Select', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4, [
            [],
            [],
            [].concat([this._text_14]),
            [],
            []
        ], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'item item-block');
        this._appEl_16 = new import2.AppElement(16, 11, this, this._el_16);
        var compView_16 = import36.viewFactory_Item0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Item_16_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_16), this.renderer);
        this._ItemContent_16_5 = new import15.ItemContent();
        this._query_Label_16_0 = new import17.QueryList();
        this._query_Button_16_1 = new import17.QueryList();
        this._query_Icon_16_2 = new import17.QueryList();
        this._appEl_16.initComponent(this._Item_16_4, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_18_3 = new import18.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_18), this.renderer, null, null, null, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Gender', null);
        this._text_20 = this.renderer.createText(null, '\n      ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-select', null);
        this._appEl_21 = new import2.AppElement(21, 16, this, this._el_21);
        var compView_21 = import38.viewFactory_Select0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Select_21_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_21), this.renderer, this._Item_16_4, this.parentInjector.get(import29.NavController, null));
        this._NG_VALUE_ACCESSOR_21_5 = [this._Select_21_4];
        this._NgModel_21_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_21_5);
        this._NgControl_21_7 = this._NgModel_21_6;
        this._NgControlStatus_21_8 = new import21.NgControlStatus(this._NgControl_21_7);
        this._query_Option_21_0 = new import17.QueryList();
        this._appEl_21.initComponent(this._Select_21_4, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n        ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_23, 'value', 'f');
        this._Option_23_3 = new import22.Option(new import25.ElementRef(this._el_23));
        this._text_24 = this.renderer.createText(this._el_23, 'Female', null);
        this._text_25 = this.renderer.createText(null, '\n        ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_26, 'value', 'm');
        this._Option_26_3 = new import22.Option(new import25.ElementRef(this._el_26));
        this._text_27 = this.renderer.createText(this._el_26, 'Male', null);
        this._text_28 = this.renderer.createText(null, '\n      ', null);
        compView_21.create(this._Select_21_4, [], null);
        this._text_29 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_16_0.reset([this._Label_18_3]);
        this._Item_16_4.contentLabel = this._query_Label_16_0.first;
        compView_16.create(this._Item_16_4, [
            [],
            [].concat([this._el_18]),
            [].concat([
                this._text_17,
                this._text_20,
                this._text_29
            ]),
            [].concat([this._el_21]),
            []
        ], null);
        this._text_30 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_31 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_31, 'class', 'item item-block');
        this._appEl_31 = new import2.AppElement(31, 11, this, this._el_31);
        var compView_31 = import36.viewFactory_Item0(this.viewUtils, this.injector(31), this._appEl_31);
        this._Item_31_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_31), this.renderer);
        this._ItemContent_31_5 = new import15.ItemContent();
        this._query_Label_31_0 = new import17.QueryList();
        this._query_Button_31_1 = new import17.QueryList();
        this._query_Icon_31_2 = new import17.QueryList();
        this._appEl_31.initComponent(this._Item_31_4, [], compView_31);
        this._text_32 = this.renderer.createText(null, '\n      ', null);
        this._el_33 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_33_3 = new import18.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_33), this.renderer, null, null, null, null);
        this._text_34 = this.renderer.createText(this._el_33, 'Gaming', null);
        this._text_35 = this.renderer.createText(null, '\n      ', null);
        this._el_36 = this.renderer.createElement(null, 'ion-select', null);
        this.renderer.setElementAttribute(this._el_36, 'cancelText', 'Dismiss');
        this.renderer.setElementAttribute(this._el_36, 'okText', 'Okay');
        this._appEl_36 = new import2.AppElement(36, 31, this, this._el_36);
        var compView_36 = import38.viewFactory_Select0(this.viewUtils, this.injector(36), this._appEl_36);
        this._Select_36_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_36), this.renderer, this._Item_31_4, this.parentInjector.get(import29.NavController, null));
        this._NG_VALUE_ACCESSOR_36_5 = [this._Select_36_4];
        this._NgModel_36_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_36_5);
        this._NgControl_36_7 = this._NgModel_36_6;
        this._NgControlStatus_36_8 = new import21.NgControlStatus(this._NgControl_36_7);
        this._query_Option_36_0 = new import17.QueryList();
        this._appEl_36.initComponent(this._Select_36_4, [], compView_36);
        this._text_37 = this.renderer.createText(null, '\n        ', null);
        this._el_38 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_38, 'value', 'nes');
        this._Option_38_3 = new import22.Option(new import25.ElementRef(this._el_38));
        this._text_39 = this.renderer.createText(this._el_38, 'NES', null);
        this._text_40 = this.renderer.createText(null, '\n        ', null);
        this._el_41 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_41, 'value', 'n64');
        this._Option_41_3 = new import22.Option(new import25.ElementRef(this._el_41));
        this._text_42 = this.renderer.createText(this._el_41, 'Nintendo64', null);
        this._text_43 = this.renderer.createText(null, '\n        ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_44, 'value', 'ps');
        this._Option_44_3 = new import22.Option(new import25.ElementRef(this._el_44));
        this._text_45 = this.renderer.createText(this._el_44, 'PlayStation', null);
        this._text_46 = this.renderer.createText(null, '\n        ', null);
        this._el_47 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_47, 'value', 'genesis');
        this._Option_47_3 = new import22.Option(new import25.ElementRef(this._el_47));
        this._text_48 = this.renderer.createText(this._el_47, 'Sega Genesis', null);
        this._text_49 = this.renderer.createText(null, '\n        ', null);
        this._el_50 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_50, 'value', 'saturn');
        this._Option_50_3 = new import22.Option(new import25.ElementRef(this._el_50));
        this._text_51 = this.renderer.createText(this._el_50, 'Sega Saturn', null);
        this._text_52 = this.renderer.createText(null, '\n        ', null);
        this._el_53 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_53, 'value', 'snes');
        this._Option_53_3 = new import22.Option(new import25.ElementRef(this._el_53));
        this._text_54 = this.renderer.createText(this._el_53, 'SNES', null);
        this._text_55 = this.renderer.createText(null, '\n      ', null);
        compView_36.create(this._Select_36_4, [], null);
        this._text_56 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_31_0.reset([this._Label_33_3]);
        this._Item_31_4.contentLabel = this._query_Label_31_0.first;
        compView_31.create(this._Item_31_4, [
            [],
            [].concat([this._el_33]),
            [].concat([
                this._text_32,
                this._text_35,
                this._text_56
            ]),
            [].concat([this._el_36]),
            []
        ], null);
        this._text_57 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_58 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_58, 'class', 'item item-block');
        this._appEl_58 = new import2.AppElement(58, 11, this, this._el_58);
        var compView_58 = import36.viewFactory_Item0(this.viewUtils, this.injector(58), this._appEl_58);
        this._Item_58_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_58), this.renderer);
        this._ItemContent_58_5 = new import15.ItemContent();
        this._query_Label_58_0 = new import17.QueryList();
        this._query_Button_58_1 = new import17.QueryList();
        this._query_Icon_58_2 = new import17.QueryList();
        this._appEl_58.initComponent(this._Item_58_4, [], compView_58);
        this._text_59 = this.renderer.createText(null, '\n      ', null);
        this._el_60 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_60_3 = new import18.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_60), this.renderer, null, null, null, null);
        this._text_61 = this.renderer.createText(this._el_60, 'Date', null);
        this._text_62 = this.renderer.createText(null, '\n      ', null);
        this._el_63 = this.renderer.createElement(null, 'ion-select', null);
        this._appEl_63 = new import2.AppElement(63, 58, this, this._el_63);
        var compView_63 = import38.viewFactory_Select0(this.viewUtils, this.injector(63), this._appEl_63);
        this._Select_63_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_63), this.renderer, this._Item_58_4, this.parentInjector.get(import29.NavController, null));
        this._query_Option_63_0 = new import17.QueryList();
        this._appEl_63.initComponent(this._Select_63_4, [], compView_63);
        this._text_64 = this.renderer.createText(null, '\n        ', null);
        this._el_65 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_65, 'value', '01');
        this._Option_65_3 = new import22.Option(new import25.ElementRef(this._el_65));
        this._text_66 = this.renderer.createText(this._el_65, 'January', null);
        this._text_67 = this.renderer.createText(null, '\n        ', null);
        this._el_68 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_68, 'value', '02');
        this._Option_68_3 = new import22.Option(new import25.ElementRef(this._el_68));
        this._text_69 = this.renderer.createText(this._el_68, 'February', null);
        this._text_70 = this.renderer.createText(null, '\n        ', null);
        this._el_71 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_71, 'selected', 'true');
        this.renderer.setElementAttribute(this._el_71, 'value', '03');
        this._Option_71_3 = new import22.Option(new import25.ElementRef(this._el_71));
        this._text_72 = this.renderer.createText(this._el_71, 'March', null);
        this._text_73 = this.renderer.createText(null, '\n        ', null);
        this._el_74 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_74, 'value', '04');
        this._Option_74_3 = new import22.Option(new import25.ElementRef(this._el_74));
        this._text_75 = this.renderer.createText(this._el_74, 'April', null);
        this._text_76 = this.renderer.createText(null, '\n        ', null);
        this._el_77 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_77, 'value', '05');
        this._Option_77_3 = new import22.Option(new import25.ElementRef(this._el_77));
        this._text_78 = this.renderer.createText(this._el_77, 'May', null);
        this._text_79 = this.renderer.createText(null, '\n        ', null);
        this._el_80 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_80, 'value', '06');
        this._Option_80_3 = new import22.Option(new import25.ElementRef(this._el_80));
        this._text_81 = this.renderer.createText(this._el_80, 'June', null);
        this._text_82 = this.renderer.createText(null, '\n        ', null);
        this._el_83 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_83, 'value', '07');
        this._Option_83_3 = new import22.Option(new import25.ElementRef(this._el_83));
        this._text_84 = this.renderer.createText(this._el_83, 'July', null);
        this._text_85 = this.renderer.createText(null, '\n        ', null);
        this._el_86 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_86, 'value', '08');
        this._Option_86_3 = new import22.Option(new import25.ElementRef(this._el_86));
        this._text_87 = this.renderer.createText(this._el_86, 'August', null);
        this._text_88 = this.renderer.createText(null, '\n        ', null);
        this._el_89 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_89, 'value', '09');
        this._Option_89_3 = new import22.Option(new import25.ElementRef(this._el_89));
        this._text_90 = this.renderer.createText(this._el_89, 'September', null);
        this._text_91 = this.renderer.createText(null, '\n        ', null);
        this._el_92 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_92, 'value', '10');
        this._Option_92_3 = new import22.Option(new import25.ElementRef(this._el_92));
        this._text_93 = this.renderer.createText(this._el_92, 'October', null);
        this._text_94 = this.renderer.createText(null, '\n        ', null);
        this._el_95 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_95, 'value', '11');
        this._Option_95_3 = new import22.Option(new import25.ElementRef(this._el_95));
        this._text_96 = this.renderer.createText(this._el_95, 'November', null);
        this._text_97 = this.renderer.createText(null, '\n        ', null);
        this._el_98 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_98, 'value', '12');
        this._Option_98_3 = new import22.Option(new import25.ElementRef(this._el_98));
        this._text_99 = this.renderer.createText(this._el_98, 'December', null);
        this._text_100 = this.renderer.createText(null, '\n      ', null);
        compView_63.create(this._Select_63_4, [], null);
        this._text_101 = this.renderer.createText(null, '\n      ', null);
        this._el_102 = this.renderer.createElement(null, 'ion-select', null);
        this._appEl_102 = new import2.AppElement(102, 58, this, this._el_102);
        var compView_102 = import38.viewFactory_Select0(this.viewUtils, this.injector(102), this._appEl_102);
        this._Select_102_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_102), this.renderer, this._Item_58_4, this.parentInjector.get(import29.NavController, null));
        this._query_Option_102_0 = new import17.QueryList();
        this._appEl_102.initComponent(this._Select_102_4, [], compView_102);
        this._text_103 = this.renderer.createText(null, '\n        ', null);
        this._el_104 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_104_3 = new import22.Option(new import25.ElementRef(this._el_104));
        this._text_105 = this.renderer.createText(this._el_104, '1989', null);
        this._text_106 = this.renderer.createText(null, '\n        ', null);
        this._el_107 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_107_3 = new import22.Option(new import25.ElementRef(this._el_107));
        this._text_108 = this.renderer.createText(this._el_107, '1990', null);
        this._text_109 = this.renderer.createText(null, '\n        ', null);
        this._el_110 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_110_3 = new import22.Option(new import25.ElementRef(this._el_110));
        this._text_111 = this.renderer.createText(this._el_110, '1991', null);
        this._text_112 = this.renderer.createText(null, '\n        ', null);
        this._el_113 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_113_3 = new import22.Option(new import25.ElementRef(this._el_113));
        this._text_114 = this.renderer.createText(this._el_113, '1992', null);
        this._text_115 = this.renderer.createText(null, '\n        ', null);
        this._el_116 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_116_3 = new import22.Option(new import25.ElementRef(this._el_116));
        this._text_117 = this.renderer.createText(this._el_116, '1993', null);
        this._text_118 = this.renderer.createText(null, '\n        ', null);
        this._el_119 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_119, 'selected', 'true');
        this._Option_119_3 = new import22.Option(new import25.ElementRef(this._el_119));
        this._text_120 = this.renderer.createText(this._el_119, '1994', null);
        this._text_121 = this.renderer.createText(null, '\n        ', null);
        this._el_122 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_122_3 = new import22.Option(new import25.ElementRef(this._el_122));
        this._text_123 = this.renderer.createText(this._el_122, '1995', null);
        this._text_124 = this.renderer.createText(null, '\n        ', null);
        this._el_125 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_125_3 = new import22.Option(new import25.ElementRef(this._el_125));
        this._text_126 = this.renderer.createText(this._el_125, '1996', null);
        this._text_127 = this.renderer.createText(null, '\n        ', null);
        this._el_128 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_128_3 = new import22.Option(new import25.ElementRef(this._el_128));
        this._text_129 = this.renderer.createText(this._el_128, '1997', null);
        this._text_130 = this.renderer.createText(null, '\n        ', null);
        this._el_131 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_131_3 = new import22.Option(new import25.ElementRef(this._el_131));
        this._text_132 = this.renderer.createText(this._el_131, '1998', null);
        this._text_133 = this.renderer.createText(null, '\n        ', null);
        this._el_134 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_134_3 = new import22.Option(new import25.ElementRef(this._el_134));
        this._text_135 = this.renderer.createText(this._el_134, '1999', null);
        this._text_136 = this.renderer.createText(null, '\n      ', null);
        compView_102.create(this._Select_102_4, [], null);
        this._text_137 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_58_0.reset([this._Label_60_3]);
        this._Item_58_4.contentLabel = this._query_Label_58_0.first;
        compView_58.create(this._Item_58_4, [
            [],
            [].concat([this._el_60]),
            [].concat([
                this._text_59,
                this._text_62,
                this._text_101,
                this._text_137
            ]),
            [].concat([
                this._el_63,
                this._el_102
            ]),
            []
        ], null);
        this._text_138 = this.renderer.createText(this._el_11, '\n\n  ', null);
        this._text_139 = this.renderer.createText(null, '\n\n  ', null);
        this._el_140 = this.renderer.createElement(null, 'ion-list', null);
        this._List_140_3 = new import14.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_140), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_141 = this.renderer.createText(this._el_140, '\n    ', null);
        this._el_142 = this.renderer.createElement(this._el_140, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_142, 'class', 'item');
        this._appEl_142 = new import2.AppElement(142, 140, this, this._el_142);
        var compView_142 = import36.viewFactory_Item0(this.viewUtils, this.injector(142), this._appEl_142);
        this._Item_142_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_142), this.renderer);
        this._ListHeader_142_5 = new import16.ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_142), null);
        this._query_Label_142_0 = new import17.QueryList();
        this._query_Button_142_1 = new import17.QueryList();
        this._query_Icon_142_2 = new import17.QueryList();
        this._appEl_142.initComponent(this._Item_142_4, [], compView_142);
        this._text_143 = this.renderer.createText(null, 'Multiple Value Select', null);
        this._query_Label_142_0.reset([]);
        this._Item_142_4.contentLabel = this._query_Label_142_0.first;
        compView_142.create(this._Item_142_4, [
            [],
            [],
            [].concat([this._text_143]),
            [],
            []
        ], null);
        this._text_144 = this.renderer.createText(this._el_140, '\n\n    ', null);
        this._el_145 = this.renderer.createElement(this._el_140, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_145, 'class', 'item item-block');
        this._appEl_145 = new import2.AppElement(145, 140, this, this._el_145);
        var compView_145 = import36.viewFactory_Item0(this.viewUtils, this.injector(145), this._appEl_145);
        this._Item_145_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_145), this.renderer);
        this._ItemContent_145_5 = new import15.ItemContent();
        this._query_Label_145_0 = new import17.QueryList();
        this._query_Button_145_1 = new import17.QueryList();
        this._query_Icon_145_2 = new import17.QueryList();
        this._appEl_145.initComponent(this._Item_145_4, [], compView_145);
        this._text_146 = this.renderer.createText(null, '\n      ', null);
        this._el_147 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_147_3 = new import18.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_147), this.renderer, null, null, null, null);
        this._text_148 = this.renderer.createText(this._el_147, 'Toppings', null);
        this._text_149 = this.renderer.createText(null, '\n      ', null);
        this._el_150 = this.renderer.createElement(null, 'ion-select', null);
        this.renderer.setElementAttribute(this._el_150, 'cancelText', 'Nah');
        this.renderer.setElementAttribute(this._el_150, 'multiple', 'true');
        this.renderer.setElementAttribute(this._el_150, 'okText', 'Okay!');
        this._appEl_150 = new import2.AppElement(150, 145, this, this._el_150);
        var compView_150 = import38.viewFactory_Select0(this.viewUtils, this.injector(150), this._appEl_150);
        this._Select_150_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_150), this.renderer, this._Item_145_4, this.parentInjector.get(import29.NavController, null));
        this._NG_VALUE_ACCESSOR_150_5 = [this._Select_150_4];
        this._NgModel_150_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_150_5);
        this._NgControl_150_7 = this._NgModel_150_6;
        this._NgControlStatus_150_8 = new import21.NgControlStatus(this._NgControl_150_7);
        this._query_Option_150_0 = new import17.QueryList();
        this._appEl_150.initComponent(this._Select_150_4, [], compView_150);
        this._text_151 = this.renderer.createText(null, '\n        ', null);
        this._el_152 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_152, 'value', 'bacon');
        this._Option_152_3 = new import22.Option(new import25.ElementRef(this._el_152));
        this._text_153 = this.renderer.createText(this._el_152, 'Bacon', null);
        this._text_154 = this.renderer.createText(null, '\n        ', null);
        this._el_155 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_155, 'value', 'olives');
        this._Option_155_3 = new import22.Option(new import25.ElementRef(this._el_155));
        this._text_156 = this.renderer.createText(this._el_155, 'Black Olives', null);
        this._text_157 = this.renderer.createText(null, '\n        ', null);
        this._el_158 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_158, 'value', 'xcheese');
        this._Option_158_3 = new import22.Option(new import25.ElementRef(this._el_158));
        this._text_159 = this.renderer.createText(this._el_158, 'Extra Cheese', null);
        this._text_160 = this.renderer.createText(null, '\n        ', null);
        this._el_161 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_161, 'value', 'peppers');
        this._Option_161_3 = new import22.Option(new import25.ElementRef(this._el_161));
        this._text_162 = this.renderer.createText(this._el_161, 'Green Peppers', null);
        this._text_163 = this.renderer.createText(null, '\n        ', null);
        this._el_164 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_164, 'value', 'mushrooms');
        this._Option_164_3 = new import22.Option(new import25.ElementRef(this._el_164));
        this._text_165 = this.renderer.createText(this._el_164, 'Mushrooms', null);
        this._text_166 = this.renderer.createText(null, '\n        ', null);
        this._el_167 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_167, 'value', 'onions');
        this._Option_167_3 = new import22.Option(new import25.ElementRef(this._el_167));
        this._text_168 = this.renderer.createText(this._el_167, 'Onions', null);
        this._text_169 = this.renderer.createText(null, '\n        ', null);
        this._el_170 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_170, 'value', 'pepperoni');
        this._Option_170_3 = new import22.Option(new import25.ElementRef(this._el_170));
        this._text_171 = this.renderer.createText(this._el_170, 'Pepperoni', null);
        this._text_172 = this.renderer.createText(null, '\n        ', null);
        this._el_173 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_173, 'value', 'pineapple');
        this._Option_173_3 = new import22.Option(new import25.ElementRef(this._el_173));
        this._text_174 = this.renderer.createText(this._el_173, 'Pineapple', null);
        this._text_175 = this.renderer.createText(null, '\n        ', null);
        this._el_176 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_176, 'value', 'sausage');
        this._Option_176_3 = new import22.Option(new import25.ElementRef(this._el_176));
        this._text_177 = this.renderer.createText(this._el_176, 'Sausage', null);
        this._text_178 = this.renderer.createText(null, '\n        ', null);
        this._el_179 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_179, 'value', 'Spinach');
        this._Option_179_3 = new import22.Option(new import25.ElementRef(this._el_179));
        this._text_180 = this.renderer.createText(this._el_179, 'Spinach', null);
        this._text_181 = this.renderer.createText(null, '\n      ', null);
        compView_150.create(this._Select_150_4, [], null);
        this._text_182 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_145_0.reset([this._Label_147_3]);
        this._Item_145_4.contentLabel = this._query_Label_145_0.first;
        compView_145.create(this._Item_145_4, [
            [],
            [].concat([this._el_147]),
            [].concat([
                this._text_146,
                this._text_149,
                this._text_182
            ]),
            [].concat([this._el_150]),
            []
        ], null);
        this._text_183 = this.renderer.createText(this._el_140, '\n\n    ', null);
        this._el_184 = this.renderer.createElement(this._el_140, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_184, 'class', 'item item-block');
        this._appEl_184 = new import2.AppElement(184, 140, this, this._el_184);
        var compView_184 = import36.viewFactory_Item0(this.viewUtils, this.injector(184), this._appEl_184);
        this._Item_184_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_184), this.renderer);
        this._ItemContent_184_5 = new import15.ItemContent();
        this._query_Label_184_0 = new import17.QueryList();
        this._query_Button_184_1 = new import17.QueryList();
        this._query_Icon_184_2 = new import17.QueryList();
        this._appEl_184.initComponent(this._Item_184_4, [], compView_184);
        this._text_185 = this.renderer.createText(null, '\n      ', null);
        this._el_186 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_186_3 = new import18.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_186), this.renderer, null, null, null, null);
        this._text_187 = this.renderer.createText(this._el_186, 'Pets', null);
        this._text_188 = this.renderer.createText(null, '\n      ', null);
        this._el_189 = this.renderer.createElement(null, 'ion-select', null);
        this.renderer.setElementAttribute(this._el_189, 'multiple', 'true');
        this._appEl_189 = new import2.AppElement(189, 184, this, this._el_189);
        var compView_189 = import38.viewFactory_Select0(this.viewUtils, this.injector(189), this._appEl_189);
        this._Select_189_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_189), this.renderer, this._Item_184_4, this.parentInjector.get(import29.NavController, null));
        this._NG_VALUE_ACCESSOR_189_5 = [this._Select_189_4];
        this._NgModel_189_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_189_5);
        this._NgControl_189_7 = this._NgModel_189_6;
        this._NgControlStatus_189_8 = new import21.NgControlStatus(this._NgControl_189_7);
        this._query_Option_189_0 = new import17.QueryList();
        this._appEl_189.initComponent(this._Select_189_4, [], compView_189);
        this._text_190 = this.renderer.createText(null, '\n        ', null);
        this._anchor_191 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_191 = new import2.AppElement(191, 189, this, this._anchor_191);
        this._TemplateRef_191_5 = new import39.TemplateRef_(this._appEl_191, viewFactory_ApiDemoPage1);
        this._NgFor_191_6 = new import23.NgFor(this._appEl_191.vcRef, this._TemplateRef_191_5, this.parentInjector.get(import40.IterableDiffers), this.ref);
        this._text_192 = this.renderer.createText(null, '\n      ', null);
        compView_189.create(this._Select_189_4, [], null);
        this._text_193 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_184_0.reset([this._Label_186_3]);
        this._Item_184_4.contentLabel = this._query_Label_184_0.first;
        compView_184.create(this._Item_184_4, [
            [],
            [].concat([this._el_186]),
            [].concat([
                this._text_185,
                this._text_188,
                this._text_193
            ]),
            [].concat([this._el_189]),
            []
        ], null);
        this._text_194 = this.renderer.createText(this._el_140, '\n\n    ', null);
        this._el_195 = this.renderer.createElement(this._el_140, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_195, 'class', 'item item-block');
        this._appEl_195 = new import2.AppElement(195, 140, this, this._el_195);
        var compView_195 = import36.viewFactory_Item0(this.viewUtils, this.injector(195), this._appEl_195);
        this._Item_195_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_195), this.renderer);
        this._ItemContent_195_5 = new import15.ItemContent();
        this._query_Label_195_0 = new import17.QueryList();
        this._query_Button_195_1 = new import17.QueryList();
        this._query_Icon_195_2 = new import17.QueryList();
        this._appEl_195.initComponent(this._Item_195_4, [], compView_195);
        this._text_196 = this.renderer.createText(null, '\n      ', null);
        this._el_197 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_197_3 = new import18.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_197), this.renderer, null, null, null, null);
        this._text_198 = this.renderer.createText(this._el_197, 'Disabled', null);
        this._text_199 = this.renderer.createText(null, '\n      ', null);
        this._el_200 = this.renderer.createElement(null, 'ion-select', null);
        this.renderer.setElementAttribute(this._el_200, 'disabled', 'true');
        this.renderer.setElementAttribute(this._el_200, 'multiple', '');
        this._appEl_200 = new import2.AppElement(200, 195, this, this._el_200);
        var compView_200 = import38.viewFactory_Select0(this.viewUtils, this.injector(200), this._appEl_200);
        this._Select_200_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_200), this.renderer, this._Item_195_4, this.parentInjector.get(import29.NavController, null));
        this._query_Option_200_0 = new import17.QueryList();
        this._appEl_200.initComponent(this._Select_200_4, [], compView_200);
        this._text_201 = this.renderer.createText(null, '\n        ', null);
        this._el_202 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_202, 'checked', 'true');
        this._Option_202_3 = new import22.Option(new import25.ElementRef(this._el_202));
        this._text_203 = this.renderer.createText(this._el_202, 'Selected Text', null);
        this._text_204 = this.renderer.createText(null, '\n      ', null);
        compView_200.create(this._Select_200_4, [], null);
        this._text_205 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_195_0.reset([this._Label_197_3]);
        this._Item_195_4.contentLabel = this._query_Label_195_0.first;
        compView_195.create(this._Item_195_4, [
            [],
            [].concat([this._el_197]),
            [].concat([
                this._text_196,
                this._text_199,
                this._text_205
            ]),
            [].concat([this._el_200]),
            []
        ], null);
        this._text_206 = this.renderer.createText(this._el_140, '\n\n  ', null);
        this._text_207 = this.renderer.createText(null, '\n\n  ', null);
        this._el_208 = this.renderer.createElement(null, 'ion-list', null);
        this._List_208_3 = new import14.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_208), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_209 = this.renderer.createText(this._el_208, '\n    ', null);
        this._el_210 = this.renderer.createElement(this._el_208, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_210, 'class', 'item');
        this._appEl_210 = new import2.AppElement(210, 208, this, this._el_210);
        var compView_210 = import36.viewFactory_Item0(this.viewUtils, this.injector(210), this._appEl_210);
        this._Item_210_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_210), this.renderer);
        this._ListHeader_210_5 = new import16.ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_210), null);
        this._query_Label_210_0 = new import17.QueryList();
        this._query_Button_210_1 = new import17.QueryList();
        this._query_Icon_210_2 = new import17.QueryList();
        this._appEl_210.initComponent(this._Item_210_4, [], compView_210);
        this._text_211 = this.renderer.createText(null, 'Action Sheet Interface Select', null);
        this._query_Label_210_0.reset([]);
        this._Item_210_4.contentLabel = this._query_Label_210_0.first;
        compView_210.create(this._Item_210_4, [
            [],
            [],
            [].concat([this._text_211]),
            [],
            []
        ], null);
        this._text_212 = this.renderer.createText(this._el_208, '\n\n    ', null);
        this._el_213 = this.renderer.createElement(this._el_208, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_213, 'class', 'item item-block');
        this._appEl_213 = new import2.AppElement(213, 208, this, this._el_213);
        var compView_213 = import36.viewFactory_Item0(this.viewUtils, this.injector(213), this._appEl_213);
        this._Item_213_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_213), this.renderer);
        this._ItemContent_213_5 = new import15.ItemContent();
        this._query_Label_213_0 = new import17.QueryList();
        this._query_Button_213_1 = new import17.QueryList();
        this._query_Icon_213_2 = new import17.QueryList();
        this._appEl_213.initComponent(this._Item_213_4, [], compView_213);
        this._text_214 = this.renderer.createText(null, '\n      ', null);
        this._el_215 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_215_3 = new import18.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_215), this.renderer, null, null, null, null);
        this._text_216 = this.renderer.createText(this._el_215, 'Mute Notifications', null);
        this._text_217 = this.renderer.createText(null, '\n      ', null);
        this._el_218 = this.renderer.createElement(null, 'ion-select', null);
        this.renderer.setElementAttribute(this._el_218, 'interface', 'action-sheet');
        this._appEl_218 = new import2.AppElement(218, 213, this, this._el_218);
        var compView_218 = import38.viewFactory_Select0(this.viewUtils, this.injector(218), this._appEl_218);
        this._Select_218_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_218), this.renderer, this._Item_213_4, this.parentInjector.get(import29.NavController, null));
        this._NG_VALUE_ACCESSOR_218_5 = [this._Select_218_4];
        this._NgModel_218_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_218_5);
        this._NgControl_218_7 = this._NgModel_218_6;
        this._NgControlStatus_218_8 = new import21.NgControlStatus(this._NgControl_218_7);
        this._query_Option_218_0 = new import17.QueryList();
        this._appEl_218.initComponent(this._Select_218_4, [], compView_218);
        this._text_219 = this.renderer.createText(null, '\n        ', null);
        this._el_220 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_220, 'value', 'mute_15');
        this._Option_220_3 = new import22.Option(new import25.ElementRef(this._el_220));
        this._text_221 = this.renderer.createText(this._el_220, 'For 15 Minutes', null);
        this._text_222 = this.renderer.createText(null, '\n        ', null);
        this._el_223 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_223, 'value', 'mute_1');
        this._Option_223_3 = new import22.Option(new import25.ElementRef(this._el_223));
        this._text_224 = this.renderer.createText(this._el_223, 'For 1 Hour', null);
        this._text_225 = this.renderer.createText(null, '\n        ', null);
        this._el_226 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_226, 'value', 'mute_23');
        this._Option_226_3 = new import22.Option(new import25.ElementRef(this._el_226));
        this._text_227 = this.renderer.createText(this._el_226, 'For 24 Hours', null);
        this._text_228 = this.renderer.createText(null, '\n        ', null);
        this._el_229 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_229, 'value', 'mute_inf');
        this._Option_229_3 = new import22.Option(new import25.ElementRef(this._el_229));
        this._text_230 = this.renderer.createText(this._el_229, 'Until I turn it back on', null);
        this._text_231 = this.renderer.createText(null, '\n      ', null);
        compView_218.create(this._Select_218_4, [], null);
        this._text_232 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_213_0.reset([this._Label_215_3]);
        this._Item_213_4.contentLabel = this._query_Label_213_0.first;
        compView_213.create(this._Item_213_4, [
            [],
            [].concat([this._el_215]),
            [].concat([
                this._text_214,
                this._text_217,
                this._text_232
            ]),
            [].concat([this._el_218]),
            []
        ], null);
        this._text_233 = this.renderer.createText(this._el_208, '\n\n    ', null);
        this._el_234 = this.renderer.createElement(this._el_208, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_234, 'class', 'item item-block');
        this._appEl_234 = new import2.AppElement(234, 208, this, this._el_234);
        var compView_234 = import36.viewFactory_Item0(this.viewUtils, this.injector(234), this._appEl_234);
        this._Item_234_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_234), this.renderer);
        this._ItemContent_234_5 = new import15.ItemContent();
        this._query_Label_234_0 = new import17.QueryList();
        this._query_Button_234_1 = new import17.QueryList();
        this._query_Icon_234_2 = new import17.QueryList();
        this._appEl_234.initComponent(this._Item_234_4, [], compView_234);
        this._text_235 = this.renderer.createText(null, '\n      ', null);
        this._el_236 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_236_3 = new import18.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_236), this.renderer, null, null, null, null);
        this._text_237 = this.renderer.createText(this._el_236, 'Rating', null);
        this._text_238 = this.renderer.createText(null, '\n      ', null);
        this._el_239 = this.renderer.createElement(null, 'ion-select', null);
        this.renderer.setElementAttribute(this._el_239, 'interface', 'action-sheet');
        this._appEl_239 = new import2.AppElement(239, 234, this, this._el_239);
        var compView_239 = import38.viewFactory_Select0(this.viewUtils, this.injector(239), this._appEl_239);
        this._Select_239_4 = new import19.Select(this.parentInjector.get(import28.App), this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_239), this.renderer, this._Item_234_4, this.parentInjector.get(import29.NavController, null));
        this._NG_VALUE_ACCESSOR_239_5 = [this._Select_239_4];
        this._NgModel_239_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_239_5);
        this._NgControl_239_7 = this._NgModel_239_6;
        this._NgControlStatus_239_8 = new import21.NgControlStatus(this._NgControl_239_7);
        this._query_Option_239_0 = new import17.QueryList();
        this._appEl_239.initComponent(this._Select_239_4, [], compView_239);
        this._text_240 = this.renderer.createText(null, '\n        ', null);
        this._el_241 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_241, 'value', '1');
        this._Option_241_3 = new import22.Option(new import25.ElementRef(this._el_241));
        this._text_242 = this.renderer.createText(this._el_241, '1 Star', null);
        this._text_243 = this.renderer.createText(null, '\n        ', null);
        this._el_244 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_244, 'value', '2');
        this._Option_244_3 = new import22.Option(new import25.ElementRef(this._el_244));
        this._text_245 = this.renderer.createText(this._el_244, '2 Stars', null);
        this._text_246 = this.renderer.createText(null, '\n        ', null);
        this._el_247 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_247, 'value', '3');
        this._Option_247_3 = new import22.Option(new import25.ElementRef(this._el_247));
        this._text_248 = this.renderer.createText(this._el_247, '3 Stars', null);
        this._text_249 = this.renderer.createText(null, '\n        ', null);
        this._el_250 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_250, 'value', '4');
        this._Option_250_3 = new import22.Option(new import25.ElementRef(this._el_250));
        this._text_251 = this.renderer.createText(this._el_250, '4 Stars', null);
        this._text_252 = this.renderer.createText(null, '\n        ', null);
        this._el_253 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_253, 'value', '5');
        this._Option_253_3 = new import22.Option(new import25.ElementRef(this._el_253));
        this._text_254 = this.renderer.createText(this._el_253, '5 Stars', null);
        this._text_255 = this.renderer.createText(null, '\n      ', null);
        compView_239.create(this._Select_239_4, [], null);
        this._text_256 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_234_0.reset([this._Label_236_3]);
        this._Item_234_4.contentLabel = this._query_Label_234_0.first;
        compView_234.create(this._Item_234_4, [
            [],
            [].concat([this._el_236]),
            [].concat([
                this._text_235,
                this._text_238,
                this._text_256
            ]),
            [].concat([this._el_239]),
            []
        ], null);
        this._text_257 = this.renderer.createText(this._el_208, '\n\n  ', null);
        this._text_258 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_139,
                this._el_140,
                this._text_207,
                this._el_208,
                this._text_258
            ]),
            []
        ], null);
        this._text_259 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_21, 'keyup.space', this.eventHandler(this._handle_keyup_space_21_2.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_21_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_36, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_36_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_36, 'click', this.eventHandler(this._handle_click_36_1.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_36, 'keyup.space', this.eventHandler(this._handle_keyup_space_36_2.bind(this)));
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_36_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_36_0.bind(this)));
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_63, 'ionChange', this.eventHandler(this._handle_ionChange_63_0.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_63, 'click', this.eventHandler(this._handle_click_63_1.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_63, 'keyup.space', this.eventHandler(this._handle_keyup_space_63_2.bind(this)));
        this._expr_38 = import7.UNINITIALIZED;
        var subscription_2 = this._Select_63_4.ionChange.subscribe(this.eventHandler(this._handle_ionChange_63_0.bind(this)));
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_102, 'ionChange', this.eventHandler(this._handle_ionChange_102_0.bind(this)));
        var disposable_10 = this.renderer.listen(this._el_102, 'click', this.eventHandler(this._handle_click_102_1.bind(this)));
        var disposable_11 = this.renderer.listen(this._el_102, 'keyup.space', this.eventHandler(this._handle_keyup_space_102_2.bind(this)));
        this._expr_55 = import7.UNINITIALIZED;
        var subscription_3 = this._Select_102_4.ionChange.subscribe(this.eventHandler(this._handle_ionChange_102_0.bind(this)));
        this._expr_56 = import7.UNINITIALIZED;
        var disposable_12 = this.renderer.listen(this._el_150, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_150_0.bind(this)));
        var disposable_13 = this.renderer.listen(this._el_150, 'click', this.eventHandler(this._handle_click_150_1.bind(this)));
        var disposable_14 = this.renderer.listen(this._el_150, 'keyup.space', this.eventHandler(this._handle_keyup_space_150_2.bind(this)));
        this._expr_60 = import7.UNINITIALIZED;
        this._expr_61 = import7.UNINITIALIZED;
        this._expr_62 = import7.UNINITIALIZED;
        this._expr_63 = import7.UNINITIALIZED;
        this._expr_64 = import7.UNINITIALIZED;
        var subscription_4 = this._NgModel_150_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_150_0.bind(this)));
        this._expr_65 = import7.UNINITIALIZED;
        this._expr_66 = import7.UNINITIALIZED;
        this._expr_67 = import7.UNINITIALIZED;
        this._expr_68 = import7.UNINITIALIZED;
        this._expr_69 = import7.UNINITIALIZED;
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        this._expr_72 = import7.UNINITIALIZED;
        this._expr_73 = import7.UNINITIALIZED;
        this._expr_74 = import7.UNINITIALIZED;
        this._expr_75 = import7.UNINITIALIZED;
        this._expr_76 = import7.UNINITIALIZED;
        this._expr_77 = import7.UNINITIALIZED;
        this._expr_78 = import7.UNINITIALIZED;
        this._expr_79 = import7.UNINITIALIZED;
        this._expr_80 = import7.UNINITIALIZED;
        var disposable_15 = this.renderer.listen(this._el_189, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_189_0.bind(this)));
        var disposable_16 = this.renderer.listen(this._el_189, 'click', this.eventHandler(this._handle_click_189_1.bind(this)));
        var disposable_17 = this.renderer.listen(this._el_189, 'keyup.space', this.eventHandler(this._handle_keyup_space_189_2.bind(this)));
        this._expr_84 = import7.UNINITIALIZED;
        this._expr_85 = import7.UNINITIALIZED;
        this._expr_86 = import7.UNINITIALIZED;
        this._expr_87 = import7.UNINITIALIZED;
        var subscription_5 = this._NgModel_189_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_189_0.bind(this)));
        this._expr_88 = import7.UNINITIALIZED;
        this._expr_89 = import7.UNINITIALIZED;
        this._expr_90 = import7.UNINITIALIZED;
        this._expr_91 = import7.UNINITIALIZED;
        this._expr_92 = import7.UNINITIALIZED;
        this._expr_93 = import7.UNINITIALIZED;
        this._expr_94 = import7.UNINITIALIZED;
        var disposable_18 = this.renderer.listen(this._el_200, 'click', this.eventHandler(this._handle_click_200_0.bind(this)));
        var disposable_19 = this.renderer.listen(this._el_200, 'keyup.space', this.eventHandler(this._handle_keyup_space_200_1.bind(this)));
        this._expr_97 = import7.UNINITIALIZED;
        this._expr_98 = import7.UNINITIALIZED;
        this._expr_99 = import7.UNINITIALIZED;
        var disposable_20 = this.renderer.listen(this._el_218, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_218_0.bind(this)));
        var disposable_21 = this.renderer.listen(this._el_218, 'click', this.eventHandler(this._handle_click_218_1.bind(this)));
        var disposable_22 = this.renderer.listen(this._el_218, 'keyup.space', this.eventHandler(this._handle_keyup_space_218_2.bind(this)));
        this._expr_103 = import7.UNINITIALIZED;
        this._expr_104 = import7.UNINITIALIZED;
        this._expr_105 = import7.UNINITIALIZED;
        var subscription_6 = this._NgModel_218_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_218_0.bind(this)));
        this._expr_106 = import7.UNINITIALIZED;
        this._expr_107 = import7.UNINITIALIZED;
        this._expr_108 = import7.UNINITIALIZED;
        this._expr_109 = import7.UNINITIALIZED;
        this._expr_110 = import7.UNINITIALIZED;
        this._expr_111 = import7.UNINITIALIZED;
        this._expr_112 = import7.UNINITIALIZED;
        this._expr_113 = import7.UNINITIALIZED;
        this._expr_114 = import7.UNINITIALIZED;
        this._expr_115 = import7.UNINITIALIZED;
        var disposable_23 = this.renderer.listen(this._el_239, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_239_0.bind(this)));
        var disposable_24 = this.renderer.listen(this._el_239, 'click', this.eventHandler(this._handle_click_239_1.bind(this)));
        var disposable_25 = this.renderer.listen(this._el_239, 'keyup.space', this.eventHandler(this._handle_keyup_space_239_2.bind(this)));
        this._expr_119 = import7.UNINITIALIZED;
        this._expr_120 = import7.UNINITIALIZED;
        this._expr_121 = import7.UNINITIALIZED;
        var subscription_7 = this._NgModel_239_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_239_0.bind(this)));
        this._expr_122 = import7.UNINITIALIZED;
        this._expr_123 = import7.UNINITIALIZED;
        this._expr_124 = import7.UNINITIALIZED;
        this._expr_125 = import7.UNINITIALIZED;
        this._expr_126 = import7.UNINITIALIZED;
        this._expr_127 = import7.UNINITIALIZED;
        this._expr_128 = import7.UNINITIALIZED;
        this._expr_129 = import7.UNINITIALIZED;
        this._expr_130 = import7.UNINITIALIZED;
        this._expr_131 = import7.UNINITIALIZED;
        this._expr_132 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._el_80,
            this._text_81,
            this._text_82,
            this._el_83,
            this._text_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._text_88,
            this._el_89,
            this._text_90,
            this._text_91,
            this._el_92,
            this._text_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._text_97,
            this._el_98,
            this._text_99,
            this._text_100,
            this._text_101,
            this._el_102,
            this._text_103,
            this._el_104,
            this._text_105,
            this._text_106,
            this._el_107,
            this._text_108,
            this._text_109,
            this._el_110,
            this._text_111,
            this._text_112,
            this._el_113,
            this._text_114,
            this._text_115,
            this._el_116,
            this._text_117,
            this._text_118,
            this._el_119,
            this._text_120,
            this._text_121,
            this._el_122,
            this._text_123,
            this._text_124,
            this._el_125,
            this._text_126,
            this._text_127,
            this._el_128,
            this._text_129,
            this._text_130,
            this._el_131,
            this._text_132,
            this._text_133,
            this._el_134,
            this._text_135,
            this._text_136,
            this._text_137,
            this._text_138,
            this._text_139,
            this._el_140,
            this._text_141,
            this._el_142,
            this._text_143,
            this._text_144,
            this._el_145,
            this._text_146,
            this._el_147,
            this._text_148,
            this._text_149,
            this._el_150,
            this._text_151,
            this._el_152,
            this._text_153,
            this._text_154,
            this._el_155,
            this._text_156,
            this._text_157,
            this._el_158,
            this._text_159,
            this._text_160,
            this._el_161,
            this._text_162,
            this._text_163,
            this._el_164,
            this._text_165,
            this._text_166,
            this._el_167,
            this._text_168,
            this._text_169,
            this._el_170,
            this._text_171,
            this._text_172,
            this._el_173,
            this._text_174,
            this._text_175,
            this._el_176,
            this._text_177,
            this._text_178,
            this._el_179,
            this._text_180,
            this._text_181,
            this._text_182,
            this._text_183,
            this._el_184,
            this._text_185,
            this._el_186,
            this._text_187,
            this._text_188,
            this._el_189,
            this._text_190,
            this._anchor_191,
            this._text_192,
            this._text_193,
            this._text_194,
            this._el_195,
            this._text_196,
            this._el_197,
            this._text_198,
            this._text_199,
            this._el_200,
            this._text_201,
            this._el_202,
            this._text_203,
            this._text_204,
            this._text_205,
            this._text_206,
            this._text_207,
            this._el_208,
            this._text_209,
            this._el_210,
            this._text_211,
            this._text_212,
            this._el_213,
            this._text_214,
            this._el_215,
            this._text_216,
            this._text_217,
            this._el_218,
            this._text_219,
            this._el_220,
            this._text_221,
            this._text_222,
            this._el_223,
            this._text_224,
            this._text_225,
            this._el_226,
            this._text_227,
            this._text_228,
            this._el_229,
            this._text_230,
            this._text_231,
            this._text_232,
            this._text_233,
            this._el_234,
            this._text_235,
            this._el_236,
            this._text_237,
            this._text_238,
            this._el_239,
            this._text_240,
            this._el_241,
            this._text_242,
            this._text_243,
            this._el_244,
            this._text_245,
            this._text_246,
            this._el_247,
            this._text_248,
            this._text_249,
            this._el_250,
            this._text_251,
            this._text_252,
            this._el_253,
            this._text_254,
            this._text_255,
            this._text_256,
            this._text_257,
            this._text_258,
            this._text_259
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10,
            disposable_11,
            disposable_12,
            disposable_13,
            disposable_14,
            disposable_15,
            disposable_16,
            disposable_17,
            disposable_18,
            disposable_19,
            disposable_20,
            disposable_21,
            disposable_22,
            disposable_23,
            disposable_24,
            disposable_25
        ], [
            subscription_0,
            subscription_1,
            subscription_2,
            subscription_3,
            subscription_4,
            subscription_5,
            subscription_6,
            subscription_7
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import15.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Item_13_4;
        }
        if (((token === import16.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ListHeader_13_5;
        }
        if (((token === import18.Label) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Label_18_3;
        }
        if (((token === import22.Option) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Option_23_3;
        }
        if (((token === import22.Option) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Option_26_3;
        }
        if (((token === import19.Select) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Select_21_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._NG_VALUE_ACCESSOR_21_5;
        }
        if (((token === import20.NgModel) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._NgModel_21_6;
        }
        if (((token === import42.NgControl) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._NgControl_21_7;
        }
        if (((token === import21.NgControlStatus) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._NgControlStatus_21_8;
        }
        if (((token === import15.Item) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Item_16_4;
        }
        if (((token === import15.ItemContent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._ItemContent_16_5;
        }
        if (((token === import18.Label) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Label_33_3;
        }
        if (((token === import22.Option) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Option_38_3;
        }
        if (((token === import22.Option) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._Option_41_3;
        }
        if (((token === import22.Option) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Option_44_3;
        }
        if (((token === import22.Option) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Option_47_3;
        }
        if (((token === import22.Option) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._Option_50_3;
        }
        if (((token === import22.Option) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._Option_53_3;
        }
        if (((token === import19.Select) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._Select_36_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._NG_VALUE_ACCESSOR_36_5;
        }
        if (((token === import20.NgModel) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._NgModel_36_6;
        }
        if (((token === import42.NgControl) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._NgControl_36_7;
        }
        if (((token === import21.NgControlStatus) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._NgControlStatus_36_8;
        }
        if (((token === import15.Item) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Item_31_4;
        }
        if (((token === import15.ItemContent) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._ItemContent_31_5;
        }
        if (((token === import18.Label) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 61)))) {
            return this._Label_60_3;
        }
        if (((token === import22.Option) && ((65 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._Option_65_3;
        }
        if (((token === import22.Option) && ((68 <= requestNodeIndex) && (requestNodeIndex <= 69)))) {
            return this._Option_68_3;
        }
        if (((token === import22.Option) && ((71 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._Option_71_3;
        }
        if (((token === import22.Option) && ((74 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Option_74_3;
        }
        if (((token === import22.Option) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._Option_77_3;
        }
        if (((token === import22.Option) && ((80 <= requestNodeIndex) && (requestNodeIndex <= 81)))) {
            return this._Option_80_3;
        }
        if (((token === import22.Option) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._Option_83_3;
        }
        if (((token === import22.Option) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._Option_86_3;
        }
        if (((token === import22.Option) && ((89 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._Option_89_3;
        }
        if (((token === import22.Option) && ((92 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
            return this._Option_92_3;
        }
        if (((token === import22.Option) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._Option_95_3;
        }
        if (((token === import22.Option) && ((98 <= requestNodeIndex) && (requestNodeIndex <= 99)))) {
            return this._Option_98_3;
        }
        if (((token === import19.Select) && ((63 <= requestNodeIndex) && (requestNodeIndex <= 100)))) {
            return this._Select_63_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((63 <= requestNodeIndex) && (requestNodeIndex <= 100)))) {
            return this._NG_VALUE_ACCESSOR_63_5;
        }
        if (((token === import22.Option) && ((104 <= requestNodeIndex) && (requestNodeIndex <= 105)))) {
            return this._Option_104_3;
        }
        if (((token === import22.Option) && ((107 <= requestNodeIndex) && (requestNodeIndex <= 108)))) {
            return this._Option_107_3;
        }
        if (((token === import22.Option) && ((110 <= requestNodeIndex) && (requestNodeIndex <= 111)))) {
            return this._Option_110_3;
        }
        if (((token === import22.Option) && ((113 <= requestNodeIndex) && (requestNodeIndex <= 114)))) {
            return this._Option_113_3;
        }
        if (((token === import22.Option) && ((116 <= requestNodeIndex) && (requestNodeIndex <= 117)))) {
            return this._Option_116_3;
        }
        if (((token === import22.Option) && ((119 <= requestNodeIndex) && (requestNodeIndex <= 120)))) {
            return this._Option_119_3;
        }
        if (((token === import22.Option) && ((122 <= requestNodeIndex) && (requestNodeIndex <= 123)))) {
            return this._Option_122_3;
        }
        if (((token === import22.Option) && ((125 <= requestNodeIndex) && (requestNodeIndex <= 126)))) {
            return this._Option_125_3;
        }
        if (((token === import22.Option) && ((128 <= requestNodeIndex) && (requestNodeIndex <= 129)))) {
            return this._Option_128_3;
        }
        if (((token === import22.Option) && ((131 <= requestNodeIndex) && (requestNodeIndex <= 132)))) {
            return this._Option_131_3;
        }
        if (((token === import22.Option) && ((134 <= requestNodeIndex) && (requestNodeIndex <= 135)))) {
            return this._Option_134_3;
        }
        if (((token === import19.Select) && ((102 <= requestNodeIndex) && (requestNodeIndex <= 136)))) {
            return this._Select_102_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((102 <= requestNodeIndex) && (requestNodeIndex <= 136)))) {
            return this._NG_VALUE_ACCESSOR_102_5;
        }
        if (((token === import15.Item) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 137)))) {
            return this._Item_58_4;
        }
        if (((token === import15.ItemContent) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 137)))) {
            return this._ItemContent_58_5;
        }
        if (((token === import14.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 138)))) {
            return this._List_11_3;
        }
        if (((token === import15.Item) && ((142 <= requestNodeIndex) && (requestNodeIndex <= 143)))) {
            return this._Item_142_4;
        }
        if (((token === import16.ListHeader) && ((142 <= requestNodeIndex) && (requestNodeIndex <= 143)))) {
            return this._ListHeader_142_5;
        }
        if (((token === import18.Label) && ((147 <= requestNodeIndex) && (requestNodeIndex <= 148)))) {
            return this._Label_147_3;
        }
        if (((token === import22.Option) && ((152 <= requestNodeIndex) && (requestNodeIndex <= 153)))) {
            return this._Option_152_3;
        }
        if (((token === import22.Option) && ((155 <= requestNodeIndex) && (requestNodeIndex <= 156)))) {
            return this._Option_155_3;
        }
        if (((token === import22.Option) && ((158 <= requestNodeIndex) && (requestNodeIndex <= 159)))) {
            return this._Option_158_3;
        }
        if (((token === import22.Option) && ((161 <= requestNodeIndex) && (requestNodeIndex <= 162)))) {
            return this._Option_161_3;
        }
        if (((token === import22.Option) && ((164 <= requestNodeIndex) && (requestNodeIndex <= 165)))) {
            return this._Option_164_3;
        }
        if (((token === import22.Option) && ((167 <= requestNodeIndex) && (requestNodeIndex <= 168)))) {
            return this._Option_167_3;
        }
        if (((token === import22.Option) && ((170 <= requestNodeIndex) && (requestNodeIndex <= 171)))) {
            return this._Option_170_3;
        }
        if (((token === import22.Option) && ((173 <= requestNodeIndex) && (requestNodeIndex <= 174)))) {
            return this._Option_173_3;
        }
        if (((token === import22.Option) && ((176 <= requestNodeIndex) && (requestNodeIndex <= 177)))) {
            return this._Option_176_3;
        }
        if (((token === import22.Option) && ((179 <= requestNodeIndex) && (requestNodeIndex <= 180)))) {
            return this._Option_179_3;
        }
        if (((token === import19.Select) && ((150 <= requestNodeIndex) && (requestNodeIndex <= 181)))) {
            return this._Select_150_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((150 <= requestNodeIndex) && (requestNodeIndex <= 181)))) {
            return this._NG_VALUE_ACCESSOR_150_5;
        }
        if (((token === import20.NgModel) && ((150 <= requestNodeIndex) && (requestNodeIndex <= 181)))) {
            return this._NgModel_150_6;
        }
        if (((token === import42.NgControl) && ((150 <= requestNodeIndex) && (requestNodeIndex <= 181)))) {
            return this._NgControl_150_7;
        }
        if (((token === import21.NgControlStatus) && ((150 <= requestNodeIndex) && (requestNodeIndex <= 181)))) {
            return this._NgControlStatus_150_8;
        }
        if (((token === import15.Item) && ((145 <= requestNodeIndex) && (requestNodeIndex <= 182)))) {
            return this._Item_145_4;
        }
        if (((token === import15.ItemContent) && ((145 <= requestNodeIndex) && (requestNodeIndex <= 182)))) {
            return this._ItemContent_145_5;
        }
        if (((token === import18.Label) && ((186 <= requestNodeIndex) && (requestNodeIndex <= 187)))) {
            return this._Label_186_3;
        }
        if (((token === import39.TemplateRef) && (191 === requestNodeIndex))) {
            return this._TemplateRef_191_5;
        }
        if (((token === import23.NgFor) && (191 === requestNodeIndex))) {
            return this._NgFor_191_6;
        }
        if (((token === import19.Select) && ((189 <= requestNodeIndex) && (requestNodeIndex <= 192)))) {
            return this._Select_189_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((189 <= requestNodeIndex) && (requestNodeIndex <= 192)))) {
            return this._NG_VALUE_ACCESSOR_189_5;
        }
        if (((token === import20.NgModel) && ((189 <= requestNodeIndex) && (requestNodeIndex <= 192)))) {
            return this._NgModel_189_6;
        }
        if (((token === import42.NgControl) && ((189 <= requestNodeIndex) && (requestNodeIndex <= 192)))) {
            return this._NgControl_189_7;
        }
        if (((token === import21.NgControlStatus) && ((189 <= requestNodeIndex) && (requestNodeIndex <= 192)))) {
            return this._NgControlStatus_189_8;
        }
        if (((token === import15.Item) && ((184 <= requestNodeIndex) && (requestNodeIndex <= 193)))) {
            return this._Item_184_4;
        }
        if (((token === import15.ItemContent) && ((184 <= requestNodeIndex) && (requestNodeIndex <= 193)))) {
            return this._ItemContent_184_5;
        }
        if (((token === import18.Label) && ((197 <= requestNodeIndex) && (requestNodeIndex <= 198)))) {
            return this._Label_197_3;
        }
        if (((token === import22.Option) && ((202 <= requestNodeIndex) && (requestNodeIndex <= 203)))) {
            return this._Option_202_3;
        }
        if (((token === import19.Select) && ((200 <= requestNodeIndex) && (requestNodeIndex <= 204)))) {
            return this._Select_200_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((200 <= requestNodeIndex) && (requestNodeIndex <= 204)))) {
            return this._NG_VALUE_ACCESSOR_200_5;
        }
        if (((token === import15.Item) && ((195 <= requestNodeIndex) && (requestNodeIndex <= 205)))) {
            return this._Item_195_4;
        }
        if (((token === import15.ItemContent) && ((195 <= requestNodeIndex) && (requestNodeIndex <= 205)))) {
            return this._ItemContent_195_5;
        }
        if (((token === import14.List) && ((140 <= requestNodeIndex) && (requestNodeIndex <= 206)))) {
            return this._List_140_3;
        }
        if (((token === import15.Item) && ((210 <= requestNodeIndex) && (requestNodeIndex <= 211)))) {
            return this._Item_210_4;
        }
        if (((token === import16.ListHeader) && ((210 <= requestNodeIndex) && (requestNodeIndex <= 211)))) {
            return this._ListHeader_210_5;
        }
        if (((token === import18.Label) && ((215 <= requestNodeIndex) && (requestNodeIndex <= 216)))) {
            return this._Label_215_3;
        }
        if (((token === import22.Option) && ((220 <= requestNodeIndex) && (requestNodeIndex <= 221)))) {
            return this._Option_220_3;
        }
        if (((token === import22.Option) && ((223 <= requestNodeIndex) && (requestNodeIndex <= 224)))) {
            return this._Option_223_3;
        }
        if (((token === import22.Option) && ((226 <= requestNodeIndex) && (requestNodeIndex <= 227)))) {
            return this._Option_226_3;
        }
        if (((token === import22.Option) && ((229 <= requestNodeIndex) && (requestNodeIndex <= 230)))) {
            return this._Option_229_3;
        }
        if (((token === import19.Select) && ((218 <= requestNodeIndex) && (requestNodeIndex <= 231)))) {
            return this._Select_218_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((218 <= requestNodeIndex) && (requestNodeIndex <= 231)))) {
            return this._NG_VALUE_ACCESSOR_218_5;
        }
        if (((token === import20.NgModel) && ((218 <= requestNodeIndex) && (requestNodeIndex <= 231)))) {
            return this._NgModel_218_6;
        }
        if (((token === import42.NgControl) && ((218 <= requestNodeIndex) && (requestNodeIndex <= 231)))) {
            return this._NgControl_218_7;
        }
        if (((token === import21.NgControlStatus) && ((218 <= requestNodeIndex) && (requestNodeIndex <= 231)))) {
            return this._NgControlStatus_218_8;
        }
        if (((token === import15.Item) && ((213 <= requestNodeIndex) && (requestNodeIndex <= 232)))) {
            return this._Item_213_4;
        }
        if (((token === import15.ItemContent) && ((213 <= requestNodeIndex) && (requestNodeIndex <= 232)))) {
            return this._ItemContent_213_5;
        }
        if (((token === import18.Label) && ((236 <= requestNodeIndex) && (requestNodeIndex <= 237)))) {
            return this._Label_236_3;
        }
        if (((token === import22.Option) && ((241 <= requestNodeIndex) && (requestNodeIndex <= 242)))) {
            return this._Option_241_3;
        }
        if (((token === import22.Option) && ((244 <= requestNodeIndex) && (requestNodeIndex <= 245)))) {
            return this._Option_244_3;
        }
        if (((token === import22.Option) && ((247 <= requestNodeIndex) && (requestNodeIndex <= 248)))) {
            return this._Option_247_3;
        }
        if (((token === import22.Option) && ((250 <= requestNodeIndex) && (requestNodeIndex <= 251)))) {
            return this._Option_250_3;
        }
        if (((token === import22.Option) && ((253 <= requestNodeIndex) && (requestNodeIndex <= 254)))) {
            return this._Option_253_3;
        }
        if (((token === import19.Select) && ((239 <= requestNodeIndex) && (requestNodeIndex <= 255)))) {
            return this._Select_239_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((239 <= requestNodeIndex) && (requestNodeIndex <= 255)))) {
            return this._NG_VALUE_ACCESSOR_239_5;
        }
        if (((token === import20.NgModel) && ((239 <= requestNodeIndex) && (requestNodeIndex <= 255)))) {
            return this._NgModel_239_6;
        }
        if (((token === import42.NgControl) && ((239 <= requestNodeIndex) && (requestNodeIndex <= 255)))) {
            return this._NgControl_239_7;
        }
        if (((token === import21.NgControlStatus) && ((239 <= requestNodeIndex) && (requestNodeIndex <= 255)))) {
            return this._NgControlStatus_239_8;
        }
        if (((token === import15.Item) && ((234 <= requestNodeIndex) && (requestNodeIndex <= 256)))) {
            return this._Item_234_4;
        }
        if (((token === import15.ItemContent) && ((234 <= requestNodeIndex) && (requestNodeIndex <= 256)))) {
            return this._ItemContent_234_5;
        }
        if (((token === import14.List) && ((208 <= requestNodeIndex) && (requestNodeIndex <= 257)))) {
            return this._List_208_3;
        }
        if (((token === import13.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 258)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_7 = this.context.gender;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._NgModel_21_6.model = currVal_7;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_7, currVal_7);
            this._expr_7 = currVal_7;
        }
        if ((changes !== null)) {
            this._NgModel_21_6.ngOnChanges(changes);
        }
        var currVal_14 = 'f';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._Option_23_3.value = currVal_14;
            this._expr_14 = currVal_14;
        }
        var currVal_15 = 'm';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._Option_26_3.value = currVal_15;
            this._expr_15 = currVal_15;
        }
        var currVal_19 = 'Dismiss';
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._Select_36_4.cancelText = currVal_19;
            this._expr_19 = currVal_19;
        }
        var currVal_20 = 'Okay';
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this._Select_36_4.okText = currVal_20;
            this._expr_20 = currVal_20;
        }
        changes = null;
        var currVal_22 = this.context.gaming;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._NgModel_36_6.model = currVal_22;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_22, currVal_22);
            this._expr_22 = currVal_22;
        }
        if ((changes !== null)) {
            this._NgModel_36_6.ngOnChanges(changes);
        }
        var currVal_29 = 'nes';
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this._Option_38_3.value = currVal_29;
            this._expr_29 = currVal_29;
        }
        var currVal_30 = 'n64';
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this._Option_41_3.value = currVal_30;
            this._expr_30 = currVal_30;
        }
        var currVal_31 = 'ps';
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this._Option_44_3.value = currVal_31;
            this._expr_31 = currVal_31;
        }
        var currVal_32 = 'genesis';
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this._Option_47_3.value = currVal_32;
            this._expr_32 = currVal_32;
        }
        var currVal_33 = 'saturn';
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this._Option_50_3.value = currVal_33;
            this._expr_33 = currVal_33;
        }
        var currVal_34 = 'snes';
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this._Option_53_3.value = currVal_34;
            this._expr_34 = currVal_34;
        }
        var currVal_39 = '01';
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this._Option_65_3.value = currVal_39;
            this._expr_39 = currVal_39;
        }
        var currVal_40 = '02';
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this._Option_68_3.value = currVal_40;
            this._expr_40 = currVal_40;
        }
        var currVal_41 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this._Option_71_3.selected = currVal_41;
            this._expr_41 = currVal_41;
        }
        var currVal_42 = '03';
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this._Option_71_3.value = currVal_42;
            this._expr_42 = currVal_42;
        }
        var currVal_43 = '04';
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this._Option_74_3.value = currVal_43;
            this._expr_43 = currVal_43;
        }
        var currVal_44 = '05';
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this._Option_77_3.value = currVal_44;
            this._expr_44 = currVal_44;
        }
        var currVal_45 = '06';
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this._Option_80_3.value = currVal_45;
            this._expr_45 = currVal_45;
        }
        var currVal_46 = '07';
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this._Option_83_3.value = currVal_46;
            this._expr_46 = currVal_46;
        }
        var currVal_47 = '08';
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this._Option_86_3.value = currVal_47;
            this._expr_47 = currVal_47;
        }
        var currVal_48 = '09';
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this._Option_89_3.value = currVal_48;
            this._expr_48 = currVal_48;
        }
        var currVal_49 = '10';
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this._Option_92_3.value = currVal_49;
            this._expr_49 = currVal_49;
        }
        var currVal_50 = '11';
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this._Option_95_3.value = currVal_50;
            this._expr_50 = currVal_50;
        }
        var currVal_51 = '12';
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this._Option_98_3.value = currVal_51;
            this._expr_51 = currVal_51;
        }
        var currVal_56 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this._Option_119_3.selected = currVal_56;
            this._expr_56 = currVal_56;
        }
        var currVal_60 = 'Nah';
        if (import4.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this._Select_150_4.cancelText = currVal_60;
            this._expr_60 = currVal_60;
        }
        var currVal_61 = 'Okay!';
        if (import4.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this._Select_150_4.okText = currVal_61;
            this._expr_61 = currVal_61;
        }
        var currVal_62 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this._Select_150_4.multiple = currVal_62;
            this._expr_62 = currVal_62;
        }
        changes = null;
        var currVal_64 = this.context.toppings;
        if (import4.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this._NgModel_150_6.model = currVal_64;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_64, currVal_64);
            this._expr_64 = currVal_64;
        }
        if ((changes !== null)) {
            this._NgModel_150_6.ngOnChanges(changes);
        }
        var currVal_71 = 'bacon';
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this._Option_152_3.value = currVal_71;
            this._expr_71 = currVal_71;
        }
        var currVal_72 = 'olives';
        if (import4.checkBinding(throwOnChange, this._expr_72, currVal_72)) {
            this._Option_155_3.value = currVal_72;
            this._expr_72 = currVal_72;
        }
        var currVal_73 = 'xcheese';
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this._Option_158_3.value = currVal_73;
            this._expr_73 = currVal_73;
        }
        var currVal_74 = 'peppers';
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this._Option_161_3.value = currVal_74;
            this._expr_74 = currVal_74;
        }
        var currVal_75 = 'mushrooms';
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this._Option_164_3.value = currVal_75;
            this._expr_75 = currVal_75;
        }
        var currVal_76 = 'onions';
        if (import4.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this._Option_167_3.value = currVal_76;
            this._expr_76 = currVal_76;
        }
        var currVal_77 = 'pepperoni';
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this._Option_170_3.value = currVal_77;
            this._expr_77 = currVal_77;
        }
        var currVal_78 = 'pineapple';
        if (import4.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this._Option_173_3.value = currVal_78;
            this._expr_78 = currVal_78;
        }
        var currVal_79 = 'sausage';
        if (import4.checkBinding(throwOnChange, this._expr_79, currVal_79)) {
            this._Option_176_3.value = currVal_79;
            this._expr_79 = currVal_79;
        }
        var currVal_80 = 'Spinach';
        if (import4.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this._Option_179_3.value = currVal_80;
            this._expr_80 = currVal_80;
        }
        var currVal_84 = this.context.petAlertOpts;
        if (import4.checkBinding(throwOnChange, this._expr_84, currVal_84)) {
            this._Select_189_4.selectOptions = currVal_84;
            this._expr_84 = currVal_84;
        }
        var currVal_85 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this._Select_189_4.multiple = currVal_85;
            this._expr_85 = currVal_85;
        }
        changes = null;
        var currVal_87 = this.context.pets;
        if (import4.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this._NgModel_189_6.model = currVal_87;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_87, currVal_87);
            this._expr_87 = currVal_87;
        }
        if ((changes !== null)) {
            this._NgModel_189_6.ngOnChanges(changes);
        }
        changes = null;
        var currVal_94 = this.context.petData;
        if (import4.checkBinding(throwOnChange, this._expr_94, currVal_94)) {
            this._NgFor_191_6.ngForOf = currVal_94;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_94, currVal_94);
            this._expr_94 = currVal_94;
        }
        if ((changes !== null)) {
            this._NgFor_191_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_191_6.ngDoCheck();
        }
        var currVal_97 = '';
        if (import4.checkBinding(throwOnChange, this._expr_97, currVal_97)) {
            this._Select_200_4.multiple = currVal_97;
            this._expr_97 = currVal_97;
        }
        var currVal_98 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_98, currVal_98)) {
            this._Select_200_4.disabled = currVal_98;
            this._expr_98 = currVal_98;
        }
        var currVal_103 = 'action-sheet';
        if (import4.checkBinding(throwOnChange, this._expr_103, currVal_103)) {
            this._Select_218_4.interface = currVal_103;
            this._expr_103 = currVal_103;
        }
        changes = null;
        var currVal_105 = this.context.notifications;
        if (import4.checkBinding(throwOnChange, this._expr_105, currVal_105)) {
            this._NgModel_218_6.model = currVal_105;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_105, currVal_105);
            this._expr_105 = currVal_105;
        }
        if ((changes !== null)) {
            this._NgModel_218_6.ngOnChanges(changes);
        }
        var currVal_112 = 'mute_15';
        if (import4.checkBinding(throwOnChange, this._expr_112, currVal_112)) {
            this._Option_220_3.value = currVal_112;
            this._expr_112 = currVal_112;
        }
        var currVal_113 = 'mute_1';
        if (import4.checkBinding(throwOnChange, this._expr_113, currVal_113)) {
            this._Option_223_3.value = currVal_113;
            this._expr_113 = currVal_113;
        }
        var currVal_114 = 'mute_23';
        if (import4.checkBinding(throwOnChange, this._expr_114, currVal_114)) {
            this._Option_226_3.value = currVal_114;
            this._expr_114 = currVal_114;
        }
        var currVal_115 = 'mute_inf';
        if (import4.checkBinding(throwOnChange, this._expr_115, currVal_115)) {
            this._Option_229_3.value = currVal_115;
            this._expr_115 = currVal_115;
        }
        var currVal_119 = 'action-sheet';
        if (import4.checkBinding(throwOnChange, this._expr_119, currVal_119)) {
            this._Select_239_4.interface = currVal_119;
            this._expr_119 = currVal_119;
        }
        changes = null;
        var currVal_121 = this.context.rating;
        if (import4.checkBinding(throwOnChange, this._expr_121, currVal_121)) {
            this._NgModel_239_6.model = currVal_121;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_121, currVal_121);
            this._expr_121 = currVal_121;
        }
        if ((changes !== null)) {
            this._NgModel_239_6.ngOnChanges(changes);
        }
        var currVal_128 = '1';
        if (import4.checkBinding(throwOnChange, this._expr_128, currVal_128)) {
            this._Option_241_3.value = currVal_128;
            this._expr_128 = currVal_128;
        }
        var currVal_129 = '2';
        if (import4.checkBinding(throwOnChange, this._expr_129, currVal_129)) {
            this._Option_244_3.value = currVal_129;
            this._expr_129 = currVal_129;
        }
        var currVal_130 = '3';
        if (import4.checkBinding(throwOnChange, this._expr_130, currVal_130)) {
            this._Option_247_3.value = currVal_130;
            this._expr_130 = currVal_130;
        }
        var currVal_131 = '4';
        if (import4.checkBinding(throwOnChange, this._expr_131, currVal_131)) {
            this._Option_250_3.value = currVal_131;
            this._expr_131 = currVal_131;
        }
        var currVal_132 = '5';
        if (import4.checkBinding(throwOnChange, this._expr_132, currVal_132)) {
            this._Option_253_3.value = currVal_132;
            this._expr_132 = currVal_132;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([]);
                this._Item_13_4._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Option_21_0.dirty) {
                this._query_Option_21_0.reset([
                    this._Option_23_3,
                    this._Option_26_3
                ]);
                this._Select_21_4.options = this._query_Option_21_0;
                this._query_Option_21_0.notifyOnChanges();
            }
            if (this._query_Button_16_1.dirty) {
                this._query_Button_16_1.reset([]);
                this._Item_16_4._buttons = this._query_Button_16_1;
                this._query_Button_16_1.notifyOnChanges();
            }
            if (this._query_Icon_16_2.dirty) {
                this._query_Icon_16_2.reset([]);
                this._Item_16_4._icons = this._query_Icon_16_2;
                this._query_Icon_16_2.notifyOnChanges();
            }
            if (this._query_Option_36_0.dirty) {
                this._query_Option_36_0.reset([
                    this._Option_38_3,
                    this._Option_41_3,
                    this._Option_44_3,
                    this._Option_47_3,
                    this._Option_50_3,
                    this._Option_53_3
                ]);
                this._Select_36_4.options = this._query_Option_36_0;
                this._query_Option_36_0.notifyOnChanges();
            }
            if (this._query_Button_31_1.dirty) {
                this._query_Button_31_1.reset([]);
                this._Item_31_4._buttons = this._query_Button_31_1;
                this._query_Button_31_1.notifyOnChanges();
            }
            if (this._query_Icon_31_2.dirty) {
                this._query_Icon_31_2.reset([]);
                this._Item_31_4._icons = this._query_Icon_31_2;
                this._query_Icon_31_2.notifyOnChanges();
            }
            if (this._query_Option_63_0.dirty) {
                this._query_Option_63_0.reset([
                    this._Option_65_3,
                    this._Option_68_3,
                    this._Option_71_3,
                    this._Option_74_3,
                    this._Option_77_3,
                    this._Option_80_3,
                    this._Option_83_3,
                    this._Option_86_3,
                    this._Option_89_3,
                    this._Option_92_3,
                    this._Option_95_3,
                    this._Option_98_3
                ]);
                this._Select_63_4.options = this._query_Option_63_0;
                this._query_Option_63_0.notifyOnChanges();
            }
            if (this._query_Option_102_0.dirty) {
                this._query_Option_102_0.reset([
                    this._Option_104_3,
                    this._Option_107_3,
                    this._Option_110_3,
                    this._Option_113_3,
                    this._Option_116_3,
                    this._Option_119_3,
                    this._Option_122_3,
                    this._Option_125_3,
                    this._Option_128_3,
                    this._Option_131_3,
                    this._Option_134_3
                ]);
                this._Select_102_4.options = this._query_Option_102_0;
                this._query_Option_102_0.notifyOnChanges();
            }
            if (this._query_Button_58_1.dirty) {
                this._query_Button_58_1.reset([]);
                this._Item_58_4._buttons = this._query_Button_58_1;
                this._query_Button_58_1.notifyOnChanges();
            }
            if (this._query_Icon_58_2.dirty) {
                this._query_Icon_58_2.reset([]);
                this._Item_58_4._icons = this._query_Icon_58_2;
                this._query_Icon_58_2.notifyOnChanges();
            }
            if (this._query_Button_142_1.dirty) {
                this._query_Button_142_1.reset([]);
                this._Item_142_4._buttons = this._query_Button_142_1;
                this._query_Button_142_1.notifyOnChanges();
            }
            if (this._query_Icon_142_2.dirty) {
                this._query_Icon_142_2.reset([]);
                this._Item_142_4._icons = this._query_Icon_142_2;
                this._query_Icon_142_2.notifyOnChanges();
            }
            if (this._query_Option_150_0.dirty) {
                this._query_Option_150_0.reset([
                    this._Option_152_3,
                    this._Option_155_3,
                    this._Option_158_3,
                    this._Option_161_3,
                    this._Option_164_3,
                    this._Option_167_3,
                    this._Option_170_3,
                    this._Option_173_3,
                    this._Option_176_3,
                    this._Option_179_3
                ]);
                this._Select_150_4.options = this._query_Option_150_0;
                this._query_Option_150_0.notifyOnChanges();
            }
            if (this._query_Button_145_1.dirty) {
                this._query_Button_145_1.reset([]);
                this._Item_145_4._buttons = this._query_Button_145_1;
                this._query_Button_145_1.notifyOnChanges();
            }
            if (this._query_Icon_145_2.dirty) {
                this._query_Icon_145_2.reset([]);
                this._Item_145_4._icons = this._query_Icon_145_2;
                this._query_Icon_145_2.notifyOnChanges();
            }
            if (this._query_Option_189_0.dirty) {
                this._query_Option_189_0.reset([this._appEl_191.mapNestedViews(_View_ApiDemoPage1, function (nestedView) {
                        return [nestedView._Option_0_3];
                    })]);
                this._Select_189_4.options = this._query_Option_189_0;
                this._query_Option_189_0.notifyOnChanges();
            }
            if (this._query_Button_184_1.dirty) {
                this._query_Button_184_1.reset([]);
                this._Item_184_4._buttons = this._query_Button_184_1;
                this._query_Button_184_1.notifyOnChanges();
            }
            if (this._query_Icon_184_2.dirty) {
                this._query_Icon_184_2.reset([]);
                this._Item_184_4._icons = this._query_Icon_184_2;
                this._query_Icon_184_2.notifyOnChanges();
            }
            if (this._query_Option_200_0.dirty) {
                this._query_Option_200_0.reset([this._Option_202_3]);
                this._Select_200_4.options = this._query_Option_200_0;
                this._query_Option_200_0.notifyOnChanges();
            }
            if (this._query_Button_195_1.dirty) {
                this._query_Button_195_1.reset([]);
                this._Item_195_4._buttons = this._query_Button_195_1;
                this._query_Button_195_1.notifyOnChanges();
            }
            if (this._query_Icon_195_2.dirty) {
                this._query_Icon_195_2.reset([]);
                this._Item_195_4._icons = this._query_Icon_195_2;
                this._query_Icon_195_2.notifyOnChanges();
            }
            if (this._query_Button_210_1.dirty) {
                this._query_Button_210_1.reset([]);
                this._Item_210_4._buttons = this._query_Button_210_1;
                this._query_Button_210_1.notifyOnChanges();
            }
            if (this._query_Icon_210_2.dirty) {
                this._query_Icon_210_2.reset([]);
                this._Item_210_4._icons = this._query_Icon_210_2;
                this._query_Icon_210_2.notifyOnChanges();
            }
            if (this._query_Option_218_0.dirty) {
                this._query_Option_218_0.reset([
                    this._Option_220_3,
                    this._Option_223_3,
                    this._Option_226_3,
                    this._Option_229_3
                ]);
                this._Select_218_4.options = this._query_Option_218_0;
                this._query_Option_218_0.notifyOnChanges();
            }
            if (this._query_Button_213_1.dirty) {
                this._query_Button_213_1.reset([]);
                this._Item_213_4._buttons = this._query_Button_213_1;
                this._query_Button_213_1.notifyOnChanges();
            }
            if (this._query_Icon_213_2.dirty) {
                this._query_Icon_213_2.reset([]);
                this._Item_213_4._icons = this._query_Icon_213_2;
                this._query_Icon_213_2.notifyOnChanges();
            }
            if (this._query_Option_239_0.dirty) {
                this._query_Option_239_0.reset([
                    this._Option_241_3,
                    this._Option_244_3,
                    this._Option_247_3,
                    this._Option_250_3,
                    this._Option_253_3
                ]);
                this._Select_239_4.options = this._query_Option_239_0;
                this._query_Option_239_0.notifyOnChanges();
            }
            if (this._query_Button_234_1.dirty) {
                this._query_Button_234_1.reset([]);
                this._Item_234_4._buttons = this._query_Button_234_1;
                this._query_Button_234_1.notifyOnChanges();
            }
            if (this._query_Icon_234_2.dirty) {
                this._query_Icon_234_2.reset([]);
                this._Item_234_4._icons = this._query_Icon_234_2;
                this._query_Icon_234_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_21_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_16_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_36_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_31_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_63_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_102_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_58_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_142_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_150_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_145_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_189_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_184_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_200_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_195_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_210_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_218_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_213_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_239_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_234_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_6 = this._Select_21_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_21, 'select-disabled', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_8 = this._NgControlStatus_21_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_21, 'ng-untouched', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_21_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_21, 'ng-touched', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_21_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_21, 'ng-pristine', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_21_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_21, 'ng-dirty', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatus_21_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_21, 'ng-valid', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_21_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_21, 'ng-invalid', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_21 = this._Select_36_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_36, 'select-disabled', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_23 = this._NgControlStatus_36_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_36, 'ng-untouched', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = this._NgControlStatus_36_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_36, 'ng-touched', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this._NgControlStatus_36_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_36, 'ng-pristine', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_36_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_36, 'ng-dirty', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_36_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_36, 'ng-valid', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._NgControlStatus_36_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_36, 'ng-invalid', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_38 = this._Select_63_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_63, 'select-disabled', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_55 = this._Select_102_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setElementClass(this._el_102, 'select-disabled', currVal_55);
            this._expr_55 = currVal_55;
        }
        var currVal_63 = this._Select_150_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this.renderer.setElementClass(this._el_150, 'select-disabled', currVal_63);
            this._expr_63 = currVal_63;
        }
        var currVal_65 = this._NgControlStatus_150_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_65, currVal_65)) {
            this.renderer.setElementClass(this._el_150, 'ng-untouched', currVal_65);
            this._expr_65 = currVal_65;
        }
        var currVal_66 = this._NgControlStatus_150_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this.renderer.setElementClass(this._el_150, 'ng-touched', currVal_66);
            this._expr_66 = currVal_66;
        }
        var currVal_67 = this._NgControlStatus_150_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_67, currVal_67)) {
            this.renderer.setElementClass(this._el_150, 'ng-pristine', currVal_67);
            this._expr_67 = currVal_67;
        }
        var currVal_68 = this._NgControlStatus_150_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_68, currVal_68)) {
            this.renderer.setElementClass(this._el_150, 'ng-dirty', currVal_68);
            this._expr_68 = currVal_68;
        }
        var currVal_69 = this._NgControlStatus_150_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setElementClass(this._el_150, 'ng-valid', currVal_69);
            this._expr_69 = currVal_69;
        }
        var currVal_70 = this._NgControlStatus_150_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this.renderer.setElementClass(this._el_150, 'ng-invalid', currVal_70);
            this._expr_70 = currVal_70;
        }
        var currVal_86 = this._Select_189_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this.renderer.setElementClass(this._el_189, 'select-disabled', currVal_86);
            this._expr_86 = currVal_86;
        }
        var currVal_88 = this._NgControlStatus_189_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_88, currVal_88)) {
            this.renderer.setElementClass(this._el_189, 'ng-untouched', currVal_88);
            this._expr_88 = currVal_88;
        }
        var currVal_89 = this._NgControlStatus_189_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_89, currVal_89)) {
            this.renderer.setElementClass(this._el_189, 'ng-touched', currVal_89);
            this._expr_89 = currVal_89;
        }
        var currVal_90 = this._NgControlStatus_189_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_90, currVal_90)) {
            this.renderer.setElementClass(this._el_189, 'ng-pristine', currVal_90);
            this._expr_90 = currVal_90;
        }
        var currVal_91 = this._NgControlStatus_189_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_91, currVal_91)) {
            this.renderer.setElementClass(this._el_189, 'ng-dirty', currVal_91);
            this._expr_91 = currVal_91;
        }
        var currVal_92 = this._NgControlStatus_189_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_92, currVal_92)) {
            this.renderer.setElementClass(this._el_189, 'ng-valid', currVal_92);
            this._expr_92 = currVal_92;
        }
        var currVal_93 = this._NgControlStatus_189_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_93, currVal_93)) {
            this.renderer.setElementClass(this._el_189, 'ng-invalid', currVal_93);
            this._expr_93 = currVal_93;
        }
        var currVal_99 = this._Select_200_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_99, currVal_99)) {
            this.renderer.setElementClass(this._el_200, 'select-disabled', currVal_99);
            this._expr_99 = currVal_99;
        }
        var currVal_104 = this._Select_218_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_104, currVal_104)) {
            this.renderer.setElementClass(this._el_218, 'select-disabled', currVal_104);
            this._expr_104 = currVal_104;
        }
        var currVal_106 = this._NgControlStatus_218_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_106, currVal_106)) {
            this.renderer.setElementClass(this._el_218, 'ng-untouched', currVal_106);
            this._expr_106 = currVal_106;
        }
        var currVal_107 = this._NgControlStatus_218_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_107, currVal_107)) {
            this.renderer.setElementClass(this._el_218, 'ng-touched', currVal_107);
            this._expr_107 = currVal_107;
        }
        var currVal_108 = this._NgControlStatus_218_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setElementClass(this._el_218, 'ng-pristine', currVal_108);
            this._expr_108 = currVal_108;
        }
        var currVal_109 = this._NgControlStatus_218_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setElementClass(this._el_218, 'ng-dirty', currVal_109);
            this._expr_109 = currVal_109;
        }
        var currVal_110 = this._NgControlStatus_218_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setElementClass(this._el_218, 'ng-valid', currVal_110);
            this._expr_110 = currVal_110;
        }
        var currVal_111 = this._NgControlStatus_218_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this.renderer.setElementClass(this._el_218, 'ng-invalid', currVal_111);
            this._expr_111 = currVal_111;
        }
        var currVal_120 = this._Select_239_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_120, currVal_120)) {
            this.renderer.setElementClass(this._el_239, 'select-disabled', currVal_120);
            this._expr_120 = currVal_120;
        }
        var currVal_122 = this._NgControlStatus_239_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_122, currVal_122)) {
            this.renderer.setElementClass(this._el_239, 'ng-untouched', currVal_122);
            this._expr_122 = currVal_122;
        }
        var currVal_123 = this._NgControlStatus_239_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_123, currVal_123)) {
            this.renderer.setElementClass(this._el_239, 'ng-touched', currVal_123);
            this._expr_123 = currVal_123;
        }
        var currVal_124 = this._NgControlStatus_239_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_124, currVal_124)) {
            this.renderer.setElementClass(this._el_239, 'ng-pristine', currVal_124);
            this._expr_124 = currVal_124;
        }
        var currVal_125 = this._NgControlStatus_239_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_125, currVal_125)) {
            this.renderer.setElementClass(this._el_239, 'ng-dirty', currVal_125);
            this._expr_125 = currVal_125;
        }
        var currVal_126 = this._NgControlStatus_239_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_126, currVal_126)) {
            this.renderer.setElementClass(this._el_239, 'ng-valid', currVal_126);
            this._expr_126 = currVal_126;
        }
        var currVal_127 = this._NgControlStatus_239_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_127, currVal_127)) {
            this.renderer.setElementClass(this._el_239, 'ng-invalid', currVal_127);
            this._expr_127 = currVal_127;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Select_21_4.ngOnDestroy();
        this._NgModel_21_6.ngOnDestroy();
        this._Select_36_4.ngOnDestroy();
        this._NgModel_36_6.ngOnDestroy();
        this._Select_63_4.ngOnDestroy();
        this._Select_102_4.ngOnDestroy();
        this._Select_150_4.ngOnDestroy();
        this._NgModel_150_6.ngOnDestroy();
        this._Select_189_4.ngOnDestroy();
        this._NgModel_189_6.ngOnDestroy();
        this._Select_200_4.ngOnDestroy();
        this._Select_218_4.ngOnDestroy();
        this._NgModel_218_6.ngOnDestroy();
        this._Select_239_4.ngOnDestroy();
        this._NgModel_239_6.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.gender = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_21_1 = function ($event) {
        this._appEl_21.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_21_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_21_2 = function ($event) {
        this._appEl_21.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_21_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_36_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.gaming = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_36_1 = function ($event) {
        this._appEl_36.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_36_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_36_2 = function ($event) {
        this._appEl_36.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_36_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionChange_63_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.monthChange($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_63_1 = function ($event) {
        this._appEl_63.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_63_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_63_2 = function ($event) {
        this._appEl_63.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_63_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionChange_102_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.yearChange($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_102_1 = function ($event) {
        this._appEl_102.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_102_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_102_2 = function ($event) {
        this._appEl_102.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_102_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_150_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.toppings = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_150_1 = function ($event) {
        this._appEl_150.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_150_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_150_2 = function ($event) {
        this._appEl_150.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_150_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_189_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.pets = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_189_1 = function ($event) {
        this._appEl_189.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_189_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_189_2 = function ($event) {
        this._appEl_189.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_189_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_200_0 = function ($event) {
        this._appEl_200.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_200_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_200_1 = function ($event) {
        this._appEl_200.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_200_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_218_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.notifications = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_218_1 = function ($event) {
        this._appEl_218.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_218_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_218_2 = function ($event) {
        this._appEl_218.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_218_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_239_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.rating = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_239_1 = function ($event) {
        this._appEl_239.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_239_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_239_2 = function ($event) {
        this._appEl_239.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_239_4._keyup() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/select/page.html', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage1 = (function (_super) {
    __extends(_View_ApiDemoPage1, _super);
    function _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage1, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-option', null);
        this._Option_0_3 = new import22.Option(new import25.ElementRef(this._el_0));
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ApiDemoPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.Option) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Option_0_3;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.$implicit.value;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Option_0_3.value = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.text, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoPage1.prototype.dirtyParentQueriesInternal = function () {
        this.parent._query_Option_189_0.setDirty();
    };
    return _View_ApiDemoPage1;
}(import1.AppView));
function viewFactory_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import44.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import43.Nav(this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import45.NavControllerBase, null), this.parentInjector.get(import28.App), this.parentInjector.get(import24.Config), this.parentInjector.get(import32.Keyboard), new import25.ElementRef(this._el_0), this.parentInjector.get(import33.NgZone), this.renderer, this.parentInjector.get(import46.ComponentFactoryResolver), this.parentInjector.get(import35.GestureController), this.parentInjector.get(import47.TransitionController), this.parentInjector.get(import48.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import43.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/select/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
