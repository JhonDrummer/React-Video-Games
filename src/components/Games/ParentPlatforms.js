import platformsData from './../../data/Platforms.json';

const ParentPlatforms = ({ parentPlatforms }) => {
    return (
        <section className="icons">
            {parentPlatforms.map((parentPlatform, key) => <ParentPlatform key={key} {...parentPlatform.platform} />)}
        </section>
    );
}

const ParentPlatform = (platform) => {
    const p = platformsData.platforms.find(p => p.slug === platform.slug);
    if (!p) {
        console.log(platform);
        return <></>;
    }
    return (
        <figure>
            <img className={p?.class} src={p?.icon} alt={`icon-${platform.id}`} />
        </figure>
    );
}

export default ParentPlatforms;