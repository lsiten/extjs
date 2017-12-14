/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Role", {
	extend: "Ext.data.Store",
	alias: "store.role",
	
	model: "App.model.role.Role",
	proxy: {
		type: "ajax",
		// url: "data/role.json", //模拟后台访问地址
		url: AppConfigs.url.base + AppConfigs.url.urls.rolesList+"?accessToken=test", //模拟后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		},
		extractResponseData: function(res){
			var data = Mock.mock(JSON.parse(res.responseText));
			return data;
		}
	}
});