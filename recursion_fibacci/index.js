

function recursionfibanocci(n){
    if(n<2){
        return n;
    }

    return recursionfibanocci(n-1) + recursionfibanocci(n-2);
}

console.log(recursionfibanocci(6))