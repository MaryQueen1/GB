// import java.util.LinkedList;

// public class hw8 {
//     public static LinkedList<Object> revert(LinkedList<Object> ll) {
        
//         // LinkedList<Object> reversed = new LinkedList<>();
//         // for (Object o : ll) {
//         //     reversed.addFirst(o);
//         // }
//         // return reversed;
        
//         LinkedList<Object> reversedList = new LinkedList<>();
//         for (int i = ll.size() - 1; i >= 0; i--) {
//             reversedList.add(ll.get(i));
//         }
//         return reversedList;
//     }
//     public static void main(String[] args) { 
//     LinkedList<Object> ll = new LinkedList<>();

//     if (args.length == 0 || args.length != 4) {
//         ll.add(1);
//         ll.add("One");
//         ll.add(2);
//         ll.add("Two");
//     } else {
//         ll.add(Integer.parseInt(args[0]));
//         ll.add(args[1]);
//         ll.add(Integer.parseInt(args[2]));
//         ll.add(args[3]);
//     }

//     hw8 answer = new hw8();
//     System.out.println(ll);
//     LinkedList<Object> reversedList = answer.revert(ll);
//     System.out.println(reversedList);
//     }
// }


