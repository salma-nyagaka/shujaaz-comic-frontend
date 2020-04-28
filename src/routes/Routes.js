// react libraries
import * as React from 'react';
// third party packages
import { Redirect, Route, Switch } from 'react-router-dom';
import StoriesComponent from '../components/StoriesComponent'
import HomeComponent from '../components/HomeComponent'

// pages

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route exact path="/stories" component={StoriesComponent} />
    {/* <Redirect to="/404" /> */}
  </Switch>
);
export default Routes;
