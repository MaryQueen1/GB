abstract class HotDrink {
    private String name;
    private int loan;
    
    public HotDrink(String name, int loan) {
        this.name = name;
        this.loan = loan;
    }
    
    public String getName() {
        return name;
    }
    
    public int getLoan() {
        return loan;
    }
    
    public abstract void prepare();
}
