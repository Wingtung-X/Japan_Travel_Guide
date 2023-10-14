import okonomiyaki from "./okonomayaki.jpeg";
import takoyaki from "./takoyaki.jpeg";

import "./Osaka.css";
import osakaCard from "./OsakaCard.js";
import { useState } from "react";

function Osaka() {
    const [cardIndex, setCardIndex] = useState(0);

    function previousCard(e){
        setCardIndex(cardIndex ===0 ? osakaCard.length - 1 : cardIndex - 1);
        e.preventDefault();
    }

    function nextCard(e){
        setCardIndex(cardIndex ===osakaCard.length -1  ? 0 : cardIndex + 1);
        e.preventDefault();
    }

    return (
        <div className="osaka">
            <h2 className="osaka-title">Explore Osaka</h2>

            <div className="osaka-season">
            <h3 className="osaka-season-title">Seasonal Highlights</h3>
            <div className="osaka-season-cards">
                <div className="osaka-season-card">
                    <h4 className="osaka-card-title">{osakaCard[cardIndex].title}</h4>
                    <img className="osaka-card-img" src={osakaCard[cardIndex].image} alt={osakaCard[cardIndex].alt}></img>
                    <p className="osaka-card-para">{osakaCard[cardIndex].para}</p>
                </div>
            </div>
            <button className="osaka-season-button button-previous" onClick={previousCard} aria-label="click to swhich to previous season">&lt;</button>
            <button className="osaka-season-button button-next" onClick={nextCard} aria-label="click to swhich to next season">&gt;</button>
            </div>
            
            
            <div className="osaka-eat">
                <h3 className="osaka-eat-title">What to eat...</h3>
                <div className="osaka-eat-content">
                    <div className="osaka-card osaka-eat-okonomiyaki">
                        <h4 className="osaka-card-title osaka-eat-okonomiyaki-title">Okonomiyaki</h4>
                        <img className="osaka-card-img osaka-eat-okonomiyaki-img" src={okonomiyaki} alt="a man holding a golden spoon in front of a barbecue making okonomiyaki"></img>
                        <p className="osaka-card-para osaka-eat-okonomiyaki-para">Okonomiyaki are savory pancakes made with shredded cabbage, flour, egg and dashi, and either cooked at your table for you or left for you to cook yourself. The latter option is much more fun. A long list of toppings and combinations are available, with some of the more common ones being pork, shrimp, octopus and cheese.</p>
                    </div>
                    <div className="osaka-card osaka-eat-takoyaki">
                        <h4 className="osaka-card-title osaka-eat-takoyaki-title">Takoyaki</h4>
                        <img className="osaka-card-img osaka-eat-takoyaki-img" src={takoyaki} alt="a man holding a bottle in front of a barbecue making takoyaki"></img>
                        <p className="osaka-card-para osaka-eat-takoyaki-para">Bits of octopus combined with pickled ginger and green onions, mixed in a batter and grilled in a special mold. The resulting spheres are crispy on the outside and tender on the inside. An Osaka classic topped with Worcestershire sauce, ginger and seaweed flakes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Osaka;