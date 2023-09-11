import java.util.Random;

public class hw1 {

    // public int countNTriangle(int n){
    //     int sum = 0;
    //     for(int i = 1; i <= n; i++){
    //         sum += i;
    //     }
    //     return sum;
    // }
    
    public static int countNTriangle(int n) {
        return (n * (n + 1)) / 2;
    }

    public static void main (String[] args) {
        Random random = new Random();
        int n = random.nextInt(101);
        int nthTriangularNumber = countNTriangle(n);
        System.out.println("The " + n + "-th triangular number is: " + nthTriangularNumber);
    }
}
