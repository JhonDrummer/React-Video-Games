import ParentPlatforms from "./ParentPlatforms";
import { Link } from "react-router-dom";
import CardFooter from "./CardFooter";

const Card = ({ add, remove, validateFavourite, game }) => {
    return (
        <section className="grid-item">
            <figure>
                <img className="image" src={game.background_image} alt={`${game.name}`} />
            </figure>
            <ParentPlatforms parentPlatforms={game.parent_platforms} />
            <section className="info">
                <header>
                    <h1 className="name"><Link to={{ pathname: `/game-details/${game.id}` }}>{game.name}</Link></h1>
                </header>
                <span className={`rating ${getRatingClassName(game.rating)}`}>{game.rating}</span>
            </section>
            <CardFooter add={add} remove={remove} validateFavourite={validateFavourite} game={game} />
        </section>
    );
}

const getRatingClassName = (rating) => {
    if (rating >= 0 && rating < 1.25) {
        return "low";
    } else if (rating >= 1.25 && rating < 2.5) {
        return "medium-low";
    } else if (rating >= 2.5 && rating < 3.75) {
        return "medium-high";
    } else if (rating >= 3.75) {
        return "high";
    }
}

export default Card;