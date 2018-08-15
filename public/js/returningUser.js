$(document).ready(function () {



    $("#existingUser").on("click", function (event) {
        event.preventDefault();
        console.log("yay");


        var username = $("#returningUser").val().trim();
        var userEmail = $("#returningEmail").val().trim();

        var returningUser = {
            username: username,
            email: userEmail
        }

        console.log(username);
        console.log(userEmail);

        $.get("/api/users/" + username, function (data) {
            console.log(data)
            if (data) {
                alert("welcome back" + returningUser.username);
            }

            else {
                alert("you are not a user yet, please create an account");
            }
        });
    });

