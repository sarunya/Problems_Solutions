//Construct hash of values in G which is like visited hash
function getHashOfG(G) {
  let ghash = {};
  for(let i of G) {
      ghash[i] = false;
  }
  return ghash;
}

//traverse the current node, and mark nodes adjacent to it as visited if available in ghash
function traverseNode(node, ghash) {
  let current = node;
  while(current != null && ghash[current.val]==false) {
      ghash[current.val] = true;
      current = current.next;
  }
  return 1;
}

var numComponents = function(head, G) {
  let ghash = getHashOfG(G);
  
  //traverse over head;
  let current = head, nonVisitedCount = G.length, count = 0;
  
  while(current!=null && nonVisitedCount >0 ) {
      
      let currentGhash = ghash[current.val];
      
      if(currentGhash==false) {
          currentGhash = true;
          traverseNode(current, ghash);
          ++count;
      }
      
      current = current.next;
      
  }
  return count;
  
};