import java.util.Scanner;

public class Main7 {
    public static void main(String[] args) {
        // Создание объектов комплексных чисел
        ComplexNumber a = new ComplexNumber(2, 3);
        ComplexNumber b = new ComplexNumber(4, 5);

        // Создание логгера
        Logger logger = new ConsoleLogger();

        // Создание калькулятора с логированием
        Calculator calculator = new CalculatorLogger(new ComplexCalculator(), logger);

        // Ввод операции от пользователя
        Scanner scanner = new Scanner(System.in);
        System.out.println("Выберите операцию (1 - сложение, 2 - умножение, 3 - деление):");
        int operation = scanner.nextInt();

        // Выполнение операции и вывод результата
        ComplexNumber result;
        switch (operation) {
            case 1:
                result = calculator.add(a, b);
                System.out.println("Результат сложения: " + result);
                break;
            case 2:
                result = calculator.multiply(a, b);
                System.out.println("Результат умножения: " + result);
                break;
            case 3:
                result = calculator.divide(a, b);
                System.out.println("Результат деления: " + result);
                break;
            default:
                System.out.println("Некорректная операция.");
        }
    }
}
