import styled from "styled-components";
import TodoItem from "./TodoItem.js";

const TodoListBox = styled.div`
  overflow-y: auto;
  height: 100vh;
  margin-top: 3rem;
  padding: 0 3rem;
`;

const TodoList = ({ todolist, onChangeSelectedTodo, setIsEdit, newText }) => {
  return (
    <TodoListBox>
      {todolist.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChangeSelectedTodo={onChangeSelectedTodo}
          index={index}
          setIsEdit={setIsEdit}
          newText={newText}
        />
      ))}
    </TodoListBox>
  );
};

export default TodoList;
