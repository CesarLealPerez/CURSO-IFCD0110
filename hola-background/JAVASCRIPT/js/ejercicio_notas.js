let nota = Number(prompt('Introduzca la nota del alumno'));
/*
if (nota > 0 && nota < 11){
    if (nota < 3) alert('muy deficiente');
    if (nota > 2 && nota < 5) alert('insuficiente');
    if (nota > 4 && nota < 6) alert('suficiente');
    if (nota > 5 && nota < 7) alert('bien');
    if (nota > 6 && nota < 9) alert('notable');
    if (nota > 8) alert('sobresaliente');
}else{
    alert('introduce una  nota válida');
}*/

switch(nota){
    case 0:
    case 1:
    nota = "Muy deficiente";
    break;
    case 2:
    case 3:
    case 4:
    nota = "Insuficiente";
    break;
    case 5:
    case 6:
    nota = "Bien";
    break;
    case 7:
    case 8:
    nota = "Notable";
    break;
    case 9:
    case 10:
    nota = "Sobresaliente";
    break;
    default:
        nota = '<span style="color:red">Error</span>: Escribe un número del 1 al 10';
}
document.getElementById('main').innerHTML=`<h2>${nota}</h2>`;