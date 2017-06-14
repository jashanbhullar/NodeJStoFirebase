var firebase = require('firebase');
var storage = require('@google-cloud/storage')({
	projectId : "tiotime-3cc53",
	keyFilename : 'privatekey_tiotime.json'
});
var fs = require('fs');

var config = {
    apiKey: "AIzaSyAuhL5hmBN4SUGHIBDq5OeMwqc7gjf2ddc",
    authDomain: "tiotime-3cc53.firebaseapp.com",
    databaseURL: "https://tiotime-3cc53.firebaseio.com",
    projectId: "tiotime-3cc53",
    storageBucket: "tiotime-3cc53.appspot.com",
    messagingSenderId: "231650790955"
  };

firebase.initializeApp(config);

 var db = firebase.database();

 db.ref('.info/connected').on('value',function(snap){
 	if(snap.val() === true)
 		console.log('Connected to firebase');
 	else
 		console.log('Disconnected from firebase');
 });

 var bucket = storage.bucket("tiotime-3cc53.appspot.com");

 fs.readdir(__dirname+'/Data',function(err,dir){
 	if(err)
 		throw err;
 	for(var i=0;i<dir.length;i++)
 		subRead(dir[i]);
 });

 function subRead(dir)
 {
 	fs.readdir(__dirname+'/Data/'+dir,function(err,files){
 		if(err)
 			throw err;
 		var data = files[0];
 		for(var i=1;i<files.length;i++)
 		{
 			something(files[i]);
 			function something(curr){
 			console.log(curr);
 			bucket.upload(__dirname+'/Data/'+dir+'/'+curr,function(){
 				console.log(curr + ' Uploaded 1');
 				bucket.file(curr).copy((bucket).file('/images/'+dir+'/'+curr),function(){
 					console.log(curr + ' Uploaded 2');
 					bucket.file(curr).delete(function(){
 						console.log(curr+ ' Deleted');
 					});
 				});
 			});
 			};
 		}
 	});
 }
