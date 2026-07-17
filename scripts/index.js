// Change between light mode and dark mode

$("#changeModeButton").click(function () {

    $("body").toggleClass("dark-mode");

    const isDark = $("body").hasClass("dark-mode");

    if (isDark) {

        $("#changeModeButton").text(
            "☀️ Change Mode"
        );

    }
    else {

        $("#changeModeButton").text(
            "🌙 Change Mode"
        );

    }

});