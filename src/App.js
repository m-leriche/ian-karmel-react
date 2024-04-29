// import favicon from "../public/favicon.ico";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Layout from "./pages/layout.js";
import Media from './pages/media.js';
import Shows from './pages/tourdates.js';
import Page404 from './pages/404.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="media" element={<Media />} />
          <Route path="tourdates" element={<Shows />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
