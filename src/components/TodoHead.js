import React from 'react';
import styled from 'styled-components';

const TodoHead = ({task}) => {
  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBox>
      <div>
        <h1>{dateString}</h1>
        <div className='day'>{dayName}</div>
      </div>
      <TasksBox>{task} Tasks</TasksBox>
    </TodoHeadBox>
  )
}

const TodoHeadBox = styled.div`
  h1 {
    margin: 0;
    font-size: 28px;
    color: var(--black);
  }
  .day {
    margin-top: 10px;
    color: var(--black);
    font-size: 18px;
  }
  padding: 32px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TasksBox = styled.div`
  color: var(--blue-gray);
  font-size: 16px;
  font-weight: bold;
`;

export default TodoHead;