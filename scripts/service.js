// Automatically fill the description and price
// when a service is selected

$("#serviceName").change(function(){

    let serviceName = $("#serviceName").val();

    if(serviceName == "Bath"){

        $("#serviceDescription").val(
            "Includes shampoo and towel dry"
        );

        $("#servicePrice").val("29.99");

    }
    else if(serviceName == "Nail Trim"){

        $("#serviceDescription").val(
            "Includes nail trimming and filing"
        );

        $("#servicePrice").val("15.99");

    }
    else if(serviceName == "Paw Cleaning"){

        $("#serviceDescription").val(
            "Includes paw cleaning and moisturizing"
        );

        $("#servicePrice").val("12.99");

    }
    else{

        $("#serviceDescription").val("");
        $("#servicePrice").val("");

    }

});


$("#servicesForm").submit(function(event){

    event.preventDefault();


    // 1. Get the values

    let serviceName = $("#serviceName").val().trim();

    let serviceDescription =
        $("#serviceDescription").val().trim();

    let servicePrice =
        $("#servicePrice").val().trim();


    // Remove previous red borders

    $("#serviceName").css("border", "");
    $("#serviceDescription").css("border", "");
    $("#servicePrice").css("border", "");


    let valid = true;


    // 2. Add a red border to empty fields

    if(serviceName == ""){

        $("#serviceName").css(
            "border",
            "2px solid red"
        );

        valid = false;

    }


    if(serviceDescription == ""){

        $("#serviceDescription").css(
            "border",
            "2px solid red"
        );

        valid = false;

    }


    if(servicePrice == ""){

        $("#servicePrice").css(
            "border",
            "2px solid red"
        );

        valid = false;

    }


    // 3. Save the service when the form is valid

    if(valid){

        localStorage.setItem(
            "serviceName",
            serviceName
        );

        localStorage.setItem(
            "serviceDescription",
            serviceDescription
        );

        localStorage.setItem(
            "servicePrice",
            servicePrice
        );


        alert("Service Added Successfully!");


        // Clear the form

        $("#servicesForm")[0].reset();


        // Remove all red borders

        $("#serviceName").css("border", "");
        $("#serviceDescription").css("border", "");
        $("#servicePrice").css("border", "");

    }

});


// Reset the form and remove red borders

$("#resetButton").click(function(){

    $("#serviceName").css("border", "");
    $("#serviceDescription").css("border", "");
    $("#servicePrice").css("border", "");

});


// Change between light mode and dark mode

$("#changeModeButton").click(function(){

    $("body").toggleClass("dark-mode");

    const isDark =
        $("body").hasClass("dark-mode");


    if(isDark){

        $("#changeModeButton").text(
            "☀️ Change Mode"
        );

    }
    else{

        $("#changeModeButton").text(
            "🌙 Change Mode"
        );

    }

});