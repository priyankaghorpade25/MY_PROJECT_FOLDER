import java.util.Scanner;

public class Pattern {

    public static void main(String[] args) {

        /*
         * Your class should be named Solution.
         * Read input as specified in the question.
         * Print output as specified in the question.
         */
        Scanner sc = new Scanner(System.in);
        // int S = sc.nextInt();
        // int E = sc.nextInt();
        // int W = sc.nextInt();
        // int i;
        // for (i = 1; i <= 10; i++) {
        // double C = (45 - 32) * (5 / 9);
        // System.out.print(C);
        // }
        /*
         * float Fahrenheit, Celsius;
         * 
         * int i;
         * for (i = S; i <= E; i += W) {
         * Celsius = ((i - 32) * 5) / 9;
         * System.out.println(i + " " + (int) Celsius);
         * }
         */

        /*
         * int x = sc.nextInt();
         * int n = sc.nextInt();
         * int i, tmp = 1;
         * for (i = 1; i <= n; i++) {
         * if (x == 0 && n == 0) {
         * System.out.println(1);
         * } else {
         * tmp = tmp * x;
         * }
         * 
         * }
         * System.out.println(tmp);
         */

        /*
         * int n = 4;
         * for (int i = 1; i <= n; i++) {
         * // Print leading spaces
         * char ch = (char) ('E' + i - 1);
         * for (int j = 1; j >= i; j--) {
         * System.out.print(ch + " ");
         * ch = (char) (ch - 1);
         * }
         * System.out.println();
         * }
         */
        /*
         * int n = sc.nextInt();
         * for (int i = 1; i <= n; i++) {
         * for (int j = 1; j <= n - i; j++) {
         * System.out.print(" ");
         * }
         * for (int k = 1; k <= i; k++) {
         * System.out.print(k);
         * }
         * for (int m = 2; m >= i; m--) {
         * System.out.print(m - 1);
         * }
         * System.out.println();
         * }
         */
        int N = sc.nextInt();
        for (int i = 0; i <= N; i++) {
            for (int j = 0; j <= N; j++) {
                System.out.print("#");
            }
            System.out.println();
        }
    }

}
