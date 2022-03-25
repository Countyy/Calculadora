function botar1() {
    console.log("1")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "1");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "1");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}

function botar2() {
    console.log("2")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "2");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "2");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}

function botar3() {
    console.log("3")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "3");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "3");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}

function botar4() {
    console.log("4")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "4");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "4");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}

function botar5() {
    console.log("5")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "5");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "5");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}


function botar6() {
    console.log("6")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "6");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "6");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}


function botar7() {
    console.log("7")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "7");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "7");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}


function botar8() {
    console.log("8")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "8");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "8");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}


function botar9() {
    console.log("9")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "9");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "9");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}


function botar0() {
    console.log("0")
    if(document.getElementById("tela").hasAttribute("value")){
        let valor = document.getElementById("tela").getAttribute("value");
        document.getElementById("tela").setAttribute("value", valor + "0");
    }
    if(!document.getElementById("tela").hasAttribute("value")){
        document.getElementById("tela").setAttribute("value", "0");

    }
    console.log(document.getElementById("tela").hasAttribute("value"))
}

function limpar() {
    document.getElementById("tela").setAttribute("value", "")
    document.getElementById("guardarvalor").setAttribute("value", "")
    document.getElementById("guardarsinal").setAttribute("value", "")
}

function adicionar() {
    let valor = document.getElementById("tela").value
    let sinal = document.getElementById("guardarsinal")
    document.getElementById("guardarvalor").setAttribute("value", valor)
    sinal.setAttribute("value", "+")
    document.getElementById("tela").setAttribute("value", "")
}

function subtrair() {
    let valor = document.getElementById("tela").value
    let sinal = document.getElementById("guardarsinal")
    document.getElementById("guardarvalor").setAttribute("value", valor)
    sinal.setAttribute("value", "-")
    document.getElementById("tela").setAttribute("value", "")
}

function divide() {
    let valor = document.getElementById("tela").value
    let sinal = document.getElementById("guardarsinal")
    document.getElementById("guardarvalor").setAttribute("value", valor)
    sinal.setAttribute("value", "/")
    document.getElementById("tela").setAttribute("value", "")
}

function multiply() {
    let valor = document.getElementById("tela").value
    let sinal = document.getElementById("guardarsinal")
    document.getElementById("guardarvalor").setAttribute("value", valor)
    sinal.setAttribute("value", "*")
    document.getElementById("tela").setAttribute("value", "")
}

function fazer() {
    let recuperarsinal = document.getElementById("guardarsinal").value
    let recuperarvalor = document.getElementById("guardarvalor").value
    let val1 = parseInt(recuperarvalor)
    let val2 = parseInt(document.getElementById("tela").value)
    console.log(recuperarvalor)
    if (recuperarsinal === "+") {
        let valorfinal = val1 + val2
        document.getElementById("tela").setAttribute("value", valorfinal)
    }
    if (recuperarsinal === "-") {
        let valorfinal = val1 - val2
        document.getElementById("tela").setAttribute("value", valorfinal)
    }
    if (recuperarsinal === "/") {
        let valorfinal = val1 / val2
        document.getElementById("tela").setAttribute("value", valorfinal)
    }
    if (recuperarsinal === "*"){
        let valorfinal = val1 * val2
        document.getElementById("tela").setAttribute("value", valorfinal)
    }
        
}