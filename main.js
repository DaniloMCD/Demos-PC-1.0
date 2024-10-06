function compararObjetos(tipo1, tipo2) {
    if (tipo1 === tipo2) {
        alert('Los objetos son compatibles.');
    } else {
        alert('Los objetos no son compatibles.');
    }
}

document.getElementById('compararBtn').addEventListener('click', function() {
    const tipo1 = document.getElementById('GPU').value;
    const tipo2 = document.getElementById('CPU').value;

    compararObjetos(tipo1, tipo2);
});