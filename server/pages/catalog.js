(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 7357:
/***/ ((module) => {

// Exports
module.exports = {
	"catalogContainer": "Catalog_catalogContainer__1j0Hm",
	"catalogMenu": "Catalog_catalogMenu__MuHRn",
	"catalogHeader": "Catalog_catalogHeader__czHup",
	"menuContainer": "Catalog_menuContainer__HpDNS",
	"menuArrow": "Catalog_menuArrow__GQD8P",
	"disabledArrow": "Catalog_disabledArrow__3yW83",
	"menuItems": "Catalog_menuItems__FZAOl",
	"menuItem": "Catalog_menuItem__GMjee",
	"choosedItem": "Catalog_choosedItem__yqvOE",
	"choosed": "Catalog_choosed__FnEL_",
	"previewWindow": "Catalog_previewWindow__2_r7Q",
	"previewInfo": "Catalog_previewInfo__uXEXT",
	"itemReviews": "Catalog_itemReviews__kh5RT",
	"reviewsBlock": "Catalog_reviewsBlock__zKyjp",
	"review": "Catalog_review__Jy8fV",
	"reviewsInput": "Catalog_reviewsInput__PvUR5",
	"previewItem": "Catalog_previewItem__11aLf",
	"likesContainer": "Catalog_likesContainer__LdARw",
	"likesIcon": "Catalog_likesIcon__FiFAE",
	"reviewForm": "Catalog_reviewForm___LiGJ",
	"reviewBtn": "Catalog_reviewBtn__YzZJL",
	"reviewsError": "Catalog_reviewsError__8U_af"
};


/***/ }),

/***/ 3325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_componentsBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4010);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7357);
/* harmony import */ var _styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_modules_catalogComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6004);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3680);
/* harmony import */ var _components_catalogComponents_heart_heart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










async function getServerSideProps() {
    const resp = await (0,axios__WEBPACK_IMPORTED_MODULE_3__["default"])("https://640adea265d3a01f98095963.mockapi.io/catalog");
    return {
        props: {
            catalog: resp.data
        }
    };
}
const Catalog = ({ catalog  })=>{
    var _catalogItems_choosedItem, _catalogItems_choosedItem1, _CATALOG_COMPONENTS_choosedItem, _CATALOG_COMPONENTS_choosedItem1;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const catalogItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_modules_catalogComponents__WEBPACK_IMPORTED_MODULE_6__/* .selectCatalogComponents */ .bh);
    const [choosedItem, setChoosedItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [inputError, setInputError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const likeIcon = catalogItems && ((_catalogItems_choosedItem = catalogItems[choosedItem]) === null || _catalogItems_choosedItem === void 0 ? void 0 : _catalogItems_choosedItem.isLiked) ? "red" : "white";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!catalog) {
            return;
        }
        dispatch((0,_store_modules_catalogComponents__WEBPACK_IMPORTED_MODULE_6__/* .getCatalogComponents */ .nP)(catalog));
    }, [
        catalog
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.documentElement.style.setProperty("--smallheartbg", `${likeIcon}`);
    }, [
        choosedItem
    ]);
    const onChooseItem = (index)=>setChoosedItem(index);
    const onLikeComponent = ()=>{
        if (catalogItems && catalogItems[choosedItem].isLiked) {
            return;
        }
        document.documentElement.style.setProperty("--smallheartbg", `red`);
        if (catalogItems) {
            const newCatalog = catalogItems.map((item)=>{
                if (Number(item.id) === choosedItem + 1) {
                    return {
                        ...item,
                        isLiked: true,
                        likes: item.likes + 1
                    };
                }
                return item;
            });
            dispatch((0,_store_modules_catalogComponents__WEBPACK_IMPORTED_MODULE_6__/* .getCatalogComponents */ .nP)(newCatalog));
            onEditComponent(choosedItem + 1, "likes", catalogItems[choosedItem].likes + 1);
        }
    };
    const onEditComponent = async (id, componentKey, value)=>{
        //TODO: в диспатч и asyncthunk
        await axios__WEBPACK_IMPORTED_MODULE_3__["default"].put(`https://640adea265d3a01f98095963.mockapi.io/catalog/${id}`, {
            [componentKey]: value
        });
    };
    const postNewComponent = async ()=>{
        const authCheck = window.prompt("Введите пароль");
        if (authCheck === "9573") {
            const componentName = window.prompt("Название компонента");
            //TODO: в диспатч и asyncthunk
            const resp = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("https://640adea265d3a01f98095963.mockapi.io/catalog", {
                name: componentName
            });
            onEditComponent(resp.data.id, "likes", 0);
            catalogItems && dispatch((0,_store_modules_catalogComponents__WEBPACK_IMPORTED_MODULE_6__/* .getCatalogComponents */ .nP)([
                ...catalogItems,
                {
                    ...resp.data,
                    likes: 0
                }
            ]));
        } else {
            window.alert("Не угадал");
        }
    };
    const onUsePagination = ()=>{
        catalogItems && pagination !== 0 && setPagination(pagination - 1);
        catalogItems && pagination !== Math.round(catalogItems.length / 8) && setPagination(pagination + 1);
    };
    const onAddReview = (e, id)=>{
        e.preventDefault();
        if (inputValue.length < 4) {
            setInputError("Не менее 4-х символов");
            return;
        }
        if (catalogItems) {
            const newCatalog = catalogItems.map((item)=>{
                if (Number(item.id) === choosedItem + 1) {
                    return {
                        ...item,
                        reviews: [
                            ...catalogItems[choosedItem].reviews,
                            inputValue
                        ]
                    };
                }
                return item;
            });
            setInputError("");
            dispatch((0,_store_modules_catalogComponents__WEBPACK_IMPORTED_MODULE_6__/* .getCatalogComponents */ .nP)(newCatalog));
            onEditComponent(id, "reviews", [
                ...catalogItems[choosedItem].reviews,
                inputValue
            ]);
            setInputValue("");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().catalogContainer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().catalogMenu),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().catalogHeader),
                    children: "Find your favorite animation"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuContainer),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuArrow), {
                                [(_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().disabledArrow)]: pagination === 0
                            }),
                            onClick: onUsePagination,
                            children: "<"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuItems),
                            children: [
                                catalogItems && catalogItems.length && catalogItems.slice(pagination * 8, (pagination + 1) * 8).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuItem), {
                                            [(_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().choosedItem)]: choosedItem === index + pagination * 8
                                        }),
                                        onClick: ()=>onChooseItem(index + pagination * 8),
                                        children: item.name
                                    }, item.name + ":" + index)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuItem)),
                                    onClick: postNewComponent,
                                    children: "+"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuArrow), {
                                [(_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().disabledArrow)]: catalogItems && pagination === Math.round(catalogItems.length / 8)
                            }),
                            onClick: onUsePagination,
                            children: ">"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().previewWindow),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().previewInfo),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "Отзывов:\xa0",
                                        catalogItems ? (_catalogItems_choosedItem1 = catalogItems[choosedItem]) === null || _catalogItems_choosedItem1 === void 0 ? void 0 : _catalogItems_choosedItem1.reviews.length : 0
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: ((_CATALOG_COMPONENTS_choosedItem = _constants_componentsBase__WEBPACK_IMPORTED_MODULE_2__/* .CATALOG_COMPONENTS */ .iA[choosedItem]) === null || _CATALOG_COMPONENTS_choosedItem === void 0 ? void 0 : _CATALOG_COMPONENTS_choosedItem.name) || "Soon add..."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().likesContainer),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                transform: "scale(0.2)"
                                            },
                                            onClick: onLikeComponent,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_catalogComponents_heart_heart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                        }),
                                        ":\xa0",
                                        catalogItems ? catalogItems[choosedItem].likes : 0
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().itemReviews),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().reviewsBlock),
                                            children: catalogItems && catalogItems[choosedItem].reviews.map((review, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().review),
                                                    children: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_9__/* .editFirstSymbolToUpperCase */ .s)(review)
                                                }, review + ":" + index))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().reviewsError),
                                            children: inputError
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().reviewForm),
                                            onSubmit: (e)=>{
                                                onAddReview(e, choosedItem + 1);
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    title: "Не менее 4-х символов",
                                                    // type="text"
                                                    className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().reviewsInput),
                                                    placeholder: "Напишите отзыв",
                                                    value: inputValue,
                                                    onChange: (e)=>setInputValue(e.target.value)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().reviewBtn),
                                                    children: "Ok"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Catalog_module_css__WEBPACK_IMPORTED_MODULE_8___default().previewItem),
                            children: ((_CATALOG_COMPONENTS_choosedItem1 = _constants_componentsBase__WEBPACK_IMPORTED_MODULE_2__/* .CATALOG_COMPONENTS */ .iA[choosedItem]) === null || _CATALOG_COMPONENTS_choosedItem1 === void 0 ? void 0 : _CATALOG_COMPONENTS_choosedItem1.component) || "Soon add..."
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ editFirstSymbolToUpperCase)
/* harmony export */ });
const editFirstSymbolToUpperCase = (text)=>{
    return text[0].toUpperCase() + text.slice(1);
};


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

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,121,675,685,205], () => (__webpack_exec__(3325)));
module.exports = __webpack_exports__;

})();