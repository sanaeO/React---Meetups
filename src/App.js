import { Route , Routes , BrowserRouter} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return ( 
  // localhost:3000/test

    <Layout>
    <Routes>

        <Route path="/" exact element={<AllMeetupsPage/>} ></Route>
        <Route path="/new-meetup" exact element={<NewMeetupPage />}></Route>
        <Route path="/favorites" exact element={<FavoritesPage />} ></Route>

    </Routes>
    </Layout>

  );
}

export default App;
