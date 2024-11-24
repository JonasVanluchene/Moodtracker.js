

window.addEventListener("load", initialize);

function initialize() {
    const dateTimeObject = new Date().toISOString().split("T")[0];
    const date = new Date().toLocaleDateString("nl-BE",{
        weekday: 'long',
        day : 'numeric',
        month : 'long',
        year : 'numeric'
        });

    

    const displayDate = document.getElementById("current-date");

    
    displayDate.textContent = date;
    displayDate.setAttribute("datetime", dateTimeObject);

    
    
}







