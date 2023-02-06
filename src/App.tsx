import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import Dialogs, { MessagePropsType } from './pages/Profilepage/Dialogs/Dialogs';
import { Friends, PersonPropsType } from './pages/Profilepage/Friends/Friends';
import ProfilePage from './pages/Profilepage/Profilepage';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import { BlogPage, PostsType } from './pages/Blogpage/Blogpage';
import { MessageType } from './redax/state';


type AppPropsType = {
	messageData: Array<MessageType>
	personData: Array<PersonPropsType>
	postsData: Array<PostsType>
	addNewPost: () => void
	updateNewPostText: (value: string) => void
	newPostTextData: string
}

function App({ messageData, personData, postsData, addNewPost, newPostTextData, updateNewPostText }: AppPropsType) {
	
	const [statePage, setStatePage] = useState<string>('')

	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout statePage={statePage} />}>
					<Route path='/*' element={<ProfilePage setStatePage={setStatePage} />}>
						<Route path='dialogs' element={<Dialogs messageData={messageData} />} />
						<Route path='friends' element={<Friends personData={personData} />} />
					</Route>
					<Route path='blogpage'
						element={<BlogPage
							setStatePage={setStatePage}
							postsData={postsData}
							addNewPost={addNewPost}
							newPostTextData={newPostTextData}
							updateNewPostText={updateNewPostText} />}
					/>
					<Route path='weather' element={<WeatherPage setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
