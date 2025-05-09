// Mensagem inicial de boas-vindas ao usuário
alert("Bem-vindo ao Quiz de Filmes! Prepare-se para testar seus conhecimentos.");
console.log("Início do Quiz de Filmes");

// Coleta o nome e a idade do jogador com prompt
let nome = prompt("Qual é o seu nome?");
let idade = prompt("Quantos anos você tem?");
console.log("Jogador: " + nome + " | Idade: " + idade);

// Vetor com as perguntas do quiz
let perguntas = [
    "Qual filme tem a frase 'Eu sou seu pai'?", 
    "Qual filme ganhou o Oscar de Melhor Filme em 1994?", 
    "Qual o nome do personagem principal de Matrix?" 
];

// Vetor com as respostas corretas, alinhadas por índice
let respostas = [
    "star wars",
    "forrest gump",
    "neo"
];

let pontuacao = 0; // Variável para armazenar a pontuação do usuário

// Função que faz uma pergunta e compara a resposta com a correta
function fazerPergunta(pergunta, respostaCorreta) {
    let respostaUsuario = prompt(pergunta).toLowerCase().trim(); // Converte para minúsculas e remove espaços
    if (respostaUsuario === respostaCorreta) {
        alert("Correto!"); // Informa que acertou
        pontuacao++; // Incrementa pontuação
    } else {
        alert("Errado! A resposta correta era: " + respostaCorreta); // Mostra a resposta certa
    }
}

// Laço que percorre todas as perguntas do quiz
for (let i = 0; i < perguntas.length; i++) {
    fazerPergunta(perguntas[i], respostas[i]); // Chama a função para cada pergunta
}

// Função que exibe o resultado final do jogador
function mostrarResultado(nome, pontuacaoTotal) {
    // Mostra nome em maiúsculas e total de acertos
    alert(nome.toUpperCase() + ", você acertou " + pontuacaoTotal + " de " + perguntas.length + " perguntas!");
}

// Chamada final da função de resultado
mostrarResultado(nome, pontuacao);

// Exibe no console que o quiz foi finalizado e mostra a pontuação
console.log("Quiz finalizado. Pontuação: " + pontuacao);
