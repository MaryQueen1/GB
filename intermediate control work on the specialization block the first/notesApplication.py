import json
import datetime
import os

def create_note():
    note_id = input("Введите идентификатор заметки: ")
    title = input("Введите заголовок заметки: ")
    body = input("Введите текст заметки: ")
    created_at = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return {"id": note_id, "title": title, "body": body, "created_at": created_at}

def save_note(note, path):
    filename = os.path.join(path, "notes.json")
    with open(filename, "a", encoding="utf-8") as file:
        json.dump(note, file, ensure_ascii=False)
        file.write("\n")

def read_notes(path):
    filename = os.path.join(path, "notes.json")
    with open(filename, "r", encoding="utf-8") as file:
        notes = file.readlines()
        for note in notes:
            print(note)

def edit_note(path):
    note_id = input("Введите идентификатор заметки для редактирования: ")
    new_body = input("Введите новый текст заметки: ")
    filename = os.path.join(path, "notes.json")
    with open(filename, "r+", encoding="utf-8") as file:
        notes = file.readlines()
        file.seek(0)
        for note in notes:
            note_data = json.loads(note)
            if note_data["id"] == note_id:
                note_data["body"] = new_body
            json.dump(note_data, file, ensure_ascii=False)
            file.write("\n")
        file.truncate()

def delete_note(path):
    note_id = input("Введите идентификатор заметки для удаления: ")
    filename = os.path.join(path, "notes.json")
    with open(filename, "r+", encoding="utf-8") as file:
        notes = file.readlines()
        file.seek(0)
        for note in notes:
            note_data = json.loads(note)
            if note_data["id"] != note_id:
                json.dump(note_data, file, ensure_ascii=False)
                file.write("\n")
        file.truncate()

def main():
    path = r"C:\Users\Maria\OneDrive\GB\intermediate control work on the specialization block\the first"
    while True:
        print("1. Создать заметку")
        print("2. Просмотреть список заметок")
        print("3. Редактировать заметку")
        print("4. Удалить заметку")
        print("5. Выйти")
        choice = input("Выберите действие: ")

        if choice == "1":
            note = create_note()
            save_note(note, path)
            print("Заметка сохранена.")
        elif choice == "2":
            read_notes(path)
        elif choice == "3":
            edit_note(path)
            print("Заметка отредактирована.")
        elif choice == "4":
            delete_note(path)
            print("Заметка удалена.")
        elif choice == "5":
            break
        else:
            print("Некорректный выбор. Попробуйте снова.")

if __name__ == "__main__":
    main()
