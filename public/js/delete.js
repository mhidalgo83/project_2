$(document).ready(function () {

    $("#btn1").on("click", function (event) {
      event.preventDefault();

console.log("hi");

var id = $(this).data("gigs");
  
  $.ajax({
    type: "DELETE",
    url: "/api/gigs/" + id
  }).then(
    function(){
      console.log("deleted id", id);
      location.reload();
    });
});
});