let Jogador1 =
{
    NomeJogador:"",
    NivelJogador:"",
    RankeadaJogador:"",
    Partidas:[],
    QtsVitoria:0,
    QtsDerrota:0, 
}

//Função que recebe um objeto de jogador e calcula o niveljogador e exibi o valor
function CalcularRankeadas(JogadorObj){
    ArrayDePartidas = JogadorObj.Partidas;
    
    QuantidadeRankeadas = GetQtsVitoria(JogadorObj) - GetQtsDerrota(JogadorObj);

    if(QuantidadeRankeadas < 10){
        SetRankeadaJogador(JogadorObj,"Ferro");
    }else if(QuantidadeRankeadas < 20){
        SetRankeadaJogador(JogadorObj,"Bronze");
    }else if(QuantidadeRankeadas < 50){
        SetRankeadaJogador(JogadorObj,"Prata");
    }else if(QuantidadeRankeadas < 80){
        SetRankeadaJogador(JogadorObj,"Ouro");
    }else if(QuantidadeRankeadas < 90){
        SetRankeadaJogador(JogadorObj,"Diamante");
    }else if(QuantidadeRankeadas < 100){
        SetRankeadaJogador(JogadorObj,"Lendário");
    }else if(QuantidadeRankeadas > 101){
        SetRankeadaJogador(JogadorObj,"Imortal");
    }
    SetNivelJogador(QuantidadeRankeadas);
    //O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}
    //return "Seu rank "+GetRankeadaJogador(JogadorObj)+", Vitorias: "+GetQtsVitoria(JogadorObj) +" Derrotas: "+GetQtsDerrota(JogadorObj);
    //return ;
    console.log("O Herói "+GetNomeJogador(JogadorObj)+" tem de saldo de " + GetQtsVitoria(JogadorObj) + " está no nível de " + GetRankeadaJogador(JogadorObj));
}


// funções de get e set( estou vendo outros cursos e estou treinando os conhecimentos )
function SetNomeJogador(JogadorObj,Nome){
    JogadorObj.NomeJogador = Nome;
}
function GetNomeJogador(JogadorObj){
    return JogadorObj.NomeJogador;
}


// funções de get e set( estou vendo outros cursos e estou treinando os conhecimentos )
function SetNivelJogador(JogadorObj,NivelJogador){
    JogadorObj.NivelJogador = NivelJogador;
}
function GetNivelJogador(JogadorObj){
    return JogadorObj.NivelJogador;
}


// funções de get e set( estou vendo outros cursos e estou treinando os conhecimentos )
function SetRankeadaJogador(JogadorObj,RankeadaJogador){
    JogadorObj.RankeadaJogador = RankeadaJogador;
}
function GetRankeadaJogador(JogadorObj){
    return JogadorObj.RankeadaJogador;
}


// funções de get e set( estou vendo outros cursos e estou treinando os conhecimentos )
function SetQtsDerrota(JogadorObj,QtsDerrota){
    JogadorObj.QtsDerrota = QtsDerrota;
}
function GetQtsDerrota(JogadorObj){
    return JogadorObj.QtsDerrota;
}

// funções de get e set( estou vendo outros cursos e estou treinando os conhecimentos )
function SetQtsVitoria(JogadorObj,QtsVitoria){
    JogadorObj.QtsVitoria = QtsVitoria;
}
function GetQtsVitoria(JogadorObj){
    return JogadorObj.QtsVitoria;
}

// função que adiciona ao array do jogador
function ADDPartida(JogadorObj,Resultado,NumerodePartidas){
    for(index=0; index<=NumerodePartidas; index++ ){
        JogadorObj.Partidas.push(Resultado);
        if(Resultado=="vitória"){
            SetQtsVitoria(JogadorObj,GetQtsVitoria(JogadorObj)+1);
        }else{
            SetQtsDerrota(JogadorObj,GetQtsDerrota(JogadorObj)+1);
        }
    }
};


// for para colocar 150 vitorias para o jogador1

ADDPartida(Jogador1,"vitória",150);


SetNomeJogador(Jogador1,"Aparecido Celso de Souza Junior");

//console.log(CalcularRankeadas(Jogador1));



// for para colocar 80 vitorias para o jogador1
let Jogador2 =
{
    NomeJogador:"",
    NivelJogador:"",
    RankeadaJogador:"",
    Partidas:[],
    QtsVitoria:0,
    QtsDerrota:0, 
}
SetNomeJogador(Jogador2,"Kleber Silva de Souza");

ADDPartida(Jogador2,"vitória",80);

//console.log(CalcularRankeadas(Jogador2));



// for para colocar 50 vitorias para o jogador1
let Jogador3 =
{
    NomeJogador:"",
    NivelJogador:"",
    RankeadaJogador:"",
    Partidas:[],
    QtsVitoria:0,
    QtsDerrota:0, 
}

ADDPartida(Jogador3,"vitória",50);

SetNomeJogador(Jogador3,"Karina Silva de Souza");
//console.log(CalcularRankeadas(Jogador3));

console.log("Bem vindo a Calculadora de partidas Rankeadas, aqui nesse desafio foi feito 3 objetos de jogador");
console.log("Jogador1,Jogador2,Jogador3");
console.log("dentro desse objeto temos: NomeJogador, NivelJogador, RankeadaJogador, Partidas, QtsVitoria, QtsDerrota");
console.log("NomeJogador, nome definido para o jogador,");
console.log("NivelJogador, qual o nivel atual do jogador,");
console.log("RankeadaJogador, qual rank jogador esta atualmente");
console.log("QtsVitoria, quantidade de vitorias que o jogador tem");
console.log("QtsDerrota, quantidade de derrotas que o jogador tem");

console.log("Partidas, historioco das jogadas em formato ARRAY pode adicionar partidas para o jogador usando a função ADDPartida");
console.log("para usar a função ADDPartida deve passar 3 parametros, o jogador que deseja adicionar a partida, o resultado da partida, e quantidade que deseja adicionar exemplo:");
console.log("ADDPartida(Jogador1,\"vitória\",1); nesse exemplo vai adicionar 1 vitoria para o jogador1");
console.log("ADDPartida(Jogador1,\"Derrota\",10); nesse caso vai adicionar 10 derrotas ao jogador1");

console.log("pode usar a função CalcularRankeadas(Jogador1), CalcularRankeadas(Jogador2), CalcularRankeadas(Jogador3) para visualizar os resultados dos ranks de cada jogador exemplo:");
console.log("CalcularRankeadas(Jogador1); nesse caso vai mostrar \"O Herói Aparecido Celso de Souza Junior tem de saldo de 151 está no nível de Imortal\" ");
CalcularRankeadas(Jogador1);