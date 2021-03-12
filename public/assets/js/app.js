$(function () {
    $(".change-devour").on("click", function (event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
//sending new devoured state to the api to trigger the status change in the database
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function () {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function (event) {
      event.preventDefault();
//gathering form data 
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
//sending the new data information to the api to trigger it being added to the database
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
//collecting the Id to send delete request to the api  
    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");
  
//sending the delete request to the API to trigger removal from the database
//not as safe as hiding "defunct" data, but just to demonstrate CRUD
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });