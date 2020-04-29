import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import StoriesContainer from '../containers/StoriesContainer'
import HomeContainer from '../containers/HomeContainer'
import CreatorsContainer from '../containers/CreatorsContainer'
import SingleCreatorContainer from '../containers/SingleCreatorContainer'
import SingleComicContainer from '../containers/SingleComicContainer'


const Routes = () => (
  <Switch>

    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/stories/:id" component={StoriesContainer} />
    <Route exact path="/creators" component={CreatorsContainer} />
    <Route exact path="/creators/:id" component={SingleCreatorContainer} />
    <Route exact path="/comic/:id" component={SingleComicContainer} />
  </Switch>
);
export default Routes;
