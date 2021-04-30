function frequence(i) {
  return (i*(Math.floor(Math.sqrt(i)))) + Math.ceil(i/2)
}

function generateData(till) {
  let data = [];
  let end = 0;
  let start = 1;
  let i=1
  while(end<till) {
    let freq = frequence(i)
    end += freq;
    data.push({
      i, freq, start, end
    })
    start = end+1;
    ++i;
  }

  return data;
}

function findRange(data, index) {
  let l=0, r=data.length;
  while(l<=r) {
    let mid = Math.floor((l+r)/2)
    console.log(l, r, mid, data[mid], index);
    if(data[mid].start > index) {
      r = mid-1;
    } else if (data[mid].end < index) {
      l = mid+1;
    } else {
      return mid;
    }
  }
}

let data = generateData(5000);

console.log(data);

console.log(findRange(data, 4));

