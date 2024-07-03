
function factorial(n){
    var total = 1;
    let i = n;
    while(i>0){
        total *= i;
        i--;
    }
    return total;
}
console.log(factorial(5));