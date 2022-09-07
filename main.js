const prendas = [];

function Prenda(tipo, color, precio,){
    this.tipo=tipo;
    this.color=color;
    this.precio=parseFloat(precio);
};

const buzo1 = new Prenda("buzo", "negro", 3900);
const buzo2 = new Prenda("buzo", "blanco", 4000);
const buzo3 = new Prenda("buzo", "rojo", 3900);
const remera1 = new Prenda("remera", "rojo", 1900);
const remera2 = new Prenda("remera", "negro", 2100);
const remera3 = new Prenda("remera", "blanco", 2100);
const pantalon1 = new Prenda("pantalon","blanco",2500);
const pantalon2= new Prenda ("pantalon","rojo", 3000);
const pantalon3= new Prenda ("pantalon", "negro", 2300);

function cargarPrenda (arr,valor){
    arr.push(valor);
};

cargarPrenda(prendas,buzo1);
cargarPrenda(prendas,buzo2);
cargarPrenda(prendas,buzo3);
cargarPrenda(prendas,remera1);
cargarPrenda(prendas,remera2);
cargarPrenda(prendas,remera3);
cargarPrenda(prendas,pantalon1);
cargarPrenda(prendas,pantalon2);
cargarPrenda(prendas,pantalon3);

console.log(prendas);

function filtrarPrenda(arr,filtro){
    const filtrado = arr.filter((el)=>{
     return el.tipo.includes(filtro)
    })
    return filtrado 
};

let ingresar = prompt("Que tipo de prenda estas buscando?")

const resultado = filtrarPrenda(prendas,ingresar);

const carrito = [];

const carritoCargado = cargarPrenda(carrito,resultado);

for (const element of resultado) {
    carrito.push(element)
};

function filtrarColor(arr,filtro){
    let colorFiltrado= arr.find(el=>{
        return el.color===filtro
    });
    return colorFiltrado;
}

let ingresaColor = prompt ("De que color te gustaría? \n Negro \n Blanco \n Rojo");

const colorFiltrado = filtrarColor (carrito,ingresaColor);

console.log(colorFiltrado);

const carritow = [];

const carritowCargado = cargarPrenda(carritow,colorFiltrado);

console.log(carritowCargado);

alert("Gracias por tu compra, el importe a pagare es: " + "$" + carritow[0].precio );
