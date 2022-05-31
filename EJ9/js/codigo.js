function validar() {
  let texto = document.getElementById("text").value;
  console.log(texto);
  let text = "";

  if(texto == texto.toUpperCase()){

    text = "Estan Todas en mayuscula";

  }else if(texto == texto.toLowerCase()){
    text = "Estan todas en Minuscula";

  }else{
    text = "Tiene ambas Mayuscuas y Minusculas";

  }
  

  document.getElementById("txt").innerHTML = text;
  return true;

}
