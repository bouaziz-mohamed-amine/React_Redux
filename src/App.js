
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './page/about';
import Home from './page/home';
import Books from './page/book';
import Nav from './navbar/nav';
import FAvorites from './page/contact';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }



  render() { 
    return ( 
      <Router>
        <Nav/>
     <Switch>
     <Route  path='/' exact component={Home}></Route>
      <Route path='/about'  component={About}></Route>
      <Route path='/favorites'  component={FAvorites}></Route>
      <Route path='/book/:id'   component={Books}></Route>
     </Switch>
     
     {/**
      * <Route exact path='/'  component={Home}></Route>
      <Route path='/about'  component={About}></Route>
      <Route path='/contact'  component={Contact}></Route>
      <Route path='/book/:id'   component={Books}></Route>
      */} 
      
     {/**  <Route exact  path='*'><Notfound/></Route> */ }
     
      </Router>
     
     );
  }
}
 
export default App;
