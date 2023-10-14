import GlobalNav from './GlobalNav.jsx';
import logo from "./logo.jpeg";
import "./Header.css"

function Header({ setPage }) {
    return (
        <header>
            <img id="logo" src={logo} alt="A women in furisode walking pass a torii" />
            <h1 className='header-title'>Japan Travel Guide</h1>
            <a className='header-skiplink' href='#main'
            >Skip to Content</a>
            <GlobalNav className="header-nav" setPage={setPage}></GlobalNav>
        </header>
    );
}
export default Header;