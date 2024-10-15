function verificarCompatibilidad() {
    
    let tipo1 = document.getElementById("select1").value;
    let tipo2 = document.getElementById("select2").value;
    let tipo3 = document.getElementById("select3").value;
    let tipo4 = document.getElementById("select4").value;

    tipo1 = parseInt(tipo1);
    tipo2 = parseInt(tipo2);
    tipo3 = parseInt(tipo3);
    tipo4 = parseInt(tipo4);

    const tipos = [tipo1, tipo2, tipo3, tipo4];

    const todosTipo1 = tipos.every(tipo => tipo === 1);
    const todosTipo2 = tipos.every(tipo => tipo === 2);
    const todosTipo3 = tipos.every(tipo => tipo === 3);

    if (todosTipo1 || todosTipo2 || todosTipo3) {
        alert("Son compatibles");
    } else {
        alert("No son compatibles");
    }
}