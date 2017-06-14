
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://127.0.0.1:27017/IBM');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
  // We are connected to the Database

  // Create a schema
	var TodoSchema = new mongoose.Schema({
	  name: String,
	  completed: Boolean,
	  note: String,
	  updated_at: { type: Date, default: Date.now },
	});
	// Create a model based on the schema
	var Todo = mongoose.model('Todo', TodoSchema);

	// Create a todo in memory
	var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});
	// Save it to database
	todo.save(function(err){
	  if(err)
	    console.log(err);
	  else
	    console.log(todo);
	});

	// Another way to update data in MongoDB
	Todo.create({name: 'Create something with Mongoose', completed: true, note: 'this is one'}, function(err, todo){
	  if(err) console.log(err);
	  else console.log(todo);
	});


		//Model.find(conditions, [fields], [options], [callback])
		//Model.findById(id, [fields], [options], [callback])
		//Model.findOne(conditions, [fields], [options], [callback])

	// Find all data in the Todo collection
	Todo.find(function (err, todos) {
	  if (err) return console.error(err);
	  console.log(todos)
	});


	//Model.update(conditions, update, [options], [callback])
	//Model.findByIdAndUpdate(id, [update], [options], [callback])
	//Model.findOneAndUpdate([conditions], [update], [options], [callback])

	// callback function to avoid duplicating it all over
	var callback = function (err, data) {
	  if (err) { return console.error(err); }
	  else { console.log('Done'); }
	}

	Todo.update({ name: /master/i }, { completed: true }, { multi: true }, callback);

	//Model.remove(conditions, [callback])
	//Model.findByIdAndRemove(id, [options], [callback])
	//Model.findOneAndRemove(conditions, [options], [callback])

	Todo.remove({name :/master/i },callback);

});