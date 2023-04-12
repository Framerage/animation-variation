exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 4310:
/***/ ((module) => {

// Exports
module.exports = {
	"menuContainer": "AppMenu_menuContainer__xUIRL",
	"navContainer": "AppMenu_navContainer__9d5Ow",
	"menuToggle": "AppMenu_menuToggle__4_jFb",
	"toggleImage": "AppMenu_toggleImage__4oSc5",
	"pulse": "AppMenu_pulse__Qr0UC",
	"activeToggle": "AppMenu_activeToggle__S9OtG",
	"menuItem": "AppMenu_menuItem__u9OfU",
	"activeMenu": "AppMenu_activeMenu__XB81v",
	"itemTooltip": "AppMenu_itemTooltip__VhnWw"
};


/***/ }),

/***/ 2685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ appMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/catalogComponents/AppMenu.module.css
var AppMenu_module = __webpack_require__(4310);
var AppMenu_module_default = /*#__PURE__*/__webpack_require__.n(AppMenu_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
;// CONCATENATED MODULE: ./src/components/catalogComponents/appMenu/appMenu.tsx







const AppMenu = ({ menuItems  })=>{
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const onUseMenu = ()=>setIsMenuOpen(!isMenuOpen);
    const defaultMenuItems = [
        {
            name: "1",
            image: "/assets/images/defaultImg.png",
            link: "/"
        },
        {
            name: "2",
            image: "/assets/images/defaultImg.png",
            link: "/"
        },
        {
            name: "3",
            image: "/assets/images/defaultImg.png",
            link: "/"
        },
        {
            name: "4",
            image: "/assets/images/defaultImg.png",
            link: "/"
        },
        {
            name: "5",
            image: "/assets/images/defaultImg.png",
            link: "/"
        },
        {
            name: "6",
            image: "/assets/images/defaultImg.png",
            link: "/"
        },
        {
            name: "7",
            image: "/assets/images/defaultImg.png",
            link: "/"
        },
        {
            name: "8",
            image: "/assets/images/defaultImg.png",
            link: "/"
        }
    ];
    const itemsAmount = menuItems ? menuItems.length : defaultMenuItems.length;
    const itemsContant = menuItems ? menuItems : defaultMenuItems;
    const iconStyle = (elem)=>{
        return {
            transitionDelay: `calc(0.1s*${elem}`,
            transform: isMenuOpen ? `rotate(calc(360deg / ${itemsAmount} * ${elem + 2}))` : "rotate(0deg) translateX(150px)"
        };
    };
    const imageStyle = (elem)=>{
        return {
            transform: `rotate(calc(360deg / ${-itemsAmount} * ${elem + 2}))`
        };
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (AppMenu_module_default()).menuContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (AppMenu_module_default()).navContainer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_classnames_default()((AppMenu_module_default()).menuToggle, {
                        [(AppMenu_module_default()).activeToggle]: isMenuOpen
                    }),
                    onClick: onUseMenu,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/assets/images/menuBtn.png",
                        alt: "menuItem",
                        width: 150,
                        height: 150,
                        className: (AppMenu_module_default()).toggleImage
                    })
                }),
                itemsContant.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item.link,
                        className: external_classnames_default()((AppMenu_module_default()).menuItem, {
                            [(AppMenu_module_default()).activeMenu]: isMenuOpen
                        }),
                        style: iconStyle(index),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                            className: (AppMenu_module_default()).itemTooltip,
                            title: item.name,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: item.image,
                                alt: "menuItem",
                                width: 50,
                                height: 50,
                                style: imageStyle(index)
                            })
                        })
                    }, item.name + ":" + index))
            ]
        })
    });
};
/* harmony default export */ const appMenu = (AppMenu);

;// CONCATENATED MODULE: ./src/components/catalogComponents/appMenu/index.ts



/***/ })

};
;