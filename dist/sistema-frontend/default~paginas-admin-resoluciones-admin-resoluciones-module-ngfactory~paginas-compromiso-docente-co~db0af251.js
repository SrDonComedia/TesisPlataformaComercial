(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~paginas-admin-resoluciones-admin-resoluciones-module-ngfactory~paginas-compromiso-docente-co~db0af251"],{

/***/ "tq8E":
/*!************************************************************!*\
  !*** ./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js ***!
  \************************************************************/
/*! exports provided: NgxDropzoneComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneModule, NgxDropzonePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function() { return NgxDropzoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function() { return NgxDropzoneImagePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function() { return NgxDropzoneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function() { return NgxDropzonePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function() { return NgxDropzoneRemoveBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function() { return NgxDropzoneVideoPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxDropzoneService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxDropzoneLabelDirective; });
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");










var NgxDropzoneLabelDirective = function NgxDropzoneLabelDirective() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgxDropzoneLabelDirective);
};

NgxDropzoneLabelDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
  args: [{
    selector: 'ngx-dropzone-label'
  }]
}];
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 */

function coerceBooleanProperty(value) {
  return value != null && "".concat(value) !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 */


function coerceNumberProperty(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : null;
}

var KEY_CODE;

(function (KEY_CODE) {
  KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
  KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
})(KEY_CODE || (KEY_CODE = {}));

var NgxDropzonePreviewComponent = /*#__PURE__*/function () {
  function NgxDropzonePreviewComponent(sanitizer) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgxDropzonePreviewComponent);

    this.sanitizer = sanitizer;
    this._removable = false;
    /** Emitted when the element should be removed. */

    this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    /** Make the preview item focusable using the tab key. */

    this.tabIndex = 0;
  }
  /** The file to preview. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NgxDropzonePreviewComponent, [{
    key: "file",
    get: function get() {
      return this._file;
    }
    /** Allow the user to remove files. */
    ,
    set: function set(value) {
      this._file = value;
    }
  }, {
    key: "removable",
    get: function get() {
      return this._removable;
    },
    set: function set(value) {
      this._removable = coerceBooleanProperty(value);
    }
  }, {
    key: "keyEvent",
    value: function keyEvent(event) {
      switch (event.keyCode) {
        case KEY_CODE.BACKSPACE:
        case KEY_CODE.DELETE:
          this.remove();
          break;

        default:
          break;
      }
    }
    /** We use the HostBinding to pass these common styles to child components. */

  }, {
    key: "hostStyle",
    get: function get() {
      var styles = "\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t";
      return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /** Remove method to be used from the template. */

  }, {
    key: "_remove",
    value: function _remove(event) {
      event.stopPropagation();
      this.remove();
    }
    /** Remove the preview item (use from component code). */

  }, {
    key: "remove",
    value: function remove() {
      if (this._removable) {
        this.removed.next(this.file);
      }
    }
  }, {
    key: "readFile",
    value: function readFile() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var _this = this;

        return _Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  var reader = new FileReader();

                  reader.onload = function (e) {
                    resolve(e.target.result);
                  };

                  reader.onerror = function (e) {
                    console.error("FileReader failed on file ".concat(_this.file.name, "."));
                    reject(e);
                  };

                  if (!_this.file) {
                    return reject('No file to read. Please provide a file using the [file] Input property.');
                  }

                  reader.readAsDataURL(_this.file);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }]);

  return NgxDropzonePreviewComponent;
}();

NgxDropzonePreviewComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
  args: [{
    selector: 'ngx-dropzone-preview',
    template: "\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n\t\t<ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n\t\t</ngx-dropzone-remove-badge>\n\t",
    styles: [":host{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:focus,:host:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}"]
  }]
}];

NgxDropzonePreviewComponent.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
  }];
};

NgxDropzonePreviewComponent.propDecorators = {
  file: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  removable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  removed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  keyEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['keyup', ['$event']]
  }],
  hostStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
    args: ['style']
  }],
  tabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
    args: ['tabindex']
  }]
};
/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */

var NgxDropzoneService = /*#__PURE__*/function () {
  function NgxDropzoneService() {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgxDropzoneService);
  }

  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NgxDropzoneService, [{
    key: "parseFileList",
    value: function parseFileList(files, accept, maxFileSize, multiple) {
      var addedFiles = [];
      var rejectedFiles = [];

      for (var i = 0; i < files.length; i++) {
        var file = files.item(i);

        if (!this.isAccepted(file, accept)) {
          this.rejectFile(rejectedFiles, file, 'type');
          continue;
        }

        if (maxFileSize && file.size > maxFileSize) {
          this.rejectFile(rejectedFiles, file, 'size');
          continue;
        }

        if (!multiple && addedFiles.length >= 1) {
          this.rejectFile(rejectedFiles, file, 'no_multiple');
          continue;
        }

        addedFiles.push(file);
      }

      var result = {
        addedFiles: addedFiles,
        rejectedFiles: rejectedFiles
      };
      return result;
    }
  }, {
    key: "isAccepted",
    value: function isAccepted(file, accept) {
      if (accept === '*') {
        return true;
      }

      var acceptFiletypes = accept.split(',').map(function (it) {
        return it.toLowerCase().trim();
      });
      var filetype = file.type.toLowerCase();
      var filename = file.name.toLowerCase();
      var matchedFileType = acceptFiletypes.find(function (acceptFiletype) {
        // check for wildcard mimetype (e.g. image/*)
        if (acceptFiletype.endsWith('/*')) {
          return filetype.split('/')[0] === acceptFiletype.split('/')[0];
        } // check for file extension (e.g. .csv)


        if (acceptFiletype.startsWith(".")) {
          return filename.endsWith(acceptFiletype);
        } // check for exact mimetype match (e.g. image/jpeg)


        return acceptFiletype == filetype;
      });
      return !!matchedFileType;
    }
  }, {
    key: "rejectFile",
    value: function rejectFile(rejectedFiles, file, reason) {
      var rejectedFile = file;
      rejectedFile.reason = reason;
      rejectedFiles.push(rejectedFile);
    }
  }]);

  return NgxDropzoneService;
}();

NgxDropzoneService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"]
}];

var NgxDropzoneComponent = /*#__PURE__*/function () {
  function NgxDropzoneComponent(service) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgxDropzoneComponent);

    this.service = service;
    /** Emitted when any files were added or rejected. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    /** Set the accepted file types. Defaults to '*'. */

    this.accept = '*';
    this._disabled = false;
    this._multiple = true;
    this._maxFileSize = undefined;
    this._expandable = false;
    this._disableClick = false;
    this._isHovered = false;
  }

  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NgxDropzoneComponent, [{
    key: "_hasPreviews",
    get: function get() {
      return !!this._previewChildren.length;
    }
    /** Disable any user interaction with the component. */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = coerceBooleanProperty(value);

      if (this._isHovered) {
        this._isHovered = false;
      }
    }
    /** Allow the selection of multiple files. */

  }, {
    key: "multiple",
    get: function get() {
      return this._multiple;
    },
    set: function set(value) {
      this._multiple = coerceBooleanProperty(value);
    }
    /** Set the maximum size a single file may have. */

  }, {
    key: "maxFileSize",
    get: function get() {
      return this._maxFileSize;
    },
    set: function set(value) {
      this._maxFileSize = coerceNumberProperty(value);
    }
    /** Allow the dropzone container to expand vertically. */

  }, {
    key: "expandable",
    get: function get() {
      return this._expandable;
    },
    set: function set(value) {
      this._expandable = coerceBooleanProperty(value);
    }
    /** Open the file selector on click. */

  }, {
    key: "disableClick",
    get: function get() {
      return this._disableClick;
    },
    set: function set(value) {
      this._disableClick = coerceBooleanProperty(value);
    }
    /** Show the native OS file explorer to select files. */

  }, {
    key: "_onClick",
    value: function _onClick() {
      if (!this.disableClick) {
        this.showFileSelector();
      }
    }
  }, {
    key: "_onDragOver",
    value: function _onDragOver(event) {
      if (this.disabled) {
        return;
      }

      this.preventDefault(event);
      this._isHovered = true;
    }
  }, {
    key: "_onDragLeave",
    value: function _onDragLeave() {
      this._isHovered = false;
    }
  }, {
    key: "_onDrop",
    value: function _onDrop(event) {
      if (this.disabled) {
        return;
      }

      this.preventDefault(event);
      this._isHovered = false;
      this.handleFileDrop(event.dataTransfer.files);
    }
  }, {
    key: "showFileSelector",
    value: function showFileSelector() {
      if (!this.disabled) {
        this._fileInput.nativeElement.click();
      }
    }
  }, {
    key: "_onFilesSelected",
    value: function _onFilesSelected(event) {
      var files = event.target.files;
      this.handleFileDrop(files); // Reset the native file input element to allow selecting the same file again

      this._fileInput.nativeElement.value = ''; // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.

      this.preventDefault(event);
    }
  }, {
    key: "handleFileDrop",
    value: function handleFileDrop(files) {
      var result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
      this.change.next({
        addedFiles: result.addedFiles,
        rejectedFiles: result.rejectedFiles,
        source: this
      });
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }]);

  return NgxDropzoneComponent;
}();

NgxDropzoneComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
  args: [{
    selector: 'ngx-dropzone, [ngx-dropzone]',
    template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
    providers: [NgxDropzoneService],
    styles: [":host{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{cursor:no-drop;opacity:.5;pointer-events:none}:host.expandable{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}:host input{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]
  }]
}];

NgxDropzoneComponent.ctorParameters = function () {
  return [{
    type: NgxDropzoneService,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
    }]
  }];
};

NgxDropzoneComponent.propDecorators = {
  _previewChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
    args: [NgxDropzonePreviewComponent, {
      descendants: true
    }]
  }],
  _fileInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: ['fileInput', {
      static: true
    }]
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  accept: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
    args: ['class.ngx-dz-disabled']
  }],
  multiple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  maxFileSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  expandable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
    args: ['class.expandable']
  }],
  disableClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
    args: ['class.unclickable']
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
    args: ['aria-labelledby']
  }],
  ariaDescribedBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
    args: ['aria-describedby']
  }],
  _isHovered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
    args: ['class.ngx-dz-hovered']
  }],
  _onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['click']
  }],
  _onDragOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['dragover', ['$event']]
  }],
  _onDragLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['dragleave']
  }],
  _onDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['drop', ['$event']]
  }]
};

var NgxDropzoneImagePreviewComponent = /*#__PURE__*/function (_NgxDropzonePreviewCo) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(NgxDropzoneImagePreviewComponent, _NgxDropzonePreviewCo);

  var _super = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(NgxDropzoneImagePreviewComponent);

  function NgxDropzoneImagePreviewComponent(sanitizer) {
    var _this2;

    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgxDropzoneImagePreviewComponent);

    _this2 = _super.call(this, sanitizer);
    /** The image data source. */

    _this2.defaultImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
    _this2.imageSrc = _this2.sanitizer.bypassSecurityTrustUrl(_this2.defaultImgLoading);
    return _this2;
  }
  /** The file to preview. */


  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NgxDropzoneImagePreviewComponent, [{
    key: "file",
    get: function get() {
      return this._file;
    },
    set: function set(value) {
      this._file = value;
      this.renderImage();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.renderImage();
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var _this3 = this;

      this.readFile().then(function (img) {
        return setTimeout(function () {
          return _this3.imageSrc = img;
        });
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }]);

  return NgxDropzoneImagePreviewComponent;
}(NgxDropzonePreviewComponent);

NgxDropzoneImagePreviewComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
  args: [{
    selector: 'ngx-dropzone-image-preview',
    template: "\n    <img [src]=\"imageSrc\" />\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
    providers: [{
      provide: NgxDropzonePreviewComponent,
      useExisting: NgxDropzoneImagePreviewComponent
    }],
    styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus img,:host:hover img{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host img{border-radius:5px;max-height:100%;opacity:.8}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
  }]
}];

NgxDropzoneImagePreviewComponent.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
  }];
};

NgxDropzoneImagePreviewComponent.propDecorators = {
  file: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }]
};

var NgxDropzoneRemoveBadgeComponent = function NgxDropzoneRemoveBadgeComponent() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgxDropzoneRemoveBadgeComponent);
};

NgxDropzoneRemoveBadgeComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
  args: [{
    selector: 'ngx-dropzone-remove-badge',
    template: "\n    <svg>\n      <line x1=\"0\" y1=\"0\" x2=\"10\" y2=\"10\" />\n      <line x1=\"0\" y1=\"10\" x2=\"10\" y2=\"0\" />\n    </svg>\n  ",
    styles: [":host{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}:host:hover{background:#aeaeae}:host>svg{height:10px;width:10px}:host>svg>line{stroke:#fff;stroke-width:2px}"]
  }]
}];

var NgxDropzoneVideoPreviewComponent = /*#__PURE__*/function (_NgxDropzonePreviewCo2) {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(NgxDropzoneVideoPreviewComponent, _NgxDropzonePreviewCo2);

  var _super2 = Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(NgxDropzoneVideoPreviewComponent);

  function NgxDropzoneVideoPreviewComponent(sanitizer) {
    Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgxDropzoneVideoPreviewComponent);

    return _super2.call(this, sanitizer);
  }

  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NgxDropzoneVideoPreviewComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.file) {
        console.error('No file to read. Please provide a file using the [file] Input property.');
        return;
      }
      /**
       * We sanitize the URL here to enable the preview.
       * Please note that this could cause security issues!
       **/


      this.videoSrc = URL.createObjectURL(this.file);
      this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      URL.revokeObjectURL(this.videoSrc);
    }
  }]);

  return NgxDropzoneVideoPreviewComponent;
}(NgxDropzonePreviewComponent);

NgxDropzoneVideoPreviewComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
  args: [{
    selector: 'ngx-dropzone-video-preview',
    template: "\n    <video *ngIf=\"sanitizedVideoSrc\" controls (click)=\"$event.stopPropagation()\">\n      <source [src]=\"sanitizedVideoSrc\" />\n    </video>\n    <ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
    providers: [{
      provide: NgxDropzonePreviewComponent,
      useExisting: NgxDropzoneVideoPreviewComponent
    }],
    styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus video,:host:hover video{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host video{border-radius:5px;max-height:100%}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
  }]
}];

NgxDropzoneVideoPreviewComponent.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
  }];
};

var NgxDropzoneModule = function NgxDropzoneModule() {
  Object(_Users_danielnavarrete_Documents_PROYECTOS_Gestion_Academica_finis_resoluciones_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgxDropzoneModule);
};

NgxDropzoneModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
    declarations: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent],
    exports: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]
  }]
}];
/*
 * Public API Surface of ngx-dropzone
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default~paginas-admin-resoluciones-admin-resoluciones-module-ngfactory~paginas-compromiso-docente-co~db0af251.js.map