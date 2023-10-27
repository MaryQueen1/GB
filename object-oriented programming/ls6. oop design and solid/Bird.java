// //LSP
// class Bird implements CanFly{
//     public void fly() {
//         // Реализация полета птицы
//         System.out.println("Птица летает");
//     }
// }

// class Woodpecker extends Bird implements CanFly{
//     @Override
//     public void fly() {
//         System.out.println("Дятел умеет летать");
//     }

//     // Класс Woodpecker наследуется от класса Bird и также реализует интерфейс CanFly. Он переопределяет метод fly() для предоставления специфичной реализации полета для дятла. Это также соответствует принципу LSP, так как объекты класса Woodpecker могут быть использованы везде, где ожидается объект типа CanFly.
// }

// class Ostrich extends Bird implements Runnable{

//     @Override
//     public void run() {
//         System.out.println();
//     }

//     // Класс Ostrich наследуется от класса Bird и реализует интерфейс Runnable. Он предоставляет реализацию метода run(), который не делает ничего в данном случае. Однако, это нарушает принцип LSP, так как объекты класса Ostrich не могут быть использованы везде, где ожидается объект типа CanFly. Чтобы исправить это, можно было бы создать отдельный интерфейс для птиц, которые не могут летать, и имплементировать его в классе Ostrich.
// }