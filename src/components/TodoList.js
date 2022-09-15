import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem.js';

const TodoList = ({onChangeSelectedTodo, todos, onToggle, onRemove, onImportant, setIsEdit}) => {
  return (
    <TodoListBox>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onImportant={onImportant}
          setIsEdit={setIsEdit}
          onChangeSelectedTodo={onChangeSelectedTodo}
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