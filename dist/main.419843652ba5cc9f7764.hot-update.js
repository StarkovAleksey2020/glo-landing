/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_landing"]("main",{

/***/ "./src/modules/validatePhone.js":
/*!**************************************!*\
  !*** ./src/modules/validatePhone.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validatePhone = function validatePhone(phoneFieldId) {\n  var phone = document.getElementById(phoneFieldId);\n  phone.addEventListener('input', function (e) {\n    var phoneInput = e.target.value; //e.target.value = phoneInput.replace(/[^0-9\\-()]/g, '');\n    //e.target.value = phoneInput.replace(/[^0-9+]/g, '');\n\n    e.target.value = phoneInput.replace(/^\\+?[78][-\\(]?\\d{3}\\)?-?\\d{3}-?\\d{2}-?\\d{2}$/g, '');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validatePhone);\n\n//# sourceURL=webpack://glo-landing/./src/modules/validatePhone.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e1265ad36eebd1f724e0")
/******/ 	})();
/******/ 	
/******/ }
);