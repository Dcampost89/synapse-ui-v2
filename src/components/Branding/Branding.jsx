import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Branding.scss';

export const Branding = ({ link, className }) =>
    <div className={classnames(styles.branding,className)}>
        <a href={link}
            target="_blank()"
            className={styles.link}>
            Powered by 
            <span className={styles.span}> Synapse<sup>®</sup></span>
        </a>
    </div>

Branding.propTypes = {
    link: PropTypes.string,
    className: PropTypes.string
}

Branding.defaultProps = {
    link: "https://getsynapse.com/",
    className: undefined
}

export default Branding;
