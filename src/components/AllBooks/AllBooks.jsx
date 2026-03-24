import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from '../BookCard/BookCard';

const AllBooks = () => {

    const allBooks = useLoaderData();
    return (
        <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto my-12 md:my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                allBooks.map(book => <BookCard book = {book}></BookCard>)
            }
        </div>
    );
};

export default AllBooks;