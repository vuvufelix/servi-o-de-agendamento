const header_desktop = document.querySelector("#header-desktop")
const header_modile = document.querySelector("#header-modile")

// Mobile app
const nav_mobile = document.querySelector(".nav-mobile")
const menu_amburguer = document.querySelector("#menu-amburguer")

menu_amburguer.addEventListener("click", () => {

    if(nav_mobile.style.transform == "translateX(0px)") {
        nav_mobile.style.transform = "translateX(-600px)"
    } else {
        nav_mobile.style.transform = "translateX(0px)"
    }
    console.log("funcionando")
})

function mudouTamanho() {

    if(window.innerWidth >= 700) {
        header_modile.classList.add("hide")
        header_desktop.classList.remove("hide")
    } else {
        header_modile.classList.remove("hide")
        header_desktop.classList.add("hide")
    }
}