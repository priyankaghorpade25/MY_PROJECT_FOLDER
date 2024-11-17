import java.util.Scanner;

class player {
    String name;
    char symbol;

    player(String name, char symbol) {
        this.name = name;
        this.symbol = symbol;
    }

    String getName() {
        return this.name;
    }

    char getSysmbol() {
        return this.symbol;
    }
}

class Board {
    char board[][];
    int boardsize = 3;
    char p1Symbol, p2Symbol;
    int count;

    Board(char p1Symbol, char p2Symbol) {
        board = new char[boardsize][boardsize];
        for (int i = 0; i < boardsize; i++) {
            for (int j = 0; j < boardsize; j++) {
                board[i][j] = ' ';
            }
        }
        this.p1Symbol = p1Symbol;
        this.p2Symbol = p2Symbol;
    }

    public void print() {
        System.out.println("-------------");
        for (int i = 0; i < boardsize; i++) {
            for (int j = 0; j < boardsize; j++) {
                System.out.print("| " + board[i][j] + " |");
            }
            System.out.println();
        }
        System.out.println("-------------");
    }

    public int move(char symbol, int x, int y) {
        if (x < 0 || y < 0 || x >= boardsize || y >= boardsize || board[x][y] != ' ') {
            return 5;
        }
        board[x][y] = symbol;
        count++;

        if (board[x][0] == board[x][1] && board[x][1] == board[x][2]) {
            return symbol == p1Symbol ? 1 : 2;
        }

        if (board[0][y] == board[1][y] && board[1][y] == board[2][y]) {
            return symbol == p1Symbol ? 1 : 2;
        }
        if (board[0][0] != ' ' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            return symbol == p1Symbol ? 1 : 2;
        }
        if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            return symbol == p1Symbol ? 1 : 2;
        }

        if (count == boardsize * boardsize) {
            return 3;
        }
        return 4;

    }
}

public class TikTakToe {
    public static void main(String[] args) {
        TikTakToe t = new TikTakToe();
        t.startGame();
    }

    public void startGame() {
        Scanner sc = new Scanner(System.in);

        player player1 = takPlayerinput(1);
        player player2 = takPlayerinput(2);
        // ---------------
        Board board = new Board(player1.getSysmbol(), player2.getSysmbol());

        boolean player1turn = true;
        int status = 4;
        while (status == 4 || status == 5) {
            if (player1turn) {
                System.out.println("Player 1- " + player1.getName() + "'s turn ");
                System.out.println("Enter x: ");
                int x = sc.nextInt();
                System.out.println("Enter y: ");
                int y = sc.nextInt();
                status = board.move(player1.getSysmbol(), x, y);
                if (status == 5) {
                    System.out.println("Invalid move! Please try again");
                    continue;
                }
            } else {
                System.out.println("Player 2- " + player2.getName() + "'s turn ");
                System.out.println("Enter x: ");
                int x = sc.nextInt();
                System.out.println("Enter y: ");
                int y = sc.nextInt();
                status = board.move(player2.getSysmbol(), x, y);
                if (status == 5) {
                    System.out.println("Invalid move! Please try again");
                    continue;
                }
            }
            player1turn = !player1turn;
            board.print();
        }
        if (status == 1) {
            System.out.println("Player 1 " + player1.getName() + " wins");
        } else if (status == 2) {
            System.out.println("Player 2 " + player2.getName() + " wins");
        } else {
            System.out.println("Draw");
        }

    }

    public static player takPlayerinput(int num) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Player " + num + " name");
        String name = sc.nextLine();

        System.out.println("Enter Player " + num + " Sysmbol");
        char symbol = sc.next().charAt(0);
        player p = new player(name, symbol);
        return p;
    }

}
