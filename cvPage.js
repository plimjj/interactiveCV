$(document).ready(function() {
    $("#container").hide();
    console.log("ready");
    $("#name").css({'color':'white'})
    $("#loginButton").on("click", function() {
        console.log("I was clicked");
        $(".linkedin-container").hide();
        $("#container").show();
        $("h2").addClass("animated bounceInRight");
        $("h5").addClass("animated rubberBand");
        $("#leftColumn").addClass("animated bounceInLeft");
        $("#educationCol").addClass("animated bounceInBottom");
        $("#experienceCol").addClass("animated bounceInUp");
        $("#name").delay(2000).addClass("animated zoomIn");
    });




    $("#facebookBtn").on("click", function() {
        var facebookWin = window.open("https://www.facebook.com/PLimJJ","_blank");
        console.log("facebook click")
        if (facebookWin) {
            win.focus();
        } else {
            alert("Please allow popups for this website :P");
        }
    });

    $('#igBtn').on("click", function() {
        var igWin = window.open("https://www.instagram.com/plimjj/?hl=en","_blank");
        if (igWin) {
            win.focus();
        } else{
            alert("Please allow popups for this website :P");
        }
    });

});
