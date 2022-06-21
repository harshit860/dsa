function InsertionSort(array) {
  for(let a=1;a<array.length;a++) {
    let temp = array[a];
    for(var b=a-1;array[b]>temp && b > -1;b-- ){
      array[b+1] = array[b]
    }
    array[b+1] = temp
  }
  console.log(array)
  return array
}

InsertionSort([3,5,9,7])