import React from 'react';
import {BrowserRouter, Route, Switch, Link,NavLink} from 'react-router-dom';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioPage from '../components/PortfolioPage';
import Contact from '../components/ContactPage';
import PortfolioItemPage from '../components/PortfolioItemPage';

const AppRouter = () => (  <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path = '/'
            component = {HomePage} 
            exact= {true}
        />
        <Route path ='/portfolio' component={PortfolioPage} exact = {true}/>
        <Route path='/portfolio/:id' component = {PortfolioItemPage} />
        <Route path='/contact' component = {Contact} />
        <Route component = {NotFoundPage} />
    </Switch>    
    </div>
    </BrowserRouter>
);

export default AppRouter;
