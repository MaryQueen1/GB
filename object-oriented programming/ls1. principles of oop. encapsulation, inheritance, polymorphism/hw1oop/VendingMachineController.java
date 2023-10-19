public class VendingMachineController {
    private HotDrink model;

    public void getProduct(String name, int loan) {
        model = new HotDrink(name, loan);
        model.prepare();
    }

    public void getProduct(String name, int loan, int temperature) {
        model = new AdditionalTemperatureField(name, loan, temperature);
        model.prepare();
    }
}
