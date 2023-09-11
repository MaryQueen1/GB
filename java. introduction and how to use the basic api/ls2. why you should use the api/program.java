public class program {
    public static void main(String[] args) {
    
        // создать две строки, если в 1й сожержится 2я, то вывести ее в индекс, если сожержится несколько раз - вывести индекс каждой

        String stringForFind = "qwe";
        String mainString = "asd qwert qwes qwe";
        
        String[] stringArray = mainString.split(" ");
        
        int temp = 0;
        
        while(mainString.indexOf(stringForFind, temp) != -1) {
            // System.out.println(mainString.indexOf(stringForFind, temp));
            temp = mainString.indexOf(stringForFind, temp) + 1;
        // do {
        //     System.out.println(mainString.indexOf(stringForFind, temp));
        //     temp = mainString.indexOf(stringForFind, temp) + 1;
        // } while (temp < mainString.lastIndexOf(stringForFind));
        }

        // создать 2 строки, если 2я является вращением (реверсом) 1й - вывести ок
        
        String str1 = "qwe";
        String str2 = "ewq";

        if (new StringBuilder(str1).reverse().toString().equals(str2)) {
            // System.out.println("OK");
        }
        else {
            // System.out.println("NOT OK");
        }
        // str2 = null;
        // str2.split(" ");
        // 1.48.00 - lesson

        String equals = "3 + 56 = 59";
        // System.out.println(equals);
        equals = equals.replace("=", "равно");
        // System.out.println();
        // System.out.println("-".replace(16));

        StringBuilder eq = new StringBuilder ("3 + 56 = 59");
        eq.replace(eq.indexOf("="), eq.indexOf("=") + 1, "равно");
        // System.out.println(eq);

        // измерить скорость добавления к строке 1000 элементов в String и SntringBuilder

        long start = System.currentTimeMillis();
        String s = "";
        for (int  i = 0; i<1000; i++) {
            s += Character.getName(i);
        }

        long end = System.currentTimeMillis();
        // System.out.println(end-start);

        start = System.currentTimeMillis();
        StringBuilder string = new StringBuilder ("");
        for (int  i = 0; i<1000; i++) {
            string.append(Character.getName(i));
        }

        end = System.currentTimeMillis();
        // System.out.println(end-start);

        // сравнить время replace string и  strinbuilder

        // String str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        // long es = System.currentTimeMillis();
        // str.replace('a', 's');
        // long no = System.currentTimeMillis();
        // System.out.println(es - no);

        // StringBuilder strr = new StringBuilder("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        // es = System.currentTimeMillis();
        // while (strr.toString().contains("a")) {
        //     strr.replace(strr.indexOf("a"), strr.indexOf("a") + 1, "s");
        // }

        // no = System.currentTimeMillis();
        // System.out.println(es - no);
        // System.out.println(strr);

        // String a = "";
        // for (int i = 0; i < 100000; i++) {
        //     a += "a";
        // }
        // long nachalo = System.nanoTime();
        // a.replace('a', 's');
        // long konez = System.nanoTime();
        // System.out.println(nachalo - konez);

        // StringBuilder b = new StringBuilder();
        // for (int i = 0; i < 100000; i++) {
        //     b.append("a");
        // }
        // nachalo = System.nanoTime();
        // String asd = b.toString();
        // asd.replace("a", "s");

        // konez = System.nanoTime();
        // System.out.println(nachalo - konez);
    }
}

