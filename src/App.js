import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css';
import Fess from "./Pages/Fess";
import Coins from "./Pages/Coins";
import Blogs from "./Pages/Blogs";
import Plugins from "./Pages/Plugins";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />  // ✅ Render the Home component here
    },
  

        {
      path: "fess",
      element: <Fess />
    },

         {
      path: "coins",
      element: <Coins />
    },


          {
      path: "blogs",
      element: <Blogs />
    },

    
          {
      path: "plugins",
      element: <Plugins />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
