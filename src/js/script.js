import { servico_scrool } from "./animaScroll.js"

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

const sections = document.querySelectorAll("section")
const nav_link = document.querySelectorAll(" ul li a")

let link = [...nav_link]
let section = [...sections]

console.log(link)
console.log(section)

const observar = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            link.forEach(meu_link => {
                v = meu_link
                meu_link.classList.remove("ativar")
            })

            const id = entry.target.getAttribute("id")
            document.querySelector(`#link-${id}`).classList.add("ativar")
        }
    })
}, { threshold: 0.9 })

//console.log(observar)

mudouTamanho()

servico_scrool()

section.forEach(seccao => {
    observar.observe(seccao, document.querySelector("#home"), document.querySelector("#sobre"))
 })
 