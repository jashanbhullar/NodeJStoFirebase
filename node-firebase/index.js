var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBSwopfdHBD73gGOAjf-DJm0dq9j0HaLBo",
    authDomain: "nodejstofirebase.firebaseapp.com",
    databaseURL: "https://nodejstofirebase.firebaseio.com",
    projectId: "nodejstofirebase",
    storageBucket: "nodejstofirebase.appspot.com",
    messagingSenderId: "279800640313"
  };

firebase.initializeApp(config);

var database = firebase.database();
var data = [{
"Mall Name": "Phoenix Marketcity",
"Location":{
         "latitude": 12.97,
     "longitude": 77.59,
},
"Address": "Whitefield main road, Mahadevpura",
"No of stores": "270+",
"No of floors": "4+Basement",
"Hours": "10:30 AM -11:00 PM",
"Phone": 08067266111
},

{
"Mall Name": "The Forum Neighborhood mall",
"Location":{
         "latitude": 15.97, 
     "longitude": 73.87, 
},
"Address": "Prestige zone, Whitefield",
"No of stores": "290+",
"No of floors": "6+Basement",
"Hours": "10:00 AM - 12:00 PM",
"Phone": 08126781926
},

{
"Mall Name": "Banglore Central Mall",
"Location":{
         "latitude": 13.02,
     "longitude": 84.43,
},
"Address": "Field Marshal Cariappa Road, Ashok nagar",
"No of stores": "230+",
"No of floors": "4+Basement",
"Hours": "10:30 AM - 11:00 PM",
"Phone": 0926381726
},





{
"Mall Name": "Garuda mall",
"Location":{
         "latitude": 11.15,
     "longitude": 78.43,
},
"Address": "15, Magrath Rd, Craig Park Layout",
"No of stores": "190+",
"No of floors": "5+Basement",
"Hours": "9:30 AM - 11:30 PM",
"Phone": 08152715282

},





{
"Mall Name": "UB City Mall",
"Location":{
         "latitude":14.76,
     "longitude":86.98,
},
"Address": "24, Vittal Mallya Road",
"No of stores": "170+",
"No of floors": 4,
"Hours": "10:00 AM - 11 PM",
"Phone": 0725362781
}

];

database.ref('/malls').set(data);

database.ref('/malls').on('value',function(snapshot)
  {
    console.log(snapshot.val());
  });

var connectedRef = firebase.database().ref(".info/connected");

connectedRef.on("value", function(snap) {
  if (snap.val() === true) {
    console.log('connected bitch');
  } else {
    console.log('fuck shit disconnected');
  }
});


