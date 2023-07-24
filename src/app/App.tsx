import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Newspage } from "../pages/NewsPage/Newspage";
import { WeatherPageContainer } from "../pages/WeatherPage/WeatherPageContainer";
import {FriendsContainer} from "../pages/MainPage/Users/UsersContainer";
import {MainPageContainer} from "../pages/MainPage/MainPageContainer";
import {UserPageContainer} from "../pages/MainPage/UserProfile/UserProfileContainer";
import {BlogPageContainer} from "../pages/BlogPage/BlogPageContainer";
import {DialogsContainer} from "../pages/MainPage/Dialogs/DialogsContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPageContainer />}>
            <Route path="dialogs" element={<DialogsContainer />} />
            <Route path="friends" element={<FriendsContainer />} />
            <Route path="user/:id" element={<UserPageContainer />} />
          </Route>
          <Route path="blog-page" element={<BlogPageContainer />} />
          <Route path="weather" element={<WeatherPageContainer />} />
          <Route path="news" element={<Newspage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
