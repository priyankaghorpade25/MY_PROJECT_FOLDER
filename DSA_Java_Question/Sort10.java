package java_practice;

import java.util.Scanner;

class Sort10 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.close();
        while (t > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            Sort10.sortZeroesAndOne(arr);
            for (int i = 0; i < n; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();

            t -= 1;
        }
    }

    public static void sortZeroesAndOne(int arr[]) {
        int count = 0;
        int i;
        for (i = 0; i <= arr.length - 1; i++) {
            if (arr[i] == 0) {
                count++;
            }
        }
        for (i = 0; i <= count; i++) {
            arr[i] = 0;
        }
        for (i = count; i <= arr.length - 1; i++) {
            arr[i] = 1;
        }
        System.out.println(arr[i]);
        System.out.println(102 % 6);
    }
}
