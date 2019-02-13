import React, { Component } from 'react';
import styles from './content.module.css';
import Menu from '../Menu';
import Joke from '../Joke';
import { HashRouter as Router, Route, Switch, } from "react-router-dom";
import { connect } from 'react-redux';

let id = 0; // хак ;)
const uniqueId = () => {
  id += 1;
  return id;
};

class Content extends Component {
  constructor() {
    super();

    this.arr = [];
    this.arrOfRoutes = this.arrOfRoutes.bind(this);
  }

  arrOfRoutes() {
    this.arr.push(<Route key={uniqueId()} exact path="/" component={Joke} />);
    this.arr.push(<Route path="/category/:jokeId/" exact component={Joke} key={uniqueId()} />);
    return this.arr;
  }

  render() {
    const { categories } = this.props;
    return (
      <div className={styles.content}>
        <div className={styles.content__menu}>
          <Menu />
        </div>
        <div className={styles.content__joke}>
          <Router>
            <Switch>
              {
                categories ? (
                  this.arrOfRoutes().map(item => item)
                ) : (
                    'loader'
                  )
              }
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
})

Content = connect(mapStateToProps, null)(Content);

export default Content;

