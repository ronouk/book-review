import React from 'react';
import { FiMapPin } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

const WishlistSingle = ({book}) => {
    const { name, author, rating, relevant_tag, category, number_of_pages, publisher, year_of_publishing, image } = book;
    return (
        <div className='flex gap-6 border p-6 rounded-xl'>
        <div className='w-48'>
            <img src={image} alt="" />
        </div>
        <div>
            <div className='flex flex-col gap-6 pb-6 border-b'>
                <h1 className='heading text-3xl font-bold'>{name}</h1>
                <p>By: {author}</p>
                <div className='flex gap-6 items-center'>
                    <p>Tag </p>
                    <p className='flex items-center gap-2'>
                        {relevant_tag.map((tag, index) => <p className='bg-green-100 px-2 rounded-xl text-green-600 text-sm' key={index}>#{tag}</p>)}
                    </p>
                    <div className='flex items-center gap-2'>
                        <FiMapPin />
                        <p>Year of Publishing: {year_of_publishing}</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-2'>
                        <IoPeopleOutline />
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoDocumentTextOutline />
                        <p>Page: {number_of_pages}</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 py-6'>
                <p className='bg-blue-200 p-4 rounded-xl'>Category: {category}</p>
                <p className='bg-red-200 p-4 rounded-xl'>Rating: {rating}</p>
                <p className='bg-green-200 p-4 rounded-xl'>View Details</p>
            </div>
        </div>
    </div>
    );
};

export default WishlistSingle;