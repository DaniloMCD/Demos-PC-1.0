const products = [
    { nombre: "Laptop", descripcion: "Laptop de 14 pulgadas con 8GB de RAM" },
    { nombre: "Teléfono", descripcion: "Teléfono móvil con pantalla de 6.1 pulgadas" },
    { nombre: "Tablet", descripcion: "Tablet de 10 pulgadas con 64GB de almacenamiento" },
    { nombre: "Monitor", descripcion: "Monitor de 24 pulgadas con resolución Full HD" },
    { nombre: "Teclado", descripcion: "Teclado mecánico RGB con teclas retroiluminadas" },
    { nombre: "Mouse", descripcion: "Mouse inalámbrico ergonómico con 16000 DPI" },
    { nombre: "Impresora", descripcion: "Impresora láser a color con conectividad WiFi" },
    { nombre: "Auriculares", descripcion: "Auriculares Bluetooth con cancelación de ruido" },
    { nombre: "Cámara Web", descripcion: "Cámara web HD con micrófono integrado" },
    { nombre: "Disco Duro", descripcion: "Disco duro externo de 1TB con USB 3.0" },
    { nombre: "Altavoces", descripcion: "Altavoces estéreo con subwoofer y sonido envolvente" },
    { nombre: "Smartwatch", descripcion: "Reloj inteligente con monitor de frecuencia cardíaca" },
    { nombre: "Router", descripcion: "Router WiFi de doble banda con 4 antenas" },
    { nombre: "Tarjeta Gráfica", descripcion: "Tarjeta gráfica de 6GB con soporte para 4K" },
    { nombre: "Cargador Portátil", descripcion: "Cargador portátil de 10000mAh con puerto USB-C" }
];

function sortProducts(products){
    return products.sort((a, b)=> a.nombre>b.nombre ? 1:-1);
}

function searchProducts(products, searchName){
    return products.filter((products) => 
        products.nombre.toLowerCase().includes(searchName.toLowerCase()));
}

function showAllProducts(products){
    const divProduct = document.getElementById("productsContainer");
    divProduct.innerHTML= "";

    products.forEach(product => {
        const divP = document.createElement("div");
        divP.classList.add("product");
        divP.innerHTML = `<h3>${product.nombre}</h3> <p>${product.descripcion}</p>`;
        divProduct.appendChild(divP);
    });
}


document.getElementById("search").addEventListener("input", function(){
const nameSearched = this.value; //document.getElementById("search").value;
const filterProducts = searchProducts(products, nameSearched);
showAllProducts(filterProducts);
});

function showSortProducts(){
const sortProductsList = sortProducts(products);
showAllProducts(sortProductsList);
}

showAllProducts(products);
