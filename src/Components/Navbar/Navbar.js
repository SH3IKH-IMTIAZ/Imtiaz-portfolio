import { useState } from 'react';
import { menuItems } from '../../Content/variable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={`menu ${isOpen ? 'open' : ''}`}>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </div>

            <div className={`menu-items ${isOpen ? 'show' : ''}`}>
                {menuItems.map(i => (
                    <span className='item-wrapper' key={i.section}>
                        <a
                            href={i.section}
                            className='item'
                            onClick={() => setIsOpen(false)} // Close on click
                        >
                            {i.text}
                        </a>
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Navbar