import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import TodoHead from './TodoHead';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  return (
    <TodoTemplateBox>
      <TodoHead />
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} />
    </TodoTemplateBox>
  )
}

const TodoTemplateBox = styled.div`
  width: 512px;
  height: 600px;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 16px;
  overflow: hidden;
  /* overflow-y: auto; */
  background: white;
  position: relative;
`

export default TodoTemplate;