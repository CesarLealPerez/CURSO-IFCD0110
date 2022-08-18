// trataientop de strings (cadenas de texto)
// y bucle for
const palabras_prohibidas = 
    ['mierda',
    'fútbol',
    'casino'];
function escribe(cadena, id) {
    let element = document.getElementById(id);
    element.innerHTML = cadena;
    element.style.fontSize = '50px';
}

let cadena_de_texto = prompt('escribe tu mensaje');
let cadena_a_minuscula = cadena_de_texto.toLowerCase();

for (i = 0; i < palabras_prohibidas.length; i++) {
    let prohibir = 
    palabras_prohibidas[i]
    .toLowerCase();
    if (cadena_a_minuscula.replace(prohibir, '') 
    != cadena_a_minuscula) {
        cadena_de_texto = cadena_de_texto.replaceAll(prohibir, 'chocolate');
    }
}
escribe(cadena_de_texto, 'main');



