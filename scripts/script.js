var tabLinks = document.getElementsByClassName("tab-links");
var tabContent = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tab of tabContent) {
        tab.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

$(document).ready(function() {
    if ($(window).width() <= 768) {
        $("#nav").hide();
        $("#mobile-nav").show();
    } else {
        $("#nav").show();
        $("#mobile-nav").hide();
    }
});

$(window).resize(function() {
    if ($(window).width() <= 768) {
        $("#nav").hide();
        $("#mobile-nav").show();
    } else {
        $("#nav").show();
        $("#mobile-nav").hide();
    }
})

$("#mobile-nav").click(function() {
    $("#mNav").slideToggle();
    $("#mNav").css("display", "flex");
    $("#mNav").css("flex-direction", "column");
});