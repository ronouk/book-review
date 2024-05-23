import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Banner from './components/Banner/Banner';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import Books from './components/Books/Books';
import Read from './components/Read/Read';
import Wishlist from './components/Wishlist/Wishlist';
import SingleBook from './components/SingleBook/SingleBook';
import Footer from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: '/',
        element: [
        <Banner></Banner>,
        <Books></Books>
      ]
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/read',
        element: <Read></Read>
      },
      {
        path: '/wishlist',
        element: <Wishlist></Wishlist>
      },
      {
        path: '/:id',
        element: <SingleBook></SingleBook>,
        loader: () => fetch('/books.json'),
        
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
