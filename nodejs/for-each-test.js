
["abc", "def", "ghi", "jkl"].forEach((saru, ren, sub) => {
  console.log(saru, ren, sub);
})

//abc 0 ["abc", "def", "ghi", "jkl"]
//

class array {

  constructor(array=[]){
    this.arr = array;
  }

  forEach(fun) {
    for(let i=0; i<this.arr.length; i++) {
      fun(this.arr[i], i, this.arr);
    }
  }
}

console.log("print from for each implementation");
let arr = new array(["abc", "def", "ghi", "jkl"]);
arr.forEach((saru, ren, sub) => {
  console.log(saru, ren, sub);
})