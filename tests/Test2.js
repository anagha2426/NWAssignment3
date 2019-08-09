module.exports={
    'verify the cursor is on username feild':''+ function (client){
        client
        .url("http://localhost:8888/login")
        .waitForElementVisible("input[name='user_name']",5000)
        .pause(5000)
        .click("input[name='user_name']")
        .assert.elementPresent("input[name='user_name']:focus")
        .end();
    },

    'verify the username,password and login button  feilds is avaliable':''+ function(client){
        client
        .url("http://localhost:8888/login")
        .pause(5000)
        .assert.elementPresent("input[name='user_name']")
        .assert.elementPresent("input[name='password']")
        .assert.elementPresent("input[type='submit']")
        .assert.containsText('h3', 'Input user name and password to login.')
    },

    'verify whether the correct messages are displayed for invalid un and pass': ''+function(client){


        client
        .url("http://localhost:8888/login")
        .pause(5000)
        .waitForElementVisible("input[name='user_name']")
        .click("input[name='user_name']")
        .setValue("input[name='user_name']","")
        .waitForElementVisible("input[name='password']")
        .click("input[type='submit']")
        .assert.containsText('#errormessage','User name or password is not correct.')

    },




    'verify tab functionality is working' : ''+function(client){
        client

        .url('http://localhost:8888/login')
        .pause(5000)
        .click("input[name='user_name']")
        .keys(client.Keys.TAB)
        .assert.elementPresent('input[name=password]:focus')
    },
    'Verify that User is able to Login with active credentials' : ''+function(client){

        client
        .url('http://localhost:8888/login')

       // .click("input[name='user_name']")
        .setValue("input[name='user_name']","jerry")
        .setValue('input[name=password]','dev2qa.com')
        .click("input[type='submit']")
        .pause(2000)
        .assert.containsText('font','User name and password is correct, login success.')
    },
    
    'Verify that clicking on browser back button after successful login should not take User to log out mode': function(client){
        
        client
        .url('http://localhost:8888/login')
        .setValue("input[name='user_name']","jerry")
        .setValue('input[name=password]','dev2qa.com')
        .click("input[type='submit']")
        .pause(2000)
        .assert.containsText('font','User name and password is correct, login success.')
        .keys(client.back())
        .pause(1000)
        .assert.containsText('h3','Input user name and password to login.')
    }


        

    
    

    }



