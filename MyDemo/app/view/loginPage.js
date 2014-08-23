Ext.define("AccountInfo.view.loginPage",{
	extend: "Ext.Panel",
	xtype:"loginPage",
	id:"loginPage",
	requires:[
		'Ext.TitleBar',
		'Ext.form.FieldSet',
        'Ext.field.Password'
	],
	config:{
		layout: 'vbox',
		items:[
			{
				flex: 1,
				items:[
					{
						xtype: 'fieldset',
						title: 'Loging Credential',
						instructions: 'Please enter the information above.',
						defaults: {
							labelWidth: '35%'
						},
						items: [
							{
								xtype         : 'textfield',
								name          : 'name',
								label         : 'Name',
								placeHolder   : 'Shayan Paul',
								autoCapitalize: true,
								required      : true,
								clearIcon     : true
							},
							{
								xtype         : 'passwordfield',
								name          : 'password',
								label         : 'Password',
								placeHolder   : 'Password',
								autoCapitalize: false,
								required      : true,
								clearIcon     : true
							}	
						]
					}
					
				]
			},
			{
				flex:1,
				items:[
					{
						xtype:'button',
						text: 'Login',
						ui: 'confirm',
						id: 'loginBtn',
						margin: '0 10%',
					}
				]
			}
		]
	}
});