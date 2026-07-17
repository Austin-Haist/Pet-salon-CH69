$("#emailForm").submit(function(event){

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the email entered
    let email = $("#email").val();

    // Display an alert
    alert("Email saved: " + email);

    // save to local storage
    localStorage.setItem("emailKey", email);

});