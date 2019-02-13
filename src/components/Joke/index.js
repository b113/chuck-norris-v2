import React, { Component } from 'react';
import styles from './joke.module.css';
import { connect } from 'react-redux';
import { getJoke } from '../../actions';


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
    const { joke } = this.props;
    return (
      <>
        <p>{joke}</p>
        <button onClick={this.randomJoke}>Random joke</button>
      </>
    );
  }
}

const mapDispatchToProps = {
  getJoke,
}

const mapStateToProps = (state) => ({
  joke: state.joke,
})

Joke = connect(mapStateToProps, mapDispatchToProps)(Joke);

export default Joke;

