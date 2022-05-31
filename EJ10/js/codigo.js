function validar() {
  let texto = document.getElementById("text").value;
  console.log(texto);
  let text = "";

   // Paso la texto a minusculas y quito espacios
   texto=texto.toLowerCase().replace(/\s/g,"");
   /* Creo otra frase partiendo de la de texto pero
   la convierto en array, le doy la vuelta al array, lo paso a string*/
   fraserReverse=texto.split("").reverse().toString();
   // Le quito las "," con un remplace dentro del for
   // Lo igualo a -1 ya que tiene una coma menos que el número total de letras
   for (var i = 0; i < ((fraserReverse.length)-1); i++) {
     fraserReverse=fraserReverse.replace(",","");
   };
   // Comparo las dos frases.
   if(texto==fraserReverse){
     // Si el resultado es positivo
     text="es un Palindromo";
   }
   else{
     // Si el resultado es negativo
     text="no es un Palindromo";
   }
   // Muestro el el resultado 
  document.getElementById("txt").innerHTML = text;
  return true;

}




 
