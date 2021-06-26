import java.util.*;

public class ValidWordsInPuzzle {

    public int getBinaryWord(String word, Map<Integer, List<Integer>> map) {
      int answer = 0;
      Set<Integer> set = new HashSet<Integer>();
      for(char ch: word.toCharArray()) {
        answer = answer | (1<<(ch-'a'));
        set.add(ch-'a');
      }
      for(int ch : set) {
        map.computeIfAbsent(ch, v->new ArrayList<Integer>()).add(answer);
      }
      return answer;
    }

    public int getBinaryPuzzle(String word) {
      int answer = 0;
      for(char ch: word.toCharArray()) {
        answer = answer | (1<<(ch-'a'));
      }
      return answer;
    }

    public boolean isCharsAvailable(int puzzle, int word) {
      boolean result = true;

      while(word>0) {
        int lastBit = word & (word ^ (word-1));
        //check if bit is available in word
        if((puzzle&lastBit)==0) {
          result = false;
          break;
        }
        word = word & (word-1);
      }

      return result;
    }

    public List<Integer> findNumOfValidWords(String[] words, String[] puzzles) {
        List<Integer> result = new ArrayList<Integer>();

        List<Integer> wordBin = new ArrayList<Integer>();
        Map<Integer, List<Integer>> wordMap = new HashMap<Integer, List<Integer>>();

        for(String word: words) {
          wordBin.add(this.getBinaryWord(word, wordMap));
        }

        for(String puz: puzzles) {
          int puzzleNo = this.getBinaryPuzzle(puz);
          int count = 0;
          int first = puz.charAt(0) - 'a';

          List<Integer> wordNoListWithFirstChar = wordMap.getOrDefault(first, new ArrayList<Integer>());

          for(int i=0; i<wordNoListWithFirstChar.size(); i++) {
            int wordNo = wordNoListWithFirstChar.get(i);
            if((puzzleNo&wordNo)==wordNo) {
              ++count;
            }
          }
          result.add(count);
        }

        return result;
    }

    public boolean isBitSet(int wordNo, int i) {
      return !((wordNo & (1<<i))==0);
    }

    public static void main(String[] args) {
      ValidWordsInPuzzle sol = new ValidWordsInPuzzle();

      String[] words = new String[]{"apple","pleas","please"};
      String[] puzzles = new String[]{"aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"};

      List<Integer> result = sol.findNumOfValidWords(words, puzzles);

      System.out.println("\n RESULT IS... ");
      for(int val: result) {
        System.out.print(val+" ");
      }
    }
}


//["apple","pleas","please"]
//["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"]
