public class Main {
    public static void main(String[] args) {
        Cat cat = new Cat();

        // getter/setter
        //                                                                cat.setName("barsik");
        //                                                                System.out.println(cat.getName());
        //                                                                cat.setName("mursik");
        //                                                                System.out.println(cat.getName());

        // определение всего кота = Cat@15db9742
        cat.setAge(5);
        cat.setName("mursik");
        //                                                                System.out.println(cat.toString());
        
        Cat cat2 = new SiberanCat();
        cat2.setAge(7);
        cat2.setName("musya");

        // meow! my name is mursik my age is 5
        cat.printInfo();

        // hello im siberan cat 7 musya
        cat2.printInfo();
    }
}