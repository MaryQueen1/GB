public class Figure extends Rectangle implements AreaCalculator{
    @Override
    public double getArea() {
        return this.height * super.width;
    }
}

// Класс Figure наследуется от класса Rectangle и реализует интерфейс AreaCalculator. Метод getArea() переопределен для вычисления площади фигуры. Это соответствует принципу SRP, так как класс Figure имеет только одну ответственность - вычисление площади фигуры.