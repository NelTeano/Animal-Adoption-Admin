import { useEffect, useState } from 'react';

// COMPONENTS
import Navbar from '../components/navbar';
import { Button, Image } from 'react-bootstrap';
import Loading from '../components/loading'
import Modal from '../components/modal'

// STYLES
import '../assets/styles/usersStyle.css';

export default function Users() {

    const [usersData, setUsersData] = useState(''); // HANDLE STORE USERS DATA

    const [modal, setmodal] = useState(false); // TO BE ABLE CLOSE AND OPEN THE MODAL


    // HANDLE WHAT MODAL WILL SHOW IN WINDOW
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);


    const [editUser, setEditUser] = useState(''); // GET THE NAME OF THE USER YOU WANT TO EDIT
    const [alreadychoose, setAlreadyChoose] = useState(false); // SHOW THE FORM IF THERES USERNAME VALUE SUBMITTED


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

    // PAGE FUNCTIONS SECTION

    // HANDLE PAGE CHANGING
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const openModal = () => { // OPEN  MODAL
        setmodal(true);
    };

    const closeModal = () => { // CLOSE  MODAL
        setmodal(false);
        resetEditValues();
    };

    const openAddModal = () =>{ // OPEN ADD ANIMAL MODAL
        setEditModal(false);
        setDeleteModal(false);
        setAddModal(true);
        openModal();
    };

    const openDeleteModal = () =>{  // OPEN DELETE ANIMAL MODAL
        setAddModal(false);
        setEditModal(false);
        setDeleteModal(true);
        openModal();
    };

    const openEditModal = () =>{    // OPEN EDIT ANIMAL MODAL
        setAddModal(false);
        setEditModal(true);
        setDeleteModal(false);
        openModal();
    };

    const showEditForm = () => {
        setAlreadyChoose(true); // SHOW THE EDIT USER FORM AFTER SUBMIT THE NAME
    }

    const resetEditValues = () => { // HIDE THE MODAL AND RESET THE USERNAME TO ABLE SET ANOTHER AGAIN
        setAlreadyChoose(false);
        setmodal(false);
        setEditUser('');
    }


    const netIncomeRanges = [
        'Less than ₱25,000',
        '₱25,000 - ₱50,000',
        '₱50,000 - ₱75,000',
        '₱75,000 - ₱100,000',
        'More than ₱100,000',
    ];

    return (
        <>
            <div className="users-container">
            <Navbar />
            <div className="users-table-container">
                <div className="navHeader">
                <h1>Users</h1>
                </div>
                <div className="users-table">
                    <Modal isOpen={modal} closeModal={closeModal}>
                    <div className='modalForm'>
                        {
                        (() => {
                            if (addModal)
                                return (
                                    <div>
                                    <h2>ADD USER</h2><br/>
                                    <form>
                                        <div>
                                            <label htmlFor="">Name :</label>
                                            <input />
                                            <label htmlFor="">Email:</label>
                                            <input />
                                        </div>
                                        <div>
                                            <label htmlFor="">Qualified :</label>
                                            <input style={{height: '30px', width: '30px'}} type='checkbox'/>
                                            <label htmlFor="">Address :</label>
                                            <input />
                                        </div> 
                                        <div>
                                            <label htmlFor="">User Picture : </label>
                                            <input type='file' />
                                            <select 
                                                name="net_income"
                                                width={'300px'}
                                                required 
                                                >
                                                <option value="">Net Income</option>
                                                {netIncomeRanges.map((range) => (
                                                    <option key={range} value={range}>
                                                        {range}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>  
                                    </form>
                                    <Button>ADD</Button>
                                </div>
                                )
                            if (deleteModal)
                                return (
                                    <div>
                                    <h2>REMOVE USER</h2><br/>
                                    <form>
                                        <div>
                                            <label htmlFor="">Name :</label>
                                            <input />
                                            <label htmlFor="">Email :</label>
                                            <input />
                                        </div>                           
                                    </form>
                                    <Button>DELETE</Button>
                                </div>
                                )
                            else (editModal)
                                return (
                                <div>
                                    
                                    <h2>EDIT USER</h2><br/>
                                    {alreadychoose ? (
                                        <>
                                    <form>
                                            <div>
                                                <label htmlFor="">Name :</label>
                                                <input />
                                                <label htmlFor="">Email:</label>
                                                <input />
                                            </div>
                                            <div>
                                                <label htmlFor="">Qualified :</label>
                                                <input style={{height: '30px', width: '30px'}} type='checkbox'/>
                                                <label htmlFor="">Address :</label>
                                                <input />
                                            </div> 
                                            <div>
                                                <label htmlFor="">User Picture : </label>
                                                <input type='file' />
                                                <select 
                                                    name="net_income"
                                                    width={'300px'}
                                                    required 
                                                    >
                                                    <option value="">Net Income</option>
                                                    {netIncomeRanges.map((range) => (
                                                        <option key={range} value={range}>
                                                            {range}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>  
                                        </form>
                                        <Button onClick={resetEditValues}>Save Changes</Button>
                                    </>
                                    ) : (
                                        <>
                                            <label htmlFor="">Name of the User you want to edit :</label>
                                            <input 
                                                placeholder='User Name'
                                                value={editUser}
                                                onChange={(e) => setEditUser(e.target.value)}
                                            ></input>
                                            <Button onClick={showEditForm}>PROCEED</Button>
                                        </>
                                    )
                                    }
                                </div>
                                )
                        })()
                        }
                        </div>
                        </Modal>
                <div className="users-table-functions">
                    <form>
                    <input type="text" placeholder="Search" className="searchBar" />
                    </form>
                    <Button 
                        className='addBTN' 
                        onClick={openAddModal}>
                        ADD USER 
                    </Button>

                    <Button 
                        className='deleteBTN' 
                        onClick={openDeleteModal}>
                        DELETE USER
                    </Button>

                    <Button 
                        className='editBTN' 
                        onClick={openEditModal}>
                        EDIT USER
                    </Button>
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
                                    <td>{user.isQualified ? <p>✓</p> : <p>✕</p>}</td>
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