webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _homeController = __webpack_require__(8);

var _homeController2 = _interopRequireDefault(_homeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Ext.application({
    name: 'studentApp',
    launch: function launch() {
        Ext.create('Ext.container.Viewport', {
            items: {
                html: 'My App'
            }
        });
    }
});

/***/ })

})