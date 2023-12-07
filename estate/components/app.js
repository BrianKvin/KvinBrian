import { useState } from 'react';
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();
  const setSelectedHouseWrapper = (house) => {
    //do checks on house
    setSelectedHouse(house);
  };

  return (
    <div>
      <Banner>Providing houses all over the world</Banner>
      {selectedHouse ? (
        <House house={selectedHouse} /> 
        ) : (
        <HouseList selectedHouse={setSelectedHouseWrapper} />
        )}
    </div>
  )
}

export default App;
