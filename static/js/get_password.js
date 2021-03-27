let caracter, password;

function generarPassword(longitud,tipo) {
    switch(tipo){
        case 'numerico':
            caracter = "0123456789";
            break;
        case 'alfa_numerico':
            caracter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
    }
    password = "";
    for (let i=0; i < longitud; i++){
        password += caracter.charAt(Math.floor(Math.random()*caracter.length));
    }
    return password;
}