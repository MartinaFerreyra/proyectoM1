//* =========================================
// GENERADOR DE PALETAS DE COLORES
//* =========================================


// =========================================
// BOTONES
// =========================================

const btnGenerar =
    document.getElementById("generar-paleta");

const btnGuardar =
    document.getElementById("guardar-paleta");


// =========================================
// EVENTOS
// =========================================

btnGenerar.addEventListener(
    "click",
    generarPaleta
);

btnGuardar.addEventListener(
    "click",
    guardarPaleta
);


// GUARDAR CANTIDAD
document.getElementById("cantidad")
    .addEventListener("change", (e) => {

        localStorage.setItem(
            "cantidad",
            e.target.value
        );

    });


// CAMBIAR FORMATO
document.getElementById("formato")
    .addEventListener("change", (e) => {

        localStorage.setItem(
            "formato",
            e.target.value
        );

        mostrarPaleta();

        mostrarPaletasGuardadas();

    });


// =========================================
// GENERAR PALETA
// =========================================

function generarPaleta() {

    const cantidad =
        parseInt(
            document.getElementById("cantidad").value
        );

    const formato =
        document.getElementById("formato").value;

    const contenedor =
        document.getElementById("paletteContainer");

    const paleta = [];

    contenedor.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {

        // GENERAR COLOR HEX
        const hex =
            generarcolorHexadecimal();

        // CONVERTIR A HSL
        const hsl =
            convertirHexAHSL(hex);

        // GUARDAR AMBOS FORMATOS
        paleta.push({

            hex: hex,

            hsl: hsl

        });

        // TARJETA
        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add(
            "color-card"
        );

        // BLOQUE COLOR
        const bloqueColor =
            document.createElement("div");

        bloqueColor.classList.add(
            "color"
        );

        bloqueColor.classList.add(
            "color-block"
        );

        bloqueColor.style.backgroundColor =
            hex;

        // TEXTO
        const codigoColor =
            document.createElement("p");

        codigoColor.classList.add(
            "codigo-color"
        );

        codigoColor.textContent =
            formato === "hex"
                ? hex
                : hsl;

        // COPIAR
        codigoColor.addEventListener(
            "click",
            () => {

                navigator.clipboard.writeText(
                    codigoColor.textContent
                );

                Mostrartooltip();

            }
        );

        tarjeta.appendChild(
            bloqueColor
        );

        tarjeta.appendChild(
            codigoColor
        );

        contenedor.appendChild(
            tarjeta
        );

    }

    // GUARDAR PALETA ACTUAL
    localStorage.setItem(
        "paleta",
        JSON.stringify(paleta)
    );

    // HABILITAR BOTÓN GUARDAR
    btnGuardar.disabled = false;

}


// =========================================
// GUARDAR PALETA
// =========================================

function guardarPaleta() {

    // OBTENER PALETA ACTUAL
    const paletaActual =
        JSON.parse(
            localStorage.getItem("paleta")
        ) || [];

    // SI NO HAY PALETA
    if (paletaActual.length === 0) {

        return;

    }

    // OBTENER GUARDADAS
    const paletasGuardadas =
        JSON.parse(
            localStorage.getItem(
                "paletasGuardadas"
            )
        ) || [];

    // AGREGAR NUEVA
    paletasGuardadas.unshift({

        id: Date.now(),

        colores: paletaActual

    });

    // GUARDAR
    localStorage.setItem(

        "paletasGuardadas",

        JSON.stringify(
            paletasGuardadas
        )

    );

    // MOSTRAR
    mostrarPaletasGuardadas();

}


// =========================================
// MOSTRAR PALETA ACTUAL
// =========================================

function mostrarPaleta() {

    const contenedor =
        document.getElementById(
            "paletteContainer"
        );

    const formato =
        document.getElementById(
            "formato"
        ).value;

    const paletaGuardada =
        JSON.parse(
            localStorage.getItem("paleta")
        ) || [];

    contenedor.innerHTML = "";

    paletaGuardada.forEach((colorObj) => {

        // TARJETA
        const tarjeta =
            document.createElement(
                "article"
            );

        tarjeta.classList.add(
            "color-card"
        );

        // BLOQUE
        const bloqueColor =
            document.createElement("div");

        bloqueColor.classList.add(
            "color"
        );

        bloqueColor.classList.add(
            "color-block"
        );

        bloqueColor.style.backgroundColor =
            colorObj.hex;

        // TEXTO
        const codigoColor =
            document.createElement("p");

        codigoColor.classList.add(
            "codigo-color"
        );

        codigoColor.textContent =
            formato === "hex"
                ? colorObj.hex
                : colorObj.hsl;

        // COPIAR
        codigoColor.addEventListener(
            "click",
            () => {

                navigator.clipboard.writeText(
                    codigoColor.textContent
                );

                Mostrartooltip();

            }
        );

        tarjeta.appendChild(
            bloqueColor
        );

        tarjeta.appendChild(
            codigoColor
        );

        contenedor.appendChild(
            tarjeta
        );

    });

}


// =========================================
// MOSTRAR PALETAS GUARDADAS
// =========================================

function mostrarPaletasGuardadas() {

    const section =
        document.getElementById(
            "savedSection"
        );

    const lista =
        document.getElementById(
            "savedList"
        );

    const formato =
        document.getElementById(
            "formato"
        ).value;

    const paletas =
        JSON.parse(
            localStorage.getItem(
                "paletasGuardadas"
            )
        ) || [];

    lista.innerHTML = "";

    // SI NO HAY PALETAS
    if (paletas.length === 0) {

        section.hidden = true;

        return;

    }

    // MOSTRAR SECCIÓN
    section.hidden = false;

    // RECORRER PALETAS
    paletas.forEach((paleta) => {

        const contenedor =
            document.createElement("div");

        contenedor.classList.add(
            "saved-palette"
        );

        // RECORRER COLORES
        paleta.colores.forEach((colorObj) => {

            const miniColor =
                document.createElement("div");

            miniColor.classList.add(
                "mini-swatch"
            );

            miniColor.style.backgroundColor =
                colorObj.hex;

            miniColor.title =
                formato === "hex"
                    ? colorObj.hex
                    : colorObj.hsl;

            // COPIAR
            miniColor.addEventListener(
                "click",
                () => {

                    navigator.clipboard.writeText(

                        formato === "hex"
                            ? colorObj.hex
                            : colorObj.hsl

                    );

                    Mostrartooltip();

                }
            );

            contenedor.appendChild(
                miniColor
            );

        });

        lista.appendChild(
            contenedor
        );

    });

}


// =========================================
// GENERAR HEX
// =========================================

function generarcolorHexadecimal() {

    const caracteresHex =
        "0123456789ABCDEF";

    let hex = "#";

    for (let i = 0; i < 6; i++) {

        hex += caracteresHex[
            Math.floor(
                Math.random() * 16
            )
        ];

    }

    return hex;

}


// =========================================
// CONVERTIR HEX A HSL
// =========================================

function convertirHexAHSL(hex) {

    let r =
        parseInt(
            hex.substring(1, 3),
            16
        ) / 255;

    let g =
        parseInt(
            hex.substring(3, 5),
            16
        ) / 255;

    let b =
        parseInt(
            hex.substring(5, 7),
            16
        ) / 255;

    let max =
        Math.max(r, g, b);

    let min =
        Math.min(r, g, b);

    let h, s, l;

    l = (max + min) / 2;

    if (max === min) {

        h = s = 0;

    } else {

        let d = max - min;

        s = l > 0.5
            ? d / (2 - max - min)
            : d / (max + min);

        switch (max) {

            case r:

                h =
                    (g - b) / d +
                    (g < b ? 6 : 0);

                break;

            case g:

                h =
                    (b - r) / d + 2;

                break;

            case b:

                h =
                    (r - g) / d + 4;

                break;

        }

        h /= 6;

    }

    h = Math.round(h * 360);

    s = Math.round(s * 100);

    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;

}


// =========================================
// TOOLTIP
// =========================================

let tooltipTimeout;

function Mostrartooltip() {

    const tooltip =
        document.querySelector(".tooltip");

    clearTimeout(
        tooltipTimeout
    );

    tooltip.style.opacity = "1";

    tooltip.style.visibility =
        "visible";

    tooltipTimeout =
        setTimeout(() => {

            tooltip.style.opacity = "0";

            tooltip.style.visibility =
                "hidden";

        }, 1500);

}


// =========================================
// RECUPERAR CONFIGURACIÓN
// =========================================

const cantidadGuardada =
    localStorage.getItem(
        "cantidad"
    );

const formatoGuardado =
    localStorage.getItem(
        "formato"
    );

if (cantidadGuardada) {

    document.getElementById(
        "cantidad"
    ).value = cantidadGuardada;

}

if (formatoGuardado) {

    document.getElementById(
        "formato"
    ).value = formatoGuardado;

}


// =========================================
// MOSTRAR AL RECARGAR
// =========================================

mostrarPaleta();

mostrarPaletasGuardadas();