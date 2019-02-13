import React, { Component } from 'react';
import styles from './joke.module.css';
import { connect } from 'react-redux';
import { getJoke } from '../../actions';
import LoaderJoke from '../LoaderJoke';

class Joke extends Component {
  constructor() {
    super();

    this.randomJoke = this.randomJoke.bind(this);
  }

  componentDidMount() {
    const { match: { params: { jokeId } } } = this.props;
    const { getJoke } = this.props;

    getJoke(jokeId);
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { jokeId } } } = this.props;
    const { getJoke } = this.props;
    const { jokeId: jokePrev } = prevProps.match.params;

    if (jokePrev !== jokeId) {
      getJoke(jokeId);
    }
  }

  randomJoke() {
    const { match: { params: { jokeId } } } = this.props;
    const { getJoke } = this.props;

    getJoke(jokeId);
  }

  render() {
    const { joke, loadingJoke } = this.props;
    return (
      <>
        {
          !loadingJoke ? (
            <div className={styles.joke}>
              <span className={styles.joke__smallChucks}></span>
              <p className={styles.joke__text}>{`"${joke}"`}</p>
              <span className={styles.joke__smallChucks}></span>
              <button onClick={this.randomJoke} className={styles.randomJoke}>Random joke</button>
            </div>
          ) : (
              null
            )
        }
        <LoaderJoke />
      </>
    );
  }
}

const mapDispatchToProps = {
  getJoke,
}

const mapStateToProps = (state) => ({
  joke: state.joke,
  loadingJoke: state.loadingJoke
})

Joke = connect(mapStateToProps, mapDispatchToProps)(Joke);

export default Joke;

