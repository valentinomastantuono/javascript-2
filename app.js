
// VARIABLES    
let golesSanLorenzo = 0
let golesHuracan = 0





function calcularGol(){
        return Math.round(Math.random())
}

function ningunoGano(){
        golesSanLorenzo <5 && golesHuracan <5
}


while (ningunoGano()){
    let ocasionHuracan = calcularGol()
    let ocasionSanLorenzo = calcularGol()
    if (ocasionSanLorenzo=1) {
        golesSanLorenzo++
    } else {
        
    }
    if (ocasionHuracan=1) {
        golesHuracan++
    } else {
        
    }
}

if (golesSanLorenzo=5) {
    alert("EL GANADOR ES SAN LORENZO!!!")
}else {

}

if (golesHuracan=5) {
    alert("EL GANADOR ES HURACAN!!!")
    
} else {
    
}
