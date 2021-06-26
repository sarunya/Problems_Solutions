import java.util.*;

public class UniqueCharactersMaxLength {

    public int maxLength(List<String> arr) {

      List<Integer> arrInts = new ArrayList<Integer>();
      for(String str : arr) {
        int value = this.getStringAsInt(str);
        //do not include string which contains duplicate characters in itself
        if(value!=0)
          arrInts.add(value);
      }
      return this.solveProblem(arrInts, 0, 0);
    }

    public int solveProblem(List<Integer> arr, int stringBits, int index) {
      int result = 0;
      for(int i=index; i<arr.size(); i++) {
        int val = arr.get(i);
        int isUnique = stringBits & val;
        if(isUnique==0) {
          //then include this to stringBits and proceed
          int current = this.countSetBits(val)+solveProblem(arr, stringBits|val, i+1);
          result = Math.max(result, current);
        }
      }
      return result;
    }

    public  int countSetBits(int n)
    {
        int count = 0;
        while (n > 0) {
            n &= (n - 1);
            count++;
        }
        return count;
    }


    public int getStringAsInt(String str) {
      int val = 0;
      for(char ch : str.toCharArray()) {
        int cur = 1<<(ch-'a');
        int isDuplicate = val&cur;
        //return 0 if string contains duplicate value
        if(isDuplicate!=0) {
          val = 0;
          break;
        }
        val = val | 1<<(ch-'a');
      }
      return val;
    }

  }
