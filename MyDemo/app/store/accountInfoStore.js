Ext.define('AccountInfo.store.accountInfoStore', {
    extend: 'Ext.data.Store',
    required:["AccountInfo.model.accountInfoModel"],
    config: {
    	storeId:"accountInfoStore",
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