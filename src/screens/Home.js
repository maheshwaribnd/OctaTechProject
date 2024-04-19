import HomeIcon from '@mui/icons-material/Home';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Home = () => {
  return (
    <div>

      <div className="flex bg-White sm:flex-row flex-col h-screen">
        <div className="justify-center text-center items-center w-48 h-screen border-2 border-green-600  bg-Snowy_Mint flex-col ">
          <div className='justify-center items-center flex-col h-16 w-24 rounded-md bg-[#FEDFE1]'><HomeIcon />Home</div>

          <div className='justify-center items-center h-16 w-24 rounded-md bg-[#E5E7EB]'><QueueMusicIcon /> Courses</div>
        </div>
        <div className=" w-full h-screen mt-9 sm:mt-0  sm:flex sm:flex-wrap  bg-[#E5E7EB] flex">
          <h1 className="text-center sm:text-3xl text-xl font-semibold sm:pb-6 text-Black">
            Overview
          </h1>


          <div className="justify-center text-center items-center flex ">

            <Card style={{ width: '16rem', height: '7rem', margin: '1rem' }}>
              <Card.Body className='justify-center items-center flex-row h-16 w-24 rounded-md bg-white'>
                <Card.Text>
                  164
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '16rem', height: '7rem', margin: '1rem' }}>
              <Card.Body className='justify-center items-center flex-row h-16 w-24 rounded-md bg-white'>
                <Card.Text>
                  12
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '16rem', height: '7rem', margin: '1rem' }}>
              <Card.Body className='justify-center items-center flex-row h-16 w-24 rounded-md bg-white'>
                <Card.Text>
                  $2000
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '16rem', height: '7rem', margin: '1rem' }}>
              <Card.Body className='justify-center items-center flex-row h-16 w-24 rounded-md bg-white'>
                <Card.Text>
                  Guitar
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '16rem', height: '7rem', margin: '1rem' }}>
              <Card.Body className='justify-center items-center flex-row h-16 w-24 rounded-md bg-white'>
                <Card.Text>
                  Flute
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

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
              <td>Column</td>
              <td>Column</td>
              <td>Column</td>
              <td>Column</td>
              <td>Column</td>
            </tbody>
          </Table>

        </div>
      </div>
    </div>

  )
}

export default Home
