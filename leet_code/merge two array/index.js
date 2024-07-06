

function mergetwoarray(num1,m,num2,n){
    let i=m-1;
    let j=n-1;
    let k = m+n-1;
    while(i>=0 && j>=0){
        if(num1[i] > num2[j]){
            num1[k] = num1[i];
            i--;
        }
        else{
            num1[k] =num2[j];
            j--;
        }
        k--;
    }
    while(j>=0){
        num1[k] = num2[j];
        k--;
        j--;
    }
}
var arr1 = [1,2,3,0,0,0,0]
var m = 3;
var arr2=[-1,2,5,6]
var n =4;
mergetwoarray(arr1,m,arr2,n);
console.log(arr1);//-2,0,1,2,3