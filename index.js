function Fibonacci(cantidadVeces) {
  if (cantidadVeces === 1) return [1];
  if (cantidadVeces === 2) return [1, 1];
  let resultado = [1, 1];
  for (let i = 2; i < cantidadVeces; i++) {
    resultado.push(resultado[i - 1] + resultado[i - 2]);
  }
  return resultado;
}

console.log(Fibonacci(8));
