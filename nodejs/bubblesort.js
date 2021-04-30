// Bubble sort : 

// 4 3 2 7 4 2
// 3 4 2 7 4 9
// 3 2 4 7 4 9

// 0 1 
//   1 2
//     2 3
//       3 4

// Insertion sort : 
// 4 3 2 7 4 2
// 3 4 2 7 4 2
// 2 3 4 7 4 2



// 2 3 5 5 7 4
// 2 3 4 5 5 7


// Merge sort :
//               1    3   2    5    4

//         1   3   2              5    4

//     1  3          2         5            4

// 1       3
// 0       1


// 1. split
// 2. sort
// 3. Merge


// 0 1 2 3       4 5 6
// 3 5 7 9       4 6 8 

// sorted array : 0 1 2


// 1    3   2    5    4 => 4


// 1   3  2 4 5


function sortAndmerge(arr, startIndex, mid, endIndex) {
  // arr1 : from startIndex to mid
  // arr2 : from mid+1 to endIndex

  let sortedArr = [];

  let i=startIndex, j = mid+1;

  while(i<=mid && j<=endIndex ) {
    if(arr[i] <= arr[j]) {
      sortedArr.push(arr[i++]);
    } else {
      sortedArr.push(arr[j++]);
    }
  }

  while(i<=mid) {
    sortedArr.push(arr[i++]);
  }

  while(j<=endIndex) {
    sortedArr.push(arr[j++]);
  }

  for(let i=0; i<sortedArr.length; i++) {
    arr[startIndex+i] = sortedArr[i];
  }

}




function split(arr, startIndex, endIndex) {
  if(startIndex<endIndex) {
    let mid = Math.floor((startIndex+endIndex)/2);
    split(arr, startIndex, mid);
    split(arr, mid+1, endIndex);
    sortAndmerge(arr, startIndex, mid, endIndex);  // 0 0 1
  }
}




