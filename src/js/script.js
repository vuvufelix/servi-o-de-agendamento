import { servico_scrool } from "./animaScroll.js"

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

const sections = document.querySelectorAll("section")
const nav_link = document.querySelectorAll(" ul li a")

let link = [...nav_link]
let section = [...sections]

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

servico_scrool()

section.forEach(seccao => {
    observar.observe(seccao, document.querySelector("#home"), document.querySelector("#sobre"))
})
