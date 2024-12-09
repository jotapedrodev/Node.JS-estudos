function contarPalavras(texto){
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavaraDuplicada(paragrafo);
    })
console.log (contagem)
}

function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n');
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

