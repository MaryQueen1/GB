// Королева Мария Данииловна 4830

import java.util.*;

public class hw11 {
    public static void main(String[] args) {

        HashMap<String, List<String>> phoneBook = new HashMap<>();

        addContact(phoneBook, "Иванов", "79564585544");
        addContact(phoneBook, "Петров", "79421235689");
        addContact(phoneBook, "Сидоров", "796856854488");
        addContact(phoneBook, "Иванов", "798621456688");
        addContact(phoneBook, "Петров", "795845216544");

        List<Map.Entry<String, List<String>>> sortedContacts = sortContacts(phoneBook);
        for (Map.Entry<String, List<String>> entry : sortedContacts) {
            String name = entry.getKey();
            List<String> phones = entry.getValue();
            System.out.println(name + ": " + phones);
        }
    }

    public static void addContact(HashMap<String, List<String>> phoneBook, String name, String phone) {

        if (phoneBook.containsKey(name)) {
            List<String> phones = phoneBook.get(name);
            phones.add(phone);
        } else {

            List<String> phones = new ArrayList<>();
            phones.add(phone);
            phoneBook.put(name, phones);
        }
    }

    public static List<Map.Entry<String, List<String>>> sortContacts(HashMap<String, List<String>> phoneBook) {

        List<Map.Entry<String, List<String>>> entries = new ArrayList<>(phoneBook.entrySet());


        Collections.sort(entries, new Comparator<Map.Entry<String, List<String>>>() {
            public int compare(Map.Entry<String, List<String>> entry1, Map.Entry<String, List<String>> entry2) {
                int size1 = entry1.getValue().size();
                int size2 = entry2.getValue().size();
                return Integer.compare(size2, size1);
            }
        });

        return entries;
    }
}
