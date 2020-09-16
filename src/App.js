import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import RestaurantPage from './components/RestaurantPage/RestaurantPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <main className="page">
          <Route path="/" exact component={RestaurantsListPage} />
          <Route path="/restaurant/:uuid" component={RestaurantPage} />
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
