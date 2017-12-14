/* 
 * 数据模型 - 角色
 */

Ext.define("App.model.role.Role", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "roleName"},
	    {name: "roleDesc"}
	]
});