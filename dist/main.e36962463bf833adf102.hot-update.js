/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_landing"]("main",{

/***/ "./src/modules/blurHandler.js":
/*!************************************!*\
  !*** ./src/modules/blurHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar blurHandler = function blurHandler() {\n  var form = document.getElementById('form2');\n  var formInputs = form.querySelectorAll('input');\n  form.addEventListener('blur', function (e) {\n    validateFormFields('form2-name');\n    validateEmail();\n    validatePhone('form2-phone');\n    formInputs.forEach(function (item) {\n      return formHandler(item);\n    });\n  }, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blurHandler);\n\n//# sourceURL=webpack://glo-landing/./src/modules/blurHandler.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("08dcf000b10a038f3ac0")
/******/ 	})();
/******/ 	
/******/ }
);