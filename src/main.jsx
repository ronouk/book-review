import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx'
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx"
import SingleBook from './components/SingleBook/SingleBook.jsx';
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx"
import AllBooks from './components/AllBooks/AllBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch('/books.json');

          if (!res.ok) {
            throw new Error("Faild to fetch data")
          }
          return await res.json();
        },
        hydrateFallbackElement: <span>Data loading...</span>
      },

      // load all books

      {
        path: "/allbooks",
        Component: AllBooks,
        loader: async () => {
          const allbookRes = await fetch("/books.json");

          if (!allbookRes.ok) {
            throw new Error("Failed to fetch data")
          }

          return await allbookRes.json();
        },

        hydrateFallbackElement: <span>Data Loading...</span>
      },

      // all books for readlist and wishlist

      {
        path: "/listed-books",
        Component: ListedBooks,
        loader: async () => {
          const res = await fetch('/books.json');

          if (!res.ok) {
            throw new Error("Faild to fetch data")
          }
          return await res.json();
        }
      },

      // single book details

      {
        path: "/bookdetails/:id",
        Component: SingleBook,
        loader: async ({ params }) => {
          const res = await fetch("/books.json");

          if (!res.ok) {
            throw new Error("Failed to fetch data")
          }

          const allBooks = await res.json();

          const clickedBook = allBooks.find(book => book.id === parseInt(params.id));

          if (!clickedBook) {
            throw new Error("Book not found")
          }
          return clickedBook
        },

        hydrateFallbackElement: <span>Data loading...</span>
      },

      {
        path: "pages-to-read",
        Component: PagesToRead,
        loader: async () => {
          const response = await fetch("/books.json")

          if (!response.ok) {
            throw new Error("Failed to load data")
          }

          return await response.json();
        }
      },

      {
        path: '*',
        Component: ErrorPage,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
)
