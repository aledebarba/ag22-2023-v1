"use strict";
(globalThis["webpackChunktheme_frontend"] = globalThis["webpackChunktheme_frontend"] || []).push([["src_pages_projetos_jsx"],{

/***/ "./src/pages/projetos.jsx":
/*!********************************!*\
  !*** ./src/pages/projetos.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.9.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js");


const ProjetosPage = props => {
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();
  const id = searchParams.get('id');
  console.log(id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "projetos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "P\xE1gina de Projetos")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjetosPage);

/***/ })

}]);
//# sourceMappingURL=src_pages_projetos_jsx.js.map