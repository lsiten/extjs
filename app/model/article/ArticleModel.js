/*
 * 视图模型 - 用户管理
 */

Ext.define("App.model.article.ArticleModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.article",
	requires: ["App.store.Article"],
	
	data: {},
	
	stores: {
		article: {
			type: "article",
			pageSize: 10,
			autoLoad: true
		},
		state: Ext.create("Ext.data.Store", {
			fields: ["stateId", "stateName"],
			data: [
				["0", "已发布"],
				["1", "正在审核"]
			]
		})
	}
});
