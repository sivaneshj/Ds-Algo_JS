
var removeDuplicates = function(nums) {
    var num =nums;
    for(let i=0; i<num.length;i++){
        for(let j=num.length-1;j>=i+1;j--){
            if(num[i] === num[j]){
                num.splice(i,1);
                console.log(num);
            }
        }
    }

    return num.length;
};



console.log(removeDuplicates([-2,-1,0,3,3,3,4,5,6]));