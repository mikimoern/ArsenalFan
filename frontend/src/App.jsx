import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from './ScrollToTop.js'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import PlayersPage from "./pages/PlayersPage";
import AboutPage from "./pages/AboutPage";
import VideoPage from "./pages/VideoPage";
import TablePage from "./pages/TablePage";
import SingleNewsPage from "./pages/SingleNewsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<SingleNewsPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
