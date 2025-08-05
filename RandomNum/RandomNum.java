package RandomNum;
import java.util.Random;

public class RandomNum {
    public static void main(String[] args) {
        Random in = new Random();
        int num = in.nextInt(100) + 1;
        System.out.println("your number is.. " + num);

        if (num > 90) {
            System.out.println("omgg you just won a pazhampori");
        }
    }
}