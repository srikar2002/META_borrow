"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/Context.js":
/*!**************************!*\
  !*** ./utils/Context.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": function() { return /* binding */ DataContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3 */ \"./utils/web3.js\");\n/* harmony import */ var revise_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! revise-sdk */ \"./node_modules/revise-sdk/dist/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import { toast } from 'react-toastify';\n\nvar DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isConnect = ref[0], setIsConnect = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var AUTH_TOKEN = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZTkyNmUwLTA0MTgtNGFmYi05Yjg1LTVkODVlZDUxYTljMCIsImtleSI6InhoMG1mODRtIiwiaWF0IjoxNjcwMDU2NjI0fQ.H67LRci5ra0JjalrKI0UMb94EGOoSY308x1xNkNw33w\";\n    var revise = new revise_sdk__WEBPACK_IMPORTED_MODULE_3__.Revise({\n        auth: AUTH_TOKEN\n    });\n    // const addCollection=async(collectionName,collectionURI)=>{\n    //     try {\n    //         let res= await revise.addCollection(collectionName,collectionURI);\n    //         console.log(res);\n    //     } catch (error) {\n    //         console.log(error)\n    //     }\n    // }\n    var mintNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(_name, _image, _tokenId, _desc, props) {\n            var tokenData, properties, newNFT, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        tokenData = {\n                            \"name\": _name,\n                            \"image\": _image,\n                            \"tokenId\": _tokenId,\n                            \"description?\": _desc\n                        };\n                        properties = props;\n                        console.log(tokenData);\n                        console.log(properties);\n                        return [\n                            4,\n                            revise.addNFT(tokenData, properties)\n                        ];\n                    case 1:\n                        newNFT = _state.sent();\n                        console.log(newNFT);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function mintNft(_name, _image, _tokenId, _desc, props) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getchSingleNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nft, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFT(\"fc451d76-20de-48e6-8300-c793ade33430\")\n                        ];\n                    case 1:\n                        nft = _state.sent();\n                        console.log(nft);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getchSingleNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getAllNftsByCollectionId = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nfts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFTs()\n                        ];\n                    case 1:\n                        nfts = _state.sent();\n                        console.log(\"nfts\", nfts);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAllNftsByCollectionId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setProperties = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setProperties() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setName = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId1, _name) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId1)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setName(_name).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setName(nftId1, _name) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setDesc = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId1, _desc) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId1)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setDescription(_desc).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setDesc(nftId1, _desc) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId1, _imgUrl) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId1)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setImage(_imgUrl).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setImage(nftId1, _imgUrl) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var walletConnection = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var web3, accs, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setIsConnect(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            (0,_web3__WEBPACK_IMPORTED_MODULE_2__.getWeb3)()\n                        ];\n                    case 2:\n                        web3 = _state.sent();\n                        return [\n                            4,\n                            web3.eth.getAccounts()\n                        ];\n                    case 3:\n                        accs = _state.sent();\n                        console.log(accs);\n                        setCurrentAccount(accs[0]);\n                        setIsConnect(false);\n                        console.log(currentAccount);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.log(error);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function walletConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // getchSingleNft();\n        getAllNftsByCollectionId();\n        // addCollection(\"GTA-5\",\"https://testnets.opensea.io/collection/metaborrow\");\n        walletConnection();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            walletConnection: walletConnection,\n            currentAccount: currentAccount,\n            isConnect: isConnect,\n            mintNft: mintNft,\n            getchSingleNft: getchSingleNft,\n            getAllNftsByCollectionId: getAllNftsByCollectionId,\n            setName: setName,\n            setDesc: setDesc,\n            setImage: setImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/utils/Context.js\",\n        lineNumber: 121,\n        columnNumber: 9\n    }, _this);\n};\n_s(ContextProvider, \"x/Q10vgp1oTQWmdpAvsrvZM5yEc=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzt3QkFDM0JyQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3BCZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixjQUFjLENBQUM7Ozs7Ozt3QkFDdEJjLEtBQUs7d0JBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQzt3QkFDbkJmLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7UUFHNUIsQ0FBQzt3QkFkS21DLGdCQUFnQjs7O09BY3JCO0lBQ0Q1QyxnREFBUyxDQUFDLFdBQU07UUFDWixvQkFBb0I7UUFDcEIrQix3QkFBd0IsRUFBRSxDQUFDO1FBQzNCLDhFQUE4RTtRQUM5RWEsZ0JBQWdCLEVBQUUsQ0FBQztJQUN2QixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0ksOERBQUN2QyxXQUFXLENBQUM0QyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUN6Qk4sZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7WUFDaEJsQyxjQUFjLEVBQWRBLGNBQWM7WUFDZEYsU0FBUyxFQUFUQSxTQUFTO1lBQ1RPLE9BQU8sRUFBUEEsT0FBTztZQUNQYSxjQUFjLEVBQWRBLGNBQWM7WUFDZEcsd0JBQXdCLEVBQXhCQSx3QkFBd0I7WUFDeEJPLE9BQU8sRUFBUEEsT0FBTztZQUNQRSxPQUFPLEVBQVBBLE9BQU87WUFDUEUsUUFBUSxFQUFSQSxRQUFRO1NBQ1g7a0JBQ0luQyxRQUFROzs7OzthQUNVLENBQzFCO0FBQ0wsQ0FBQztHQWhJS0QsZUFBZTtBQUFmQSxLQUFBQSxlQUFlO0FBa0lyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9Db250ZXh0LmpzPzA1OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFdlYjMgfSBmcm9tICcuL3dlYjMnO1xuaW1wb3J0IHsgUmV2aXNlIH0gZnJvbSAncmV2aXNlLXNkayc7XG4vLyBpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICBjb25zdCBbaXNDb25uZWN0LCBzZXRJc0Nvbm5lY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBBVVRIX1RPS0VOID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJamMzWlRreU5tVXdMVEEwTVRndE5HRm1ZaTA1WWpnMUxUVmtPRFZsWkRVeFlUbGpNQ0lzSW10bGVTSTZJbmhvTUcxbU9EUnRJaXdpYVdGMElqb3hOamN3TURVMk5qSTBmUS5INjdMUmNpNXJhMEpqYWxyS0kwVU1iOTRFR09vU1kzMDh4MXhOa053MzN3XCI7XG5cbiAgICBjb25zdCByZXZpc2UgPSBuZXcgUmV2aXNlKHsgYXV0aDogQVVUSF9UT0tFTiB9KTtcbiAgICAvLyBjb25zdCBhZGRDb2xsZWN0aW9uPWFzeW5jKGNvbGxlY3Rpb25OYW1lLGNvbGxlY3Rpb25VUkkpPT57XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBsZXQgcmVzPSBhd2FpdCByZXZpc2UuYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSxjb2xsZWN0aW9uVVJJKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBjb25zdCBtaW50TmZ0ID0gYXN5bmMgKF9uYW1lLCBfaW1hZ2UsIF90b2tlbklkLCBfZGVzYywgcHJvcHMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogX25hbWUsXG4gICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBfaW1hZ2UsXG4gICAgICAgICAgICAgICAgXCJ0b2tlbklkXCI6IF90b2tlbklkLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb24/XCI6IF9kZXNjXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHByb3BzO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW5EYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgY29uc3QgbmV3TkZUID0gYXdhaXQgcmV2aXNlLmFkZE5GVCh0b2tlbkRhdGEsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3TkZUKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRjaFNpbmdsZU5mdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5mdCA9IGF3YWl0IHJldmlzZS5mZXRjaE5GVCgnZmM0NTFkNzYtMjBkZS00OGU2LTgzMDAtYzc5M2FkZTMzNDMwJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZnQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRBbGxOZnRzQnlDb2xsZWN0aW9uSWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbmZ0cyA9IGF3YWl0IHJldmlzZS5mZXRjaE5GVHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmZ0c1wiLG5mdHMpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzZXRQcm9wZXJ0aWVzPSBhc3luYyAoKT0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJldmlzZS51cGRhdGVORlQobmZ0SWQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzZXROYW1lID0gYXN5bmMgKG5mdElkLCBfbmFtZSkgPT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgKGF3YWl0IHJldmlzZS51cGRhdGVORlQobmZ0SWQpKS5zZXROYW1lKF9uYW1lKS5zYXZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldERlc2MgPSBhc3luYyAobmZ0SWQsIF9kZXNjKSA9PiB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCAoYXdhaXQgcmV2aXNlLnVwZGF0ZU5GVChuZnRJZCkpLnNldERlc2NyaXB0aW9uKF9kZXNjKS5zYXZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEltYWdlID0gYXN5bmMgKG5mdElkLCBfaW1nVXJsKSA9PiB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCAoYXdhaXQgcmV2aXNlLnVwZGF0ZU5GVChuZnRJZCkpLnNldEltYWdlKF9pbWdVcmwpLnNhdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgd2FsbGV0Q29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0SXNDb25uZWN0KHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHdlYjMgPSBhd2FpdCBnZXRXZWIzKCk7XG4gICAgICAgICAgICBsZXQgYWNjcyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY2NzKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY3NbMF0pO1xuICAgICAgICAgICAgc2V0SXNDb25uZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBY2NvdW50KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgc2V0SXNDb25uZWN0KGZhbHNlKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGdldGNoU2luZ2xlTmZ0KCk7XG4gICAgICAgIGdldEFsbE5mdHNCeUNvbGxlY3Rpb25JZCgpO1xuICAgICAgICAvLyBhZGRDb2xsZWN0aW9uKFwiR1RBLTVcIixcImh0dHBzOi8vdGVzdG5ldHMub3BlbnNlYS5pby9jb2xsZWN0aW9uL21ldGFib3Jyb3dcIik7XG4gICAgICAgIHdhbGxldENvbm5lY3Rpb24oKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgd2FsbGV0Q29ubmVjdGlvbixcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgaXNDb25uZWN0LFxuICAgICAgICAgICAgbWludE5mdCxcbiAgICAgICAgICAgIGdldGNoU2luZ2xlTmZ0LFxuICAgICAgICAgICAgZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkLFxuICAgICAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgICAgIHNldERlc2MsXG4gICAgICAgICAgICBzZXRJbWFnZVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFdlYjMiLCJSZXZpc2UiLCJheGlvcyIsIkRhdGFDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0Nvbm5lY3QiLCJzZXRJc0Nvbm5lY3QiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiQVVUSF9UT0tFTiIsInJldmlzZSIsImF1dGgiLCJtaW50TmZ0IiwiX25hbWUiLCJfaW1hZ2UiLCJfdG9rZW5JZCIsIl9kZXNjIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJwcm9wZXJ0aWVzIiwibmV3TkZUIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWRkTkZUIiwiZ2V0Y2hTaW5nbGVOZnQiLCJuZnQiLCJmZXRjaE5GVCIsImdldEFsbE5mdHNCeUNvbGxlY3Rpb25JZCIsIm5mdHMiLCJmZXRjaE5GVHMiLCJzZXRQcm9wZXJ0aWVzIiwicmVzIiwidXBkYXRlTkZUIiwibmZ0SWQiLCJzZXROYW1lIiwic2F2ZSIsInNldERlc2MiLCJzZXREZXNjcmlwdGlvbiIsInNldEltYWdlIiwiX2ltZ1VybCIsIndhbGxldENvbm5lY3Rpb24iLCJ3ZWIzIiwiYWNjcyIsImV0aCIsImdldEFjY291bnRzIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/Context.js\n"));

/***/ })

});