import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HelloWorld } from '../pages/HelloWorld';
import { Map } from '../pages/Map';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HelloWorld} />
        <Route path="/home" exact component={Map} />
      </Switch>
    </BrowserRouter>
  );
};
