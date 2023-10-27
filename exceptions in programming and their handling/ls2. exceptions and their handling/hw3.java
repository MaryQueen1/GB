// public class hw3 {

//     public static double expr(int a, int b) {
//  // Введите свое решение ниже
//       if (b == 0) {
//             printSum(a, b);
//             return 0;
//         }

//         double result = (double) a / b;
//         printSum(a, b);
//         return result;
//     }

//     public static void printSum(int a, int b) {
//  // Введите свое решение ниже
//       int sum = a + b;
//       System.out.println(sum);
//     }

// // Не удаляйте этот класс - он нужен для вывода результатов на экран и проверки

//     public static void main(String[] args) {
//         int a;
//         int b;

//         if (args.length == 0) {
//             a = 90;
//             b = 3; // Default values if no arguments are provided
//         } else {
//             a = Integer.parseInt(args[0]);
//             b = Integer.parseInt(args[1]);
//         } 

//         double result = hw3.expr(a, b);
//         System.out.println(result);
//     }
// }