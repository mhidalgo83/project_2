$(document).ready(function () {
    //Event listener for submit button in taker.handlebars page...
    $("#submit").on("click", function (event) {
        event.preventDefault();
        //Object to be sent to database...
        var newGig = {
            name: $("#name").val().trim(),
            location: $("#location").val().trim(),
            category: $("#category").val().trim(),
            description: $("#description").val().trim(),
            startDate: $("#startDate").val().trim(),
            endDate: $("#endDate").val().trim(),
            payment: $("#payment").val().trim()
        };
        console.log(newGig);
        //Updates the database with the newGig object...
        $.post("/api/gigs", newGig).then(function (data) {
            console.log(data);
        });
        //Clears the form after the submit is clicked...
        $("#name").val("");
        $("#location").val("");
        $("#category").val("");
        $("#description").val("");
        $("#startDate").val("");
        $("#endDate").val("");
        $("#payment").val("");
    });

    //Code for trash button...
    $(".trash").on("click", function (event) {
        console.log("This works");
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);
        //Call to database...
        $.ajax({
            type: "DELETE",
            url: "/api/gigs/" + id
        }).then(
            function () {
                location.reload();
            });
    });



});