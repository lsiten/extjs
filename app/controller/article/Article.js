/*
 * 视图控制器 - 文章列表
 */

Ext.define("App.controller.article.Article", {
	extend: "Ext.app.ViewController",
	alias: "controller.article",
	
	//初始化
	init: function() {
		this.st = Ext.getCmp("articleGrid").getStore(); //通过Component获取Store
	},
	
	//搜索
	search: function() {
		this.getViewModel().getStore("article").reload();
	},
	//删除
	del: function(grid, rowIndex, colIndex) {
		var msg = "确认删除文章：" + grid.getStore().getAt(rowIndex).get("title") + " ？";
		Ext.Msg.confirm("确认", msg, function(res) {
			if(res == "yes") {
				grid.getStore().removeAt(rowIndex);
			}
		});
	},
	
	//批量删除
	batchDel: function() {
		var grid = Ext.getCmp("articleGrid");
		if(grid.getSelectionModel().hasSelection()) {
			var st = grid.getStore();
			var recs = grid.getSelectionModel().getSelection();
			var names = "";
			for(var i=0;i<recs.length;i++) {
				names += recs[i].data.title+"<br />";
			}
			Ext.Msg.confirm("确认", "确认删除以下文章？<br />"+names, function(res) {
				if(res=="yes") {
					st.remove(recs);
				}
			});
		}else {
			Ext.Msg.alert("信息", "请选择要删除的文章！");
		} 
	}
});