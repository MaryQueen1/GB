Первым делом добавим ссылки для редактирования и удаления пользователя в `user-index.tpl`, выполняя проверку на наличие прав администратора:

twig

Копировать код
{% if isAdmin %}

  <th scope="col">Edit</th>
  <th scope="col">Delete</th>
{% endif %}

Далее, будем добавлять ссылки в строки пользователей:

twig

Копировать код
{% if isAdmin %}

  <td>
    <a href="/user/edit/?id_user={{ user.getUserId }}">Edit</a>
  </td>
  <td>
    <a href="#" onclick="deleteUser({{ user.getUserId }})">Delete</a>
  </td>
{% endif %}

Обратите внимание, что для удаления указываем функцию `deleteUser`, чтобы сделать вызов более понятным.

Теперь создадим функцию `deleteUser` для асинхронного удаления пользователя:

javascript

Копировать код
function deleteUser(userId) {
$.ajax({
type: 'POST',
url: "/user/delete/",
data: { id: userId }
}).done(function (response) {
if (response.success) {
document.getElementById("userId" + userId).remove();
} else {
alert("Ошибка при удалении пользователя");
}
});
}

Следующий шаг — это редирект на форму редактирования пользователя. Ссылка на редактирование ведет на `user-form.tpl`, где можно изменять данные пользователя.

Теперь добавим метод удаления пользователя в контроллере `UserController`, для этого будет использоваться метод POST:

php

Копировать код
public function actionDelete(): string {
if (User::userExists($_POST['id'])) {
    User::removeFromDatabase($\_POST['id']);
// Вместо перенаправления на index используем JSON для асинхронного ответа
return json_encode(['success' => true]);
} else {
throw new Exception("User does not exist");
}
}

В модели `User` создадим необходимые методы, чтобы они были более очевидными:

php

Копировать код
public static function removeFromDatabase(int $user_id): void {
$query = "DELETE FROM users WHERE id_user = :id_user";

$stmt = Application::$storage->get()->prepare($query);
$stmt->execute(['id_user' => $user_id]);
}

public static function userExists(int $id): bool {
$query = "SELECT COUNT(id_user) AS count FROM users WHERE id_user = :id_user";

$stmt = Application::$storage->get()->prepare($query);
$stmt->execute(['id_user' => $id]);

$result = $stmt->fetch();

return $result && $result['count'] > 0;
}

Кроме того, стоит указать, что только администраторы могут выполнять удаление. Для этого добавляем в массив `actionsPermissions` строку для действия удаления:

php

Копировать код
protected array $actionsPermissions = [
'actionHash' => ['admin', 'some'],
'actionSave' => ['admin'],
'actionDelete' => ['admin']
];

Теперь итоговое содержание массива будет следующим:

php

Копировать код
protected array $actionsPermissions = [
'actionHash' => ['admin', 'some'],
'actionSave' => ['admin'],
'actionDelete' => ['admin']
];
