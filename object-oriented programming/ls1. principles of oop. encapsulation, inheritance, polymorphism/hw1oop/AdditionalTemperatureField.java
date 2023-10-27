// public class AdditionalTemperatureField extends HotDrink{
//     private int temperature;

//     public AdditionalTemperatureField(String name, int loan, int temperature) {
//         super(name, loan);
//         this.temperature = temperature;
//     }

//     public int getTemperature() {
//         return temperature;
//     }

//     @Override
//     public void prepare() {
//         System.out.println("Приготовлен горячий напиток: " + getName() + ", объем: " + getLoan() + " мл, температура: " + getTemperature() + "°C");
//     }
// }

// interface VendingMachine {
//     void getProduct(String name, int loan);
//     void getProduct(String name, int loan, int temperature);
// }