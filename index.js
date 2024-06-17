const container= document.querySelector(".container")

function obtenerFactorial(){
    let numeroACalcular= parseFloat(prompt("ingrese el numero a calcular el factorial"));

    if(!isNaN(numeroACalcular)){
        calcularFactorial(numeroACalcular);

    }else{
        container.innerHTML=`<h1> no es un numero el dato ingresado</h1>`
    }


}

obtenerFactorial();


function calcularFactorial(numero){
    let i=1;
    let acumulador=1;
    while(i<=numero){
        acumulador=acumulador*i;
        i++;
    }
    container.innerHTML=`
        <h1>El resultado es: ${acumulador}</h1>
    `
}
