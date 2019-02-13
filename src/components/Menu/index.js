import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, NavLink, } from "react-router-dom";
import { connect } from 'react-redux';
import { getCategories } from '../../actions';
import Joke from '../Joke';
import styles from './menu.module.css';

let id = 0;
const uniqueId = () => {
  id += 1;
  return id;
};

class Menu extends Component {

  constructor() {
    super();

    this.arr = [];
    this.arrOfRoutes = this.arrOfRoutes.bind(this);
    this.arrOfNavlinks = this.arrOfNavlinks.bind(this);
  }

  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  arrOfRoutes() {
    this.arr.push(<Route key={uniqueId()} exact path="/" component={Joke} />);
    this.arr.push(<Route path="/category/:jokeId/" exact component={Joke} key={uniqueId()} />);
    return this.arr;
  }

  arrOfNavlinks() {
    const arr = [];
    const { categories } = this.props;
    categories.map(item => (
      arr.push(<li className={styles.menu__item} key={uniqueId()}><NavLink exact className={styles.menu__itemLink} to={`/category/${item}/`}>{item}</NavLink></li>)
    ));
    return arr;
  }

  render() {
    const { categories } = this.props;
    return (
      <Router>

        <nav className={styles.app}>
          <ul className={styles.menu}>
            {
              categories ? (
                this.arrOfNavlinks().map(item => item)
              ) : (
                  'loading'
                )
            }
          </ul>
          {/* <Switch>
            {
              categories ? (
                this.arrOfRoutes().map(item => item)
              ) : (
                  'loader'
                )
            }
            
          </Switch> */}
        </nav>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  getCategories,
}

const mapStateToProps = (state) => ({
  categories: state.categories,
})

Menu = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default Menu;

