var getData = function(storeName) {
    var data = [];
    //var store = Ext.getStore(storeName);
    /*console.log(store);
    store.each(function(record) {
        data.push(record.getData());
    });

    return data;*/
};
Ext.define("AccountInfo.view.accountSummary",{
	extend : 'Ext.Container',
	id:"accountSummaryScreen",
   required:["AccountInfo.model.accountInfoModel"],
	config : {
            layout: 'vbox',
            items:[
            	{
            		html: '<div class="x-list-normal"><div class="x-list-header" style="position: relative;">Account Summary</div></div>'
            	},
            	{
            		html: '<div class="savingTxt">SAVINGS</div>'
            	},
            	{
            		       xtype: 'component',
                         id: "accountDetailsTbl",
                         data: getData(),
                         //html:'<div class="accountInfoTable"><table><tr><th>Account No.</th><th>12345678912345</th></tr><tr><td>Available Balance</td><td class="ammountTxt">21,225.21</td></tr><tr><td>Branch</td><td>Champadali More</td></tr><tr><td>Name</td><td>Shayan Paul</td></tr><tr><td>Currency</td><td>INR</td></tr></table>'
                         tpl: '<tpl for=".">\
                                 <div class="accountInfoTable">\
                                 <table>\
                                 <tr>\
                                 <th>Account No.</th>\
                                 <th>{accountNumber}</th>\
                                 </tr>\
                                 <tr>\
                                 <td>Available Balance</td>\
                                 <td class="ammountTxt">{amount}</td>\
                                 </tr>\
                                 <tr>\
                                 <td>Branch</td>\
                                 <td>{branchName}</td>\
                                 </tr>\
                                 <tr>\
                                 <td>Name</td>\
                                 <td>{firstName} {lastName}</td>\
                                 </tr>\
                                 <tr>\
                                 <td>Currency</td>\
                                 <td>{currency}</td>\
                                 </tr>\
                                 </table>\
                                 </tpl>'
            	}
            ]
	}
});