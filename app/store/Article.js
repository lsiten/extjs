/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Article", {
	extend: "Ext.data.Store",
	alias: "store.article",
	
	model: "App.model.article.Article",
	proxy: {
		type: "ajax",
		// url: "data/role.json", //模拟后台访问地址
		url: AppConfigs.url.base + AppConfigs.url.urls.articleList+"?accessToken=test", //模拟后台访问地址
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