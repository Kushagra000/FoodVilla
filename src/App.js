import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Router, RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntDetails from "./components/RestrauntDetails";
import Profile from "./components/Profile";


const AppLAyout = ()=>{
    return(
        <React.Fragment>
        <Header/>
        <Outlet/>
        {/* <About/>
        <Body/>
        <Contact/>
        */}
        <Footer/>
        </React.Fragment>
    );
};
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLAyout/>,
        errorElement: <Error/>,
        children:[
            {
                path:'/',
                element:<Body/>,
            },
            {
                path:'/about',
                element:<About/>,
                children:[
                {
                    path:'profile',
                    element:<Profile />,
                },
            ],
            },
            {
                path:'/Contact',
                element:<Contact/>,
            },
            {
                path:'/restraunt/:resId',
                element:<RestrauntDetails/>,
            },
        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 