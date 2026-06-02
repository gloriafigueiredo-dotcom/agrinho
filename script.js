// Script para o site Agrinho 2026

document.addEventListener("DOMContentLoaded", function() {

    // Botão do Hero - Scroll suave
    const btnConheca = document.getElementById("btn-conheca");
    
    if (btnConheca) {
        btnConheca.addEventListener("click", function() {
            document.getElementById("tema").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Efeito de animação ao rolar a página (fade in)
    const cards = document.querySelectorAll('.card');
    
    function checkCards() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.85;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    // Configura estilo inicial dos cards
    cards.forEach(card => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
    });

    // Executa ao carregar e ao rolar
    window.addEventListener("scroll", checkCards);
    checkCards();

    // Mensagem no console (para desenvolvedor)
    console.log("%c🌱 Site Agrinho 2026 carregado com sucesso!", "color: #2e7d32; font-weight: bold;");
});