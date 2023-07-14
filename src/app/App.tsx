import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Newspage } from "../pages/NewsPage/Newspage";
import { DialogsContainer } from "../pages/Profilepage/Dialogs/DialogsContainer";
import { FriendsContainer } from "../pages/Profilepage/Friends/FriendsContainer";
import { BlogPageContainer } from "../pages/Blogpage/BlogPageContainer";
import { ProfilePageContainer } from "../pages/Profilepage/ProfilePageContainer";
import { WeatherPageContainer } from "../pages/WeatherPage/WeatherPageContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="/*" element={<ProfilePageContainer />}>
            <Route path="dialogs" element={<DialogsContainer />} />
            <Route path="friends" element={<FriendsContainer />} />
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
