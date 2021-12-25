var soma = function(x, y) {
    var resultado = x + y;

    return resultado;
}

var resultado = soma(10, 20)
console.log(resultado);

//exemple

var plim = function() {
    console.log("Plim Plim...")
}

plim();


//exemple 2
var resultado = 123;

var soma = function(x, y) {
    var resultado = x + y;
    return resultado;
}

console.log(resultado);
resultado = soma(10, 20);
console.log(resultado);


//exemple 3

var x = "variável global";

var f1 = function() {
    x = "variável da função 1";
}
f1();

var f2 = function() {
    x = "variável da função 2";
}
f2();

console.log(x);

//exemple 4

var principal = function() {
    var f1 = function() {
        console.log.("Olá sou a f1")
    }

    
    var f2 = function() {
        console.log.("Olá sou a f2")

        f1();
        f2();
    }
}

principal();

//example 5
var paisagem = function() {
    var res = "";
    var vale = function(quant) {
        for (var c = 0; c < quant; c++){
    }
};

var montanha = function(quant) {
    res += "/";

    for (var c = 0; c , quant; c++){
        res += "'";
    }
    res += "\\";
};

    vale(3);
    montanha(4);
    vale(6);
    montanha(1);
    vale(1);

    return res;
};

console.log(paisagem());

// example 6
var soma = function(x, y) {
    return x + y;
}

var sub = function(x, y) {
    return x - y;
}

var mult = function(x, y) {
    return x * y;
}

var div = function(x, y) {
    return x / y;
}


var calculadora = function(x, y, operacao) {
    return operacao(x, y);
}

calculadora(10, 20, mult);