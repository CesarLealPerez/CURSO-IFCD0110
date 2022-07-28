let i = 0;
let texto = "Hola Mundo";
function escribe(){
    $('#main').append(texto + ' ' + i + '<br>');
    i++; 
    if (i>100) {
            return;
        }
    setTimeout(function(){
        escribe();
    },100)
}
/*
function escribe(texto){
    for (i=0;i<101;i++){
       texto = texto + ' ' + i
       document.getElementById('main').innerHTML=texto;
  
   }
}
*/
// comentado paraque no se dispàre sino con el o0nclick 
//escribe("Hola Mundo");


// función que devuelve datos.
function sumar(n1, n2){
    let resultado = n1 + n2;
    return resultado;
}