webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _homeController = __webpack_require__(8);

var _homeController2 = _interopRequireDefault(_homeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        renderTo: "helloWorldPanel",
        height: 200,
        width: 600,
        title: 'Hello world',
        html: 'First Ext JS Hello World'
    });
});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Ext.define(studentApp.view.StudentDeatilsGrid, {
   extend: 'Ext.grid.GridPanel',
   id: 'studentsDetailsGrid',
   store: 'StudentsDetailsGridStore',
   renderTo: 'studentsDetailsRenderDiv',
   layout: 'fit',
   columns: [{
      text: 'Student Name',
      dataIndex: 'studentName'
   }, {
      text: 'ID',
      dataIndex: 'studentId'
   }, {
      text: 'Department',
      dataIndex: 'department'
   }]
});

/***/ })

})