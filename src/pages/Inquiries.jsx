import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


// COMPONENTS 
import Navbar from '../components/navbar'
import Loading from '../components/loading'

// STYLES
import '../assets/styles/inquiriesStyle.css'
import { Link } from 'react-router-dom';

export default function Inquiries() {

    const [inquiriesData, setinquiriesData] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // CURRENT PAGE INDEX HANDLER
    const itemsPerPage = 5; // SET THE MAXIMUM ITEMS CAN BE IN A PAGE

    useEffect(() => {
        async function getInquiries() {
        try {
            const data = await fetch('http://localhost:5176/api/inquiries', {
            headers: {
                Accept: 'application/json',
            },
            });
            const jsonData = await data.json();
            setinquiriesData(jsonData);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
        }

        getInquiries(); // FETCHING INQURIES DATA
    }, [inquiriesData]);

    console.log(inquiriesData); // TO CONFIRM & SEE THE INQUIRIES DATA IN CONSOLE


    // CALCULATE CURRENT PAGE DATA
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = inquiriesData.slice(indexOfFirstItem, indexOfLastItem);

    // HANDLE PAGE CHANGING
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };


    return (
        <>
            <div className="inquiries-container">
                <Navbar/>
                <div className='inquries-table-container'>
                    <div className="navHeader">
                        <h1>Inquries</h1>
                    </div>
                    <div className='inquiries-table-body'>
                        <div className='inquiries-table-label'>
                            <h2>Messege From</h2>
                            <h2>See Full Messege</h2>
                        </div>
                        <div>
                            <table>
                            <tbody>
                                {inquiriesData ? (
                                <>
                                    {currentItems.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>
                                                <Link
                                                to={`/inquiries/${user._id}`}
                                                >
                                                    <Button>See Messege</Button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </>
                                ) : (
                                    <tr>
                                        <td><Loading/></td>
                                    </tr>
                                )}
                            </tbody>
                            </table>
                        </div>
                        <div className="inquiries-pagination">
                            <Button 
                                onClick={handlePrevPage} 
                                disabled={currentPage === 1}
                            >
                                Previous
                            </Button>
                            <Button
                                onClick={handleNextPage}
                                disabled={indexOfLastItem >= inquiriesData.length}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
