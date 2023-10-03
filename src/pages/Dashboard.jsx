import { useEffect, useState } from 'react';

// STYLES
import '../assets/styles/dashboardStyle.css'

// COMPONENTS 
import Navbar from '../components/navbar'
import DashboardCard from '../components/totalCard'
import { Chart } from "react-google-charts";
import { Image } from 'react-bootstrap';
import Loading from '../components/loading'

// IMAGES
import userCardIcon from '../assets/images/usersLogo.png'
import animalCardIcon from '../assets/images/animalLogo.png'
import AdoptedLogo from '../assets/images/adoptedLogo.png'
import DashboardLogo from '../assets/images/dashboardLogo.png'


export default function Dashboard() {
    
    const [usersData, setUsersData] = useState(''); // HANDLE STORE USERS DATA
    const [animalData, setAnimalData] = useState('')  // HANDLE STORE ANIMALS DATA

    useEffect(() => {
        async function getUsers() {
            try {
                const data = await fetch('http://localhost:5176/api/users', {
                headers: {
                    Accept: 'application/json',
            },});
                const jsonData = await data.json();
                setUsersData(jsonData);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        }

        async function getAnimals() {
            try {
                const animals = await fetch('http://localhost:5176/api/animals', {
                headers: {
                    Accept: 'application/json',
            },});
                const jsonData = await animals.json();
                setAnimalData(jsonData);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        }

        getUsers(); // FETCHING USERS DATA
        getAnimals(); // FETCHING ANIMALS DATA
    }, []);


    console.log(usersData); // TO CONFIRM & SEE THE USERS DATA IN CONSOLE
    console.log(animalData); // TO CONFIRM & SEE THE USERS DATA IN CONSOLE


    const pieChartData = [
        ["Totals", "Value "],
        ["Users", usersData.length],
        ["Animals", animalData.length],
        ["Adopted", 1],
    ];

    const pieChartOptions = {
        title: "Animal Adoption Chart",
        pieHole: 0.4,
        is3D: false,
    };



    return (
        <>
            
            <div className="dashboard-container">
                <Navbar/>
                <div className='dashboard-table-container'>
                    <div className="navHeader">
                        <h1>Dashboard</h1>
                    </div>
                    {usersData && animalData ? (
                    <div className='dashboard-table-body'>
                        <div className='dashboard-totals'>
                            <DashboardCard 
                                cardIcon={userCardIcon}
                                cardLabel='Total Users'
                                totalValue={usersData.length}
                            />
                            <DashboardCard 
                                cardIcon={animalCardIcon}
                                cardLabel='Total Animals'
                                totalValue={animalData.length}
                            />
                            <DashboardCard 
                                cardIcon={AdoptedLogo}
                                cardLabel='Total Adopted Animals'
                                totalValue='1'
                            />
                        </div>  
                    </div>
                    ) : (
                        <div className='dashboard-table-body'>
                        <div className='dashboard-totals'>
                            <DashboardCard 
                                cardIcon={userCardIcon}
                                cardLabel='Total Users'
                                totalValue={<Loading />}
                            />
                            <DashboardCard 
                                cardIcon={animalCardIcon}
                                cardLabel='Total Animals'
                                totalValue={<Loading />}
                            />
                            <DashboardCard 
                                cardIcon={AdoptedLogo}
                                cardLabel='Total Adopted Animals'
                                totalValue={<Loading />}
                            />
                        </div>  
                    </div>
                    )
                    }
                    <div className='dashboard-statistics'>
                        <div className='pieChart'>
                            <Chart
                                chartType="PieChart"
                                width="500px"
                                height="400px"
                                data={pieChartData}
                                options={pieChartOptions}
                            />
                        </div>
                        <div className='dashboardLogo'>
                            <Image src={DashboardLogo}/>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}
