import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './styles/app.css';
import Home from './pages/home';
import NotFound from './pages/not-found';
import StockDetails from './pages/stockDetails';

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/details/:symbol' component={StockDetails} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
