import CardList from './CardList';
import testData from './testData';
import Form from "./Form";
import { useState, useEffect } from 'react';
import "./index.css";

const App = () => {
  const [newProfile, setNewProfile] = useState(testData);

  useEffect(() => {
    console.log("Component mounted")
  }, []);
  
  const addProfile = (addNewProfile) => {
    setNewProfile([...newProfile, addNewProfile]);
  };

  return (
    <div>
      <Form addProfile={addProfile} />
      <CardList testData={newProfile} />
    </div>
  )
}

export default App
