import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

import Donation from "../Donation/Donation";
import Home from "../component/pages/Home/Home";
import Statistics from "../component/pages/Statistics/Statistics";
import OneCard from "../component/pages/OneCard/OneCard";
import Error from "../component/pages/Error/Error";



const myCreatedRoute = createBrowserRouter([
    {
path:"/",
element:<MainLayout></MainLayout>,
errorElement:<Error></Error>,
children:[
    {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch ('/data.json')
    },
    {
        path:"/donation",
        element:<Donation></Donation>
    },
    {
        path:"/statistic",
        element:<Statistics></Statistics>
    },
    {
        path:"/card/:id",
        element:<OneCard></OneCard>,
        loader:()=> fetch('/data.json')
    }
]
    },
])

export default myCreatedRoute;