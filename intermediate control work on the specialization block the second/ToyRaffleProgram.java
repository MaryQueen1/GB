public class ToyRaffleProgram {
    public static void main(String[] args) {
        ToyStore toyStore = new ToyStore();

        // Добавление новых игрушек
        toyStore.addToy(new Toy(1, "dall", 10, 30));
        toyStore.addToy(new Toy(2, "ball", 15, 20));
        toyStore.addToy(new Toy(3, "car", 20, 50));

        // Изменение веса (частоты выпадения игрушки)
        toyStore.updateToyWeight(1, 40);

        // Розыгрыш игрушек
        Toy prizeToy = toyStore.selectPrizeToy();
        if (prizeToy != null) {
            toyStore.savePrizeToyToFile(prizeToy, "prize_toys.txt");
            System.out.println("Призовая игрушка сохранена в файл prize_toys.txt");
        } else {
            System.out.println("Нет доступных призовых игрушек");
        }
    }
}
