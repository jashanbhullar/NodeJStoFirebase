var firebase = require('firebase');

// npm install @google-cloud/storge --save
// get your kye (.json) file from Project Settings -> Service Accounts 
// use your own config 

var storage = require('@google-cloud/storage')({
	projectId : "nodejstofirebase",
	keyFilename : 'privatekey.json'
});

var fs = require('fs');

// use your own config 

var config = {
    apiKey: "AIzaSyBSwopfdHBD73gGOAjf-DJm0dq9j0HaLBo",
    authDomain: "nodejstofirebase.firebaseapp.com",
    databaseURL: "https://nodejstofirebase.firebaseio.com",
    projectId: "nodejstofirebase",
    storageBucket: "nodejstofirebase.appspot.com",
    messagingSenderId: "279800640313"
  };

firebase.initializeApp(config);

var db = firebase.database().ref('/products');

var bucket = storage.bucket("nodejstofirebase.appspot.com");

fs.readFile('./product.json',function(err,data){
	if(err)
		throw err;
	var file = JSON.parse(data);
	for(var i=0;i<file.length;i++)
	{
		db.push(file[i]);
	}
});
