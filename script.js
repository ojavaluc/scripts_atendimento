// Função para mostrar ou esconder a mensagem
function toggleMessage(id) {
    const msg = document.getElementById(id);
    const p = msg.querySelector('.texto');

    // Alterna a visibilidade do texto da mensagem
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}
