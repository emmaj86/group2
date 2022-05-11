//document.addEventListener("DOMContentLoaded", () => { })

// setTimeout(function () {
//     document.getElementById('heading').innerHTML += 'CLICK ON A PLANET';
// }, 2000);


setTimeout(function () {
    const hideOverlay = sessionStorage.getItem("hideOverlay");
    if (hideOverlay !== "true") {
        document.getElementById("overlay").style.display = "block";
    }
}, 1000);

setTimeout(function () {
    const hideOverlay = sessionStorage.getItem("hideOverlay");
    if (hideOverlay !== "true") {
        document.getElementById("heading").style.display = "block";
    }
}, 2000);



window.onclick = off;

function off() {
    document.getElementById("overlay").style.display = "none";
    sessionStorage.setItem("hideOverlay", "true");
};







