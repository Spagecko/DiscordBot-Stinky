const Discord = require('discord.js');
const bot = new Discord.Client();
const mySql = require("mysql");
const firebase = require("firebase");

const TOKEN = "NDc1NzU3NDg4MzY5ODI3ODQw.Dkjxyg.cpjeSpsxCC049rNw3g-BMRPhgqM";

var config = {
   apiKey: "AIzaSyAIi2vuwZNbzrili17ggggE6xVL1C9Pamo",
   authDomain: "ratbase-fe1c2.firebaseapp.com",
   databaseURL: "https://ratbase-fe1c2.firebaseio.com",
   projectId: "ratbase-fe1c2",
   storageBucket: "ratbase-fe1c2.appspot.com",
   messagingSenderId: "971807440412"
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
