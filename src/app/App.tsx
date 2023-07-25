import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { NewsPage } from "../pages/NewsPage/NewsPage"
import { WeatherPageContainer } from "../pages/WeatherPage/WeatherPageContainer";
import {FriendsContainer} from "../pages/MainPage/Users/UsersContainer";
import {MainPageContainer} from "../pages/MainPage/MainPageContainer";
import {UserPageContainer} from "../pages/MainPage/UserProfile/UserProfileContainer";
import {DialogsContainer} from "../pages/MainPage/Dialogs/DialogsContainer";
import {BlogPageContainer} from "../pages/Blogpage/BlogPageContainer";

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
          <Route path="news" element={<NewsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
