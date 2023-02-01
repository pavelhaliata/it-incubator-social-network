import { Route, Routes } from 'react-router-dom';
import { Blogpage } from './pages/Blogpage/Blogpage';
import { Layout } from './components/Layout';
import Dialogs, { MessageDataPropsType } from './pages/Profilepage/Dialogs/Dialogs';
import { Friends, PersonPropsType } from './pages/Profilepage/Friends/Friends';
import Profilepage from './pages/Profilepage/Profilepage';
import { useState } from 'react';
import { Weather } from './pages/Weather/Weather';

type AppPropsType = {
	messageData?: Array<MessageDataPropsType>
	personData?: Array<PersonPropsType>
}

function App({ messageData,personData }: AppPropsType) {

	const [statePage, setStatePage] = useState<string>('')

	return (
		<>
			<Routes>
				<Route path='/*' element={<Layout statePage={statePage} />}>
					<Route path='/*' element={<Profilepage setStatePage={setStatePage} />}>
						<Route path='dialogs' element={<Dialogs messageData={messageData} />} />
						<Route path='friends' element={<Friends personData={personData} />} />
					</Route>
					<Route path='blogpage' element={<Blogpage setStatePage={setStatePage} />} />
					<Route path='weather' element={<Weather setStatePage={setStatePage} />} />
				</Route>
			</Routes>
		</>

	);
}

export default App;
