import { useNavigate } from "react-router-dom";
import { getRestaurants } from "../utils/localStorage";
 
const RestaurantCard =({data,
    isAdmin}) => {
        const navigate = useNavigate();
         
        const handleDelete =() => {
            if(!confirm("Are you sure you want to delete?")) return;

        const updated=getRestaurants().filter(
            (r) => r.restuarnatID !== data.restaurantID
        );
        
        saveRestaurants(updated);
        alert("Restaurant deleted");
        window.location.reload();

        };

        return (
            <div style ={{ border: "1px solid gray", margin:10, padding:10}}
            >
                <img src={data.image}
                width="200"/>
                <h3>{data.retuarantName}</h3>
                <p>{data.address}</p>
                <p>Type:{data.type}</p>
                <p>Parking:{data.parkingLot ? "Yes" : "No"}</p>

                {isAdmin && (
                    <>
                    <button onClick={() =>
                     navigate("/admin/restaurants/update",{state:data})
                    }
                    >
                        Update
                    </button>
                    <button onClick={handleDelete}>Delete</button>

        
                    </>
                )}
            </div>
        );
    }
    export default RestaurantCard;