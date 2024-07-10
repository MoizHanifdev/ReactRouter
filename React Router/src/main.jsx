import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Router, RouterProvider} from 'react-router-dom';
import Route from './Route.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx';
import Github, { GithubInfoLoader } from './Components/Github/Github.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Route/>,
    children : [
      {
        path:"",
        element : <Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path : "contact",
        element:<Contact/>
      },
      {
        path : "user/:userid",
        element : <User/>
      },
      {
        path : "github",
        element : <Github/>,
        loader : GithubInfoLoader
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/' element = {<Route/>}>
//       <Route path = ' ' element = {<Home/>}/>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
