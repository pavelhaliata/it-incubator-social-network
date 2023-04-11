import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import ProfilePage from './pages/Profilepage/Profilepage';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import { Newspage } from './pages/Newspage/Newspage';
import {DialogsContainer} from "./pages/Profilepage/Dialogs/DialogsContainer";
import {FriendsContainer} from "./pages/Profilepage/Friends/FriendsContainer";
import { BlogPageContainer } from './pages/Blogpage/BlogPageContainer';

function App() {

	const [statePage, setStatePage] = useState<string>('')

	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout statePage={statePage} />}>
					<Route path='/*' element={<ProfilePage setStatePage={setStatePage} />}>
						<Route path='dialogs' element={<DialogsContainer />} />
						<Route path='friends' element={<FriendsContainer />} />
					</Route>
					<Route path='blog-page' element={<BlogPageContainer />}/>
					<Route path='weather' element={<WeatherPage setStatePage={setStatePage} />} />
					<Route path='news' element={<Newspage setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
