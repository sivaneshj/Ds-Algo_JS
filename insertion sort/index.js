function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insertelement = arr[i];
    let left = i - 1;
    while (left >= 0 && arr[left] > insertelement) {
      arr[left + 1] = arr[left];
      left -=  1;
    }
    arr[left + 1] = insertelement;
  }
}

var arr = [0,-3, 2, 4, 1];
insertion(arr);
console.log(arr);
