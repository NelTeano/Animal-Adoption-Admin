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
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '60px'
    }

    const navCategoriesLayout = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white'
    }


    const navIcons = {
        dashboard : 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-clipboard-data" viewBox="0 0 16 16">
                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>,
        users : 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-personLines-fill" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
            </svg>,
        inquiries: 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-envelope-arrow-down" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99V4Zm1 7.105 4.708-2.897L1 5.383v5.722ZM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1Z"/>
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708l-1.25 1.25Z"/>
            </svg>,
        animals : 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-box2-heart" viewBox="0 0 16 16">
            <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z"/>
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z"/>
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
                <Link 
                    to='/dashboard'
                    style={navCategoriesLayout}
                >
                    <p>{navIcons.dashboard}</p>
                    <h2> &nbsp; &nbsp;Dashboard</h2>
                </Link>
                <Link 
                    to='/inquiries'
                    style={navCategoriesLayout}
                >
                    <p>{navIcons.inquiries}</p>
                    <h2> &nbsp; &nbsp;  &nbsp; Inquiries</h2>
                </Link>
                <Link 
                    to='/users'
                    style={navCategoriesLayout}
                >
                    <p>{navIcons.users}</p>
                    <h2> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;Users</h2>
                </Link>
                <Link 
                    to='/animals'
                    style={navCategoriesLayout}
                >
                    <p>{navIcons.animals}</p>
                    <h2> &nbsp; &nbsp; &nbsp;  &nbsp;Animals</h2>
                </Link>
            </div>

        </div>
    )
}
