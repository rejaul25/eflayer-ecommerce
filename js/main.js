



$(document).ready(function () {

    // menu-btn
    $("#hamBar").click(function () {
        $(".more-menu").animate({
            width: 'toggle'
        },300);
    });
    // hide-menu 
    $("#hideMenu").click(function(){
        $(".more-menu").hide(200);
      });

    /* catagory-btn */
    $("#catagoryBtn").click(function () {
        $(".catagory-drop").slideToggle();
    });
    // language-btn
    $("#languageBtn").click(function () {
        $(".language-drop").slideToggle();
    });


});


//  
function updateCounter() {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999); // Set the end time to 11:59:59.999 PM

    const timeRemaining = new Date(endOfDay - now);

    const hours = timeRemaining.getUTCHours().toString().padStart(2, '0');
    const minutes = timeRemaining.getUTCMinutes().toString().padStart(2, '0');
    const seconds = timeRemaining.getUTCSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    $("#counter").text(timeString);
}

$(document).ready(function() {
    updateCounter(); // Initial display of the time

    // Update the counter every second
    setInterval(updateCounter, 1000);
});