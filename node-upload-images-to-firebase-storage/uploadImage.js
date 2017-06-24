// Nodejs code for uploading images to firebase storage 
// Takes a folder as upload
// Uploads all the images preserving the directory structure


var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = require('@google-cloud/storage')({
	projectId : " your firebase here ",
	keyFilename : " your private key .json file"
});


// multer is used to get the files
// preservePath maintains the initial directory structure of the client

var upload = multer({ 
	dest : 'upload/',
	preservePath : true 
});

// router to handle GET request 
// This gets the folder for images 
// Folder can contain any number of files and subfolders


router.get('/', function(req, res, next) {
  res.render('uploadImage');
});



// handling the post request for the form submission
// only images are processed 

router.post('/',upload.any(),function(req,res,next){
	if(!req.files)
		return 'No files received';
	files = req.files;

	for(var i=0;i<files.length;i++)
	{
		if(files[i].mimetype == "image/jpeg")
		{
			var file = files[i].path;              	// the path where file is stored on server 
			var name = files[i].originalname;		// the path where we will store on the firebase storage so as to preserve the directory structure
			bankai(file,name);						// function to process the file 
													// to ensure synchronous flow
		}
	}
	res.send('Uplaoded');
});

module.exports = router;

function bankai(file , name)
{
	var bucket = storage.bucket("nodejstofirebase.appspot.com");
	console.log(name+' '+file);
			bucket.upload(file,function(err,data){		// first we upload the file 
				data.move(name,function(err,file){		// then move it in the storage maintaing the directory structure	
					console.log('Image Uplaoded');
				});
			});
}