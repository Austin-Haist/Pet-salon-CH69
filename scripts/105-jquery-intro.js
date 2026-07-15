// JavaScript Approach
// 1. create the function
// 2. Connect the function and the button with onclick
/*function sayHello() {
    alert('Hello, Class!');
}*/

// jQuery - Event Handling
// select the button . action
$("#triggerEventButton").click(function() {
    alert("Hello Cohort 69!");
});

// Practicing jQuery Actions

// 1. Function to hide the paragraph
$("#hideButton").click(function(){
    $("p").hide();
});

// 2. Function to show the paragraph
$("#showButton").click(function(){
    $("p").show();
});

//3. Function to Toggle the paragraph
$("#toggleButton").click(function(){
    $("p").toggle();
});

// 4. Function to Change the text of the paragraph
$("#changeTextButton").click(function(){
    $("p").text("This is the new text of the paragraph.");
});

// 5. Function to Add CSS to the paragraph
$("#addCSSButton").click(function(){
    $("p").css("color", "red")
    .css("border", "2px solid black")
    .css("padding", "10px");
});

// 6. Function to Add a class to the paragraph
$("#applyCSSClassButton").click(function(){
    $("p").addClass("my-class");
});