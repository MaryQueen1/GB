// import java.util.Arrays;

// public class hw2 {
//     public int[] subArrays(int[] a, int[] b){
//       if (a.length != b.length) {
//             return new int[]{0}; // Возвращаем нулевой массив длины 1, если длины массивов не равны
//         }
//         int[] c = new int[a.length];
//         for (int i = 0; i < a.length; i++) {
//             c[i] = a[i] - b[i]; // Вычисляем разность элементов массивов a и b
//         }
//         return c;
//     }
// // Не удаляйте этот класс - он нужен для вывода результатов на экран и проверки
//     public static void main(String[] args) { 
//       int[] a = {};
//       int[] b = {};
      
//       if (args.length == 0) {
//         // При отправке кода на Выполнение, вы можете варьировать эти параметры
//         a = new int[]{4, 5, 6};
//         b = new int[]{1, 2, 3};
//       }
//       else{
//         a = Arrays.stream(args[0].split(", ")).mapToInt(Integer::parseInt).toArray();
//         b = Arrays.stream(args[1].split(", ")).mapToInt(Integer::parseInt).toArray();
//       }     
      
//       hw2 ans = new hw2(); 
//       String itresume_res = Arrays.toString(ans.subArrays(a, b));     
//       System.out.println(itresume_res);
//     }
// }