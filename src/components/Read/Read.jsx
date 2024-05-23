import React from 'react';
import { json } from 'react-router-dom';
import ReadlistSingle from '../ReadlistSingle/ReadlistSingle';

const Read = ({allBooks}) => {
    const {name} = allBooks;
    console.log(allBooks[0]);
    console.log(allBooks[0].name);
    const savedReadList = localStorage.getItem('readlist')
    const parsedReadlist = JSON.parse(savedReadList);
    console.log(parsedReadlist, typeof parsedReadlist);


    return (
        <div className='flex flex-col gap-6'>
            {
                parsedReadlist.map(readlistBookId => <ReadlistSingle book = {allBooks[readlistBookId]}></ReadlistSingle>)
            }
        </div>
    );
};

export default Read;