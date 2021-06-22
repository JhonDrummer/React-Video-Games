const Ratings = ({ ratings }) => {
    return (
        <section className="ratings-content">
            {ratings.map((rating, key) => <Rating key={key} {...rating} />)}
        </section>
    );
}

const Rating = (rating) => {
    return (
        <section className={`ratings ${rating.title}`}>
            <span className={`count count-${rating.title}`}>{rating.count}</span>
            <span>{rating.title}</span>
        </section>
    );
}

export default Ratings;