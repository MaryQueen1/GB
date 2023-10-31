// import java.io.FileWriter;
// import java.io.IOException;

// public class Main {
//     public static void main(String[] args) {
//         String userInput = "Ivanov Ivan Ivanovich 01.01.1990 1234567890 m";

//         try {
//             UserData userData = UserDataParser.parseUserData(userInput);
//             saveUserDataToFile(userData);
//             System.out.println("The data was successfully saved to the file.");
//         } catch (IllegalArgumentException e) {
//             System.out.println("Error: " + e.getMessage());
//         } catch (IOException e) {
//             e.printStackTrace();
//         }
//     }

//     private static void saveUserDataToFile(UserData userData) throws IOException {
//         String folderPath = "C:\\Users\\Maria\\OneDrive\\GB\\exceptions in programming and their handling\\ls3. advanced handling of exceptions in java\\Attestation\\";
//         String fileName = folderPath + userData.getLastName() + ".txt";
//         FileWriter fileWriter = new FileWriter(fileName, true);

//         fileWriter.write(userData.getLastName() + " " + userData.getFirstName() + " " + userData.getMiddleName() +
//         " " + userData.getDateOfBirth() + " " + userData.getPhoneNumber() + userData.getGender() + "\n");

//         fileWriter.close();
//     }
// }