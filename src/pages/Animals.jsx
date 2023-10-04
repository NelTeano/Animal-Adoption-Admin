import { useEffect, useState } from 'react';

// COMPONENTS 
import Navbar from '../components/navbar'
import { Button, Image } from 'react-bootstrap';
import Loading from '../components/loading'

// STYLES
import '../assets/styles/animalsStyle.css'


export default function Animals() {

    const [animalsData, setAnimalsData] = useState('');
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

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
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
                <div className="animals-table-functions">
                    <form>
                    <input type="text" placeholder="Search" className="searchBar" />
                    </form>
                    <Button className='addBTN' >ADD USER</Button>
                    <Button className='deleteBTN'>DELETE USER</Button>
                    <Button className='editBTN'>EDIT USER</Button>
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
                                    <td><Button style={animalsPageStyles.detailsButton}>See Animal</Button></td>
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
