// import java.util.Arrays;
// import java.util.ArrayList;

// public class hw7 {
//     public static void removeEvenNumbers(Integer[] arr) {
        
//         ArrayList<Integer> result = new ArrayList<>();
//         for (Integer num:arr) {
//             if (num % 2 !=0) {
//                 result.add(num);
//             }
//         }
//         System.out.println(result);
//     }
//     public static void main(String[] args) { 
//         Integer[] arr = {};
//         if (args.length == 0) {
//             arr = new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9};
//             }
//             else {
//                 arr = Arrays.stream(args[0].split(", "))
//                                            .map(Integer::parseInt)
//                                            .toArray(Integer[]::new);
//             } 
//         hw7 ans = new hw7();      
//         ans.removeEvenNumbers(arr);
//     }
// }