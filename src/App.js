import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navber from "./Pages/Navber/Navber";


function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/login' element={<Login/>} />

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
