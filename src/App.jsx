import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Router,
} from "react-router-dom";
import Root from "./Component/Index";
import Home from "./Component/Home"
import Features from "./Component/Features";
import About from "./Component/About";


const App = () => {
 
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/Features" element={<Features/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
