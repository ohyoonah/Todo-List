import React from 'react';
import styled from 'styled-components';
import { 
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdOutlineStarOutline,
  MdOutlineStarPurple500,
  MdModeEditOutline
 } from 'react-icons/md';

const TodoItem = ({onChangeSelectedTodo, todo, onRemove, onToggle, onImportant, setIsEdit}) => {
  const {id, text, checked, important} = todo;

  return (
    <TodoItemBox>
      <div className='checkBox' onClick={() => onToggle(id)}>
        {checked ? (
          <>
            <MdCheckBox className='check' />
            <div className="itemCheckText">{text}</div>
          </>
        ) : (
          <>
            <MdCheckBoxOutlineBlank />
            <div className="itemText">{text}</div>
          </>
        )}
      </div>
      <TodoImportant>
        <div className='checkStar' onClick={() => onImportant(id)}>
          {important ? (
            <MdOutlineStarPurple500 className='fullStar' />
          ) : (
            <MdOutlineStarOutline className='emptyStar' />
          )}
        </div>
      </TodoImportant>
      <TodoItemEdit onClick={() => {
        onChangeSelectedTodo(todo);
        setIsEdit(true);
        }}
      ><MdModeEditOutline />
      </TodoItemEdit>
      <TodoItemRemove>
        <MdRemoveCircleOutline onClick={() => onRemove(id)}/>
      </TodoItemRemove>
    </TodoItemBox>
  )
}

const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4rem;
  margin: 30px 0;

  .check {
    color: var(--blue);
  }

  .checkBox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 25px;
    color: var(--black);
    .itemCheckText {
      flex: 1;
      margin-left: 1rem;
      text-decoration: line-through;
      color: var(--blue-gray);
      font-size: 20px;
    }
    .itemText {
      flex: 1;
      margin-left: 1rem;
      font-size: 20px;
    }
  }
`

const TodoItemEdit = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-right: 5px;
  color: var(--blue-gray);
`

const TodoItemRemove = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 28px;
  color: var(--light-red);
`

const TodoImportant = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-right: 5px;

  .fullStar {
    color: var(--yellow);
  }
`

export default TodoItem;