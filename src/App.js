import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostsList from './posts/PostsList';
import PostDetails from './posts/PostsDetails';


const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" Component={PostsList} />
        <Route path="/post/:id" Component={PostDetails} />
      </Routes>
    </div>
  );
};

export default App;