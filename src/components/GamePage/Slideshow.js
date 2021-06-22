import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import responseShortById from './../../mockup-data/response-short-by-id.json';
import properties from './../../data/Properties.json';

const Slideshow = ({ id }) => {
    const [screenshots, setScreenshots] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let pathByIdScreen = `${properties.url}/${id}/screenshots?key=${properties.key}`;
    console.log(pathByIdScreen);
    const url = `${properties.url}/${id}/screenshots?key=${properties.key}`;
    // const url = 'https://192.168.0.16/PresupuestoAPI_Des/api/presupuesto/GetPresupuestosPorBolsillo/idBolsillo/2';

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(data => {
                setScreenshots(data);
                console.log(data);
                // setScreenshots(responseShortById);
            }).catch(error => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            });
    }, [url]);

    const showSlides = (n, curr) => {
        let index = slideIndex + n;
        if (curr) {
            index = n;
        }

        setSlideIndex(index);
        const length = screenshots.results.length - 1;
        if (index > length) {
            setSlideIndex(0);
        }
        if (index < 0) {
            setSlideIndex(length);
        }
    }

    if (loading) return (<div className="title"><div className="loader"></div></div>);
    if (error) return "Error!";

    return (
        <section className="slide-container">
            {screenshots.results.map((shortScreenShot, index) =>
                <figure key={index} className={`${slideIndex === (index) ? 'img-active' : 'img-inactive'}`}>
                    <img src={shortScreenShot.image} alt={`screenshot-${index}`} />
                </figure>
            )}

            <section>
                <button className="arrows previous" onClick={() => showSlides(-1)}><FaAngleLeft /></button>
                <button className="arrows next" onClick={() => showSlides(1)}><FaAngleRight /></button>
            </section>

            <section className="gallery">
                {screenshots.results.map((shortScreenShot, index) =>
                    <figure key={index} className={`${slideIndex === (index) ? 'active' : 'inactive'}`}>
                        <img src={shortScreenShot.image} onClick={() => showSlides(index, true)} alt={`gallery-${index}`} />
                    </figure>
                )}
            </section>
        </section>
    );
}

export default Slideshow;