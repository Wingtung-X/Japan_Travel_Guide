import menu from './Menu.js';
import { useState } from 'react';
import './Header.css'

function GlobalNav({ className, setPage, menuOpen,menuliOpen }) {
    const [show, setShow] = useState(false);
    if (show === false) { menuOpen = "" ; menuliOpen=""};
    if (show === true) { menuOpen = "nav-open" ; menuliOpen="li-open"};

    function onClick_Show() {
        setShow(!show);
        console.log("show setted!");
        console.log(show);
        console.log(menuOpen);
    }

    function build_list(menuOpen) {
        return (
            <ul className={`global-nav-list ${menuOpen}`}>
                {list}
            </ul>
        );
    }

    const list = menu.map(item => {
        return (
            <li className={`global-nav-item ${menuliOpen} `} key={item.page}>
                <a className="global-nav-link"
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.page);
                        console.log(item.page);
                    }}>
                    {item.page}
                </a>
            </li>
        );
    })


    return (
        <nav className={`global-nav ${className}`}>
            <ul className='global-nav-ul'>
                <li className='global-nav-li'>
                    <button onClick={onClick_Show} className="nav-button"  aria-label='click to open menu'></button>
                    {build_list(menuOpen)}
                </li>
            </ul>
        </nav>
    );
}

export default GlobalNav;