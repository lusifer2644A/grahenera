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
exports.id = "pages/api/factory/checkSerial";
exports.ids = ["pages/api/factory/checkSerial"];
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

/***/ "(api)/./pages/api/factory/checkSerial.js":
/*!******************************************!*\
  !*** ./pages/api/factory/checkSerial.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ func)\n/* harmony export */ });\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/firebase */ \"(api)/./config/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function func(req, res) {\n    const serial_no = req.body.serial_no;\n    console.log(\"Checking Serial\", serial_no);\n    try {\n        const dbRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, `product_registration`, serial_no);\n        const snap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(dbRef);\n        const data = snap.data();\n        if (!data) {\n            return res.status(200).json({\n                msg: `Serial Number not found`,\n                status: 0\n            });\n        }\n        res.status(200).json({\n            msg: `Successfully fetched serial number`,\n            status: 1,\n            data: data\n        });\n        console.log(`Successfully fetched serial number`, data);\n    } catch (error) {\n        console.log(\"Error while fetching serial ids\", error);\n        res.status(500).json({\n            msg: `Error in fetching serial ids`\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmFjdG9yeS9jaGVja1NlcmlhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFXZjtBQUU1QixNQUFNSSxLQUFLSCxnRUFBWUEsQ0FBQ0Qsd0RBQUdBO0FBQ1osZUFBZUssS0FBS0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0MsTUFBTUMsWUFBWUYsSUFBSUcsSUFBSSxDQUFDRCxTQUFTO0lBQ3BDRSxRQUFRQyxHQUFHLENBQUMsbUJBQW1CSDtJQUMvQixJQUFJO1FBQ0YsTUFBTUksUUFBUVYsdURBQUdBLENBQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFSTtRQUU5QyxNQUFNSyxPQUFPLE1BQU1WLDBEQUFNQSxDQUFDUztRQUMxQixNQUFNRSxPQUFPRCxLQUFLQyxJQUFJO1FBRXRCLElBQUksQ0FBQ0EsTUFBTTtZQUNULE9BQU9QLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQzFCQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7Z0JBQzlCRixRQUFRO1lBQ1Y7UUFDRixDQUFDO1FBRURSLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQztZQUN6Q0YsUUFBUTtZQUNSRCxNQUFNQTtRQUNSO1FBQ0FKLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLEVBQUVHO0lBQ3BELEVBQUUsT0FBT0ksT0FBTztRQUNkUixRQUFRQyxHQUFHLENBQUMsbUNBQW1DTztRQUMvQ1gsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsS0FBSyxDQUFDLDRCQUE0QixDQUFDO1FBQ3JDO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhlbmVyYS8uL3BhZ2VzL2FwaS9mYWN0b3J5L2NoZWNrU2VyaWFsLmpzPzkwMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2ZpcmViYXNlXCI7XG5pbXBvcnQge1xuICAvLyBjb2xsZWN0aW9uLFxuICAvLyBxdWVyeSxcbiAgLy8gd2hlcmUsXG4gIC8vIGdldERvY3MsXG4gIGdldEZpcmVzdG9yZSxcbiAgZG9jLFxuICBnZXREb2MsXG4gIC8vIHNldERvYyxcbiAgLy8gd3JpdGVCYXRjaCxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZnVuYyhyZXEsIHJlcykge1xuICBjb25zdCBzZXJpYWxfbm8gPSByZXEuYm9keS5zZXJpYWxfbm87XG4gIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgU2VyaWFsXCIsIHNlcmlhbF9ubyk7XG4gIHRyeSB7XG4gICAgY29uc3QgZGJSZWYgPSBkb2MoZGIsIGBwcm9kdWN0X3JlZ2lzdHJhdGlvbmAsIHNlcmlhbF9ubyk7XG5cbiAgICBjb25zdCBzbmFwID0gYXdhaXQgZ2V0RG9jKGRiUmVmKTtcbiAgICBjb25zdCBkYXRhID0gc25hcC5kYXRhKCk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIG1zZzogYFNlcmlhbCBOdW1iZXIgbm90IGZvdW5kYCxcbiAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgbXNnOiBgU3VjY2Vzc2Z1bGx5IGZldGNoZWQgc2VyaWFsIG51bWJlcmAsXG4gICAgICBzdGF0dXM6IDEsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgZmV0Y2hlZCBzZXJpYWwgbnVtYmVyYCwgZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBmZXRjaGluZyBzZXJpYWwgaWRzXCIsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBtc2c6IGBFcnJvciBpbiBmZXRjaGluZyBzZXJpYWwgaWRzYCxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFwcCIsImdldEZpcmVzdG9yZSIsImRvYyIsImdldERvYyIsImRiIiwiZnVuYyIsInJlcSIsInJlcyIsInNlcmlhbF9ubyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZGJSZWYiLCJzbmFwIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJtc2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/factory/checkSerial.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/factory/checkSerial.js"));
module.exports = __webpack_exports__;

})();