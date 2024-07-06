function bubblesort(arr) {
  let watch;
  do {
    watch = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        watch = true;
      }
    }
  } while (watch);
}

var arr = [-3, -10, 2, 1, 5, 4];
bubblesort(arr);
console.log(arr);
