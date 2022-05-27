let tamanhoElement = document.querySelector("#tamanho");
let buttonElement = document.querySelector("#botao");

let tamanhoSenha = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let conteudoSenha = document.querySelector("#conteudo-senha");

let charset = "abcdefghijqlmnopqrstuvABCDEFGHIJQLMNOPQRSTUVWXYZ0123456789.@!$";
let novaSenha = "";

tamanhoSenha.innerHTML = tamanhoElement.value;

tamanho.oninput = function(){
  tamanhoSenha.innerHTML = this.value;
}

function gerarSenha(){

let pass = "";
for(let i = 0, n = charset.length; i < tamanhoElement.value; ++i){
  pass += charset.charAt(Math.floor(Math.random() * n));
}
  
  conteudoSenha.classList.remove("transp")
  senha.innerHTML = pass;
  novaSenha = pass;
}

function copiar(){
  alert("Senha copiada!!")
  navigator.clipboard.writeText(novaSenha);
}
