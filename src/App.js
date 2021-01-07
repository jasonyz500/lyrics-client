import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SongDetails from './components/song-details';
import Nav from './components/nav';
import 'gestalt/dist/gestalt.css';

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path='/lyrics/:id' component={SongDetails}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
