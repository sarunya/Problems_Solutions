var widthOfBinaryTree = function(root) {
  let queue = [], answer = 0, minh=0;
  if(root) {
      queue.push({
          root,
          h: 0
      })
      answer = 1;
  }
  
  while(queue.length>0) {
      let temp = queue;
      queue = [];
      
      while(temp.length>0) {
          let node = temp.shift();
          
          if(node.root.left) {
              queue.push({
                  root: node.root.left,
                  h: ((node.h-minh)*2)+1
              })
          }
          if(node.root.right) {
              queue.push({
                  root: node.root.right,
                  h: ((node.h-minh)*2)+2
              })
          }
      }
      
      if(queue.length>0) {
          let valNow = queue[queue.length-1].h - queue[0].h + 1;
          answer = Math.max(answer, valNow);
          minh = queue[0].h;
      }
  }
  
  return answer;
};