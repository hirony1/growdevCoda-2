const nome = "Hiroaki";
let nome2 = "Hiroaki";
let pessoaDefault = {
    nome: "Hiro",
    idade: "22",
    trabalho: "Programador"
}

let nomes = ["Hiroaki", "Hiro", "Hira"]

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Hiroaki",
        idade: "22",
        trabalho: "Programador"
    },
    {
        nome: "Hiro",
        idade: "23",
        trabalho: "UX/UI Designer"
    }
];

function alterarNome() {
    nome2 = "Hirooo"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {

    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}


function imprimirPessoas(){
    console.log("-----------IMPRIMIR PESSOAS------------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

console.log(pessoas)
//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//nome: "Hira",
//idade: "23",
//trabalho: "Programador UX/UI"
//})
//alterarNome();
//recebeEalteraNome("Hira");
//recebeEalteraNome("Hire");