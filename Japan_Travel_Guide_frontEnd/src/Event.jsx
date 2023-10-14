import eventList from "./EventList.js";
import "./Event.css";
import Modal from "./Modal.jsx";

function Event({ setPage } ) {
    const list = eventList;
    return (
        <div className="event-events">
            <div className="events-title">
                <h2 className="event-title-title">Some events you can register</h2>
                <Modal></Modal>
                <button className="event-title-link" href="register.html" onClick={(e) => { e.preventDefault(); setPage("Register") }} aria-label="click to register">register</button>
            </div>
            <div className="events">
             {list.map((item)=>{
                return(<div className="event" key={item.city}>
                    <h3 className="event-title">{item.title}</h3>
                    <p className="event-city">City: {item.city}</p>
                    <img className="event-image" src={item.img} alt={item.alt}/>
                    <p className="event-content">{item.event}</p>
                </div>
             );})}
            </div>
        </div>
    );
}

export default Event;