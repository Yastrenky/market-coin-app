import  firebase from "firebase";




 const Auth = props =>{
var userProfile = '';

var config = {
  apiKey: "AIzaSyCmcY1tIS2rlnZfCmFguEiIw4hLU358geM",
  authDomain: "market-coin-2d7ca.firebaseapp.com",
  databaseURL: "https://market-coin-2d7ca.firebaseio.com",
  projectId: "market-coin-2d7ca",
  storageBucket: "market-coin-2d7ca.appspot.com",
  messagingSenderId: "605229967128"
};
firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword("ybramos2014@gmail.com", "yastre00").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);

    // [END_EXCLUDE]
  });

  var user = firebase.auth().currentUser;
  
  if (user) {
    console.log("user loged in");
  } else {
    console.log("no user loged in");
  }

  function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
 }
 export default Auth;