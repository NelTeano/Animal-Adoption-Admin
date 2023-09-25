import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// IMAGES
import BrandLogo from '../assets/images/brandlogo.png'

export default function Navbar() {

    const navLayout = {
        diplay: 'flex',
        position: 'relative',
        width: '268px',
        height: '1080px',
        left: '0px',
        top: '0px',
        background: '#ADA7FF',
        borderTopLeftRadius: '40px',
    }
    
    const navHeader = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#b0abf5',
        borderTopLeftRadius: '40px',
    }

    const navNavigation = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }


    const navIcons = {
        dashboard : 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>,
    }

    return (
        <div style={navLayout}>
            <div style={navHeader}>
                <Image 
                    src={BrandLogo} 
                    width={'140px'} 
                    height={'140px'}
                />
            </div>  
            <div style={navNavigation}>
                <Link>
                    <h2>Dashboard</h2>
                </Link>
                <Link>
                    <h2>Dashboard</h2>
                </Link>
                <Link>
                    <h2>Dashboard</h2>
                </Link>
            </div>

        </div>
    )
}
