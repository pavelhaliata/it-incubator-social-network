import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss'
import { Blogpage } from './pages/Blogpage/Blogpage';
import { Layout } from './components/Layout';
import Dialogs, { MessageDataPropsType } from './pages/Profilepage/Dialogs/Dialogs';
import { Friends, PersonPropsType } from './pages/Profilepage/Friends/Friends';
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

	let [person, setPerson] = useState<Array<PersonPropsType>>([
		{
			backgroudImg: 'https://html.crumina.net/html-olympus/img/friend1.webp',
			avatar: 'https://html.crumina.net/html-olympus/img/avatar1.webp',
			name: 'Nicholas Grissom',
			country: 'San Francisco, CA',
		},
		{
			backgroudImg: 'https://html.crumina.net/html-olympus/img/friend2.webp',
			avatar: 'https://html.crumina.net/html-olympus/img/avatar2.webp',
			name: 'Marina Valentine',
			country: 'Long Island, NY',
		},
		{
			backgroudImg: 'https://html.crumina.net/html-olympus/img/friend3.webp',
			avatar: 'https://html.crumina.net/html-olympus/img/avatar3.webp',
			name: 'Nicholas Grissom',
			country: 'Los Angeles, CA',
		},
		{
			backgroudImg: 'https://html.crumina.net/html-olympus/img/friend4.webp',
			avatar: 'https://html.crumina.net/html-olympus/img/avatar4.webp',
			name: 'Chris Greyson',
			country: 'Austin, TX',
		},
	])


	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout />}>
					<Route path='/*' element={<Profilepage />}>
						<Route path='dialogs' element={<Dialogs messageData={messageData} />} />
						<Route path='friends' element={<Friends person={person} />} />
					</Route>
					<Route path='blogpage' element={<Blogpage />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
