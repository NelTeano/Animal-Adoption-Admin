
// COMPONENTS
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// STYLES
import '../assets/styles/loginStyle.css'

// IMAGES
import Logo from '../assets/images/Adoption-Website-Logo.png'
import brandLogo from '../assets/images/brandlogo.png'


export default function Login() {

    


    return (
        <>
            <div className='login-container'>
                <div className='login-board'>
                    <div className='cat-vector'>
                        <Image 
                            width={'300.713px'}
                            height={'300.22px'}
                            src={brandLogo}>
                        </Image>
                    </div>
                    <div className='login-board-tagline'>
                        <h3>Welcome Back</h3>
                        <p>Animal Adoption Website Administrator</p>
                    </div>
                </div>
                <div className='login-form'>
                    <div className='login-form-box'>
                        <h1>Sign in   <Image src={Logo} height={'50px'} thumbnail />  </h1>
                        <form>
                            <label>Username</label>
                            <input type="text" name='user' placeholder="Administrator" />
                            <label>Password </label>
                            <input type="password" placeholder="****************" />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
