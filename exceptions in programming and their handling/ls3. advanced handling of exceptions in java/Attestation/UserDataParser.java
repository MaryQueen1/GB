public class UserDataParser {
    public static UserData parseUserData(String input) throws IllegalArgumentException {
        String[] data = input.split(" ");

        if (data.length != 6) {
            throw new IllegalArgumentException("Неверное количество данных");
        }

        String lastName = data[0];
        String firstName = data[1];
        String middleName = data[2];
        String dateOfBirth = data[3];
        long phoneNumber;
        char gender;

        try {
            phoneNumber = Long.parseLong(data[4]);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("Неверный формат номера телефона");
        }

        if (data[5].length() != 1 || (!data[5].equals("f") && !data[5].equals("m"))) {
            throw new IllegalArgumentException("Неверный формат пола");
        }

        gender = data[5].charAt(0);

        return new UserData(lastName, firstName, middleName, dateOfBirth, phoneNumber, gender);
    }
}
