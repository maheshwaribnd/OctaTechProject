import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    Username: "",
    Password: "",
  })

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      navigate("/dashboard")
    }
  }, []);


  const handleSignin = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    localStorage.setItem('user', JSON.stringify(userData));
    navigate("/dashboard")
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#E5E7EB] p-8 rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-semibold mb-8">Sign In</h1>
        <form className="flex flex-col gap-4">
          <TextField
            id="outlined-basic"
            type="text"
            label="Username"
            variant="outlined"
            value={userData.Username}
            onChange={(e) =>
              setUserData({ ...userData, Username: e.target.value })
            }
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
          />
          <Button
            onClick={handleSignin}
            disabled={userData.Username === "" || userData.Password === ""}
            variant="contained"
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
