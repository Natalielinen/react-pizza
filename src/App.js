import axios from 'axios';
import React, { useEffect} from 'react';
import { Route } from 'react-router';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import {Home, Cart} from './Pages';

import {setPizzas} from './redux/actions/pizzasActionCreators'

function App () {

  const dispatch = useDispatch();

 useEffect(()=>{
   axios.get('http://localhost:3001/pizzas')
   .then(({data}) => {
     dispatch(setPizzas(data))
   })
 },[])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path = '/' component = {Home} />
        <Route path = '/cart' component = {Cart} />
      </div>
    </div>
  );
  
}


export default App;
