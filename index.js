const mousetrap = require("mousetrap")

mousetrap.bind("1",clickUno)
mousetrap.bind("2",clickDos)
mousetrap.bind("+",clickSuma)
mousetrap.bind("3",clickTres)
mousetrap.bind("4",clickCuatro)
mousetrap.bind("5",clickCinco)
mousetrap.bind("6",clickSeis)
mousetrap.bind("7",clickSiete)
mousetrap.bind("8",clickOcho)
mousetrap.bind("9",clickNueve)
mousetrap.bind("0",clickCero)
mousetrap.bind("-",clickResta)
mousetrap.bind("*",clickMult)
mousetrap.bind("/",clickDivision)
mousetrap.bind("c",clickBorrar);

document.getElementById("botUno").addEventListener("click",clickUno)
document.getElementById("botDos").addEventListener("click",clickDos)
document.getElementById("suma").addEventListener("click",clickSuma)
document.getElementById("botTres").addEventListener("click",clickTres)
document.getElementById("botCuatro").addEventListener("click",clickCuatro)
document.getElementById("botCinco").addEventListener("click",clickCinco)
document.getElementById("botSeis").addEventListener("click",clickSeis)
document.getElementById("botSiete").addEventListener("click",clickSiete)
document.getElementById("botOcho").addEventListener("click",clickOcho)
document.getElementById("botNueve").addEventListener("click",clickNueve)
document.getElementById("botCero").addEventListener("click",clickCero)

document.getElementById("division").addEventListener("click",clickDivision)
document.getElementById("multipli").addEventListener("click",clickMult)
document.getElementById("resta").addEventListener("click",clickResta)
document.getElementById("borrar").addEventListener("click",clickBorrar)





var actualElemento = document.getElementById("numeroActual")
var resultadoElemento = document.getElementById("resultado")

var actual = ""
var resultado = 0

function clickUno(){
    actual += 1
    actualElemento.innerHTML = actual
}

function clickDos(){
    actual += 2
    actualElemento.innerHTML = actual
}

function clickTres(){
    actual += 3
    actualElemento.innerHTML = actual
}

function clickCuatro(){
    actual += 4
    actualElemento.innerHTML = actual
}

function clickCinco(){
    actual += 5
    actualElemento.innerHTML = actual
}

function clickSeis(){
    actual += 6
    actualElemento.innerHTML = actual
}

function clickSiete(){
    actual += 7
    actualElemento.innerHTML = actual
}

function clickOcho(){
    actual += 8
    actualElemento.innerHTML = actual
}

function clickNueve(){
    actual += 9
    actualElemento.innerHTML = actual
}

function clickCero(){
    actual += 0
    actualElemento.innerHTML = actual
}

function clickSuma(){
    if(actual != ""){
   resultado += parseInt(actual)
   actual =  ""
   actualElemento.innerHTML = "0"
   resultadoElemento.innerHTML = resultado
    }

}

function clickResta(){
    if(actual != ""){
        resultado -= parseInt(actual)
        actual =  ""
        actualElemento.innerHTML = "0"
        resultadoElemento.innerHTML = resultado
         }
}

function clickMult(){
    if(actual != ""){
        resultado *= parseInt(actual)
        actual =  ""
        actualElemento.innerHTML = "0"
        resultadoElemento.innerHTML = resultado
         }
}

function clickDivision(){
    if(actual != ""){
        resultado /= parseInt(actual)
        actual =  ""
        actualElemento.innerHTML = "0"
        resultadoElemento.innerHTML = resultado
         }
}


function clickBorrar(){
  
    actualElemento.innerHTML = 0;
 resultadoElemento.innerHTML = 0;

  actual = ""
  resultado = 0
}


