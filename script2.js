var textInput = document.querySelector("#input-texto")
var outInput = document.querySelector("#output-texto")


function criptografar(){
    var texto = textInput.value;

    var resultcripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("output-texto").innerHTML = resultcripto
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i")
    .replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("output-texto").innerHTML = resultDescripto
}

function copiar(){
    var textoCop = document.getElementById("output-texto");
    
    textoCop.select();
    document.execCommand("copy");
    alert("Texto Copiado !!!")
}
