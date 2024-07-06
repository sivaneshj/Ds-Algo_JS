

function quicksort(arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length-1];
        let left =[];
        let right =[];
    for(let i=0; i<arr.length-1;i++){
        if(pivot > arr[i]){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
}
var arr=[-1,0,3,2,1,-3]
console.log(quicksort(arr));