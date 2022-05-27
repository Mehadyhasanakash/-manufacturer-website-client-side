import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/Login/SignIn";
import Navber from "./Pages/Navber/Navber";
import Purchase from "./Pages/Purchase/Purchase";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Myoder from "./Pages/Myoder/Myoder";
import Review from "./Pages/Review/Review";
import Alluser from "./Pages/Alluser/Alluser";
import AddProducts from "./Pages/AddProducts/AddProducts";
import Payment from "./Pages/Payment/Payment";
import NotFoundPage from "./Components/NotFoundPage";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import MyProfile from "./Pages/MyPortfolio/MyProfile";



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
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/MyPortfolio' element={<MyPortfolio />} />
        <Route path='/myprofile' element={<MyProfile />} />

        <Route path='/purchase' element={

          <PrivateRoute>
            <Purchase />
          </PrivateRoute>

        } />



        <Route path="/dashboard" element={
          <PrivateRoute>


            <Dashboard></Dashboard>


          </PrivateRoute>

        }>

          <Route index element={<Myoder></Myoder>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="users" element={<Alluser/>}></Route>
          <Route path="addproduct" element={<AddProducts/>}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>


        </Route>

      </Routes>
      <ToastContainer />

     

    </div>
  );
}

export default App;
