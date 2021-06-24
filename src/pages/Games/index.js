import './Games.css';
import properties from './../../data/Properties.json';
import { useParams } from "react-router-dom";
import GamesByPath from '../../components/Games/GamesByPath';


const Games = () => {
    const { idGenre, genre, idPlatform, platform, idTag, tag, type, page_number } = useParams();
    const info = getInfo(idGenre, genre, idPlatform, platform, idTag, tag, type, page_number);
    return <GamesByPath {...info} />
}

const getInfo = (idGenre, genre, idPlatform, platform, idTag, tag, type, page_number) => {
    let path = `${properties.url}?key=${properties.key}${page_number ? `&page=${page_number}` : ""}&page_size=${properties.pageSize}`;
    let text = 'all games';
    let route = '';

    if (idGenre) {
        console.log('loads all games by genre');
        path += `&genres=${idGenre}`;
        text = `${genre} games`;
        route = `/genre/${idGenre}/${genre}`;
    } else if (idPlatform) {
        console.log('loads all games by platform');
        path += `&platforms=${idPlatform}`;
        text = `${platform} games`;
        route = `/platform/${idPlatform}/${platform}`;
    } else if (idTag) {
        console.log('loads all games by tag');
        path += `&tags=${idTag}`;
        text = `${tag} games`;
        route = `/tag/${idTag}/${tag}`;
    } else {
        if (type) {
            console.log('loads all my games');
            path = '';
            text = "my games";
        } else {
            console.log('loads all games');
        }
    }
    let routePrev = route + `/${page_number > 1 ? parseFloat(page_number - 1) : ""}`;
    let routeNext = route + `/${parseFloat(page_number ? page_number : 1) + 1}`;
    return { path, text, routePrev, routeNext };
}

export default Games;