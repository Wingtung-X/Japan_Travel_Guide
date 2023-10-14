import TokyoCard from "./TokyoCard";
import "./TokyoCard.css";


function TokyoCards(){
    const cards = TokyoCard.map(item =>{
        return(
            <div className={`card ${item.class}`} key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <img className="card-image" src={item.image} alt={item.alt} />
                <div className="card-p">
                <p className="card-p1">{item.p1}</p>
                <p className="card-p2">{item.p2}</p>
                </div>
            </div>
        );
    });


    return(
        <div className="cards">
            {cards}
        </div>
    );
}

export default TokyoCards;