
const fs = require('fs');
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
fs.readFile(link, 'utf-8', (error, texto) => {
});

function verificaPalavaraDuplicada(texto){
    const listaPalavra = texto.split(' ')
    listaPalavra.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0)+ 1
    })
console.log (resultado);
}

