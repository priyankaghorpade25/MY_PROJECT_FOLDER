import java.util.Scanner;

public class Insert {
    public static int takeInput(String str) {
        Scanner sc = new Scanner(System.in);

        System.out.print(str);
        int input = sc.nextInt();
        sc.close();
        return input;

    }

    public static int insert(int arr[], int pos, int ele, int size, int cap) {

        for (int i = size; i > pos; i--) {

            arr[i] = arr[i - 1];

        }

        arr[pos] = ele;
        size++;

        return size;

    }

    public static void main(String args[]) {

        int cap = takeInput("Enter the capacity:");
        int size = takeInput("Enter the size:");
        int arr[] = new int[cap];
        if (cap > size) {

            for (int i = 0; i < size; i++) {
                arr[i] = takeInput("Enter the element at " + i + " position ");

            }
            int pos = takeInput("Enter the position:");
            int ele = takeInput("Eter the elemnet you want to insert:");
            insert(arr, pos, ele, size, cap);
        }

        else {
            System.out.println("Invalid input");
        }

        for (int i : arr) {
            System.out.print(i + " ");
        }

    }

}
