import React from 'react';
import { connect } from 'react-redux'
import imgChuck from '../../img/loader-joke.jpg'
import img from '../../img/loading-joke.gif'
import styles from './loaderJoke.module.css';

let LoaderJoke = ({ loadingJoke }) => (
    loadingJoke ? (
        <div className={styles.loaderJoke}>
            <img src={imgChuck} className={styles.loaderJoke__chuck} alt='Chuck loading' />
            <img src={img} alt='loading' className={styles.loaderJoke__loading} />
        </div>
    ) : (
            null
        )
);

const mapStateToProps = (state) => ({ loadingJoke: state.loadingJoke })

LoaderJoke = connect(mapStateToProps, null)(LoaderJoke)

export default LoaderJoke;