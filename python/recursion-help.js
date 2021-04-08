function printArr(arr, index) {
  if(index == arr.length) {
    return;
  }
  console.log(arr[index]);
  printArr(arr, index+1);
  return;
}


printArr([5,1,2,3,7,9,4,5], 0);



//printArr([5,1,2,3,7,9,4,5], 1);
//printArr([5,1,2,3,7,9,4,5], 0);
//stack First In Last Out
//queue  First In First Out