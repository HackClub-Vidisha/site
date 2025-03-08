/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_async_to_generator.js":
/*!**************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_async_to_generator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _asyncToGenerator;\n    }\n}));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2tjbHVidmlkaXNoYS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19hc3luY190b19nZW5lcmF0b3IuanM/MGUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_async_to_generator.js\n");

/***/ }),

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2NsdWJ2aWRpc2hhLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzPzliN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2NsdWJ2aWRpc2hhLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzPzY2ZWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./components/color-switcher.js":
/*!**************************************!*\
  !*** ./components/color-switcher.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ColorSwitcher = (props)=>{\n    const [mode, setMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n        onClick: ()=>setMode(mode === \"dark\" ? \"light\" : \"dark\"),\n        title: `Switch to ${mode === \"dark\" ? \"light\" : \"dark\"} mode`,\n        sx: {\n            position: \"absolute\",\n            top: [\n                2,\n                3\n            ],\n            right: [\n                2,\n                3\n            ],\n            color: \"primary\",\n            cursor: \"pointer\",\n            borderRadius: \"circle\",\n            transition: \"box-shadow .125s ease-in-out\",\n            \":hover,:focus\": {\n                boxShadow: \"0 0 0 3px\",\n                outline: \"none\"\n            }\n        },\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            viewBox: \"0 0 32 32\",\n            width: 24,\n            height: 24,\n            fill: \"currentcolor\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                    cx: 16,\n                    cy: 16,\n                    r: 14,\n                    fill: \"none\",\n                    stroke: \"currentcolor\",\n                    strokeWidth: 4\n                }, void 0, false, {\n                    fileName: \"/home/arjav/Documents/Projects/hackclubvidisha/components/color-switcher.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M 16 0 A 16 16 0 0 0 16 32 z\"\n                }, void 0, false, {\n                    fileName: \"/home/arjav/Documents/Projects/hackclubvidisha/components/color-switcher.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arjav/Documents/Projects/hackclubvidisha/components/color-switcher.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/arjav/Documents/Projects/hackclubvidisha/components/color-switcher.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSwitcher);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbG9yLXN3aXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFFbkQsTUFBTUUsZ0JBQWdCLENBQUNDLFFBQVU7SUFDL0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLHNEQUFZQTtJQUNwQyxxQkFDRSw4REFBQ0QsZ0RBQVVBO1FBQ1RNLFNBQVMsSUFBTUQsUUFBUUQsU0FBUyxTQUFTLFVBQVUsTUFBTTtRQUN6REcsT0FBTyxDQUFDLFVBQVUsRUFBRUgsU0FBUyxTQUFTLFVBQVUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM3REksSUFBSTtZQUNGQyxVQUFVO1lBQ1ZDLEtBQUs7Z0JBQUM7Z0JBQUc7YUFBRTtZQUNYQyxPQUFPO2dCQUFDO2dCQUFHO2FBQUU7WUFDYkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLGNBQWM7WUFDZEMsWUFBWTtZQUNaLGlCQUFpQjtnQkFDZkMsV0FBVztnQkFDWEMsU0FBUztZQUNYO1FBQ0Y7UUFDQyxHQUFHZCxLQUFLO2tCQUVULDRFQUFDZTtZQUFJQyxTQUFRO1lBQVlDLE9BQU87WUFBSUMsUUFBUTtZQUFJQyxNQUFLOzs4QkFDbkQsOERBQUNDO29CQUNDQyxJQUFJO29CQUNKQyxJQUFJO29CQUNKQyxHQUFHO29CQUNISixNQUFLO29CQUNMSyxRQUFPO29CQUNQQyxhQUFhOzs7Ozs7OEJBRWYsOERBQUNDO29CQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtBQUVBLGlFQUFlNUIsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2tjbHVidmlkaXNoYS8uL2NvbXBvbmVudHMvY29sb3Itc3dpdGNoZXIuanM/ZDQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQnV0dG9uLCB1c2VDb2xvck1vZGUgfSBmcm9tICd0aGVtZS11aSdcblxuY29uc3QgQ29sb3JTd2l0Y2hlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VDb2xvck1vZGUoKVxuICByZXR1cm4gKFxuICAgIDxJY29uQnV0dG9uXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKG1vZGUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxuICAgICAgdGl0bGU9e2BTd2l0Y2ggdG8gJHttb2RlID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnfSBtb2RlYH1cbiAgICAgIHN4PXt7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IFsyLCAzXSxcbiAgICAgICAgcmlnaHQ6IFsyLCAzXSxcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogJ2NpcmNsZScsXG4gICAgICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IC4xMjVzIGVhc2UtaW4tb3V0JyxcbiAgICAgICAgJzpob3Zlciw6Zm9jdXMnOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgM3B4JyxcbiAgICAgICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB3aWR0aD17MjR9IGhlaWdodD17MjR9IGZpbGw9XCJjdXJyZW50Y29sb3JcIj5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGN4PXsxNn1cbiAgICAgICAgICBjeT17MTZ9XG4gICAgICAgICAgcj17MTR9XG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezR9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDE2IDAgQSAxNiAxNiAwIDAgMCAxNiAzMiB6XCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvSWNvbkJ1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvclN3aXRjaGVyXG4iXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZSIsIkNvbG9yU3dpdGNoZXIiLCJwcm9wcyIsIm1vZGUiLCJzZXRNb2RlIiwib25DbGljayIsInRpdGxlIiwic3giLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY29sb3IiLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93Iiwib3V0bGluZSIsInN2ZyIsInZpZXdCb3giLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/color-switcher.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _async_to_generator = (__webpack_require__(/*! @swc/helpers/lib/_async_to_generator.js */ \"./node_modules/@swc/helpers/lib/_async_to_generator.js\")[\"default\"]);\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _async_to_generator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nvar _Component;\nclass App extends (_Component = _react.default.Component) {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App;\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkQsa0JBQWUsR0FBRyxLQUFLO0FBQ3ZCLElBQUlHLHNCQUFzQkMseUlBQTBEO0FBQ3BGLElBQUlDLDJCQUEyQkQsbUpBQStEO0FBQzlGLElBQUlFLFNBQVNELHlCQUF5QkQsbUJBQU9BLENBQUMsb0JBQU87QUFDckQsSUFBSUcsU0FBU0gsbUJBQU9BLENBQUMsZ0RBQXFCO0FBQzFDLFNBQVNJLG1CQUFtQkMsQ0FBQyxFQUFFO0lBQzNCLE9BQU9DLG9CQUFvQkMsS0FBSyxDQUFDLElBQUksRUFBRUM7QUFDM0M7QUFDQSxTQUFTRixzQkFBc0I7SUFDM0JBLHNCQUFzQjs7O0NBR3pCLEdBQUdQLG9CQUFvQixVQUFVLEVBQUVVLFVBQVMsRUFBR0MsSUFBRyxFQUFHLEVBQUU7UUFDaEQsTUFBTUMsWUFBWSxNQUFNLENBQUMsR0FBR1IsTUFBTSxFQUFFUyxtQkFBbUIsQ0FBQ0gsV0FBV0M7UUFDbkUsT0FBTztZQUNIQztRQUNKO0lBQ0o7SUFDQSxPQUFPTCxvQkFBb0JDLEtBQUssQ0FBQyxJQUFJLEVBQUVDO0FBQzNDO0FBQ0EsSUFBSUs7QUFDSixNQUFNQyxZQUFhRCxDQUFBQSxhQUFhWCxPQUFPSixPQUFPLENBQUNXLFNBQVM7SUFDcERNLFNBQVM7UUFDTCxNQUFNLEVBQUVOLFVBQVMsRUFBR0UsVUFBUyxFQUFHLEdBQUcsSUFBSSxDQUFDSyxLQUFLO1FBQzdDLE9BQU8sV0FBVyxHQUFHZCxPQUFPSixPQUFPLENBQUNtQixhQUFhLENBQUNSLFdBQVdmLE9BQU93QixNQUFNLENBQUMsQ0FBQyxHQUFHUDtJQUNuRjtBQUNKO0FBQ0FHLElBQUlLLG1CQUFtQixHQUFHZjtBQUMxQlUsSUFBSU0sZUFBZSxHQUFHaEI7QUFDdEJSLGtCQUFlLEdBQUdrQjtBQUVsQixJQUFJLENBQUMsT0FBT2xCLFFBQVFFLE9BQU8sS0FBSyxjQUFlLE9BQU9GLFFBQVFFLE9BQU8sS0FBSyxZQUFZRixRQUFRRSxPQUFPLEtBQUssSUFBSSxLQUFNLE9BQU9GLFFBQVFFLE9BQU8sQ0FBQ3VCLFVBQVUsS0FBSyxhQUFhO0lBQ3JLM0IsT0FBT0MsY0FBYyxDQUFDQyxRQUFRRSxPQUFPLEVBQUUsY0FBYztRQUFFRCxPQUFPLElBQUk7SUFBQztJQUNuRUgsT0FBT3dCLE1BQU0sQ0FBQ3RCLFFBQVFFLE9BQU8sRUFBRUY7SUFDL0IwQixPQUFPMUIsT0FBTyxHQUFHQSxRQUFRRSxPQUFPO0FBQ2xDLENBQUMsQ0FFRCxnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrY2x1YnZpZGlzaGEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/OTYxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfYXN5bmNfdG9fZ2VuZXJhdG9yID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9saWIvX2FzeW5jX3RvX2dlbmVyYXRvci5qc1wiKS5kZWZhdWx0O1xudmFyIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qc1wiKS5kZWZhdWx0O1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG52YXIgX0NvbXBvbmVudDtcbmNsYXNzIEFwcCBleHRlbmRzIChfQ29tcG9uZW50ID0gX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KSB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwYWdlUHJvcHMpKTtcbiAgICB9XG59XG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9hc3luY190b19nZW5lcmF0b3IiLCJyZXF1aXJlIiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwiX3JlYWN0IiwiX3V0aWxzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJhcHBseSIsImFyZ3VtZW50cyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJfQ29tcG9uZW50IiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIl9fZXNNb2R1bGUiLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hackclub_theme_fonts_reg_bold_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hackclub/theme/fonts/reg-bold.css */ \"./node_modules/@hackclub/theme/fonts/reg-bold.css\");\n/* harmony import */ var _hackclub_theme_fonts_reg_bold_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hackclub_theme_fonts_reg_bold_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hackclub_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hackclub/theme */ \"@hackclub/theme\");\n/* harmony import */ var _hackclub_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hackclub_theme__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_color_switcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/color-switcher */ \"./components/color-switcher.js\");\n\n\n\n\n\n\n\nclass App extends (next_app__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n            theme: (_hackclub_theme__WEBPACK_IMPORTED_MODULE_4___default()),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_color_switcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/arjav/Documents/Projects/hackclubvidisha/pages/_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/arjav/Documents/Projects/hackclubvidisha/pages/_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arjav/Documents/Projects/hackclubvidisha/pages/_app.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDQTtBQUVhO0FBQ1I7QUFDSztBQUNnQjtBQUV6QyxNQUFNSyxZQUFZSixpREFBT0E7SUFDdENLLFNBQVM7UUFDUCxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBQzNDLHFCQUNFLDhEQUFDTixtREFBYUE7WUFBQ0QsT0FBT0Esd0RBQUtBOzs4QkFDekIsOERBQUNFLGtFQUFhQTs7Ozs7OEJBQ2QsOERBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztJQUc5QjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrY2x1YnZpZGlzaGEvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTmV4dEFwcCBmcm9tICduZXh0L2FwcCdcblxuaW1wb3J0ICdAaGFja2NsdWIvdGhlbWUvZm9udHMvcmVnLWJvbGQuY3NzJ1xuaW1wb3J0IHRoZW1lIGZyb20gJ0BoYWNrY2x1Yi90aGVtZSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBDb2xvclN3aXRjaGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29sb3Itc3dpdGNoZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIE5leHRBcHAge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29sb3JTd2l0Y2hlciAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXh0QXBwIiwidGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiQ29sb3JTd2l0Y2hlciIsIkFwcCIsInJlbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@hackclub/theme/fonts/reg-bold.css":
/*!*********************************************************!*\
  !*** ./node_modules/@hackclub/theme/fonts/reg-bold.css ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "@hackclub/theme":
/*!**********************************!*\
  !*** external "@hackclub/theme" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@hackclub/theme");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("theme-ui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();