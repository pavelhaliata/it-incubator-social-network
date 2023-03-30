import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import Dialogs from './pages/Profilepage/Dialogs/Dialogs';
import { Friends } from './pages/Profilepage/Friends/Friends';
import ProfilePage from './pages/Profilepage/Profilepage';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import {ActionType, StateDataType,} from './redax/state';
import {BlogPage} from "./pages/BlogPage/Blogpage";

type AppPropsType = {
	dispatch: (action: ActionType) => void
	state: StateDataType
}

function App({ dispatch, state}: AppPropsType) {

	const [statePage, setStatePage] = useState<string>('')

	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout statePage={statePage} />}>
					<Route path='/*' element={<ProfilePage setStatePage={setStatePage} />}>
						<Route path='dialogs' element={<Dialogs state={state.profilePage} dispatch={dispatch}/>} />
						<Route path='friends' element={<Friends state={state.personsData} />} />
					</Route>
					<Route path='blog-page' element={<BlogPage setStatePage={setStatePage} state={state.blogPage} dispatch={dispatch}/>}/>
					<Route path='weather' element={<WeatherPage setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
