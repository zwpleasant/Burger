$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/tacos/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour status", newDevour);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/tacos", {
      type: "POST",
      data: newTaco
    }).then(
      function() {
        console.log("created new taco");
        location.reload();
      }
    );
  });
});