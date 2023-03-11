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
exports.id = "pages/api/allproducts";
exports.ids = ["pages/api/allproducts"];
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

/***/ "(api)/./pages/api/allproducts.js":
/*!**********************************!*\
  !*** ./pages/api/allproducts.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTestDetails)\n/* harmony export */ });\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/firebase */ \"(api)/./config/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function getTestDetails(req, res) {\n    console.log(\"Fetching all Products\");\n    try {\n        const dbRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, `products`);\n        const resp = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(dbRef);\n        console.log(\"Recieved all products\");\n        const entriesData = resp.docs.map((entry)=>({\n                id: entry.id,\n                ...entry.data()\n            }));\n        res.status(200).json({\n            msg: `Successfully Fetched Products`,\n            data: entriesData\n        });\n    } catch (error) {\n        console.log(error);\n        console.log(\"Error while fetching products!\");\n        res.status(500).json({\n            msg: \"Error while fetching products!\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxscHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBVVo7QUFFNUIsTUFBTVMsS0FBS0gsZ0VBQVlBLENBQUNOLHdEQUFHQTtBQUNaLGVBQWVVLGVBQWVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3JEQyxRQUFRQyxHQUFHLENBQUM7SUFDWixJQUFJO1FBQ0YsTUFBTUMsUUFBUWQsOERBQVVBLENBQUNRLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFdkMsTUFBTU8sT0FBTyxNQUFNWiwyREFBT0EsQ0FBQ1c7UUFFM0JGLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1HLGNBQWNELEtBQUtFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFFBQVc7Z0JBQzVDQyxJQUFJRCxNQUFNQyxFQUFFO2dCQUNaLEdBQUdELE1BQU1FLElBQUksRUFBRTtZQUNqQjtRQUVBVixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7WUFDcENILE1BQU1MO1FBQ1I7SUFDRixFQUFFLE9BQU9TLE9BQU87UUFDZGIsUUFBUUMsR0FBRyxDQUFDWTtRQUNaYixRQUFRQyxHQUFHLENBQUM7UUFDWkYsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsS0FBSztRQUNQO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhlbmVyYS8uL3BhZ2VzL2FwaS9hbGxwcm9kdWN0cy5qcz9kZDEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHAgZnJvbSBcIi4uLy4uL2NvbmZpZy9maXJlYmFzZVwiO1xuaW1wb3J0IHtcbiAgY29sbGVjdGlvbixcbiAgcXVlcnksXG4gIHdoZXJlLFxuICBnZXREb2NzLFxuICBzZXREb2MsXG4gIGdldEZpcmVzdG9yZSxcbiAgZG9jLFxuICBnZXREb2MsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFRlc3REZXRhaWxzKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgYWxsIFByb2R1Y3RzXCIpO1xuICB0cnkge1xuICAgIGNvbnN0IGRiUmVmID0gY29sbGVjdGlvbihkYiwgYHByb2R1Y3RzYCk7XG5cbiAgICBjb25zdCByZXNwID0gYXdhaXQgZ2V0RG9jcyhkYlJlZik7XG5cbiAgICBjb25zb2xlLmxvZyhcIlJlY2lldmVkIGFsbCBwcm9kdWN0c1wiKTtcbiAgICBjb25zdCBlbnRyaWVzRGF0YSA9IHJlc3AuZG9jcy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgaWQ6IGVudHJ5LmlkLFxuICAgICAgLi4uZW50cnkuZGF0YSgpLFxuICAgIH0pKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIG1zZzogYFN1Y2Nlc3NmdWxseSBGZXRjaGVkIFByb2R1Y3RzYCxcbiAgICAgIGRhdGE6IGVudHJpZXNEYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGZldGNoaW5nIHByb2R1Y3RzIVwiKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBtc2c6IFwiRXJyb3Igd2hpbGUgZmV0Y2hpbmcgcHJvZHVjdHMhXCIsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhcHAiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJzZXREb2MiLCJnZXRGaXJlc3RvcmUiLCJkb2MiLCJnZXREb2MiLCJkYiIsImdldFRlc3REZXRhaWxzIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRiUmVmIiwicmVzcCIsImVudHJpZXNEYXRhIiwiZG9jcyIsIm1hcCIsImVudHJ5IiwiaWQiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsIm1zZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/allproducts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/allproducts.js"));
module.exports = __webpack_exports__;

})();