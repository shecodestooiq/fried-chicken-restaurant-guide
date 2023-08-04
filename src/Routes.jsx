import Chicken from './Chicken';
import Rest from './RestPage';
import { Routes, Route} from "react-router-dom";

function Routing() {

return(
    <Routes>
    <Route path="/" element={<Chicken />} />
    <Route path="/restaurants/:name"  element={<Rest />} />

  </Routes>
)
}

export default Routing;