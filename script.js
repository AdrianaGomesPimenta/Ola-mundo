// Seleciona os elementos da página
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');

// Função que exibe a saudação
greetButton.addEventListener('click', () => {
    const name = nameInput.value.trim(); // Pega o valor do campo de texto
    if (name) {
        displayGreeting(`Olá, ${name}!`);
    } else {
        displayGreeting('Por favor, insira seu nome!');
    }
});

// Função para exibir a mensagem com efeito de digitação
function displayGreeting(message) {
    greetingMessage.innerHTML = ''; // Limpa a mensagem anterior
    let i = 0;
    const typingEffect = setInterval(() => {
        greetingMessage.innerHTML += message.charAt(i);
        i++;
        if (i === message.length) {
            clearInterval(typingEffect);
        }
    }, 100); // Intervalo de 100ms para o efeito de digitação
}