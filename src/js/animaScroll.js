export function servico_scrool() {
    ScrollReveal().reveal('.servico-scroll', { 
        origin: "top",
        duration: 1000,
        distance: "70%",
        reset: false
    });

    ScrollReveal().reveal('.paragrafo-scroll', { 
        origin: "left",
        duration: 900,
        distance: "80%",
        reset: false
    });

    ScrollReveal().reveal('h1', { 
        origin: "left",
        duration: 900,
        distance: "70%", 
        reset: false
    });

    ScrollReveal().reveal('#artigo-conteudo', { 
        origin: "right",
        duration: 4000,
        distance: "50%",
        reset: false
    });

    ScrollReveal().reveal('.scroll-localizacao', { 
        origin: "top",
        duration: 800,
        distance: "100%",
        reset: false
    });

    ScrollReveal().reveal('#form-container', { 
        origin: "right",
        duration: 1000,
        distance: "50%",
        reset: false
    });

    ScrollReveal().reveal('.swiper-slide', { 
        origin: "left",
        duration: 1000,
        distance: "100%",
        reset: false
    });
}