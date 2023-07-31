import "./App.css";
import Resturant from "./components/Resturant";
import ResturantPage from "./components/ResturantPage";

function App() {
  const currentUrl = window.location.href;

  return (
    <div className="App">
      {currentUrl === "http://localhost:3007/" ? (
        <>
          <h1>Fried Chicken Guide Web App</h1>
          <ResturantPage />
        </>
      ) : (
        <div className="dummy-resturant">
          <div className="title-loc">
            <center>
              <div>
                <h1>Meal king</h1>
                <h3>location</h3>
              </div>
            </center>
          </div>
          <div className="details">
            <center>
              <h1>details</h1>
            </center>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
