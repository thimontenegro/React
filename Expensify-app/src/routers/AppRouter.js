import React from 'react';
import {BrowserRouter, Route, Switch, Link,NavLink} from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoard';
import ExpenseEditPage from '../components/ExpenseEditPageComponent';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseCreatePage from '../components/ExpenseCreatePage';

const AppRouter = () => (  <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path = '/'
            component = {ExpenseDashBoardPage} 
            exact= {true}
        />
        <Route path='/create' component = {ExpenseCreatePage}/>
        <Route path='/edit/:id' component = {ExpenseEditPage} />
        <Route path='/help' component = {ExpenseHelpPage} />
        <Route component = {NotFoundPage} />
    </Switch>    
    </div>
    </BrowserRouter>
);

export default AppRouter;
