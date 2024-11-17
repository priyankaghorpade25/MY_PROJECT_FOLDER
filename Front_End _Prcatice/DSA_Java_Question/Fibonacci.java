package java_practice;

import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        /*
         * Your class should be named Solution
         * Don't write main().
         * Don't read input, it is passed as function argument.
         * Return output and don't print it.
         * Taking input and printing output is handled automatically.
         */
        int a = 0;
        int b = 1;
        boolean flag = false;
        for (int i = 0; i <= n; i++) {

            int c = a + b;
            a = b;
            b = c;
            if (a == n) {

                flag = true;
                break;
            }
        }
        System.out.println(flag);
        System.out.println(102 % 6);

    }

}
