public class Movezero {
    public static void main(String args[]) {
        int arr[] = { 3, 0, 2, 0, 1 };
        pushzero(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }

    }

    public static void pushzero(int arr[]) {
        int z = 0;
        int nz = 0;
        while (z < arr.length) {
            if (arr[z] != 0) {
                int temp = arr[z];
                arr[z] = arr[nz];
                arr[nz] = temp;
                nz++;
            }
            z++;
        }
    }

}
