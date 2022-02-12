const nome = document.getElementById("name");
const idade = document.getElementById("idade");
const result = document.getElementById("result");
const res = document.getElementById("res");
const frases = document.getElementById("text");

function calculo() {
    const nascimento = 2022 - idade.value;
    if (nome.value != "" && idade.value != "") {
        if (nascimento <= 0) {
            return result.innerText = `Caramba ${nome.value}, você e um bichão mermo`;
        }
        return result.innerText = `Que legal ${nome.value}, você nasceu em ${nascimento}`;
    }
    return result.innerText = `Preencha todos os campos`;
}



function troco() {
    if(idade.value != ""){
        let moedaDeUmReal = 1 * idade.value;
        let moedaDeCinquenta = moedaDeUmReal * 2
        let moedaDeVinteECinco = moedaDeCinquenta * 2
        let moedaDeDez = moedaDeUmReal * 10
        let moedaDeCinco = moedaDeVinteECinco * 5
    
        res.innerHTML += `<p>Você vai receber ${moedaDeUmReal} moedas de 1 Real de troco</p>`;
    
        res.innerHTML += `<p>Você vai receber ${moedaDeCinquenta} moedas de 0,50 Centavos de troco</p>`;
    
        res.innerHTML += `<p>Você vai receber ${moedaDeVinteECinco} moedas de 0,25 Centavos de troco</p>`;
    
        res.innerHTML += `<p>Você vai receber ${moedaDeDez} moedas de 0,10 Centavos de troco</p>`;
    
        res.innerHTML += `<p>Você vai receber ${moedaDeCinco} moedas de 0,05 Centavos de troco</p>`;
    
        return res;
    }
    res.innerHTML += `<p>Preencha todos os campos</p>`;
    return res;
}

function frase(){
    if(frases.value != ""){
        const texto = frases.value
        const palavras  = texto.split(" ")
        let cont = "";

        for(let i = 0; i < palavras.length; i++){
           const letra = palavras[i];
            cont += letra
        }

        res.innerHTML += `<p>Sua frase tem ${palavras.length} <span>palavras</span>.</p>`;

        res.innerHTML += `<p>Sua frase tem ${cont.length} <span>letras<span>.</p>`;
    }
    
}