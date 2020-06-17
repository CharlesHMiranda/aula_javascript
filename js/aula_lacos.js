// Escopo global

{
    // Escopo de bloco
}

function fn(){
    // Escopo de função
}


var nomeVar = 'Charles';
let nomeLet = 'Charles';
const nomeConst = 'Charles';

console.log(`nomeVar: ${nomeVar}`);
console.log(`nomeLet: ${nomeLet}`);
console.log(`nomeConst: ${nomeConst}`);



/*
const user = {
    name: 'Charles',
    lastName: 'Miranda'
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
        // fullName: user.name + " " + user.lastName
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);


/*

function clicou(){
    // alert("Obrigado por clicar!");
    // document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento"));
    console.log("passei aqui");
}

function redirecionar(){
    // window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br";
}

function trocar(elemento){
    // alert("Trocar texto");
    // document.getElementById("trocar").innerHTML = "Obrigado por passar o mouse aqui.";
    elemento.innerHTML = "Obrigado por passar o mouse aqui.";
}

function voltar(elemento){
    // alert("Trocar texto");
    // document.getElementById("trocar").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Pagina carregada.");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*

function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(soma(5, 10));
console.log(setReplace("Vai Japão!", "Japão", "Brazil"));

var idade = prompt("Qual a sua idade? ");
console.log(validaIdade(idade));
*/

/*
var idade = prompt("Qual a sua idade? ");

if (idade >= 18){
    alert("Maior de idade.");
} else {
    alert("Menor de idade.");
};



var count = 0;

while (count < 5){
    console.log(count);
    count++;
};

var x;

for (x=0; x <= 5; x++){
    console.log(x);
};

*/

/*
var d = new Date();
console.log(d);

console.log(d.getUTCDay());
console.log(d.getMonth()+1);
console.log(d.getFullYear());

*/
