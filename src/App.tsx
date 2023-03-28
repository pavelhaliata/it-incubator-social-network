import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import Dialogs from './pages/Profilepage/Dialogs/Dialogs';
import { Friends } from './pages/Profilepage/Friends/Friends';
import ProfilePage from './pages/Profilepage/Profilepage';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import { MessageType, PersonType, PostsType } from './redax/state';
import { BlogPage } from './pages/Blogpage/Blogpage';




type AppPropsType = {
	messageData: Array<MessageType>
	personData: Array<PersonType>
	postsData: Array<PostsType>
	newPostTextData: string
	dispatch: (action: object) => void
	store: any
}

function App({ messageData, personData, postsData, newPostTextData,  dispatch, store}: AppPropsType) {

	const [statePage, setStatePage] = useState<string>('')

	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout statePage={statePage} />}>
					<Route path='/*' element={<ProfilePage setStatePage={setStatePage} />}>
						<Route path='dialogs' element={<Dialogs messageData={messageData} store={store}/>} />
						<Route path='friends' element={<Friends personData={personData} />} />
					</Route>
					<Route path='blogpage'
						   	element={<BlogPage
							setStatePage={setStatePage}
							postsData={postsData}
							newPostTextData={newPostTextData}
							/>}
					/>
					<Route path='weather' element={<WeatherPage setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
