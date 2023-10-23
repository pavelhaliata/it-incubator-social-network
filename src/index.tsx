import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../src/styles/global.scss'
import store from './store-redux/redux-store'
import { Provider } from 'react-redux'
import { AppContainer } from './app/AppContainer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>,
)
