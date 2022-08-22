import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #282c37;
    --blue-gray: #9baec8;
    --light-gray: #d9e1e8;
    --blue: #2b90d9;
    --red: #f1404b;
  }
  body {
    background: var(--light-gray);
  }
`

export default App;
