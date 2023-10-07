import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Root from './routes/root.jsx';
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ErrorPage from './error-page.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import UserInfoPage from './pages/UserInfoPage.jsx';
import PrivateRoute from './auth/PrivateRoute.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="userinfo" element={<UserInfoPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
