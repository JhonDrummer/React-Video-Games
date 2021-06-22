// import responseById from './../../mockup-data/response-by-id.json';
import properties from './../../data/Properties.json';
import Ratings from "./Ratings";
import Details from "./Details";
import { useState, useEffect } from "react";

const GameContent = ({ id }) => {
    const [game, setGame] = useState(null);
    const [loadingGame, setLoadingGame] = useState(true);
    const [error, setError] = useState(null);
    let pathById = `${properties.url}/${id}?key=${properties.key}`;
    console.log(pathById);
    const url = `${properties.url}/${id}?key=${properties.key}`;
    // const url = 'https://192.168.0.16/PresupuestoAPI_Des/api/presupuesto/GetPresupuestosPorBolsillo/idBolsillo/1';

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(data => {
                setGame(data);
                console.log(data);
                // setGame(responseById);
            }).catch(error => {
                setError(error);
            }).finally(() => {
                setLoadingGame(false);
            })
    }, [url]);

    if (loadingGame) return <></>;
    if (error) return "Error!";
    return (
        <article>
            <header>
                <h1>{game.name}</h1>
            </header>
            <p className="description">{game.description_raw}</p>
            <Ratings ratings={game.ratings} />
            <section className="details">
                <Details title="Platforms" arr={game.platforms} path="platform" prop="platform" />
                <Details title="Genres" arr={game.genres} path="genre" />
            </section>
            <footer>
                <Details title="Tags" arr={game.tags} path="tag" />
            </footer>
        </article>
    );
}

export default GameContent;