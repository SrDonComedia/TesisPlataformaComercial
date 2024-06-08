(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~paginas-compromiso-docente-compromiso-form-compromiso-form-module-ngfactory~paginas-evaluaci~31984056"],{

/***/ "GF+f":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/accordion.js ***!
  \*********************************************************/
/*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule, ɵangular_material_src_cdk_accordion_accordion_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function() { return CdkAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function() { return CdkAccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function() { return CdkAccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_accordion_accordion_a", function() { return CDK_ACCORDION; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID for each accordion. */

var nextId = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

var CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */

var CdkAccordion = /*#__PURE__*/function () {
  function CdkAccordion() {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkAccordion);

    /** Emits when the state of the accordion changes */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    /** Stream that emits true/false when openAll/closeAll is triggered. */

    this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    /** A readonly id value to use for unique selection coordination. */

    this.id = "cdk-accordion-".concat(nextId++);
    this._multi = false;
  }
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkAccordion, [{
    key: "multi",
    get: function get() {
      return this._multi;
    },
    set: function set(multi) {
      this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(multi);
    }
    /** Opens all enabled accordion items in an accordion where multi is enabled. */

  }, {
    key: "openAll",
    value: function openAll() {
      this._openCloseAll(true);
    }
    /** Closes all enabled accordion items in an accordion where multi is enabled. */

  }, {
    key: "closeAll",
    value: function closeAll() {
      this._openCloseAll(false);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._stateChanges.next(changes);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._stateChanges.complete();
    }
  }, {
    key: "_openCloseAll",
    value: function _openCloseAll(expanded) {
      if (this.multi) {
        this._openCloseAllActions.next(expanded);
      }
    }
  }]);

  return CdkAccordion;
}();

CdkAccordion.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
  args: [{
    selector: 'cdk-accordion, [cdkAccordion]',
    exportAs: 'cdkAccordion',
    providers: [{
      provide: CDK_ACCORDION,
      useExisting: CdkAccordion
    }]
  }]
}];
CdkAccordion.propDecorators = {
  multi: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID for each accordion item. */

var nextId$1 = 0;
var ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */

var CdkAccordionItem = /*#__PURE__*/function () {
  function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
    var _this = this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkAccordionItem);

    this.accordion = accordion;
    this._changeDetectorRef = _changeDetectorRef;
    this._expansionDispatcher = _expansionDispatcher;
    /** Subscription to openAll/closeAll events. */

    this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
    /** Event emitted every time the AccordionItem is closed. */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /** Event emitted every time the AccordionItem is opened. */

    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /** Event emitted when the AccordionItem is destroyed. */

    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * @docs-private
     */

    this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /** The unique AccordionItem id. */

    this.id = "cdk-accordion-child-".concat(nextId$1++);
    this._expanded = false;
    this._disabled = false;
    /** Unregister function for _expansionDispatcher. */

    this._removeUniqueSelectionListener = function () {};

    this._removeUniqueSelectionListener = _expansionDispatcher.listen(function (id, accordionId) {
      if (_this.accordion && !_this.accordion.multi && _this.accordion.id === accordionId && _this.id !== id) {
        _this.expanded = false;
      }
    }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Whether the AccordionItem is expanded. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkAccordionItem, [{
    key: "expanded",
    get: function get() {
      return this._expanded;
    },
    set: function set(expanded) {
      expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(expanded); // Only emit events and update the internal value if the value changes.

      if (this._expanded !== expanded) {
        this._expanded = expanded;
        this.expandedChange.emit(expanded);

        if (expanded) {
          this.opened.emit();
          /**
           * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
           * the name value is the id of the accordion.
           */

          var accordionId = this.accordion ? this.accordion.id : this.id;

          this._expansionDispatcher.notify(this.id, accordionId);
        } else {
          this.closed.emit();
        } // Ensures that the animation will run when the value is set outside of an `@Input`.
        // This includes cases like the open, close and toggle methods.


        this._changeDetectorRef.markForCheck();
      }
    }
    /** Whether the AccordionItem is disabled. */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(disabled);
    }
    /** Emits an event for the accordion item being destroyed. */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.opened.complete();
      this.closed.complete();
      this.destroyed.emit();
      this.destroyed.complete();

      this._removeUniqueSelectionListener();

      this._openCloseAllSubscription.unsubscribe();
    }
    /** Toggles the expanded state of the accordion item. */

  }, {
    key: "toggle",
    value: function toggle() {
      if (!this.disabled) {
        this.expanded = !this.expanded;
      }
    }
    /** Sets the expanded state of the accordion item to false. */

  }, {
    key: "close",
    value: function close() {
      if (!this.disabled) {
        this.expanded = false;
      }
    }
    /** Sets the expanded state of the accordion item to true. */

  }, {
    key: "open",
    value: function open() {
      if (!this.disabled) {
        this.expanded = true;
      }
    }
  }, {
    key: "_subscribeToOpenCloseAllActions",
    value: function _subscribeToOpenCloseAllActions() {
      var _this2 = this;

      return this.accordion._openCloseAllActions.subscribe(function (expanded) {
        // Only change expanded state if item is enabled
        if (!_this2.disabled) {
          _this2.expanded = expanded;
        }
      });
    }
  }]);

  return CdkAccordionItem;
}();

CdkAccordionItem.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
  args: [{
    selector: 'cdk-accordion-item, [cdkAccordionItem]',
    exportAs: 'cdkAccordionItem',
    providers: [// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
    // registering to the same accordion.
    {
      provide: CDK_ACCORDION,
      useValue: ɵ0
    }]
  }]
}];

CdkAccordionItem.ctorParameters = function () {
  return [{
    type: CdkAccordion,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: [CDK_ACCORDION]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"]
  }];
};

CdkAccordionItem.propDecorators = {
  closed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  opened: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  destroyed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  expandedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  expanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var CdkAccordionModule = function CdkAccordionModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkAccordionModule);
};

CdkAccordionModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
  args: [{
    exports: [CdkAccordion, CdkAccordionItem],
    declarations: [CdkAccordion, CdkAccordionItem]
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
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "o4Yh":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/expansion.js ***!
  \**************************************************************/
/*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function() { return MAT_ACCORDION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return MatAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return MatExpansionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return MatExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return MatExpansionPanelActionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return MatExpansionPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return MatExpansionPanelDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return MatExpansionPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return MatExpansionPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return matExpansionAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");


















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 */

var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('MAT_ACCORDION');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Time and timing curve for expansion panel animations. */
// Note: Keep this in sync with the Sass variable for the panel header animation.

var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * @docs-private
 */

var matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["style"])({
    transform: 'rotate(0deg)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["style"])({
    transform: 'rotate(180deg)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))]),

  /** Animation that expands and collapses the panel content. */
  bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["trigger"])('bodyExpansion', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["style"])({
    height: '0px',
    visibility: 'hidden'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["style"])({
    height: '*',
    visibility: 'visible'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_16__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */

var MatExpansionPanelContent = function MatExpansionPanelContent(_template) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatExpansionPanelContent);

  this._template = _template;
};

MatExpansionPanelContent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: 'ng-template[matExpansionPanelContent]'
  }]
}];

MatExpansionPanelContent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter for generating unique element ids. */


var uniqueId = 0;
/**
 * Injection token that can be used to configure the defalt
 * options for the expansion panel component.
 */

var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
var ɵ0 = undefined;
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */

var MatExpansionPanel = /*#__PURE__*/function (_CdkAccordionItem) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatExpansionPanel, _CdkAccordionItem);

  var _super = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MatExpansionPanel);

  function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
    var _this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatExpansionPanel);

    _this = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    _this._viewContainerRef = _viewContainerRef;
    _this._animationMode = _animationMode;
    _this._hideToggle = false;
    /** An event emitted after the body's expansion animation happens. */

    _this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /** An event emitted after the body's collapse animation happens. */

    _this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /** Stream that emits for changes in `@Input` properties. */

    _this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /** ID for the associated header element. Used for a11y labelling. */

    _this._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
    /** Stream of body animation done events. */

    _this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    _this.accordion = accordion;
    _this._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

    _this._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])(function (x, y) {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(function (event) {
      if (event.fromState !== 'void') {
        if (event.toState === 'expanded') {
          _this.afterExpand.emit();
        } else if (event.toState === 'collapsed') {
          _this.afterCollapse.emit();
        }
      }
    });

    if (defaultOptions) {
      _this.hideToggle = defaultOptions.hideToggle;
    }

    return _this;
  }
  /** Whether the toggle indicator should be hidden. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatExpansionPanel, [{
    key: "hideToggle",
    get: function get() {
      return this._hideToggle || this.accordion && this.accordion.hideToggle;
    },
    set: function set(value) {
      this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
    }
    /** The position of the expansion indicator. */

  }, {
    key: "togglePosition",
    get: function get() {
      return this._togglePosition || this.accordion && this.accordion.togglePosition;
    },
    set: function set(value) {
      this._togglePosition = value;
    }
    /** Determines whether the expansion panel should have spacing between it and its siblings. */

  }, {
    key: "_hasSpacing",
    value: function _hasSpacing() {
      if (this.accordion) {
        return this.expanded && this.accordion.displayMode === 'default';
      }

      return false;
    }
    /** Gets the expanded state string. */

  }, {
    key: "_getExpandedState",
    value: function _getExpandedState() {
      return this.expanded ? 'expanded' : 'collapsed';
    }
    /** Toggles the expanded state of the expansion panel. */

  }, {
    key: "toggle",
    value: function toggle() {
      this.expanded = !this.expanded;
    }
    /** Sets the expanded state of the expansion panel to false. */

  }, {
    key: "close",
    value: function close() {
      this.expanded = false;
    }
    /** Sets the expanded state of the expansion panel to true. */

  }, {
    key: "open",
    value: function open() {
      this.expanded = true;
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this2 = this;

      if (this._lazyContent) {
        // Render the content as soon as the panel becomes open.
        this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function () {
          return _this2.expanded && !_this2._portal;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
          _this2._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](_this2._lazyContent._template, _this2._viewContainerRef);
        });
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._inputChanges.next(changes);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

      this._bodyAnimationDone.complete();

      this._inputChanges.complete();
    }
    /** Checks whether the expansion panel's content contains the currently-focused element. */

  }, {
    key: "_containsFocus",
    value: function _containsFocus() {
      if (this._body) {
        var focusedElement = this._document.activeElement;
        var bodyElement = this._body.nativeElement;
        return focusedElement === bodyElement || bodyElement.contains(focusedElement);
      }

      return false;
    }
  }]);

  return MatExpansionPanel;
}(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordionItem"]);

MatExpansionPanel.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
  args: [{
    selector: 'mat-expansion-panel',
    exportAs: 'matExpansionPanel',
    template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
    inputs: ['disabled', 'expanded'],
    outputs: ['opened', 'closed', 'expandedChange'],
    animations: [matExpansionAnimations.bodyExpansion],
    providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
    // to the same accordion.
    {
      provide: MAT_ACCORDION,
      useValue: ɵ0
    }],
    host: {
      'class': 'mat-expansion-panel',
      '[class.mat-expanded]': 'expanded',
      '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
      '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
    },
    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
  }]
}];

MatExpansionPanel.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["SkipSelf"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [MAT_ACCORDION]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__["UniqueSelectionDispatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }];
};

MatExpansionPanel.propDecorators = {
  hideToggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  togglePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  afterExpand: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  afterCollapse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  _lazyContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [MatExpansionPanelContent]
  }],
  _body: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
    args: ['body']
  }]
};
/**
 * Actions of a `<mat-expansion-panel>`.
 */

var MatExpansionPanelActionRow = function MatExpansionPanelActionRow() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatExpansionPanelActionRow);
};

MatExpansionPanelActionRow.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: 'mat-action-row',
    host: {
      class: 'mat-action-row'
    }
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
 * Header element of a `<mat-expansion-panel>`.
 */

var MatExpansionPanelHeader = /*#__PURE__*/function () {
  function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode) {
    var _this3 = this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatExpansionPanelHeader);

    this.panel = panel;
    this._element = _element;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function (changes) {
      return !!(changes['hideToggle'] || changes['togglePosition']);
    })) : rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"]; // Since the toggle state depends on an @Input on the panel, we
    // need to subscribe and trigger change detection manually.

    this._parentChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function (changes) {
      return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
    }))).subscribe(function () {
      return _this3._changeDetectorRef.markForCheck();
    }); // Avoids focus being lost if the panel contained the focused element and was closed.

    panel.closed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function () {
      return panel._containsFocus();
    })).subscribe(function () {
      return _focusMonitor.focusVia(_element, 'program');
    });

    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatExpansionPanelHeader, [{
    key: "disabled",
    get: function get() {
      return this.panel.disabled;
    }
    /** Toggles the expanded state of the panel. */

  }, {
    key: "_toggle",
    value: function _toggle() {
      if (!this.disabled) {
        this.panel.toggle();
      }
    }
    /** Gets whether the panel is expanded. */

  }, {
    key: "_isExpanded",
    value: function _isExpanded() {
      return this.panel.expanded;
    }
    /** Gets the expanded state string of the panel. */

  }, {
    key: "_getExpandedState",
    value: function _getExpandedState() {
      return this.panel._getExpandedState();
    }
    /** Gets the panel id. */

  }, {
    key: "_getPanelId",
    value: function _getPanelId() {
      return this.panel.id;
    }
    /** Gets the toggle position for the header. */

  }, {
    key: "_getTogglePosition",
    value: function _getTogglePosition() {
      return this.panel.togglePosition;
    }
    /** Gets whether the expand indicator should be shown. */

  }, {
    key: "_showToggle",
    value: function _showToggle() {
      return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Gets the current height of the header. Null if no custom height has been
     * specified, and if the default height from the stylesheet should be used.
     */

  }, {
    key: "_getHeaderHeight",
    value: function _getHeaderHeight() {
      var isExpanded = this._isExpanded();

      if (isExpanded && this.expandedHeight) {
        return this.expandedHeight;
      } else if (!isExpanded && this.collapsedHeight) {
        return this.collapsedHeight;
      }

      return null;
    }
    /** Handle keydown event calling to toggle() if appropriate. */

  }, {
    key: "_keydown",
    value: function _keydown(event) {
      switch (event.keyCode) {
        // Toggle for space and enter keys.
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["SPACE"]:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["ENTER"]:
          if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["hasModifierKey"])(event)) {
            event.preventDefault();

            this._toggle();
          }

          break;

        default:
          if (this.panel.accordion) {
            this.panel.accordion._handleHeaderKeydown(event);
          }

          return;
      }
    }
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */

  }, {
    key: "focus",
    value: function focus() {
      var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
      var options = arguments.length > 1 ? arguments[1] : undefined;

      this._focusMonitor.focusVia(this._element, origin, options);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this4 = this;

      this._focusMonitor.monitor(this._element).subscribe(function (origin) {
        if (origin && _this4.panel.accordion) {
          _this4.panel.accordion._handleHeaderFocus(_this4);
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._parentChangeSubscription.unsubscribe();

      this._focusMonitor.stopMonitoring(this._element);
    }
  }]);

  return MatExpansionPanelHeader;
}();

MatExpansionPanelHeader.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
  args: [{
    selector: 'mat-expansion-panel-header',
    template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
    animations: [matExpansionAnimations.indicatorRotate],
    host: {
      'class': 'mat-expansion-panel-header mat-focus-indicator',
      'role': 'button',
      '[attr.id]': 'panel._headerId',
      '[attr.tabindex]': 'disabled ? -1 : 0',
      '[attr.aria-controls]': '_getPanelId()',
      '[attr.aria-expanded]': '_isExpanded()',
      '[attr.aria-disabled]': 'panel.disabled',
      '[class.mat-expanded]': '_isExpanded()',
      '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
      '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
      '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
      '[style.height]': '_getHeaderHeight()',
      '(click)': '_toggle()',
      '(keydown)': '_keydown($event)'
    },
    styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"]
  }]
}];

MatExpansionPanelHeader.ctorParameters = function () {
  return [{
    type: MatExpansionPanel,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Host"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatExpansionPanelHeader.propDecorators = {
  expandedHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  collapsedHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/**
 * Description element of a `<mat-expansion-panel-header>`.
 */

var MatExpansionPanelDescription = function MatExpansionPanelDescription() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatExpansionPanelDescription);
};

MatExpansionPanelDescription.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: 'mat-panel-description',
    host: {
      class: 'mat-expansion-panel-header-description'
    }
  }]
}];
/**
 * Title element of a `<mat-expansion-panel-header>`.
 */

var MatExpansionPanelTitle = function MatExpansionPanelTitle() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatExpansionPanelTitle);
};

MatExpansionPanelTitle.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: 'mat-panel-title',
    host: {
      class: 'mat-expansion-panel-header-title'
    }
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
 * Directive for a Material Design Accordion.
 */

var MatAccordion = /*#__PURE__*/function (_CdkAccordion) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatAccordion, _CdkAccordion);

  var _super2 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MatAccordion);

  function MatAccordion() {
    var _this5;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatAccordion);

    _this5 = _super2.apply(this, arguments);
    /** Headers belonging to this accordion. */

    _this5._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["QueryList"]();
    _this5._hideToggle = false;
    /**
     * Display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the rest of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     */

    _this5.displayMode = 'default';
    /** The position of the expansion indicator. */

    _this5.togglePosition = 'after';
    return _this5;
  }
  /** Whether the expansion indicator should be hidden. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatAccordion, [{
    key: "hideToggle",
    get: function get() {
      return this._hideToggle;
    },
    set: function set(show) {
      this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(show);
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this6 = this;

      this._headers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(this._headers)).subscribe(function (headers) {
        _this6._ownHeaders.reset(headers.filter(function (header) {
          return header.panel.accordion === _this6;
        }));

        _this6._ownHeaders.notifyOnChanges();
      });

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusKeyManager"](this._ownHeaders).withWrap().withHomeAndEnd();
    }
    /** Handles keyboard events coming in from the panel headers. */

  }, {
    key: "_handleHeaderKeydown",
    value: function _handleHeaderKeydown(event) {
      this._keyManager.onKeydown(event);
    }
  }, {
    key: "_handleHeaderFocus",
    value: function _handleHeaderFocus(header) {
      this._keyManager.updateActiveItem(header);
    }
  }]);

  return MatAccordion;
}(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordion"]);

MatAccordion.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: 'mat-accordion',
    exportAs: 'matAccordion',
    inputs: ['multi'],
    providers: [{
      provide: MAT_ACCORDION,
      useExisting: MatAccordion
    }],
    host: {
      class: 'mat-accordion',
      // Class binding which is only used by the test harness as there is no other
      // way for the harness to detect if multiple panel support is enabled.
      '[class.mat-accordion-multi]': 'this.multi'
    }
  }]
}];
MatAccordion.propDecorators = {
  _headers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [MatExpansionPanelHeader, {
      descendants: true
    }]
  }],
  hideToggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  displayMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  togglePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var MatExpansionModule = function MatExpansionModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatExpansionModule);
};

MatExpansionModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"]],
    exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
    declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
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
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default~paginas-compromiso-docente-compromiso-form-compromiso-form-module-ngfactory~paginas-evaluaci~31984056.js.map