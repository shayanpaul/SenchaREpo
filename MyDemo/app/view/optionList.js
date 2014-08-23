Ext.define("AccountInfo.view.optionList",{
	extend : 'Ext.dataview.List',
	id:"mainList",
	config : {
            itemTpl: new Ext.XTemplate(
            	'<tpl for=".">',
            		'<img src="{src}" style="height:40px; width:50px; float:left; margin: 0 10px 10px 0" />',
            		'<div style="padding-top:6px; font-size: 18px; color:#0c2982; font-weight:bold;">{title}</div>',
            	'</tpl>'
            ),
		    data: [
		        { title: 'Account Summary', src: 'http://localhost/MyDemo/resources/icons/accountIcon.png' },
		        { title: 'Statement Inquiry', src: 'http://localhost/MyDemo/resources/icons/statementIcon.png' },
		        { title: 'Open Fixed Deposit < Rs 1 Cr', src: 'http://localhost/MyDemo/resources/icons/fixed.png' },
		        { title: 'Open Recurring Deposit', src: 'http://localhost/MyDemo/resources/icons/recurring.png' },
		        { title: 'Stop Payment Request', src: 'http://localhost/MyDemo/resources/icons/stopPayment.png'},
				{ title: 'Bill Payment', src: 'http://localhost/MyDemo/resources/icons/billPayment.png'},
				{ title: 'Third Party Fund Transfer', src: 'http://localhost/MyDemo/resources/icons/thirdParty.png'}
		    ],
		    onItemDisclosure : true,
		    itemHeight: 70
	}
});