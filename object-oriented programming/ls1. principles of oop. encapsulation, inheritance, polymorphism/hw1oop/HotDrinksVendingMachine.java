public class HotDrinksVendingMachine implements VendingMachine{
    @Override
    public void getProduct(String name, int loan) {
        HotDrink drink = new HotDrink(name, loan) {
            @Override
            public void prepare() {
                System.out.println("Приготовлен горячий напиток: " + getName() + ", объем: " + getLoan() + " мл");
            }
        };

        drink.prepare();
    }

    @Override
    public void getProduct(String name, int loan, int temperature) {
        AdditionalTemperatureField drink = new AdditionalTemperatureField(name, loan, temperature);
        drink.prepare();
    }
}
