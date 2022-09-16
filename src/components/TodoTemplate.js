import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import TodoHead from './TodoHead';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
import { useEffect } from 'react';

const TodoTemplate = () => {
  const getLocalStorage = () => {
    let todos = localStorage.getItem('todos');
    if(todos) {
      return (todos = JSON.parse(localStorage.getItem('todos')))
    } else {
      return [];
    }
  }

  const [todos, setTodos] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(null);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const onChangeSelectedTodo = (todo) => {
    setNewText(todo);
  };

  const nextId = useRef(0);

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
      important: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  console.log(JSON.stringify(todos));

  const onToggle = (id) => {
    setTodos(todos.map((todo) => (
      // 특정 id를 가지고 있는 객체의 checked 값 반전
      // 특정 배열 원소를 업데이트해야 할 때 map 사용
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )));
  };

  const onRemove = (id) => {
    // id를 파라미터로 받아와 같은 id를 가진 항목을 todos 배열에서 삭제
    // filter 함수로 todo.id와 id가 일치하지 않는 것들만 반환..?! (삭제되고 나머지 것들만??)
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onImportant = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, important: !todo.important } : todo)));
  }

  const onUpdate = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    setIsEdit(false);
  };

  const task = todos.filter((todo) => !todo.checked).length;

  return (
    <TodoTemplateBox>
      <TodoHead task={task}/>
      <TodoInsert onInsert={onInsert} />
      <TodoList 
        todos={todos} 
        onRemove={onRemove} 
        onToggle={onToggle} 
        onImportant={onImportant}
        setIsEdit={setIsEdit}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      {isEdit && 
        <TodoEdit 
          setIsEdit={setIsEdit}
          newText={newText}
          onUpdate={onUpdate}
        />
      }
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