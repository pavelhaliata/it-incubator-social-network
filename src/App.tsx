import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss'
import { Blogpage } from './components/Blogpage/Blogpage';
import { Layout } from './components/Layout';
import Dialogs from './components/Main/Dialogs/Dialogs';
import { Friends } from './components/Main/Friends/Friends';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='Blogpage' element={<Blogpage />}/>
          <Route path='Main' element={<Main />}/>
          <Route path='friends' element={<Friends />}/>
          <Route path='dialogs' element={<Dialogs />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
