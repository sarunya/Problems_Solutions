public class ReverseWords {

  public String reverse(String word) {
    char[] chars = word.toCharArray();
    
    for(int i=0; i<Math.floor(chars.length/2); i++) {
      char temp = chars[i];
      chars[i] = chars[chars.length-1-i];
      chars[chars.length-1-i] = temp; 
    }

    return String.copyValueOf(chars);
  }

  public String reverseWords(String s) {
    String[] words = s.split(" ");
    for(int i=0; i<words.length; i++) {
      words[i] = this.reverse(words[i]);
    }
    return String.join(" ", words);
  }
}
