let arr = [[3,4],[1,3]];

let json = {}, allyears = [];


//construct json with birth year and its population
for (let i=0; i<arr.length; i++) {
    let by = arr[i][0];
    let dy = arr[i][1];
    // json[k] = (json[k]==undefined) ? 1 : json[k]+1;

    if(json[by]==undefined) {
      json[by] = 1;
      allyears.push(by);
    } else {
      // json[k] = json[k] +1
      ++json[by];
    }

    if(json[dy]==undefined) {
      json[dy] = -1;
      allyears.push(dy);
    } else {
      // json[k] = json[k] +1
      --json[dy];
    }
}

//ascending sort
allyears.sort((a,b) => a-b);

let maxPopualation = 0, year=0, populationSoFar = 0;

for(let i=0; i<allyears.length; i++) {
  populationSoFar += json[allyears[i]]

  if(populationSoFar > maxPopualation) {
    maxPopualation = populationSoFar;
    year = allyears[i];
  }
}

console.log(year);



console.log(json);

// mp:0   year:0 psf:0

// 2000: 20 born      20      mp:20 year: 2000

// 2050: -10 dieing   2050: 2   -8    12  psf:12   

// 2051 : 15 born    psf: 27  mp:27 year: 2051