import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { NewsPage } from '../pages/NewsPage/NewsPage'
import { WeatherPageContainer } from '../pages/WeatherPage/WeatherPageContainer'
import { UsersContainer } from '../pages/MainPage/Users/UsersContainer'
import { MainPageContainer } from '../pages/MainPage/MainPageContainer'
import { UserPageContainer } from '../pages/MainPage/UserProfile/UserProfileContainer'
import { DialogsContainer } from '../pages/MainPage/Dialogs/DialogsContainer'
import { BlogPageContainer } from '../pages/Blogpage/BlogPageContainer'
import { ProfileContainer } from '../pages/profile/ProfileContainer'
import { LoginContainer } from '../pages/login/LoginContainer'
import { UpdateProfileContainer } from '../components/updateProfile/UpdateProfileContainer'

function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<LoginContainer />} />
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<MainPageContainer />}>
                        <Route path='profile' element={<ProfileContainer />} />
                        <Route path='/edit-profile' element={<UpdateProfileContainer />} />
                        <Route path='dialogs' element={<DialogsContainer />} />
                        <Route path='friends' element={<UsersContainer />} />
                        <Route path='user/:id' element={<UserPageContainer />} />
                    </Route>
                    <Route path='blog-page' element={<BlogPageContainer />} />
                    <Route path='weather' element={<WeatherPageContainer />} />
                    <Route path='news' element={<NewsPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
