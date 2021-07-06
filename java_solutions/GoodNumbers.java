import java.math.BigInteger;
  
class GoodNumbers {
    public int countGoodNumbers(long n) {
        BigInteger odd = BigInteger.valueOf(Math.floorDiv(n, 2));
        BigInteger even = odd.subtract(BigInteger.valueOf(n));
        BigInteger mod = BigInteger.valueOf(1000000007);

        // odd.pow
        BigInteger result = odd.modPow(BigInteger.valueOf(4), mod).multiply(even.modPow(BigInteger.valueOf(4), mod)).mod(mod);
        return result.intValue();
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