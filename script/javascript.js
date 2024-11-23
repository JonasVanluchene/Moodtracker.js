

window.addEventListener("load", initialize);

function initialize() {
    const date = new Date();

    const weekDays = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"];

    const displayDate = document.getElementById("current-date");

    let day = weekDays[date.getDay()];
    const formattedDate = `${day} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    displayDate.textContent = formattedDate;
    displayDate.setAttribute("datetime", date.toISOString().split("T")[0]);
}

