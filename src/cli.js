import fs from 'fs'
import trataErros from './erros/funcoesErro.js';
import { contarPalavras } from './index.js';
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