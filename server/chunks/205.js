exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 2187:
/***/ ((module) => {

// Exports
module.exports = {
	"cubeContainer": "BulkCube_cubeContainer__fbLNb",
	"animateCube": "BulkCube_animateCube__0ve7X",
	"cube": "BulkCube_cube__YhRcp",
	"cubeWall": "BulkCube_cubeWall__KPAyC",
	"cubeShadow": "BulkCube_cubeShadow__Xkvdf",
	"flame": "BulkCube_flame__Pbw3K"
};


/***/ }),

/***/ 775:
/***/ ((module) => {

// Exports
module.exports = {
	"heartContainer": "Heart_heartContainer__ZGtD7",
	"heart": "Heart_heart__A7YF8",
	"increase": "Heart_increase__yU2oe",
	"smallHeart": "Heart_smallHeart__RpUZx"
};


/***/ }),

/***/ 4243:
/***/ ((module) => {

// Exports
module.exports = {
	"componentContainer": "Loader_componentContainer__dZ_VJ",
	"loaderContainer": "Loader_loaderContainer___Bf_B",
	"loaderRing": "Loader_loaderRing__ZmvoG",
	"leftRing": "Loader_leftRing__wLVA2",
	"reverceCurcle": "Loader_reverceCurcle__syesJ",
	"topRing": "Loader_topRing__l1dq0",
	"curcle": "Loader_curcle__0UDHp",
	"rightRing": "Loader_rightRing__3O9th",
	"loadingText": "Loader_loadingText__a_4TH"
};


/***/ }),

/***/ 3869:
/***/ ((module) => {

// Exports
module.exports = {
	"searcherContainer": "Searcher_searcherContainer__qNf6_",
	"inputContainer": "Searcher_inputContainer__4yn3w",
	"inputBlock": "Searcher_inputBlock__yrhO_",
	"range": "Searcher_range__sSra8",
	"searcherBtn": "Searcher_searcherBtn__efMfu",
	"activeSearcher": "Searcher_activeSearcher__g7xmH",
	"activeBtn": "Searcher_activeBtn__wRH_j",
	"searcherIconBlock": "Searcher_searcherIconBlock__YpsAB",
	"rotate": "Searcher_rotate__0S9k5",
	"searcherIcon": "Searcher_searcherIcon__X09v6"
};


/***/ }),

/***/ 1874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_catalogComponents_Heart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(775);
/* harmony import */ var _styles_catalogComponents_Heart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_catalogComponents_Heart_module_css__WEBPACK_IMPORTED_MODULE_3__);




const Heart = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_catalogComponents_Heart_module_css__WEBPACK_IMPORTED_MODULE_3___default().heartContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_catalogComponents_Heart_module_css__WEBPACK_IMPORTED_MODULE_3___default().heart), (_styles_catalogComponents_Heart_module_css__WEBPACK_IMPORTED_MODULE_3___default().leftPart)),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_catalogComponents_Heart_module_css__WEBPACK_IMPORTED_MODULE_3___default().smallHeart)
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heart);


/***/ }),

/***/ 7390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ searcher)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/catalogComponents/Searcher.module.css
var Searcher_module = __webpack_require__(3869);
var Searcher_module_default = /*#__PURE__*/__webpack_require__.n(Searcher_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/catalogComponents/searcher/searcher.tsx





const Searcher = ({ inputValue , onChangeInputValue  })=>{
    const [searcherValue, setSearcherValue] = (0,external_react_.useState)(inputValue);
    const [isSearcherActive, setIsSearcherActive] = (0,external_react_.useState)(false);
    const onSetSearcherValue = (value)=>{
        setSearcherValue(value);
        onChangeInputValue && onChangeInputValue(value);
    };
    const onOpenSearcher = (e)=>{
        e.preventDefault();
        setIsSearcherActive(true);
    };
    const onReturnBtn = ()=>{
        setIsSearcherActive(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        className: external_classnames_default()((Searcher_module_default()).searcherContainer),
        children: isSearcherActive ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((Searcher_module_default()).inputContainer, {
                [(Searcher_module_default()).activeSearcher]: isSearcherActive
            }),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    value: searcherValue,
                    placeholder: "Поиск",
                    className: external_classnames_default()((Searcher_module_default()).inputBlock),
                    onChange: (e)=>onSetSearcherValue(e.target.value)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Searcher_module_default()).searcherIconBlock,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 40,
                        height: 40,
                        src: "/assets/icons/searchIcon.png",
                        alt: "searchIcon",
                        className: external_classnames_default()((Searcher_module_default()).searcherIcon),
                        onClick: onReturnBtn
                    })
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
            type: "button",
            onClick: (e)=>onOpenSearcher(e),
            value: "Поиск",
            className: external_classnames_default()((Searcher_module_default()).searcherBtn, {
                [(Searcher_module_default()).activeBtn]: !isSearcherActive
            })
        })
    });
};
/* harmony default export */ const searcher = (Searcher);

;// CONCATENATED MODULE: ./src/components/catalogComponents/searcher/index.ts



/***/ }),

/***/ 4010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d5": () => (/* binding */ APP_THEMES_RIGHT),
  "Kp": () => (/* binding */ APP_THEME_LEFT),
  "iA": () => (/* binding */ CATALOG_COMPONENTS)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/catalogComponents/appMenu/index.ts + 1 modules
var appMenu = __webpack_require__(2685);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/catalogComponents/BulkCube.module.css
var BulkCube_module = __webpack_require__(2187);
var BulkCube_module_default = /*#__PURE__*/__webpack_require__.n(BulkCube_module);
;// CONCATENATED MODULE: ./src/components/catalogComponents/bulkCube/bulkCube.tsx



const BulkCube = ()=>{
    const figureWalls = [
        {
            id: 0,
            name: "left",
            color: "red"
        },
        {
            id: 1,
            name: "top",
            color: "blue"
        },
        {
            id: 2,
            name: "bottom",
            color: "green"
        },
        {
            id: 3,
            name: "right",
            color: "orange"
        }
    ];
    const wallStyle = (elem)=>{
        return {
            transform: `rotateY(calc(90deg * ${figureWalls[elem].id} )) translateZ(150px)`,
            backgroundColor: figureWalls[elem].color
        };
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BulkCube_module_default()).cubeContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (BulkCube_module_default()).cubeShadow
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (BulkCube_module_default()).cube,
                children: figureWalls.map((wall, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (BulkCube_module_default()).cubeWall,
                        style: wallStyle(index)
                    }, wall.name))
            })
        ]
    });
};
/* harmony default export */ const bulkCube = (BulkCube);

;// CONCATENATED MODULE: ./src/components/catalogComponents/bulkCube/index.ts


// EXTERNAL MODULE: ./src/components/catalogComponents/heart/heart.tsx
var heart = __webpack_require__(1874);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/styles/catalogComponents/Loader.module.css
var Loader_module = __webpack_require__(4243);
var Loader_module_default = /*#__PURE__*/__webpack_require__.n(Loader_module);
;// CONCATENATED MODULE: ./src/components/catalogComponents/loader/loader.tsx




const Loader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Loader_module_default()).componentContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((Loader_module_default()).loaderContainer),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((Loader_module_default()).loaderRing, (Loader_module_default()).leftRing)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((Loader_module_default()).loaderRing, (Loader_module_default()).rightRing)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((Loader_module_default()).loaderRing, (Loader_module_default()).topRing)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Loader_module_default()).loadingText,
                children: "Loading . . ."
            })
        ]
    });
};
/* harmony default export */ const loader = (Loader);

// EXTERNAL MODULE: ./src/components/catalogComponents/searcher/index.ts + 1 modules
var searcher = __webpack_require__(7390);
;// CONCATENATED MODULE: ./src/constants/componentsBase.tsx






const CATALOG_COMPONENTS = [
    {
        name: "menu",
        component: /*#__PURE__*/ jsx_runtime_.jsx(appMenu/* default */.Z, {})
    },
    {
        name: "cube",
        component: /*#__PURE__*/ jsx_runtime_.jsx(bulkCube, {})
    },
    {
        name: "searcher",
        component: /*#__PURE__*/ jsx_runtime_.jsx(searcher/* default */.Z, {})
    },
    {
        name: "loader",
        component: /*#__PURE__*/ jsx_runtime_.jsx(loader, {})
    },
    {
        name: "heart",
        component: /*#__PURE__*/ jsx_runtime_.jsx(heart/* default */.Z, {})
    }
];
const APP_THEME_LEFT = [
    "red",
    "orange",
    "yellow",
    "yellowgreen",
    "green",
    "blue",
    "lightblue",
    "white"
];
const APP_THEMES_RIGHT = [
    "lightpink",
    "pink",
    "violet",
    "red",
    "orangered",
    "red",
    "brown",
    "black"
];


/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F1": () => (/* reexport */ catalog),
  "nP": () => (/* reexport */ getCatalogComponents),
  "bh": () => (/* reexport */ selectCatalogComponents)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/store/modules/catalogComponents/actions.ts

const getCatalogComponents = (0,toolkit_.createAction)("GET_COMPONENTS");

;// CONCATENATED MODULE: ./src/store/modules/catalogComponents/reducer.ts


const initialState = {
    catalogComponents: null
};
const catalog = (0,toolkit_.createReducer)(initialState, {
    [getCatalogComponents.type]: (state, action)=>{
        state.catalogComponents = action.payload;
    }
});

// EXTERNAL MODULE: ./src/store/modules/rootSelector.ts
var rootSelector = __webpack_require__(5042);
;// CONCATENATED MODULE: ./src/store/modules/catalogComponents/selectors.ts


const selectCatalog = (0,toolkit_.createSelector)(rootSelector/* selectRoot */.N, (root)=>root.catalog);
const selectCatalogComponents = (0,toolkit_.createSelector)(selectCatalog, (state)=>state.catalogComponents);

;// CONCATENATED MODULE: ./src/store/modules/catalogComponents/index.ts





/***/ }),

/***/ 5042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ selectRoot)
/* harmony export */ });
const selectRoot = (state)=>state;


/***/ })

};
;