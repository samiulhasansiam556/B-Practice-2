import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import Home from "./Components/Home/Home"
import Update from "./Components/Update/Update"
import Add from "./Components/Add/Add"
import {Toaster} from "react-hot-toast"


function App() {

   const route = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/add',
      element: <Add />,
    },
    {
      path: '/update/:id',
      element: <Update/>
    }

   ])


  return (
     <div>
       <RouterProvider router={route}></RouterProvider>
       <Toaster/>
      </div>
  )
}

export default App
