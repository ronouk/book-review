import React from 'react';
import ListItemSingle from '../ListItemSingle/ListItemSingle';

const ReadList = ({displayReadList}) => {

    return (
        <div className='flex flex-col gap-6'>
            {
                displayReadList.map((book, index) => <ListItemSingle key={index} book = {book}></ListItemSingle>)
            }
        </div>
    );
};

export default ReadList;