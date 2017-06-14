var firebase = require('firebase');

// npm install @google-cloud/storge --save
// get your kye (.json) file from Project Settings -> Service Accounts 
// use your own config 

var storage = require('@google-cloud/storage')({
	projectId : "nodejstofirebase",
	keyFilename : 'privatekey.json'
});

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

 var db = firebase.database();

 db.ref('.info/connected').on('value',function(snap){
 	if(snap.val() === true)
 		console.log('Connected to firebase');
 	else
 		console.log('Disconnected from firebase');
 });

 // bucket refers to storage of the firebase 

 var bucket = storage.bucket("nodejstofirebase.appspot.com");

// upload function 
// you can also add metadata here 
// place image in the same folder 
// path to file is required (not only to the  folder)
bucket.upload('image.jpg').then(function(){
	console.log('Uploaded');
});


/*

// This is used to upload the image in base64 format in the database
// Not a preferred solution but still it exists so..

fs.readFile('image.png',function(err,data){
	if(err) throw err;

	var image = new Buffer(data,'binary').toString('base64');
	var upload =
	{
		image_data : image,
		image_type : 'image/png'
	};
	db.ref('/images').set(upload);
})
*/