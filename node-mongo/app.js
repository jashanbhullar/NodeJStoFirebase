// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/IBM');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
        var Schema = mongoose.Schema({
    name: String,
    id : Number
        },{collection : 'Jashan'});
        var Jashan = mongoose.model('Jashan', Schema);

        var one = new Jashan({ name: 'Silence',
        id : 001 });
        console.log(one.name);
        one.save(function(err,one){
            if(err) return console.log(err);
            console.log('saved');
        });

Jashan.find(function (err, val) {
  if (err) return console.error(err);
  console.log(val);
});

})