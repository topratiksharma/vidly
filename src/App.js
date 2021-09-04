import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/common/navBar';
import NotFound from './components/common/notFound';
import Customers from './components/customers';
import Movies from './components/movies';
import Rentals from './components/rentals';

import './App.css';
import MovieForm from './components/movieForm';
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/movies/:id' component={MovieForm}></Route>
          <Route path='/movies' component={Movies}></Route>
          <Route path='/customers' component={Customers}></Route>
          <Route path='/rentals' component={Rentals}></Route>
          <Route path='/not-found' component={NotFound}></Route>
          <Redirect path='/' exact to='/movies'></Redirect>
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
