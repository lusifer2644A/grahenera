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
exports.id = "pages/api/factory/setserials";
exports.ids = ["pages/api/factory/setserials"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

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

/***/ "(api)/./pages/api/factory/setserials.js":
/*!*****************************************!*\
  !*** ./pages/api/factory/setserials.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ func)\n/* harmony export */ });\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/firebase */ \"(api)/./config/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconst check_serial = async (serial_no)=>{\n    const dbRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, `product_registration`, serial_no);\n    const snap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(dbRef);\n    console.log(\"snap\", snap);\n    const data = snap.data();\n    if (!data) {\n        return false;\n    }\n    return true;\n};\nasync function func(req, res) {\n    console.log(\"Adding serials and date of products\");\n    try {\n        const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.writeBatch)(db);\n        const all_product_serials = req.body.data;\n        const product_id = req.body.product_id;\n        for (let x of all_product_serials){\n            // check if serial no is already present\n            const checkref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, `product_registration`, x.serial_no);\n            const snap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(checkref);\n            const data = snap.data();\n            if (data) {\n                res.status(400).json({\n                    msg: \"Serial mnumber already present. Please try again.\"\n                });\n            }\n            const dbRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, `product_registration`, x.serial_no);\n            batch.set(dbRef, x);\n        }\n        const resp = await batch.commit();\n        const count_products = all_product_serials.length;\n        const countRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, \"population_data\", \"product_count\");\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(countRef, {\n            [product_id]: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.increment)(count_products)\n        });\n        res.status(200).json({\n            msg: `Successfully Added all product serial ids`\n        });\n        console.log(`Successfully Added all product serial ids`);\n    } catch (error) {\n        console.log(\"Error while Added all product serial ids\", error);\n        res.status(500).json({\n            msg: `Error in Added all product serial ids`\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmFjdG9yeS9zZXRzZXJpYWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFZZjtBQUNGO0FBRTFCLE1BQU1RLEtBQUtQLGdFQUFZQSxDQUFDRCx3REFBR0E7QUFFM0IsTUFBTVMsZUFBZSxPQUFPQyxZQUFjO0lBQ3hDLE1BQU1DLFFBQVFULHVEQUFHQSxDQUFDTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRUU7SUFFOUMsTUFBTUUsT0FBTyxNQUFNTiwwREFBTUEsQ0FBQ0s7SUFDMUJFLFFBQVFDLEdBQUcsQ0FBQyxRQUFRRjtJQUNwQixNQUFNRyxPQUFPSCxLQUFLRyxJQUFJO0lBRXRCLElBQUksQ0FBQ0EsTUFBTTtRQUNULE9BQU8sS0FBSztJQUNkLENBQUM7SUFFRCxPQUFPLElBQUk7QUFDYjtBQUVlLGVBQWVDLEtBQUtDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzNDTCxRQUFRQyxHQUFHLENBQUM7SUFDWixJQUFJO1FBQ0YsTUFBTUssUUFBUWhCLDhEQUFVQSxDQUFDSztRQUV6QixNQUFNWSxzQkFBc0JILElBQUlJLElBQUksQ0FBQ04sSUFBSTtRQUN6QyxNQUFNTyxhQUFhTCxJQUFJSSxJQUFJLENBQUNDLFVBQVU7UUFFdEMsS0FBSyxJQUFJQyxLQUFLSCxvQkFBcUI7WUFDakMsd0NBQXdDO1lBQ3hDLE1BQU1JLFdBQVd0Qix1REFBR0EsQ0FBQ00sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUVlLEVBQUViLFNBQVM7WUFFNUQsTUFBTUUsT0FBTyxNQUFNTiwwREFBTUEsQ0FBQ2tCO1lBQzFCLE1BQU1ULE9BQU9ILEtBQUtHLElBQUk7WUFFdEIsSUFBSUEsTUFBTTtnQkFDUkcsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFDbkJDLEtBQUs7Z0JBQ1A7WUFDRixDQUFDO1lBRUQsTUFBTWhCLFFBQVFULHVEQUFHQSxDQUFDTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRWUsRUFBRWIsU0FBUztZQUN6RFMsTUFBTVMsR0FBRyxDQUFDakIsT0FBT1k7UUFDbkI7UUFFQSxNQUFNTSxPQUFPLE1BQU1WLE1BQU1XLE1BQU07UUFFL0IsTUFBTUMsaUJBQWlCWCxvQkFBb0JZLE1BQU07UUFFakQsTUFBTUMsV0FBVy9CLHVEQUFHQSxDQUFDTSxJQUFJLG1CQUFtQjtRQUM1QyxNQUFNSiw2REFBU0EsQ0FBQzZCLFVBQVU7WUFDeEIsQ0FBQ1gsV0FBVyxFQUFFakIsNkRBQVNBLENBQUMwQjtRQUMxQjtRQUVBYixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxLQUFLLENBQUMseUNBQXlDLENBQUM7UUFDbEQ7UUFDQWQsUUFBUUMsR0FBRyxDQUFDLENBQUMseUNBQXlDLENBQUM7SUFDekQsRUFBRSxPQUFPb0IsT0FBTztRQUNkckIsUUFBUUMsR0FBRyxDQUFDLDRDQUE0Q29CO1FBQ3hEaEIsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1FBQzlDO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhlbmVyYS8uL3BhZ2VzL2FwaS9mYWN0b3J5L3NldHNlcmlhbHMuanM/MjBhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gXCIuLi8uLi8uLi9jb25maWcvZmlyZWJhc2VcIjtcbmltcG9ydCB7XG4gIC8vIGNvbGxlY3Rpb24sXG4gIC8vIHF1ZXJ5LFxuICAvLyB3aGVyZSxcbiAgLy8gZ2V0RG9jcyxcbiAgZ2V0RmlyZXN0b3JlLFxuICBkb2MsXG4gIHdyaXRlQmF0Y2gsXG4gIHVwZGF0ZURvYyxcbiAgaW5jcmVtZW50LFxuICBnZXREb2MsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcblxuY29uc3QgY2hlY2tfc2VyaWFsID0gYXN5bmMgKHNlcmlhbF9ubykgPT4ge1xuICBjb25zdCBkYlJlZiA9IGRvYyhkYiwgYHByb2R1Y3RfcmVnaXN0cmF0aW9uYCwgc2VyaWFsX25vKTtcblxuICBjb25zdCBzbmFwID0gYXdhaXQgZ2V0RG9jKGRiUmVmKTtcbiAgY29uc29sZS5sb2coXCJzbmFwXCIsIHNuYXApO1xuICBjb25zdCBkYXRhID0gc25hcC5kYXRhKCk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmdW5jKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwiQWRkaW5nIHNlcmlhbHMgYW5kIGRhdGUgb2YgcHJvZHVjdHNcIik7XG4gIHRyeSB7XG4gICAgY29uc3QgYmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcblxuICAgIGNvbnN0IGFsbF9wcm9kdWN0X3NlcmlhbHMgPSByZXEuYm9keS5kYXRhO1xuICAgIGNvbnN0IHByb2R1Y3RfaWQgPSByZXEuYm9keS5wcm9kdWN0X2lkO1xuXG4gICAgZm9yIChsZXQgeCBvZiBhbGxfcHJvZHVjdF9zZXJpYWxzKSB7XG4gICAgICAvLyBjaGVjayBpZiBzZXJpYWwgbm8gaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgICBjb25zdCBjaGVja3JlZiA9IGRvYyhkYiwgYHByb2R1Y3RfcmVnaXN0cmF0aW9uYCwgeC5zZXJpYWxfbm8pO1xuXG4gICAgICBjb25zdCBzbmFwID0gYXdhaXQgZ2V0RG9jKGNoZWNrcmVmKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBzbmFwLmRhdGEoKTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICAgIG1zZzogXCJTZXJpYWwgbW51bWJlciBhbHJlYWR5IHByZXNlbnQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYlJlZiA9IGRvYyhkYiwgYHByb2R1Y3RfcmVnaXN0cmF0aW9uYCwgeC5zZXJpYWxfbm8pO1xuICAgICAgYmF0Y2guc2V0KGRiUmVmLCB4KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwID0gYXdhaXQgYmF0Y2guY29tbWl0KCk7XG5cbiAgICBjb25zdCBjb3VudF9wcm9kdWN0cyA9IGFsbF9wcm9kdWN0X3NlcmlhbHMubGVuZ3RoO1xuXG4gICAgY29uc3QgY291bnRSZWYgPSBkb2MoZGIsIFwicG9wdWxhdGlvbl9kYXRhXCIsIFwicHJvZHVjdF9jb3VudFwiKTtcbiAgICBhd2FpdCB1cGRhdGVEb2MoY291bnRSZWYsIHtcbiAgICAgIFtwcm9kdWN0X2lkXTogaW5jcmVtZW50KGNvdW50X3Byb2R1Y3RzKSxcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIG1zZzogYFN1Y2Nlc3NmdWxseSBBZGRlZCBhbGwgcHJvZHVjdCBzZXJpYWwgaWRzYCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IEFkZGVkIGFsbCBwcm9kdWN0IHNlcmlhbCBpZHNgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIEFkZGVkIGFsbCBwcm9kdWN0IHNlcmlhbCBpZHNcIiwgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgIG1zZzogYEVycm9yIGluIEFkZGVkIGFsbCBwcm9kdWN0IHNlcmlhbCBpZHNgLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYXBwIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwid3JpdGVCYXRjaCIsInVwZGF0ZURvYyIsImluY3JlbWVudCIsImdldERvYyIsImF4aW9zIiwiZGIiLCJjaGVja19zZXJpYWwiLCJzZXJpYWxfbm8iLCJkYlJlZiIsInNuYXAiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZ1bmMiLCJyZXEiLCJyZXMiLCJiYXRjaCIsImFsbF9wcm9kdWN0X3NlcmlhbHMiLCJib2R5IiwicHJvZHVjdF9pZCIsIngiLCJjaGVja3JlZiIsInN0YXR1cyIsImpzb24iLCJtc2ciLCJzZXQiLCJyZXNwIiwiY29tbWl0IiwiY291bnRfcHJvZHVjdHMiLCJsZW5ndGgiLCJjb3VudFJlZiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/factory/setserials.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/factory/setserials.js"));
module.exports = __webpack_exports__;

})();