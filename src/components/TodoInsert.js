import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
  return (
    <InsertForm>
      <InsertInput placeholder='할 일 입력 후 Enter' />
      <AddButton>
        <MdAdd />
      </AddButton>
    </InsertForm>
  )
}

const InsertForm = styled.form`
  display: flex;
  position: absolute;
  right: 50px;
  top: 100px;
  width: 80%;
  height: 60px;
`

const InsertInput = styled.input`
  visibility: hidden;
  background: var(--light-gray);
  outline: none;
  color: white;
  font-size: 18px;
  flex: 1;
  border: none;
  padding: 15px;
  &::placeholder {
    color: white;
  }
`

const AddButton = styled.button`
  background: var(--blue);
  border: none;
  outline: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  right: 15px;
  top: 100px; */
  cursor: pointer;

  &:hover {
    background: var(--blue-gray);
  }

  &:active{
    background: var(--red);
  }
`

export default TodoInsert;