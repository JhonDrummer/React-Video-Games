import GamesSection from "../GamesSection";

const GamesByPath = (info) => {
    return (
        <article>
            <header className="title">
                <h1>{decodeURIComponent(info.text)}</h1>
            </header>
            <GamesSection info={info} />
        </article>
    );
}

export default GamesByPath;