// set up on click function for submit button to take the value of what was inputed

// then use ajax to send to DB and reload the page

$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      
      location.reload();
    });

  });
});
