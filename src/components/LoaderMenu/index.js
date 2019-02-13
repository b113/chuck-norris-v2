import React from 'react';
import { connect } from 'react-redux'
import img from '../../img/loader-menu.gif'
import styles from './loaderMenu.module.css';

let LoaderMenu = ({ loading }) => (
    loading ? (
        <div className={styles.loaderMenu}>
            <img src={img} alt='loading' />
        </div>
    ) : (
            null
        )
);

const mapStateToProps = (state) => ({ loading: state.loading })

LoaderMenu = connect(mapStateToProps, null)(LoaderMenu)

export default LoaderMenu;