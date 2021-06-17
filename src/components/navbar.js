import {React} from 'react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <nav>
            <ul className="nav navbar-nav">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/nutrition'>Nutrition Facts</Link>
                </li>
                <li>
                    <Link to='/admin'>Admin</Link>
                </li>
            </ul>
        </nav>

    );
};

export default Navbar;