public class Island {
    static int rows, cols;
    static char[][] grid;
    static boolean[][] visited;

    static int[] dr = {-1, 1, 0, 0, -1, -1, 1, 1};
    static int[] dc = {0, 0, -1, 1, -1, 1, -1, 1};

    public static int countIslands(char[][] inputGrid) {
        grid = inputGrid;
        rows = grid.length;
        cols = grid[0].length;
        visited = new boolean[rows][cols];
        int count = 0;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 'L' && !visited[r][c]) {
                    dfs(r, c);
                    count++;
                }
            }
        }
        return count;
    }

    static void dfs(int r, int c) {
        visited[r][c] = true;
        for (int i = 0; i < 8; i++) {
            int nr = r + dr[i];
            int nc = c + dc[i];
            if (nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                !visited[nr][nc] &&
                grid[nr][nc] == 'L') {
                dfs(nr, nc);
            }
        }
    }

    public static void main(String[] args) {
        char[][] exampleGrid = {
            {'W', 'W', 'W', 'L'},
            {'W', 'L', 'W', 'W'},
            {'W', 'W', 'L', 'W'},
            {'W', 'W', 'W', 'W'}
        };
        System.out.println(countIslands(exampleGrid)); 
    }
}