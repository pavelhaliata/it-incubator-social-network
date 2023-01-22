import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss'
import { Blogpage } from './pages/Blogpage/Blogpage';
import { Layout } from './components/Layout';
import Dialogs, { MessageDataPropsType } from './pages/Profilepage/Dialogs/Dialogs';
import { Friends } from './pages/Profilepage/Friends/Friends';
import Profilepage from './pages/Profilepage/Profilepage';
import { useState } from 'react';

// type propsType={
// 	messageData: Array<MessageDataPropsType>
// }




function App() {

  let [messageData, setMessageData] = useState<Array<MessageDataPropsType>>(
		[
		{
			avatar: 'https://html.crumina.net/html-olympus/img/author-main1.webp',
			name: 'James Spiegel',
			message: 'Hi ! What are you doing? Are you sliping now? :)',
			time: '22:00',
		},
		{
			avatar: 'https://html.crumina.net/html-olympus/img/avatar1.webp',
			name: 'Nicholas Grissom',
			message: 'Hi! Bro)',
			time: '22:00',
		},
		]
		
	)


  return (
    <>
      <Routes>
        <Route path='/*' element={<Layout />}>
          <Route path='/*' element={<Profilepage />}>
            <Route path='dialogs' element={<Dialogs  messageData={messageData}/>} />
            <Route path='friends' element={<Friends />} />
          </Route>
          <Route path='blogpage' element={<Blogpage />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
