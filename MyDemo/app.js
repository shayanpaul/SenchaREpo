//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'AccountInfo': 'app'
}).setConfig({
    disableCaching: false
});
//</debug>

Ext.application({
    name: 'AccountInfo',
    models: ["accountInfoModel"],
    views: ['main'],
	controllers : ['mainMenuController'],
    stores:["accountInfoStore"],
	launch: function() {
        Ext.Viewport.add(Ext.create('AccountInfo.view.main'));
	    Ext.getStore("accountInfoStore").on('load', this.onStoreLoad, this);
    },
	onStoreLoad: function(self, records, success, operation)
    {
        console.log(self);
    }
});












