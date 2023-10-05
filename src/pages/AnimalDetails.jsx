import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


export default function AnimalDetails() {

    const [animalDetails, setAnimalDetails] = useState(''); // HANDLE ANIMAL DATA GET BY ID
    const animalId = useParams(); // GET URL PARAMS (ANIMAL ID HANDLER)
    const getApplicants = animalDetails.applicants;

    useEffect(() => {
        async function getDetails() {
        try {
            const data = await fetch(`http://localhost:5176/api/animals/${animalId.id}`, {
            headers: {
                Accept: 'application/json',
            },
            });
            const jsonData = await data.json();
            setAnimalDetails(jsonData);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
        }

        getDetails(); // GETTING ANIMAL DATA BY ID
    }, []);

    console.log(animalId.id);
    console.log(animalDetails);
    console.log(getApplicants);

    // {getApplicants == '' || getApplicants.length < 1? 
    // (
    //     <>
    //         {/* <h1>Name: {getApplicants.name}</h1>
    //         <img src={getApplicants.picture} alt={getApplicants.name} />
    //         <h1>Email: {getApplicants.email}</h1>
    //         <h1>Address: {getApplicants.address}</h1> */}
    //     </>
    // ) 
    // : 
    // (
    //     <>
    //         {getApplicants.map(applicant => (
    //             <div key={applicant.id}>
    //                 <h1>Name: {applicant.name}</h1>
    //                 <img src={applicant.picture} alt={applicant.name} />
    //                 <h1>Email: {applicant.email}</h1>
    //                 <h1>Address: {applicant.address}</h1>
    //             </div>
    //         ))}     
    //     </>
    // )
    // }

    return (
        <>
            <h1>Name: {animalDetails.name}</h1>
            <h1>animal_image: {animalDetails.animal_image}</h1>
            <h1>animal_type: {animalDetails.animal_type}</h1>
            <h1>breed: {animalDetails.breed}</h1>
            <h1>isAdopted: {animalDetails.isAdopted}</h1>
            <h1>last_owner: {animalDetails.last_owner}</h1>
            <h1>location: {animalDetails.location}</h1>
            <h1>new_owner: {animalDetails.new_owner}</h1>
            <h1>applicants:</h1>
            {/* <h1>applicants: {getApplicants.map((applicant)=>(
                <div key={applicant.id}> 
                    <h1>{applicant.name}</h1>
                    <h1>{applicant.email}</h1>
                    <h1>{applicant.picture}</h1>
                </div>
            ))}</h1> */} 
            
            {/* {getApplicants.map(applicant => (
                <div key={applicant.id}>
                    <h1>Name: {applicant.name}</h1>
                    <img src={applicant.picture} alt={applicant.name} />
                    <h1>Email: {applicant.email}</h1>
                    <h1>Address: {applicant.address}</h1>
                </div>
            ))}  */}   

            
        </>
    )
}
