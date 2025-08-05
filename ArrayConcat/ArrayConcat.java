package ArrayConcat;
public class ArrayConcat {
    public static void main(String[] args) {
        int[] p = {1, 2, 3};
        int[] q = {4, 5, 6};
        int[] r = new int[p.length + q.length];

        for (int i = 0; i < p.length; i++) {
            r[i] = p[i];
        }

        for (int i = 0; i < q.length; i++) {
            r[p.length + i] = q[i];
        }

        System.out.println("combined array: ");
        for (int i = 0; i < r.length; i++) {
            System.out.print(r[i] + " ");
        }
    }
}
