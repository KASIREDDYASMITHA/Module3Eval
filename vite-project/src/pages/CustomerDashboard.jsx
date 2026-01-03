import { useEffect,useState } from "react";
import { getRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const CustomerDashboard =() => {
    const [restaurants, setRestaurants]=useState([]);

    useEffect(() =>{
        setRestaurants(getRestaurants());
    },[]);
    return (

    )
}

export default CustomerDashboard;