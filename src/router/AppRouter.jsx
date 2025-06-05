import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import TodoPage from '../pages/TodoPage';
import RegisterPage from '../pages/RegisterPage';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='todos' element={<TodoPage />} />

       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;