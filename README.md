# Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
  
Bons estudos 😉

## Solução

Bem vindo a Calculadora de partidas Rankeadas, aqui nesse desafio foi feito 3 objetos de jogador 


## dados importantes
Jogador1,Jogador2,Jogador3 

##Explicação
dentro desse objeto temos: NomeJogador, NivelJogador, RankeadaJogador, Partidas, QtsVitoria, QtsDerrota 


NomeJogador, nome definido para o jogador, 


NivelJogador, qual o nivel atual do jogador, 


RankeadaJogador, qual rank jogador esta atualmente 


QtsVitoria, quantidade de vitorias que o jogador tem 


QtsDerrota, quantidade de derrotas que o jogador tem 


Partidas, historioco das jogadas em formato ARRAY pode adicionar partidas para o jogador usando a função ADDPartida 

## sobre ADDPartida para um jogador
para usar a função ADDPartida deve passar 3 parametros, o jogador que deseja adicionar a partida, o resultado da partida, e quantidade que deseja adicionar 

## exemplo:
ADDPartida(Jogador1,"vitória",1); nesse exemplo vai adicionar 1 vitoria para o jogador1


ADDPartida(Jogador1,"Derrota",10); nesse caso vai adicionar 10 derrotas ao jogador1

## sobre CalcularRankeadas para visualizar o resultado
pode usar a função CalcularRankeadas(Jogador1), CalcularRankeadas(Jogador2), CalcularRankeadas(Jogador3) para visualizar os resultados dos ranks de cada jogador 

## exemplo:

CalcularRankeadas(Jogador1); nesse caso vai mostrar "O Herói Aparecido Celso de Souza Junior tem de saldo de 151 está no nível de Imortal"
