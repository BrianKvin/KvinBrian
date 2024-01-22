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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestRest */ \"./src/hooks/useRequestRest.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* harmony import */ var _SpeakerAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpeakerAdd */ \"./src/components/SpeakerAdd.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SpeakersList() {\n    _s();\n    const { data: speakersData, requestStatus, error, updateRecord, insertRecord, deleteRecord } = (0,_hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { searchQuery, eventYear } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__.SpeakerFilterContext);\n    if (requestStatus === _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/briankvin/KvinBrian/speaker-list/src/components/SpeakersList.js\",\n                    lineNumber: 24,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/briankvin/KvinBrian/speaker-list/src/components/SpeakersList.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this);\n    }\n    //if (isLoading === true) return <div>Loading...</div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: \"speakerslist-placeholder\",\n            ready: requestStatus === _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerAdd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    eventYear: eventYear,\n                    insertRecord: insertRecord\n                }, void 0, false, {\n                    fileName: \"/home/briankvin/KvinBrian/speaker-list/src/components/SpeakersList.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: speakersData.filter(function(speaker) {\n                        var // speaker.first.toLowerCase().includes(searchQuery) ||\n                        // speaker.last.toLowerCase().includes(searchQuery)\n                        _speaker_first, _speaker_last;\n                        return (((_speaker_first = speaker.first) === null || _speaker_first === void 0 ? void 0 : _speaker_first.toLowerCase().includes(searchQuery)) || \"\") && (((_speaker_last = speaker.last) === null || _speaker_last === void 0 ? void 0 : _speaker_last.toLowerCase().includes(searchQuery)) || \"\");\n                    }).filter(function(speaker) {\n                        return speaker.sessions.find((session)=>{\n                            return session.eventYear === eventYear;\n                        });\n                    }).map(function(speaker) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            speaker: speaker,\n                            updateRecord: updateRecord,\n                            insertRecord: insertRecord,\n                            deleteRecord: deleteRecord\n                        }, speaker.id, false, {\n                            fileName: \"/home/briankvin/KvinBrian/speaker-list/src/components/SpeakersList.js\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/briankvin/KvinBrian/speaker-list/src/components/SpeakersList.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/briankvin/KvinBrian/speaker-list/src/components/SpeakersList.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/briankvin/KvinBrian/speaker-list/src/components/SpeakersList.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"VrJJyWfoOa/Vegd00EvenzpvKBs=\", false, function() {\n    return [\n        _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNIO0FBQ2lCO0FBQ3dCO0FBQ2hDO0FBQytCO0FBQ2xDO0FBRXRDLFNBQVNROztJQUNQLE1BQU0sRUFDSkgsTUFBTUksWUFBWSxFQUNsQkMsYUFBYSxFQUNiQyxLQUFLLEVBQ0xDLFlBQVksRUFDWkMsWUFBWSxFQUNaQyxZQUFZLEVBQ2IsR0FBR1gsaUVBQWNBO0lBRWxCLE1BQU0sRUFBRVksV0FBVyxFQUFFQyxTQUFTLEVBQUUsR0FBR2hCLGlEQUFVQSxDQUFDTSxnRkFBb0JBO0lBRWxFLElBQUlJLGtCQUFrQk4saUVBQWNBLENBQUNhLE9BQU8sRUFBRTtRQUM1QyxxQkFDRSw4REFBQ0M7WUFBSUMsV0FBVTs7Z0JBQWM7OEJBQ3BCLDhEQUFDQzs7d0JBQUU7d0JBQTZCVDs7Ozs7Ozs7Ozs7OztJQUc3QztJQUVBLHNEQUFzRDtJQUV0RCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ2pCLHlEQUFnQkE7WUFDZm1CLE1BQUs7WUFDTEMsTUFBTTtZQUNOSCxXQUFVO1lBQ1ZJLE9BQU9iLGtCQUFrQk4saUVBQWNBLENBQUNvQixPQUFPOzs4QkFFL0MsOERBQUNqQixtREFBVUE7b0JBQUNTLFdBQVdBO29CQUFXSCxjQUFjQTs7Ozs7OzhCQUNoRCw4REFBQ0s7b0JBQUlDLFdBQVU7OEJBQ1pWLGFBQWFnQixNQUFNLENBQUMsU0FBVUMsT0FBTzs0QkFFaEMsdURBQXVEO3dCQUN2RCxtREFBbUQ7d0JBQ2xEQSxnQkFDQUE7d0JBSkgsT0FHRSxDQUFDQSxFQUFBQSxpQkFBQUEsUUFBUUMsS0FBSyxjQUFiRCxxQ0FBQUEsZUFBZUUsV0FBVyxHQUFHQyxRQUFRLENBQUNkLGlCQUFnQixFQUFDLEtBQ3ZEVyxDQUFBQSxFQUFBQSxnQkFBQUEsUUFBUUksSUFBSSxjQUFaSixvQ0FBQUEsY0FBY0UsV0FBVyxHQUFHQyxRQUFRLENBQUNkLGlCQUFnQixFQUFDO29CQUczRCxHQUNDVSxNQUFNLENBQUMsU0FBVUMsT0FBTzt3QkFDdkIsT0FBT0EsUUFBUUssUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0M7NEJBQzVCLE9BQU9BLFFBQVFqQixTQUFTLEtBQUtBO3dCQUMvQjtvQkFDRixHQUNDa0IsR0FBRyxDQUFDLFNBQVVSLE9BQU87d0JBQ3BCLHFCQUNFLDhEQUFDekIsZ0RBQU9BOzRCQUVOeUIsU0FBU0E7NEJBQ1RkLGNBQWNBOzRCQUNkQyxjQUFjQTs0QkFDZEMsY0FBY0E7MkJBSlRZLFFBQVFTLEVBQUU7Ozs7O29CQU9yQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWjtHQTdEUzNCOztRQVFITCw2REFBY0E7OztLQVJYSztBQStEVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcbmltcG9ydCB1c2VSZXF1ZXN0UmVzdCwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0UmVzdFwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcbmltcG9ydCBTcGVha2VyQWRkIGZyb20gXCIuL1NwZWFrZXJBZGRcIjtcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KCkge1xuICBjb25zdCB7XG4gICAgZGF0YTogc3BlYWtlcnNEYXRhLFxuICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgdXBkYXRlUmVjb3JkLFxuICAgIGluc2VydFJlY29yZCxcbiAgICBkZWxldGVSZWNvcmQsXG4gIH0gPSB1c2VSZXF1ZXN0UmVzdCgpO1xuICBcbiAgY29uc3QgeyBzZWFyY2hRdWVyeSwgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvL2lmIChpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgIDxSZWFjdFBsYWNlaG9sZGVyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXG4gICAgICAgIHJvd3M9ezE1fVxuICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxuICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cbiAgICAgID5cbiAgICAgICAgPFNwZWFrZXJBZGQgZXZlbnRZZWFyPXtldmVudFllYXJ9IGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtzcGVha2Vyc0RhdGEuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgLy8gc3BlYWtlci5maXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fFxuICAgICAgICAgICAgICAgIC8vIHNwZWFrZXIubGFzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KVxuICAgICAgICAgICAgICAgIChzcGVha2VyLmZpcnN0Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fCAnJykgJiZcbiAgICAgICAgICAgICAgICAoc3BlYWtlci5sYXN0Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fCAnJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzcGVha2VyLnNlc3Npb25zLmZpbmQoKHNlc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XG4gICAgICAgICAgICAgICAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cbiAgICAgICAgICAgICAgICAgIGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlNwZWFrZXIiLCJSZWFjdFBsYWNlaG9sZGVyIiwidXNlUmVxdWVzdFJlc3QiLCJSRVFVRVNUX1NUQVRVUyIsImRhdGEiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsIlNwZWFrZXJBZGQiLCJTcGVha2Vyc0xpc3QiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJpbnNlcnRSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJzZWFyY2hRdWVyeSIsImV2ZW50WWVhciIsIkZBSUxVUkUiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwidHlwZSIsInJvd3MiLCJyZWFkeSIsIlNVQ0NFU1MiLCJmaWx0ZXIiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGFzdCIsInNlc3Npb25zIiwiZmluZCIsInNlc3Npb24iLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});