import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGame, removeGame } from "../../redux/actions/Games";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../Games/Card";

const GamesSection = ({ info }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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

    useEffect(() => {
        const validate = () => {
            if (info.path === '') {
                setLoading(true);
                setTimeout(() => {
                    setData({ results: games });
                    setLoading(false);
                }, 1500);
            }
        }
        validate();
    }, [info, games]);

    useEffect(() => {
        if (info.path !== '') {
            const url = info.path;
            setLoading(true);
            setError(null);
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                }).then(data => {
                    setData(data);
                    console.log(data);
                }).catch(error => {
                    console.error('error', error);
                    setError(error);
                }).finally(() => {
                    setLoading(false);
                })
        }
    }, [info]);
    if (loading) return (<div className="title"><div className="loader"></div></div>);
    if (error) return "Error!";
    return (
        <section>
            {info.individual && data.results.length > 0 ?
                <header className="subtitle">
                    <h2>game series</h2>
                </header> : <></>}
            <section className="grid-container">
                {data.results.map(game => <Card key={game.id} add={add} remove={remove} validateFavourite={validateFavourite} game={game} />)}
            </section>
            {info.individual ? <></> :
                <footer className="pagination">
                    <nav>
                        {data.previous ? <Link to={{ pathname: info.routePrev }} ><FaAngleLeft /></Link> : <></>}
                        {data.next ? <Link to={{ pathname: info.routeNext }} ><FaAngleRight /></Link> : <></>}
                    </nav>
                </footer>
            }
        </section>
    );
}

export default GamesSection;