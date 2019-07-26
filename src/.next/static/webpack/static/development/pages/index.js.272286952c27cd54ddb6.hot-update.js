webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/usuario/actions.js":
/*!**********************************!*\
  !*** ./store/usuario/actions.js ***!
  \**********************************/
/*! exports provided: Types, userRequest, userSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRequest", function() { return userRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSuccess", function() { return userSuccess; });
var Types = {
  userRequest: "user/REQUEST",
  userSuccess: "user/SUCCESS"
};
function userRequest() {
  return {
    type: Types.userRequest,
    payload: {}
  };
}
function userSuccess(data) {
  return {
    type: Types.userSuccess,
    payload: {
      data: data
    }
  };
}

/***/ })

})
//# sourceMappingURL=index.js.272286952c27cd54ddb6.hot-update.js.map