
const fs = require('fs');
const trataErros = require('./erros/funcoesErro.js')
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (error, texto) => {
    try{
        if(error) throw error
       contarPalavras(texto); 
    }catch(error){
        trataErros(error);
    }
});