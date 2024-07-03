

function linearsearch(arr,num){

    for(let i=0;i<arr.length;i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

console.log(linearsearch([1,2,3,4,5],3));