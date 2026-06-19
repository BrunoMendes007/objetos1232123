const livros = require('./ordenacao/listaLivros.js');

let maisBarato = 0;

for(let atual = 0; atual < livros.leght; atual++){
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
}

console.log(`S{livros mais barato custa ${Livros[maisBarato].preco}`)

const precoslivros = [
    {
        titulo: "JavaScript",
        preco:25
    },  {
        titulo: "PHP",
        preco:15
    },  {
        titulo: "Java",
        preco:30
    },  {
        titulo: "Elixir",
        preco:50
    },  {
        titulo: "Python",
        preco:20
    },  {
        titulo: "GO",
        preco:45
    },
]