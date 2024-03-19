import React, {useState} from "react";
import data from "./data"
import Tours from "./components/Tours"

const App = () => {

  const [tours,setTours] = useState(data);  // tours object ke andar, 7 cities ka data pada hai.

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);  // tours object ke andar jin jin ki id not-interested vali id ke equal nahi hai, that will be added in newTours object, which will be re-rendered in setTours.
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left!</h2>
        <button className="btn-white" onClick={() => setTours(data)}>   {/* UI pe phirse pura data dikha dena.*/}
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
