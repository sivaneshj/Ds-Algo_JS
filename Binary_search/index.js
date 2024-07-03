
function Binarysearch(arr,num){
    var length = Math.floor(arr.length/2);

    if(arr[length] >= num){
        for(let i=0;i<=length;i++){
            if(arr[i] === num){
                return i;
            }
        }
    }
    else{
        for(let i=arr.length-1; i>length;i--){
            if(arr[i] === num){
                return i
            }
        }
    }
    return -1;

}

console.log(Binarysearch([1,2,3,4,5],0));