import { useState, useEffect } from 'react'
import useGetRequest from './useGetRequest';

const useHouses = () => {
  const [houses, setHouses] = useState([]);
//   const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
  const {get, loadingState} = useGetRequest("/api/houses");

  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };
      
    fetchHouses();
  }, [get]);  

  return { houses, setHouses, loadingState };
};

export default useHouses; 