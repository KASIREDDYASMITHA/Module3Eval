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
        <div>
            <h2>Customer Dshboard</h2>
            {restaurants.map((r) => (
                <div key ={r.restaurantID}>
                    <h4>{r.restaurantNmae}</h4>
                    <p>{r.address}</p>
                    </div>
            ))}
       
    );
};

export default CustomerDashboard;