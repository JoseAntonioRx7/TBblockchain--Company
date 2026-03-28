export function initNavbar() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            // Lógica para abrir/fechar menu mobile
            console.log("Menu mobile acionado");
            // Aqui você pode adicionar classes de 'active' para o CSS
        });
    }

    // Efeito de scroll: mudar a opacidade ao rolar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.padding = "10px 0";
            nav.style.background = "rgba(10, 10, 14, 0.95)";
        } else {
            nav.style.padding = "15px 0";
            nav.style.background = "rgba(10, 10, 14, 0.7)";
        }
    });
}