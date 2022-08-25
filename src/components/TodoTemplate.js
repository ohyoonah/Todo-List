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

  const onRemove = (id) => {
    // id를 파라미터로 받아와 같은 id를 가진 항목을 todos 배열에서 삭제
    // filter 함수로 todo.id와 id가 일치하지 않는 것들만 반환..?! (삭제되고 나머지 것들만??)
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplateBox>
      <TodoHead />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
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