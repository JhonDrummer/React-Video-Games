import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import GamePage from './components/GamePage';
// import Games from './components/Games';
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
          <Route exact path="/" component={Games} />
          <Route path="/my-games/:type" component={Games} />
          <Route path="/game-details/:id" component={GamePage} />
          <Route path="/genre/:idGenre/:genre" component={Games} />
          <Route path="/platform/:idPlatform/:platform" component={Games} />
          <Route path="/tag/:idTag/:tag" component={Games} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
