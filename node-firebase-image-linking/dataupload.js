var firebase = require('firebase');
var storage = require('@google-cloud/storage')({
	projectId : "tiotime-3cc53",
	keyFilename : 'privatekey_tiotime.json'
});
var fs = require('fs');
var path = require('path');

var config = {
    apiKey: "AIzaSyAuhL5hmBN4SUGHIBDq5OeMwqc7gjf2ddc",
    authDomain: "tiotime-3cc53.firebaseapp.com",
    databaseURL: "https://tiotime-3cc53.firebaseio.com",
    projectId: "tiotime-3cc53",
    storageBucket: "tiotime-3cc53.appspot.com",
    messagingSenderId: "231650790955"
  };

firebase.initializeApp(config);

 var bucket = storage.bucket("tiotime-3cc53.appspot.com");

 fs.readdir(__dirname+'/Data',function(err,dir){
 	if(err)
 		throw err;
 	for(var i=0;i<dir.length;i++)
 		subRead(dir[i]);
 });

 var db = firebase.database().ref('/malls');

 function subRead(dir)
 {
 	fs.readdir(__dirname+'/Data/'+dir,function(err,files){
 		if(err)
 			throw err;
 		var data = files[0];	
 		fs.readFile(__dirname+'/Data/'+dir+'/'+data,function(err,data){
 			if(err)
 				throw err;
 			var file = JSON.parse(data);
 			file.images = ['tiotime-3cc53.appspot.com/images/'+thename(files[0])+'/'+thename(files[0])+'_1.jpg',
 							'tiotime-3cc53.appspot.com/images/'+thename(files[0])+'/'+thename(files[0])+'_2.jpg',
 							'tiotime-3cc53.appspot.com/images/'+thename(files[0])+'/'+thename(files[0])+'_3.jpg'];
 			console.log(thename(files[0])+' '+file['Mall Name']);
 			db.push(file);
 		});
 	});
 }

 function thename(data)
 {
 	return path.basename(data,'.json');
 }