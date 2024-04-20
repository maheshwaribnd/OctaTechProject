import HomeIcon from "@mui/icons-material/Home";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Card from "react-bootstrap/Card";
import GroupIcon from "@mui/icons-material/Group";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { EnrollListArray } from "../Array/studentListArray";

const Home = () => {
  const navigate = useNavigate();
  console.log("1212", EnrollListArray);
  const isAuthenticated = !!localStorage.getItem("user");

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    //   <Route
    //   {...rest}
    //   render={(props) =>
    //     isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    //   }
    // />
    <div className="flex bg-White sm:flex-row flex-col h-auto">
      <div className="flex flex-col h-auto border-2 justify-between border-green-600">
        <nav className="justify-center h-auto text-center items-center w-38 bg-Snowy_Mint flex-col ">
          <ul>
            <li className="justify-center items-center flex-col h-16 w-24 rounded-md bg-[#FEDFE1] m-2 mt-4 pt-3">
              <Link to="/Dashboard" className="">
                <HomeIcon />
                Home
              </Link>
            </li>

            <li className="justify-center items-center h-16 w-24 rounded-md bg-[#E5E7EB]  m-2 mt-2 pt-3">
              <Link to="/courses">
                <QueueMusicIcon />
                Courses
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={Logout}>
          <LogoutIcon />
          Logout
        </button>
      </div>

      <div className=" w-full h-full sm:mt-0  sm:flex sm:flex-wrap  bg-[#E5E7EB] flex">
        <h1 className="text-center sm:text-3xl text-xl font-semibold text-Black m-6">
          Overview
        </h1>

        <div className="justify-center text-center items-center flex ml-2 ">
          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w- rounded-md bg-white flex gap-2">
              <div className="bg-slate-500 p-1 rounded-3xl">
                <GroupIcon />
              </div>
              <div>
                <Card.Text className="flex text-xl">164</Card.Text>
                <p className="text-xs">Total number of students</p>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w- rounded-md bg-white flex gap-2">
              <div className="bg-slate-500 p-1 rounded-3xl">
                <GroupIcon />
              </div>
              <div>
                <Card.Text className="flex text-xl">12</Card.Text>
                <p className="text-xs">Total number of courses</p>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w- rounded-md bg-white flex gap-2">
              <div className="bg-slate-500 p-1 rounded-3xl">
                <GroupIcon />
              </div>
              <div>
                <Card.Text className="flex text-xl">$2000</Card.Text>
                <p className="text-xs">Total amount earned</p>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w- rounded-md bg-white flex gap-2">
              <div className="bg-slate-500 p-1 rounded-3xl">
                <GroupIcon />
              </div>
              <div>
                <Card.Text className="flex text-xl">Guiter</Card.Text>
                <p className="text-xs">best performing courses</p>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w- rounded-md bg-white flex gap-2">
              <div className="bg-slate-500 p-1 rounded-3xl">
                <GroupIcon />
              </div>
              <div>
                <Card.Text className="flex text-xl">Flute</Card.Text>
                <p className="text-xs">worst performing course</p>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="m-4 w-full">
          <h1 className="mb-4">LATEST ENROLMENTS</h1>

          <Table striped bordered hover>
            <thead>
              <th>Enr. No</th>
              <th>S.Name</th>
              <th>C.Name</th>
              <th>Fees</th>
              <th>Enr.Date</th>
            </thead>

            <tbody>
              {EnrollListArray.map((item, index) => (
                <tr key={index}>
                  <td>{item.EnrNo}</td>
                  <td>{item.SName}</td>
                  <td>{item.CName}</td>
                  <td>{item.Fees}</td>
                  <td>{item.EnrDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="m-4 w-full">
          <h1 className="mb-4">BEST STUDENTS</h1>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Enr. No</th>
                <th>S.Name</th>
                <th>C.Name</th>
                <th>Fees</th>
                <th>Enr.Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
