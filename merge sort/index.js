function mergesort(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergesort(left),mergesort(right));
}

function merge(leftarr, rightarr){
    let result=[];
    while(leftarr.length && rightarr.length){
        if(leftarr[0] <= rightarr[0]){
            result.push(leftarr.shift())
        }
        else{
            result.push(rightarr.shift());
        }
    }
    return [...result,...leftarr,...rightarr];
}

var arr = [-3,-4,1,0,5,3];
console.log(mergesort(arr));