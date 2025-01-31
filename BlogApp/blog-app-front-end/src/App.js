import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePosts from './components/CreatePosts';
import ViewAll from './components/ViewAll';
import ViewMyPosts from './components/ViewMyPosts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/createposts' element={<CreatePosts/>} />
      <Route path='/viewall' element={<ViewAll/>} />
      <Route path='/myposts' element={<ViewMyPosts/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
