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

// Navegação suave e destaque da mensagem selecionada
document.querySelectorAll('#menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Remover a classe 'destaque' de todas as mensagens
        document.querySelectorAll('.mensagem').forEach(mensagem => {
            mensagem.classList.remove('destaque');
        });

        // Obter o ID da mensagem que corresponde ao item do menu
        const targetId = this.getAttribute('href').substring(1); // Remover '#' da URL
        const targetMessage = document.getElementById(targetId); // Seleciona a mensagem pelo ID

        // Adicionar a classe 'destaque' à mensagem clicada
        targetMessage.classList.add('destaque');

        // Scroll suave para a mensagem
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para copiar o conteúdo da mensagem
function copyMessage(id) {
    var message = document.getElementById(id).getElementsByTagName('p')[0].textContent; // Pega o texto da mensagem
    var tempInput = document.createElement('input'); // Cria um campo de input temporário
    document.body.appendChild(tempInput);
    tempInput.value = message; // Coloca o texto da mensagem no input
    tempInput.select(); // Seleciona o conteúdo do input
    document.execCommand('copy'); // Copia o conteúdo para a área de transferência
    document.body.removeChild(tempInput); // Remove o input temporário
    alert('Mensagem copiada para a área de transferência!'); // Alerta que foi copiado
}
