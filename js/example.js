// Set the variables that are needed for our functionality
var userInputBox = document.querySelector("#user-name-input");
var submitUserInput = document.querySelector("#submit-user-name");
var outputContainer = document.querySelector("#user-name-output");

// variables for madlib exercise
var nounInput = document.querySelector("#noun-input");
var adjInput = document.querySelector("#adj-input");
var verbInput = document.querySelector("#verb-input");
var createStoryBtn = document.querySelector("#create-story");
var storyOutput = document.querySelector("#story-output");

/*
=============================================================
In Class discussion code
=============================================================
*/

// Check to make sure elements exist before targeting them.
if (userInputBox && submitUserInput && outputContainer) {
  // Listen for a click event on the button to then preform our function
  submitUserInput.addEventListener("click", function(event) {
    event.preventDefault();

    // Capture the value of the input element and store as a variable
    var userName = userInputBox.value;
    // var outputMessage = 'Welcome ' + userName + "!";
    // Dynamically build a string message based on user input
    var outputMessage = "Welcome ";
    outputMessage += userName;
    outputMessage += "!";
    // put the output message in the paragraph element to display it on the page
    outputContainer.textContent = outputMessage;
  });
}

/*
=============================================================
Madlib exercise code.
=============================================================
*/

// Check to see if all of these elements exist on the current page
if (nounInput && adjInput && verbInput && createStoryBtn && storyOutput) {
  // Add event listener on button to trigger function when clicked
  createStoryBtn.addEventListener("click", function(event) {
    // Prevent the default behavior of submitting a form which would cause the page to reload
    event.preventDefault();

    // Set local variables needed within this function
    var noun = nounInput.value;
    var adj = adjInput.value;
    var verb = verbInput.value;

    // Check that all elements are not empty strings
    if (noun !== "" && adj !== "" && verb !== "") {
      // Build together a message string
      var story = "";
      story += "There once was a ";
      story += noun;
      story += " who was very ";
      story += adj;
      story += " and really liked to ";
      story += verb;
      story += ".";

      // Insert the story string created as text within the
      // storyOutput element to display the story on the page
      storyOutput.textContent = story;

      // Clear out the input elements for the user so they can easily create a new storyOutput
      nounInput.value = "";
      adjInput.value = "";
      verbInput.value = "";
    } else {
      // If all the input fields are not filled out generate an error message with HTML
      var message = '<span style="color: red">';
      message += "Please fill in all input fields.";
      message += "</span>";
      // Add error message to the storyOutput element
      storyOutput.innerHTML = message;
    }
  });
}
