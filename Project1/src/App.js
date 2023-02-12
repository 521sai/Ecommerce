import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
     <Home/> 
      <Routes>
        <Route path='/' element={Home}></Route>
        <Route path='/product' element={
          <div className='col-12 text-center'>
            <h1>Product</h1>
          </div>}></Route>
      </Routes>

    </>
  );
}

export default App;
