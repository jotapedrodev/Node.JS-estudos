import fs from 'fs'
import trataErros from './erros/funcoesErro.js';
import { contarPalavras } from './index.js';
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (error, texto) => {
    try{
        if(error) throw error
       const restulado = contarPalavras(texto); 
       criaESalvaArquivo(restulado, endereco)
    }catch(error){
        trataErros(error);
    }
});


async function criaESalvaArquivo(listaPalavra, endereco){
    const arquivoNovo= `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringfy(listaPalavra)
    try {
       await fs.promises.writeFile(arquivoNovo, textoPalavras)
       console.log('arquivo criado')
    } catch (error) {
        throw error;
        
    }
}