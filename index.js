let Jogador =
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
    return "O Herói tem de saldo de " + GetQtsVitoria(JogadorObj) + " está no nível de " + GetRankeadaJogador(JogadorObj);
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
function ADDPartida(JogadorObj,Resultado){
    JogadorObj.Partidas.push(Resultado);
    if(Resultado=="vitória"){
        SetQtsVitoria(JogadorObj,GetQtsVitoria(JogadorObj)+1);
    }else{
        SetQtsDerrota(JogadorObj,GetQtsDerrota(JogadorObj)+1);
    }
};


// for para colocar 150 vitorias para o jogador
for(index=0; index<=150; index++ ){
    ADDPartida(Jogador,"vitória");
}

SetNomeJogador("Aparecido Celso de Souza Junior");

console.log(CalcularRankeadas(Jogador));

