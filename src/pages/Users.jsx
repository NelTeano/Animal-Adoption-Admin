import { useEffect, useState } from 'react';

// COMPONENTS
import Navbar from '../components/navbar';
import { Button, Image } from 'react-bootstrap';
import Loading from '../components/loading'

// STYLES
import '../assets/styles/usersStyle.css';


export default function Users() {
    const [usersData, setUsersData] = useState(''); // HANDLE STORE USERS DATA
    const [currentPage, setCurrentPage] = useState(1); // CURRENT PAGE INDEX HANDLER
    const itemsPerPage = 3; // SET THE MAXIMUM ITEMS CAN BE IN A PAGE

    useEffect(() => {
        async function getUsers() {
        try {
            const data = await fetch('http://localhost:5176/api/users', {
            headers: {
                Accept: 'application/json',
            },
            });
            const jsonData = await data.json();
            setUsersData(jsonData);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
        }

        getUsers(); // FETCHING USERS DATA
    }, [usersData]);

    console.log(usersData); // TO CONFIRM & SEE THE USERS DATA IN CONSOLE

    // CALCULATE CURRENT PAGE DATA
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

    // HANDLE PAGE CHANGING
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };


    return (
        <>
            <div className="users-container">
            <Navbar />
            <div className="users-table-container">
                <div className="navHeader">
                <h1>Users</h1>
                </div>
                <div className="users-table">
                <div className="users-table-functions">
                    <form>
                    <input type="text" placeholder="Search" className="searchBar" />
                    </form>
                    <Button className='addBTN' >ADD USER</Button>
                    <Button className='deleteBTN'>DELETE USER</Button>
                    <Button className='editBTN'>EDIT USER</Button>
                </div>
                <div className="users-table-body">
                    <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Picture</th>
                        <th>Address</th>
                        <th>Net Income</th>
                        <th>Is Qualified</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData ? (
                        <>
                            {currentItems.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <Image className='userIcon' src={user.picture}  />
                                    </td>
                                    <td>{user.address}</td>
                                    <td>{user.net_income}</td>
                                    <td>{String(user.isQualified)}</td>
                                    <td>{user.date}</td>
                                </tr>
                            ))}
                        </>
                        ) : (
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><Loading/></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
                <div className="users-pagination">
                    <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <Button
                        onClick={handleNextPage}
                        disabled={indexOfLastItem >= usersData.length}
                    >
                        Next
                    </Button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}