/*
 * 导航菜单
 */

Ext.define("App.view.main.Nav", {
	extend: "Ext.tree.Panel",
	xtype: "nav",
	id: "nav",
	
	initComponent: function() {
		//导航菜单Store
		var navStore = Ext.create("Ext.data.TreeStore", {
			model: "Ext.data.TreeModel",
			proxy: {
				type: "ajax",
				reader: "json",
				url: "data/nav.json"
			}
		});
		
		Ext.apply(this, {
			title: "导航菜单",
			collapsible: true,
			autoScroll: true,
			margin: "0 5 0 5",
			width: 225,
			border: true,
			rootVisible: false,
			store: navStore,
			listeners: {
				itemclick: "onMenuClick"
			}
		});
		this.callParent(arguments);
	}
});
