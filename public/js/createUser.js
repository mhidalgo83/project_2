$(document).ready( function (){

$("#createUser").on("click", function(event) {
    event.preventDefault();

    // $.post("/api/takers", newTaker).then(function(data){
    //     console.log(data);
    // });

        console.log("yay");
    
     var username = $("#newusername").val().trim();
    var userEmail = $("#newuseremail").val().trim();
    
    var newUser = {
        username:username,
        email: userEmail
    }
    
                console.log (username);
                console.log(userEmail);
    
                $.post("/api/users", newUser).then(function(data){
                        console.log ("user has been created");
                });
    });


