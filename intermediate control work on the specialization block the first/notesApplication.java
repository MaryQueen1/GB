import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class notesApplication {
    private static final String FILE_PATH = "C:\\Users\\Maria\\OneDrive\\GB\\intermediate control work on the specialization block\\the first";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Создать заметку");
            System.out.println("2. Просмотреть список заметок");
            System.out.println("3. Редактировать заметку");
            System.out.println("4. Удалить заметку");
            System.out.println("5. Выйти");
            System.out.print("Выберите действие: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Считываем символ новой строки после ввода числа

            switch (choice) {
                case 1:
                    createNote();
                    break;
                case 2:
                    readNotes();
                    break;
                case 3:
                    editNote();
                    break;
                case 4:
                    deleteNote();
                    break;
                case 5:
                    return;
                default:
                    System.out.println("Некорректный выбор. Попробуйте снова.");
            }
        }
    }

    private static void createNote() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите идентификатор заметки: ");
        String noteId = scanner.nextLine();

        System.out.print("Введите заголовок заметки: ");
        String title = scanner.nextLine();

        System.out.print("Введите текст заметки: ");
        String body = scanner.nextLine();

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String createdAt = now.format(formatter);

        String note = noteId + ";" + title + ";" + body + ";" + createdAt;

        try (FileWriter fileWriter = new FileWriter(FILE_PATH, true);
             BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {
            bufferedWriter.write(note);
            bufferedWriter.newLine();
            System.out.println("Заметка сохранена.");
        } catch (IOException e) {
            System.out.println("Ошибка при сохранении заметки: " + e.getMessage());
        }
    }

    private static void readNotes() {
        try (FileReader fileReader = new FileReader(FILE_PATH);
             BufferedReader bufferedReader = new BufferedReader(fileReader)) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Ошибка при чтении заметок: " + e.getMessage());
        }
    }

    private static void editNote() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите идентификатор заметки для редактирования: ");
        String noteId = scanner.nextLine();

        System.out.print("Введите новый текст заметки: ");
        String newBody = scanner.nextLine();

        try (FileReader fileReader = new FileReader(FILE_PATH);
             BufferedReader bufferedReader = new BufferedReader(fileReader);
             FileWriter fileWriter = new FileWriter(FILE_PATH + ".tmp");
             BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                String[] noteData = line.split(";");
                if (noteData[0].equals(noteId)) {
                    noteData[2] = newBody;
                    line = String.join(";", noteData);
                }
                bufferedWriter.write(line);
                bufferedWriter.newLine();
            }
        } catch (IOException e) {
            System.out.println("Ошибка при редактировании заметки: " + e.getMessage());
            return;
        }

        File file = new File(FILE_PATH);
        File tempFile = new File(FILE_PATH + ".tmp");
        if (file.delete() && tempFile.renameTo(file)) {
            System.out.println("Заметка отредактирована.");
        } else {
            System.out.println("Ошибка при редактировании заметки.");
        }
    }

    private static void deleteNote() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите идентификатор заметки для удаления: ");
        String noteId = scanner.nextLine();

        try (FileReader fileReader = new FileReader(FILE_PATH);
             BufferedReader bufferedReader = new BufferedReader(fileReader);
             FileWriter fileWriter = new FileWriter(FILE_PATH + ".tmp");
             BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                String[] noteData = line.split(";");
                if (!noteData[0].equals(noteId)) {
                    bufferedWriter.write(line);
                    bufferedWriter.newLine();
                }
            }
        } catch (IOException e) {
            System.out.println("Ошибка при удалении заметки: " + e.getMessage());
            return;
        }

        File file = new File(FILE_PATH);
        File tempFile = new File(FILE_PATH + ".tmp");
            if (file.delete() && tempFile.renameTo(file)) {
                System.out.println("Заметка удалена.");
            } else {
                System.out.println("Ошибка при удалении заметки.");
            }
        }
    }
                   