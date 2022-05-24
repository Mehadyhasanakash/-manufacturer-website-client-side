import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/Login/SignIn";
import Navber from "./Pages/Navber/Navber";
import Purchase from "./Pages/Purchase/Purchase";


function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />

        <Route path='/purchase' element={

          <PrivateRoute>
            <Purchase />
          </PrivateRoute>

        } />

      </Routes>
     

    </div>
  );
}

export default App;
