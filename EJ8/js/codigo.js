function validar() {
  let numero = document.getElementById("numero").value;
  text = "";

  if(numero%2 == 0){
    text = "Es par";
    console.log("par");
  }else{
    text = "Es impar";

  }
  

  document.getElementById("txt").innerHTML = text;
  return true;

}
