import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, } from "react-router-dom";
import { connect } from 'react-redux';
import { getCategories } from '../../actions';
import Joke from '../Joke';
import LoaderMenu from '../LoaderMenu';
import styles from './menu.module.css';

let id = 0;
const uniqueId = () => {
  id += 1;
  return id;
};

class Menu extends Component {

  constructor() {
    super();

    this.listRef = React.createRef();
    this.state = { more: true }
    this.arr = [];
    this.arrOfRoutes = this.arrOfRoutes.bind(this);
    this.arrOfNavlinks = this.arrOfNavlinks.bind(this);
    this.changeList = this.changeList.bind(this);
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
      arr.push(<li className={styles.menu__item} key={uniqueId()}><NavLink exact className={styles.menu__itemLink} to={`/category/${item}/`} activeStyle={{ textDecoration: 'underline', color: 'black' }}>{item}</NavLink></li>)
    ));
    return arr;
  }

  changeList() {
    this.setState({
      more: !this.state.more
    });

    const node = this.listRef.current;
    node.scrollTop = 0
  }

  render() {
    const { categories } = this.props;
    const { more } = this.state;
    return (
      <>
        <Router>
          <nav className={styles.menu}>
            <ul className={styles.menu__list} style={more ? null : { overflow: 'auto' }} ref={this.listRef}>
              {
                categories ? (
                  this.arrOfNavlinks().map(item => item)
                ) : (
                    null
                  )
              }
            </ul>
            <button
              className={styles.menu__btnMore}
              onClick={this.changeList}
            >
              {
                more ? (
                  <>
                    more<span className={styles.menu__btnArrow}>&#9658;</span>
                  </>
                ) : (
                    <>
                      <span className={styles.menu__btnArrow}> &#x25C4;</span>less
                  </>
                  )
              }
            </button>
          </nav>
        </Router>
        <LoaderMenu />
      </>
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

