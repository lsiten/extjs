/* 
 * 视图 - 首页
 */

Ext.define("App.view.desktop.Desktop", {
	extend: "Ext.panel.Panel",
	xtype: "desktop",
	requires: [
	    "App.view.desktop.Desktop",
	    "App.controller.desktop.Desktop"
	],
	viewModel: {type: "desktop"},
	controller: "desktop",
	
	title: "首页",
	border: true,
	layout: "border",
	
	initComponent: function() {
		Ext.apply(this, {
			items: []
		});
		this.callParent(arguments);
	}
});