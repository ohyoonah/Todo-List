import { useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import TodoHead from "./TodoHead";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";

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
  const todolist = useSelector(({ todo }) => todo);
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(null);

  const onChangeSelectedTodo = (todo) => {
    setNewText(todo);
  };

  return (
    <TodoTemplateBox>
      <TodoMainStyle isEdit={isEdit}>
        <TodoHead todolist={todolist} />
        <TodoInsert />
        <TodoList
          todolist={todolist}
          onChangeSelectedTodo={onChangeSelectedTodo}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          newText={newText}
        />
      </TodoMainStyle>
      {isEdit && (
        <TodoEdit setIsEdit={setIsEdit} newText={newText} todolist={todolist} />
      )}
    </TodoTemplateBox>
  );
};

export default TodoTemplate;
