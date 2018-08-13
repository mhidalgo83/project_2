$(document).ready(function () {
    //Event listener for submit button...
    $("#submit").on("click", function (event) {
        event.preventDefault();
        //Object to be sent to database...
        var newTaker = {
            firstName: $("#firstName").val().trim(),
            lastName: $("#lastName").val().trim(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zipCode: $("#zip").val().trim(),
            email: $("#email").val().trim(),
            skills: $("#skills").val().trim()
        };
        console.log(newTaker);
        //Updates the database with the newTaker object...
        $.post("/api/takers", newTaker).then(function(data){
            console.log(data);
        });
        //Clears the form after the submit is clicked...
        $("#firstName").val("");
        $("#lastName").val("");
        $("#address").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zip").val("");
        $("#email").val("");
        $("#skills").val("");
    });
});