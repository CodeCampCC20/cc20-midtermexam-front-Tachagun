import React from 'react';
import { useState } from 'react';
import TodoLists from '../components/todoLists';
import { useNavigate } from 'react-router-dom';

function TodoPage() {
  const navigate = useNavigate()
 


  return (
    <div className='mt-25 rounded bg-gray-950 flex flex-col m-auto max-w-150  w-2/3 p-5'>
      <h1 className='text-4xl font-bold mb-5'>My Todo</h1>
      <TodoLists />
      <button className='btn w-1/10 font-bold text-3xl' onClick={()=>navigate('/login')}>☠</button>
    </div>
  );
}

export default TodoPage;