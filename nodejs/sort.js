4 3 2 7 4 9

1 2 3 4 7 9


selection sort :
 Find minimum element and put in its place

  for(let i=0; i<arr.length; i++) {

    //to find min index
    let minIndex = i;
    for(let j=i+1; j<arr.length; j++) {
      if(arr[j]<arr[minIndex]) {
        minIndex = j;
      }
    }


    //swap values
    if(minIndex!=i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

  }

  4 3 2 7 1 9     i=0      min : 1      minIndex : 4

i=0
  1 3 2 7 4 9    i=1        min: 2      minIndex: 2

i=1
  1 2 3 7 4 9     

i=2
  1 2 3 7 4 9

i=3
  1 2 3 4 7 9

i=4
  1 2 3 4 7 9

i=5
  1 2 3 4 7 9


  // swap 
  // a=8; b=10;

  // temp = a;
  // a=b;  
  // b=temp; 
  
  

  //To find min index
  // 5 3 2 6 1 9 0


  // let min = 0;

