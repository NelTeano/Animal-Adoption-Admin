// STYLES
import '../assets/styles/dashboardStyle.css'

// COMPONENTS 
import Navbar from '../components/navbar'
import DashboardCard from '../components/totalCard'
import { Chart } from "react-google-charts";
import { Image } from 'react-bootstrap';

// IMAGES
import userCardIcon from '../assets/images/usersLogo.png'
import animalCardIcon from '../assets/images/animalLogo.png'
import AdoptedLogo from '../assets/images/adoptedLogo.png'
import DashboardLogo from '../assets/images/dashboardLogo.png'


export default function Dashboard() {

    const pieChartData = [
        ["Totals", "Value "],
        ["Users", 144],
        ["Animals", 100],
        ["Adopted", 67],
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
                    <div className='dashboard-table-body'>
                        <div className='dashboard-totals'>
                            <DashboardCard 
                                cardIcon={userCardIcon}
                                cardLabel='Total Users'
                                totalValue='144'
                            />
                            <DashboardCard 
                                cardIcon={animalCardIcon}
                                cardLabel='Total Animals'
                                totalValue='100'
                            />
                            <DashboardCard 
                                cardIcon={AdoptedLogo}
                                cardLabel='Total Adopted Animals'
                                totalValue='67'
                            />
                            
                        </div>  
                    </div>
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
