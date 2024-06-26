import PropTypes from 'prop-types';
import ButtonSvg from '../assets/svg/ButtonSvg';

function Button({ className, href, onClick, children, px, white }) {
    const classes = `button relative inline-flex items-center justify-center h-11 transitions-colors hover:text-color-1 ${
        px || 'px-7'
    } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

    const spanClasses = 'relative z-10';

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    );

    return href ? renderLink() : renderButton();
}

Button.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    px: PropTypes.string,
    white: PropTypes.bool,
};

export default Button;
