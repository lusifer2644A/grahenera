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
exports.id = "pages/api/updateproduct";
exports.ids = ["pages/api/updateproduct"];
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

/***/ "(api)/./pages/api/updateproduct.js":
/*!************************************!*\
  !*** ./pages/api/updateproduct.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTest)\n/* harmony export */ });\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/firebase */ \"(api)/./config/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function createTest(req, res) {\n    console.log(\"Updating Product\");\n    try {\n        const { data , product_id  } = req.body;\n        if (!product_id) {\n            res.status(400).json({\n                msg: \"Please send a valid Product ID!\"\n            });\n        }\n        const dbRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, `products`, product_id.toString());\n        const temp = {\n            ...data\n        };\n        const resp = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(dbRef, temp);\n        res.status(200).json({\n            msg: `Successfully updated product ${[\n                product_id\n            ]}`\n        });\n        console.log(`Successfully updated product ${product_id}`);\n    } catch (error) {\n        console.log(\"Error while updating product \", error);\n        res.status(500).json({\n            msg: `Error in updating product`\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFVWjtBQUU1QixNQUFNSSxLQUFLSCxnRUFBWUEsQ0FBQ0Qsd0RBQUdBO0FBQ1osZUFBZUssV0FBV0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakRDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLElBQUk7UUFDRixNQUFNLEVBQUVDLEtBQUksRUFBRUMsV0FBVSxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFckMsSUFBSSxDQUFDRCxZQUFZO1lBQ2ZKLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxLQUFLO1lBQ1A7UUFDRixDQUFDO1FBRUQsTUFBTUMsUUFBUWQsdURBQUdBLENBQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRU8sV0FBV00sUUFBUTtRQUNyRCxNQUFNQyxPQUFPO1lBQ1gsR0FBR1IsSUFBSTtRQUNUO1FBRUEsTUFBTVMsT0FBTyxNQUFNaEIsNkRBQVNBLENBQUNhLE9BQU9FO1FBQ3BDWCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxLQUFLLENBQUMsNkJBQTZCLEVBQUU7Z0JBQUNKO2FBQVcsQ0FBQyxDQUFDO1FBQ3JEO1FBQ0FILFFBQVFDLEdBQUcsQ0FBQyxDQUFDLDZCQUE2QixFQUFFRSxXQUFXLENBQUM7SUFDMUQsRUFBRSxPQUFPUyxPQUFPO1FBQ2RaLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUNXO1FBQzdDYixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxLQUFLLENBQUMseUJBQXlCLENBQUM7UUFDbEM7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaGVuZXJhLy4vcGFnZXMvYXBpL3VwZGF0ZXByb2R1Y3QuanM/ZjQzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gXCIuLi8uLi9jb25maWcvZmlyZWJhc2VcIjtcbmltcG9ydCB7XG4gIC8vIGNvbGxlY3Rpb24sXG4gIC8vIHF1ZXJ5LFxuICAvLyB3aGVyZSxcbiAgLy8gZ2V0RG9jcyxcbiAgZ2V0RmlyZXN0b3JlLFxuICBkb2MsXG4gIC8vIHNldERvYyxcbiAgdXBkYXRlRG9jLFxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUZXN0KHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgUHJvZHVjdFwiKTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEsIHByb2R1Y3RfaWQgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFwcm9kdWN0X2lkKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgIG1zZzogXCJQbGVhc2Ugc2VuZCBhIHZhbGlkIFByb2R1Y3QgSUQhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkYlJlZiA9IGRvYyhkYiwgYHByb2R1Y3RzYCwgcHJvZHVjdF9pZC50b1N0cmluZygpKTtcbiAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgLi4uZGF0YSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IHVwZGF0ZURvYyhkYlJlZiwgdGVtcCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgbXNnOiBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgcHJvZHVjdCAke1twcm9kdWN0X2lkXX1gLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgdXBkYXRlZCBwcm9kdWN0ICR7cHJvZHVjdF9pZH1gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIHVwZGF0aW5nIHByb2R1Y3QgXCIsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBtc2c6IGBFcnJvciBpbiB1cGRhdGluZyBwcm9kdWN0YCxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFwcCIsImdldEZpcmVzdG9yZSIsImRvYyIsInVwZGF0ZURvYyIsImRiIiwiY3JlYXRlVGVzdCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicHJvZHVjdF9pZCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwibXNnIiwiZGJSZWYiLCJ0b1N0cmluZyIsInRlbXAiLCJyZXNwIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateproduct.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateproduct.js"));
module.exports = __webpack_exports__;

})();