import React, { useState } from 'react';
import styled from 'styled-components';
import TodoHead from './TodoHead';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplate = ({children}) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'text',
      checked: true,
    },
    {
      id: 2,
      text: 'text',
      checked: false,
    },
  ]);

  return (
    <TodoTemplateBox>
      <TodoHead />
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplateBox>
  )
}

const TodoTemplateBox = styled.div`
  width: 512px;
  height: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  position: relative;
`

export default TodoTemplate;