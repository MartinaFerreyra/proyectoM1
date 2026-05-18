//* =========================================
// GENERADOR DE PALETAS DE COLORES
//* =========================================

const btnGenerar = document.getElementById("generar-paleta");

btnGenerar.addEventListener("click", generarPaleta);

function generarPaleta() {      

    const cantidad = parseInt(document.getElementById("cantidad").value);

    const formato = document.getElementById("formato").value;

    const contenedor = document.getElementById("paletteContainer");


    //obtener los valores actuales seleccionados, para guardarlos en el localStorage
    localStorage.setItem("cantidad", cantidad);

    localStorage.setItem("formato", formato);

    contenedor.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {    
        let color;
        if (formato === "hex") {
            color = generarcolorHexadecimal();
        } else if (formato === "hsl") {
            color = generarColorHSL();
        }

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("color-card");

        const bloqueColor = document.createElement("div");

        bloqueColor.classList.add("color");
        bloqueColor.classList.add("color-block");
        bloqueColor.style.backgroundColor = color;
        
        const codigoColor = document.createElement("p");
        codigoColor.classList.add("codigo-color");
        codigoColor.textContent = color;

        codigoColor.addEventListener("click", () => {
            navigator.clipboard.writeText(color);
            Mostrartooltip();
        });

        
        tarjeta.appendChild(bloqueColor);
        tarjeta.appendChild(codigoColor);
        contenedor.appendChild(tarjeta);
    }
}


function generarcolorHexadecimal() {
    const caracteresHex = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += caracteresHex[Math.floor(Math.random() * 16)];

    }
    return hex;
}

function generarColorHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
}


let tooltipTimeout;

function Mostrartooltip() {

    const tooltip =
        document.querySelector(".tooltip");



    //* =============================
    // CANCELAR TIMEOUT ANTERIOR
    //* =============================

    clearTimeout(tooltipTimeout);



    //* =============================
    // REINICIAR TOOLTIP
    //* =============================

    tooltip.style.opacity = "0";



    setTimeout(() => {

        tooltip.style.opacity = "1";

        tooltip.style.visibility = "visible";

    }, 10);



    //* =============================
    // OCULTAR LUEGO
    //* =============================

    tooltipTimeout = setTimeout(() => {

        tooltip.style.opacity = "0";

        tooltip.style.visibility = "hidden";

    }, 1500);

}

const cantidadGuardada = localStorage.getItem("cantidad");
// Recupera desde localStorage el valor guardado con la clave "cantidad"
const formatoGuardado = localStorage.getItem("formato");

if(cantidadGuardada) {
// Verifica si existe una cantidad guardada
document.getElementById("cantidad").value = cantidadGuardada;

}else if  (formatoGuardado) {
document.getElementById("formato").value = formatoGuardado; 
}

console.log('Color guardado', localStorage.getItem('formato'));


