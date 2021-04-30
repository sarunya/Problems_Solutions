function generator(str, n) {
  let possibilities = []
  possibilities[str.length] = n;
  for(let i=str.length-1; i>=0; i--) {
    if(str[i]=="=") {
      possibilities[i] = possibilities[i+1];
    } else {
      possibilities[i] = possibilities[i+1]-1;
      possibilities[i+1] = possibilities[i+1]-1
    }
  }
  console.log(possibilities);
}

generator("<>=", 4);