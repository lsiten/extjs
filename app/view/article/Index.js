Ext.define("App.view.article.Index",{
    extend: "Ext.grid.Panel",
    xtype: "articleIndex",
    id: "articleGrid",
    requires: ["App.model.article.ArticleModel", "App.controller.article.Article"],
	viewModel: {
		type: "article"
	},
	controller: "article",
	
	bind: {
		store: "{article}"
    },
    initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "文章列表",
			border: true,
			columns: [{
				text: "文章Id",
				dataIndex: "id",
				hidden: true
			}, {
				text: "文章名称",
				dataIndex: "title",
				flex: 1
			}, {
				text: "点击量",
				dataIndex: "click",
				align:"center",
				flex: 0.5
			}, {
				text: "状态",
				dataIndex: "state",
				flex: 0.3,
				align:"center",
				renderer: function(val) {
					if(val=="0" || val=="已发布") {
						return "<span style='color:green;'>已发布</span>";
					}else if(val=="1" || val=="正在审核") {
						return "<span style='color:red;'>正在审核...</span>";
					}
					return val;
				}
			},{
				xtype: "actioncolumn",
				text: "操作",
				width: 100,
				align: "center",
				sortable: false,
				menuDisabled: true,
				items: [{
					iconCls: "opt-delete",
					tooltip: "删除",
					handler: "del"
				}]
			}],
			tbar: [{
				xtype: "textfield",
				maxWidth: 205,
				fieldLabel: "标题",
				labelWidth: 30
			}, {
				xtype: "combobox",
				maxWidth: 180,
				fieldLabel: "状态",
				labelWidth: 35,
				bind: {
					store: "{state}"
				},
				displayField: "stateName",
				valueField: "stateId",
				queryMode: "local"
			}, {
				xtype: "button",
				text: "搜索",
				glyph: 0xf002,
				handler: "search"
			}, "->", "->",{
				xtype: "button",
				text: "批量删除",
				glyph: 0xf00d,
				handler: "batchDel"
			}],
			bbar: {
				xtype: "pagingtoolbar",
				bind: {
					store: "{article}"
				},
				displayInfo: true
			},
			listeners: {
				itemclick: function(view, record, item, index, e, eOpts) {}
			}
		});
		this.callParent(arguments);
	}
})