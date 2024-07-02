function isprime(x){
    if(x<2){
        return false;
    }
    else{
        for(let i=2;i<=Math.floor(Math.sqrt(x));i++){
            if(x%i === 0){
                return false;
            }
        }
    }
    return true;
}

console.log(isprime(1));