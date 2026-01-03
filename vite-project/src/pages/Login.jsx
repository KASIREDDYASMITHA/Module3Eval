import { useContext,useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const{ login }=useContext(AuthContext);
    const navigate= useNavigate();

    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");

    const handleLogin =()=>{
        const role = login(email,password);
        if(!role){
            alert("Invaild credentials");
        }
        else{
            navigate(
                role === "admin"?"/admin/dashboard" : "/customer/dashboard"
            );
        }

    };
    return(
        <div>
            <h2>
                Login
            </h2>
            <input placeholder="Email" onChange={(e) =>
                setEmail(e.target.value)}
            />
            <br/>
             <input  type="password" placeholder="Password" onChange={(e) =>
                setPassword(e.target.value)}
            />
            <br/>
            <button onClick={handleLogin}>Login</button>

        </div>
    );


};
export default Login;