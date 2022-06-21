

function mergeSort(array) {
  if(array.length === 1) {
    return array}

  let mid = Math.floor(array.length/2);

  let left = array.slice(0,mid);
  let right = array.slice(mid);
  return merge(mergeSort(left),mergeSort(right))
}

function merge(array1,array2) {   // rUNNNING LOOP UNTILL BOTH ARRAY LENGTH AND THEN PUSHING THE SMALLER ONE ONLY AFTER THE IRST WHILE LOOP F
  let combined = [];            // sECOND WHILE LOOP FOR REMAINING ELEMTNS IN ANY ARRAY
  let i=0;
  let j=0;
  while (i <array1.length && j < array2.length) {
    if(array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else{
      combined.push(array2[j])
      j++
    }
  }

  while(i<array1.length) {
    combined.push(array1[i])
    i++
  }

  while(j<array2.length) {
    combined.push(array2[j])
    j++
  }
  return combined;
}

console.log(mergeSort([1,5,2,67,2,34]))