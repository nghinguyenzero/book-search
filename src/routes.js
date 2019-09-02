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
        path:'/books/:id',
        exact: true,
        main: ({match, history}) =><BookPage match={match}/>
    },
    {
        path:'',
        exact: false,
        main: () =><NotFoundPage/>
    }
];
export default routes;