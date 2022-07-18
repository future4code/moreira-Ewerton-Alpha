```
## Lists
- **🎰**   Montando o jogo
    
    Essa etapa do projeto consiste em criar um programa que:
    
    1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
    
    2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".
    
    - 💡 Dica
        
        `confirm` é um comando que cria uma caixa com dois botões: `ok` e `cancelar`, permitindo fazer perguntas de "sim" e "não". Caso o usuário responda sim (`ok`) o comando devolve o valor `true`, caso contrário, devolve `false`. Desta forma, podemos usar condicionais para decidir o que fazer em cada caso
        
        ```jsx
        if(confirm("pergunta de sim ou não")) {
            // o que fazer se o usuário clicar "ok"
        } else {
            // o que fazer se o usuário clicar "cancelar"
        }
        ```
        
    
    3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
    
    4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.
    -------------------------------------------Part2 ----------------------------------------------
  //Começando a rodadada se
  A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e informar o vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.
  5-dica
  ```jsx
const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros
console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"
console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)
```
```