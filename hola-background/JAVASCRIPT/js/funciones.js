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

let nturno = 0;
// función que devuelve datos.
function sumar(n1){
    if (n1==1){
        nTurno++;
    }
    if (n1 == -1){
        nturno = nturno -1;
    }
   // escribiomos nturno en el div correewspoindiente
}