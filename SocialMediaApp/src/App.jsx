import Login from './pages/login/login';
import Register from './pages/register/Register';
import './style.scss';
import {
  createBrowserRouter,
  Route,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftBar/Leftbar';
import Rightbar from './components/rightBar/Rightbar';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from "react";
import { AuthContext } from './context/authContext';
// import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light" }`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    )
  };

   const ProtectedRoute = ({ children }) => {
     if (!currentUser) {
       return <Navigate to="/login" />
     }
     return children;
   }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <ProtectedRoute>
          <Layout />
          </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
