Ext.define("AccountInfo.controller.mainMenuController",{
	extend	: 'Ext.app.Controller',
	config : {
		refs: {
			loginBtn : '#loginBtn',
			mainList : '#mainList'
		},
		control : {
			loginBtn : {
				tap : 'doLogin'
			},
			mainList : {
				itemtap : 'onOptionTap'
			}
		}
	},
	doLogin : function(){
		var mainScreen = Ext.getCmp('mainView');

        if (mainScreen.getActiveItem() == Ext.getCmp('loginPage')) {
            mainScreen.setActiveItem(Ext.getCmp('mainList'));
        } else {
            mainScreen.setActiveItem(Ext.getCmp('loginPage'));
        }
	},
	onOptionTap : function(dataview, index, target, record){
		Ext.getCmp('mainView').getLayout().setAnimation('slide');
		Ext.getCmp('mainView').setActiveItem({
			xclass : 'AccountInfo.view.accountSummary'	
		});
		/*Ext.getCmp("accountDetailsTbl").setData({
		        "firstName": "Shayan",
		        "lastName": "Paul",
		        "currency": "INR",
		        "branchName": "Champadali More",
		        "amount": "21,225.21",
		        "accountNumber": "12345678912345"
    });*/
	}
});