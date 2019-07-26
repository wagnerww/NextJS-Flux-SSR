webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/usuario/reducer.js":
/*!**********************************!*\
  !*** ./store/usuario/reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return user; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "../node_modules/immer/dist/immer.module.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/usuario/actions.js");


var INITIAL_VALUES = {
  data: [],
  isLoading: false
};
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUES;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["Types"].userRequest:
      return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
        draft.isLoading = true;
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["Types"].userSuccess:
      console.log("chegou", payload.data);
      return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
        draft.data = payload.data;
        draft.isLoading = false;
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.382cb62c93953d9d56f2.hot-update.js.map