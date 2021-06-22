import { Link } from "react-router-dom";

const Details = ({ title, arr, path, prop }) => {
    return (
        <section>
            {arr && arr.length > 0 ?
                <>
                    <span>{title}</span>
                    <section className="platforms genres">
                        {arr.map((obj, i) => <span key={i}>{i > 0 && ", "}<Link to={{ pathname: `/${path}/${prop ? obj[prop].id : obj.id}/${prop ? obj[prop].name : obj.name}` }}>{prop ? obj[prop].name : obj.name}</Link></span>)}
                    </section>
                </> : <></>}
        </section>
    )
};

export default Details;