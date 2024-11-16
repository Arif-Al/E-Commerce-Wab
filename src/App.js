import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Header from './Components/Header/Appbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import SignUp from './Components/Signup/SignUp';




function App() {
  const router = createBrowserRouter([
    {
      path:"/",element:< Header/>,errorElement:<h4> This page is not Found </h4>,

    },
    {
      path:"Signin",element:< Signin/>
    },
    {
      path:"SignUp",element:<SignUp/>
    }
  ])
  return (
    <div className="App">
   
{/* <Header/> */}


     <RouterProvider router={router} />
    </div>
  );
}

export default App;
