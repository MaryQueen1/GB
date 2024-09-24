import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  
  // В реальном приложении данные можно загружать с серверной части, здесь используем статический массив
  const items = [
    { id: 1, title: 'Статья 1', content: 'Это контент статьи 1.' },
    { id: 2, title: 'Статья 2', content: 'Это контент статьи 2.' },
    { id: 3, title: 'Статья 3', content: 'Это контент статьи 3.' },
  ];

  const item = items.find((item) => item.id === parseInt(id));

  return (
    <div>
      {item ? (
        <>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </>
      ) : (
        <p>Элемент не найден.</p>
      )}
    </div>
  );
};

export default DetailPage;