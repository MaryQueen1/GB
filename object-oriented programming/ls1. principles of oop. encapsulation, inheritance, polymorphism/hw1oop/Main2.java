public class Main2 {
    public static void main(String[] args) {
        HotDrinksVendingMachine automat = new HotDrinksVendingMachine();

        automat.getProduct("Чай", 200);
        automat.getProduct("Кофе", 300, 80);
    }
}

