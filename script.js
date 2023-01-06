function search() {
    const searchValue = document.getElementById('ruleSearch').value;
    document.getElementById('ctl00_MainContentPlaceHolder_optRule').value = searchValue;
}

// Get the input field
var input = document.getElementById("ruleSearch");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchRule").click();
  }
});



