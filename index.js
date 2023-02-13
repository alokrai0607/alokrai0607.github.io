
var tablinks = document.getElementsByClassName("tab-links");
var tabcontaints = document.getElementsByClassName("tab-containts");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("nav-link-skills");
    }
    for(tabcontaint of tabcontaints){
        tabcontaint.classList.remove("nav-link-skills");
    }
    event.currentTarget.classList.add("nav-link-skills"); 
    document.getElementById(tabname).classList.add("nav-link-skills");
}