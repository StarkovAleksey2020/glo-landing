/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_landing"]("main",{

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n  var calcTypeIndex;\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value / 10,\n        squareValue = +calcSquare.value;\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value >= 5 && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (typeValue && squareValue) {\n      total = typeValue * squareValue * price * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n\n    var showTotal = function showTotal(value) {\n      if (value < 10000) {\n        var _loop = function _loop(index) {\n          setTimeout(function () {\n            return totalValue.textContent = index;\n          }, 30);\n        };\n\n        for (var index = 0; index <= total; index++) {\n          _loop(index);\n        }\n      } else {\n        totalValue.textContent = value;\n      }\n    };\n\n    setTimeout(showTotal(total), 500);\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://glo-landing/./src/modules/calc.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0ca9e94e88749b0357e1")
/******/ 	})();
/******/ 	
/******/ }
);