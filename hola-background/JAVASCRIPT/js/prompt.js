// Vamos a realizar una entrada de datos
// y darle salida por la pantalla con un alert();


// declaramos variable
let edad;

// Le damos un valor a variable.
// En este caso le damos un valor que viene de un return de una función.
edad = prompt('Introduce tu edad');
// Creamos un condicional para saber si nos han escrito un número
if (Number(edad) == edad) {
    if (edad<18){
        alert('Tienes que ser mayor de 18 años para entrar a este sitio');
        window.location.href="https://elpais.com";
    }
    // Escribimos el resultado
    document.getElementById('main').innerHTML = `
    <h2>Enhorabuena!! Tu edad es </h2>
    <h1>${edad}</h1>
`;
} else {
    // No es un número, avisamos, 
    alert('Tiene que ser un número');
    // Recargamos para que vualva a salir el prompt
    window.location.reload();
}
