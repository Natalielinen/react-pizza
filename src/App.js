import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import { Header } from './components';
import {Home, Cart} from './Pages';


import {setPizzas} from './redux/actions/pizzasActionCreators'



// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//     .then(({data}) => setPizzas(data.pizzas) )
//   }, []);

// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => 
    this.props.setPizzas(data.pizzas)
     )

  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path = '/' render = {() => <Home pizzas = {this.props.pizzas} />} />
          <Route path = '/cart' component = {Cart} />
        </div>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas.pizzas

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    setPizzas: (pizzas) => dispatch(setPizzas(pizzas))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
