// import java.util.ArrayDeque;
// import java.util.Deque;

// public class hw10 {
    
//     private Deque<Integer> history;

//     public hw10() {
//         history = new ArrayDeque<>();
//     }

//     public int calculate(char op, int a, int b) {
//         int result;
//         switch (op) {
//             case '+':
//                 result = a+b;
//                 history.push(result);
//                 break;
//             case '-':
//                 result = a-b;
//                 history.push(result);
//                 break;
//             case '*':
//                 result = a*b;
//                 history.push(result);
//                 break;
//             case '/':
//                 result = a/b;
//                 history.push(result);
//                 break;
//             case '<':
//                 if (history.size() >= 2) {
//                     history.pop();
//                     result = history.peek();
//                 } else {
//                     result = 0;
//                 }
//                 break;
//             default:
//             result = 0;
//             break;
//         }
//         return result;
//     }

//     public static void main(String[] args) {
//         int a,b,c,d;
//         char op,op2,undo;

//         if (args.length == 0) {
//             a = 3;
//             op = '+';
//             b = 7;
//             c = 4;
//             op2 = '+';
//             d = 7;
//             undo = '<';
//         } else {
//             a = Integer.parseInt(args[0]);
//             op = args[1].charAt(0);
//             b = Integer.parseInt(args[2]);
//             c = Integer.parseInt(args[3]);
//             op2 = args[4].charAt(0);
//             d = Integer.parseInt(args[5]);
//             undo = args[6].charAt(0);
//         }

//         hw10 calculator = new hw10();
//         int result = calculator.calculate(op, a, b);
//         System.out.println(result);
//         int result2 = calculator.calculate(op2, c, d);
//         System.out.println(result2);
//         int prevResult = calculator.calculate(undo, 0, 0);
//         System.out.println(prevResult);
//     }
// }
