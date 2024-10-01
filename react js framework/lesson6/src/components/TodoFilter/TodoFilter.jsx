import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext"; // контекст, который содержит информацию о текущем фильтре задач

const TodoFilter = () => {
  // получаем текущий фильтр из контекста
  const { filter, setFilter } = useContext(FilterContext);

  const handleChange = (e) => {
    // устанавлиывем выбранный фильтр
    setFilter(e.target.value); // получает событие `e` и обновляет значение фильтра с помощью `setFilter`, устанавливая его равным значению элемента управления (`e.target.value`)
  };

  return ( 
    <select value={filter} onChange={handleChange}> 
      <option value="all">все</option>
      <option value="completed">выполненые</option>
      <option value="active">активные</option>
    </select>
  ); // элемент выбора (`<select>`), который позволяет пользователю выбирать фильтр из трех вариантов
  // контролируется через свойство `value`
};

export default TodoFilter;
