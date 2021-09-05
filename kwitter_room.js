var firebaseConfig = {
      apiKey: "AIzaSyDejavnHLKQ8vLad5AFVdLiNza95YxCiJk",
      authDomain: "kaotalk-chat.firebaseapp.com",
      databaseURL: "https://kaotalk-chat-default-rtdb.firebaseio.com",
      projectId: "kaotalk-chat",
      storageBucket: "kaotalk-chat.appspot.com",
      messagingSenderId: "64129991454",
      appId: "1:64129991454:web:6f0562d95a89b90d7a3f0f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
 
 name_user=localStorage.getItem("username");
 function add_room()
 {
       roomname=document.getElementById("room_name").value;
      localStorage.setItem("nameroom",roomname);
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding_room_name"
      });
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div onclick='go_into_room(this.id)' class='room_name'  id='"+Room_names+"'>"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

//End code
      });});}

getData();
function go_into_room(name)
{
console.log(name);
window.location="kwitter_page.html";
localStorage.setItem("nameroom",roomname);
}
