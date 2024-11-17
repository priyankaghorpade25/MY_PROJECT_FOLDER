package java_practice;

public class String {
    public static void main(String[] args) {
        String str = "priyanka ghorpade you are fool";
        count(str);

    }

    public static int count(String str) {

        String strArr[] = str.split(" ");
        return strArr.length;

    }

}
