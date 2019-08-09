module.exports={
    'verify the cursor is on username feild': ''+function (client){

client
        .url("http://newtours.demoaut.com/")
        .waitForElementVisible("input[name='userName']",5000)
        .click("input[name='userName']")
        .assert.elementPresent("input[name='userName']:focus")
        .end()
    },


    'verify the password is avaliable ': ''+function (client){

        client
                .url("http://newtours.demoaut.com/")
                .assert.elementPresent("input[name='password']")
                .end()
            },

'verify the login button is avaliable': function (client){
client
    .url("http://newtours.demoaut.com/")
                .assert.elementPresent("input[name='login']")
                .end()
},

'verify the avalibility of the Register link' :""+function(client){
    client
    .url("http://newtours.demoaut.com/")
    .waitForElementVisible(".mouseOut a:first-child")
    .assert.containsText(".mouseOut a:first-child",'REGISTER')
},
'verify the tab functionality is working':function (client){
    client
    .url("http://newtours.demoaut.com/")
    .click("input[name='userName']")
    .keys(client.Keys.TAB)
    .assert.elementPresent("input[name='password']:focus")
    .keys(client.keys.TAB)
    .assert.elementPresent("input[name='login']:focus")
    .end()

}

}