import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import ProfilePage from './pages/Profilepage/Profilepage';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import { StateDataType} from './redux/store';
import { Newspage } from './pages/Newspage/Newspage';
import {DialogsContainer} from "./pages/Profilepage/Dialogs/DialogsContainer";
import {FriendsContainer} from "./pages/Profilepage/Friends/FriendsContainer";
import {ActionCreatorsTypes} from "./StoreContext";
import {ReduxStateType} from "./redux/redux-store";
import {Store} from "redux";
import { BlogPageContainer } from './pages/Blogpage/BlogPageContainer';


type AppPropsType = {
	dispatch: (action: ActionCreatorsTypes) => void
	state: StateDataType
	store: Store<ReduxStateType, ActionCreatorsTypes>
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
					<Route path='blog-page' element={<BlogPageContainer store={store}/>}/>
					<Route path='weather' element={<WeatherPage setStatePage={setStatePage} />} />
					<Route path='news' element={<Newspage setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
