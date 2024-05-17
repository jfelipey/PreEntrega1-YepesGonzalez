// Definición de variables de cantidad de productos
let cantProd = 0;
let cantAlf = 0;
let cantChe = 0;
let cantPos = 0;
let cantTor = 0;
let opc = 0;
let cantComp = 0;

// Función Vaciar

function vaciar() {
    cantProd = 0;
    cantAlf = 0;
    cantChe = 0;
    cantPos = 0;
    cantTor = 0;
}

// Función pagar
const pago = function(cantAlf, cantChe, cantPos, cantTor) {

    return ((cantAlf * 2) + (cantChe * 4) + (cantPos * 6) + (cantTor * 9))

}
// Menú de opciones

do {
    opc = parseInt(prompt("ingrese la opción que desea"))

    // OPCIONES SALIR - CANCELAR PEDIDO

    if ((opc === 7) && (cantProd !== 0)) {

        alert("Para poder salir debe pagar o cancelar su pedido");
        opc = 0;
    }

    else if ((opc === 7) && (cantProd === 0)) {

        alert("Gracias por visitarnos, vuelva pronto");
    }

    else if ((opc === 6) && (cantProd === 0)) {
        alert("Usted no tiene productos para cancelar");
    }

    else if ((opc === 6) && (cantProd !== 0)) {

        vaciar();
        alert("Su pedido ha sido cancelado exitosamente");

    }

    // OPCIÓN PAGAR

    else if ((opc === 5) && (cantProd === 0)) {
        alert("Usted no tiene productos para pagar");
    }

    else if ((opc === 5) && (cantProd !== 0)) {

        
        console.log("Usted compró " + cantAlf + " Alfajor(es)");
        console.log("Usted compró " + cantChe + " Cheesecake(s) de limón");
        console.log("Usted compró " + cantPos + " Postre(s) de 3 leches");
        console.log("Usted compró " + cantTor + " Torta(s) de chocolate");
        console.log("Usted compró " + cantProd + " Productos de nuestra repostería");
        console.log("Total a pagar: " + (pago(cantAlf, cantChe, cantPos, cantTor))+" USD");
        alert("Su total a pagar fue: " + (pago(cantAlf, cantChe, cantPos, cantTor)) +" USD" + " y fue pagado exitosamente. Gracias por su compra");
        vaciar();
    }
    // OPCIONES DE COMPRA PRODUCTOS

    else if (opc === 1) {

        cantComp = parseInt(prompt("Ingrese la cantidad de alfajores que desea comprar"));
        while (Number.isNaN(cantComp)) {
            cantComp = parseInt(prompt("El valor ingresado no es correcto. Por favor ingrese una cantidad en número"));
        }

        cantAlf = (cantAlf + cantComp);
        cantProd = cantProd + cantComp;
        cantComp = 0;
        alert("Continue con su compra");
    }

    else if (opc === 2) {

        cantComp = parseInt(prompt("Ingrese la cantidad de cheesecakes que desea comprar"));
        while (Number.isNaN(cantComp)) {
            cantComp = parseInt(prompt("El valor ingresado no es correcto. Por favor ingrese una cantidad en número"));
        }

        cantChe = (cantChe + cantComp);
        cantProd = cantProd + cantComp;
        cantComp = 0;
        alert("Continue con su compra");
    }

    else if (opc === 3) {

        cantComp = parseInt(prompt("Ingrese la cantidad de postres de limón que desea comprar"));
        while (Number.isNaN(cantComp)) {
            cantComp = parseInt(prompt("El valor ingresado no es correcto. Por favor ingrese una cantidad en número"));
        }

        cantPos = (cantPos + cantComp);
        cantProd = cantProd + cantComp;
        cantComp = 0;
        alert("Continue con su compra");
    }

    else if (opc === 4) {

        cantComp = parseInt(prompt("Ingrese la cantidad de tortas de chocolate que desea comprar"));
        while (Number.isNaN(cantComp)) {
            cantComp = parseInt(prompt("El valor ingresado no es correcto. Por favor ingrese una cantidad en número"));
        }

        cantTor = (cantTor + cantComp);
        cantProd = cantProd + cantComp;
        cantComp = 0;
        alert("Continue con su compra");
    }

    else {

        alert("El código ingresado no es válido");

    }

    // console.log("Cantidad productos " + cantProd);
    // console.log("Cantidad Alfajores " + cantAlf);
    // console.log("Cantidad cheese " + cantChe);
    // console.log("Cantidad postres " + cantPos);
    // console.log("Cantidad torta " + cantTor);
    // console.log("Opciones " + opc);
    // console.log("Cantidad compra " + cantComp);

} while (opc !== 7);
