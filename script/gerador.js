const senhaCampo = document.getElementById('senhacampo');
const caracteres = document.getElementById('caracteres');
const minusculo = document.getElementById('minusculo');
const maiusculo = document.getElementById('maiusculo');
const numero = document.getElementById('numero');
const simbolo = document.getElementById('simbolos');
const botao = document.getElementById('gerarSenha');
const variaveis = {
    minusculo:minusculo,
    maiusculo:maiusculo,
    numero:numero,
    simbolo:simbolo
}
const funcoesGeradoras = {
    minusculo:gerarMinusculo,
    maiusculo:gerarMaiusculo,
    numero:gerarNumero,
    simbolo:gerarSimbolo
}
botao.addEventListener('click',gerarSenha);

//gerador de senha
function gerarSenha(){
    let senha = "";
    if(!(minusculo.checked||maiusculo.checked||numero.checked||simbolo.checked)){
        alert('Nenhum tipo de caracter selecionado');
        return '';
    }
    for(let i = 0;i < caracteres.value;){
        let valorAleatorio = Math.floor(Math.random()*4);
        let chave = Object.keys(funcoesGeradoras)[valorAleatorio];
        if(!variaveis[chave].checked)
            continue;
        senha+=funcoesGeradoras[chave]();
        i++;
    }
    senhaCampo.value = senha;
    focarSenhaCampo();
}
//focar senha campo
function focarSenhaCampo(){
    senhaCampo.focus();
    senhaCampo.select();
}
//criar gerador letra
function gerarMinusculo(){
    const valorAleatorio = Math.floor(Math.random()*(122-97)+97);
    return String.fromCharCode(valorAleatorio);
}
function gerarMaiusculo(){
    const valorAleatorio = Math.floor(Math.random()*(90-65)+65);
    return String.fromCharCode(valorAleatorio);
}
function gerarNumero(){
    const valorAleatorio = Math.floor(Math.random()*(57-48)+48);
    return String.fromCharCode(valorAleatorio);
}
function gerarSimbolo(){
    const simbolos = "!@#$%&*()_-=+[{}]/><";
    const valorAleatorio = Math.floor(Math.random()*simbolos.length);
    return simbolos.charAt(valorAleatorio);
}