import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({children}) => {
  return (
    <TodoTemplateBox>{children}</TodoTemplateBox>
  )
}

const TodoTemplateBox = styled.div`
  width: 512px;
  height: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  position: relative;
`

export default TodoTemplate;