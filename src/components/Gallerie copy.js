import React from 'react';
import { Carousel } from 'antd';
import "../styles/Gallerie.css";


function onChange(a, b, c) {
    console.log(a, b, c);

}

function Gallerie() {
    React.useEffect(() => {
        var video = document.getElementById("myVideo");
        video.play();
    });

    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src={require("../assets/Hintergrund0.mp4")} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <Carousel effect="fade" afterChange={onChange} className="Carousel GallerieBackground1" autoplay autoplaySpeed={5000}>
                <div id="Seite1">
                    <h1 className='GallerieHeader'>FB CONSULTING & TRADE GMBH</h1>
                    <hr className='Trennlinie'></hr>
                    <h2 className='GallerieHeader2' id='GallerieHeaderId'>Ihr Partner für IT-Projektmanagement, Softwareentwicklung und Software-Testing!</h2>
                </div>
                <div>
                    <h3 className='GallerieHeader'>2</h3>
                </div>
                <div>
                    <h3 className='GallerieHeader'>3</h3>
                </div>
                <div>
                    <h3 className='GallerieHeader'>4</h3>
                </div>
            </Carousel>
        </>
    );
}
export default Gallerie;
