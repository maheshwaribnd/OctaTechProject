import HomeIcon from "@mui/icons-material/Home";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import SearchComponent from "../components/search";
import { Link, useNavigate } from "react-router-dom";
import { Array } from "../Array/CourseArray";
import LogoutIcon from "@mui/icons-material/Logout";

const Courses = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [openModal, setOpenModal] = useState("");
  const [arcModal, setarcModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [addCourseModal, setAddCourseModal] = useState(false);

  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [price, setPrice] = useState("");

  const handleFilterChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearch(searchText);

    const filteredData = Array.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );

    setFilteredData(filteredData);
  };

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const addCourseFunction = () => {
    setAddCourseModal(false)
  }

  return (
    <div className="flex bg-White flex-row h-screen">
      <div className="flex flex-col h-auto border-2 justify-between border-green-600">
        <nav className="justify-center text-center items-center w-38 bg-Snowy_Mint flex-col ">
          <ul>
            <li className="justify-center items-center flex-col h-16 w-24 rounded-md bg-[#FEDFE1] m-2 mt-4 pt-3">
              <Link to="/Dashboard">
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

      <div className=" w-full h-full flex flex-wrap  bg-[#E5E7EB]">
        <h1 className="text-center text-3xl text-gray-500 font-semibold text-Black m-4">
          Courses
        </h1>
        <Link />

        <div className="m-4 w-full h-full">
          <div className="flex justify-between mb-2">
            <h4 className="text-center text-xl text-gray-500  text-Black">
              Course List
            </h4>

            <div className="flex items-center bg-gray-50 h-10 w-64 mb-1 pl-2 gap-2 border rounded-3xl">
              <SearchComponent search={search} onChange={handleFilterChange} />
            </div>
          </div>

          <Table striped bordered hover>
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
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0
                ? filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.instructor}</td>
                    <td>{item.instrument}</td>
                    <td>{item.dayofweek}</td>
                    <td>{item.noofstudents}</td>
                    <td>{item.price}</td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        onClick={() =>
                          item.status === "Active"
                            ? temp === 0
                              ? (setOpenModal(item.name),
                                setTemp(1),
                                setarcModal(""))
                              : (setOpenModal(""), setTemp(0))
                            : item.status === "Archived"
                              ? temp === 0
                                ? (setarcModal(item.name),
                                  setTemp(1),
                                  setOpenModal(""))
                                : (setarcModal(""), setTemp(0))
                              : null
                        }
                      >
                        {item.actionsofweek}
                      </button>
                      {openModal === item.name && (
                        <div className="absolute bg-gray-300 w-36 p-2">
                          <ul>
                            <li className="mb-1">Edit Course</li>
                            <li className="mb-1">Close Course</li>
                            <li className="mb-1">Archive Course</li>
                          </ul>
                        </div>
                      )}
                      {arcModal === item.name && (
                        <div className="absolute bg-gray-300 w-36 p-2">
                          <ul>
                            <li className="mb-1">Unarchive course</li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
                : Array.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.instructor}</td>
                    <td>{item.instrument}</td>
                    <td>{item.dayofweek}</td>
                    <td>{item.noofstudents}</td>
                    <td>{item.price}</td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        onClick={() =>
                          item.status === "Active"
                            ? temp === 0
                              ? (setOpenModal(item.name),
                                setTemp(1),
                                setarcModal(""))
                              : (setOpenModal(""), setTemp(0))
                            : item.status === "Archived"
                              ? temp === 0
                                ? (setarcModal(item.name),
                                  setTemp(1),
                                  setOpenModal(""))
                                : (setarcModal(""), setTemp(0))
                              : null
                        }
                      >
                        {item.actionsofweek}
                      </button>
                      {openModal === item.name && (
                        <div className="absolute bg-gray-300 w-36 p-2">
                          <ul>
                            <li className="mb-1">Edit Course</li>
                            <li className="mb-1">Close Course</li>
                            <li className="mb-1">Archive Course</li>
                          </ul>
                        </div>
                      )}
                      {arcModal === item.name && (
                        <div className="absolute bg-gray-300 w-36 p-2">
                          <ul>
                            <li className="mb-1">Unarchive course</li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <div className="relative mt-40">
            <button
              onClick={() => setAddCourseModal(true)}
              className="absolute bottom-0 right-0 bg-rose-300 px-10 py-3 rounded-xl"
            >
              Add Course
            </button>
          </div>
        </div>
      </div>

      {addCourseModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title">Add Course</h1>
              </div>

              <div className="m-4">
                <input
                  className=" border-spacing-1 p-2 w-full my-2"
                  type="text"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  placeholder="Course name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />

                <input
                  className=" border-spacing-1 p-2 w-full my-2"
                  type="text"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <input
                  className=" border-spacing-1 p-2 w-full my-2"
                  type="text"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  placeholder="Instructor"
                  value={instructor}
                  onChange={(e) => setInstructor(e.target.value)}
                />

                <select className="border-4 border-spacing-1 p-2 w-full my-2">
                  <option>Instrument</option>
                  <option value="1">Guitar</option>
                  <option value="2">Flute</option>
                  <option value="3">Piono</option>
                </select>

                <select className="border-4 border-spacing-1 p-2 w-full my-2">
                  <option>Day of the week</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <input
                  className=" border-spacing-1 p-2 w-full my-2"
                  type="text"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setAddCourseModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-secondary bg-rose-300"
                  onClick={() => addCourseFunction()}
                >
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
