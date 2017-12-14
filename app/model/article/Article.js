/* 
 * 数据模型 - 用户
 */

Ext.define("App.model.article.Article", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "title"},
	    {name: "click"},
	    {name: "state"}
	]
});