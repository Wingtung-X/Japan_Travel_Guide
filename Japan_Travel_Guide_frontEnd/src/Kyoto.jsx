import { useState } from "react";
import "./Kyoto.css";
import kyotoList from "./KyotoList";

function Kyoto() {

    const [type, setType] = useState("all");

    function filter(filterType) {
        setType(filterType);
    }

    const itemList = type === "all" ? kyotoList : kyotoList.filter(item => item.type === type);

    return (
        <div className="kyoto">
            <div className="kyoto-title">
                <h2 className="kyoto-title-title">Explore Kyoto</h2>
                <p className="kyoto-title-para">The old imperial capital and cultural heart of Japan</p>
            </div>
            <div className="button-group">
                <button className="kyoto-button all-button" onClick={() => filter("all")} aria-label='show buildings and features' >all</button>
                <button className="kyoto-button tourist-button" onClick={() => filter("tourist attraction")} aria-label='show buildings'>tourist attraction</button>
                <button className="kyoto-button local-button" onClick={() => filter("local special")} aria-label='show features'>local special</button>
            </div>
            <div className="kyoto-cards">
                {itemList.map((item) => {
                    if (item.type === type) {
                        return (
                            <div className="kyoto-card kyoto-card-selected" key={item.title}>
                                <h2 className="kyoto-card-title kyoto-card-selected-title">{item.title}</h2>
                                <img className="kyoto-card-image kyoto-card-selected-image" src={item.image} alt={item.alt} />
                                <p className="kyoto-card-para kyoto-card-selected-para">{item.para}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div className="kyoto-card kyoto-card-all" key={item.title}>
                                <h2 className="kyoto-card-title kyoto-card-all-title">{item.title}</h2>
                                <img className="kyoto-card-image kyoto-card-all-image" src={item.image} alt={item.alt} />
                                <p className="kyoto-card-para kyoto-card-all-para">{item.para}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div >
    )
}

export default Kyoto;