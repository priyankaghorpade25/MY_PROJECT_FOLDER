public class TwoDimension {
    public static void main(String[] args) {
        int arr[][] = { { 1, 2, 4, 0 }, { 3, 4, 5, 1 }, { 1, 4, 7, 8 } };
        // SetMatrixZeroes(arr);
        spiral(arr);
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }

    }

    public static int[][] SetMatrixZeroes(int arr[][]) {
        int row[] = new int[arr.length];
        int col[] = new int[arr[0].length];
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                if (arr[i][j] == 0) {
                    row[i] = 1;
                    col[j] = 1;
                }
            }
        }
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                if (row[i] == 1 || col[j] == 1) {
                    arr[i][j] = 0;
                }
            }
        }
        return arr;
    }

    public static int[][] spiral(int arr[][]) {
        int left = 0;
        int right = arr.length - 1;
        int top = 0;
        int bottom = arr[0].length - 1;
        while (left <= right && top <= bottom) {
            for (int i = left; i <= right; i++) {
                System.out.print(arr[top][i]);
            }
            top++;
            for (int i = top; i < bottom; i++) {
                System.out.print(arr[i][right]);
            }
            right--;
            if (left <= right) {
                for (int i = right; i >= left; i--) {
                    System.out.print(arr[bottom][i]);
                }
                bottom--;
            }

            if (top <= bottom) {
                for (int i = bottom; i >= top; i--) {
                    System.out.print(arr[i][bottom]);
                }
                left++;

            }
        }
        return arr;

    }

}
