public class CountHomogeneous {

    public int countHomogenous(String s) {
      long ans = 0, i=0;
        long c=0;
        while(i<s.length()) {
            c = 1;
            while(i<s.length()-1 && s.charAt(i)==s.charAt(i+1)) {
                ++i;
                ++c;
            }
            ans += ((c*(c+1))/2);
            ans = ans % 1000000007;
            ++i;
        }
        return (int)ans;
    }
}
