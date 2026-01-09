let fot = document.getElementById("ftAnim");

window.addEventListener("scroll", StartAn);

function StartAn() {
    fot.classList.add("gradieentAnimation");
}

let an = document.getElementById("an2");

window.addEventListener("scroll", anim2);

function anim2() {
    an.classList.add("divAn2");
}
