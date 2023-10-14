import Home from "./Home";
import Tokyo from "./Tokyo";
import Event from "./Event";
import Osaka from "./Osaka";
import Kyoto from "./Kyoto";
import Register from "./Register";
import Privacy from "./Privacy";
import Cookie from "./Cookie";

function Main({ page,setPage }) {
    console.log("this is page. " + page);
    return (
    <main id="main" 
    >
        {(page === 'Home') && <Home/>}
        {(page === 'Tokyo') && <Tokyo/>}
        {(page === 'Osaka') && <Osaka/>}
        {(page === 'Kyoto') && <Kyoto/>}
        {(page === 'Event') && <Event setPage = {setPage} /> }
        {(page === 'Register') && <Register setPage = {setPage}/>}
        {(page === 'Privacy Policy') && <Privacy/>}
        {(page === 'Cookie Policy') && <Cookie/>}
    </main>
    )
}

export default Main;