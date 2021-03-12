/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_landing"]("main",{

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n  var isMenuOpened = false;\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n    var isMenuBtnPressed = target.closest('.menu');\n    var isCloseBtnPressed = target.classList.contains('close-btn');\n    var isMenuActive = menu.classList;\n    console.log('target: ', target);\n    console.log('isMenuActive: ', isMenuActive.toString()); // const isMenuItemPressed = target.closest('menu');\n\n    if (isMenuBtnPressed && !isMenuOpened) {\n      menu.classList.toggle('active-menu');\n      isMenuOpened = true;\n    } else if (isCloseBtnPressed) {\n      menu.classList.toggle('active-menu');\n      isMenuOpened = false;\n    } else if (target.tagName.toLowerCase() === 'a') {\n      menu.classList.toggle('active-menu');\n      isMenuOpened = false;\n    } else if (target.closest('menu') === null && isMenuActive === 'active-menu') {\n      menu.classList.toggle('active-menu');\n      isMenuOpened = false;\n    }\n    /*\n    else if (isMenuItemPressed && isMenuOpened) {\n      menu.classList.toggle('active-menu');\n      isMenuOpened = false;\n    } else if (!isCloseBtnPressed && !isMenuItemPressed && isMenuOpened) {\n      menu.classList.toggle('active-menu');\n      isMenuOpened = false;\n    }\n    */\n\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://glo-landing/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("703cb15d6222c3398cf4")
/******/ 	})();
/******/ 	
/******/ }
);