import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem.js';

const TodoList = ({todos}) => {
  return (
    <TodoListBox>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          todo={todo}
        />
      ))}
    </TodoListBox>
  )
}

const TodoListBox = styled.div`
  overflow-y: auto;
`

export default TodoList;