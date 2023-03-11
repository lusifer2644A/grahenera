"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/fetchProduct";
exports.ids = ["pages/api/fetchProduct"];
exports.modules = {

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "(api)/./config/firebase.js":
/*!****************************!*\
  !*** ./config/firebase.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\nconst env = \"development\";\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAh3f2uGggHYVlK9R16TTfMImOUFz33QZ4\",\n    authDomain: \"graphene-pro.firebaseapp.com\",\n    projectId: \"graphene-pro\",\n    storageBucket: \"graphene-pro.appspot.com\",\n    messagingSenderId: \"717871947950\",\n    appId: \"1:717871947950:web:56d0e195292908860dcd3f\",\n    measurementId: \"G-JR0475BX77\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// const analytics = getAnalytics(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDVjtBQUNLO0FBQ1Y7QUFFeEMsTUFBTUcsTUFMTjtBQU1BLE1BQU1DLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLHNCQUFzQjtBQUN0QixNQUFNQyxNQUFNWiwyREFBYUEsQ0FBQ0k7QUFDMUIsdUNBQXVDO0FBRXZDLGlFQUFlUSxHQUFHQSxFQUFDO0FBQ1osTUFBTUMsT0FBT1gsc0RBQU9BLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaGVuZXJhLy4vY29uZmlnL2ZpcmViYXNlLmpzPzJhNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QWgzZjJ1R2dnSFlWbEs5UjE2VFRmTUltT1VGejMzUVo0XCIsXG4gIGF1dGhEb21haW46IFwiZ3JhcGhlbmUtcHJvLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiZ3JhcGhlbmUtcHJvXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZ3JhcGhlbmUtcHJvLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjcxNzg3MTk0Nzk1MFwiLFxuICBhcHBJZDogXCIxOjcxNzg3MTk0Nzk1MDp3ZWI6NTZkMGUxOTUyOTI5MDg4NjBkY2QzZlwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctSlIwNDc1Qlg3N1wiLFxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4vLyBjb25zdCBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoYXBwKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFuYWx5dGljcyIsImdldEF1dGgiLCJlbnYiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/firebase.js\n");

/***/ }),

/***/ "(api)/./pages/api/fetchProduct.js":
/*!***********************************!*\
  !*** ./pages/api/fetchProduct.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTestDetails)\n/* harmony export */ });\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/firebase */ \"(api)/./config/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function getTestDetails(req, res) {\n    console.log(\"Fetching Product\");\n    try {\n        const { product_id  } = req.body;\n        if (!product_id) {\n            res.status(400).json({\n                msg: \"Please send a valid Product ID!\"\n            });\n        }\n        const dbRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, `products`, product_id.toString());\n        const snap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(dbRef);\n        const data = snap.data();\n        console.log(\"Recieved product data\", product_id);\n        res.status(200).json({\n            msg: `Successfully fetched product data`,\n            data: data\n        });\n    } catch (error) {\n        console.log(error);\n        console.log(\"Error while fetching product!\");\n        res.status(500).json({\n            msg: \"Error while fetching product!\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQVVaO0FBRTVCLE1BQU1TLEtBQUtILGdFQUFZQSxDQUFDTix3REFBR0E7QUFDWixlQUFlVSxlQUFlQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNyREMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBSTtRQUNGLE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUdKLElBQUlLLElBQUk7UUFFL0IsSUFBSSxDQUFDRCxZQUFZO1lBQ2ZILElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxLQUFLO1lBQ1A7UUFDRixDQUFDO1FBRUQsTUFBTUMsUUFBUWIsdURBQUdBLENBQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRU0sV0FBV00sUUFBUTtRQUVyRCxNQUFNQyxPQUFPLE1BQU1kLDBEQUFNQSxDQUFDWTtRQUMxQixNQUFNRyxPQUFPRCxLQUFLQyxJQUFJO1FBRXRCVixRQUFRQyxHQUFHLENBQUMseUJBQXlCQztRQUNyQ0gsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO1lBQ3hDSSxNQUFNQTtRQUNSO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RYLFFBQVFDLEdBQUcsQ0FBQ1U7UUFDWlgsUUFBUUMsR0FBRyxDQUFDO1FBQ1pGLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLEtBQUs7UUFDUDtJQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXBoZW5lcmEvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0LmpzPzQwYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tIFwiLi4vLi4vY29uZmlnL2ZpcmViYXNlXCI7XG5pbXBvcnQge1xuICBjb2xsZWN0aW9uLFxuICBxdWVyeSxcbiAgd2hlcmUsXG4gIGdldERvY3MsXG4gIHNldERvYyxcbiAgZ2V0RmlyZXN0b3JlLFxuICBkb2MsXG4gIGdldERvYyxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVzdERldGFpbHMocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coXCJGZXRjaGluZyBQcm9kdWN0XCIpO1xuICB0cnkge1xuICAgIGNvbnN0IHsgcHJvZHVjdF9pZCB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIXByb2R1Y3RfaWQpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgICAgbXNnOiBcIlBsZWFzZSBzZW5kIGEgdmFsaWQgUHJvZHVjdCBJRCFcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRiUmVmID0gZG9jKGRiLCBgcHJvZHVjdHNgLCBwcm9kdWN0X2lkLnRvU3RyaW5nKCkpO1xuXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGdldERvYyhkYlJlZik7XG4gICAgY29uc3QgZGF0YSA9IHNuYXAuZGF0YSgpO1xuXG4gICAgY29uc29sZS5sb2coXCJSZWNpZXZlZCBwcm9kdWN0IGRhdGFcIiwgcHJvZHVjdF9pZCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgbXNnOiBgU3VjY2Vzc2Z1bGx5IGZldGNoZWQgcHJvZHVjdCBkYXRhYCxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZmV0Y2hpbmcgcHJvZHVjdCFcIik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgbXNnOiBcIkVycm9yIHdoaWxlIGZldGNoaW5nIHByb2R1Y3QhXCIsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhcHAiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJzZXREb2MiLCJnZXRGaXJlc3RvcmUiLCJkb2MiLCJnZXREb2MiLCJkYiIsImdldFRlc3REZXRhaWxzIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RfaWQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1zZyIsImRiUmVmIiwidG9TdHJpbmciLCJzbmFwIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchProduct.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchProduct.js"));
module.exports = __webpack_exports__;

})();