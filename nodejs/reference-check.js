function swap(a, b) {
  let temp = a;
  a=b;
  b=temp;
  console.log(a,b);   //2,1
}

let a = 1, b=2;
console.log(a,b);    //1,2
swap(a, b);
console.log(a,b);    //2,1



