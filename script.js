

const chave = "917fd02eed7b4cd8ae282e83de249ff8";

function colocarNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".tempo").innerHTML = `${Math.floor(dados.main.temp)}°C`;
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".texto-umidade").innerHTML = `Umidade: ${dados.main.humidity}%`;
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarNaTela(dados)
    console.log(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-busca").value

    buscarCidade(cidade)
}


