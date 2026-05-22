
const esDivisorValido = (divisor) => divisor >= 2 && divisor <= 7;

// Retorna true si el resto de la división es exactamente cero (es múltiplo)

const esMultiplo = (dividendo, divisor) => dividendo % divisor === 0;

// Función flecha principal que gestiona la aplicación

const procesarFormulario = () => {
    const dividendoInput = document.getElementById('dividendo');
    const divisorInput = document.getElementById('divisor');
    const resultadoDiv = document.getElementById('resultado');

    const dividendo = parseInt(dividendoInput.value);
    const divisor = parseInt(divisorInput.value);

    // Limpiar estilos previos del contenedor de resultados
    
    resultadoDiv.className = "mt-6 text-center font-medium p-3 rounded-lg";
    resultadoDiv.classList.remove('hidden');

    // Validación de campos vacíos

    if (isNaN(dividendo) || !divisorInput.value) {
        resultadoDiv.innerText = "Por favor, introduce ambos números.";
        resultadoDiv.classList.add('bg-yellow-100', 'text-yellow-800');
        return;
    }

    // Validación del rango del divisor (entre 2 y 7)

    if (!esDivisorValido(divisor)) {
        resultadoDiv.innerText = "Error: El divisor debe estar comprendido entre 2 y 7.";
        resultadoDiv.classList.add('bg-red-100', 'text-red-800');
        return;
    }

    if (esMultiplo(dividendo, divisor)) {
        resultadoDiv.innerText = `¡Sí! El número ${dividendo} es múltiplo de ${divisor}.`;
        resultadoDiv.classList.add('bg-green-100', 'text-green-800');
    } else {
        resultadoDiv.innerText = `No. El número ${dividendo} NO es múltiplo de ${divisor}.`;
        resultadoDiv.classList.add('bg-orange-100', 'text-orange-800');
    }
};
document.getElementById('btnCalcular').addEventListener('click', () => {
    procesarFormulario();
});
