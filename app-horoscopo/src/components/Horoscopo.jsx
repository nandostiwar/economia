import "./horoscopo.css"

function Content({name, date, description, image}) {

    return (
        <div className="horoscopoInfo">
            <h2>{name}</h2>
            <br />
            <img src={image} alt="Zodiac Sign Image" />
            <br />
            <h4>{date}</h4>
            <br />
            <p>{description}</p>
        </div>
    );
}

export default Content