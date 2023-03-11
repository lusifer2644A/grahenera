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
exports.id = "pages/api/addproduct";
exports.ids = ["pages/api/addproduct"];
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

/***/ "(api)/./pages/api/addproduct.js":
/*!*********************************!*\
  !*** ./pages/api/addproduct.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTest)\n/* harmony export */ });\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/firebase */ \"(api)/./config/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function createTest(req, res) {\n    console.log(\"Adding Product\");\n    try {\n        const id = Math.floor(Math.random() * 1000000000);\n        const dbRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, `products`, id.toString());\n        const firebase_data = {\n            ...req.body,\n            id\n        };\n        const response = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(dbRef, firebase_data);\n        res.status(200).json({\n            msg: `Successfully Added Product ${id}`\n        });\n        console.log(`Successfully Added Product ${id}`);\n    } catch (error) {\n        console.log(\"Error while Added Product\", error);\n        res.status(500).json({\n            msg: `Error in Added Product`\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFTWjtBQUU1QixNQUFNSSxLQUFLSCxnRUFBWUEsQ0FBQ0Qsd0RBQUdBO0FBQ1osZUFBZUssV0FBV0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakRDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLElBQUk7UUFDRixNQUFNQyxLQUFLQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztRQUN0QyxNQUFNQyxRQUFRWix1REFBR0EsQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFTSxHQUFHSyxRQUFRO1FBQzdDLE1BQU1DLGdCQUFnQjtZQUNwQixHQUFHVixJQUFJVyxJQUFJO1lBQ1hQO1FBQ0Y7UUFFQSxNQUFNUSxXQUFXLE1BQU1mLDBEQUFNQSxDQUFDVyxPQUFPRTtRQUNyQ1QsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsS0FBSyxDQUFDLDJCQUEyQixFQUFFWCxHQUFHLENBQUM7UUFDekM7UUFDQUYsUUFBUUMsR0FBRyxDQUFDLENBQUMsMkJBQTJCLEVBQUVDLEdBQUcsQ0FBQztJQUNoRCxFQUFFLE9BQU9ZLE9BQU87UUFDZGQsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QmE7UUFDekNmLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztRQUMvQjtJQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXBoZW5lcmEvLi9wYWdlcy9hcGkvYWRkcHJvZHVjdC5qcz85NmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHAgZnJvbSBcIi4uLy4uL2NvbmZpZy9maXJlYmFzZVwiO1xuaW1wb3J0IHtcbiAgLy8gY29sbGVjdGlvbixcbiAgLy8gcXVlcnksXG4gIC8vIHdoZXJlLFxuICAvLyBnZXREb2NzLFxuICBnZXRGaXJlc3RvcmUsXG4gIGRvYyxcbiAgc2V0RG9jLFxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUZXN0KHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwiQWRkaW5nIFByb2R1Y3RcIik7XG4gIHRyeSB7XG4gICAgY29uc3QgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICBjb25zdCBkYlJlZiA9IGRvYyhkYiwgYHByb2R1Y3RzYCwgaWQudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZmlyZWJhc2VfZGF0YSA9IHtcbiAgICAgIC4uLnJlcS5ib2R5LFxuICAgICAgaWQsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2V0RG9jKGRiUmVmLCBmaXJlYmFzZV9kYXRhKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBtc2c6IGBTdWNjZXNzZnVsbHkgQWRkZWQgUHJvZHVjdCAke2lkfWAsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBBZGRlZCBQcm9kdWN0ICR7aWR9YCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBBZGRlZCBQcm9kdWN0XCIsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBtc2c6IGBFcnJvciBpbiBBZGRlZCBQcm9kdWN0YCxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFwcCIsImdldEZpcmVzdG9yZSIsImRvYyIsInNldERvYyIsImRiIiwiY3JlYXRlVGVzdCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRiUmVmIiwidG9TdHJpbmciLCJmaXJlYmFzZV9kYXRhIiwiYm9keSIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsIm1zZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addproduct.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addproduct.js"));
module.exports = __webpack_exports__;

})();