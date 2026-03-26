import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from '../BookCard/BookCard';
import { Helmet } from 'react-helmet-async';

const AllBooks = () => {

    const allBooks = useLoaderData();
    return (
        <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto mb-12 md:mb-24">
            <h2 className="bg-[#1313130D] rounded-xl py-12 text-3xl font-bold text-center mb-12">All Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    allBooks.map(book =>
                        <BookCard
                            book={book}
                            key={book.id}
                        ></BookCard>)
                }

            </div>

            <Helmet>
                <title>All Books</title>
            </Helmet>

        </div>
    );
};

export default AllBooks;