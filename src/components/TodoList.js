import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem.js';

const TodoList = ({todos, onRemove}) => {
  return (
    <TodoListBox>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
        />
      ))}
    </TodoListBox>
  )
}

const TodoListBox = styled.div`
  overflow-y: auto;
  height: 100%;
  margin-top: 10px;
`

export default TodoList;