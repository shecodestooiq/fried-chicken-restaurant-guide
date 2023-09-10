import Restaurants from './Components/Resturants'
import './App.css';
import DetailsPage from './Components/DetailsPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return <div>
    <Routes>
    <Route path="/" element={   <Restaurants />} />
      <Route path="/DetailsPage" element={<DetailsPage />}></Route>
    </Routes>
 
  </div>
}

export default App;