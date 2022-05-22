import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Navber from "./Pages/Navber/Navber";


function App() {
  return (
    <div className="px-10">
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blog />} />

      </Routes>

    </div>
  );
}

export default App;
