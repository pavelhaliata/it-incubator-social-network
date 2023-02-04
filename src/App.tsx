import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import Dialogs, { MessagePropsType } from './pages/Profilepage/Dialogs/Dialogs';
import { Friends, PersonPropsType } from './pages/Profilepage/Friends/Friends';
import ProfilePage from './pages/Profilepage/Profilepage';
import { WeatherPage } from './pages/WeatherPage/Weather';
import { BlogPage, PostsType } from './pages/BlogPage/Blogpage';


type AppPropsType = {
	messageData?: Array<MessagePropsType>
	personData?: Array<PersonPropsType>
	postsData?: Array<PostsType>
	addPost?: (value: string) => void
}

function App({ messageData, personData, postsData, addPost }: AppPropsType) {

	const [statePage, setStatePage] = useState<string>('')

	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout statePage={statePage} />}>
					<Route path='/*' element={<ProfilePage setStatePage={setStatePage} />}>
						<Route path='dialogs' element={<Dialogs messageData={messageData} />} />
						<Route path='friends' element={<Friends personData={personData} />} />
					</Route>
					<Route path='blogpage' element={<BlogPage setStatePage={setStatePage} postsData={postsData} addPost={addPost} />} />
					<Route path='weather' element={<WeatherPage setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
