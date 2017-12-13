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
            layout: 'border',
            items: [{
                region: 'north',
                html: '<h1 class="x-panel-header">extjs实例</h1>',
                border: false,
                margins: '0 0 5 0'
            }, {
                region: 'west',
                collapsible: true,
                title: '<2>导航栏</h2>',
                width: 150
                // 这里通常可以使用 TreePanel 或者 AccordionLayout布局的导航菜单
            }, {
                region: 'south',
                title: '底部内容',
                collapsible: true,
                html: '测试底部内容',
                split: true,
                height: 100,
                minHeight: 100
            }, {
                region: 'east',
                title: '右边内容',
                collapsible: true,
                split: true,
                width: 150
            }, {
                region: 'center',
                xtype: 'tabpanel', // TabPanel本身没有title属性
                activeTab: 0, // 配置默认显示的激活面板
                items: [{
                    title: '选项卡1',
                    html: '选项卡1'
                }, {
                    title: '选项卡2',
                    html: '选项卡2'
                }, {
                    title: '选项卡3',
                    html: '选项卡3'
                }]
            }]
        });
    }
});

/***/ })

})