public class Stringg {
    public static void main(String[] args) {
        String str = "priyanka ghorpade you are fool do you know that";
        // System.out.println(count(str));
        String str1 = "nammmnaaaabccde";
        char x = 'a';
        // System.out.println(palindrome(str1));
        // System.out.println(ReverseEachWord(str) + " ");
        // Substring(str1);
        // System.out.println();
        // System.out.println(RemoveConsecutive(str1));
        System.out.println(Occurence(str1, x));

    }

    public static int count(String str) {

        String strArr[] = str.split("o");
        return strArr.length;

    }

    public static boolean palindrome(String str) {
        String rev = "";
        for (int i = 0; i < str.length(); i++) {
            rev = str.charAt(i) + rev;
        }
        System.out.print(rev);
        if (rev.equals(str)) {
            return true;
        }
        return false;
    }

    public static String reverse(String str) {
        String rev = "";
        for (int i = 0; i < str.length(); i++) {
            rev = str.charAt(i) + rev;
        }
        return rev;
    }

    public static String ReverseEachWord(String str) {
        String strArr[] = str.split(" ");
        String rev = " ";
        String result = " ";
        for (int i = 0; i < strArr.length; i++) {
            rev = reverse(strArr[i]);
            result = result + rev + " ";
        }
        return result;
    }

    public static void Substring(String str) {
        for (int i = 0; i < str.length(); i++) {
            for (int j = i; j < str.length(); j++) {
                System.out.print(str.substring(i, j + 1) + " ");
            }
        }
    }

    public static String RemoveConsecutive(String str) {
        String res = " ";
        for (int i = 0; i < str.length() - 1; i++) {
            if (str.charAt(i) == str.charAt(i + 1)) {

            } else {
                res = res + str.charAt(i);
            }
        }
        return res;
    }

    public static String Occurence(String str, int x) {
        String res = "";
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == x) {

            } else {
                res = res + str.charAt(i);
            }
        }
        return res;
    }

}
