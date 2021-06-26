/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let queue = [], visited = new Set(deadends), answer = 1;

  if (target === "0000") {
    return 0;
  }
  else if (!visited.has(target) && !visited.has("0000")) {
    queue.push("0000");
  }

  while (queue.length > 0) {
    let tempQueue = queue;
    queue = [];

    while (tempQueue.length > 0) {
      // console.log(tempQueue);
      let current = tempQueue.pop().split("");
      // console.log("CHILDRE OF -------------", current);

      //check neighbors of current for each place
      for (let i = 0; i < 4; i++) {
        //neighbors of current char
        let cn = parseInt(current[i]);
        let children = [-1, 1];
        for (let child of children) {
          //-1 is possibel
          current[i] = (cn + child) % 10;
          current[i] = current[i] < 0 ? current[i] + 10 : current[i];
          // console.log(current[i], cn, child);
          let newv = current.join("");
          if (newv == target) {
            return answer;
          }
          if (!visited.has(newv)) {
            visited.add(newv);
            queue.push(newv);
            // console.log("-", newv);
          }
        }
        current[i] = cn;
      }
    }
    ++answer;
  }

  return -1;

};

// let deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0000";
// let answer = openLock(deadends, target);

// console.log(answer);