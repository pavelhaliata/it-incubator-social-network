import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Newspage } from "../pages/NewsPage/Newspage";
import { DialogsContainer } from "../pages/Profilepage/Dialogs/DialogsContainer";
import { FriendsContainer } from "../pages/Profilepage/Friends/UsersContainer";
import { BlogPageContainer } from "../pages/Blogpage/BlogPageContainer";
import { MainPageContainer } from "../pages/Profilepage/MainPageContainer";
import { WeatherPageContainer } from "../pages/WeatherPage/WeatherPageContainer";
import { UserPageContainer } from "../pages/Profilepage/UserProfile/UserProfileContainer";

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
