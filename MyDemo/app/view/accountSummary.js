Ext.define("AccountInfo.view.accountSummary",{
	extend : 'Ext.Container',
	id:"accountSummaryScreen",
      required:["AccountInfo.model.accountInfoModel"],
	config : {
            layout: 'vbox',
            store: 'accountInfoStore',
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
                         //html:'<div class="accountInfoTable"><table><tr><th>Account No.</th><th>12345678912345</th></tr><tr><td>Available Balance</td><td class="ammountTxt">21,225.21</td></tr><tr><td>Branch</td><td>Champadali More</td></tr><tr><td>Name</td><td>Shayan Paul</td></tr><tr><td>Currency</td><td>INR</td></tr></table>'
                         tpl: Ext.create('Ext.XTemplate',
                                 '<div class="accountInfoTable">',
                                 '<table>',
                                 '<tr>',
                                 '<th>Account No.</th>',
                                 '<th>{accountNumber}</th>',
                                 '</tr>',
                                 '<tr>',
                                 '<td>Available Balance</td>',
                                 '<td class="ammountTxt">{amount}</td>',
                                 '</tr>',
                                 '<tr>',
                                 '<td>Branch</td>',
                                 '<td>{branchName}</td>',
                                 '</tr>',
                                 '<tr>',
                                 '<td>Name</td>',
                                 '<td>{firstName} {lastName}</td>',
                                 '</tr>',
                                 '<tr>',
                                 '<td>Currency</td>',
                                 '<td>{currency}</td>',
                                 '</tr>',
                                 '</table>'
                          ),
                          data: [
                                    {
                                       accountNumber: "12345678912345",
                                       firstName: "Shayan",
                                       lastName: "Paul",
                                       currency: "INR",
                                       branchName: "Champadali More",
                                       amount: "21,225.21"
                                    }
                                 ]
            	}
            ]
	}
});

/*var getData = function(store) {
    var data = [];

    store.each(function(record) {
        data.push(record.getData());
    });

    return data;
};*/