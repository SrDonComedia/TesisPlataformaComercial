(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~paginas-aerc-solicitudes-admin-aerc-admin-aprobador-admin-aprobador-module-ngfactory~paginas~a78ee3b4"],{

/***/ "5QHs":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/paginator.js ***!
  \**************************************************************/
/*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function() { return MAT_PAGINATOR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function() { return MAT_PAGINATOR_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function() { return MAT_PAGINATOR_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function() { return MatPaginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function() { return MatPaginatorIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return MatPaginatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function() { return PageEvent; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "UhP/");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */

var MatPaginatorIntl = function MatPaginatorIntl() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorIntl);

  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
  /** A label for the page size selector. */

  this.itemsPerPageLabel = 'Items per page:';
  /** A label for the button that increments the current page. */

  this.nextPageLabel = 'Next page';
  /** A label for the button that decrements the current page. */

  this.previousPageLabel = 'Previous page';
  /** A label for the button that moves to the first page. */

  this.firstPageLabel = 'First page';
  /** A label for the button that moves to the last page. */

  this.lastPageLabel = 'Last page';
  /** A label for the range of items within the current page and the length of the whole list. */

  this.getRangeLabel = function (page, pageSize, length) {
    if (length == 0 || pageSize == 0) {
      return "0 of ".concat(length);
    }

    length = Math.max(length, 0);
    var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

    var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
  };
};

MatPaginatorIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"])({
  factory: function MatPaginatorIntl_Factory() {
    return new MatPaginatorIntl();
  },
  token: MatPaginatorIntl,
  providedIn: "root"
});
MatPaginatorIntl.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @docs-private */

function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */


var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_5__["SkipSelf"](), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The default page size if there is no page size and there are no provided page size options. */

var DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */

var PageEvent = function PageEvent() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PageEvent);
};
/** Injection token that can be used to provide the default options for the paginator module. */


var MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatPaginator.

/** @docs-private */

var MatPaginatorBase = function MatPaginatorBase() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorBase);
};

var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinInitialized"])(MatPaginatorBase));
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */


var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatPaginator, _MatPaginatorBase2);

  var _super = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatPaginator);

  function MatPaginator(_intl, _changeDetectorRef, defaults) {
    var _this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginator);

    _this = _super.call(this);
    _this._intl = _intl;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._pageIndex = 0;
    _this._length = 0;
    _this._pageSizeOptions = [];
    _this._hidePageSize = false;
    _this._showFirstLastButtons = false;
    /** Event emitted when the paginator changes the page size or page index. */

    _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    _this._intlChanges = _intl.changes.subscribe(function () {
      return _this._changeDetectorRef.markForCheck();
    });

    if (defaults) {
      var pageSize = defaults.pageSize,
          pageSizeOptions = defaults.pageSizeOptions,
          hidePageSize = defaults.hidePageSize,
          showFirstLastButtons = defaults.showFirstLastButtons,
          formFieldAppearance = defaults.formFieldAppearance;

      if (pageSize != null) {
        _this._pageSize = pageSize;
      }

      if (pageSizeOptions != null) {
        _this._pageSizeOptions = pageSizeOptions;
      }

      if (hidePageSize != null) {
        _this._hidePageSize = hidePageSize;
      }

      if (showFirstLastButtons != null) {
        _this._showFirstLastButtons = showFirstLastButtons;
      }

      if (formFieldAppearance != null) {
        _this._formFieldAppearance = formFieldAppearance;
      }
    }

    return _this;
  }
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatPaginator, [{
    key: "pageIndex",
    get: function get() {
      return this._pageIndex;
    },
    set: function set(value) {
      this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value), 0);

      this._changeDetectorRef.markForCheck();
    }
    /** The length of the total number of items that are being paginated. Defaulted to 0. */

  }, {
    key: "length",
    get: function get() {
      return this._length;
    },
    set: function set(value) {
      this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value);

      this._changeDetectorRef.markForCheck();
    }
    /** Number of items to display on a page. By default set to 50. */

  }, {
    key: "pageSize",
    get: function get() {
      return this._pageSize;
    },
    set: function set(value) {
      this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value), 0);

      this._updateDisplayedPageSizeOptions();
    }
    /** The set of provided page size options to display to the user. */

  }, {
    key: "pageSizeOptions",
    get: function get() {
      return this._pageSizeOptions;
    },
    set: function set(value) {
      this._pageSizeOptions = (value || []).map(function (p) {
        return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(p);
      });

      this._updateDisplayedPageSizeOptions();
    }
    /** Whether to hide the page size selection UI from the user. */

  }, {
    key: "hidePageSize",
    get: function get() {
      return this._hidePageSize;
    },
    set: function set(value) {
      this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
    /** Whether to show the first/last buttons UI to the user. */

  }, {
    key: "showFirstLastButtons",
    get: function get() {
      return this._showFirstLastButtons;
    },
    set: function set(value) {
      this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._initialized = true;

      this._updateDisplayedPageSizeOptions();

      this._markInitialized();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._intlChanges.unsubscribe();
    }
    /** Advances to the next page if it exists. */

  }, {
    key: "nextPage",
    value: function nextPage() {
      if (!this.hasNextPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex++;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move back to the previous page if it exists. */

  }, {
    key: "previousPage",
    value: function previousPage() {
      if (!this.hasPreviousPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex--;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move to the first page if not already there. */

  }, {
    key: "firstPage",
    value: function firstPage() {
      // hasPreviousPage being false implies at the start
      if (!this.hasPreviousPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex = 0;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move to the last page if not already there. */

  }, {
    key: "lastPage",
    value: function lastPage() {
      // hasNextPage being false implies at the end
      if (!this.hasNextPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex = this.getNumberOfPages() - 1;

      this._emitPageEvent(previousPageIndex);
    }
    /** Whether there is a previous page. */

  }, {
    key: "hasPreviousPage",
    value: function hasPreviousPage() {
      return this.pageIndex >= 1 && this.pageSize != 0;
    }
    /** Whether there is a next page. */

  }, {
    key: "hasNextPage",
    value: function hasNextPage() {
      var maxPageIndex = this.getNumberOfPages() - 1;
      return this.pageIndex < maxPageIndex && this.pageSize != 0;
    }
    /** Calculate the number of pages */

  }, {
    key: "getNumberOfPages",
    value: function getNumberOfPages() {
      if (!this.pageSize) {
        return 0;
      }

      return Math.ceil(this.length / this.pageSize);
    }
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */

  }, {
    key: "_changePageSize",
    value: function _changePageSize(pageSize) {
      // Current page needs to be updated to reflect the new page size. Navigate to the page
      // containing the previous page's first item.
      var startIndex = this.pageIndex * this.pageSize;
      var previousPageIndex = this.pageIndex;
      this.pageIndex = Math.floor(startIndex / pageSize) || 0;
      this.pageSize = pageSize;

      this._emitPageEvent(previousPageIndex);
    }
    /** Checks whether the buttons for going forwards should be disabled. */

  }, {
    key: "_nextButtonsDisabled",
    value: function _nextButtonsDisabled() {
      return this.disabled || !this.hasNextPage();
    }
    /** Checks whether the buttons for going backwards should be disabled. */

  }, {
    key: "_previousButtonsDisabled",
    value: function _previousButtonsDisabled() {
      return this.disabled || !this.hasPreviousPage();
    }
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     */

  }, {
    key: "_updateDisplayedPageSizeOptions",
    value: function _updateDisplayedPageSizeOptions() {
      if (!this._initialized) {
        return;
      } // If no page size is provided, use the first page size option or the default page size.


      if (!this.pageSize) {
        this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
      }

      this._displayedPageSizeOptions = this.pageSizeOptions.slice();

      if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
        this._displayedPageSizeOptions.push(this.pageSize);
      } // Sort the numbers using a number-specific sort function.


      this._displayedPageSizeOptions.sort(function (a, b) {
        return a - b;
      });

      this._changeDetectorRef.markForCheck();
    }
    /** Emits an event notifying that a change of the paginator's properties has been triggered. */

  }, {
    key: "_emitPageEvent",
    value: function _emitPageEvent(previousPageIndex) {
      this.page.emit({
        previousPageIndex: previousPageIndex,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        length: this.length
      });
    }
  }]);

  return MatPaginator;
}(_MatPaginatorBase);

MatPaginator.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
  args: [{
    selector: 'mat-paginator',
    exportAs: 'matPaginator',
    template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [appearance]=\"_formFieldAppearance!\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
    inputs: ['disabled'],
    host: {
      'class': 'mat-paginator'
    },
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
    styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
  }]
}];

MatPaginator.ctorParameters = function () {
  return [{
    type: MatPaginatorIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }];
};

MatPaginator.propDecorators = {
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  length: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageSizeOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  hidePageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  showFirstLastButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var MatPaginatorModule = function MatPaginatorModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorModule);
};

MatPaginatorModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]],
    exports: [MatPaginator],
    declarations: [MatPaginator],
    providers: [MAT_PAGINATOR_INTL_PROVIDER]
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

/***/ "Tj54":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/icon.js ***!
  \*********************************************************/
/*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return ICON_REGISTRY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return MAT_ICON_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return MAT_ICON_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return MatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return MatIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return MatIconRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return getMatIconFailedToSanitizeLiteralError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return getMatIconFailedToSanitizeUrlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return getMatIconNameNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return getMatIconNoHttpProviderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */

function getMatIconNameNotFoundError(iconName) {
  return Error("Unable to find icon with the name \"".concat(iconName, "\""));
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */


function getMatIconNoHttpProviderError() {
  return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeUrlError(url) {
  return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */


var SvgIconConfig = function SvgIconConfig(url, svgText, options) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SvgIconConfig);

  this.url = url;
  this.svgText = svgText;
  this.options = options;
};
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */


var MatIconRegistry = /*#__PURE__*/function () {
  function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatIconRegistry);

    this._httpClient = _httpClient;
    this._sanitizer = _sanitizer;
    this._errorHandler = _errorHandler;
    /**
     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
     */

    this._svgIconConfigs = new Map();
    /**
     * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
     * Multiple icon sets can be registered under the same namespace.
     */

    this._iconSetConfigs = new Map();
    /** Cache for icons loaded by direct URLs. */

    this._cachedIconsByUrl = new Map();
    /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

    this._inProgressUrlFetches = new Map();
    /** Map from font identifiers to their CSS class names. Used for icon fonts. */

    this._fontCssClassesByAlias = new Map();
    /**
     * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
     * The default 'material-icons' value assumes that the material icon font has been loaded as
     * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
     */

    this._defaultFontSetClass = 'material-icons';
    this._document = document;
  }
  /**
   * Registers an icon by URL in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MatIconRegistry, [{
    key: "addSvgIcon",
    value: function addSvgIcon(iconName, url, options) {
      return this.addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */

  }, {
    key: "addSvgIconLiteral",
    value: function addSvgIconLiteral(iconName, literal, options) {
      return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */

  }, {
    key: "addSvgIconInNamespace",
    value: function addSvgIconInNamespace(namespace, iconName, url, options) {
      return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */

  }, {
    key: "addSvgIconLiteralInNamespace",
    value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
      var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].HTML, literal); // TODO: add an ngDevMode check


      if (!cleanLiteral) {
        throw getMatIconFailedToSanitizeLiteralError(literal);
      }

      return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */

  }, {
    key: "addSvgIconSet",
    value: function addSvgIconSet(url, options) {
      return this.addSvgIconSetInNamespace('', url, options);
    }
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */

  }, {
    key: "addSvgIconSetLiteral",
    value: function addSvgIconSetLiteral(literal, options) {
      return this.addSvgIconSetLiteralInNamespace('', literal, options);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */

  }, {
    key: "addSvgIconSetInNamespace",
    value: function addSvgIconSetInNamespace(namespace, url, options) {
      return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */

  }, {
    key: "addSvgIconSetLiteralInNamespace",
    value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
      var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].HTML, literal);

      if (!cleanLiteral) {
        throw getMatIconFailedToSanitizeLiteralError(literal);
      }

      return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */

  }, {
    key: "registerFontClassAlias",
    value: function registerFontClassAlias(alias) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

      this._fontCssClassesByAlias.set(alias, className);

      return this;
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */

  }, {
    key: "classNameForFontAlias",
    value: function classNameForFontAlias(alias) {
      return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */

  }, {
    key: "setDefaultFontSetClass",
    value: function setDefaultFontSetClass(className) {
      this._defaultFontSetClass = className;
      return this;
    }
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */

  }, {
    key: "getDefaultFontSetClass",
    value: function getDefaultFontSetClass() {
      return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */

  }, {
    key: "getSvgIconFromUrl",
    value: function getSvgIconFromUrl(safeUrl) {
      var _this = this;

      var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].RESOURCE_URL, safeUrl);

      if (!url) {
        throw getMatIconFailedToSanitizeUrlError(safeUrl);
      }

      var cachedIcon = this._cachedIconsByUrl.get(url);

      if (cachedIcon) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(cloneSvg(cachedIcon));
      }

      return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (svg) {
        return _this._cachedIconsByUrl.set(url, svg);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (svg) {
        return cloneSvg(svg);
      }));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */

  }, {
    key: "getNamedSvgIcon",
    value: function getNamedSvgIcon(name) {
      var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      // Return (copy of) cached icon if possible.
      var key = iconKey(namespace, name);

      var config = this._svgIconConfigs.get(key);

      if (config) {
        return this._getSvgFromConfig(config);
      } // See if we have any icon sets registered for the namespace.


      var iconSetConfigs = this._iconSetConfigs.get(namespace);

      if (iconSetConfigs) {
        return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
      }

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(getMatIconNameNotFoundError(key));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._svgIconConfigs.clear();

      this._iconSetConfigs.clear();

      this._cachedIconsByUrl.clear();
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */

  }, {
    key: "_getSvgFromConfig",
    value: function _getSvgFromConfig(config) {
      if (config.svgText) {
        // We already have the SVG element for this icon, return a copy.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(cloneSvg(this._svgElementFromConfig(config)));
      } else {
        // Fetch the icon from the config's URL, cache it, and return a copy.
        return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (svg) {
          return cloneSvg(svg);
        }));
      }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */

  }, {
    key: "_getSvgFromIconSetConfigs",
    value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
      var _this2 = this;

      // For all the icon set SVG elements we've fetched, see if any contain an icon with the
      // requested name.
      var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

      if (namedIcon) {
        // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
        // time anyway, there's probably not much advantage compared to just always extracting
        // it from the icon set.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(namedIcon);
      } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
      // fetched, fetch them now and look for iconName in the results.


      var iconSetFetchRequests = iconSetConfigs.filter(function (iconSetConfig) {
        return !iconSetConfig.svgText;
      }).map(function (iconSetConfig) {
        return _this2._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (err) {
          var url = _this2._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
          // combined Observable won't necessarily fail.


          var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message);

          _this2._errorHandler.handleError(new Error(errorMessage));

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
        }));
      }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
      // cached SVG element (unless the request failed), and we can check again for the icon.

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
        var foundIcon = _this2._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


        if (!foundIcon) {
          throw getMatIconNameNotFoundError(name);
        }

        return foundIcon;
      }));
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */

  }, {
    key: "_extractIconWithNameFromAnySet",
    value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
      // Iterate backwards, so icon sets added later have precedence.
      for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
        var config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
        // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
        // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
        // some of the parsing.

        if (config.svgText && config.svgText.indexOf(iconName) > -1) {
          var svg = this._svgElementFromConfig(config);

          var foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

          if (foundIcon) {
            return foundIcon;
          }
        }
      }

      return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */

  }, {
    key: "_loadSvgIconFromConfig",
    value: function _loadSvgIconFromConfig(config) {
      var _this3 = this;

      return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (svgText) {
        return config.svgText = svgText;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
        return _this3._svgElementFromConfig(config);
      }));
    }
    /**
     * Loads the content of the icon set URL specified in the
     * SvgIconConfig and attaches it to the config.
     */

  }, {
    key: "_loadSvgIconSetFromConfig",
    value: function _loadSvgIconSetFromConfig(config) {
      if (config.svgText) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
      }

      return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (svgText) {
        return config.svgText = svgText;
      }));
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */

  }, {
    key: "_extractSvgIconFromSet",
    value: function _extractSvgIconFromSet(iconSet, iconName, options) {
      // Use the `id="iconName"` syntax in order to escape special
      // characters in the ID (versus using the #iconName syntax).
      var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

      if (!iconSource) {
        return null;
      } // Clone the element and remove the ID to prevent multiple elements from being added
      // to the page with the same ID.


      var iconElement = iconSource.cloneNode(true);
      iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
      // the content of a new <svg> node.

      if (iconElement.nodeName.toLowerCase() === 'svg') {
        return this._setSvgAttributes(iconElement, options);
      } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
      // that the same could be achieved by referring to it via <use href="#id">, however the <use>
      // tag is problematic on Firefox, because it needs to include the current page path.


      if (iconElement.nodeName.toLowerCase() === 'symbol') {
        return this._setSvgAttributes(this._toSvgElement(iconElement), options);
      } // createElement('SVG') doesn't work as expected; the DOM ends up with
      // the correct nodes, but the SVG content doesn't render. Instead we
      // have to create an empty SVG node using innerHTML and append its content.
      // Elements created using DOMParser.parseFromString have the same problem.
      // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


      var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


      svg.appendChild(iconElement);
      return this._setSvgAttributes(svg, options);
    }
    /**
     * Creates a DOM element from the given SVG string.
     */

  }, {
    key: "_svgElementFromString",
    value: function _svgElementFromString(str) {
      var div = this._document.createElement('DIV');

      div.innerHTML = str;
      var svg = div.querySelector('svg'); // TODO: add an ngDevMode check

      if (!svg) {
        throw Error('<svg> tag not found');
      }

      return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */

  }, {
    key: "_toSvgElement",
    value: function _toSvgElement(element) {
      var svg = this._svgElementFromString('<svg></svg>');

      var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

      for (var i = 0; i < attributes.length; i++) {
        var _attributes$i = attributes[i],
            name = _attributes$i.name,
            value = _attributes$i.value;

        if (name !== 'id') {
          svg.setAttribute(name, value);
        }
      }

      for (var _i = 0; _i < element.childNodes.length; _i++) {
        if (element.childNodes[_i].nodeType === this._document.ELEMENT_NODE) {
          svg.appendChild(element.childNodes[_i].cloneNode(true));
        }
      }

      return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */

  }, {
    key: "_setSvgAttributes",
    value: function _setSvgAttributes(svg, options) {
      svg.setAttribute('fit', '');
      svg.setAttribute('height', '100%');
      svg.setAttribute('width', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

      if (options && options.viewBox) {
        svg.setAttribute('viewBox', options.viewBox);
      }

      return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given icon. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */

  }, {
    key: "_fetchIcon",
    value: function _fetchIcon(iconConfig) {
      var _this4 = this;

      var _a;

      var safeUrl = iconConfig.url,
          options = iconConfig.options;
      var withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

      if (!this._httpClient) {
        throw getMatIconNoHttpProviderError();
      } // TODO: add an ngDevMode check


      if (safeUrl == null) {
        throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
      }

      var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


      if (!url) {
        throw getMatIconFailedToSanitizeUrlError(safeUrl);
      } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
      // already a request in progress for that URL. It's necessary to call share() on the
      // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


      var inProgressFetch = this._inProgressUrlFetches.get(url);

      if (inProgressFetch) {
        return inProgressFetch;
      }

      var req = this._httpClient.get(url, {
        responseType: 'text',
        withCredentials: withCredentials
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
        return _this4._inProgressUrlFetches.delete(url);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["share"])());

      this._inProgressUrlFetches.set(url, req);

      return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */

  }, {
    key: "_addSvgIconConfig",
    value: function _addSvgIconConfig(namespace, iconName, config) {
      this._svgIconConfigs.set(iconKey(namespace, iconName), config);

      return this;
    }
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */

  }, {
    key: "_addSvgIconSetConfig",
    value: function _addSvgIconSetConfig(namespace, config) {
      var configNamespace = this._iconSetConfigs.get(namespace);

      if (configNamespace) {
        configNamespace.push(config);
      } else {
        this._iconSetConfigs.set(namespace, [config]);
      }

      return this;
    }
    /** Parses a config's text into an SVG element. */

  }, {
    key: "_svgElementFromConfig",
    value: function _svgElementFromConfig(config) {
      if (!config.svgElement) {
        var svg = this._svgElementFromString(config.svgText);

        this._setSvgAttributes(svg, config.options);

        config.svgElement = svg;
      }

      return config.svgElement;
    }
  }]);

  return MatIconRegistry;
}();

MatIconRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"])({
  factory: function MatIconRegistry_Factory() {
    return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]));
  },
  token: MatIconRegistry,
  providedIn: "root"
});
MatIconRegistry.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];

MatIconRegistry.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }]
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]
  }];
};
/** @docs-private */


function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */


var ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_5__["SkipSelf"](), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"], [new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
/** Clones an SVGElement while preserving type information. */

function cloneSvg(svg) {
  return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */


function iconKey(namespace, name) {
  return namespace + ':' + name;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatIcon.

/** @docs-private */


var MatIconBase = function MatIconBase(_elementRef) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatIconBase);

  this._elementRef = _elementRef;
};

var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(MatIconBase);
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */


var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('mat-icon-location', {
  providedIn: 'root',
  factory: MAT_ICON_LOCATION_FACTORY
});
/** @docs-private */

function MAT_ICON_LOCATION_FACTORY() {
  var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]);

  var _location = _document ? _document.location : null;

  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: function getPathname() {
      return _location ? _location.pathname + _location.search : '';
    }
  };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

var ɵ0 = function ɵ0(attr) {
  return "[".concat(attr, "]");
};
/** Selector that can be used to find all elements that are using a `FuncIRI`. */


var funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */

var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */

var MatIcon = /*#__PURE__*/function (_MatIconMixinBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatIcon, _MatIconMixinBase2);

  var _super = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatIcon);

  function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
    var _this5;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatIcon);

    _this5 = _super.call(this, elementRef);
    _this5._iconRegistry = _iconRegistry;
    _this5._location = _location;
    _this5._errorHandler = _errorHandler;
    _this5._inline = false;
    /** Subscription to the current in-progress SVG icon request. */

    _this5._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
    // the right thing to do for the majority of icon use-cases.

    if (!ariaHidden) {
      elementRef.nativeElement.setAttribute('aria-hidden', 'true');
    }

    return _this5;
  }
  /**
   * Whether the icon should be inlined, automatically sizing the icon to match the font size of
   * the element the icon is contained in.
   */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MatIcon, [{
    key: "inline",
    get: function get() {
      return this._inline;
    },
    set: function set(inline) {
      this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(inline);
    }
    /** Name of the icon in the SVG icon set. */

  }, {
    key: "svgIcon",
    get: function get() {
      return this._svgIcon;
    },
    set: function set(value) {
      if (value !== this._svgIcon) {
        if (value) {
          this._updateSvgIcon(value);
        } else if (this._svgIcon) {
          this._clearSvgElement();
        }

        this._svgIcon = value;
      }
    }
    /** Font set that the icon is a part of. */

  }, {
    key: "fontSet",
    get: function get() {
      return this._fontSet;
    },
    set: function set(value) {
      var newValue = this._cleanupFontValue(value);

      if (newValue !== this._fontSet) {
        this._fontSet = newValue;

        this._updateFontIconClasses();
      }
    }
    /** Name of an icon within a font set. */

  }, {
    key: "fontIcon",
    get: function get() {
      return this._fontIcon;
    },
    set: function set(value) {
      var newValue = this._cleanupFontValue(value);

      if (newValue !== this._fontIcon) {
        this._fontIcon = newValue;

        this._updateFontIconClasses();
      }
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */

  }, {
    key: "_splitIconName",
    value: function _splitIconName(iconName) {
      if (!iconName) {
        return ['', ''];
      }

      var parts = iconName.split(':');

      switch (parts.length) {
        case 1:
          return ['', parts[0]];
        // Use default namespace.

        case 2:
          return parts;

        default:
          throw Error("Invalid icon name: \"".concat(iconName, "\""));
        // TODO: add an ngDevMode check
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      // Update font classes because ngOnChanges won't be called if none of the inputs are present,
      // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
      this._updateFontIconClasses();
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      var cachedElements = this._elementsWithExternalReferences;

      if (cachedElements && cachedElements.size) {
        var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
        // the browser doesn't have an API that will let us react on link clicks and
        // we can't depend on the Angular router. The references need to be updated,
        // because while most browsers don't care whether the URL is correct after
        // the first render, Safari will break if the user navigates to a different
        // page and the SVG isn't re-rendered.


        if (newPath !== this._previousPath) {
          this._previousPath = newPath;

          this._prependPathToReferences(newPath);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._currentIconFetch.unsubscribe();

      if (this._elementsWithExternalReferences) {
        this._elementsWithExternalReferences.clear();
      }
    }
  }, {
    key: "_usingFontIcon",
    value: function _usingFontIcon() {
      return !this.svgIcon;
    }
  }, {
    key: "_setSvgElement",
    value: function _setSvgElement(svg) {
      this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
      // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
      // Do this before inserting the element into the DOM, in order to avoid a style recalculation.


      var styleTags = svg.querySelectorAll('style');

      for (var i = 0; i < styleTags.length; i++) {
        styleTags[i].textContent += ' ';
      } // Note: we do this fix here, rather than the icon registry, because the
      // references have to point to the URL at the time that the icon was created.


      var path = this._location.getPathname();

      this._previousPath = path;

      this._cacheChildrenWithExternalReferences(svg);

      this._prependPathToReferences(path);

      this._elementRef.nativeElement.appendChild(svg);
    }
  }, {
    key: "_clearSvgElement",
    value: function _clearSvgElement() {
      var layoutElement = this._elementRef.nativeElement;
      var childCount = layoutElement.childNodes.length;

      if (this._elementsWithExternalReferences) {
        this._elementsWithExternalReferences.clear();
      } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
      // we can't use innerHTML, because IE will throw if the element has a data binding.


      while (childCount--) {
        var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
        // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

        if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
          layoutElement.removeChild(child);
        }
      }
    }
  }, {
    key: "_updateFontIconClasses",
    value: function _updateFontIconClasses() {
      if (!this._usingFontIcon()) {
        return;
      }

      var elem = this._elementRef.nativeElement;
      var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

      if (fontSetClass != this._previousFontSetClass) {
        if (this._previousFontSetClass) {
          elem.classList.remove(this._previousFontSetClass);
        }

        if (fontSetClass) {
          elem.classList.add(fontSetClass);
        }

        this._previousFontSetClass = fontSetClass;
      }

      if (this.fontIcon != this._previousFontIconClass) {
        if (this._previousFontIconClass) {
          elem.classList.remove(this._previousFontIconClass);
        }

        if (this.fontIcon) {
          elem.classList.add(this.fontIcon);
        }

        this._previousFontIconClass = this.fontIcon;
      }
    }
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     */

  }, {
    key: "_cleanupFontValue",
    value: function _cleanupFontValue(value) {
      return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */

  }, {
    key: "_prependPathToReferences",
    value: function _prependPathToReferences(path) {
      var elements = this._elementsWithExternalReferences;

      if (elements) {
        elements.forEach(function (attrs, element) {
          attrs.forEach(function (attr) {
            element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
          });
        });
      }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */

  }, {
    key: "_cacheChildrenWithExternalReferences",
    value: function _cacheChildrenWithExternalReferences(element) {
      var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
      var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

      var _loop = function _loop(i) {
        funcIriAttributes.forEach(function (attr) {
          var elementWithReference = elementsWithFuncIri[i];
          var value = elementWithReference.getAttribute(attr);
          var match = value ? value.match(funcIriPattern) : null;

          if (match) {
            var attributes = elements.get(elementWithReference);

            if (!attributes) {
              attributes = [];
              elements.set(elementWithReference, attributes);
            }

            attributes.push({
              name: attr,
              value: match[1]
            });
          }
        });
      };

      for (var i = 0; i < elementsWithFuncIri.length; i++) {
        _loop(i);
      }
    }
    /** Sets a new SVG icon with a particular name. */

  }, {
    key: "_updateSvgIcon",
    value: function _updateSvgIcon(rawName) {
      var _this6 = this;

      this._svgNamespace = null;
      this._svgName = null;

      this._currentIconFetch.unsubscribe();

      if (rawName) {
        var _this$_splitIconName = this._splitIconName(rawName),
            _this$_splitIconName2 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$_splitIconName, 2),
            namespace = _this$_splitIconName2[0],
            iconName = _this$_splitIconName2[1];

        if (namespace) {
          this._svgNamespace = namespace;
        }

        if (iconName) {
          this._svgName = iconName;
        }

        this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (svg) {
          return _this6._setSvgElement(svg);
        }, function (err) {
          var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message);

          _this6._errorHandler.handleError(new Error(errorMessage));
        });
      }
    }
  }]);

  return MatIcon;
}(_MatIconMixinBase);

MatIcon.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
  args: [{
    template: '<ng-content></ng-content>',
    selector: 'mat-icon',
    exportAs: 'matIcon',
    inputs: ['color'],
    host: {
      'role': 'img',
      'class': 'mat-icon notranslate',
      '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
      '[attr.data-mat-icon-name]': '_svgName || fontIcon',
      '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
      '[class.mat-icon-inline]': 'inline',
      '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
    },
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
    styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
  }]
}];

MatIcon.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
  }, {
    type: MatIconRegistry
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Attribute"],
      args: ['aria-hidden']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [MAT_ICON_LOCATION]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]
  }];
};

MatIcon.propDecorators = {
  inline: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  svgIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  fontSet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  fontIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var MatIconModule = function MatIconModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatIconModule);
};

MatIconModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
  args: [{
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
    exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
    declarations: [MatIcon]
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

/***/ "hzfI":
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/stepper.js ***!
  \************************************************************/
/*! exports provided: MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function() { return MAT_STEPPER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function() { return MAT_STEPPER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function() { return MatHorizontalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStep", function() { return MatStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function() { return MatStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function() { return MatStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function() { return MatStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function() { return MatStepperIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function() { return MatStepperIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function() { return MatStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function() { return MatStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function() { return MatStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function() { return MatVerticalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function() { return matStepperAnimations; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "q59W");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "GS7A");


















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var MatStepLabel = /*#__PURE__*/function (_CdkStepLabel) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatStepLabel, _CdkStepLabel);

  var _super = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatStepLabel);

  function MatStepLabel() {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStepLabel);

    return _super.apply(this, arguments);
  }

  return MatStepLabel;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepLabel"]);

MatStepLabel.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: '[matStepLabel]'
  }]
}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Stepper data that is required for internationalization. */

var MatStepperIntl = function MatStepperIntl() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStepperIntl);

  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
  /** Label that is rendered below optional steps. */

  this.optionalLabel = 'Optional';
};

MatStepperIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function MatStepperIntl_Factory() {
    return new MatStepperIntl();
  },
  token: MatStepperIntl,
  providedIn: "root"
});
MatStepperIntl.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @docs-private */

function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
/** @docs-private */


var MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_9__["SkipSelf"](), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var MatStepHeader = /*#__PURE__*/function (_CdkStepHeader) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatStepHeader, _CdkStepHeader);

  var _super2 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatStepHeader);

  function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
    var _this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStepHeader);

    _this = _super2.call(this, _elementRef);
    _this._intl = _intl;
    _this._focusMonitor = _focusMonitor;
    _this._intlSubscription = _intl.changes.subscribe(function () {
      return changeDetectorRef.markForCheck();
    });
    return _this;
  }

  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MatStepHeader, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._focusMonitor.monitor(this._elementRef, true);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._intlSubscription.unsubscribe();

      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the step header. */

  }, {
    key: "focus",
    value: function focus() {
      this._focusMonitor.focusVia(this._elementRef, 'program');
    }
    /** Returns string label of given step if it is a text label. */

  }, {
    key: "_stringLabel",
    value: function _stringLabel() {
      return this.label instanceof MatStepLabel ? null : this.label;
    }
    /** Returns MatStepLabel if the label of given step is a template label. */

  }, {
    key: "_templateLabel",
    value: function _templateLabel() {
      return this.label instanceof MatStepLabel ? this.label : null;
    }
    /** Returns the host HTML element. */

  }, {
    key: "_getHostElement",
    value: function _getHostElement() {
      return this._elementRef.nativeElement;
    }
    /** Template context variables that are exposed to the `matStepperIcon` instances. */

  }, {
    key: "_getIconContext",
    value: function _getIconContext() {
      return {
        index: this.index,
        active: this.active,
        optional: this.optional
      };
    }
  }, {
    key: "_getDefaultTextForState",
    value: function _getDefaultTextForState(state) {
      if (state == 'number') {
        return "".concat(this.index + 1);
      }

      if (state == 'edit') {
        return 'create';
      }

      if (state == 'error') {
        return 'warning';
      }

      return state;
    }
  }]);

  return MatStepHeader;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepHeader"]);

MatStepHeader.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
  args: [{
    selector: 'mat-step-header',
    template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
    host: {
      'class': 'mat-step-header mat-focus-indicator',
      'role': 'tab'
    },
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
    styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
  }]
}];

MatStepHeader.ctorParameters = function () {
  return [{
    type: MatStepperIntl
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

MatStepHeader.propDecorators = {
  state: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  errorMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  iconOverrides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  index: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  active: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  optional: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  disableRipple: [{
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

/**
 * Animations used by the Material steppers.
 * @docs-private
 */

var matStepperAnimations = {
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'none',
    visibility: 'visible'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

  /** Animation that transitions the step along the Y axis in a vertical stepper. */
  verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    height: '0px',
    visibility: 'hidden'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    height: '0px',
    visibility: 'hidden'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    height: '*',
    visibility: 'visible'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Template to be used to override the icons inside the step header.
 */

var MatStepperIcon = function MatStepperIcon(templateRef) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStepperIcon);

  this.templateRef = templateRef;
};

MatStepperIcon.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: 'ng-template[matStepperIcon]'
  }]
}];

MatStepperIcon.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};

MatStepperIcon.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['matStepperIcon']
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var MatStep = /*#__PURE__*/function (_CdkStep) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatStep, _CdkStep);

  var _super3 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatStep);

  /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
  function MatStep(stepper, _errorStateMatcher, stepperOptions) {
    var _this2;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStep);

    _this2 = _super3.call(this, stepper, stepperOptions);
    _this2._errorStateMatcher = _errorStateMatcher;
    return _this2;
  }
  /** Custom error state matcher that additionally checks for validity of interacted form. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MatStep, [{
    key: "isErrorState",
    value: function isErrorState(control, form) {
      var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
      // since user can trigger a form change by calling for another step without directly
      // interacting with the current form.


      var customErrorState = !!(control && control.invalid && this.interacted);
      return originalErrorState || customErrorState;
    }
  }]);

  return MatStep;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStep"]);

MatStep.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
  args: [{
    selector: 'mat-step',
    template: "<ng-template><ng-content></ng-content></ng-template>\n",
    providers: [{
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"],
      useExisting: MatStep
    }, {
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStep"],
      useExisting: MatStep
    }],
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
    exportAs: 'matStep',
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush
  }]
}];

MatStep.ctorParameters = function () {
  return [{
    type: MatStepper,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
        return MatStepper;
      })]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["SkipSelf"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["STEPPER_GLOBAL_OPTIONS"]]
    }]
  }];
};

MatStep.propDecorators = {
  stepLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [MatStepLabel]
  }]
};

var MatStepper = /*#__PURE__*/function (_CdkStepper) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatStepper, _CdkStepper);

  var _super4 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatStepper);

  function MatStepper() {
    var _this3;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStepper);

    _this3 = _super4.apply(this, arguments);
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */

    _this3.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["QueryList"]();
    /** Event emitted when the current step is done transitioning in. */

    _this3.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /** Consumer-specified template-refs to be used to override the header icons. */

    _this3._iconOverrides = {};
    /** Stream of animation `done` events when the body expands/collapses. */

    _this3._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
    return _this3;
  }

  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MatStepper, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this4 = this;

      Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(MatStepper.prototype), "ngAfterContentInit", this).call(this);

      this._icons.forEach(function (_ref) {
        var name = _ref.name,
            templateRef = _ref.templateRef;
        return _this4._iconOverrides[name] = templateRef;
      }); // Mark the component for change detection whenever the content children query changes


      this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this4._stateChanged();
      });

      this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
      // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
      // See https://github.com/angular/angular/issues/24084
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["distinctUntilChanged"])(function (x, y) {
        return x.fromState === y.fromState && x.toState === y.toState;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function (event) {
        if (event.toState === 'current') {
          _this4.animationDone.emit();
        }
      });
    }
  }]);

  return MatStepper;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepper"]);

MatStepper.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: '[matStepper]',
    providers: [{
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepper"],
      useExisting: MatStepper
    }]
  }]
}];
MatStepper.propDecorators = {
  _stepHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChildren"],
    args: [MatStepHeader]
  }],
  _steps: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [MatStep, {
      descendants: true
    }]
  }],
  _icons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [MatStepperIcon, {
      descendants: true
    }]
  }],
  animationDone: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  disableRipple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};

var MatHorizontalStepper = /*#__PURE__*/function (_MatStepper) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatHorizontalStepper, _MatStepper);

  var _super5 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatHorizontalStepper);

  function MatHorizontalStepper() {
    var _this5;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatHorizontalStepper);

    _this5 = _super5.apply(this, arguments);
    /** Whether the label should display in bottom or end position. */

    _this5.labelPosition = 'end';
    return _this5;
  }

  return MatHorizontalStepper;
}(MatStepper);

MatHorizontalStepper.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
  args: [{
    selector: 'mat-horizontal-stepper',
    exportAs: 'matHorizontalStepper',
    template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
    inputs: ['selectedIndex'],
    host: {
      'class': 'mat-stepper-horizontal',
      '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
      '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
      'aria-orientation': 'horizontal',
      'role': 'tablist'
    },
    animations: [matStepperAnimations.horizontalStepTransition],
    providers: [{
      provide: MatStepper,
      useExisting: MatHorizontalStepper
    }, {
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepper"],
      useExisting: MatHorizontalStepper
    }],
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
    styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
  }]
}];
MatHorizontalStepper.propDecorators = {
  labelPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};

var MatVerticalStepper = /*#__PURE__*/function (_MatStepper2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatVerticalStepper, _MatStepper2);

  var _super6 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatVerticalStepper);

  function MatVerticalStepper(dir, changeDetectorRef, // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
  elementRef, _document) {
    var _this6;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatVerticalStepper);

    _this6 = _super6.call(this, dir, changeDetectorRef, elementRef, _document);
    _this6._orientation = 'vertical';
    return _this6;
  }

  return MatVerticalStepper;
}(MatStepper);

MatVerticalStepper.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
  args: [{
    selector: 'mat-vertical-stepper',
    exportAs: 'matVerticalStepper',
    template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
    inputs: ['selectedIndex'],
    host: {
      'class': 'mat-stepper-vertical',
      'aria-orientation': 'vertical',
      'role': 'tablist'
    },
    animations: [matStepperAnimations.verticalStepTransition],
    providers: [{
      provide: MatStepper,
      useExisting: MatVerticalStepper
    }, {
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepper"],
      useExisting: MatVerticalStepper
    }],
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
    styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
  }]
}];

MatVerticalStepper.ctorParameters = function () {
  return [{
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
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

/** Button that moves to the next step in a stepper workflow. */


var MatStepperNext = /*#__PURE__*/function (_CdkStepperNext) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatStepperNext, _CdkStepperNext);

  var _super7 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatStepperNext);

  function MatStepperNext() {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStepperNext);

    return _super7.apply(this, arguments);
  }

  return MatStepperNext;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperNext"]);

MatStepperNext.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: 'button[matStepperNext]',
    host: {
      'class': 'mat-stepper-next',
      '[type]': 'type'
    },
    inputs: ['type']
  }]
}];
/** Button that moves to the previous step in a stepper workflow. */

var MatStepperPrevious = /*#__PURE__*/function (_CdkStepperPrevious) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatStepperPrevious, _CdkStepperPrevious);

  var _super8 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatStepperPrevious);

  function MatStepperPrevious() {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStepperPrevious);

    return _super8.apply(this, arguments);
  }

  return MatStepperPrevious;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperPrevious"]);

MatStepperPrevious.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
  args: [{
    selector: 'button[matStepperPrevious]',
    host: {
      'class': 'mat-stepper-previous',
      '[type]': 'type'
    },
    inputs: ['type']
  }]
}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var MatStepperModule = function MatStepperModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatStepperModule);
};

MatStepperModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
  args: [{
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"]],
    exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
    declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
    providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"]]
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

/***/ "q59W":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/stepper.js ***!
  \*******************************************************/
/*! exports provided: CdkStep, CdkStepHeader, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious, MAT_STEPPER_GLOBAL_OPTIONS, STEPPER_GLOBAL_OPTIONS, STEP_STATE, StepperSelectionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStep", function() { return CdkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function() { return CdkStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function() { return CdkStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepper", function() { return CdkStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function() { return CdkStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function() { return CdkStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function() { return CdkStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function() { return MAT_STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function() { return STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_STATE", function() { return STEP_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function() { return StepperSelectionEvent; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var CdkStepHeader = /*#__PURE__*/function () {
  function CdkStepHeader(_elementRef) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkStepHeader);

    this._elementRef = _elementRef;
  }
  /** Focuses the step header. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkStepHeader, [{
    key: "focus",
    value: function focus() {
      this._elementRef.nativeElement.focus();
    }
  }]);

  return CdkStepHeader;
}();

CdkStepHeader.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
  args: [{
    selector: '[cdkStepHeader]',
    host: {
      'role': 'tab'
    }
  }]
}];

CdkStepHeader.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var CdkStepLabel = function CdkStepLabel(
/** @docs-private */
template) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkStepLabel);

  this.template = template;
};

CdkStepLabel.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
  args: [{
    selector: '[cdkStepLabel]'
  }]
}];

CdkStepLabel.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["TemplateRef"]
  }];
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID for each stepper component. */


var nextId = 0;
/** Change event emitted on selection changes. */

var StepperSelectionEvent = function StepperSelectionEvent() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StepperSelectionEvent);
};
/** Enum to represent the different states of the steps. */


var STEP_STATE = {
  NUMBER: 'number',
  EDIT: 'edit',
  DONE: 'done',
  ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */

var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
 * @breaking-change 8.0.0.
 */

var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;

var CdkStep = /*#__PURE__*/function () {
  /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
  function CdkStep(_stepper, stepperOptions) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkStep);

    this._stepper = _stepper;
    /** Whether user has seen the expanded step content or not. */

    this.interacted = false;
    this._editable = true;
    this._optional = false;
    this._completedOverride = null;
    this._customError = null;
    this._stepperOptions = stepperOptions ? stepperOptions : {};
    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
    this._showError = !!this._stepperOptions.showError;
  }
  /** Whether the user can return to this step once it has been marked as completed. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkStep, [{
    key: "editable",
    get: function get() {
      return this._editable;
    },
    set: function set(value) {
      this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /** Whether the completion of step is optional. */

  }, {
    key: "optional",
    get: function get() {
      return this._optional;
    },
    set: function set(value) {
      this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /** Whether step is marked as completed. */

  }, {
    key: "completed",
    get: function get() {
      return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
    },
    set: function set(value) {
      this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "_getDefaultCompleted",
    value: function _getDefaultCompleted() {
      return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /** Whether step has an error. */

  }, {
    key: "hasError",
    get: function get() {
      return this._customError == null ? this._getDefaultError() : this._customError;
    },
    set: function set(value) {
      this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "_getDefaultError",
    value: function _getDefaultError() {
      return this.stepControl && this.stepControl.invalid && this.interacted;
    }
    /** Selects this step component. */

  }, {
    key: "select",
    value: function select() {
      this._stepper.selected = this;
    }
    /** Resets the step to its initial state. Note that this includes resetting form data. */

  }, {
    key: "reset",
    value: function reset() {
      this.interacted = false;

      if (this._completedOverride != null) {
        this._completedOverride = false;
      }

      if (this._customError != null) {
        this._customError = false;
      }

      if (this.stepControl) {
        this.stepControl.reset();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      // Since basically all inputs of the MatStep get proxied through the view down to the
      // underlying MatStepHeader, we have to make sure that change detection runs correctly.
      this._stepper._stateChanged();
    }
  }]);

  return CdkStep;
}();

CdkStep.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
  args: [{
    selector: 'cdk-step',
    exportAs: 'cdkStep',
    template: '<ng-template><ng-content></ng-content></ng-template>',
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush
  }]
}];

CdkStep.ctorParameters = function () {
  return [{
    type: CdkStepper,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
        return CdkStepper;
      })]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [STEPPER_GLOBAL_OPTIONS]
    }]
  }];
};

CdkStep.propDecorators = {
  stepLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [CdkStepLabel]
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["TemplateRef"], {
      static: true
    }]
  }],
  stepControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  errorMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['aria-labelledby']
  }],
  state: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  editable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  optional: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  completed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  hasError: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};

var CdkStepper = /*#__PURE__*/function () {
  function CdkStepper(_dir, _changeDetectorRef, // @breaking-change 8.0.0 `_elementRef` and `_document` parameters to become required.
  _elementRef, _document) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkStepper);

    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */

    this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["QueryList"]();
    this._linear = false;
    this._selectedIndex = 0;
    /** Event emitted when the selected step has changed. */

    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this._orientation = 'horizontal';
    this._groupId = nextId++;
    this._document = _document;
  }
  /** Whether the validity of previous steps should be checked or not. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkStepper, [{
    key: "linear",
    get: function get() {
      return this._linear;
    },
    set: function set(value) {
      this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /** The index of the selected step. */

  }, {
    key: "selectedIndex",
    get: function get() {
      return this._selectedIndex;
    },
    set: function set(index) {
      var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(index);

      if (this.steps && this._steps) {
        // Ensure that the index can't be out of bounds.
        if ((newIndex < 0 || newIndex > this.steps.length - 1) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
        }

        if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
          this._updateSelectedItemIndex(index);
        }
      } else {
        this._selectedIndex = newIndex;
      }
    }
    /** The step that is selected. */

  }, {
    key: "selected",
    get: function get() {
      // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
      return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
    },
    set: function set(step) {
      this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this = this;

      this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this._steps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._destroyed)).subscribe(function (steps) {
        _this.steps.reset(steps.filter(function (step) {
          return step._stepper === _this;
        }));

        _this.steps.notifyOnChanges();
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      // Note that while the step headers are content children by default, any components that
      // extend this one might have them as view children. We initialize the keyboard handling in
      // AfterViewInit so we're guaranteed for both view and content children to be defined.
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusKeyManager"](this._stepHeader).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
      (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._destroyed)).subscribe(function (direction) {
        return _this2._keyManager.withHorizontalOrientation(direction);
      });

      this._keyManager.updateActiveItem(this._selectedIndex); // No need to `takeUntil` here, because we're the ones destroying `steps`.


      this.steps.changes.subscribe(function () {
        if (!_this2.selected) {
          _this2._selectedIndex = Math.max(_this2._selectedIndex - 1, 0);
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.steps.destroy();

      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Selects and focuses the next step in list. */

  }, {
    key: "next",
    value: function next() {
      this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    }
    /** Selects and focuses the previous step in list. */

  }, {
    key: "previous",
    value: function previous() {
      this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    }
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */

  }, {
    key: "reset",
    value: function reset() {
      this._updateSelectedItemIndex(0);

      this.steps.forEach(function (step) {
        return step.reset();
      });

      this._stateChanged();
    }
    /** Returns a unique id for each step label element. */

  }, {
    key: "_getStepLabelId",
    value: function _getStepLabelId(i) {
      return "cdk-step-label-".concat(this._groupId, "-").concat(i);
    }
    /** Returns unique id for each step content element. */

  }, {
    key: "_getStepContentId",
    value: function _getStepContentId(i) {
      return "cdk-step-content-".concat(this._groupId, "-").concat(i);
    }
    /** Marks the component to be change detected. */

  }, {
    key: "_stateChanged",
    value: function _stateChanged() {
      this._changeDetectorRef.markForCheck();
    }
    /** Returns position state of the step with the given index. */

  }, {
    key: "_getAnimationDirection",
    value: function _getAnimationDirection(index) {
      var position = index - this._selectedIndex;

      if (position < 0) {
        return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
      } else if (position > 0) {
        return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
      }

      return 'current';
    }
    /** Returns the type of icon to be displayed. */

  }, {
    key: "_getIndicatorType",
    value: function _getIndicatorType(index) {
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;
      var step = this.steps.toArray()[index];

      var isCurrentStep = this._isCurrentStep(index);

      return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
    }
  }, {
    key: "_getDefaultIndicatorLogic",
    value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
      if (step._showError && step.hasError && !isCurrentStep) {
        return STEP_STATE.ERROR;
      } else if (!step.completed || isCurrentStep) {
        return STEP_STATE.NUMBER;
      } else {
        return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
      }
    }
  }, {
    key: "_getGuidelineLogic",
    value: function _getGuidelineLogic(step, isCurrentStep) {
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

      if (step._showError && step.hasError && !isCurrentStep) {
        return STEP_STATE.ERROR;
      } else if (step.completed && !isCurrentStep) {
        return STEP_STATE.DONE;
      } else if (step.completed && isCurrentStep) {
        return state;
      } else if (step.editable && isCurrentStep) {
        return STEP_STATE.EDIT;
      } else {
        return state;
      }
    }
  }, {
    key: "_isCurrentStep",
    value: function _isCurrentStep(index) {
      return this._selectedIndex === index;
    }
    /** Returns the index of the currently-focused step header. */

  }, {
    key: "_getFocusIndex",
    value: function _getFocusIndex() {
      return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    }
  }, {
    key: "_updateSelectedItemIndex",
    value: function _updateSelectedItemIndex(newIndex) {
      var stepsArray = this.steps.toArray();
      this.selectionChange.emit({
        selectedIndex: newIndex,
        previouslySelectedIndex: this._selectedIndex,
        selectedStep: stepsArray[newIndex],
        previouslySelectedStep: stepsArray[this._selectedIndex]
      }); // If focus is inside the stepper, move it to the next header, otherwise it may become
      // lost when the active step content is hidden. We can't be more granular with the check
      // (e.g. checking whether focus is inside the active step), because we don't have a
      // reference to the elements that are rendering out the content.

      this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
      this._selectedIndex = newIndex;

      this._stateChanged();
    }
  }, {
    key: "_onKeydown",
    value: function _onKeydown(event) {
      var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event);
      var keyCode = event.keyCode;
      var manager = this._keyManager;

      if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"])) {
        this.selectedIndex = manager.activeItemIndex;
        event.preventDefault();
      } else {
        manager.onKeydown(event);
      }
    }
  }, {
    key: "_anyControlsInvalidOrPending",
    value: function _anyControlsInvalidOrPending(index) {
      var steps = this.steps.toArray();
      steps[this._selectedIndex].interacted = true;

      if (this._linear && index >= 0) {
        return steps.slice(0, index).some(function (step) {
          var control = step.stepControl;
          var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
          return isIncomplete && !step.optional && !step._completedOverride;
        });
      }

      return false;
    }
  }, {
    key: "_layoutDirection",
    value: function _layoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Checks whether the stepper contains the focused element. */

  }, {
    key: "_containsFocus",
    value: function _containsFocus() {
      if (!this._document || !this._elementRef) {
        return false;
      }

      var stepperElement = this._elementRef.nativeElement;
      var focusedElement = this._document.activeElement;
      return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    }
  }]);

  return CdkStepper;
}();

CdkStepper.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
  args: [{
    selector: '[cdkStepper]',
    exportAs: 'cdkStepper'
  }]
}];

CdkStepper.ctorParameters = function () {
  return [{
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
    }]
  }];
};

CdkStepper.propDecorators = {
  _steps: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [CdkStep, {
      descendants: true
    }]
  }],
  _stepHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [CdkStepHeader, {
      descendants: true
    }]
  }],
  linear: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  selectedIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  selectionChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Button that moves to the next step in a stepper workflow. */

var CdkStepperNext = /*#__PURE__*/function () {
  function CdkStepperNext(_stepper) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkStepperNext);

    this._stepper = _stepper;
    /** Type of the next button. Defaults to "submit" if not specified. */

    this.type = 'submit';
  } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkStepperNext, [{
    key: "_handleClick",
    value: function _handleClick() {
      this._stepper.next();
    }
  }]);

  return CdkStepperNext;
}();

CdkStepperNext.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
  args: [{
    selector: 'button[cdkStepperNext]',
    host: {
      '[type]': 'type'
    }
  }]
}];

CdkStepperNext.ctorParameters = function () {
  return [{
    type: CdkStepper
  }];
};

CdkStepperNext.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  _handleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['click']
  }]
};
/** Button that moves to the previous step in a stepper workflow. */

var CdkStepperPrevious = /*#__PURE__*/function () {
  function CdkStepperPrevious(_stepper) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkStepperPrevious);

    this._stepper = _stepper;
    /** Type of the previous button. Defaults to "button" if not specified. */

    this.type = 'button';
  } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkStepperPrevious, [{
    key: "_handleClick",
    value: function _handleClick() {
      this._stepper.previous();
    }
  }]);

  return CdkStepperPrevious;
}();

CdkStepperPrevious.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
  args: [{
    selector: 'button[cdkStepperPrevious]',
    host: {
      '[type]': 'type'
    }
  }]
}];

CdkStepperPrevious.ctorParameters = function () {
  return [{
    type: CdkStepper
  }];
};

CdkStepperPrevious.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  _handleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['click']
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var CdkStepperModule = function CdkStepperModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkStepperModule);
};

CdkStepperModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
  args: [{
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"]],
    exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
    declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
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

/***/ "vrAh":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/autocomplete.js ***!
  \*****************************************************************/
/*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, _MatAutocompleteBase, _MatAutocompleteOriginBase, _MatAutocompleteTriggerBase, getMatAutocompleteMissingPanelError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function() { return AUTOCOMPLETE_OPTION_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function() { return AUTOCOMPLETE_PANEL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function() { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function() { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function() { return MAT_AUTOCOMPLETE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function() { return MatAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function() { return MatAutocompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function() { return MatAutocompleteOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function() { return MatAutocompleteSelectedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function() { return MatAutocompleteTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatAutocompleteBase", function() { return _MatAutocompleteBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatAutocompleteOriginBase", function() { return _MatAutocompleteOriginBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatAutocompleteTriggerBase", function() { return _MatAutocompleteTriggerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function() { return getMatAutocompleteMissingPanelError; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */

var _uniqueAutocompleteIdCounter = 0;
/** Event object that is emitted when an autocomplete option is selected. */

var MatAutocompleteSelectedEvent = function MatAutocompleteSelectedEvent(
/** Reference to the autocomplete panel that emitted the event. */
source,
/** Option that was selected. */
option) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteSelectedEvent);

  this.source = source;
  this.option = option;
}; // Boilerplate for applying mixins to MatAutocomplete.

/** @docs-private */


var MatAutocompleteBase = function MatAutocompleteBase() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteBase);
};

var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisableRipple"])(MatAutocompleteBase);
/** Injection token to be used to override the default options for `mat-autocomplete`. */


var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('mat-autocomplete-default-options', {
  providedIn: 'root',
  factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false
  };
}
/** Base class with all of the `MatAutocomplete` functionality. */


var _MatAutocompleteBase = /*#__PURE__*/function (_MatAutocompleteMixin) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(_MatAutocompleteBase, _MatAutocompleteMixin);

  var _super = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(_MatAutocompleteBase);

  function _MatAutocompleteBase(_changeDetectorRef, _elementRef, defaults) {
    var _this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _MatAutocompleteBase);

    _this = _super.call(this);
    _this._changeDetectorRef = _changeDetectorRef;
    _this._elementRef = _elementRef;
    _this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    /** Whether the autocomplete panel should be visible, depending on option length. */

    _this.showPanel = false;
    _this._isOpen = false;
    /** Function that maps an option's control value to its display value in the trigger. */

    _this.displayWith = null;
    /** Event that is emitted whenever an option from the list is selected. */

    _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /** Event that is emitted when the autocomplete panel is opened. */

    _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /** Event that is emitted when the autocomplete panel is closed. */

    _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /** Emits whenever an option is activated using the keyboard. */

    _this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    _this._classList = {};
    /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */

    _this.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
    _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
    return _this;
  }
  /** Whether the autocomplete panel is open. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatAutocompleteBase, [{
    key: "isOpen",
    get: function get() {
      return this._isOpen && this.showPanel;
    }
    /**
     * Whether the first option should be highlighted when the autocomplete panel is opened.
     * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
     */

  }, {
    key: "autoActiveFirstOption",
    get: function get() {
      return this._autoActiveFirstOption;
    },
    set: function set(value) {
      this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
    /**
     * Takes classes set on the host mat-autocomplete element and applies them to the panel
     * inside the overlay container to allow for easy styling.
     */

  }, {
    key: "classList",
    set: function set(value) {
      if (value && value.length) {
        this._classList = value.split(' ').reduce(function (classList, className) {
          classList[className.trim()] = true;
          return classList;
        }, {});
      } else {
        this._classList = {};
      }

      this._setVisibilityClasses(this._classList);

      this._elementRef.nativeElement.className = '';
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this2 = this;

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["ActiveDescendantKeyManager"](this.options).withWrap();
      this._activeOptionChanges = this._keyManager.change.subscribe(function (index) {
        _this2.optionActivated.emit({
          source: _this2,
          option: _this2.options.toArray()[index] || null
        });
      }); // Set the initial visibility state.

      this._setVisibility();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._activeOptionChanges.unsubscribe();
    }
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */

  }, {
    key: "_setScrollTop",
    value: function _setScrollTop(scrollTop) {
      if (this.panel) {
        this.panel.nativeElement.scrollTop = scrollTop;
      }
    }
    /** Returns the panel's scrollTop. */

  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this.panel ? this.panel.nativeElement.scrollTop : 0;
    }
    /** Panel should hide itself when the option list is empty. */

  }, {
    key: "_setVisibility",
    value: function _setVisibility() {
      this.showPanel = !!this.options.length;

      this._setVisibilityClasses(this._classList);

      this._changeDetectorRef.markForCheck();
    }
    /** Emits the `select` event. */

  }, {
    key: "_emitSelectEvent",
    value: function _emitSelectEvent(option) {
      var event = new MatAutocompleteSelectedEvent(this, option);
      this.optionSelected.emit(event);
    }
    /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */

  }, {
    key: "_setVisibilityClasses",
    value: function _setVisibilityClasses(classList) {
      classList[this._visibleClass] = this.showPanel;
      classList[this._hiddenClass] = !this.showPanel;
    }
  }]);

  return _MatAutocompleteBase;
}(_MatAutocompleteMixinBase);

_MatAutocompleteBase.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
}];

_MatAutocompleteBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
    }]
  }];
};

_MatAutocompleteBase.propDecorators = {
  template: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["TemplateRef"], {
      static: true
    }]
  }],
  panel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['panel']
  }],
  displayWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  autoActiveFirstOption: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  panelWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  optionSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  opened: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  closed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  optionActivated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  classList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['class']
  }]
};

var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteBase2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatAutocomplete, _MatAutocompleteBase2);

  var _super2 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatAutocomplete);

  function MatAutocomplete() {
    var _this3;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocomplete);

    _this3 = _super2.apply(this, arguments);
    _this3._visibleClass = 'mat-autocomplete-visible';
    _this3._hiddenClass = 'mat-autocomplete-hidden';
    return _this3;
  }

  return MatAutocomplete;
}(_MatAutocompleteBase);

MatAutocomplete.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
  args: [{
    selector: 'mat-autocomplete',
    template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
    exportAs: 'matAutocomplete',
    inputs: ['disableRipple'],
    host: {
      'class': 'mat-autocomplete'
    },
    providers: [{
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTION_PARENT_COMPONENT"],
      useExisting: MatAutocomplete
    }],
    styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
  }]
}];
MatAutocomplete.propDecorators = {
  optionGroups: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTGROUP"], {
      descendants: true
    }]
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], {
      descendants: true
    }]
  }]
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Base class containing all of the functionality for `MatAutocompleteOrigin`. */

var _MatAutocompleteOriginBase = function _MatAutocompleteOriginBase(
/** Reference to the element on which the directive is applied. */
elementRef) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _MatAutocompleteOriginBase);

  this.elementRef = elementRef;
};

_MatAutocompleteOriginBase.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
}];

_MatAutocompleteOriginBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */


var MatAutocompleteOrigin = /*#__PURE__*/function (_MatAutocompleteOrigi) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatAutocompleteOrigin, _MatAutocompleteOrigi);

  var _super3 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatAutocompleteOrigin);

  function MatAutocompleteOrigin() {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteOrigin);

    return _super3.apply(this, arguments);
  }

  return MatAutocompleteOrigin;
}(_MatAutocompleteOriginBase);

MatAutocompleteOrigin.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
  args: [{
    selector: '[matAutocompleteOrigin]',
    exportAs: 'matAutocompleteOrigin'
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
 * The following style constants are necessary to save here in order
 * to properly calculate the scrollTop of the panel. Because we are not
 * actually focusing the active item, scroll must be handled manually.
 */

/**
 * The height of each autocomplete option.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 11.0.0
 */

var AUTOCOMPLETE_OPTION_HEIGHT = 48;
/**
 * The total height of the autocomplete panel.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 11.0.0
 */

var AUTOCOMPLETE_PANEL_HEIGHT = 256;
/** Injection token that determines the scroll handling while the autocomplete panel is open. */

var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('mat-autocomplete-scroll-strategy');
/** @docs-private */

function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition();
  };
}
/** @docs-private */


var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
  useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */

var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MatAutocompleteTrigger;
  }),
  multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @docs-private
 */

function getMatAutocompleteMissingPanelError() {
  return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
}
/** Base class with all of the `MatAutocompleteTrigger` functionality. */


var _MatAutocompleteTriggerBase = /*#__PURE__*/function () {
  function _MatAutocompleteTriggerBase(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
    var _this4 = this;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _MatAutocompleteTriggerBase);

    this._element = _element;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
    this._zone = _zone;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._formField = _formField;
    this._document = _document;
    this._viewportRuler = _viewportRuler;
    this._componentDestroyed = false;
    this._autocompleteDisabled = false;
    /** Whether or not the label state is being overridden. */

    this._manuallyFloatingLabel = false;
    /** Subscription to viewport size changes. */

    this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    /**
     * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
     * closed autocomplete from being reopened if the user switches to another browser tab and then
     * comes back.
     */

    this._canOpenOnNextFocus = true;
    /** Stream of keyboard events that can close the panel. */

    this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /**
     * Event handler for when the window is blurred. Needs to be an
     * arrow function in order to preserve the context.
     */

    this._windowBlurHandler = function () {
      // If the user blurred the window while the autocomplete is focused, it means that it'll be
      // refocused when they come back. In this case we want to skip the first focus event, if the
      // pane was closed, in order to avoid reopening it unintentionally.
      _this4._canOpenOnNextFocus = _this4._document.activeElement !== _this4._element.nativeElement || _this4.panelOpen;
    };
    /** `View -> model callback called when value changes` */


    this._onChange = function () {};
    /** `View -> model callback called when autocomplete has been touched` */


    this._onTouched = function () {};
    /**
     * Position of the autocomplete panel relative to the trigger element. A position of `auto`
     * will render the panel underneath the trigger if there is enough space for it to fit in
     * the viewport, otherwise the panel will be shown above it. If the position is set to
     * `above` or `below`, the panel will always be shown above or below the trigger. no matter
     * whether it fits completely in the viewport.
     */


    this.position = 'auto';
    /**
     * `autocomplete` attribute to be set on the input element.
     * @docs-private
     */

    this.autocompleteAttribute = 'off';
    this._overlayAttached = false;
    /** Stream of autocomplete option selections. */

    this.optionSelections = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["defer"])(function () {
      if (_this4.autocomplete && _this4.autocomplete.options) {
        return rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"].apply(void 0, Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4.autocomplete.options.map(function (option) {
          return option.onSelectionChange;
        })));
      } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
      // Return a stream that we'll replace with the real one once everything is in place.


      return _this4._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
        return _this4.optionSelections;
      }));
    });
    this._scrollStrategy = scrollStrategy;
  }
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatAutocompleteTriggerBase, [{
    key: "autocompleteDisabled",
    get: function get() {
      return this._autocompleteDisabled;
    },
    set: function set(value) {
      this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this5 = this;

      var window = this._getWindow();

      if (typeof window !== 'undefined') {
        this._zone.runOutsideAngular(function () {
          return window.addEventListener('blur', _this5._windowBlurHandler);
        });
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['position'] && this._positionStrategy) {
        this._setStrategyPositions(this._positionStrategy);

        if (this.panelOpen) {
          this._overlayRef.updatePosition();
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var window = this._getWindow();

      if (typeof window !== 'undefined') {
        window.removeEventListener('blur', this._windowBlurHandler);
      }

      this._viewportSubscription.unsubscribe();

      this._componentDestroyed = true;

      this._destroyPanel();

      this._closeKeyEventStream.complete();
    }
    /** Whether or not the autocomplete panel is open. */

  }, {
    key: "panelOpen",
    get: function get() {
      return this._overlayAttached && this.autocomplete.showPanel;
    }
    /** Opens the autocomplete suggestion panel. */

  }, {
    key: "openPanel",
    value: function openPanel() {
      this._attachOverlay();

      this._floatLabel();
    }
    /** Closes the autocomplete suggestion panel. */

  }, {
    key: "closePanel",
    value: function closePanel() {
      this._resetLabel();

      if (!this._overlayAttached) {
        return;
      }

      if (this.panelOpen) {
        // Only emit if the panel was visible.
        this.autocomplete.closed.emit();
      }

      this.autocomplete._isOpen = this._overlayAttached = false;

      if (this._overlayRef && this._overlayRef.hasAttached()) {
        this._overlayRef.detach();

        this._closingActionsSubscription.unsubscribe();
      } // Note that in some cases this can end up being called after the component is destroyed.
      // Add a check to ensure that we don't try to run change detection on a destroyed view.


      if (!this._componentDestroyed) {
        // We need to trigger change detection manually, because
        // `fromEvent` doesn't seem to do it at the proper time.
        // This ensures that the label is reset when the
        // user clicks outside.
        this._changeDetectorRef.detectChanges();
      }
    }
    /**
     * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
     * within the viewport.
     */

  }, {
    key: "updatePosition",
    value: function updatePosition() {
      if (this._overlayAttached) {
        this._overlayRef.updatePosition();
      }
    }
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */

  }, {
    key: "panelClosingActions",
    get: function get() {
      var _this6 = this;

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function () {
        return _this6._overlayAttached;
      })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function () {
        return _this6._overlayAttached;
      })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])()).pipe( // Normalize the output so we return a consistent type.
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (event) {
        return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionSelectionChange"] ? event : null;
      }));
    }
    /** The currently active option, coerced to MatOption type. */

  }, {
    key: "activeOption",
    get: function get() {
      if (this.autocomplete && this.autocomplete._keyManager) {
        return this.autocomplete._keyManager.activeItem;
      }

      return null;
    }
    /** Stream of clicks outside of the autocomplete panel. */

  }, {
    key: "_getOutsideClickStream",
    value: function _getOutsideClickStream() {
      var _this7 = this;

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this._document, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function (event) {
        // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
        // fall back to check the first element in the path of the click event.
        var clickTarget = _this7._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
        var formField = _this7._formField ? _this7._formField._elementRef.nativeElement : null;
        var customOrigin = _this7.connectedTo ? _this7.connectedTo.elementRef.nativeElement : null;
        return _this7._overlayAttached && clickTarget !== _this7._element.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!_this7._overlayRef && !_this7._overlayRef.overlayElement.contains(clickTarget);
      }));
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      var _this8 = this;

      Promise.resolve(null).then(function () {
        return _this8._setTriggerValue(value);
      });
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._element.nativeElement.disabled = isDisabled;
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
      // in line with other browsers. By default, pressing escape on IE will cause it to revert
      // the input value to the one that it had on focus, however it won't dispatch any events
      // which means that the model value will be out of sync with the view.

      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
        event.preventDefault();
      }

      if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"] && this.panelOpen) {
        this.activeOption._selectViaInteraction();

        this._resetActiveItem();

        event.preventDefault();
      } else if (this.autocomplete) {
        var prevActiveItem = this.autocomplete._keyManager.activeItem;
        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["DOWN_ARROW"];

        if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["TAB"]) {
          this.autocomplete._keyManager.onKeydown(event);
        } else if (isArrowKey && this._canOpen()) {
          this.openPanel();
        }

        if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
          this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        }
      }
    }
  }, {
    key: "_handleInput",
    value: function _handleInput(event) {
      var target = event.target;
      var value = target.value; // Based on `NumberValueAccessor` from forms.

      if (target.type === 'number') {
        value = value == '' ? null : parseFloat(value);
      } // If the input has a placeholder, IE will fire the `input` event on page load,
      // focus and blur, in addition to when the user actually changed the value. To
      // filter out all of the extra events, we save the value on focus and between
      // `input` events, and we check whether it changed.
      // See: https://connect.microsoft.com/IE/feedback/details/885747/


      if (this._previousValue !== value) {
        this._previousValue = value;

        this._onChange(value);

        if (this._canOpen() && this._document.activeElement === event.target) {
          this.openPanel();
        }
      }
    }
  }, {
    key: "_handleFocus",
    value: function _handleFocus() {
      if (!this._canOpenOnNextFocus) {
        this._canOpenOnNextFocus = true;
      } else if (this._canOpen()) {
        this._previousValue = this._element.nativeElement.value;

        this._attachOverlay();

        this._floatLabel(true);
      }
    }
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param shouldAnimate Whether the label should be animated when it is floated.
     */

  }, {
    key: "_floatLabel",
    value: function _floatLabel() {
      var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this._formField && this._formField.floatLabel === 'auto') {
        if (shouldAnimate) {
          this._formField._animateAndLockLabel();
        } else {
          this._formField.floatLabel = 'always';
        }

        this._manuallyFloatingLabel = true;
      }
    }
    /** If the label has been manually elevated, return it to its normal state. */

  }, {
    key: "_resetLabel",
    value: function _resetLabel() {
      if (this._manuallyFloatingLabel) {
        this._formField.floatLabel = 'auto';
        this._manuallyFloatingLabel = false;
      }
    }
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */

  }, {
    key: "_subscribeToClosingActions",
    value: function _subscribeToClosingActions() {
      var _this9 = this;

      var firstStable = this._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1));

      var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])(function () {
        return _this9._positionStrategy.reapplyLastPosition();
      }), // Defer emitting to the stream until the next tick, because changing
      // bindings in here will cause "changed after checked" errors.
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
      // that were created, and flatten it so our stream only emits closing events...
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
        var wasOpen = _this9.panelOpen;

        _this9._resetActiveItem();

        _this9.autocomplete._setVisibility();

        if (_this9.panelOpen) {
          _this9._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
          // event, because we may not have emitted it when the panel was attached. This
          // can happen if the users opens the panel and there are no options, but the
          // options come in slightly later or as a result of the value changing.


          if (wasOpen !== _this9.panelOpen) {
            _this9.autocomplete.opened.emit();
          }
        }

        return _this9.panelClosingActions;
      }), // when the first closing event occurs...
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)) // set the value, close the panel, and complete.
      .subscribe(function (event) {
        return _this9._setValueAndClose(event);
      });
    }
    /** Destroys the autocomplete suggestion panel. */

  }, {
    key: "_destroyPanel",
    value: function _destroyPanel() {
      if (this._overlayRef) {
        this.closePanel();

        this._overlayRef.dispose();

        this._overlayRef = null;
      }
    }
  }, {
    key: "_setTriggerValue",
    value: function _setTriggerValue(value) {
      var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
      // The display value can also be the number zero and shouldn't fall back to an empty string.

      var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
      // through change detection.

      if (this._formField) {
        this._formField._control.value = inputValue;
      } else {
        this._element.nativeElement.value = inputValue;
      }

      this._previousValue = inputValue;
    }
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */

  }, {
    key: "_setValueAndClose",
    value: function _setValueAndClose(event) {
      if (event && event.source) {
        this._clearPreviousSelectedOption(event.source);

        this._setTriggerValue(event.source.value);

        this._onChange(event.source.value);

        this._element.nativeElement.focus();

        this.autocomplete._emitSelectEvent(event.source);
      }

      this.closePanel();
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */

  }, {
    key: "_clearPreviousSelectedOption",
    value: function _clearPreviousSelectedOption(skip) {
      this.autocomplete.options.forEach(function (option) {
        if (option !== skip && option.selected) {
          option.deselect();
        }
      });
    }
  }, {
    key: "_attachOverlay",
    value: function _attachOverlay() {
      var _this10 = this;

      if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatAutocompleteMissingPanelError();
      } // We want to resolve this once, as late as possible so that we can be
      // sure that the element has been moved into its final place in the DOM.


      if (this._isInsideShadowRoot == null) {
        this._isInsideShadowRoot = !!Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["_getShadowRoot"])(this._element.nativeElement);
      }

      var overlayRef = this._overlayRef;

      if (!overlayRef) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
        overlayRef = this._overlay.create(this._getOverlayConfig());
        this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
        // the overlay event targeting provided by the CDK overlay.

        overlayRef.keydownEvents().subscribe(function (event) {
          // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
          // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
          if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event) || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["UP_ARROW"] && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event, 'altKey')) {
            _this10._resetActiveItem();

            _this10._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
            // reach the input itself and cause the overlay to be reopened.


            event.stopPropagation();
            event.preventDefault();
          }
        });
        this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
          if (_this10.panelOpen && overlayRef) {
            overlayRef.updateSize({
              width: _this10._getPanelWidth()
            });
          }
        });
      } else {
        // Update the trigger, panel width and direction, in case anything has changed.
        this._positionStrategy.setOrigin(this._getConnectedElement());

        overlayRef.updateSize({
          width: this._getPanelWidth()
        });
      }

      if (overlayRef && !overlayRef.hasAttached()) {
        overlayRef.attach(this._portal);
        this._closingActionsSubscription = this._subscribeToClosingActions();
      }

      var wasOpen = this.panelOpen;

      this.autocomplete._setVisibility();

      this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
      // autocomplete won't be shown if there are no options.

      if (this.panelOpen && wasOpen !== this.panelOpen) {
        this.autocomplete.opened.emit();
      }
    }
  }, {
    key: "_getOverlayConfig",
    value: function _getOverlayConfig() {
      return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
        positionStrategy: this._getOverlayPosition(),
        scrollStrategy: this._scrollStrategy(),
        width: this._getPanelWidth(),
        direction: this._dir
      });
    }
  }, {
    key: "_getOverlayPosition",
    value: function _getOverlayPosition() {
      var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

      this._setStrategyPositions(strategy);

      this._positionStrategy = strategy;
      return strategy;
    }
    /** Sets the positions on a position strategy based on the directive's input state. */

  }, {
    key: "_setStrategyPositions",
    value: function _setStrategyPositions(positionStrategy) {
      // Note that we provide horizontal fallback positions, even though by default the dropdown
      // width matches the input, because consumers can override the width. See #18854.
      var belowPositions = [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]; // The overlay edge connected to the trigger should have squared corners, while
      // the opposite end has rounded corners. We apply a CSS class to swap the
      // border-radius based on the overlay position.

      var panelClass = this._aboveClass;
      var abovePositions = [{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
        panelClass: panelClass
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
        panelClass: panelClass
      }];
      var positions;

      if (this.position === 'above') {
        positions = abovePositions;
      } else if (this.position === 'below') {
        positions = belowPositions;
      } else {
        positions = [].concat(belowPositions, abovePositions);
      }

      positionStrategy.withPositions(positions);
    }
  }, {
    key: "_getConnectedElement",
    value: function _getConnectedElement() {
      if (this.connectedTo) {
        return this.connectedTo.elementRef;
      }

      return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
    }
  }, {
    key: "_getPanelWidth",
    value: function _getPanelWidth() {
      return this.autocomplete.panelWidth || this._getHostWidth();
    }
    /** Returns the width of the input element, so the panel width can match it. */

  }, {
    key: "_getHostWidth",
    value: function _getHostWidth() {
      return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     */

  }, {
    key: "_resetActiveItem",
    value: function _resetActiveItem() {
      this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
    }
    /** Determines whether the panel can be opened. */

  }, {
    key: "_canOpen",
    value: function _canOpen() {
      var element = this._element.nativeElement;
      return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */

  }, {
    key: "_getWindow",
    value: function _getWindow() {
      var _a;

      return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
    }
    /** Scrolls to a particular option in the list. */

  }, {
    key: "_scrollToOption",
    value: function _scrollToOption(index) {
      // Given that we are not actually focusing active options, we must manually adjust scroll
      // to reveal options below the fold. First, we find the offset of the option from the top
      // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
      // the panel height + the option height, so the active option will be just visible at the
      // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
      // will become the offset. If that offset is visible within the panel already, the scrollTop is
      // not adjusted.
      var autocomplete = this.autocomplete;

      var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["_countGroupLabelsBeforeOption"])(index, autocomplete.options, autocomplete.optionGroups);

      if (index === 0 && labelCount === 1) {
        // If we've got one group label before the option and we're at the top option,
        // scroll the list to the top. This is better UX than scrolling the list to the
        // top of the option, because it allows the user to read the top group's label.
        autocomplete._setScrollTop(0);
      } else {
        var option = autocomplete.options.toArray()[index];

        if (option) {
          var element = option._getHostElement();

          var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["_getOptionScrollPosition"])(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);

          autocomplete._setScrollTop(newScrollPosition);
        }
      }
    }
  }]);

  return _MatAutocompleteTriggerBase;
}();

_MatAutocompleteTriggerBase.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
}];

_MatAutocompleteTriggerBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"]]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
  }];
};

_MatAutocompleteTriggerBase.propDecorators = {
  autocomplete: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matAutocomplete']
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matAutocompletePosition']
  }],
  connectedTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matAutocompleteConnectedTo']
  }],
  autocompleteAttribute: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['autocomplete']
  }],
  autocompleteDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matAutocompleteDisabled']
  }]
};

var MatAutocompleteTrigger = /*#__PURE__*/function (_MatAutocompleteTrigg) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatAutocompleteTrigger, _MatAutocompleteTrigg);

  var _super4 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatAutocompleteTrigger);

  function MatAutocompleteTrigger() {
    var _this11;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteTrigger);

    _this11 = _super4.apply(this, arguments);
    _this11._aboveClass = 'mat-autocomplete-panel-above';
    return _this11;
  }

  return MatAutocompleteTrigger;
}(_MatAutocompleteTriggerBase);

MatAutocompleteTrigger.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
  args: [{
    selector: "input[matAutocomplete], textarea[matAutocomplete]",
    host: {
      'class': 'mat-autocomplete-trigger',
      '[attr.autocomplete]': 'autocompleteAttribute',
      '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
      '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
      '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
      '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
      '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
      '[attr.aria-haspopup]': '!autocompleteDisabled',
      // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
      // a little earlier. This avoids issues where IE delays the focusing of the input.
      '(focusin)': '_handleFocus()',
      '(blur)': '_onTouched()',
      '(input)': '_handleInput($event)',
      '(keydown)': '_handleKeydown($event)'
    },
    exportAs: 'matAutocompleteTrigger',
    providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
  }]
}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var MatAutocompleteModule = function MatAutocompleteModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteModule);
};

MatAutocompleteModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
  args: [{
    imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
    exports: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]],
    declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
    providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
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
//# sourceMappingURL=default~paginas-aerc-solicitudes-admin-aerc-admin-aprobador-admin-aprobador-module-ngfactory~paginas~a78ee3b4.js.map