public class Solution {
    public static void main(String args[]) {
        int mat[][] = { { 1, 3, 6, 8, 9 }, { 2, 9, 5, 2 } };
        findLargest(mat);

    }

    public static void findLargest(int mat[][]) {
        // Your code goes here
        int row = mat.length;
        int col = mat[0].length;

        boolean CheckSum = true;
        int index = 0;

        int largest = Integer.MIN_VALUE;
        if (mat.length == 0) {
            System.out.print("row" + index + " " + Integer.MIN_VALUE);
            return;
        }
        for (int i = 0; i < row; i++) {
            int Sum = 0;
            for (int j = 0; j < col; j++) {
                Sum = Sum + mat[i][j];

            }
            if (Sum > largest) {

                largest = Sum;
                CheckSum = true;
                index = i;
            }
        }
        for (int j = 0; j < col; j++) {
            int Sum = 0;
            for (int i = 0; i < row; i++) {

                Sum = Sum + mat[i][j];

            }
            if (Sum > largest) {
                largest = Sum;
                CheckSum = false;
                index = j;
            }

        }

        if (CheckSum) {
            System.out.print("row" + index + " " + largest);
        } else {
            System.out.print("Column" + index + " " + largest);

        }

    }

}
