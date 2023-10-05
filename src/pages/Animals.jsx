import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        setEditModal(false);
        setDeleteModal(true);
        openModal();
    };



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


    return (
        <div className="animals-container">
            <Navbar/>
            <div className='animals-table-container'>
                <div className="navHeader">
                    <h1>Animals</h1>
                </div>
                <div className="animals-table">
                    <Modal isOpen={modal} closeModal={closeModal}>
                    {
                    (() => {
                        if (addModal)
                            return (
                                <div>
                                    <h2>This is AddModal</h2>
                                </div>
                            )
                        if (deleteModal)
                            return (
                                <div>
                                    <h2>This is DeleteModal</h2>
                                </div>
                            )
                        else (editModal)
                            return (
                                <div>
                                    <h2>This is EditModal</h2>
                                </div>
                            )
                    })()
                    }
                    </Modal>
                <div className="animals-table-functions">
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
