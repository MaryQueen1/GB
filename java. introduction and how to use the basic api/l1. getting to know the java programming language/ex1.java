// Задана натуральная степень k. Сформировать случайным образом список коэффициентов (значения от 0 до 100) многочлена многочлен степени k.
// *Пример: k=2 => 2*x² + 4*x + 5 = 0 или x² + 5 = 0 или 10*x² = 0

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ex1 {
    public static List<Integer> generatePolynomialCoefficients(int k) {
        List<Integer> coefficients = new ArrayList<>();
        Random random = new Random();
        
        for (int i = 0; i <= k; i++) {
            coefficients.add(random.nextInt(101)); // Generates random values from 0 to 100
        }
        
        return coefficients;
    }
    
    public static void main(String[] args) {
        int k = 2;
        List<Integer> coefficients = generatePolynomialCoefficients(k);
        // System.out.println(coefficients);
    }
}
