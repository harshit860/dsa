function pivot(array,pivotIndex = 0, endIndex = array.length-1) {
  let swapIndex = pivotIndex;

  for(let i=pivotIndex + 1;i<endIndex;i++) {
    if(array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array,swapIndex,i)
    }
  }
  swap(array,pivotIndex,swapIndex);
  return swapIndex;
}


function swap(array,index1,index2) {
  let temp = array[index1];
  array[index1] = array[index2]
  array[index2] = temp;
}


function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array
}

console.log(quickSort([25,2,7,11,3]))
