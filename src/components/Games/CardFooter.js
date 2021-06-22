import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardFooter = ({ add, remove, validateFavourite, game }) => {
    const makeFavourite = (game) => {
        if (validateFavourite(game.id)) {
            remove(game.id);
        } else {
            add(game);
        }
    }
    return (
        <footer className="card-footer">
            <section className="favourite">
                <button data-testid="fav-button" onClick={() => makeFavourite(game)}>{validateFavourite(game.id) ? <FaHeart data-testid="fav" /> : <FaRegHeart data-testid="not-fav" />}</button>
            </section>
            <section className="genres">
                {game.genres.map((genre, i) => <span key={genre.id}>{i > 0 && ", "}<Link to={{ pathname: `/genre/${genre.id}/${genre.name}` }}>{genre.name}</Link></span>)}
            </section>
        </footer>
    );
}

export default CardFooter;