Ext.define('AccountInfo.store.accountInfoStore', {
    extend: 'Ext.data.Store',
    required:["AccountInfo.model.accountInfoModel"],
    config: {
    	model:'AccountInfo.model.accountInfoModel',
    	proxy: {
    		type:"ajax",
    		url:"data/users.json",
    		reader:{
    			type:"json",
    			rootProperty:"accountInfo"
    		}
    	},
        autoLoad:true
    }
});