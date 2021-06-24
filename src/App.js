import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './components/Menu';
import Games from './pages/Games';
import GamePage from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  );
}

const Content = () => {
  return (
    <div className="main">
      <main>
        <Switch>
          <Route exact path="/:page_number?" component={Games} />
          <Route path="/my-games/:type" component={Games} />
          <Route path="/game-details/:id" component={GamePage} />
          <Route path="/genre/:idGenre/:genre/:page_number?" component={Games} />
          <Route path="/platform/:idPlatform/:platform/:page_number?" component={Games} />
          <Route path="/tag/:idTag/:tag/:page_number?" component={Games} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
