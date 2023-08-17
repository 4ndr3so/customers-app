import React from 'react';
import {Link,BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import CustomerContainers from './containers/CustomerContainers';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';



class App extends Component {
  renderHome =() => <h1>HOME</h1>;
  renderCustomerContainer=()=> <h1>Customer Contanier</h1>;
  renderCustomerListContanier=()=> <h1>Customer lis Contaniner</h1>;
  renderCustomerNewContanier=()=> <h1>Customer New contanier</h1>;
  render (){
    return(
        <Router>
            <div className="App">
            
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/customers" component={CustomerContainers} />
              <Switch>
                <Route  path="/customers/new" component={NewCustomerContainer} />
                <Route  path="/customers/:dni" render={props=> <CustomerContainer  dni={props.match.params.dni}></CustomerContainer>} />
              </Switch>
              
            </div>
      </Router>
    )
   
    };
}

export default App;
