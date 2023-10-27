// import java.util.Arrays;
// import java.util.Random;

// public class program2 {
//     public static void main(String[] args) {
        
//         Random random = new Random();
//         int randomNumber = random.nextInt(2001);

//         System.out.println(randomNumber);

//         System.out.println(Integer.toBinaryString(randomNumber));
//         System.out.println(Integer.toBinaryString(randomNumber).length());
        
//         int byteNumber = Integer.toBinaryString(randomNumber).length();

//         int[] array = new int[1];
//         int arrayCount = 0;

//         for (int i = 0; i < Short.MAX_VALUE; i++) {
//             if (i % byteNumber == 0) {
//                 array[arrayCount++] = i;
//                 int[] tempArray = new int[array.length+1];
//                 for(int j = 0; j < array.length; j++) {
//                     tempArray[j] = array[j];
//                 }
//                 array = tempArray;
//             }
//         }
//         //-- System.out.println(Arrays.toString(array));

//         int overlapCounts = 0;

//         for (int i = Short.MIN_VALUE; i < 0; i++) {
//             if (i % byteNumber != 0) {
//                 overlapCounts++;
//             }
//         }
        
//         int[] overlapSizeArray = new int[overlapCounts];
//         arrayCount = 0;
        
//         for (int i = Short.MIN_VALUE; i < 0; i++) {
//             if (i % byteNumber != 0) {
//                 overlapSizeArray[arrayCount++] = i;
//             }
//         }

//         // System.out.println(Arrays.toString(overlapSizeArray));
//         // цикл, который будет считать арифметическую прогрессию от нуля до числа

//         // int sum = 0;
//         // for (int i = 0; i < byteNumber; i++) {
//         //     sum += i;
//         // }
//         // System.out.println(sum);

//         int sum = 0;
//         for (int i = 0; i < byteNumber; sum += i++);
//         System.out.println(sum);

//         int[] ints = {1,2,3,4,5,6,7,8,9};
//         // int counter = ints.length;
//         // for (int i = 0; i <= counter/2 ; i++) {
//         //     System.out.println(ints[i] + "-" + ints[--counter]);
//         // }
//         for (int i = 0, counter = ints.length - 1; i <= ints.length / 2; i++, counter--) {
//             System.out.println(ints[i] + " - " + ints[counter]);
//         }
//     }
// }

