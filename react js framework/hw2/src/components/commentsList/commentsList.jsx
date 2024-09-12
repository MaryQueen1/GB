import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const handleDelete = (id) => {
    const updateComments = comments.filter(
      (thisComment) => thisComment.id != id
    );
    setComments(updateComments);
  };

  return (
    <div>
        <h2>Комментарии</h2>
        <ul>
            {comments.map(comments => (
                <li key={comments.id}>
                    {comments.text}
                    <button onClick={() => handleDelete(comments.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CommentsList;
