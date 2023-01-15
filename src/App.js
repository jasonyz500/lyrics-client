import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from 'gestalt';
import AddSong from './components/add-song';
import Nav from './components/nav';
import Home from './components/home';
import SongDetails from './components/song-details';
import About from './components/about';
import 'gestalt/dist/gestalt.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'lyrics/add',
    element: <AddSong />
  },
  {
    path: 'lyrics/:id/edit',
    element: <AddSong />
  },
  {
    path: 'lyrics/:id',
    element: <SongDetails />
  },
  {
    path: 'about',
    element: <About />
  }
]);

function App() {
  return (
    <Box>
      <Nav />
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
