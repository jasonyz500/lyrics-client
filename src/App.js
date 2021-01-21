import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Box } from 'gestalt';
import AddSong from './components/add-song';
import Nav from './components/nav';
import Home from './components/home';
import SongDetails from './components/song-details';
import About from './components/about';
import 'gestalt/dist/gestalt.css';

function App() {
  return (
    <Box maxWidth={1800}>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/lyrics/add' component={AddSong}/>
          <Route exact path='/lyrics/:id/edit' component={AddSong}/>
          <Route path='/lyrics/:id' component={SongDetails}/>
          <Route path='/about' component={About}/>
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
