// Função para rolar até a seção de regras de atendimento
function scrollToRegras() {
    document.getElementById("regras").scrollIntoView({ behavior: 'smooth', block: 'end' });
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

// Função para destacar a mensagem selecionada ao clicar no menu
document.querySelectorAll('#menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Remover o destaque de todas as mensagens
        document.querySelectorAll('.mensagem').forEach(msg => msg.classList.remove('highlight'));

        // Destacar a mensagem correspondente
        var target = document.querySelector(this.getAttribute('href'));
        
        if (target) { // Verificar se o target existe
            target.classList.add('highlight');

            // Rolar até a mensagem
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Função para copiar o conteúdo da mensagem ao clicar no botão "Copiar"
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Encontrar o texto da mensagem correspondente
        var messageText = this.closest('.mensagem').querySelector('p').textContent;

        // Usar a API Clipboard para copiar o texto
        navigator.clipboard.writeText(messageText).then(() => {
            // Alerta de sucesso ao copiar
            alert('Mensagem copiada!');
        }).catch(err => {
            // Caso ocorra um erro, exibe uma mensagem de erro
            alert('Falha ao copiar mensagem: ' + err);
        });
    }); 
});
