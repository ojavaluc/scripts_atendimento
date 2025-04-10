// Função para rolar até a seção de regras de atendimento
function scrollToRegras() {
    const regras = document.getElementById("regras");
    if (regras) {
        regras.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

// Função para rolar até o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para abrir/fechar o menu lateral
function toggleMenu() {
    var menu = document.getElementById("menu");
    var container = document.querySelector(".container");

    if (menu.style.width === "250px") {
        menu.style.width = "0";
        container.style.marginLeft = "0";
    } else {
        menu.style.width = "250px";
        container.style.marginLeft = "250px";
    }
}

// Função para fechar o menu lateral (botão "X" dentro do menu)
function closeMenu() {
    var menu = document.getElementById("menu");
    var container = document.querySelector(".container");

    menu.style.width = "0";
    container.style.marginLeft = "0";
}

// Destacar a mensagem ao clicar no link do menu
document.querySelectorAll('#menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();

            // Remove destaque anterior
            document.querySelectorAll('.mensagem').forEach(msg => msg.classList.remove('highlight'));

            // Destaca a nova mensagem
            const target = document.querySelector(href);
            if (target) {
                target.classList.add('highlight');
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Copiar o conteúdo da mensagem
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const messageText = this.closest('.mensagem').querySelector('p').textContent;

        navigator.clipboard.writeText(messageText).then(() => {
            alert('Mensagem copiada!');
        }).catch(err => {
            alert('Falha ao copiar mensagem: ' + err);
        });
    });
});
