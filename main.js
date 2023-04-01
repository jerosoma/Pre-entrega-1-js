
let PrecioRemera = 500
let PrecioPantalon = 2000
let PrecioBuzo = 1500
let interes = 1.1
let cuotas

function login(){
    alert("¡Bienvenido/a al sitio web del distribuidor de indumentaria más grande del país! Aquí encontrarás todas las prendas y modelos que buscás")
    alert("Con tu compra mayor a 5.000 pesos, 10% de descuento y hasta 12 cuotas sin interés")
    let busqueda = prompt("¿Qué es lo que busca? (Remeras/Pantalones/Buzos)")
    if (busqueda == "Remeras"){
        alert("El precio de las remeras es 500 pesos")
        let cantidad = prompt("¿Cuántos remeras querés encargar?")
        preciofinal = PrecioRemera * cantidad
        while (preciofinal > 5000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        alert("El precio de tu compra es de " + preciofinal.toFixed())

        continuar = prompt("¿Querés continuar con tu compra? (sí/no)")
        if(continuar == "sí"){
            cuotas = prompt("¿En cuantas cuotas querés hacer la transacción? (1/3/6/9/12)")
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Querés continuar con la compra? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por tu compra!")
            }else{
                alert("No hay problema, volvé cuando quieras!")
            }

        }else{
            alert("¡No hay problema! En nuestro sitio vas a encontrar todos los modelos y prendas que buscás")
        }
    }else if(busqueda == "Pantalones"){
        alert("El precio de los pantalones es de 2.000 pesos")
        let cantidad = prompt("¿Cuántos pantalones querés encargar?")
        preciofinal = PrecioPantalon * cantidad
        while (preciofinal > 5000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        alert("El precio de tu compra es de " + preciofinal.toFixed())

        continuar = prompt("¿Querés continuar con la compra? (sí/no)")
        if(continuar == "sí"){
            cuotas = prompt("¿En cuantas cuotas querés hacer la transacción? (1/3/6/9/12)")
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Querés continuar con la compra? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por tu compra, vuelva pronto!")
            }else{
                alert("¡No hay problema! En nuestro sitio vas a encontrar todos los modelos y prendas que buscás")
            }

        }
        
        
        else{
            alert("¡No hay problema! En nuestro sitio vas a encontrar todos los modelos y prendas que buscás")
        }
    }
    
    else if(busqueda == "Buzos"){
        alert("El precio de los buzos es de 1.500 pesos")
        let cantidad = prompt("¿Cuántos buzos querés encargar?")
        preciofinal = PrecioBuzo * cantidad
        while (preciofinal > 5000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        alert("El precio de tu compra es de " + preciofinal.toFixed())

        continuar = prompt("¿Querés continuar con la compra? (sí/no)")
        if(continuar == "sí"){
            cuotas = prompt("¿En cuantas cuotas querés hacer la transacción? (1/3/6/9/12)")
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Querés continuar con la compra? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por tu compra, volvé pronto!")
            }else{
                alert("¡No hay problema! En nuestro sitio vas a encontrar todos los modelos y prendas que buscás")
            }

        }
        
        
        else{
            alert("¡No hay problema! En nuestro sitio vas a encontrar todos los modelos y prendas que buscás")
        }
    }

    else{
        alert("En este momento no tenemos ese producto")
    }
}



login()