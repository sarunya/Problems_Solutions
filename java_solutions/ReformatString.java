public class ReformatString {
  public String reformat(String s) {
    String characters = "", numbers = "";
    for (char ch : s.toCharArray()) {
      if(Character.isDigit(ch)) {
        numbers += ch;
      } else {
        characters+=ch;
      }
    }

    String result = "";
    if(Math.abs(numbers.length()-characters.length())>1) {
      return result;
    }
    int i=0;
    int n = Math.min(numbers.length(), characters.length());
    while(i<n) {
      result += characters.charAt(i)+numbers.charAt(i);
      ++i;
    }
    if(numbers.length()>characters.length()) {
      result = numbers.charAt(i) + result;
    } else if(characters.length() > numbers.length()) {
      result += characters.charAt(i);
    }
    return result;
  }
}
