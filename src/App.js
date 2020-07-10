import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <main className="page">
        <div className="content">
          <RestaurantsListPage />
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
