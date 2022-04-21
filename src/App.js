import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/home' element={<Home />} />
       <Route path='/user/add' element={<AddUser />}/>
       <Route path='/update/:id' element={<UpdateUser />}/>
     </Routes>
    </div>
  );
}

export default App;
