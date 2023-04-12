(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2557:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "AppLayout_wrapper__eG72R",
	"content": "AppLayout_content__S_bt3"
};


/***/ }),

/***/ 4734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/catalogComponents/searcher/index.ts + 1 modules
var searcher = __webpack_require__(7390);
// EXTERNAL MODULE: ./src/constants/componentsBase.tsx + 3 modules
var componentsBase = __webpack_require__(4010);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/store/modules/appTheme/actions.ts

const chooseThemeColor = (0,toolkit_.createAction)("CHOOSE_COLOR");

;// CONCATENATED MODULE: ./src/store/modules/appTheme/reducer.ts


const initialState = {
    themeColor: {
        left: 0,
        right: 0
    }
};
const appTheme = (0,toolkit_.createReducer)(initialState, {
    [chooseThemeColor.type]: (state, action)=>{
        state.themeColor = action.payload;
    }
});

// EXTERNAL MODULE: ./src/store/modules/rootSelector.ts
var rootSelector = __webpack_require__(5042);
;// CONCATENATED MODULE: ./src/store/modules/appTheme/selectors.ts


const selectAppTheme = (0,toolkit_.createSelector)(rootSelector/* selectRoot */.N, (root)=>root.appTheme);
const selectThemeColor = (0,toolkit_.createSelector)(selectAppTheme, (state)=>state.themeColor);

;// CONCATENATED MODULE: ./src/store/modules/appTheme/index.ts




// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/appComponents/header/header.tsx








const Header = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const appThemesStore = (0,external_react_redux_.useSelector)(selectThemeColor);
    const [appThemes, setAppThemes] = (0,external_react_.useState)(appThemesStore);
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const changeFirstTheme = (index)=>{
        setAppThemes({
            ...appThemes,
            left: Number(index)
        });
        document.documentElement.style.setProperty("--firstTheme", `${componentsBase/* APP_THEME_LEFT */.Kp[Number(index)]}`);
        dispatch(chooseThemeColor({
            ...appThemes,
            left: Number(index)
        }));
    };
    const changeSecondTheme = (index)=>{
        setAppThemes({
            ...appThemes,
            right: Number(index)
        });
        document.documentElement.style.setProperty("--secondTheme", `${componentsBase/* APP_THEMES_RIGHT */.d5[Number(index)]}`);
        dispatch(chooseThemeColor({
            ...appThemes,
            right: Number(index)
        }));
    };
    (0,external_react_.useEffect)(()=>{
        document.documentElement.style.setProperty("--leftRange", `${componentsBase/* APP_THEME_LEFT */.Kp}`);
        document.documentElement.style.setProperty("--rightRange", `${componentsBase/* APP_THEMES_RIGHT */.d5}`);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "headerText",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(searcher/* default */.Z, {
                        inputValue: searchValue,
                        onChangeInputValue: setSearchValue
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: "appName",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "firstText",
                                children: "Animation"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "secondText",
                                children: "Variation"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "appThemes",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "range",
                        className: external_classnames_default()("themeRange", "leftRange"),
                        min: 0,
                        max: componentsBase/* APP_THEME_LEFT.length */.Kp.length - 1,
                        value: appThemes.left,
                        onChange: (e)=>changeFirstTheme(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "range",
                        className: external_classnames_default()("themeRange", "rightRange"),
                        min: 0,
                        max: componentsBase/* APP_THEMES_RIGHT.length */.d5.length - 1,
                        value: appThemes.right,
                        onChange: (e)=>changeSecondTheme(e.target.value)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./src/components/appComponents/header/index.ts


// EXTERNAL MODULE: ./src/styles/AppLayout.module.css
var AppLayout_module = __webpack_require__(2557);
var AppLayout_module_default = /*#__PURE__*/__webpack_require__.n(AppLayout_module);
;// CONCATENATED MODULE: ./src/components/appComponents/footer/footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: "App footer"
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./src/components/appComponents/footer/index.ts


;// CONCATENATED MODULE: ./src/components/appComponents/appLayout/appLayout.tsx





const AppLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (AppLayout_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (AppLayout_module_default()).content,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const appLayout = (AppLayout);

;// CONCATENATED MODULE: ./src/components/appComponents/appLayout/index.ts


// EXTERNAL MODULE: ./src/store/modules/catalogComponents/index.ts + 3 modules
var catalogComponents = __webpack_require__(6004);
;// CONCATENATED MODULE: ./src/store/modules/index.ts



const rootReducer = (0,toolkit_.combineReducers)({
    appTheme: appTheme,
    catalog: catalogComponents/* catalog */.F1
});

;// CONCATENATED MODULE: ./src/store/index.ts


const store = (0,toolkit_.configureStore)({
    reducer: rootReducer
});

// EXTERNAL MODULE: ./src/styles/globalStyles.css
var globalStyles = __webpack_require__(2977);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(appLayout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 2977:
/***/ (() => {



/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,121,675,685,205], () => (__webpack_exec__(4734)));
module.exports = __webpack_exports__;

})();