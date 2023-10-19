public class HotDrinksVendingMachine implements VendingMachine {
    private VendingMachineController controller;
    private VendingMachineView view;

    public HotDrinksVendingMachine() {
        controller = new VendingMachineController();
        view = new VendingMachineView();
    }

    @Override
    public void getProduct(String name, int loan) {
        controller.getProduct(name, loan);
        view.displayProduct(name, loan);
    }

    @Override
    public void getProduct(String name, int loan, int temperature) {
        controller.getProduct(name, loan, temperature);
        view.displayProduct(name, loan, temperature);
    }
}
