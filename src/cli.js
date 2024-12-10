import fs from 'fs'
import path from 'path'
import trataErros from './erros/funcoesErro.js';
import { contarPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();
program
.version('0.0.1')
.option('-t, --texto <string>', 'caminho do texto a ser processado')
.option('-d, --destino <string>, caminho da pasta onde salvar o arquivo dos resultados')
.action((options) => {
    const {texto, destino} = options;

    if(!texto || !destino) {
        console.error(chalk.red('erro favor inserir caminho de origem e destino'))
        program.help();
        return;
    }
const caminhoTexto = path.resolve(texto);
const caminhoDestino = path.resolve(destino);
    try{
processaArquivo(caminhoTexto, caminhoDestino)
console.log(chalk.green('texto processado com sucesso'))
    }catch(erro){ 
        console.log(chalk.red('ocorreu um erro no processamento', erro));}
})
program.parse();


function processaArquivo(texto, destino){
    fs.readFile(texto, 'utf-8', (error, texto) => {
        try{
            if(error) throw error
           const restulado = contarPalavras(texto); 
           criaESalvaArquivo(restulado, destino)
        }catch(error){
            trataErros(error);
        }
    });
}


async function criaESalvaArquivo(listaPalavra, endereco){
    const arquivoNovo= `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavra)
    try {
       await fs.promises.writeFile(arquivoNovo, textoPalavras)
       console.log(chalk.blue('arquivo criado'))
    } catch (error) {
        throw error;
        
    }
}

//uso de then/finally

// function criaESalvaArquivo(listaPalavra, endereco){
//     const arquivoNovo= `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavra)
    
// fs.promises.writeFile(arquivoNovo, textoPalavras)
// .then(() => {
//     console.log('arquivo criado');
// }).catch((error) => {
//     throw error
// })
// .finally(() => console.log('operacao finalizada'))
// }
