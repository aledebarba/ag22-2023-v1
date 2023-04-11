"use strict";
(globalThis["webpackChunktheme_frontend"] = globalThis["webpackChunktheme_frontend"] || []).push([["src_pages_page_jsx"],{

/***/ "./src/pages/page.jsx":
/*!****************************!*\
  !*** ./src/pages/page.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/.pnpm/styled-components@5.3.9_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js");




/**
 * This function is used to render the single page content WHEN the page does not have a JSX file to render it.
 * Notes: 
 * 			- This function is called by _app.jsx to create routes for all pages that do not have a JSX file.
 * 			- Probably the only motive to even touch this file is to add custom styling to the page.
 * @name SinglePage
 * @param {string} slug
 * @returns jsx
 * 
 */
const SinglePage = ({
  slug
}) => {
  const [pageContent, setPageContent] = react__WEBPACK_IMPORTED_MODULE_0___default().useState( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading content..."));
  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/wp/v2/pages?slug=' + slug
    }).then(pageContent => {
      setPageContent(pageContent[0].content.rendered);
      setPage(pageContent[0]);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledSinglePage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "single-page-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: pageContent
    }
  })));
};

// basic styling system for the page
const StyledSinglePage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "page__StyledSinglePage",
  componentId: "sc-vlmgwe-0"
})(["", " width:clamp( 300px,80%,1200px );margin:0 auto;h1,h2,h3,h4,h5,h6{font-weight:bold;margin:2rem 0 0 0;}h1{", "}h2{", "}h3{", "}h4{", "}h5{", "}h6{", "}p{", "}bold{", "}"], {
  "minHeight": "100vh",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(241 239 232 / var(--tw-bg-opacity))",
  "padding": "2rem"
}, {
  "fontSize": "2.25rem",
  "lineHeight": "2.5rem"
}, {
  "fontSize": "1.875rem",
  "lineHeight": "2.25rem"
}, {
  "fontSize": "1.5rem",
  "lineHeight": "2rem"
}, {
  "fontSize": "1.25rem",
  "lineHeight": "1.75rem"
}, {
  "fontSize": "1.125rem",
  "lineHeight": "1.75rem"
}, {
  "fontSize": "1rem",
  "lineHeight": "1.5rem"
}, {
  "marginTop": "0.5rem",
  "marginBottom": "0.5rem",
  "--tw-text-opacity": "1",
  "color": "rgb(10 10 10 / var(--tw-text-opacity))"
}, {
  "fontWeight": "700"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePage);

/***/ })

}]);
//# sourceMappingURL=src_pages_page_jsx.js.map