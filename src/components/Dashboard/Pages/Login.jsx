import loginphoto from "../../../assets/image/Dashboard/login/loginphoto.svg";
import { FaUser, FaLock} from 'react-icons/fa';
import { LuEyeClosed } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import { useState } from 'react';
import '../Dashboard.css'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {login} from '../../../redux/authSlice'

// BACKEND IMPORTS - DISABLED FOR STATIC LOGIN
// import Api from "../../../constant/api";
// import axios from "axios";

// Static credentials are visible in the built frontend; this is a visual gate only.
const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userName , setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading , setLoading]= useState(false);
    const [loginError, setLoginError] = useState("");



    const handleSubmit = async (e) =>{

        e.preventDefault();
        setLoading(true);
        setLoginError("");

        // BACKEND LOGIN KEPT FOR REFERENCE:
        // const response = await axios.post(Api.POST.LOGIN, { username: userName, password });
        // dispatch(login(response.data.data.token));

        if (userName === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            dispatch(login("static-admin-session"));
            navigate('/dashboard/home');
        } else {
            setLoginError("Incorrect username or password.");
        }
        setLoading(false);

    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="flex flex-col gap-14 md:flex-row  md:gap-32 container-login">
                <img src={loginphoto} className="max-w[700px] " />
                <div className="md:pt-40 flex flex-col mb-7 container-form">
                    <p className="text-center font-normal text-7xl text-[#241E1E] inter mb-12">Welcome</p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-10">
                            <label className="font-semibold text-2xl inter text-black">User Name</label>
                            <div className="relative">
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
                                    <FaUser /> 
                                </span>
                                <input
                                    type="text"
                                    className=" w-full border-0 border-b-2  pb-5 border-black mt-4 focus:outline-none focus:border-b-2 focus:border-[#8B5715] pl-8" 
                                    placeholder=" | demo@email.com | "
                                    value={userName}
                                    onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-2xl inter text-black">Password</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
                                    <FaLock /> 
                                </span>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="border-0 w-full border-b-2 border-black mt-4 pb-5 focus:outline-none focus:border-b-2 focus:border-[#8B5715] pl-8 "
                                    placeholder=" | ********* "
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <span
                                    className="absolute right-0  top-1/2 transform -translate-y-1/2 cursor-pointer  p-2"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <FaRegEye />: <LuEyeClosed />} 
                                </span>
                            </div>
                        </div>
                        {loginError && <p role="alert" className="text-red-600 mt-4">{loginError}</p>}
                        <button 
                            type="submit" 
                            className="w-full bg-[#8B5715] mt-9 rounded-3xl text-white py-6 px-28 inter font-extrabold text-2xl hover:bg-white hover:text-[#8B5715] hover:border hover:border-[#8B5715]" 
                            >{
                                loading?("Login..."):("login")
                            }</button>
                    </form>
                </div>
            </div>
        </>
    );
}
