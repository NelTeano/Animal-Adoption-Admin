import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENTS 
import Navbar from '../components/navbar';

// STYLES
import '../assets/styles/MessegeStyle.css'

export default function InquiriesMessege() {

    const [messegeData, setMessegeData] = useState('')
    const getMessegeId = useParams()

    useEffect(() => {
        async function getMessege() {
            try {
                const data = await fetch(`http://localhost:5176/api/inquiries/${getMessegeId.id}`, {
                headers: {
                    Accept: 'application/json',
                },
                });
                const jsonData = await data.json();
                setMessegeData(jsonData);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        }

        getMessege(); // FETCHING INQURIES DATA
    }, [getMessegeId]);

    console.log(messegeData)




    return (
        
        <>
            <div className='messege-container'>
                <Navbar/>
                <div className='messege-body'>
                    <div className="navHeader">
                        <h1>Inquiries Messege</h1>
                    </div>
                    {messegeData &&
                    <div className='messege-content'>
                        <div className='messege-content-body'>
                            <div className='messege-content-header'>
                                <h3>Name : {messegeData.name}</h3>
                                <h3>Email : {messegeData.email}</h3>
                                <h3>Phone : {messegeData.phone}</h3>
                                <h3>Date :</h3>
                            </div>
                            <div className='messege-content-info'>
                                <h3>Messege : </h3>
                                <textarea value={messegeData.messege} readOnly></textarea>
                            </div>
                        </div>
                    </div>
                }
                </div>
            </div>
        </>
    )
}
