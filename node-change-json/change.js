var fs = require('fs');
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAuhL5hmBN4SUGHIBDq5OeMwqc7gjf2ddc",
    authDomain: "tiotime-3cc53.firebaseapp.com",
    databaseURL: "https://tiotime-3cc53.firebaseio.com",
    projectId: "tiotime-3cc53",
    storageBucket: "tiotime-3cc53.appspot.com",
    messagingSenderId: "231650790955"
  };

firebase.initializeApp(config);

var db = firebase.database().ref('/products');

fs.readFile('./product2.json',function(err,data){
	if(err)
		throw err;
	var file = JSON.parse(data);
	db.set(file);
});

