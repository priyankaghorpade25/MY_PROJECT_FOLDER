package java_practice;

public class SumArray {
    public static void main(String[] args) {
        int arr1[] = { 1, 2, 3, 4 };
        int arr2[] = { 5, 6, 7, 8 };
        int output[] = new int[8];

        for (int i = 0; i < output.length; i++) {
            System.out.print(output[i] + " ");
        }
        Sum(arr1, arr2, output);
        for (int i = 0; i < output.length; i++) {
            System.out.print(output[i] + " ");
        }

    }

    public static void Sum(int arr1[], int arr2[], int output[]) {
        int i = arr1.length - 1;
        int j = arr2.length - 1;
        int k = output.length - 1;
        int sum = 0;
        int carry = 0;
        while (i >= 0 || j >= 0 || carry != 0) {
            int val1 = 0;
            if (i >= 0) {
                val1 = arr1[i];
            }
            int val2 = 0;
            if (j >= 0) {
                val2 = arr2[j];

            }
            sum = val1 + val2 + carry;
            output[k] = sum % 10;
            carry = sum / 10;
            i--;
            j--;
            k--;
        }

    }

}
