import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import properties from './../../data/Properties.json';

const Slideshow = ({ id }) => {
    const [screenshots, setScreenshots] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = `${properties.url}/${id}/screenshots?key=${properties.key}`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(data => {
                setScreenshots(data);
                console.log(data);
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

    if (loading) return <></>;
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