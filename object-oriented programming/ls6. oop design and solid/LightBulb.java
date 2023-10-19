//DIP
class LightBulb implements Switchable{
    private boolean status;
    public void turnOn() {
        // Включение лампочки
        status = true;
        System.out.println("Лампочка включена");
    }

    public void turnOff() {
        // Выключение лампочки
        status = false;
        System.out.println("Лампочка выключена");
    }
}

// Класс LightBulb реализует интерфейс Switchable и предоставляет реализацию методов turnOn() и turnOff(). Это соответствует принципу DIP, так как класс LightBulb зависит от абстракции (интерфейса Switchable), а не от конкретной реализации. Это позволяет легко заменить LightBulb на другую реализацию Switchable, если потребуется.

class Switch{
    LightBulb bulb = new LightBulb();
//    LightBulb bulb1 = new LightBulb();
//    LightBulb bulb2 = new LightBulb();
//    public Switch() {
//        this.bulb = new LightBulb();
//    }

    public void operate() {
        // Работа с выключателем
        bulb.turnOn();
//        bulb1.turnOff();
//        bulb2.turnOff();
    }

    public void switchAllOn(){
        bulb.turnOn();
//        bulb1.turnOff();
//        bulb2.turnOff();
    }
}

interface Switchable {
//    private LightBulb bulb;

    public void turnOn();
    public void turnOff();

}

// Интерфейс Switchable определяет методы turnOn() и turnOff(), которые представляют операции включения и выключения. Это соответствует принципу DIP, так как он предоставляет абстракцию для объектов, которые могут быть включены и выключены. Классы, реализующие этот интерфейс, могут быть использованы вместо конкретной реализации, что делает код более гибким и расширяемым.
