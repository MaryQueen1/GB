//SRP
public class Employee {
    private String name;
    private double salary = 200.0;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void saveEmployee() {
        // Сохранение данных сотрудника в базу данных
    }
}

// Класс Employee представляет сотрудника и имеет методы для получения и установки имени и заработной платы, а также метод saveEmployee(), который сохраняет данные сотрудника в базу данных. Это соответствует принципу SRP, так как класс имеет только одну ответственность - представление сотрудника и управление его данными.

class Accounting {
    Employee employee1 = new Employee();
    public void calculateSalary() {
        // Подсчет заработной платы
    }

    // Класс Accounting отвечает за подсчет заработной платы и имеет метод calculateSalary(), который выполняет соответствующие расчеты. Это соответствует принципу SRP, так как класс имеет только одну ответственность - подсчет заработной платы.
}
