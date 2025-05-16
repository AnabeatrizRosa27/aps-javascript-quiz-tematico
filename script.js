Etapa 1: Esboço do algoritmo
1.Exibir mensagem de boas-vindas
2.Pedir o nome do usúario
3.Fazer 2 perguntas(ex:Qual filme ganhou o oscar em 2025 e qual atriz ganhou o prêmio platino em 2025)
4. Armazenar as perguntas e as respostas em vetores
5. Verificar se as respostas estão corretas 
6. Calcular a pontuação do usúario 
7. Mostrar resultado final

Etapa 2:Boas-vindas 
alert("Bem-vinda ao quiz de filmes!");
console.log("Iniciando o quiz...")

Etapa 3:Entrada de dados 
let nome = prompt("Qual é o seu nome?");
let idade = prompt9("Qual é a sua idade?");

Etapa 4: Processamento lófico usando if para validar as respostas e for para percorrer as perguntas 
let perguntas = ["Qual filme ganhou o oscar em 2025?, qual atriz ganhou o prêmio platino em 2025?"];
let respostasCertas = ["Anora", Fernanda Torres"];
letrespostasUsuario = [];
let pontos = 0;

   for(let i = 0; i < perguntas. lenght ; i++) {
       let  respotas = prompt (perguntas[i]);
       respostasUsuario.push(resposta.toLowerCase());
       if( resposta.toLowerCase() ==== respostaCertas[i]{
            alert("Respostas correta!");
           pontos++;
       } else {
           alert ("Resposta errada.");
       }
   }

Etapa 5: Funçoes 
fuction iniciarQuiz() { 
 alert("Vamos começar!");

    function mostrarResultado(nome, pontos) {
        alert('${nome}, voce fez ${pontos} ponto(s)!');

        Etapa 6: vetores 
        let pergunatas = ["Qual filme ganhou o oscar em 2025?" , "qual atriz ganhou o prêmio platino em 2025?"];
        let resposta Certas = ["Anora", "Fernanda torres" ];
        let respostas Usuario = []; //  aqui voce armazena as respostas dadas

         Etapa 7: Usar pelo menos duas  funcoes 
        let nomeFilme =("qual seu filme favorito?");
        let nomeFormatado = nomeFilme.toUpperCase();// transformar tudo em maiúsculas
        let qtdLetras = momeFilme.lenght; // conta quantos caracteres o usuario digitou
          alert('Voce digitou: ${nomeFormatado}');
          alert('Esse nome tem ${qtdletras} caracteres. ');


        Etapa 8 Personalizaçao 
        alert(" Bem-vinda ao Desafio Quiz dos filmes! Vamos ver se voce esta afiada hoje...");

        Etapa 9: Código final comentado

        // Exibe mensagem de boas-vindas
alert("Bem-vinda ao Desafio da Ana!");

// Recebe nome e idade do usuário
let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");

// Declara vetores com perguntas e respostas
let perguntas = [""];
let respostasCertas = ["Qual filme ganhou o oscar em 2025?, qual atriz ganhou o prêmio platino em 2025?"]
let respostasUsuario = []; // Armazena respostas do usuário
let pontos = 0; // Contador de pontos

// Função que mostra o resultado final
function mostrarResultado(nome, pontos) {
    alert(${nome}, você fez ${pontos} ponto(s)!);
}

// Função principal que executa o quiz
function iniciarQuiz() {
    alert("Vamos começar!");

    // Loop para fazer as perguntas
    for (let i = 0; i < perguntas.length; i++) {
        let resposta = prompt(perguntas[i]);
        respostasUsuario.push(resposta.toLowerCase());

        // Verifica se a resposta está correta
        if (resposta.toLowerCase() === respostasCertas[i]) {
            alert("Resposta correta!");
            pontos++;
        } else {
            alert("Resposta errada.");
        }
    }

    // Switch para avaliar o desempenho
    switch (pontos) {
        case 2:
            console.log("Parabéns! Você acertou tudo!");
            break;
        case 1:
            console.log("Você acertou uma. Quase lá!");
            break;
        default:
            console.log("Tente novamente!");
    }

    mostrarResultado(nome, pontos);
}

// Inicia o quiz
iniciarQuiz()
        
        
