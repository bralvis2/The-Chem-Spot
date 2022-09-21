import banner from '../images/banner.png'
// style sheet
import './Nav.css'

const Nav = () => {

    return (
        <div className='navbar'>
            <img src={banner} alt='Website Banner' width={'100%'}/>
            <nav>
                <ul className='units'>
                    <li>Measurement</li>
                    <li>Matter & Change</li>
                    <li>Atomic Theory</li>
                    <li>Peridic Table & Trends</li>
                    <li>Bonding</li>
                    <li>Chemical Reactions</li>
                    <li>Thermochemistry</li>
                    <li>Gas laws</li>
                    <li>Solutions</li>
                    <li>Acids & Bases</li>
                    <li>Nuclear</li>
                    <li>Login</li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;