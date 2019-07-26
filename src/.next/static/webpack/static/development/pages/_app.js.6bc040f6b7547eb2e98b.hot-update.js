webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../node_modules/redux-devtools-extension/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/redux-devtools-extension/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
   true && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
   true && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./store/rootReducer.js");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootSaga */ "./store/rootSaga.js");






var bindMiddleware = function bindMiddleware(middleware) {
  if (true) {
    var _require = __webpack_require__(/*! redux-devtools-extension */ "../node_modules/redux-devtools-extension/index.js"),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(middleware)));
  }

  return redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(middleware));
};

function configureStore(initialState) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ })

})
//# sourceMappingURL=_app.js.6bc040f6b7547eb2e98b.hot-update.js.map