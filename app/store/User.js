/* 
 * 数据存储 - 用户
 */

Ext.define("App.store.User", {
	extend: "Ext.data.Store",
	alias: "store.user",
	
	model: "App.model.user.User",
	proxy: {
		type: "ajax",
		// url: "data/user.json", //模拟后台访问地址
		url: AppConfigs.url.base + AppConfigs.url.urls.userList+"?accessToken=test", //模拟后台访问地址		
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