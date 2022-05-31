let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];
let letrasnumero = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,20,21,22
  ];

function validar() {
  let numero = document.getElementById("dni").value;

  if (numero <= 0 || numero >= 99999999) {
    alert("El dni es incorrecto");
    return false;
  }

  let letra = document.getElementById("lletra").value;
  letra = letra.toUpperCase();

  letraexiste = false;
  letras.forEach(aletra => {

    if (aletra === letra) {
        letraexiste = true;
    }
      
  });

  if(!letraexiste){
    alert("La letra no es correcta");
    return false;
  }

  resto = numero%23

  if(letras[resto] == letra ){
      alert("LETRA DEL DNI CORRECTAMENTE");
  }else{
    alert("LETRA DEL DNI INCORRECTA");
  }

  return true;
}
