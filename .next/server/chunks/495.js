"use strict";
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 3608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Bio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6413);




function Bio({ popup =true , spanTwo =false , ...props }) {
    let { bgcolor , img , name , teamRole , pronouns , text , subrole , email , href , video  } = props;
    const [expand, setExpand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
                bg: bgcolor,
                p: popup ? [
                    3,
                    3,
                    3
                ] : [
                    3,
                    3,
                    3
                ],
                px: popup ? [
                    4,
                    4,
                    4
                ] : [
                    5,
                    5,
                    5
                ],
                py: popup ? [
                    3,
                    3,
                    3
                ] : [
                    4,
                    4,
                    4
                ],
                sx: {
                    display: "flex",
                    alignItems: popup ? "center" : "flex-start",
                    transition: "transform 0.125s ease-in-out",
                    "&:hover": {
                        transform: "scale(1.025)"
                    },
                    cursor: text && popup || href ? "pointer" : null,
                    textDecoration: "none",
                    maxWidth: "600px",
                    zIndex: !popup ? 1003 : 5,
                    maxHeight: "90vh",
                    overflowY: "hidden",
                    overscrollBehavior: "contain",
                    gridColumn: !spanTwo ? null : [
                        null,
                        null,
                        `1 / span 2`
                    ],
                    position: "relative"
                },
                as: href && !text ? "a" : "div",
                href: href,
                target: "_blank",
                onClick: ()=>{
                    if (text && popup) {
                        setExpand(true);
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                        size: 84,
                        width: 84,
                        height: 84,
                        mr: 4,
                        src: img,
                        alt: name,
                        sx: {
                            overflow: "hidden",
                            objectFit: "cover",
                            transition: "transform 0.125s ease-in-out",
                            "&:hover": {
                                transform: "rotate(-8deg) scale(1.25)"
                            },
                            flexShrink: 0,
                            width: "84px",
                            height: "84px"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                sx: {
                                    fontSize: [
                                        4,
                                        4,
                                        4
                                    ]
                                },
                                variant: "headline",
                                color: "black",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        glyph: "bolt"
                                    }),
                                    name
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            color: "primary",
                                            variant: "subheadline",
                                            fontSize: 3,
                                            sx: {
                                                mb: [
                                                    "0px",
                                                    "0px",
                                                    "0px"
                                                ],
                                                fontSize: "1.1em",
                                                width: "fit-content"
                                            },
                                            children: teamRole
                                        }),
                                        subrole && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    color: "primary",
                                                    sx: {
                                                        mb: [
                                                            "0px",
                                                            "0px",
                                                            "0px"
                                                        ],
                                                        fontSize: 1,
                                                        fontWeight: 400,
                                                        width: "fit-content"
                                                    },
                                                    children: subrole
                                                })
                                            ]
                                        }),
                                        pronouns && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: 1,
                                            ml: 1,
                                            color: "steel",
                                            align: "center",
                                            children: [
                                                "(",
                                                pronouns,
                                                ")"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            !popup && email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                color: "steel",
                                as: "a",
                                href: `mailto:${email}`,
                                children: [
                                    email,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            }),
                            !popup && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        mt: 2,
                                        mb: 0,
                                        color: "black",
                                        children: text
                                    }),
                                    video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                        sx: {
                                            marginTop: 4,
                                            marginX: 5,
                                            justifyContent: "center",
                                            aspectRatio: 4 / 3
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                            width: "100%",
                                            src: video,
                                            title: "YouTube video player",
                                            frameborder: "0",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                            allowfullscreen: true
                                        })
                                    })
                                ]
                            }),
                            !popup && href && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                sx: {
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        sx: {
                                            transform: "translateX(-4px) translateY(2px)",
                                            display: "inline-flex",
                                            alignItems: "center"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            glyph: "external-fill",
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        mt: 1,
                                        mb: 0,
                                        color: "black",
                                        as: "a",
                                        href: href,
                                        sx: {
                                            transform: "translateX(-2px)"
                                        },
                                        children: href
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            popup && expand && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    sx: {
                        position: "fixed",
                        zIndex: 1004,
                        top: 0,
                        left: 0,
                        height: "100vh",
                        width: "100vw",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.6)",
                        pb: 4
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bio, {
                            ...props,
                            popup: false
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            sx: {
                                position: "fixed",
                                zIndex: 1002,
                                top: 0,
                                left: 0,
                                height: "100vh",
                                width: "100vw",
                                alignItems: "center",
                                justifyContent: "center",
                                pb: 4
                            },
                            onClick: ()=>setExpand(false)
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 2822:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6655);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





const waveFlag = _emotion_react__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-5deg);
  }
`;
const waveFlagScaled = _emotion_react__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  from {
    transform: scale(.875) rotate(0deg);
  }
  to {
    transform: scale(.875) rotate(-5deg);
  }
`;
const scrolled = (props)=>props.scrolled && _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    transform: scale(0.875);
    height: 56px;
    &:hover,
    &:focus {
      animation: ${waveFlagScaled} 0.5s linear infinite alternate;
    }
  `;
const Base = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("a")`
  background-image: url(https://assets.hackclub.com/flag-orpheus-top.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
  cursor: pointer;
  flex-shrink: 0;
  width: 112px;
  height: 48px;
  transition: ${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1) transform;
  transform-origin: top left;
  @media (min-width: ${_lib_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].breakpoints[1] */ .Z.breakpoints[1]}) {
    width: 172px;
    height: 64px;
  }
  &:hover,
  &:focus {
    animation: ${waveFlag} 0.5s linear infinite alternate;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
  ${scrolled};
`;
const Flag = (props)=>/*#__PURE__*/ _jsx(Link, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/ _jsx(Base, {
            href: "https://hackclub.com/",
            title: "Homepage",
            ...props
        })
    });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Flag)));


/***/ })

};
;