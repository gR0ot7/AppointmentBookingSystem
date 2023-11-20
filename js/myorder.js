document.addEventListener("DOMContentLoaded",function(){
var all = document.getElementById("all");
var firestore = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        var uid = user.uid;
        var userRef = firestore.doc("users/"+uid);
        userRef.get().then(function(userdetails){
           if(userdetails.data().previous_order == "null"){
           console.log("in no orders");
           all.innerHTML = "no orders";
        }
           else{
            let all_or = userdetails.data().previous_order;
            all_or.map((element)=>{
                all.innerHTML = all.innerHTML + element + '<br>';
            });
           }
           
           
        });
    }
    else{
        window.location.replace('index.html');
    }
});
});