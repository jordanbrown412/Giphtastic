


var animalarr = ["dog", "cat", "snake", "hamster", "dragon", "bear"];

for (var i = 0; i < animalarr.length; i++) {
	
	var animalButton = $("<button class='btn btn-primary'>" + animalarr[i] + "</button>");

	animalButton.attr("data-animal", animalarr[i]);

	$("#animalButtons").append(animalButton);
};

// On-click event that displays gifs based on which button is clicked
$(".btn-primary").on("click", function() {
      $("#gifDiv").empty();
      // Grabbing and storing the data-animal property value from the button
      var animal = $(this).attr("data-animal");
      console.log(this);
      // Constructing a queryURL using the animal name
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);
          console.log(response);

          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var animalDiv = $('<div class="col-sm-4"></div>');

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var animalImage = $('<img class="click">');
            // Setting the src attribute of the image to a property pulled off the result item
            // var newAnimal = animalImage.attr("src", results[i].images.fixed_height_small.url);
            // var newestAnimal = newAnimal.attr("data-still", results[i].images.fixed_height_small_still.url);
            // var lastImage = newestAnimal.attr("data-animate", results[i].images.fixed_height_small.url);
            // lastImage.attr("data-state", "still");
            
            animalImage.attr({src: results[i].images.fixed_height_small_still.url,
            				 "data-still": results[i].images.fixed_height_small_still.url,
            				 "data-animate": results[i].images.fixed_height_small.url,
            				 "data-state": "still"
            });
         
            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifDiv").append(animalDiv);
          };
 		// Creates button from inputed animal in search
 		$("#sub").on("click", function() {
		var newAnimal = $("#animalSearch").val();
		var newAnimalBtn = $("<button class='btn btn-primary'>" + newAnimal + "</button>");
		newAnimalBtn.attr("data-animal", newAnimal);
		$("#animalButtons").append(newAnimalBtn);
		console.log(newAnimal);
	});
 		// Gives our app Pause andPlay Functionality
          $(".click").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        
      }
    });
        });
        });
 
    
