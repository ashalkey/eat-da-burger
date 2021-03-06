$(function() {

    $(".devour-burger").on("click", function(event) {

        var id = $(this).data("id");
        var newDevoured = "true";

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
          }).then(
            function() {
              console.log("Burger has been devoured?", newDevoured + "!");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });



    $("#submit-button").on("click", function(event) {
        event.preventDefault();
        var myBurger = $("#myBurger").val().trim();
        if(myBurger === ""){
            alert("You must enter some text in the text field before serving up a burger");
        }

        else {
        var newBurger = {
            burger_name: $("#myBurger").val().trim(),
            devoured: 0
        };


        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New burger created");
            location.reload();
        })
    }
    });
});