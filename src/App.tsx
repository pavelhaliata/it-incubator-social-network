import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss'
import { Blogpage } from './components/Blogpage/Blogpage';
import { Layout } from './components/Layout';
import Dialogs from './components/Profilepage/Dialogs/Dialogs';
import { Friends } from './components/Profilepage/Friends/Friends';
import Profilepage from './components/Profilepage/Profilepage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Layout />}>
          <Route path='/*' element={<Profilepage />}>
            <Route path='dialogs' element={<Dialogs />} />
            <Route path='friends' element={<Friends />} />
          </Route>
          <Route path='blogpage' element={<Blogpage />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
