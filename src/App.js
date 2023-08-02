import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { Listwrapper } from "./components/Listwrapper";
import { Info } from "./components/info-of-restaurants..jsx";
import { Routes } from "react-router-dom";
import ResturantPage from "./components/ResturantPage";
function App() {
  return (
   <BrowserRouter>
      <div>
        {/* <Listwrapper>
          <Info />
        </Listwrapper> */}
        <Routes>
                <Route path="/" element={<Listwrapper ><Info/></Listwrapper>}></Route>
                <Route path="/ResturantPage" element={<ResturantPage></ResturantPage>}></Route>
              </Routes>
      </div></BrowserRouter>
  );
}

export default App;
