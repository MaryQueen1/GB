// public class hw2 {

//     // public void printPrimeNums(){
//     //     boolean isPrime;
//     //     for(int i = 1; i < 1000; i++) {
//     //         isPrime = i == 1;
//     //         for(int j = 2; j < 1000; j++) {
//     //             if (i >= j && i % j == 0) {
//     //                 if(j == i) {
//     //                     isPrime = true;
//     //                 }
//     //                 break;
//     //             }
//     //         }
//     //         if(isPrime) System.out.println(i);
//     //     }
//     // }
    
//     public static void printPrimeNums() {
//         for (int i = 1; i <= 100; i++) {
//             if (isPrime(i)) {
//                 System.out.print(i + "   ");
//             }
//         }
//     }
    
//     public static boolean isPrime(int n) {
//         for (int i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     public static void main(String[] args) {
//         printPrimeNums();
//     }
// }
