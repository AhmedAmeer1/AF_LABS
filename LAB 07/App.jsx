import React from 'react';
import PostsHolder from './components/PostsHolder';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


export default class App extends React.Component {
 constructor(props) {
 super(props);
 }

 
 render() {
    

    return <Router>
    <Switch>
        <Route path="/posts">
            <PostsHolder />
        </Route>
        <Redirect to="/posts" />
      </Switch>
   </Router>

   
 }
}
