// Importa o módulo 'fs' (file system) do Node.js, usado para trabalhar com arquivos.
const fs = require('fs');

// 'process.argv' é um array que contém os argumentos passados para o script via terminal.
// Aqui pegamos todos os argumentos.
const caminhoArquivo = process.argv;

// Pegamos o terceiro argumento (índice 2), que será o caminho do arquivo a ser lido.
const link = caminhoArquivo[2];

//    - 'error': contém informações do erro, caso aconteça.
//    - 'texto': contém o conteúdo do arquivo se a leitura for bem-sucedida.
fs.readFile(link, 'utf-8', (error, texto) => {
    // Mostra o conteúdo do arquivo no console.
    console.log(texto);
});

// Exibe no console o valor de 'link' (o caminho do arquivo passado).
console.log(link);
