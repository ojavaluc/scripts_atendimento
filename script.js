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
function verificarRespostas() {
    let pontuacao = 0;
    
    // Respostas corretas
    const respostasCorretas = {
        q1: "D",
        q2: "C",
        q3: "D",
        q4: "B",
        q5: "E"
    };

    // Verificar respostas
    for (let pergunta in respostasCorretas) {
        let respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
        if (respostaSelecionada && respostaSelecionada.value === respostasCorretas[pergunta]) {
            pontuacao++;
        }
    }

    document.getElementById("resultadoQuiz").textContent = `Você acertou ${pontuacao} de 5 perguntas!`;
}
// Função para rolar ao topo suavemente
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar o botão apenas quando o usuário rolar para baixo
window.addEventListener("scroll", function() {
    let scrollButton = document.getElementById("scrollToTop");
    
    if (window.scrollY > 300) { // Se rolou mais de 300px
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});


function scrollToQuiz() {
    const quizSection = document.getElementById("quiz");
    if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth' });
    }
}
