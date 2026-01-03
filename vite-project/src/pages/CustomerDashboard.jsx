import { useEffect,useState } from "react";
import { getRestaurants } from "../utils/localStorage";

const CustomerDashboard =() => {}
    const [restaurants, setRestaurants]=useState([]);

    useEffect(() =>{
        setRestaurants(getRestaurants());
    },[]);
 
export default CustomerDashboard;