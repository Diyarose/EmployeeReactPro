import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import ViewEmployee from './components/ViewEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddEmployee/>}/>
      <Route path='/search' element={<SearchEmployee/>}/>
      <Route path='/delete' element={<DeleteEmployee/>}/>
      <Route path='/view' element={<ViewEmployee/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
