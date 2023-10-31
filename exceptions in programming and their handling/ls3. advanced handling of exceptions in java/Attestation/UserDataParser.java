// public class UserDataParser {
//     public static UserData parseUserData(String input) throws IllegalArgumentException {
//         String[] data = input.split(" ");

//         if (data.length != 6) {
//             throw new IllegalArgumentException("Incorrect amount of data");
//         }

//         String lastName = data[0];
//         String firstName = data[1];
//         String middleName = data[2];
//         String dateOfBirth = data[3];
//         long phoneNumber;
//         char gender;

//         try {
//             phoneNumber = Long.parseLong(data[4]);
//         } catch (NumberFormatException e) {
//             throw new IllegalArgumentException("Invalid phone number format");
//         }

//         if (data[5].length() != 1 || (!data[5].equals("f") && !data[5].equals("m"))) {
//             throw new IllegalArgumentException("Invalid floor format");
//         }

//         gender = data[5].charAt(0);

//         return new UserData(lastName, firstName, middleName, dateOfBirth, phoneNumber, gender);
//     }
// }
