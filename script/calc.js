var res = document.getElementById("res")
let num = 0
res.style.overflow = "auto"
function VALOR(value) {

    
    if (value === "c"){
        res.innerHTML = ""
        num = ""
    } else if (value=== "=") {
        
        res.innerHTML = eval(num)
        
    }
    else {
        res.innerHTML += value
        num += value
    }

}