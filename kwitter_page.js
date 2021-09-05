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
var room_name=localStorage.getItem("nameroom");
name_user=localStorage.getItem("username");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name_of_user=message_data["name"];
var message=message_data["message"];
var like=message_data["like"];
var name_tag="<h4>"+name_of_user+"<img scr='tick.png' class='user_tick'></h4>";
var message_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
var row=name_tag+message_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }


getData();

function send()
{
      msg =document.getElementById("send").value;
      firebase.database().ref(room_name).push({
            name:name_user,
            message:msg,
            like:0
      });

      document.getElementById("send").value="";
}


