import HomeIcon from "@mui/icons-material/Home";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Card from "react-bootstrap/Card";
import GroupIcon from '@mui/icons-material/Group';
import Table from "react-bootstrap/Table";

const Home = () => {
  return (
    <div className="flex bg-White sm:flex-row flex-col h-auto">
      <div className="justify-center text-center items-center w-38 border-2 border-green-600  bg-Snowy_Mint flex-col ">
        <div className="justify-center items-center flex-col h-16 w-24 rounded-md bg-[#FEDFE1] m-2 mt-4">
          <HomeIcon />
          Home
        </div>

        <div className="justify-center items-center h-16 w-24 rounded-md bg-[#E5E7EB]  m-2 mt-2">
          <QueueMusicIcon /> Courses
        </div>
      </div>
      <div className=" w-full h-full sm:mt-0  sm:flex sm:flex-wrap  bg-[#E5E7EB] flex">
        <h1 className="text-center sm:text-3xl text-xl font-semibold text-Black m-6">
          Overview
        </h1>

        <div className="justify-center text-center items-center flex ml-2 ">
          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w- rounded-md bg-white">
              <div>
                <GroupIcon />
              </div>
              <div>
                <Card.Text className="">164</Card.Text>
                <p>Total number of students</p>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w-24 rounded-md bg-white">
              <Card.Text><GroupIcon />12</Card.Text>
              <p>Total number of courses</p>

            </Card.Body>
          </Card>

          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w-24 rounded-md bg-white">
              <Card.Text><GroupIcon />$2000</Card.Text>
              <p>Total amount earned</p>

            </Card.Body>
          </Card>

          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w-24 rounded-md bg-white">
              <Card.Text><GroupIcon />Guitar</Card.Text>
              <p>Best performing course</p>

            </Card.Body>
          </Card>

          <Card style={{ width: "13rem", height: "6rem", margin: "1rem" }}>
            <Card.Body className="justify-center items-center flex-row h-16 w-24 rounded-md bg-white">
              <Card.Text><GroupIcon />Flute</Card.Text>
              <p>Best performing course</p>
            </Card.Body>
          </Card>
        </div>

        <div className="m-4 w-full">
          <h1 className="mb-4">LATEST ENROLMENTS</h1>

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
