function secuenciaFibonacci(){
    
    let n = document.getElementById('n').value; 
    

    if(n < 0 ){
        console.log(n)
        n = n * (-1);
        console.log(n)
    }
    
    let a = 0;
    let b = 1;
    let c = 0;
let mensaj = document.getElementById('respuesta');


for(let i = 0; i < n; i++){

    c = a + b;
    mensaj.innerHTML +=  "- " +  a ;

    a = b;
    b = c;

}

}



function reiniciar(){
    location.reload()
}