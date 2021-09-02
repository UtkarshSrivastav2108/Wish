import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MainScreen from './screens/MainScreen/MainScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';



const App = () => {
  return (
    <Router>

      <Header />
      <main className="py-3">

        <Route exact path="/" component={MainScreen} />
        <Route exact path="/shop" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />

      </main>

      <Footer />

    </Router>
  );
}

export default App;
