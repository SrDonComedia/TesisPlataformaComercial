(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~paginas-compromiso-docente-compromiso-form-compromiso-form-module-ngfactory~paginas-evaluaci~1450a284"],{

/***/ "M9ds":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/tabs.js ***!
  \*********************************************************/
/*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b, ɵangular_material_src_material_tabs_tabs_c, ɵangular_material_src_material_tabs_tabs_d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function() { return MAT_TABS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function() { return MAT_TAB_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInkBar", function() { return MatInkBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTab", function() { return MatTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBody", function() { return MatTabBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function() { return MatTabBodyPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function() { return MatTabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabContent", function() { return MatTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabGroup", function() { return MatTabGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabHeader", function() { return MatTabHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabel", function() { return MatTabLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function() { return MatTabLabelWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLink", function() { return MatTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabNav", function() { return MatTabNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabsModule", function() { return MatTabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function() { return _MAT_INK_BAR_POSITIONER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function() { return _MatTabBodyBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function() { return _MatTabGroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function() { return _MatTabHeaderBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function() { return _MatTabLinkBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function() { return _MatTabNavBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function() { return matTabsAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function() { return _MAT_INK_BAR_POSITIONER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function() { return MAT_TAB_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_c", function() { return MAT_TAB_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_d", function() { return MatPaginatedTabHeader; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "JX7q");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token for the MatInkBar's Positioner. */

var _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MatInkBarPositioner', {
  providedIn: 'root',
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */


function _MAT_INK_BAR_POSITIONER_FACTORY() {
  var method = function method(element) {
    return {
      left: element ? (element.offsetLeft || 0) + 'px' : '0',
      width: element ? (element.offsetWidth || 0) + 'px' : '0'
    };
  };

  return method;
}
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */


var MatInkBar = /*#__PURE__*/function () {
  function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatInkBar);

    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._inkBarPositioner = _inkBarPositioner;
    this._animationMode = _animationMode;
  }
  /**
   * Calculates the styles from the provided element in order to align the ink-bar to that element.
   * Shows the ink bar if previously set as hidden.
   * @param element
   */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatInkBar, [{
    key: "alignToElement",
    value: function alignToElement(element) {
      var _this = this;

      this.show();

      if (typeof requestAnimationFrame !== 'undefined') {
        this._ngZone.runOutsideAngular(function () {
          requestAnimationFrame(function () {
            return _this._setStyles(element);
          });
        });
      } else {
        this._setStyles(element);
      }
    }
    /** Shows the ink bar. */

  }, {
    key: "show",
    value: function show() {
      this._elementRef.nativeElement.style.visibility = 'visible';
    }
    /** Hides the ink bar. */

  }, {
    key: "hide",
    value: function hide() {
      this._elementRef.nativeElement.style.visibility = 'hidden';
    }
    /**
     * Sets the proper styles to the ink bar element.
     * @param element
     */

  }, {
    key: "_setStyles",
    value: function _setStyles(element) {
      var positions = this._inkBarPositioner(element);

      var inkBar = this._elementRef.nativeElement;
      inkBar.style.left = positions.left;
      inkBar.style.width = positions.width;
    }
  }]);

  return MatInkBar;
}();

MatInkBar.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
  args: [{
    selector: 'mat-ink-bar',
    host: {
      'class': 'mat-ink-bar',
      '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
    }
  }]
}];

MatInkBar.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_MAT_INK_BAR_POSITIONER]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */

var MatTabContent = function MatTabContent(
/** Content for the tab. */
template) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabContent);

  this.template = template;
};

MatTabContent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
  args: [{
    selector: '[matTabContent]',
    providers: [{
      provide: MAT_TAB_CONTENT,
      useExisting: MatTabContent
    }]
  }]
}];

MatTabContent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"]
  }];
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MatTabLabel');
/** Used to flag tab labels for use with the portal directive */

var MatTabLabel = /*#__PURE__*/function (_CdkPortal) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabLabel, _CdkPortal);

  var _super = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabLabel);

  function MatTabLabel() {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLabel);

    return _super.apply(this, arguments);
  }

  return MatTabLabel;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["CdkPortal"]);

MatTabLabel.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
  args: [{
    selector: '[mat-tab-label], [matTabLabel]',
    providers: [{
      provide: MAT_TAB_LABEL,
      useExisting: MatTabLabel
    }]
  }]
}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTab.

/** @docs-private */

var MatTabBase = function MatTabBase() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabBase);
};

var _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisabled"])(MatTabBase);
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */


var MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MAT_TAB_GROUP');

var MatTab = /*#__PURE__*/function (_MatTabMixinBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTab, _MatTabMixinBase2);

  var _super2 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTab);

  function MatTab(_viewContainerRef,
  /**
   * @deprecated `_closestTabGroup` parameter to become required.
   * @breaking-change 10.0.0
   */
  _closestTabGroup) {
    var _this2;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTab);

    _this2 = _super2.call(this);
    _this2._viewContainerRef = _viewContainerRef;
    _this2._closestTabGroup = _closestTabGroup;
    /** Plain text label for the tab, used when there is no template label. */

    _this2.textLabel = '';
    /** Portal that will be the hosted content of the tab */

    _this2._contentPortal = null;
    /** Emits whenever the internal state of the tab changes. */

    _this2._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /**
     * The relatively indexed position where 0 represents the center, negative is left, and positive
     * represents the right.
     */

    _this2.position = null;
    /**
     * The initial relatively index origin of the tab if it was created and selected after there
     * was already a selected tab. Provides context of what position the tab should originate from.
     */

    _this2.origin = null;
    /**
     * Whether the tab is currently active.
     */

    _this2.isActive = false;
    return _this2;
  }
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatTab, [{
    key: "templateLabel",
    get: function get() {
      return this._templateLabel;
    },
    set: function set(value) {
      this._setTemplateLabelInput(value);
    }
    /** @docs-private */

  }, {
    key: "content",
    get: function get() {
      return this._contentPortal;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
        this._stateChanges.next();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._stateChanges.complete();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */

  }, {
    key: "_setTemplateLabelInput",
    value: function _setTemplateLabelInput(value) {
      // Only update the templateLabel via query if there is actually
      // a MatTabLabel found. This works around an issue where a user may have
      // manually set `templateLabel` during creation mode, which would then get clobbered
      // by `undefined` when this query resolves.
      if (value) {
        this._templateLabel = value;
      }
    }
  }]);

  return MatTab;
}(_MatTabMixinBase);

MatTab.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
  args: [{
    selector: 'mat-tab',
    template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
    inputs: ['disabled'],
    // tslint:disable-next-line:validate-decorators
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
    exportAs: 'matTab'
  }]
}];

MatTab.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_TAB_GROUP]
    }]
  }];
};

MatTab.propDecorators = {
  templateLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
    args: [MAT_TAB_LABEL]
  }],
  _explicitContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
    args: [MAT_TAB_CONTENT, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"],
      static: true
    }]
  }],
  _implicitContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"], {
      static: true
    }]
  }],
  textLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['label']
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['aria-labelledby']
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material tabs.
 * @docs-private
 */

var matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'none'
  })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => left-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(-100%, 0, 0)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => right-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(100%, 0, 0)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */

var MatTabBodyPortal = /*#__PURE__*/function (_CdkPortalOutlet) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabBodyPortal, _CdkPortalOutlet);

  var _super3 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabBodyPortal);

  function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host,
  /**
   * @deprecated `_document` parameter to be made required.
   * @breaking-change 9.0.0
   */
  _document) {
    var _this3;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabBodyPortal);

    _this3 = _super3.call(this, componentFactoryResolver, viewContainerRef, _document);
    _this3._host = _host;
    /** Subscription to events for when the tab body begins centering. */

    _this3._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    /** Subscription to events for when the tab body finishes leaving from center position. */

    _this3._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    return _this3;
  }
  /** Set initial visibility or set up subscription for changing visibility. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatTabBodyPortal, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this4 = this;

      Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

      this._centeringSub = this._host._beforeCentering.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this._host._isCenterPosition(this._host._position))).subscribe(function (isCentering) {
        if (isCentering && !_this4.hasAttached()) {
          _this4.attach(_this4._host._content);
        }
      });
      this._leavingSub = this._host._afterLeavingCenter.subscribe(function () {
        _this4.detach();
      });
    }
    /** Clean up centering subscription. */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

      this._centeringSub.unsubscribe();

      this._leavingSub.unsubscribe();
    }
  }]);

  return MatTabBodyPortal;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["CdkPortalOutlet"]);

MatTabBodyPortal.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
  args: [{
    selector: '[matTabBodyHost]'
  }]
}];

MatTabBodyPortal.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ComponentFactoryResolver"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]
  }, {
    type: MatTabBody,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
        return MatTabBody;
      })]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
    }]
  }];
};
/**
 * Base class with all of the `MatTabBody` functionality.
 * @docs-private
 */


var _MatTabBodyBase = /*#__PURE__*/function () {
  function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
    var _this5 = this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabBodyBase);

    this._elementRef = _elementRef;
    this._dir = _dir;
    /** Subscription to the directionality change observable. */

    this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    /** Emits when an animation on the tab is complete. */

    this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /** Event emitted when the tab begins to animate towards the center as the active tab. */

    this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted before the centering of the tab begins. */

    this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted before the centering of the tab begins. */

    this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when the tab completes its animation towards the center. */

    this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"](true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
    // anyway to prevent the animations module from throwing an error if the body is used on its own.

    /** Duration for the tab's animation. */

    this.animationDuration = '500ms';

    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe(function (dir) {
        _this5._computePositionAnimationState(dir);

        changeDetectorRef.markForCheck();
      });
    } // Ensure that we get unique animation events, because the `.done` callback can get
    // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


    this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])(function (x, y) {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(function (event) {
      // If the transition to the center is complete, emit an event.
      if (_this5._isCenterPosition(event.toState) && _this5._isCenterPosition(_this5._position)) {
        _this5._onCentered.emit();
      }

      if (_this5._isCenterPosition(event.fromState) && !_this5._isCenterPosition(_this5._position)) {
        _this5._afterLeavingCenter.emit();
      }
    });
  }
  /** The shifted index position of the tab body, where zero represents the active center tab. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabBodyBase, [{
    key: "position",
    set: function set(position) {
      this._positionIndex = position;

      this._computePositionAnimationState();
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._position == 'center' && this.origin != null) {
        this._position = this._computePositionFromOrigin(this.origin);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._dirChangeSubscription.unsubscribe();

      this._translateTabComplete.complete();
    }
  }, {
    key: "_onTranslateTabStarted",
    value: function _onTranslateTabStarted(event) {
      var isCentering = this._isCenterPosition(event.toState);

      this._beforeCentering.emit(isCentering);

      if (isCentering) {
        this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
      }
    }
    /** The text direction of the containing app. */

  }, {
    key: "_getLayoutDirection",
    value: function _getLayoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the provided position state is considered center, regardless of origin. */

  }, {
    key: "_isCenterPosition",
    value: function _isCenterPosition(position) {
      return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
    }
    /** Computes the position state that will be used for the tab-body animation trigger. */

  }, {
    key: "_computePositionAnimationState",
    value: function _computePositionAnimationState() {
      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

      if (this._positionIndex < 0) {
        this._position = dir == 'ltr' ? 'left' : 'right';
      } else if (this._positionIndex > 0) {
        this._position = dir == 'ltr' ? 'right' : 'left';
      } else {
        this._position = 'center';
      }
    }
    /**
     * Computes the position state based on the specified origin position. This is used if the
     * tab is becoming visible immediately after creation.
     */

  }, {
    key: "_computePositionFromOrigin",
    value: function _computePositionFromOrigin(origin) {
      var dir = this._getLayoutDirection();

      if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
        return 'left-origin-center';
      }

      return 'right-origin-center';
    }
  }]);

  return _MatTabBodyBase;
}();

_MatTabBodyBase.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
}];

_MatTabBodyBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }];
};

_MatTabBodyBase.propDecorators = {
  _onCentering: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _beforeCentering: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _afterLeavingCenter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _onCentered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['content']
  }],
  origin: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  animationDuration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */

var MatTabBody = /*#__PURE__*/function (_MatTabBodyBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabBody, _MatTabBodyBase2);

  var _super4 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabBody);

  function MatTabBody(elementRef, dir, changeDetectorRef) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabBody);

    return _super4.call(this, elementRef, dir, changeDetectorRef);
  }

  return MatTabBody;
}(_MatTabBodyBase);

MatTabBody.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
  args: [{
    selector: 'mat-tab-body',
    template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
    // tslint:disable-next-line:validate-decorators
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
    animations: [matTabsAnimations.translateTab],
    host: {
      'class': 'mat-tab-body'
    },
    styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
  }]
}];

MatTabBody.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }];
};

MatTabBody.propDecorators = {
  _portalHost: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalHostDirective"]]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to provide the default options the tabs module. */

var MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MAT_TABS_CONFIG');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID's for each tab component */

var nextId = 0;
/** A simple change event emitted on focus or selection changes. */

var MatTabChangeEvent = function MatTabChangeEvent() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabChangeEvent);
}; // Boilerplate for applying mixins to MatTabGroup.

/** @docs-private */


var MatTabGroupMixinBase = function MatTabGroupMixinBase(_elementRef) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabGroupMixinBase);

  this._elementRef = _elementRef;
};

var _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
/**
 * Base class with all of the `MatTabGroupBase` functionality.
 * @docs-private
 */


var _MatTabGroupBase = /*#__PURE__*/function (_MatTabGroupMixinBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatTabGroupBase, _MatTabGroupMixinBase2);

  var _super5 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTabGroupBase);

  function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    var _this6;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabGroupBase);

    _this6 = _super5.call(this, elementRef);
    _this6._changeDetectorRef = _changeDetectorRef;
    _this6._animationMode = _animationMode;
    /** All of the tabs that belong to the group. */

    _this6._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["QueryList"]();
    /** The tab index that should be selected after the content has been checked. */

    _this6._indexToSelect = 0;
    /** Snapshot of the height of the tab body wrapper before another tab is activated. */

    _this6._tabBodyWrapperHeight = 0;
    /** Subscription to tabs being added/removed. */

    _this6._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    /** Subscription to changes in the tab labels. */

    _this6._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    _this6._dynamicHeight = false;
    _this6._selectedIndex = null;
    /** Position of the tab header. */

    _this6.headerPosition = 'above';
    /** Output to enable support for two-way binding on `[(selectedIndex)]` */

    _this6.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when focus has changed within a tab group. */

    _this6.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when the body animation has completed */

    _this6.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when the tab selection has changed. */

    _this6.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"](true);
    _this6._groupId = nextId++;
    _this6.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
    _this6.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    return _this6;
  }
  /** Whether the tab group should grow to the size of the active tab. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabGroupBase, [{
    key: "dynamicHeight",
    get: function get() {
      return this._dynamicHeight;
    },
    set: function set(value) {
      this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceBooleanProperty"])(value);
    }
    /** The index of the active tab. */

  }, {
    key: "selectedIndex",
    get: function get() {
      return this._selectedIndex;
    },
    set: function set(value) {
      this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceNumberProperty"])(value, null);
    }
    /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */

  }, {
    key: "animationDuration",
    get: function get() {
      return this._animationDuration;
    },
    set: function set(value) {
      this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
    }
    /** Background color of the tab group. */

  }, {
    key: "backgroundColor",
    get: function get() {
      return this._backgroundColor;
    },
    set: function set(value) {
      var nativeElement = this._elementRef.nativeElement;
      nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

      if (value) {
        nativeElement.classList.add("mat-background-".concat(value));
      }

      this._backgroundColor = value;
    }
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */

  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      var _this7 = this;

      // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
      // the amount of tabs changes before the actual change detection runs.
      var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
      // the selected index has not yet been initialized.


      if (this._selectedIndex != indexToSelect) {
        var isFirstRun = this._selectedIndex == null;

        if (!isFirstRun) {
          this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        } // Changing these values after change detection has run
        // since the checked content may contain references to them.


        Promise.resolve().then(function () {
          _this7._tabs.forEach(function (tab, index) {
            return tab.isActive = index === indexToSelect;
          });

          if (!isFirstRun) {
            _this7.selectedIndexChange.emit(indexToSelect);
          }
        });
      } // Setup the position for each tab and optionally setup an origin on the next selected tab.


      this._tabs.forEach(function (tab, index) {
        tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
        // if it doesn't have one already.

        if (_this7._selectedIndex != null && tab.position == 0 && !tab.origin) {
          tab.origin = indexToSelect - _this7._selectedIndex;
        }
      });

      if (this._selectedIndex !== indexToSelect) {
        this._selectedIndex = indexToSelect;

        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this8 = this;

      this._subscribeToAllTabChanges();

      this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
      // able to re-render the content as new tabs are added or removed.


      this._tabsSubscription = this._tabs.changes.subscribe(function () {
        var indexToSelect = _this8._clampTabIndex(_this8._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
        // explicit change that selects a different tab.


        if (indexToSelect === _this8._selectedIndex) {
          var tabs = _this8._tabs.toArray();

          for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].isActive) {
              // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
              // event, otherwise the consumer may end up in an infinite loop in some edge cases like
              // adding a tab within the `selectedIndexChange` event.
              _this8._indexToSelect = _this8._selectedIndex = i;
              break;
            }
          }
        }

        _this8._changeDetectorRef.markForCheck();
      });
    }
    /** Listens to changes in all of the tabs. */

  }, {
    key: "_subscribeToAllTabChanges",
    value: function _subscribeToAllTabChanges() {
      var _this9 = this;

      // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
      // some that are inside of nested tab groups. We filter them out manually by checking that
      // the closest group to the tab is the current one.
      this._allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this._allTabs)).subscribe(function (tabs) {
        _this9._tabs.reset(tabs.filter(function (tab) {
          // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
          // once it becomes a required parameter in MatTab.
          return !tab._closestTabGroup || tab._closestTabGroup === _this9;
        }));

        _this9._tabs.notifyOnChanges();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._tabs.destroy();

      this._tabsSubscription.unsubscribe();

      this._tabLabelSubscription.unsubscribe();
    }
    /** Re-aligns the ink bar to the selected tab element. */

  }, {
    key: "realignInkBar",
    value: function realignInkBar() {
      if (this._tabHeader) {
        this._tabHeader._alignInkBarToSelectedTab();
      }
    }
  }, {
    key: "_focusChanged",
    value: function _focusChanged(index) {
      this.focusChange.emit(this._createChangeEvent(index));
    }
  }, {
    key: "_createChangeEvent",
    value: function _createChangeEvent(index) {
      var event = new MatTabChangeEvent();
      event.index = index;

      if (this._tabs && this._tabs.length) {
        event.tab = this._tabs.toArray()[index];
      }

      return event;
    }
    /**
     * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
     * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
     * binding to be updated, we need to subscribe to changes in it and trigger change detection
     * manually.
     */

  }, {
    key: "_subscribeToTabLabels",
    value: function _subscribeToTabLabels() {
      var _this10 = this;

      if (this._tabLabelSubscription) {
        this._tabLabelSubscription.unsubscribe();
      }

      this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["merge"].apply(void 0, Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this._tabs.map(function (tab) {
        return tab._stateChanges;
      }))).subscribe(function () {
        return _this10._changeDetectorRef.markForCheck();
      });
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */

  }, {
    key: "_clampTabIndex",
    value: function _clampTabIndex(index) {
      // Note the `|| 0`, which ensures that values like NaN can't get through
      // and which would otherwise throw the component into an infinite loop
      // (since Math.max(NaN, 0) === NaN).
      return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    }
    /** Returns a unique id for each tab label element */

  }, {
    key: "_getTabLabelId",
    value: function _getTabLabelId(i) {
      return "mat-tab-label-".concat(this._groupId, "-").concat(i);
    }
    /** Returns a unique id for each tab content element */

  }, {
    key: "_getTabContentId",
    value: function _getTabContentId(i) {
      return "mat-tab-content-".concat(this._groupId, "-").concat(i);
    }
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */

  }, {
    key: "_setTabBodyWrapperHeight",
    value: function _setTabBodyWrapperHeight(tabHeight) {
      if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
        return;
      }

      var wrapper = this._tabBodyWrapper.nativeElement;
      wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
      // the animation to the new height can have an origin.

      if (this._tabBodyWrapper.nativeElement.offsetHeight) {
        wrapper.style.height = tabHeight + 'px';
      }
    }
    /** Removes the height of the tab body wrapper. */

  }, {
    key: "_removeTabBodyWrapperHeight",
    value: function _removeTabBodyWrapperHeight() {
      var wrapper = this._tabBodyWrapper.nativeElement;
      this._tabBodyWrapperHeight = wrapper.clientHeight;
      wrapper.style.height = '';
      this.animationDone.emit();
    }
    /** Handle click events, setting new selected index if appropriate. */

  }, {
    key: "_handleClick",
    value: function _handleClick(tab, tabHeader, index) {
      if (!tab.disabled) {
        this.selectedIndex = tabHeader.focusIndex = index;
      }
    }
    /** Retrieves the tabindex for the tab. */

  }, {
    key: "_getTabIndex",
    value: function _getTabIndex(tab, idx) {
      if (tab.disabled) {
        return null;
      }

      return this.selectedIndex === idx ? 0 : -1;
    }
  }]);

  return _MatTabGroupBase;
}(_MatTabGroupMixinBase);

_MatTabGroupBase.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
}];

_MatTabGroupBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_TABS_CONFIG]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

_MatTabGroupBase.propDecorators = {
  dynamicHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  headerPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  animationDuration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disablePagination: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  backgroundColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  focusChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  animationDone: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  selectedTabChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }]
};
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */

var MatTabGroup = /*#__PURE__*/function (_MatTabGroupBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabGroup, _MatTabGroupBase2);

  var _super6 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabGroup);

  function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabGroup);

    return _super6.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode);
  }

  return MatTabGroup;
}(_MatTabGroupBase);

MatTabGroup.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
  args: [{
    selector: 'mat-tab-group',
    exportAs: 'matTabGroup',
    template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
    // tslint:disable-next-line:validate-decorators
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
    inputs: ['color', 'disableRipple'],
    providers: [{
      provide: MAT_TAB_GROUP,
      useExisting: MatTabGroup
    }],
    host: {
      'class': 'mat-tab-group',
      '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
      '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
    },
    styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
  }]
}];

MatTabGroup.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_TABS_CONFIG]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatTabGroup.propDecorators = {
  _allTabs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
    args: [MatTab, {
      descendants: true
    }]
  }],
  _tabBodyWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabBodyWrapper']
  }],
  _tabHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabHeader']
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTabLabelWrapper.

/** @docs-private */

var MatTabLabelWrapperBase = function MatTabLabelWrapperBase() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLabelWrapperBase);
};

var _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisabled"])(MatTabLabelWrapperBase);
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */


var MatTabLabelWrapper = /*#__PURE__*/function (_MatTabLabelWrapperMi) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabLabelWrapper, _MatTabLabelWrapperMi);

  var _super7 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabLabelWrapper);

  function MatTabLabelWrapper(elementRef) {
    var _this11;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLabelWrapper);

    _this11 = _super7.call(this);
    _this11.elementRef = elementRef;
    return _this11;
  }
  /** Sets focus on the wrapper element */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatTabLabelWrapper, [{
    key: "focus",
    value: function focus() {
      this.elementRef.nativeElement.focus();
    }
  }, {
    key: "getOffsetLeft",
    value: function getOffsetLeft() {
      return this.elementRef.nativeElement.offsetLeft;
    }
  }, {
    key: "getOffsetWidth",
    value: function getOffsetWidth() {
      return this.elementRef.nativeElement.offsetWidth;
    }
  }]);

  return MatTabLabelWrapper;
}(_MatTabLabelWrapperMixinBase);

MatTabLabelWrapper.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
  args: [{
    selector: '[matTabLabelWrapper]',
    inputs: ['disabled'],
    host: {
      '[class.mat-tab-disabled]': 'disabled',
      '[attr.aria-disabled]': '!!disabled'
    }
  }]
}];

MatTabLabelWrapper.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }];
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Config used to bind passive event listeners */


var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["normalizePassiveListenerOptions"])({
  passive: true
});
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */

var EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */

var HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */

var HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */

var MatPaginatedTabHeader = /*#__PURE__*/function () {
  function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone,
  /**
   * @deprecated @breaking-change 9.0.0 `_platform` and `_animationMode`
   * parameters to become required.
   */
  _platform, _animationMode) {
    var _this12 = this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatPaginatedTabHeader);

    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._animationMode = _animationMode;
    /** The distance in pixels that the tab labels should be translated to the left. */

    this._scrollDistance = 0;
    /** Whether the header should scroll to the selected index after the view has been checked. */

    this._selectedIndexChanged = false;
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /** Whether the controls for pagination should be displayed */

    this._showPaginationControls = false;
    /** Whether the tab list can be scrolled more towards the end of the tab label list. */

    this._disableScrollAfter = true;
    /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */

    this._disableScrollBefore = true;
    /** Stream that will stop the automated scrolling. */

    this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */

    this.disablePagination = false;
    this._selectedIndex = 0;
    /** Event emitted when the option is selected. */

    this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when a label is focused. */

    this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"](); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

    _ngZone.runOutsideAngular(function () {
      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(_elementRef.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(_this12._destroyed)).subscribe(function () {
        _this12._stopInterval();
      });
    });
  }
  /** The index of the active tab. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatPaginatedTabHeader, [{
    key: "selectedIndex",
    get: function get() {
      return this._selectedIndex;
    },
    set: function set(value) {
      value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceNumberProperty"])(value);

      if (this._selectedIndex != value) {
        this._selectedIndexChanged = true;
        this._selectedIndex = value;

        if (this._keyManager) {
          this._keyManager.updateActiveItem(value);
        }
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this13 = this;

      // We need to handle these events manually, because we want to bind passive event listeners.
      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this13._handlePaginatorPress('before');
      });
      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this13._handlePaginatorPress('after');
      });
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this14 = this;

      var dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);

      var resize = this._viewportRuler.change(150);

      var realign = function realign() {
        _this14.updatePagination();

        _this14._alignInkBarToSelectedTab();
      };

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusKeyManager"](this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap();

      this._keyManager.updateActiveItem(this._selectedIndex); // Defer the first call in order to allow for slower browsers to lay out the elements.
      // This helps in cases where the user lands directly on a page with paginated tabs.


      typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
      // the key manager if the direction has changed.

      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function () {
        // We need to defer this to give the browser some time to recalculate the element dimensions.
        Promise.resolve().then(realign);

        _this14._keyManager.withHorizontalOrientation(_this14._getLayoutDirection());
      }); // If there is a change in the focus key manager we need to emit the `indexFocused`
      // event in order to provide a public event that notifies about focus changes. Also we realign
      // the tabs container by scrolling the new focused tab into the visible section.

      this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function (newFocusIndex) {
        _this14.indexFocused.emit(newFocusIndex);

        _this14._setTabFocus(newFocusIndex);
      });
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      // If the number of tab labels have changed, check if scrolling should be enabled
      if (this._tabLabelCount != this._items.length) {
        this.updatePagination();
        this._tabLabelCount = this._items.length;

        this._changeDetectorRef.markForCheck();
      } // If the selected index has changed, scroll to the label and check if the scrolling controls
      // should be disabled.


      if (this._selectedIndexChanged) {
        this._scrollToLabel(this._selectedIndex);

        this._checkScrollingControls();

        this._alignInkBarToSelectedTab();

        this._selectedIndexChanged = false;

        this._changeDetectorRef.markForCheck();
      } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
      // then translate the header to reflect this.


      if (this._scrollDistanceChanged) {
        this._updateTabScrollPosition();

        this._scrollDistanceChanged = false;

        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();

      this._stopScrolling.complete();
    }
    /** Handles keyboard events on the header. */

  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      // We don't handle any key bindings with a modifier key.
      if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__["hasModifierKey"])(event)) {
        return;
      }

      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__["ENTER"]:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__["SPACE"]:
          if (this.focusIndex !== this.selectedIndex) {
            this.selectFocusedIndex.emit(this.focusIndex);

            this._itemSelected(event);
          }

          break;

        default:
          this._keyManager.onKeydown(event);

      }
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */

  }, {
    key: "_onContentChanges",
    value: function _onContentChanges() {
      var _this15 = this;

      var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
      // will fire even if the text content didn't change which is inefficient and is prone
      // to infinite loops if a poorly constructed expression is passed in (see #14249).

      if (textContent !== this._currentTextContent) {
        this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
        // means that we need to bring the callback back in ourselves.

        this._ngZone.run(function () {
          _this15.updatePagination();

          _this15._alignInkBarToSelectedTab();

          _this15._changeDetectorRef.markForCheck();
        });
      }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */

  }, {
    key: "updatePagination",
    value: function updatePagination() {
      this._checkPaginationEnabled();

      this._checkScrollingControls();

      this._updateTabScrollPosition();
    }
    /** Tracks which element has focus; used for keyboard navigation */

  }, {
    key: "focusIndex",
    get: function get() {
      return this._keyManager ? this._keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    ,
    set: function set(value) {
      if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
        return;
      }

      this._keyManager.setActiveItem(value);
    }
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */

  }, {
    key: "_isValidIndex",
    value: function _isValidIndex(index) {
      if (!this._items) {
        return true;
      }

      var tab = this._items ? this._items.toArray()[index] : null;
      return !!tab && !tab.disabled;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */

  }, {
    key: "_setTabFocus",
    value: function _setTabFocus(tabIndex) {
      if (this._showPaginationControls) {
        this._scrollToLabel(tabIndex);
      }

      if (this._items && this._items.length) {
        this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
        // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
        // should be the full width minus the offset width.


        var containerEl = this._tabListContainer.nativeElement;

        var dir = this._getLayoutDirection();

        if (dir == 'ltr') {
          containerEl.scrollLeft = 0;
        } else {
          containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
        }
      }
    }
    /** The layout direction of the containing app. */

  }, {
    key: "_getLayoutDirection",
    value: function _getLayoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */

  }, {
    key: "_updateTabScrollPosition",
    value: function _updateTabScrollPosition() {
      if (this.disablePagination) {
        return;
      }

      var scrollDistance = this.scrollDistance;
      var platform = this._platform;
      var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
      // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
      // and ripples will exceed the boundaries of the visible tab bar.
      // See: https://github.com/angular/components/issues/10276
      // We round the `transform` here, because transforms with sub-pixel precision cause some
      // browsers to blur the content of the element.

      this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
      // position to be thrown off in some cases. We have to reset it ourselves to ensure that
      // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
      // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
      // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.

      if (platform && (platform.TRIDENT || platform.EDGE)) {
        this._tabListContainer.nativeElement.scrollLeft = 0;
      }
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */

  }, {
    key: "scrollDistance",
    get: function get() {
      return this._scrollDistance;
    },
    set: function set(value) {
      this._scrollTo(value);
    }
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_scrollHeader",
    value: function _scrollHeader(direction) {
      var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

      var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
      return this._scrollTo(this._scrollDistance + scrollAmount);
    }
    /** Handles click events on the pagination arrows. */

  }, {
    key: "_handlePaginatorClick",
    value: function _handlePaginatorClick(direction) {
      this._stopInterval();

      this._scrollHeader(direction);
    }
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_scrollToLabel",
    value: function _scrollToLabel(labelIndex) {
      if (this.disablePagination) {
        return;
      }

      var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

      if (!selectedLabel) {
        return;
      } // The view length is the visible width of the tab labels.


      var viewLength = this._tabListContainer.nativeElement.offsetWidth;
      var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
          offsetLeft = _selectedLabel$elemen.offsetLeft,
          offsetWidth = _selectedLabel$elemen.offsetWidth;
      var labelBeforePos, labelAfterPos;

      if (this._getLayoutDirection() == 'ltr') {
        labelBeforePos = offsetLeft;
        labelAfterPos = labelBeforePos + offsetWidth;
      } else {
        labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
        labelBeforePos = labelAfterPos - offsetWidth;
      }

      var beforeVisiblePos = this.scrollDistance;
      var afterVisiblePos = this.scrollDistance + viewLength;

      if (labelBeforePos < beforeVisiblePos) {
        // Scroll header to move label to the before direction
        this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
      } else if (labelAfterPos > afterVisiblePos) {
        // Scroll header to move label to the after direction
        this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
      }
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_checkPaginationEnabled",
    value: function _checkPaginationEnabled() {
      if (this.disablePagination) {
        this._showPaginationControls = false;
      } else {
        var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

        if (!isEnabled) {
          this.scrollDistance = 0;
        }

        if (isEnabled !== this._showPaginationControls) {
          this._changeDetectorRef.markForCheck();
        }

        this._showPaginationControls = isEnabled;
      }
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_checkScrollingControls",
    value: function _checkScrollingControls() {
      if (this.disablePagination) {
        this._disableScrollAfter = this._disableScrollBefore = true;
      } else {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance == 0;
        this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_getMaxScrollDistance",
    value: function _getMaxScrollDistance() {
      var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
      var viewLength = this._tabListContainer.nativeElement.offsetWidth;
      return lengthOfTabList - viewLength || 0;
    }
    /** Tells the ink-bar to align itself to the current label wrapper */

  }, {
    key: "_alignInkBarToSelectedTab",
    value: function _alignInkBarToSelectedTab() {
      var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
      var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

      if (selectedLabelWrapper) {
        this._inkBar.alignToElement(selectedLabelWrapper);
      } else {
        this._inkBar.hide();
      }
    }
    /** Stops the currently-running paginator interval.  */

  }, {
    key: "_stopInterval",
    value: function _stopInterval() {
      this._stopScrolling.next();
    }
    /**
     * Handles the user pressing down on one of the paginators.
     * Starts scrolling the header after a certain amount of time.
     * @param direction In which direction the paginator should be scrolled.
     */

  }, {
    key: "_handlePaginatorPress",
    value: function _handlePaginatorPress(direction, mouseEvent) {
      var _this16 = this;

      // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
      // null check the `button`, but we do it so we don't break tests that use fake events.
      if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
        return;
      } // Avoid overlapping timers.


      this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
      .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["merge"])(this._stopScrolling, this._destroyed))).subscribe(function () {
        var _this16$_scrollHeader = _this16._scrollHeader(direction),
            maxScrollDistance = _this16$_scrollHeader.maxScrollDistance,
            distance = _this16$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


        if (distance === 0 || distance >= maxScrollDistance) {
          _this16._stopInterval();
        }
      });
    }
    /**
     * Scrolls the header to a given position.
     * @param position Position to which to scroll.
     * @returns Information on the current scroll distance and the maximum.
     */

  }, {
    key: "_scrollTo",
    value: function _scrollTo(position) {
      if (this.disablePagination) {
        return {
          maxScrollDistance: 0,
          distance: 0
        };
      }

      var maxScrollDistance = this._getMaxScrollDistance();

      this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
      // transformation can move the header.

      this._scrollDistanceChanged = true;

      this._checkScrollingControls();

      return {
        maxScrollDistance: maxScrollDistance,
        distance: this._scrollDistance
      };
    }
  }]);

  return MatPaginatedTabHeader;
}();

MatPaginatedTabHeader.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
}];

MatPaginatedTabHeader.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatPaginatedTabHeader.propDecorators = {
  disablePagination: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Base class with all of the `MatTabHeader` functionality.
 * @docs-private
 */

var _MatTabHeaderBase = /*#__PURE__*/function (_MatPaginatedTabHeade) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatTabHeaderBase, _MatPaginatedTabHeade);

  var _super8 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTabHeaderBase);

  function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
  animationMode) {
    var _this17;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabHeaderBase);

    _this17 = _super8.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    _this17._disableRipple = false;
    return _this17;
  }
  /** Whether the ripple effect is disabled or not. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabHeaderBase, [{
    key: "disableRipple",
    get: function get() {
      return this._disableRipple;
    },
    set: function set(value) {
      this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "_itemSelected",
    value: function _itemSelected(event) {
      event.preventDefault();
    }
  }]);

  return _MatTabHeaderBase;
}(MatPaginatedTabHeader);

_MatTabHeaderBase.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
}];

_MatTabHeaderBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

_MatTabHeaderBase.propDecorators = {
  disableRipple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */

var MatTabHeader = /*#__PURE__*/function (_MatTabHeaderBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabHeader, _MatTabHeaderBase2);

  var _super9 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabHeader);

  function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
  animationMode) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabHeader);

    return _super9.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
  }

  return MatTabHeader;
}(_MatTabHeaderBase);

MatTabHeader.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
  args: [{
    selector: 'mat-tab-header',
    template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
    inputs: ['selectedIndex'],
    outputs: ['selectFocusedIndex', 'indexFocused'],
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
    // tslint:disable-next-line:validate-decorators
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
    host: {
      'class': 'mat-tab-header',
      '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
      '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
    },
    styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
  }]
}];

MatTabHeader.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatTabHeader.propDecorators = {
  _items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
    args: [MatTabLabelWrapper, {
      descendants: false
    }]
  }],
  _inkBar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatInkBar, {
      static: true
    }]
  }],
  _tabListContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabListContainer', {
      static: true
    }]
  }],
  _tabList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabList', {
      static: true
    }]
  }],
  _nextPaginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['nextPaginator']
  }],
  _previousPaginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['previousPaginator']
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Base class with all of the `MatTabNav` functionality.
 * @docs-private
 */

var _MatTabNavBase = /*#__PURE__*/function (_MatPaginatedTabHeade2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatTabNavBase, _MatPaginatedTabHeade2);

  var _super10 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTabNavBase);

  function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
  /**
   * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
   */
  platform, animationMode) {
    var _this18;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabNavBase);

    _this18 = _super10.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    _this18._disableRipple = false;
    /** Theme color of the nav bar. */

    _this18.color = 'primary';
    return _this18;
  }
  /** Background color of the tab nav. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabNavBase, [{
    key: "backgroundColor",
    get: function get() {
      return this._backgroundColor;
    },
    set: function set(value) {
      var classList = this._elementRef.nativeElement.classList;
      classList.remove("mat-background-".concat(this.backgroundColor));

      if (value) {
        classList.add("mat-background-".concat(value));
      }

      this._backgroundColor = value;
    }
    /** Whether the ripple effect is disabled or not. */

  }, {
    key: "disableRipple",
    get: function get() {
      return this._disableRipple;
    },
    set: function set(value) {
      this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "_itemSelected",
    value: function _itemSelected() {// noop
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this19 = this;

      // We need this to run before the `changes` subscription in parent to ensure that the
      // selectedIndex is up-to-date by the time the super class starts looking for it.
      this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this19.updateActiveLink();
      });

      Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_MatTabNavBase.prototype), "ngAfterContentInit", this).call(this);
    }
    /**
     * Notifies the component that the active link has been changed.
     * @breaking-change 8.0.0 `element` parameter to be removed.
     */

  }, {
    key: "updateActiveLink",
    value: function updateActiveLink(_element) {
      if (!this._items) {
        return;
      }

      var items = this._items.toArray();

      for (var i = 0; i < items.length; i++) {
        if (items[i].active) {
          this.selectedIndex = i;

          this._changeDetectorRef.markForCheck();

          return;
        }
      } // The ink bar should hide itself if no items are active.


      this.selectedIndex = -1;

      this._inkBar.hide();
    }
  }]);

  return _MatTabNavBase;
}(MatPaginatedTabHeader);

_MatTabNavBase.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
}];

_MatTabNavBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

_MatTabNavBase.propDecorators = {
  backgroundColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disableRipple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */

var MatTabNav = /*#__PURE__*/function (_MatTabNavBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabNav, _MatTabNavBase2);

  var _super11 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabNav);

  function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
  /**
   * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
   */
  platform, animationMode) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabNav);

    return _super11.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
  }

  return MatTabNav;
}(_MatTabNavBase);

MatTabNav.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
  args: [{
    selector: '[mat-tab-nav-bar]',
    exportAs: 'matTabNavBar, matTabNav',
    inputs: ['color'],
    template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
    host: {
      'class': 'mat-tab-nav-bar mat-tab-header',
      '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
      '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
      '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
      '[class.mat-accent]': 'color === "accent"',
      '[class.mat-warn]': 'color === "warn"'
    },
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
    // tslint:disable-next-line:validate-decorators
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
    styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
  }]
}];

MatTabNav.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatTabNav.propDecorators = {
  _items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
    args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
      return MatTabLink;
    }), {
      descendants: true
    }]
  }],
  _inkBar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatInkBar, {
      static: true
    }]
  }],
  _tabListContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabListContainer', {
      static: true
    }]
  }],
  _tabList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabList', {
      static: true
    }]
  }],
  _nextPaginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['nextPaginator']
  }],
  _previousPaginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['previousPaginator']
  }]
}; // Boilerplate for applying mixins to MatTabLink.

var MatTabLinkMixinBase = function MatTabLinkMixinBase() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLinkMixinBase);
};

var _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisabled"])(MatTabLinkMixinBase)));
/** Base class with all of the `MatTabLink` functionality. */


var _MatTabLinkBase = /*#__PURE__*/function (_MatTabLinkMixinBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatTabLinkBase, _MatTabLinkMixinBase2);

  var _super12 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTabLinkBase);

  function _MatTabLinkBase(_tabNavBar,
  /** @docs-private */
  elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    var _this20;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabLinkBase);

    _this20 = _super12.call(this);
    _this20._tabNavBar = _tabNavBar;
    _this20.elementRef = elementRef;
    _this20._focusMonitor = _focusMonitor;
    /** Whether the tab link is active or not. */

    _this20._isActive = false;
    _this20.rippleConfig = globalRippleOptions || {};
    _this20.tabIndex = parseInt(tabIndex) || 0;

    if (animationMode === 'NoopAnimations') {
      _this20.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }

    return _this20;
  }
  /** Whether the link is active. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabLinkBase, [{
    key: "active",
    get: function get() {
      return this._isActive;
    },
    set: function set(value) {
      var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceBooleanProperty"])(value);

      if (newValue !== this._isActive) {
        this._isActive = value;

        this._tabNavBar.updateActiveLink(this.elementRef);
      }
    }
    /**
     * Whether ripples are disabled on interaction.
     * @docs-private
     */

  }, {
    key: "rippleDisabled",
    get: function get() {
      return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
    }
    /** Focuses the tab link. */

  }, {
    key: "focus",
    value: function focus() {
      this.elementRef.nativeElement.focus();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._focusMonitor.monitor(this.elementRef);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this.elementRef);
    }
  }]);

  return _MatTabLinkBase;
}(_MatTabLinkMixinBase);

_MatTabLinkBase.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
}];

_MatTabLinkBase.ctorParameters = function () {
  return [{
    type: _MatTabNavBase
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

_MatTabLinkBase.propDecorators = {
  active: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/**
 * Link inside of a `mat-tab-nav-bar`.
 */

var MatTabLink = /*#__PURE__*/function (_MatTabLinkBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabLink, _MatTabLinkBase2);

  var _super13 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabLink);

  function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
    var _this21;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLink);

    _this21 = _super13.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
    _this21._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["RippleRenderer"](Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this21), ngZone, elementRef, platform);

    _this21._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

    return _this21;
  }

  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatTabLink, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTabLink.prototype), "ngOnDestroy", this).call(this);

      this._tabLinkRipple._removeTriggerEvents();
    }
  }]);

  return MatTabLink;
}(_MatTabLinkBase);

MatTabLink.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
  args: [{
    selector: '[mat-tab-link], [matTabLink]',
    exportAs: 'matTabLink',
    inputs: ['disabled', 'disableRipple', 'tabIndex'],
    host: {
      'class': 'mat-tab-link mat-focus-indicator',
      '[attr.aria-current]': 'active ? "page" : null',
      '[attr.aria-disabled]': 'disabled',
      '[attr.tabIndex]': 'tabIndex',
      '[class.mat-tab-disabled]': 'disabled',
      '[class.mat-tab-label-active]': 'active'
    }
  }]
}];

MatTabLink.ctorParameters = function () {
  return [{
    type: MatTabNav
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatTabsModule = function MatTabsModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabsModule);
};

MatTabsModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"]],
    // Don't export all components because some are only to be used internally.
    exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent],
    declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]
  }]
}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default~paginas-compromiso-docente-compromiso-form-compromiso-form-module-ngfactory~paginas-evaluaci~1450a284.js.map