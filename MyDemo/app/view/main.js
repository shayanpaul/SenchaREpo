Ext.define("AccountInfo.view.main",{
	extend: 'Ext.Panel',
	id:"mainView",
	requires:[
		"AccountInfo.view.loginPage",
		"AccountInfo.view.optionList",
		"AccountInfo.view.accountSummary"
	],
	config:{
		layout: {
			type:'card',
			animation:{
				type:'flip'
			}
		},
		items : [
				{
				 docked: 'top',
				 xtype: 'toolbar',
				 title: 'Welcome to Indiana Bank'
				},
				{
					xclass:'AccountInfo.view.loginPage'
				},
				{
					xclass:'AccountInfo.view.optionList'

				}
		]
	}
});