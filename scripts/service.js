$("#servicesForm").submit(function(event){
    event.preventDefault();

    // 1. Get the values
    let serviceName = $("#serviceName").val().trim();
    let serviceDescription = $("#serviceDescription").val().trim();
    let servicePrice = $("#servicePrice").val();
        


    // 2. add red border to the empty fields
    if(serviceName == "" || serviceDescription == "" || servicePrice == ""){
        $("#serviceName").css("border", "2px solid red");
        $("#serviceDescription").css("border", "2px solid red");
        $("#servicePrice").css("border", "2px solid red");

    } else {
        alert("Service Added Successfully!");
        $("#serviceName").css("border", "");
        $("#serviceDescription").css("border", "");
        $("#servicePrice").css("border", "");
    }


});

$("#changeModeButton").click(function (){
    $("body").toggleClass("dark-mode");


    // Ask if the body has the dark-mode class
    const isDark = $("body").hasClass("dark-mode");

    // Change the button text
        // if is dark -> show the sun
        // if not -> show the moon
        
    if(isDark){
        $("#changeModeButton").text("☀️ Change Mode");
    } else {
        $("#changeModeButton").text("🌙 Change Mode");
    }

    

    });