// STYLES
import '../assets/styles/dashboardStyle.css'

// COMPONENTS 
import Navbar from '../components/navbar'

export default function Dashboard() {
    return (
        <>
            
            <div className="dashboard-container">
                <Navbar/>
                This is Dashboard Page
            </div>    
        </>
    )
}
