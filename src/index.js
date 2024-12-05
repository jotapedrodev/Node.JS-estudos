
const fs = require('fs');
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
fs.readFile(link, 'utf-8', (error, texto) => {
    quebraParagrafos(texto);
    //verificaPalavaraDuplicada(texto);
});

function quebraParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavaraDuplicada(paragrafo);
    })
console.log (contagem)
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

}

function verificaPalavaraDuplicada(texto){
    const listaPalavra = texto.split(' ')
    const resultado = {};
    listaPalavra.forEach(palavra => {
        if(palavra.length >=3){
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0)+ 1
        }
    })
return resultado;
};

