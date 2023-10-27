// public class hw1 {
//     public static void arrayOutOfBoundsException() {
//         int[] array = {1, 2, 3};
//         int element = array[3]; // Выход за пределы массива
      
// }

//     public static void divisionByZero() {
//         int numerator = 10;
//         int denominator = 0;
//         int result = numerator / denominator; // Деление на 0
      
// }

//     public static void numberFormatException() {
//         String str = "abc";
//         int number = Integer.parseInt(str); // Ошибка преобразования строки в число
       
//  }

//     public static void main(String[] args) {
//         hw1 ans = new hw1();
//         try {
//             ans.arrayOutOfBoundsException();
//         } catch (ArrayIndexOutOfBoundsException e) {
//             System.out.println("Выход за пределы массива");
//         }

//         try {
//             ans.divisionByZero();
//         } catch (ArithmeticException e) {
//             System.out.println("Деление на ноль");
//         }

//         try {
//             ans.numberFormatException();
//         } catch (NumberFormatException e) {
//             System.out.println("Ошибка преобразования строки в число");
//         }
//     }
// }
