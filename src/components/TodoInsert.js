import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(!visible);
  }

  return (
    <InsertForm>
      {visible &&
        <InsertInput 
          autoFocus
          placeholder='할 일 입력 후 Enter' 
        />
      }
      <AddButton type="button" onClick={onClick} visible={visible}>
        <MdAdd />
      </AddButton>
    </InsertForm>
  )
}

const InsertForm = styled.form`
  display: flex;
`

const InsertInput = styled.input`
  background: var(--light-gray);
  outline: none;
  color: white;
  font-size: 18px;
  border: none;
  padding: 15px;
  width: 80%;
  margin: 0 auto;
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
  position: absolute;
  right: 15px;
  top: 100px;
  cursor: pointer;
  transition: 0.125s all ease-in;

  &:hover {
    background: var(--blue-gray);
  }

  &:active{
    background: var(--red);
    transform: rotate(50deg);
  }

  ${props =>
    props.visible &&
    css`
      background: var(--red);
      transform: rotate(45deg);
      &:hover {
        background: #ff8787;
      }
    `
  }
`

export default TodoInsert;