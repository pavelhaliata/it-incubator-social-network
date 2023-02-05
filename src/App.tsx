import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import Dialogs, { MessagePropsType } from './pages/Profilepage/Dialogs/Dialogs';
import { Friends, PersonPropsType } from './pages/Profilepage/Friends/Friends';
import ProfilePage from './pages/Profilepage/Profilepage';
import { WeatherPage } from './pages/WeatherPage/Weather';
import { BlogPage, PostsType } from './pages/BlogPage/Blogpage';
import { MessageType } from './redax/state';


type AppPropsType = {
	messageData:  Array<MessageType>
	personData: Array<PersonPropsType>
	postsData: Array<PostsType>
	addPost: () => void
	newPostData: string
}

function App(props: AppPropsType) {
const { messageData, personData, postsData, addPost, newPostData } = props
	const [statePage, setStatePage] = useState<string>('')
console.log(props)
	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout statePage={statePage} />}>
					<Route path='/*' element={<ProfilePage setStatePage={setStatePage} />}>
						<Route path='dialogs' element={<Dialogs messageData={messageData} />} />
						<Route path='friends' element={<Friends personData={personData} />} />
					</Route>
					<Route path='blogpage' element={<BlogPage setStatePage={setStatePage} postsData={postsData} addPost={addPost} newPostData={newPostData} />} />
					<Route path='weather' element={<WeatherPage setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
