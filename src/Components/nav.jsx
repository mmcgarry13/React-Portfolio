import { Link } from 'react-router-dom';
import Navbar from './navbar';

export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <div>
            <Navbar
                links={[
                    <Link key={1} className="nav-link text-light" to="/">
                        Home
                    </Link>,
                    <Link key={2} className="nav-link text-light" to="/about">
                        About Me
                    </Link>,
                    <Link key={3} className="nav-link text-light" to="/contact">
                        Contact
                    </Link>,
                    <Link key={4} className="nav-link text-light" to="/resume">
                        Resume
                    </Link>,
                ]}
            />
        </div>

    );
}
