import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FavoriteBooksPage from "./pages/FavoriteBooksPage/FavoriteBooksPage";
import BookPage from "./pages/BookPage/BookPage";

const routes =[
    {
        path:'/',
        exact: true,
        main: () =><HomePage/>

    },
    {
        path:'/favorite-books',
        exact: true,
        main: () =><FavoriteBooksPage/>
    },
    {
        path:'/articles/:id',
        exact: true,
        main: ({match, history}) =><BookPage match={match} history={history}/>
    },
    {
        path:'',
        exact: false,
        main: () =><NotFoundPage/>
    }
];
export default routes;