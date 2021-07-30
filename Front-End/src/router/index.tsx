import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
