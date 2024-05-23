import React from 'react';
import { json } from 'react-router-dom';

const Read = ({allBooks}) => {
    const {name} = allBooks;
    // console.log(allBooks[0]);
    // console.log(allBooks[0].name);
    const savedReadList = localStorage.getItem('readlist')
    const parsedReadlist = JSON.parse(savedReadList);
    console.log(parsedReadlist, typeof parsedReadlist);


    return (
        <div>
            {
                parsedReadlist.map(readlistBookId => <h1>{allBooks[readlistBookId].name}</h1>)
            }
        </div>
    );
};

export default Read;