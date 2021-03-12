/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_landing"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm(formName) {\n  var errorMessage = 'Что-то пошло не так ...',\n      loadMessage = 'Загрузка ...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var form = document.getElementById(formName);\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem';\n  statusMessage.style.color = '#FFFFFF';\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    console.log('form: ', form);\n    var inputs = form.querySelectorAll('input');\n    console.log('inputs: ', inputs); //statusMessage.textContent = loadMessage;\n\n    statusMessage.classList.add('loader');\n    var formData = new FormData(form);\n    var body = {};\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var value = _step.value;\n        body[value[0]] = value[1];\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    postData(body, function () {\n      statusMessage.classList.remove('loader');\n      statusMessage.textContent = successMessage;\n      clearForm(formName);\n    }, function (error) {\n      statusMessage.classList.remove('loader');\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n  });\n\n  var clearForm = function clearForm(formName) {\n    var inputElements = document.getElementById(formName).getElementsByTagName('input');\n\n    var _iterator2 = _createForOfIteratorHelper(inputElements),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var item = _step2.value;\n        item.value = '';\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  };\n\n  var postData = function postData(body, outputData, errorData) {\n    var request = new XMLHttpRequest();\n    request.addEventListener('readystatechange', function () {\n      if (request.readyState !== 4) {\n        return;\n      }\n\n      if (request.status === 200) {\n        outputData();\n      } else {\n        errorData(request.status);\n      }\n    });\n    request.open('POST', './server.php');\n    request.setRequestHeader('Content-Type', 'application/json');\n    request.send(JSON.stringify(body));\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://glo-landing/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("bd3e732b9c5122afd74a")
/******/ 	})();
/******/ 	
/******/ }
);