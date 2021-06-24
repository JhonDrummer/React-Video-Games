import properties from './../../data/Properties.json';
import Ratings from "./Ratings";
import Details from "./Details";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addGame, removeGame } from '../../redux/actions/Games';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const GameContent = ({ id }) => {
    const [game, setGame] = useState(null);
    const [loadingGame, setLoadingGame] = useState(true);
    const [error, setError] = useState(null);
    const url = `${properties.url}/${id}?key=${properties.key}`;

    const games = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const add = (game) => {
        dispatch(addGame(game));
    }

    const remove = (id) => {
        dispatch(removeGame(id));
    }

    const validateFavourite = (id) => {
        if (games.find(q => q.id === id)) {
            return true;
        }
        return false;
    }

    const makeFavourite = (game) => {
        if (validateFavourite(game.id)) {
            remove(game.id);
        } else {
            add(game);
        }
    }
 
    useEffect(() => {
        setLoadingGame(true);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(data => {
                setGame(data);
                console.log(data);
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
                <section className="favourite">
                    <button data-testid="fav-button" onClick={() => makeFavourite(game)}>{validateFavourite(game.id) ? <FaHeart data-testid="fav" /> : <FaRegHeart data-testid="not-fav" />}</button>
                </section>
            </header>
            <section dangerouslySetInnerHTML={{__html: game.description}}></section>
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