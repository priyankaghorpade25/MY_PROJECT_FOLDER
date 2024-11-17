
import java.util.Scanner;

class iPushzero {
    public static int takeInput(String str) {
        Scanner sc = new Scanner(System.in);
        System.out.print(str);
        int input = sc.nextInt();
        sc.close();

        return input;

    }

    public static void swap(int arr[], int nz, int z) {

        int temp = arr[nz];
        arr[nz] = arr[z];
        arr[z] = temp;

    }

    public static void zero(int arr[]) {
        int nz = 0;
        int z = 0;
        while (z < arr.length) {
            if (arr[z] != 0) {
                swap(arr, nz, z);
                nz++;
            }
            z++;
        }
    }

    public static void main(String[] args) {

        int i;
        int arr[] = new int[10];
        for (i = 0; i <= arr.length - 1; i++) {
            arr[i] = takeInput("Enter the element at " + i + " ");
        }
        zero(arr);
        for (int ele : arr) {
            System.out.print(ele + " ");

        }

    }

}
