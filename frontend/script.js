let Switch = document.getElementById("switch");
let imgProfile = document.querySelector("#profile img");

function toogleActive(){
    const html = document.documentElement;

    // if(html.classList.contains('light') || localStorage.getItem("switch") == "light"){
    if(html.classList.contains('light')){
        html.classList.remove('light');
        imgProfile.setAttribute('src', './Assets/avatar-light.png');
        localStorage.setItem("switch", "moon");
    } else {
        html.classList.add('light');
        imgProfile.setAttribute('src', './Assets/avatar.png');
        localStorage.setItem("switch", "light");
    }
}

Switch.addEventListener('click', toogleActive);