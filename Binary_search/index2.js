
function Binarysearchv2(arr,num){
    let least = 0;
    let most = arr.length -1;

    while(least <= most){
        var mid = Math.floor((least+most)/2);
        if(num === arr[mid]){
            return mid;
        }
        if(num < arr[mid]){
            most = mid -1;
        }
        else{
            least = mid+1;
        }
    }
    return -1;
}

console.log(Binarysearchv2([-5,2,4,6,10],10));
console.log(Binarysearchv2([-5,2,4,6,10],6));
console.log(Binarysearchv2([-5,2,4,6,10],20));