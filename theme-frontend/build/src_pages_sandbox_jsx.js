"use strict";
(self["webpackChunktheme_frontend"] = self["webpackChunktheme_frontend"] || []).push([["src_pages_sandbox_jsx"],{

/***/ "./src/pages/sandbox.jsx":
/*!*******************************!*\
  !*** ./src/pages/sandbox.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const Sandbox = () => {
  const [projeto, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: 'wp/v2/pages?slug=home'
    }).then(data => {
      const pageElements = document.createElement('div');
      pageElements.innerHTML = data[0].content.rendered;
      const info = JSON.parse(pageElements.querySelector('pre').innerText);
      setData(info);
    }).catch(error => {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/React.createElement(_StyledContent, null, projeto && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Title, null, projeto.title)));
};
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "sandbox__Title",
  componentId: "sc-q9knhi-0"
})({
  "--tw-text-opacity": "1",
  "color": "rgb(216 216 216 / var(--tw-text-opacity))"
});
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sandbox__Content",
  componentId: "sc-q9knhi-1"
})({
  "marginLeft": "auto",
  "marginRight": "auto",
  "display": "flex",
  "height": "100vh",
  "width": "95vw",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "center",
  "gap": "2rem",
  "borderRadius": "100rem",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(45 45 45 / var(--tw-bg-opacity))",
  "paddingLeft": "4rem",
  "paddingRight": "4rem",
  "fontSize": "2.25rem",
  "lineHeight": "2.5rem",
  "--tw-text-opacity": "1",
  "color": "rgb(236 72 153 / var(--tw-text-opacity))"
});
var _StyledContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Content).withConfig({
  displayName: "sandbox___StyledContent",
  componentId: "sc-q9knhi-2"
})(["opacity:1;font-size:5rem;animation:fadein 3s infinite linear;"]);
/* harmony default export */ __webpack_exports__["default"] = (Sandbox);

/***/ })

}]);
//# sourceMappingURL=src_pages_sandbox_jsx.js.map