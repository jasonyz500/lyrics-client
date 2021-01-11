import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddSong from './components/add-song';
import Nav from './components/nav';
import SongDetails from './components/song-details';
import 'gestalt/dist/gestalt.css';

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path='/lyrics/add' component={AddSong}/>
          <Route exact path='/lyrics/edit/:id' component={AddSong}/>
          <Route path='/lyrics/:id' component={SongDetails}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
