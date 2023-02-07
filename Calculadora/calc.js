var res = document.getElementById("res")
var but = document.querySelector("button")
let value
let num =0
function VALOR() {

    
    if (value === "c"){
        res.innerHTML = ""
        num = 0
    } else if (value=== "=") {
        
        res.innerHTML = eval(num)
        
    }
    else {
        res.innerHTML += value
        num += value
    }

}
function VERIFI_C(){
    value = "c"
    VALOR()
}
function VERIFI_1(){
    value = "1"
    VALOR()
}
function VERIFI_2(){
    value = "2"
    VALOR()
}
function VERIFI_3(){
    value = "3"
    VALOR()
}
function VERIFI_4(){
    value = "4"
    VALOR()
}
function VERIFI_5(){
    value = "5"
    VALOR()
}
function VERIFI_6(){
    value = "6"
    VALOR()
}
function VERIFI_7(){
    value = "7"
    VALOR()
}
function VERIFI_8(){
    value = "8"
    VALOR()
}
function VERIFI_9() {
    value = "9"
    VALOR()
} 
function VERIFI_0() {
    value = "0"
    VALOR()
} 
function VERIFI_DIVISAO() {
    value = "/"
     VALOR()
} 
function VERIFI_SUB() {
    value = "-"
    VALOR()
} 
function VERIFI_SOMA() {
    value = "+"
    VALOR()
} 
function VERIFI_PONTO() {
    value = "."
    VALOR()
} 
function VERIFI_MENOR() {
    value = "<"
    VALOR()
} 
function VERIFI_MULTI() {
    value = "*"
    VALOR()
} 
function VERIFI_IGUAL() {
    value = "="
    VALOR()
}