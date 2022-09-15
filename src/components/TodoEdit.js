import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EditForm = styled.div`
  form {
    background: white;
    border: 5px solid var(--light-gray);
    width: 60%;
    height: 50%;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  input {
    background: var(--light-gray);
    border: none;
    outline: none;
    width: 80%;
    height: 40px;
    font-size: 1.2rem;
    padding-left: 10px;
  }

  .buttonBox {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    .updateButton,
    .closeButton {
      cursor: pointer;
      background: var(--light-gray);
      border: none;
      flex: 1;
      /* width: 50%; */
      height: 40px;
      font-size: 1rem;
      &:hover {
        background: var(--blue-gray);
      }
    }
  }
`

const TodoEdit = ({setIsEdit, newText, onUpdate}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(newText.text);
  }, [newText]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(newText.id, inputValue);
    setInputValue('');
  }

  return (
    <EditForm>
      <form onSubmit={onSubmit}>
        <input value={inputValue} onChange={onChange} autoFocus/>
        <div className='buttonBox'>
          <button className='updateButton' type='submit'>확인</button>
          <button className='closeButton' onClick={() => setIsEdit(prev => !prev)}>닫기</button>
        </div>
      </form>
    </EditForm>
  )
}

export default TodoEdit;