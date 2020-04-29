// react libraries
import * as React from 'react';
// third party packages
import { Redirect, Route, Switch } from 'react-router-dom';
import StoriesContainer from '../containers/StoriesContainer'
import HomeContainer from '../containers/HomeContainer'
import CreatorsContainer from '../containers/CreatorsContainer'
import SingleCreatorContainer from '../containers/SingleCreatorContainer'


const Routes = () => (
  <Switch>

    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/stories/:id" component={StoriesContainer} />
    <Route exact path="/creators" component={CreatorsContainer} />
    <Route exact path="/creators/:id" component={SingleCreatorContainer} />

    {/* <Redirect to="/404" /> */}
  </Switch>
);
export default Routes;
