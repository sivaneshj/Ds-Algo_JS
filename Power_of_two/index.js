function ispoweroftwo(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1))=== 0;
}

console.log(ispoweroftwo(8));