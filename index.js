const wifipassword = require('wifi-password');
wifipassword().then(password => {
    console.log(password);
})