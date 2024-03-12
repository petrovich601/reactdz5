

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './actions/action.js';

const App = () => {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>Приложение с переключением темы</h1>
        <button onClick={toggleThemeHandler}>Toggle Theme</button>
      </header>
      <main>
        <p>Текущая тема: {darkMode ? 'Темная' : 'Светлая'}</p>
      </main>
    </div>
  );
};

export default App;