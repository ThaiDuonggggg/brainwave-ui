import PropTypes from 'prop-types';

const Heading = ({ className, title }) => {
    return (
        <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
            {title && <h2 className="h2">{title}</h2>}
        </div>
    );
};

Heading.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};

export default Heading;
