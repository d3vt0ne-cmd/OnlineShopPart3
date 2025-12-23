import { createContext, useContext, useState } from 'react';

// Создаём контекст с начальными значениями
const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
});

// Провайдер контекста (оборачивает всё приложение)
export const ContextProvider = ({ children }) => {
  // Состояние пользователя
  const [user, setUser] = useState(null);
  
  // Состояние токена (берём из localStorage при инициализации)
  const [token, _setToken] = useState(
    localStorage.getItem('ACCESS_TOKEN') || null
  );

  // Функция для установки токена (сохраняет в localStorage)
  const setToken = (newToken) => {
    _setToken(newToken);
    if (newToken) {
      localStorage.setItem('ACCESS_TOKEN', newToken);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };

  // Значение, которое будет доступно через контекст
  const contextValue = {
    user,
    token,
    setUser,
    setToken
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

// Хук для удобного использования контекста
export const useStateContext = () => useContext(StateContext);