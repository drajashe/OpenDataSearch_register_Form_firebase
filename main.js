// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAnEs9naSWKJ8Xwtg9hspcTd94t0cJwTlg",
    authDomain: "webapp-e1a17.firebaseapp.com",
    databaseURL: "https://webapp-e1a17.firebaseio.com",
    projectId: "webapp-e1a17",
    storageBucket: "webapp-e1a17.appspot.com",
    messagingSenderId: "943154104266"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('password');

  // Save message
  saveMessage(name, email, phone, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, password){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    password:password
  });
}