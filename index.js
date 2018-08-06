const Discord = require('discord.js');
const bot = new Discord.Client();
const mySql = require("mysql");
const firebase = require("firebase");

//const TOKEN = [REDACTED];

var config = {
     // [REDACTED]
 };
 firebase.initializeApp(config);
 var database = firebase.database();
 //var storage = firebase.storage();
 //var refS = storage.ref('index');
 var ref = database.ref('index');
 ref.on('value',gotData, errData);


 function gotData(data)
 {
   //console.log(data.val());
   var imgUrls = data.val()
   var keys  = Object.keys(imgUrls);
   console.log(keys); // all indexs
   console.log(keys.length);
   for(var i = 1; i < keys.length ; i++)
   {
     var k = keys[i];
     var intials = imgUrls[k].intials;
     var imgurl = imgUrls[k].imgurl;
     console.log(imgUrls[i]);

   }
 }


 function errData(err){
   console.log('Error!');
   console.log(err);
 }




bot.on('message', function(message){
  if (message.content === '.rat') {
      ref.on('value',randomData, errData);
      function randomData(data)
      {
        var imgUrls1 = data.val()
        var keys1  = Object.keys(imgUrls1);
        var randIndex = keys1.length
        var randRat = Math.floor((Math.random() * randIndex) + 1);
        console.log(randRat);
        message.channel.sendMessage(imgUrls1[randRat]);

      }



  }
});




bot.on('ready', function() {
  console.log('reeady');
})
bot.login(TOKEN);
