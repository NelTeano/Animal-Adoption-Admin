import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    }, [messegeData]);

    console.log(messegeData._id)

    
    return (
        
        <>
        {messegeData &&
            <div>
                <h1>{messegeData.name}</h1>
                <h1>{messegeData._id}</h1>
                <h1>{messegeData.phone}</h1>
                <h1>{messegeData.messege}</h1>
            </div>
        }
        </>
    )
}
