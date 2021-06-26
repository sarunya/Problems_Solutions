function powerfulIntegers(x, y, bound) {
  let result = [], xarr = [], yarr = [], xval = 1, yval = 1;
  while (xval < bound && yval < bound) {
    xarr.push(xval);
    yarr.push(yval);
    xval = xval * x;
    yval = yval * y;
  }

  while (xval < bound) {
    xarr.push(xval);
    xval = xval * x;
  }
  while (yval < bound) {
    yarr.push(yval);
    yval = yval * y;
  }
  // console.log(xarr);
  // console.log(yarr);
  for (let i = 0; i < xarr.length; i++) {
    for (let j = 0; j < yarr.length; j++) {
      if (xarr[i] + yarr[j] <= bound) {
        if (result.indexOf(xarr[i] + yarr[j]) == -1) {
          result.push(xarr[i] + yarr[j]);
        }
      } else {
        break;
      }
    }
  }
  return result.sort();
}