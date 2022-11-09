import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import TodoHead from "./TodoHead";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";
import { useSelector } from "react-redux";

const TodoTemplateBox = styled.div`
  width: 512px;
  height: 600px;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  position: relative;
  box-shadow: 8px 8px 30px var(--black);
`;

const TodoMainStyle = styled.div`
  ${({ isEdit }) =>
    isEdit &&
    css`
      opacity: 0.2;
      background-color: rgba(0, 0, 0, 0.5);
    `}
`;

const TodoTemplate = () => {
  // const [todos, setTodos] = useState(getLocalStorage());
  // const [isEdit, setIsEdit] = useState(false);
  // const [newText, setNewText] = useState(null);

  // function getLocalStorage() {
  //   let todos = localStorage.getItem("todos");
  //   if (todos) {
  //     return (todos = JSON.parse(localStorage.getItem("todos")));
  //   } else {
  //     return [];
  //   }
  // }

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // const onChangeSelectedTodo = (todo) => {
  //   setNewText(todo);
  // };

  // const onUpdate = (id, text) => {
  //   setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  //   setIsEdit(false);
  // };

  const todolist = useSelector((state) => state.todo);
  const [isEdit, setIsEdit] = useState(false);

  const task = todolist.filter((todo) => !todo.checked).length;

  return (
    <TodoTemplateBox>
      <TodoMainStyle>
        <TodoHead task={task} />
        <TodoInsert />
        <TodoList todolist={todolist} />
        {isEdit && (
          <TodoEdit
            setIsEdit={setIsEdit}
            // newText={newText}
            // onUpdate={onUpdate}
          />
        )}
      </TodoMainStyle>
    </TodoTemplateBox>
  );
};

export default TodoTemplate;
