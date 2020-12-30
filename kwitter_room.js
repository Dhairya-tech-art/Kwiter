
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAy8IYLFKjNNExM-jqHwwjO-vR9PrwcYCQ",
      authDomain: "kwiter-update.firebaseapp.com",
      projectId: "kwiter-update",
      storageBucket: "kwiter-update.appspot.com",
      messagingSenderId: "701950471581",
      appId: "1:701950471581:web:fb79bb3ed507b0cf0b9374"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
