import './Game.css';
import { useParams } from "react-router-dom";
import Slideshow from '../../components/GamePage/Slideshow';
import GameContent from '../../components/GamePage/GameContent';
import GameSeries from '../../components/GamePage/GameSeries';

const GamePage = () => {
    const { id } = useParams();
    return (
        <section className="game-card">
            <Slideshow id={id} />
            <GameContent id={id} />
            <GameSeries id={id} />
        </section>
    );
}

export default GamePage;