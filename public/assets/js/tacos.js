// logic for click events
$(function() {
    // on click, move taco to eaten side
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");
        var newEat = {
            eaten: eaten
        };
        
        $.ajax("/api/tacos" + id, {
            type: "PUT",
            data: newEat
        }).then(
            function() {
                console.log("Eaten status changed", eaten);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newTaco = {
            name: $("ca").val().trim(),
            devoured: devoured
        };

        $.ajax("api/tacos", {
            type: "POST",
            data: newTaco
        }).then(
            function() {
                console.log("Created a new taco");
                location.reload();
            }
        );
    });
});