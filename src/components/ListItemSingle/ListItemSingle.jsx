import React from 'react';
import { FaBookReader, FaRegHeart } from 'react-icons/fa';
import { FiMapPin } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from 'react-router';

const ListItemSingle = ({ book, onDelete, handleMove, addToReadlist, listName }) => {
    const { id, name, author, rating, relevant_tag, category, number_of_pages, publisher, year_of_publishing, image } = book;

    return (
        <div className='flex flex-col lg:flex-row gap-6 border p-6 rounded-xl relative'>
            {
                (listName === "wishlist") ?

                    <div className='absolute top-6 right-6 text-xl'>
                        <div
                            className='bg-amber-200 hover:bg-green-700 hover:text-white p-2 rounded-md cursor-pointer transition'
                            title='Mark as Read'
                            onClick={() => { addToReadlist(id), handleMove(id) }}>
                            <FaBookReader />
                        </div>
                    </div>

                    :

                    ""
            }
            <div className='w-48'>
                <img src={image} alt="" />
            </div>
            <div className=''>
                <div className='flex flex-col gap-6 pb-6 border-b'>
                    <h1 className='heading text-3xl font-bold'>{name}</h1>
                    <span>By: {author}</span>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='flex items-center gap-2'>
                            <span>Tag</span>
                            {relevant_tag.map((tag, index) => <span className='bg-green-100 px-2 rounded-xl text-green-600 text-sm' key={index}>#{tag}</span>)}
                        </div>
                        <div className='flex items-center gap-2'>
                            <FiMapPin />
                            <span>Year of Publishing: {year_of_publishing}</span>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='flex items-center gap-2'>
                            <IoPeopleOutline />
                            <span>Publisher: {publisher}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoDocumentTextOutline />
                            <span>Page: {number_of_pages}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-6 py-6'>
                    <button className='bg-blue-200 p-4 rounded-xl'>Category: {category}</button>
                    <button className='bg-red-200 p-4 rounded-xl'>Rating: {rating}</button>
                    <button className='bg-green-200 p-4 rounded-xl cursor-pointer'><NavLink to={`/bookdetails/${id}`}>View Details</NavLink></button>
                    <button onClick={() => onDelete(id)} className='bg-amber-200 p-4 rounded-xl cursor-pointer'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ListItemSingle;