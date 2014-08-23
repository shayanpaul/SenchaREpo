Ext.define('AccountInfo.model.accountInfoModel', {
	extend: 'Ext.data.Model',
	required:["AccountInfo.store.accountInfoStore"],
	config: {
		fields : [
			{name:'accountNumber', type: 'string'},
			{name: 'firstName', type: 'string'},
			{name: 'lastName', type: 'string'},
			{name: 'currency', type: 'string'},
			{name: 'branchName', type: 'string'},
			{name: 'amount', type: 'string'}
		]
    }

});