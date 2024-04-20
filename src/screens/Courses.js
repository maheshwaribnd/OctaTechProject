import HomeIcon from "@mui/icons-material/Home";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Card from "react-bootstrap/Card";
import GroupIcon from '@mui/icons-material/Group';
import Table from "react-bootstrap/Table";
import { useState } from "react";
import SearchComponent from "../components/search";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "bootstrap";

const Courses = () => {

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([])


  const data = [
    {
      name: 'Classical Guitar',
      description: 'Guitar classes for...',
      instructor: 'Ms. Jane Doe',
      instrument: 'Guitar',
      dayofweek: 'Wednesday',
      noofstudents: 26,
      price: '$60',
      status: 'Active',
      actionsofweek: <MoreVertIcon />
    },
  ];

  const handleFilterChange = (e) => {
    const value = e.target.value || '';
    setSearch(value);

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredData(filteredData);
  };


  return (
    <div className="flex bg-White flex-row h-full">
      <div className="justify-center h-auto text-center items-center w-38 border-2 border-green-600  bg-Snowy_Mint flex-col ">
        <div className="justify-center items-center flex-col h-16 w-24 rounded-md bg-[#FEDFE1] m-2 mt-4">
          <HomeIcon />
          Home
        </div>

        <div className="justify-center items-center h-16 w-24 rounded-md bg-[#E5E7EB]  m-2 mt-2">
          <QueueMusicIcon /> Courses
        </div>
      </div>
      <div className=" w-full h-full flex flex-wrap  bg-[#E5E7EB]">
        <h1 className="text-center text-3xl text-gray-500 font-semibold text-Black m-4">
          Courses
        </h1>

        <div className="m-4 w-full h-full">
          <div className="flex justify-between mb-2">
            <h4 className="text-center text-2xl text-gray-500 font-semibold text-Black">
              Courses
            </h4>

            <div className="flex items-center bg-gray-50 h-10 w-64 mb-1 pl-2 gap-2 border rounded-3xl" >
              <SearchComponent search={search} onChange={handleFilterChange} />
            </div>
          </div>

          <Table striped bordered hover>

            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))
            ) : (
              data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))
            )}

            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Instructor</th>
                <th>Instrument</th>
                <th>Day of Week</th>
                <th>No of Students</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions of Week</th>
                {/* <th>Name</th>
                <th>Description</th>
                <th>Instuctor</th>
                <th>Instrument</th>
                <th>Day of week</th>
                <th># of Students</th>
                <th>Price</th>
                <th>Status</th>
                <th className="justify-center items-center">Actions of week</th> */}
              </tr>
            </thead>
            <tbody>

              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.instructor}</td>
                    <td>{item.instrument}</td>
                    <td>{item.dayofweek}</td>
                    <td>{item.noofstudents}</td>
                    <td>{item.price}</td>
                    <td>{item.status}</td>
                    <td>{item.actionsofweek}</td>
                  </tr>
                ))
              ) : (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.instructor}</td>
                    <td>{item.instrument}</td>
                    <td>{item.dayofweek}</td>
                    <td>{item.noofstudents}</td>
                    <td>{item.price}</td>
                    <td>{item.status}</td>
                    <td>{item.actionsofweek}</td>
                  </tr>
                ))
              )}
              {/* <tr>
                <td>Classical Guitar</td>
                <td>Guitar classes for ...</td>
                <td>Ms.Jane Doe</td>
                <td>Guitar</td>
                <td>Wednesday</td>
                <td>26</td>
                <td>$60</td>
                <td>
                  <Button
                    variant="contained"
                    className="bg-green-500 text-white hover:bg-green-400"
                  >
                    Active
                  </Button>
                </td>
                <td><MoreVertIcon /></td>
              </tr> */}
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td><MoreVertIcon /></td>

              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td><MoreVertIcon /></td>

              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td><MoreVertIcon /></td>

              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td><MoreVertIcon /></td>

              </tr>
              <tr>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td>Column</td>
                <td className="justify-center"><MoreVertIcon /></td>

              </tr>
            </tbody>
          </Table>
        </div>


      </div>
    </div>
  );
};

export default Courses;
