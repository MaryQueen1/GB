import { createContext, useState } from "react";

// создаем контекст для фильтра
export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // компонент будет использоваться для обеспечения доступа к фильтру тем компонентам, которые находятся внутри него
  //локальное состояние для хранения текущего фильтра
  const [filter, setFilter] = useState("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  ); //Компоненты, которые располагаются внутри `FilterProvider`, смогут получать доступ к `filter` и `setFilter` через контекст. Это позволяет централизованно управлять состоянием фильтра для всех вложенных компонентов
};
