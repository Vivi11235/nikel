const nome = "Victoria";
let nome2 = "";
let pessoaDefault = {
    nome: "Victoria",
    idade: "30",
    trabalho: "Dev" 
}

let nomes = ["Victoria", "Daniela","Paola"]
let pessoas = [
    {
        nome: "Victoria",
        idade: "30",
        trabalho: "Dev"  
    },
    {
        nome: "Daniela",
        idade: "18",
        trabalho: "Maquiadora"
    },
    {
        nome: "Paola",
        idade: "19",
        trabalho: "Personal"
    }
]

function alterarnome() {
    nome2 = "Juliana"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Sofia",
    idade: "20",
    trabalho: "Dançarina"
});

imprimirPessoas();