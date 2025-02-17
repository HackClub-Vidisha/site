"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/bio.js":
/*!***************************!*\
  !*** ./components/bio.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Bio(param) {\n    let { popup =true , spanTwo =false , ...props } = param;\n    _s();\n    let { bgcolor , img , name , teamRole , pronouns , text , subrole , email , href , video  } = props;\n    const [expand, setExpand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                bg: bgcolor,\n                p: popup ? [\n                    3,\n                    3,\n                    3\n                ] : [\n                    2,\n                    2,\n                    2\n                ],\n                py: popup ? [\n                    3,\n                    3,\n                    3\n                ] : [\n                    4,\n                    4,\n                    4\n                ],\n                sx: {\n                    display: \"flex\",\n                    alignItems: popup ? \"center\" : \"flex-start\",\n                    transition: \"transform 0.125s ease-in-out\",\n                    \"&:hover\": {\n                        transform: \"scale(1.025)\"\n                    },\n                    cursor: text && popup || href ? \"pointer\" : null,\n                    textDecoration: \"none\",\n                    maxWidth: \"600px\",\n                    zIndex: !popup ? 1003 : 5,\n                    maxHeight: \"90vh\",\n                    overflowY: \"hidden\",\n                    overscrollBehavior: \"contain\",\n                    gridColumn: !spanTwo ? null : [\n                        null,\n                        null,\n                        \"1 / span 2\"\n                    ],\n                    position: \"relative\"\n                },\n                as: href && !text ? \"a\" : \"div\",\n                href: href,\n                target: \"_blank\",\n                onClick: ()=>{\n                    if (text && popup) {\n                        setExpand(true);\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                        size: 64,\n                        width: 64,\n                        height: 64,\n                        mr: 3,\n                        src: img,\n                        alt: name,\n                        sx: {\n                            overflow: \"hidden\",\n                            objectFit: \"cover\",\n                            transition: \"transform 0.125s ease-in-out\",\n                            \"&:hover\": {\n                                transform: \"rotate(-8deg) scale(1.25)\"\n                            },\n                            flexShrink: 0,\n                            width: \"64px\",\n                            height: \"64px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspaces/alt-web/components/bio.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                sx: {\n                                    fontSize: [\n                                        4,\n                                        4,\n                                        4\n                                    ]\n                                },\n                                variant: \"headline\",\n                                color: \"black\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/workspaces/alt-web/components/bio.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            color: \"primary\",\n                                            variant: \"subheadline\",\n                                            fontSize: 3,\n                                            sx: {\n                                                mb: [\n                                                    \"0px\",\n                                                    \"0px\",\n                                                    \"0px\"\n                                                ],\n                                                fontSize: \"1.1em\",\n                                                width: \"fit-content\"\n                                            },\n                                            children: teamRole\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/alt-web/components/bio.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this),\n                                        subrole && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/workspaces/alt-web/components/bio.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                                    color: \"primary\",\n                                                    sx: {\n                                                        mb: [\n                                                            \"0px\",\n                                                            \"0px\",\n                                                            \"0px\"\n                                                        ],\n                                                        fontSize: 1,\n                                                        fontWeight: 400,\n                                                        width: \"fit-content\"\n                                                    },\n                                                    children: subrole\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/alt-web/components/bio.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true),\n                                        pronouns && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            fontSize: 1,\n                                            ml: 1,\n                                            color: \"steel\",\n                                            align: \"center\",\n                                            children: [\n                                                \"(\",\n                                                pronouns,\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspaces/alt-web/components/bio.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/alt-web/components/bio.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/alt-web/components/bio.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            !popup && email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                color: \"steel\",\n                                as: \"a\",\n                                href: \"mailto:\".concat(email),\n                                children: [\n                                    email,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/workspaces/alt-web/components/bio.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/alt-web/components/bio.js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            !popup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        mt: 2,\n                                        mb: 0,\n                                        color: \"black\",\n                                        children: text\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/alt-web/components/bio.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, this),\n                                    video && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                        sx: {\n                                            marginTop: 4,\n                                            marginX: 5,\n                                            justifyContent: \"center\",\n                                            aspectRatio: 4 / 3\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                            width: \"100%\",\n                                            src: video,\n                                            title: \"YouTube video player\",\n                                            frameborder: \"0\",\n                                            allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",\n                                            allowfullscreen: true\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/alt-web/components/bio.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/alt-web/components/bio.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true),\n                            !popup && href && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                sx: {\n                                    alignItems: \"center\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        sx: {\n                                            transform: \"translateX(-4px) translateY(2px)\",\n                                            display: \"inline-flex\",\n                                            alignItems: \"center\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                            glyph: \"external-fill\",\n                                            size: 24\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/alt-web/components/bio.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/alt-web/components/bio.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        mt: 1,\n                                        mb: 0,\n                                        color: \"black\",\n                                        as: \"a\",\n                                        href: href,\n                                        sx: {\n                                            transform: \"translateX(-2px)\"\n                                        },\n                                        children: href\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/alt-web/components/bio.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/alt-web/components/bio.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/alt-web/components/bio.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/alt-web/components/bio.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            popup && expand && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                    sx: {\n                        position: \"fixed\",\n                        zIndex: 1004,\n                        top: 0,\n                        left: 0,\n                        height: \"100vh\",\n                        width: \"100vw\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        background: \"rgba(0,0,0,0.6)\",\n                        pb: 4\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Bio, {\n                            ...props,\n                            popup: false\n                        }, void 0, false, {\n                            fileName: \"/workspaces/alt-web/components/bio.js\",\n                            lineNumber: 172,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                            sx: {\n                                position: \"fixed\",\n                                zIndex: 1002,\n                                top: 0,\n                                left: 0,\n                                height: \"100vh\",\n                                width: \"100vw\",\n                                alignItems: \"center\",\n                                justifyContent: \"center\",\n                                pb: 4\n                            },\n                            onClick: ()=>setExpand(false)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/alt-web/components/bio.js\",\n                            lineNumber: 173,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/alt-web/components/bio.js\",\n                    lineNumber: 158,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true);\n}\n_s(Bio, \"V8NQrAFSLXwZu43JmcjJwSuHwmw=\");\n_c = Bio;\nvar _c;\n$RefreshReg$(_c, \"Bio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNWTCxRQUFRO3dCQUNSc0MsS0FBSzt3QkFDTEMsTUFBTTt3QkFDTjVCLFFBQVE7d0JBQ1JELE9BQU87d0JBQ1BoQixZQUFZO3dCQUNabUMsZ0JBQWdCO3dCQUNoQlcsWUFBWTt3QkFDWkMsSUFBSTtvQkFDTjs7c0NBRUEsOERBQUNwRTs0QkFBSyxHQUFHRyxLQUFLOzRCQUFFRixPQUFPLEtBQUs7Ozs7OztzQ0FDNUIsOERBQUNILDBDQUFJQTs0QkFDSHFCLElBQUk7Z0NBQ0ZhLFVBQVU7Z0NBQ1ZMLFFBQVE7Z0NBQ1JzQyxLQUFLO2dDQUNMQyxNQUFNO2dDQUNONUIsUUFBUTtnQ0FDUkQsT0FBTztnQ0FDUGhCLFlBQVk7Z0NBQ1ptQyxnQkFBZ0I7Z0NBQ2hCWSxJQUFJOzRCQUNOOzRCQUNBakMsU0FBUyxJQUFNcEIsVUFBVSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUFPNUMsQ0FBQztHQTNMdUJmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmlvLmpzPzFmOTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXZhdGFyLCBCb3gsIENhcmQsIEZsZXgsIFRleHQgfSBmcm9tICd0aGVtZS11aSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlvKHsgcG9wdXAgPSB0cnVlLCBzcGFuVHdvID0gZmFsc2UsIC4uLnByb3BzIH0pIHtcbiAgbGV0IHsgYmdjb2xvciwgaW1nLCBuYW1lLCB0ZWFtUm9sZSwgcHJvbm91bnMsIHRleHQsIHN1YnJvbGUsIGVtYWlsLCBocmVmLCB2aWRlbyB9ID1cbiAgICBwcm9wc1xuICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJkXG4gICAgICAgIGJnPSB7Ymdjb2xvcn1cbiAgICAgICAgcD17cG9wdXAgPyBbMywgMywgM10gOiBbMiwgMiwgMl19XG4gICAgICAgIHB5PXtwb3B1cCA/IFszLCAzLCAzXSA6IFs0LCA0LCA0XX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogcG9wdXAgPyAnY2VudGVyJyA6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMTI1cyBlYXNlLWluLW91dCcsXG4gICAgICAgICAgJyY6aG92ZXInOlxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICdzY2FsZSgxLjAyNSknIH0sXG4gICAgICAgICAgY3Vyc29yOiAodGV4dCAmJiBwb3B1cCkgfHwgaHJlZiA/ICdwb2ludGVyJyA6IG51bGwsXG4gICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICBtYXhXaWR0aDogJzYwMHB4JyxcbiAgICAgICAgICB6SW5kZXg6ICFwb3B1cCA/IDEwMDMgOiA1LFxuICAgICAgICAgIG1heEhlaWdodDogJzkwdmgnLFxuICAgICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gICAgICAgICAgb3ZlcnNjcm9sbEJlaGF2aW9yOiAnY29udGFpbicsXG4gICAgICAgICAgZ3JpZENvbHVtbjogIXNwYW5Ud28gPyBudWxsIDogW251bGwsIG51bGwsIGAxIC8gc3BhbiAyYF0sXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgfX1cbiAgICAgICAgYXM9e2hyZWYgJiYgIXRleHQgPyAnYScgOiAnZGl2J31cbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICh0ZXh0ICYmIHBvcHVwKSB7XG4gICAgICAgICAgICBzZXRFeHBhbmQodHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICBzaXplPXs2NH1cbiAgICAgICAgICB3aWR0aD17NjR9XG4gICAgICAgICAgaGVpZ2h0PXs2NH1cbiAgICAgICAgICBtcj17M31cbiAgICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4xMjVzIGVhc2UtaW4tb3V0JyxcbiAgICAgICAgICAgICcmOmhvdmVyJzogeyB0cmFuc2Zvcm06ICdyb3RhdGUoLThkZWcpIHNjYWxlKDEuMjUpJyB9LFxuICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnNjRweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICc2NHB4J1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQgc3g9e3sgZm9udFNpemU6IFs0LCA0LCA0XSB9fSB2YXJpYW50PVwiaGVhZGxpbmVcIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJoZWFkbGluZVwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9ezN9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIG1iOiBbJzBweCcsICcwcHgnLCAnMHB4J10sXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMWVtJyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZWFtUm9sZX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICB7c3Vicm9sZSAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYjogWycwcHgnLCAnMHB4JywgJzBweCddLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c3Vicm9sZX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3Byb25vdW5zICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17MX0gbWw9ezF9IGNvbG9yPVwic3RlZWxcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgKHtwcm9ub3Vuc30pXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICB7IXBvcHVwICYmIGVtYWlsICYmIChcbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3RlZWxcIiBhcz17J2EnfSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+XG4gICAgICAgICAgICAgIHtlbWFpbH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshcG9wdXAgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFRleHQgbXQ9ezJ9IG1iPXswfSBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAge3ZpZGVvICYmIChcbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA0LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5YOiA1LFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiA0IC8gM1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dmlkZW99XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiXG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlblxuICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFwb3B1cCAmJiBocmVmICYmIChcbiAgICAgICAgICAgIDxGbGV4IHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC00cHgpIHRyYW5zbGF0ZVkoMnB4KScsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb24gZ2x5cGg9XCJleHRlcm5hbC1maWxsXCIgc2l6ZT17MjR9IC8+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBtdD17MX1cbiAgICAgICAgICAgICAgICBtYj17MH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICBhcz17J2EnfVxuICAgICAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgICAgICAgc3g9e3sgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMnB4KScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtocmVmfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NhcmQ+XG4gICAgICB7cG9wdXAgJiYgZXhwYW5kICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIHpJbmRleDogMTAwNCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjYpJyxcbiAgICAgICAgICAgICAgcGI6IDRcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJpbyB7Li4ucHJvcHN9IHBvcHVwPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAyLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgcGI6IDRcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kKGZhbHNlKX1cbiAgICAgICAgICAgID48L0ZsZXg+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkF2YXRhciIsIkJveCIsIkNhcmQiLCJGbGV4IiwiVGV4dCIsIkJpbyIsInBvcHVwIiwic3BhblR3byIsInByb3BzIiwiYmdjb2xvciIsImltZyIsIm5hbWUiLCJ0ZWFtUm9sZSIsInByb25vdW5zIiwidGV4dCIsInN1YnJvbGUiLCJlbWFpbCIsImhyZWYiLCJ2aWRlbyIsImV4cGFuZCIsInNldEV4cGFuZCIsImJnIiwicCIsInB5Iiwic3giLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJjdXJzb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1heFdpZHRoIiwiekluZGV4IiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwib3ZlcnNjcm9sbEJlaGF2aW9yIiwiZ3JpZENvbHVtbiIsInBvc2l0aW9uIiwiYXMiLCJ0YXJnZXQiLCJvbkNsaWNrIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwibXIiLCJzcmMiLCJhbHQiLCJvdmVyZmxvdyIsIm9iamVjdEZpdCIsImZsZXhTaHJpbmsiLCJmb250U2l6ZSIsInZhcmlhbnQiLCJjb2xvciIsIm1iIiwiYnIiLCJmb250V2VpZ2h0IiwibWwiLCJhbGlnbiIsIm10IiwibWFyZ2luVG9wIiwibWFyZ2luWCIsImp1c3RpZnlDb250ZW50IiwiYXNwZWN0UmF0aW8iLCJpZnJhbWUiLCJ0aXRsZSIsImZyYW1lYm9yZGVyIiwiYWxsb3ciLCJhbGxvd2Z1bGxzY3JlZW4iLCJJY29uIiwiZ2x5cGgiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZCIsInBiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/bio.js\n"));

/***/ })

});