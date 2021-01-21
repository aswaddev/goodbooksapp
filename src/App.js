import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './partials/Layout';
import Books from './pages/Books';
import Book from './pages/Book';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Books} />
          <Route exact path='/books/:id' component={Book} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
