import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import ProfilePage from './pages/Profilepage/Profilepage';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import {ActionCreatorType, StateDataType,} from './redux/store';
import { Newspage } from './pages/Newspage/Newspage';
import {BlogPageContainer} from "./pages/BlogPage/BlogPageContainer";
import {DialogsContainer} from "./pages/Profilepage/Dialogs/DialogsContainer";
import {FriendsContainer} from "./pages/Profilepage/Friends/FriendsContainer";


type AppPropsType = {
	dispatch: (action: ActionCreatorType) => void
	state: StateDataType
	store: any
}

function App({store}: AppPropsType) {

	const [statePage, setStatePage] = useState<string>('')

	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout statePage={statePage} />}>
					<Route path='/*' element={<ProfilePage setStatePage={setStatePage} />}>
						<Route path='dialogs' element={<DialogsContainer />} />
						<Route path='friends' element={<FriendsContainer store={store}/>} />
					</Route>
					<Route path='blog-page' element={<BlogPageContainer setStatePage={setStatePage} store={store}/>}/>
					<Route path='weather' element={<WeatherPage setStatePage={setStatePage} />} />
					<Route path='news' element={<Newspage setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
