import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String userInput = "Иванов Иван Иванович 01.01.1990 1234567890 m";

        try {
            UserData userData = UserDataParser.parseUserData(userInput);
            saveUserDataToFile(userData);
            System.out.println("Данные успешно сохранены в файл.");
        } catch (IllegalArgumentException e) {
            System.out.println("Ошибка: " + e.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void saveUserDataToFile(UserData userData) throws IOException {
        String fileName = userData.getLastName() + ".txt";
        FileWriter fileWriter = new FileWriter(fileName, true);

        fileWriter.write(userData.getLastName() + userData.getFirstName() + userData.getMiddleName() +
                userData.getDateOfBirth() + " " + userData.getPhoneNumber() + userData.getGender() + "\n");

        fileWriter.close();
    }
}