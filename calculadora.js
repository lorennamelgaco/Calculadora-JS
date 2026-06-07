const num1El      = document.getElementById("num1");
const num2El      = document.getElementById("num2");
const resultadoEl = document.getElementById("resultado");

function pegarValores() {
  const n1 = Number(num1El.value);
  const n2 = Number(num2El.value);
 
  if (num1El.value === "" || num2El.value === "") {
    resultadoEl.textContent = "⚠️ Preencha os dois campos.";
    return null;
  }
 
  return { n1, n2 };
}

document.getElementById("somar").addEventListener("click", function() {
  const valores = pegarValores();
  if (!valores) return;
 
  const resultado = valores.n1 + valores.n2;
  resultadoEl.textContent = "Resultado: " + resultado;
});

document.getElementById("subtrair").addEventListener("click", function() {
  const valores = pegarValores();
  if (!valores) return;
 
  const resultado = valores.n1 - valores.n2;
  resultadoEl.textContent = "Resultado: " + resultado;
});

ocument.getElementById("multiplicar").addEventListener("click", function() {
  const valores = pegarValores();
  if (!valores) return;
 
  const resultado = valores.n1 * valores.n2;
  resultadoEl.textContent = "Resultado: " + resultado;
});

document.getElementById("dividir").addEventListener("click", function() {
  const valores = pegarValores();
  if (!valores) return;
 
  if (valores.n2 === 0) {
    resultadoEl.textContent = "⚠️ Não é possível dividir por zero.";
    return;
  }
 
  const resultado = valores.n1 / valores.n2;
  resultadoEl.textContent = "Resultado: " + resultado;
});
