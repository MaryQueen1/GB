public class Circle extends Rectangle implements AreaCalculator{
    private Double radius;
    @Override
    public double getArea() {
        return Math.PI * Math.pow(radius, 2);
    }
}

// Класс Circle представляет круг и наследуется от класса Rectangle. Он также реализует интерфейс AreaCalculator и переопределяет метод getArea(), чтобы вычислить площадь круга. Это соответствует принципу SRP, так как класс имеет только одну ответственность - представление круга и вычисление его площади.