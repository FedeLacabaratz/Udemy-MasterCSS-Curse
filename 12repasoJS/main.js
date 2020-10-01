const nombre = "Federico Lacabaratz";
const altura = 174;

const concatenacion = nombre + " " + altura;

const datos = document.getElementById("datos");

datos.innerHTML = `
    <h1>Hola, Soy la caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h4>Mido: ${altura} cm</h4>
`;

if (altura >= 174) {
    datos.innerHTML += `
        <h1>Eres una persona alta</h1>
    `;
} else {
    datos.innerHTML += `
        <h1>Eres mas bajo que yo</h1>
    `;
}

// for(i = 2010; i<=2020; i++) {
//     // Bloque de instrucciones
//     datos.innerHTML += `<h2>Estamos en el año: ${i}<h2>`;
// }

function muestraMiNombre(nombre, altura) {
    const misDatos = `
        <h1>Hola, Soy la caja de datos</h1>
        <h2>Mi nombre es ${nombre}</h2>
        <h4>Mido: ${altura} cm</h4>
    `;

    return misDatos;
}

function imprimir() {
    const datos =  document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("Lucy", 33);
}

imprimir();

const nombres = ['Victor', 'Antonio', 'Joaquin'];

document.write('<h1>Listado de nombres:</h1>')
// for(i = 0; i < nombres.length; i++) {
//     document.write(nombres[i] + '<br/>');
// }
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>')
});