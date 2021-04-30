
function selectionSort(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {

    //to find min index
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //swap values
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    console.log("For iternation i ", i, arr);

  }
}

selectionSort([2,5,1,7,2,5,0,7,5,67,23,10]);


//
// i = 0 to length
    // For each i, find min_index value 
    // if min_index is not equal i, then swap min_index with i

//For each i, find min_index value 
  // keep i as minValue
  // iterate from i+1 to length:
  //   if you encounter a minvalue, make it as minValue
  //   continue to loop


// 1 3 2 4 5 4
// m   
