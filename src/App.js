import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lay from './Lay';
import Form from './Form';
import Sub from './Sub';
import Ajax from './ajax';
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route index element={<Lay/>}></Route>
        <Route element={<Form/>} path='/login'></Route>
        <Route element={<Sub/>} path='/sub'></Route>
<Route element={<Ajax/>} path='/data'></Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
