import { useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const AdminDasboard=() =>{
    const [restaurants, setRestaurants]=useState([]);

    const [from ,setForm] =useState({
        restaurantName:"",
        address:"",
        type:"",
        parkingLot:"",
        image:"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

    });

    useEffect(() =>{
        setRestaurants(getRestaurants());
    },[]);
    const addRestaurant=() =>{
        if(!Form.restaurantName || form.address || !form.type){
            alert("Fill all files");
            return;
        }
       const newRes={
        ...form,
        restaurantID:Date.now(),
        parkingLot:from.parkingLot === "true",
       };
       const updated=[...restaurants,newRes];
       saveRestaurants(updated);
       setRestaurants(updated);
       alert("Restaurant Added");
       
    }
}