public class MoveChips {
    int minCostToMoveChips(int[] pos) {
        int even = 0, odd = 0;
        for (int i = 0; i < pos.length; i++) {
            if (pos[i] % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }
        return Math.min(even, odd);
    }

    public static void main(String[] args) {
        MoveChips in = new MoveChips();

        int[] pos = {2, 2, 2, 3, 3};
        System.out.println("Minimum cost: " + in.minCostToMoveChips(pos));
    }
}