document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Adicionar efeito de mudança de cor no header ao rolar a página
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Seleciona o elemento com a classe "menu-toggle" e adiciona um ouvinte de evento para cliques
document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Quando o botão é clicado, seleciona o elemento "ul" dentro de "nav" e alterna a classe "nav-active"
    document.querySelector('nav ul').classList.toggle('nav-active');
});
