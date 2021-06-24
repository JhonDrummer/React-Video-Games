import properties from './../../data/Properties.json';
import GamesSection from '../GamesSection';

const GameSeries = ({ id }) => {
    const info = { path: `${properties.url}/${id}/game-series?key=${properties.key}`, individual: true };
    return (
        <GamesSection info={info} />
    );
}

export default GameSeries;