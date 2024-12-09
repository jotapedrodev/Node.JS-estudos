function filtraOcorrencias(paragrafo){
   return Object.keys(paragrafo).filter(chave => paragrafo[chave] >1 )
}

function montaSaidaArquivo(listaPalavra){
    let textoFinal = '';
    listaPalavra.forEach((paragrafo, indice) =>{
       const duplicadas = filtraOcorrencias(paragrafo).join(', ');
       textoFinal += `palavras duplicadas no paragrafo ${indice + 1}: 
       ${duplicadas} \n` 
    })

    return textoFinal;
}

export {montaSaidaArquivo};