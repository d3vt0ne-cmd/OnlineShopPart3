import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProviders';
import router from './router';
import './index.css';

// Получаем корневой элемент
const rootElement = document.getElementById('root');

// Создаём корень React
const root = createRoot(rootElement);

// Рендерим приложение
root.render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);