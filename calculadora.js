let visor = "0";
let numeroAnterior = null;
let operador = null;
let novoNumero = false;

const resultadoEl = document.getElementById("resultado");

function atualizarVisor() {
  if (operador && !novoNumero) {
    resultadoEl.textContent = numeroAnterior + " " + operador + " " + visor;
  } else {
    resultadoEl.textContent = visor;
  }
}

document.querySelectorAll(".btn-num").forEach(function(btn) {
  btn.addEventListener("click", function() {
    const num = btn.dataset.num;

    if (num === "." && visor.includes(".")) return;

    if (novoNumero) {
      visor = num === "." ? "0." : num;
      novoNumero = false;
    } else {
      visor = visor === "0" && num !== "." ? num : visor + num;
    }

    atualizarVisor();
  });
});

document.querySelectorAll(".btn-op").forEach(function(btn) {
  btn.addEventListener("click", function() {
    const op = btn.dataset.op;

    if (op === "+/-") {
      visor = String(Number(visor) * -1);
      atualizarVisor();
      return;
    }

    if (op === "%") {
      visor = String(Number(visor) / 100);
      atualizarVisor();
      return;
    }

    if (numeroAnterior !== null && !novoNumero) {
      calcular();
    }

    numeroAnterior = Number(visor);
    operador = op;
    novoNumero = true;

    resultadoEl.textContent = numeroAnterior + " " + operador;
  });
});

document.getElementById("igual").addEventListener("click", function() {
  if (operador === null || numeroAnterior === null) return;

  const expressao = numeroAnterior + " " + operador + " " + visor;
  calcular();
  resultadoEl.textContent = expressao + " = " + visor;

  operador = null;
  numeroAnterior = null;
  novoNumero = true;
});

document.getElementById("limpar").addEventListener("click", function() {
  visor = "0";
  numeroAnterior = null;
  operador = null;
  novoNumero = false;
  atualizarVisor();
});

function calcular() {
  if (operador === null || numeroAnterior === null) return;

  const n1 = numeroAnterior;
  const n2 = Number(visor);
  let resultado;

  if (operador === "+")  resultado = n1 + n2;
  if (operador === "−")  resultado = n1 - n2;
  if (operador === "×")  resultado = n1 * n2;
  if (operador === "÷") {
    if (n2 === 0) {
      visor = "Erro";
      atualizarVisor();
      return;
    }
    resultado = n1 / n2;
  }

  visor = String(parseFloat(resultado.toFixed(10)));
}