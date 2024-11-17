import java.util.Scanner;

public class Update {
    public static int takeInput(String str) {
        Scanner sc = new Scanner(System.in);
        System.out.print(str);
        int input = sc.nextInt();
        sc.close();

        return input;

    }

    public static void update(int arr[], int key, int newkey) {
        for (int i = 0; i <= arr.length - 1; i++) {
            if (arr[i] == key) {
                arr[i] = newkey;
            }
        }
    }

    public static void main(String args[]) {
        int size = takeInput("Enter the size of an array:");
        int arr[] = new int[10];
        for (int i = 0; i < size; i++) {
            arr[i] = takeInput("Enter the element" + i + " ");
        }
        int key = takeInput("Enter the elemnt you want to serach:");
        int newkey = takeInput("Enter the element you want add in place of key");
        update(arr, key, newkey);
        for (int i : arr) {
            System.out.print(i + " ");
        }

    }

}
