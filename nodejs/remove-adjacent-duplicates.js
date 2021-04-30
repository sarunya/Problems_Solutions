/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let i=0, j=1;
    S = S.split("");
    
    while(j<S.length) {
        if(S[i] == S[j]) {
            --i;
        } else {
            S[i+1] = S[j];
            ++i;
        }
        ++j;
    }
    return S.slice(0, i+1).join("");
};


// i -> maintaining end of corrected string
// j -> iterating over actual string


// abbaca
// i=0;  j=1 a==b i+1=j=1 
// i=1;  j=2 b==b i=0; j=3
// i=0;  j=3 a==a i=-1; j=4
// i=-1; j=4 undefined==c 0:c i=0 j=5
// i=0   j=5  c==a 1:a   i:1