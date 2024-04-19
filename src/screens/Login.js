import { TextField } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {

    // const navigate = useNavigate();

    const [userData, setUserData] = useState({
        Username: "",
        Password: "",
    })

    const handleSignin = (e) => {
        e.preventDefault();
        // navigate("/dashboard")
    };

    return (

        <div className="flex bg-White sm:flex-row flex-col h-screen">

            <div className="sm:w-2/3 w-full h-screen mt-9 sm:mt-0  sm:flex sm:flex-wrap">
                <form className="flex flex-col justify-center items-center sm:ml-[30%] gap-4 sm:gap-5">
                    <h1 className="text-center sm:text-3xl text-xl font-semibold sm:pb-6 text-Black">
                        Sign In
                    </h1>
                    <TextField
                        id="outlined-basic"
                        type="text"
                        label="Username"
                        variant="outlined"
                        value={userData.Username}
                        onChange={(e) =>
                            setUserData({ ...userData, Username: e.target.value })
                        }
                        className="sm:w-96 border sm:p-2 border-Customgray rounded-2xl"
                    />

                    <TextField
                        id="outlined-basic"
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={userData.Password}
                        onChange={(e) =>
                            setUserData({ ...userData, Password: e.target.value })
                        }
                        className="sm:w-96 border sm:p-2 border-Customgray rounded-2xl"
                    />

                    <button
                        onClick={handleSignin}
                        disabled={
                            userData.Username == "" || userData.Password == "" ? true : false
                        }
                        className="sm:w-96 w-[70%] sm:h-14 text-White disabled:bg-Customgray bg-Customblue p-2 sm:rounded-lg focus:outline-none"
                    >
                        LogIn
                    </button>


                </form>
            </div>
        </div>

        // <Form className="w-96" border>
        //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" placeholder="enter email" />
        //     </Form.Group>
        //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" placeholder="enter password" />
        //     </Form.Group>
        // </Form>
    )
}


export default Login
