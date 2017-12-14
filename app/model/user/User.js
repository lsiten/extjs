/* 
 * 数据模型 - 用户
 */

Ext.define("App.model.user.User", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "userName"},
	    {name: "roleName"},
	    {name: "userState"},
	    {name: "remark"}
	]
});