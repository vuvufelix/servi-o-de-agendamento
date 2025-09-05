export function servico_scrool() {
    ScrollReveal().reveal('.servico-scroll', { 
        origin: "top",
        duration: 1800,
        distance: "70%" 
    });

    ScrollReveal().reveal('.paragrafo-scroll', { 
        origin: "left",
        duration: 900,
        distance: "80%" 
    });

    ScrollReveal().reveal('h1', { 
        origin: "left",
        duration: 900,
        distance: "70%" 
    });

    ScrollReveal().reveal('#artigo-conteudo', { 
        origin: "right",
        duration: 4000,
        distance: "50%" 
    });

    ScrollReveal().reveal('.scroll-localizacao', { 
        origin: "top",
        duration: 1800,
        distance: "100%" 
    });

    ScrollReveal().reveal('#form-container', { 
        origin: "right",
        duration: 2000,
        distance: "50%" 
    });
}