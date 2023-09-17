import {  Route,  Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Ratings from './component/Ratings';
import ResPage from './component/ResPage';
import './App.css'
function App() {
 
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Ratings/>}/>
        <Route path='/ResPage' element={<ResPage/>} />
      </Routes>
      
   </div>
  )
}
export default App;