import java.math.BigInteger;
  
class GoodNumbers {
    BigInteger MOD = BigInteger.valueOf(1000000007);
    public int countGoodNumbers(long n) {
        BigInteger odd = BigInteger.valueOf(Math.floorDiv(n, 2));
        BigInteger even = odd.subtract(BigInteger.valueOf(n));
    }
    
  }


//   * @param {number} n
//   * @return {number}
//   */
//  var countGoodNumbers = function(n) {
//       let odd = Math.floor(n/2);
//      let even = n-odd;
     
//      return (Math.pow(5, odd)*Math.pow(5, even))%1000000007;
     
//  };