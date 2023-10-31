function calcularFibonacci() {
    const input = document.getElementById("inputNumber");
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  // Limpia el resultado anterior

    const n = parseInt(input.value);
    if (isNaN(n)) {
        resultado.innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    if (n <= 0) {
        resultado.innerHTML = "El número debe ser mayor que 0.";
        return;
    }

    const fibonacciSeries = calcularSerieFibonacci(n);
    resultado.innerHTML = "Serie de Fibonacci: " + fibonacciSeries.join(", ");
}

function calcularSerieFibonacci(n) {
    const serie = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        serie.push(a);
        const temp = a + b;
        a = b;
        b = temp;
    }

    return serie;
}
