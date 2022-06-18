import "./Banner.scss";
import PropTypes from "prop-types";
// import {} from '../../assets/images'

Banner.propTypes = {
    title: PropTypes.string,
    backgroundURL: PropTypes.string,
};

function Banner(props) {


    const { title, backgroundURL } = props;
    const backgroundStyle = backgroundURL
        ? { backgroundImage: `url("${backgroundURL}")` }
        : {};
    return (
        <section className="banner" style={backgroundStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    );
}

export default Banner;
