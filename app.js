var metro = document.getElementsByTagName("input")[0];
var m2 = document.getElementsByTagName("input")[1];


function calcular() {
    let calc = parseInt(metro.value) / parseInt(m2.value);
    document.getElementById("result").innerHTML = calc;
}