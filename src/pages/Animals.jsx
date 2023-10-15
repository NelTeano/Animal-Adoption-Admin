import { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';

// COMPONENTS 
import Navbar from '../components/navbar';
import { Button, Image } from 'react-bootstrap';
import Loading from '../components/loading';
import Modal from '../components/modal'


// STYLES
import '../assets/styles/animalsStyle.css'


export default function Animals() {

    const [animalsData, setAnimalsData] = useState(''); // HANDLE ANIMALS DATA

    const [modal, setmodal] = useState(false); // TO BE ABLE CLOSE AND OPEN THE MODAL
    
    // HANDLE WHAT MODAL WILL SHOW IN WINDOW
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [editAnimal, setEditAnimal] = useState(''); // GET THE NAME OF THE ANIMAL YOU WANT TO EDIT
    const [alreadychoose, setAlreadyChoose] = useState(false); // SHOW THE FORM IF THERES USERNAME VALUE SUBMITTED

    const [currentPage, setCurrentPage] = useState(1); // CURRENT PAGE INDEX HANDLER
    const itemsPerPage = 3; // SET THE MAXIMUM ITEMS CAN BE IN A PAGE
    
    useEffect(() => {
        async function getanimals() {
        try {
            const data = await fetch('http://localhost:5176/api/animals', {
            headers: {
                Accept: 'application/json',
            },
            });
            const jsonData = await data.json();
            setAnimalsData(jsonData);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
        }

        getanimals(); // FETCHING animals DATA
    }, []);

    console.log(animalsData);


    // CALCULATE CURRENT PAGE DATA
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = animalsData.slice(indexOfFirstItem, indexOfLastItem);

    // PAGE FUNCTIONS SECTION
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
        setEditAnimal('');
    }


    // ANIMAL PICTURE STYLE
    const animalsPageStyles = {
        animaImage: {
            widht: '130px',
            height: '130px',
            border: 'solid rgb(173, 167, 255) 1px',
            borderRadius: '40px'
        },
        detailsButton:{
            color: 'white',
            backgroundColor: 'rgb(173, 167, 255)',
            border: 'solid 1px rgb(173, 167, 255)',
            borderRadius: '10px',
            padding: '10px',
            cursor: 'pointer'
            
        }
    }

    const AnimalTypes = [
        'Dog',
        'Cats',
        'Reptiles',
        'Birds',
        'Exotic Animals',
    ];


    return (
        <div className="animals-container">
            <Navbar/>
            <div className='animals-table-container'>
                <div className="navHeader">
                    <h1>Animals</h1>
                </div>
                <div className="animals-table">
                    <Modal isOpen={modal} closeModal={closeModal}>
                        <div className='modalForm'>
                    {
                    (() => {
                        if (addModal)
                            return (
                                <div>
                                    <h2>ADD ANIMAL</h2><br/>
                                    <form>
                                        <div>
                                            <label htmlFor="">Name:</label>
                                            <input />
                                            <label htmlFor="">Breed:</label>
                                            <input />
                                        </div>
                                        <div>
                                            <label htmlFor="">Location:</label>
                                            <input />
                                            <label htmlFor="">Owner</label>
                                            <input />
                                        </div>
                                        <div>
                                            <label htmlFor="">Animal Picture : </label>
                                            <input type='file' />
                                            <select 
                                                name="animal_type"
                                                width={'300px'}
                                                required 
                                                >
                                                <option value="">Select Animal Type</option>
                                                {AnimalTypes.map((range) => (
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
                                    <h2>REMOVE ANIMAL</h2><br/>
                                    <form>
                                        <div>
                                            <label htmlFor="">Name :</label>
                                            <input />
                                            <label htmlFor="">Owner :</label>
                                            <input />
                                        </div>                           
                                    </form>
                                    <Button>DELETE</Button>
                                </div>
                            )
                        else (editModal)
                            return (
                                <div>
                                    <h2>EDIT ANIMAL</h2><br/>
                                    {alreadychoose ? (
                                        <>
                                            <form>
                                                <div>
                                                    <label htmlFor="">Name:</label>
                                                    <input />
                                                    <label htmlFor="">Breed:</label>
                                                    <input />
                                                </div>
                                                <div>
                                                    <label htmlFor="">Location:</label>
                                                    <input />
                                                    <label htmlFor="">Owner</label>
                                                    <input />
                                                </div>
                                                <div>
                                                    <label htmlFor="">Animal Picture : </label>
                                                    <input type='file' />
                                                    <select 
                                                        name="net_income"
                                                        width={'300px'}
                                                        required 
                                                        >
                                                        <option value="">Select Animal Type</option>
                                                        {AnimalTypes.map((range) => (
                                                            <option key={range} value={range}>
                                                                {range}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>   
                                                <div>
                                                    <h2>Set Animal to Adopted :</h2><br/>
                                                    <label htmlFor="">Adopted ?:</label>
                                                    <input style={{height: '30px', width: '30px'}} type='checkbox'/>
                                                    <label htmlFor="">New Owner :</label>
                                                    <input />
                                                </div>               
                                            </form>
                                            <Button onClick={resetEditValues}>Save Changes</Button>
                                        </>
                                ):(
                                <>
                                    <label htmlFor="">Name of the Animal you want to edit :</label>
                                    <input 
                                        placeholder='Animal Name'
                                        value={editAnimal}
                                        onChange={(e) => setEditAnimal(e.target.value)}
                                    ></input>
                                    <Button onClick={showEditForm}>PROCEED</Button>
                                </>
                                )}
                                </div>
                            )
                    })()
                    }
                    </div></Modal>
                <div className="animals-table-functions">
                    <form>
                    <input type="text" placeholder="Search" className="searchBar" />
                    </form>
                    <Button 
                        className='addBTN' 
                        onClick={openAddModal}>
                        ADD ANIMAL
                    </Button>

                    <Button 
                        className='deleteBTN' 
                        onClick={openDeleteModal}>
                        DELETE ANIMAL
                    </Button>

                    <Button 
                        className='editBTN' 
                        onClick={openEditModal}>
                        EDIT ANIMAL
                    </Button>
                </div>
                <div className="animals-table-body">
                    <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Animal Type</th>
                            <th>isAdopted</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animalsData ? (
                        <>
                            {currentItems.map((animal) => (
                                <tr key={animal._id}>
                                    <td><Image style={animalsPageStyles.animaImage} src={animal.animal_image} /></td>
                                    <td>{animal.name}</td>
                                    <td>{animal.animal_type}</td>
                                    <td>{animal.isAdopted ? <p>✓</p> : <p>✕</p>}</td>
                                    <td>
                                        <Link to={`/animals/${animal._id}`}>
                                            <Button style={animalsPageStyles.detailsButton}>See Animal</Button>
                                        </Link>
                                    </td>
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
                <div className="animals-pagination">
                    <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <Button
                        onClick={handleNextPage}
                        disabled={indexOfLastItem >= animalsData.length}
                    >
                        Next
                    </Button>
                </div>
                </div>
            </div>
        </div>
    )
}
