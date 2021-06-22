import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { addGame, removeGame } from "../../redux/actions/Games";

const GamesByPath = (info) => {
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
        console.log(info);
        if (info.path !== '') {
            const url = info.path;
            // const url = 'https://192.168.0.16/PresupuestoAPI_Des/api/presupuesto/GetPresupuestosPorBolsillo/idBolsillo/1';
            setLoading(true);
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                }).then(data => {
                    setData(data);
                    console.log(data);
                    // setData(info.response);
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
        <article>
            <header className="title">
                <h1>{info.text}</h1>
            </header>
            <section className="grid-container">
                {data.results.map(game => <Card key={game.id} add={add} remove={remove} validateFavourite={validateFavourite} game={game} />)}
            </section>
        </article>
    );
}

export default GamesByPath;