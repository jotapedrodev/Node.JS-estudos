function trataErros(error) {
 if(error.code == 'ENOENT') {
    throw new Error('Arquivo nao encontrado');
 }  else{
    return 'error na aplicção'
 }
}

module.exports = trataErros