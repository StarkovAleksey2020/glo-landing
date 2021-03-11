/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_landing"]("main",{

/***/ "./src/modules/validateFormFields.js":
/*!*******************************************!*\
  !*** ./src/modules/validateFormFields.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateFormFields = function validateFormFields(nameFieldId) {\n  var customerName = document.getElementById(nameFieldId);\n  var customerMessage = document.getElementById('form2-message');\n  customerName.addEventListener('input', function (e) {\n    var nameInput = e.target.value; //e.target.value = nameInput.replace(/[^А-Яа-яЁё -]/g, '');\n\n    e.target.value = nameInput.replace(/[^А-Яа-яЁё ]/g, '').toUpperCase();\n  });\n  customerMessage.addEventListener('input', function (e) {\n    var messageInput = e.target.value; //e.target.value = messageInput.replace(/[^А-Яа-яЁё -]/g, '');\n\n    e.target.value = messageInput.replace(/[^А-Яа-яЁё 0-9.,\\/#!$%\\^&\\*;:{}=\\-_`~()]/g, '');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateFormFields);\n\n//# sourceURL=webpack://glo-landing/./src/modules/validateFormFields.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("8a3e40c06e03e7342140")
/******/ 	})();
/******/ 	
/******/ }
);