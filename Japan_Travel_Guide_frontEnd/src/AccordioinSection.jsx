import { useState } from "react";
import "./AccordionSection.css";
import winter from "./winter.jpeg";
import spring from "./spring.jpeg";
import summer from "./summer.jpeg";
import autumn from "./autumn.jpeg";

function AccordioinSection() {
    const [isWinterOpen, setIsWinterOpen] = useState(false);
    const [isSpringOpen, setIsSpringOpen] = useState(true);
    const [isSummerOpen, setIsSummerOpen] = useState(false);
    const [isAutumnOpen, setIsAutumnOpen] = useState(false);



    const winterOpen = isWinterOpen ? "accordion-button-winter-open" : "";
    const springOpen = isSpringOpen ? "accordion-button-spring-open" : "";
    const summerOpen = isSummerOpen ? "accordion-button-summer-open" : "";
    const autumnOpen = isAutumnOpen ? "accordion-button-autumn-open" : "";


    return (
        <>
            <div className="accordion">
                <button
                    onClick={() => setIsWinterOpen(!isWinterOpen)
                    }
                    className={`accordion-button winter-button ${winterOpen}`} >Japan in Winter</button>
                {isWinterOpen &&
                    (<div className="accordion-inner-div">
                         <h3 className="accordion-title">Winter events to warm the spirits</h3>
                        <img className="accordion-image" src={winter} alt="some cement lamps and a red traditional Japanese temple on the snow" />
                        <p className="accordion-p">The undisputed top dog of winter-themed events in Japan, Sapporo's Snow Festival  draws over 2 million visitors each year. A vast array of ice and snow sculptures at multiple venues provide the main attraction, but it doesn't end there. Food and drink on offer at countless kiosks keep moods buoyant as temperatures drop. Similar festivals with fewer crowds are the Akita Yokote Kamakura Festival , Niigata's Tokamachi Snow Festival  and Aomori's Hirosaki Castle Snow Lantern Festival .
                        </p>
                        <p className="accordion-p">For something completely different all together, check out the Saidai-ji Temple Eyo (Naked Man Festival) in Okayama . With scores of loincloth-clad men fighting for dear life to get their hands on the shingi (sacred wooden stick) that will bring them luck, it's a good example of how some things just need to be seen to be believed. Expect pummeling, breathless drama, lightning-fast reversals of fortune, and bare flesh everywhere you look. That's entertainment!
                        </p>
                    </div>)
                }
            </div>

            <div className="accordion">
                <button
                    onClick={() => setIsSpringOpen(!isSpringOpen)
                    }
                    className={`accordion-button spring-button ${springOpen}`} >Japan in Spring</button>
                {isSpringOpen &&
                    (<div className="accordion-inner-div">
                        <h3 className="accordion-title">Relaxing under the blossoms</h3>
                        <img className="accordion-image" src={spring} alt=" pink cherry blossoms and pink lanterns on both sides of the river" />
                        <p className="accordion-p">Japan's fiscal year ends in a flurry of activity on March 31, leaving much of the population in the mood to kick back. Hanami parties provide the leisure activity par excellence, as revelers stretch out on tarps to spend time with friends and family. While most cities have a go to spot, you can enjoy the hanami experience in any park or public space where the cherry trees are in bloom.
                        </p>
                        <p className="accordion-p">When planning your visit, please keep in mind that the cherry blossom period is brief in any given place but rather long on a national scale. Beginning in January in Okinawa , it lasts well into May in Hokkaido  and mountainous areas. You can follow the bloom of the cherry blossom  as they travel up the country.
                        </p>
                    </div>)}
            </div>

            <div className="accordion">
                <button
                    onClick={() => setIsSummerOpen(!isSummerOpen)
                    }
                    className={`accordion-button summer-button ${summerOpen}`} >Japan in Summer</button>
                {isSummerOpen &&
                    (<div className="accordion-inner-div">
                        <h3 className="accordion-title">Fields filled with water and ripening plums</h3>
                        <img className="accordion-image" src={summer} alt="many hydrangeas in the forest and a stand made of bamboo in the center" />
                        
                        <p className="accordion-p">The Japanese word for the rainy season, tsuyu or 'plum rain,' refers to a period when plums ripen on trees as rice fields around rural Japan are flooded by rain. This time of year determines the rice harvest, and is, in a sense, the lifeline for Japan's populace. Another noticeable benefit of the season can be seen in the luminous hydrangeas which flourish in the damp weather.
                        </p>
                        <p className="accordion-p">Not all rainy seasons are created equal though: with low annual rainfall, Hokkaido sees a minimal increase during raining season, while the southern islands of Kyushu  and Shikoku  get extremely wet. Careful planning can help you stay relatively dry in June.
                        </p>
                    </div>)}
            </div>
            <div className="accordion">
                <button
                    onClick={() => setIsAutumnOpen(!isAutumnOpen)
                    }
                    className={`accordion-button autumn-button ${autumnOpen}`} >Japan in Autumn</button>
                {isAutumnOpen &&
                    (<div className="accordion-inner-div">
                         <h3 className="accordion-title">Dazzling autumn colors</h3>
                        <img className="accordion-image" src={autumn} alt="ed fir trees and many withered branches on the blue water" />
                        <p className="accordion-p">While you will have to wait until November for the best colors in Tokyo , Kyoto  and other warmer regions, Tohoku , Hokkaido  and more northerly and higher altitude locations peak at various times throughout October.
                        </p>
                        <p className="accordion-p">Popular spots in central Japan include Kurobe Gorge  and the similarly-named but separate Tateyama Kurobe Alpine Route . The Karasawa Col in the Kamikochi area  is another highly-regarded spot, that is extremely popular with hikers.
                        </p>
                    </div>)}
            </div>
        </>
    );
}

export default AccordioinSection;