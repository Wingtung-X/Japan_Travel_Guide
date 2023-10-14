import'./Footer.css';
import footerLogo from './footerlogo.jpeg';
import FooterMenu from './FooterMenu';
import './Footer.css'

function Footer({setPage}){
    const FooterList = FooterMenu.map(item => {
        return (
            <li className="footer-nav-item" key={item.page}>
                <a className="footer-nav-link"
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

    return(
        <footer>
                <img className='footer-logo' src={footerLogo} alt="tow women wearing yukata in front of Kiyomizudera Temple."></img>
                <ul className="footer-nav">{FooterList}</ul>
        </footer>
    )
}

export default Footer;