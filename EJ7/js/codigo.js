function validar() {
  let numero = document.getElementById("numero").value;
  factorial = 1;

  for (let i = 0; numero != 0; i++) {
    factorial = factorial * numero;
    numero--;
  }
  console.log(factorial);
  alert(factorial);
  return true;
}
