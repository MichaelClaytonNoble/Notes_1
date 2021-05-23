/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song */ \"./src/song.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n\n  (0,_song__WEBPACK_IMPORTED_MODULE_0__.main)();\n  \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/song.js":
/*!*********************!*\
  !*** ./src/song.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n\nconst ctx = document.getElementById(\"canvas\").getContext('2d');\nconst coords = {x: 0, y: 0};\n/**\n * Draws a single square of size 10 X 10 with the given color.\n * @param {string} color A color.\n */\nfunction square(color){\n\n  ctx.fillStyle = color;\n  ctx.fillRect(coords.x, coords.y, coords.x+1, coords.y+10);\n  coords.x+=1;\n}\n\n/**\n * remove the newline and any trailing whitespace from the line\n * after drawing the row, move the cursor to the beginning of the next\n * 'row' on the canvas to be ready to paint the next line of the file \n * if any.\n * \n * @param {string} line - A line of text\n */\nfunction paintLine(line){\n  function color(char){\n    let code = char.charCodeAt();\n    if( code < 70 ) return \"blue\";\n    if( code < 100 ) return \"green\";\n    if( code < 110 ) return \"red\";\n    if( code < 122 ) return \"orange\";\n    return \"yellow\";\n  }\n\n  line.split('').forEach( char=> {\n    square(color(char));\n  });\n  console.log(coords.x);\n}\n\n/**\n * takes the file name, opens the file and draws the picture by \n * calling paintLine() for each line of text in the file.\n * \n * @param {string} file file of the song\n */\nfunction picture(file){\n\n  fetch(`/../data/${file}`)\n  .then( res => res.text())\n  .then( data => {\n    let lines = data.split(\"\\n\");\n    lines = lines.slice(1);\n    lines.forEach( line=>{\n      paintLine(line);\n    });\n  });\n}\n\n/**\n * Prompts the user for a file name and calls the function \n * picture() to do the work. Waits for the user to close the canvas\n * before terminating.\n */\nfunction main(){\n\n  // let fileName = window.prompt(\"Enter filename: \");\n  let fileName = \"s1.txt\";\n\n  picture(fileName);\n}\n\n\n\n//# sourceURL=webpack:///./src/song.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;