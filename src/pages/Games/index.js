import './Games.css';
import responseAll from './../../mockup-data/response.json';
import responseGenre from './../../mockup-data/response-by-genre.json';
import responseTag from './../../mockup-data/response-by-tag.json';
import responsePlatform from './../../mockup-data/response-by-platform.json';
import properties from './../../data/Properties.json';
import { useParams } from "react-router-dom";
import GamesByPath from '../../components/Games/GamesByPath';


const Games = () => {
    const { idGenre, genre, idPlatform, platform, idTag, tag, type } = useParams();
    const info = getInfo(idGenre, genre, idPlatform, platform, idTag, tag, type);
    return <GamesByPath {...info} />
}

const getInfo = (idGenre, genre, idPlatform, platform, idTag, tag, type) => {
    let response = responseAll;
    let path = `${properties.url}?key=${properties.key}&page_size=${properties.pageSize}`;
    let text = 'all games';
    if (idGenre) {
        console.log('loads all games by genre');
        path += `&genres=${idGenre}`;
        text = `${genre} games`;

        response = responseGenre;
    } else if (idPlatform) {
        console.log('loads all games by platform');
        path += `&platforms=${idPlatform}`;
        text = `${platform} games`;

        response = responsePlatform;
    } else if (idTag) {
        console.log('loads all games by tag');
        path += `&tags=${idTag}`;
        text = `${tag} games`;

        response = responseTag;
    } else {
        if (type) {
            console.log('loads all my games');
            path = '';
            text = "my games";
        } else {
            console.log('loads all games');
        }
    }
    return { path, response, text };
}

export default Games;